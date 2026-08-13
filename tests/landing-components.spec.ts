import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import LandingHeader from '../app/components/landing/Header.vue'
import LandingUseCases from '../app/components/landing/UseCases.vue'
import LandingRoleScenarios from '../app/components/landing/RoleScenarios.vue'
import LandingImplementation from '../app/components/landing/Implementation.vue'
import LandingMeasurableEffect from '../app/components/landing/MeasurableEffect.vue'
import LandingFaq from '../app/components/landing/Faq.vue'

describe('landing interactions', () => {
  it('opens and closes the mobile navigation from the keyboard', async () => {
    const wrapper = await mountSuspended(LandingHeader)
    const burger = wrapper.get('.dds-main-burger')

    await burger.trigger('keydown', { key: 'Enter' })
    expect(burger.attributes('aria-expanded')).toBe('true')
    await wrapper.get('.dds-main-menu-link').trigger('click')
    expect(burger.attributes('aria-expanded')).toBe('false')
  })

  it('keeps the active use-case card and image synchronized', async () => {
    const wrapper = await mountSuspended(LandingUseCases)
    const cards = wrapper.findAll('.dds-tabs-card')

    await cards[6]!.trigger('keydown', { key: 'Enter' })
    expect(cards[6]!.classes()).toContain('dds-tabs-card--active')
    expect(wrapper.get('.dds-tabs-media--active').attributes('data-media')).toBe('tab2-item3')
  })

  it('switches role scenarios with mouse and keyboard while exposing tab state', async () => {
    const wrapper = await mountSuspended(LandingRoleScenarios, { attachTo: document.body })
    const tabs = wrapper.findAll('[role="tab"]')

    expect(tabs).toHaveLength(4)
    await tabs[1]!.trigger('click')
    expect(tabs[1]!.attributes('aria-selected')).toBe('true')
    expect(wrapper.get('[role="tabpanel"] h3').text()).toContain('дизайн-систему')

    await tabs[1]!.trigger('keydown', { key: 'ArrowRight' })
    expect(tabs[2]!.attributes('aria-selected')).toBe('true')
    expect(document.activeElement).toBe(tabs[2]!.element)
    wrapper.unmount()
  })

  it('exposes every FAQ item as a native checkbox disclosure', async () => {
    const wrapper = await mountSuspended(LandingFaq)
    const controls = wrapper.findAll('.dds-accordion-state')

    expect(controls).toHaveLength(8)
    await controls[0]!.setValue(true)
    expect((controls[0]!.element as HTMLInputElement).checked).toBe(true)
  })

  it('renders every implementation stage and its accountable outcome without interaction', async () => {
    const wrapper = await mountSuspended(LandingImplementation)
    const steps = wrapper.findAll('.implementation__step')

    expect(steps).toHaveLength(5)
    expect(steps[0]!.text()).toContain('Аудит бренда и процессов')
    expect(steps[0]!.text()).toContain('Карта сценариев и план внедрения')
    expect(steps[4]!.text()).toContain('Масштабирование без потери контроля')
    expect(wrapper.get('.implementation__footer a').attributes('href')).toBe('https://t.me/ochen_darya')
  })

  it('labels measurable-effect values as examples and keeps comparison content semantic', async () => {
    const wrapper = await mountSuspended(LandingMeasurableEffect)

    expect(wrapper.findAll('.measurable-effect__metric')).toHaveLength(3)
    expect(wrapper.get('.measurable-effect__intro').text()).toContain('пример')
    expect(wrapper.findAll('.measurable-effect__row')).toHaveLength(3)
    expect(wrapper.get('.measurable-effect__comparison').text()).toContain('До и со Снэпбилдом')
    expect(wrapper.text()).toContain('24 версии из одной согласованной идеи')
  })
})
