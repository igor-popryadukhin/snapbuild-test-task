import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import UiSectionHeader from '../app/components/ui/UiSectionHeader.vue'

describe('UiSectionHeader', () => {
  it('renders an eyebrow, title and description in a single split header', async () => {
    const wrapper = await mountSuspended(UiSectionHeader, {
      props: { eyebrow: 'Раздел', title: 'Заголовок', description: 'Описание', titleId: 'section-title' },
    })

    expect(wrapper.get('.ui-section-header__eyebrow').text()).toBe('Раздел')
    expect(wrapper.get('.ui-section-header__title').text()).toBe('Заголовок')
    expect(wrapper.get('.ui-section-header__title').attributes('id')).toBe('section-title')
    expect(wrapper.get('.ui-section-header__description').text()).toBe('Описание')
  })

  it('omits the eyebrow and description when not provided', async () => {
    const wrapper = await mountSuspended(UiSectionHeader, { props: { title: 'Заголовок' } })

    expect(wrapper.find('.ui-section-header__eyebrow').exists()).toBe(false)
    expect(wrapper.find('.ui-section-header__description').exists()).toBe(false)
    expect(wrapper.get('.ui-section-header__title').text()).toBe('Заголовок')
  })

  it('renders a single layout without variant classes', async () => {
    const wrapper = await mountSuspended(UiSectionHeader, { props: { title: 'Заголовок' } })

    expect(wrapper.get('.ui-section-header').classes()).toEqual(['ui-section-header'])
  })
})
