import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCaseTabs } from '../app/data/landing'
import { useUseCaseCarousel } from '../app/composables/useUseCaseCarousel'

function mountCarousel(duration = 8000) {
  return mount(defineComponent({
    setup: () => useUseCaseCarousel(useCaseTabs, duration),
    template: '<div />',
  }))
}

describe('useUseCaseCarousel', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('advances cards and wraps through the complete tab cycle', async () => {
    vi.useFakeTimers()
    const wrapper = mountCarousel()

    await vi.advanceTimersByTimeAsync(8000)
    expect(wrapper.vm.activeTabIndex).toBe(0)
    expect(wrapper.vm.activeItemIndex).toBe(1)

    await vi.advanceTimersByTimeAsync(8000 * 19)
    expect(wrapper.vm.activeTabIndex).toBe(0)
    expect(wrapper.vm.activeItemIndex).toBe(0)
  })

  it('selects manually and restarts the full card duration', async () => {
    vi.useFakeTimers()
    const wrapper = mountCarousel()

    await vi.advanceTimersByTimeAsync(4000)
    wrapper.vm.select(3, 2)
    await vi.advanceTimersByTimeAsync(7999)
    expect(wrapper.vm.activeTabIndex).toBe(3)
    expect(wrapper.vm.activeItemIndex).toBe(2)

    await vi.advanceTimersByTimeAsync(1)
    expect(wrapper.vm.activeItemIndex).toBe(3)
  })

  it('cleans up its timer when the owner unmounts', () => {
    vi.useFakeTimers()
    const wrapper = mountCarousel()
    expect(vi.getTimerCount()).toBe(1)

    wrapper.unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('does not autoplay when reduced motion is requested', () => {
    vi.useFakeTimers()
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)

    const wrapper = mountCarousel()
    expect(vi.getTimerCount()).toBe(0)
    wrapper.unmount()
  })
})
