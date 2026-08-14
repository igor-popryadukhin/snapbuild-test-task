import { mount } from '@vue/test-utils'
import { defineComponent, h, ref } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useCountUp } from '../app/composables/useCountUp'

const CountUpHarness = defineComponent({
  setup() {
    const root = ref<HTMLElement | null>(null)
    const { display } = useCountUp(root, { end: 6, suffix: '×' })
    return () => h('strong', { ref: root }, display.value)
  },
})

class MockIntersectionObserver {
  static latest: MockIntersectionObserver | null = null
  private readonly callback: IntersectionObserverCallback
  private readonly elements: Element[] = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.latest = this
  }

  observe(el: Element): void { this.elements.push(el) }
  unobserve(): void {}
  disconnect(): void {}

  triggerIntersect(): void {
    this.callback(
      [{ isIntersecting: true, target: this.elements[0] } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

describe('useCountUp', () => {
  beforeEach(() => {
    MockIntersectionObserver.latest = null
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame'] })
    Object.defineProperty(window, 'IntersectionObserver', { value: MockIntersectionObserver, writable: true, configurable: true })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    delete (window as { IntersectionObserver?: unknown }).IntersectionObserver
  })

  it('counts from zero to the end value once the element enters the viewport', async () => {
    const wrapper = mount(CountUpHarness)
    expect(wrapper.text()).toBe('6×')

    const observer = MockIntersectionObserver.latest
    expect(observer).not.toBeNull()

    observer!.triggerIntersect()
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('0×')

    await vi.advanceTimersByTimeAsync(1600)
    expect(wrapper.text()).toBe('6×')
  })

  it('keeps the final value when reduced motion is preferred', async () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)
    const wrapper = mount(CountUpHarness)

    expect(wrapper.text()).toBe('6×')
    expect(MockIntersectionObserver.latest).toBeNull()

    await vi.advanceTimersByTimeAsync(2000)
    expect(wrapper.text()).toBe('6×')
  })
})
