import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'
import { useScenarioTabs } from '../app/composables/useScenarioTabs'

describe('useScenarioTabs', () => {
  it('wraps arrow navigation and supports boundary keys', () => {
    const wrapper = mount(defineComponent({
      setup: () => useScenarioTabs(4),
      template: '<div />',
    }))
    const event = (key: string) => new KeyboardEvent('keydown', { key, cancelable: true })

    expect(wrapper.vm.selectFromKeyboard(event('ArrowLeft'), 0)).toBe(3)
    expect(wrapper.vm.activeIndex).toBe(3)
    expect(wrapper.vm.selectFromKeyboard(event('Home'), 3)).toBe(0)
    expect(wrapper.vm.selectFromKeyboard(event('End'), 0)).toBe(3)
    expect(wrapper.vm.selectFromKeyboard(event('Tab'), 3)).toBeNull()
  })
})
