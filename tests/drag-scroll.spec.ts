import { mount } from '@vue/test-utils'
import { defineComponent, ref } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { useDragScroll } from '../app/composables/useDragScroll'

function pointerEvent(type: string, values: Partial<PointerEvent>): Event {
  const event = new Event(type, { bubbles: true, cancelable: true })
  Object.entries(values).forEach(([key, value]) => Object.defineProperty(event, key, { value }))
  return event
}

describe('useDragScroll', () => {
  it('scrolls horizontally while the primary pointer is dragged', async () => {
    const wrapper = mount(defineComponent({
      setup() {
        const scroller = ref<HTMLElement | null>(null)
        const { isDragging } = useDragScroll(scroller)
        return { isDragging, scroller }
      },
      template: '<div ref="scroller" />',
    }))
    const element = wrapper.element as HTMLElement
    element.scrollLeft = 100

    element.dispatchEvent(pointerEvent('pointerdown', { button: 0, clientX: 300, isPrimary: true, pointerId: 7 }))
    element.dispatchEvent(pointerEvent('pointermove', { clientX: 220, pointerId: 7 }))
    await wrapper.vm.$nextTick()

    expect(element.scrollLeft).toBe(180)
    expect(wrapper.vm.isDragging).toBe(true)

    element.dispatchEvent(pointerEvent('pointerup', { pointerId: 7 }))
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isDragging).toBe(false)
  })

  it('supports arrow-key scrolling', () => {
    const scrollBy = vi.fn()
    const wrapper = mount(defineComponent({
      setup() {
        const scroller = ref<HTMLElement | null>(null)
        useDragScroll(scroller, 200)
        return { scroller }
      },
      template: '<div ref="scroller" />',
    }))
    Object.defineProperty(wrapper.element, 'scrollBy', { value: scrollBy })

    wrapper.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    expect(scrollBy).toHaveBeenCalledWith({ left: 200, behavior: 'smooth' })
  })
})
