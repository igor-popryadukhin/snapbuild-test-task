import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import type { Component } from 'vue'
import LandingHeader from '../app/components/landing/Header.vue'
import LandingFooter from '../app/components/landing/Footer.vue'
import LandingUseCases from '../app/components/landing/UseCases.vue'
import LandingRoleScenarios from '../app/components/landing/RoleScenarios.vue'
import LandingImplementation from '../app/components/landing/Implementation.vue'
import LandingMeasurableEffect from '../app/components/landing/MeasurableEffect.vue'
import LandingCustomerStories from '../app/components/landing/CustomerStories.vue'
import LandingDemoRequest from '../app/components/landing/DemoRequest.vue'
import LandingFaq from '../app/components/landing/Faq.vue'
import LandingRoadmap from '../app/components/landing/Roadmap.vue'
import LandingProcess from '../app/components/landing/Process.vue'
import LandingSecurity from '../app/components/landing/Security.vue'
import LandingComparison from '../app/components/landing/Comparison.vue'
import LandingLogos from '../app/components/landing/Logos.vue'

describe('landing interactions', () => {
  it('validates and completes the client-only demo request', async () => {
    const wrapper = await mountSuspended(LandingDemoRequest, { attachTo: document.body })
    vi.useFakeTimers()

    await wrapper.get('form').trigger('submit')
    expect(wrapper.findAll('.demo-request__error')).toHaveLength(3)
    expect(wrapper.get('[role="alert"]').text()).toContain('Проверьте обязательные поля')
    expect(wrapper.get('#demo-email').attributes('aria-invalid')).toBe('true')
    expect(wrapper.get('#demo-name').attributes('required')).toBeDefined()
    expect(document.activeElement).toBe(wrapper.get('#demo-name').element)

    await wrapper.get('#demo-name').setValue('Игорь')
    await wrapper.get('#demo-email').setValue('igor@company.ru')
    await wrapper.get('#demo-company').setValue('Компания')
    await wrapper.get('form').trigger('submit')
    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeDefined()

    await vi.runAllTimersAsync()
    expect(wrapper.get('[role="status"]').text()).toContain('Подготовим демонстрацию')
    expect(document.activeElement).toBe(wrapper.get('[role="status"]').element)
    await wrapper.get('[role="status"] button').trigger('click')
    expect(wrapper.find('form').exists()).toBe(true)
    expect(document.activeElement).toBe(wrapper.get('#demo-name').element)
    vi.useRealTimers()
    wrapper.unmount()
  })

  it('opens and closes the mobile navigation from the keyboard', async () => {
    const wrapper = await mountSuspended(LandingHeader)
    const burger = wrapper.get('.dds-main-burger')

    await burger.trigger('click')
    expect(burger.attributes('aria-expanded')).toBe('true')
    await wrapper.get('.dds-main-menu-link').trigger('click')
    expect(burger.attributes('aria-expanded')).toBe('false')
  })

  it('keeps desktop, mobile and footer anchors aligned with the landing sections', async () => {
    const header = await mountSuspended(LandingHeader)
    const footer = await mountSuspended(LandingFooter)
    const primaryTargets = ['#use-cases', '#scenarios', '#implementation', '#effect', '#customer-stories', '#demo-request', '#faq']

    expect(header.findAll('.dds-main-link').map(link => link.attributes('href'))).toEqual(primaryTargets)
    expect(header.findAll('.dds-main-menu-link').map(link => link.attributes('href'))).toEqual(primaryTargets)
    expect(footer.findAll('.dds-footer-col:first-child .dds-footer-link').map(link => link.attributes('href'))).toEqual([
      ...primaryTargets,
      '#features',
      '#roadmap',
    ])
  })

  it('applies the scrolled header state after the page moves', async () => {
    const wrapper = await mountSuspended(LandingHeader)
    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(120)

    window.dispatchEvent(new Event('scroll'))
    await wrapper.vm.$nextTick()

    expect(wrapper.get('#header').classes()).toContain('is-scrolled')
    vi.restoreAllMocks()
  })

  it('keeps the active use-case card and image synchronized', async () => {
    const wrapper = await mountSuspended(LandingUseCases)
    const cards = wrapper.findAll('.dds-tabs-card')

    expect(wrapper.findAll('.dds-tabs-media')).toHaveLength(1)
    expect(wrapper.get('.dds-tabs-media').attributes('loading')).toBe('lazy')
    await cards[6]!.trigger('keydown', { key: 'Enter' })
    expect(cards[6]!.classes()).toContain('dds-tabs-card--active')
    expect(wrapper.get('.dds-tabs-media--active').attributes('data-media')).toBe('tab2-item3')
    expect(wrapper.findAll('.dds-tabs-media')).toHaveLength(1)
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

  it('presents illustrative customer stories as a static card grid', async () => {
    const wrapper = await mountSuspended(LandingCustomerStories)
    const cards = wrapper.findAll('.customer-stories__card')

    expect(cards).toHaveLength(3)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(0)
    expect(wrapper.get('.ui-section-header__description').text()).toContain('не подтверждённые отзывы')
    expect(wrapper.findAll('.customer-stories__scenario-label').map(node => node.text())).toEqual([
      'Демонстрационный сценарий',
      'Демонстрационный сценарий',
      'Демонстрационный сценарий',
    ])
    expect(wrapper.findAll('.customer-stories__portrait img').map(img => img.attributes('src'))).toEqual([
      expect.stringContaining('customer-story-marketing.webp'),
      expect.stringContaining('customer-story-sales.webp'),
      expect.stringContaining('customer-story-product.webp'),
    ])
    expect(wrapper.get('.customer-stories__portrait img').attributes('width')).toBe('720')
    expect(wrapper.get('.customer-stories__portrait img').attributes('height')).toBe('900')
    expect(cards[0]!.text()).toContain('Исходная задача')
    expect(cards[0]!.text()).toContain('Результат')
    expect(cards[0]!.text()).toContain('Финтех-команда')
    wrapper.unmount()
  })

  it('renders all landing section headers through the shared UiSectionHeader', async () => {
    const cases: Array<{ component: Component; eyebrow?: string; title: string; description: string }> = [
      { component: LandingRoleScenarios, eyebrow: 'Сценарии использования', title: 'Один инструмент для всей команды', description: 'От первого брифа' },
      { component: LandingImplementation, eyebrow: 'Внедрение', title: 'Как проходит внедрение', description: 'Начинаем с ваших процессов' },
      { component: LandingMeasurableEffect, eyebrow: 'Измеримый эффект', title: 'Ценность, которую видно в процессе', description: 'На пилоте' },
      { component: LandingCustomerStories, eyebrow: 'Истории клиентов', title: 'Как команды применяют Снэпбилд', description: 'Три демонстрационных маршрута' },
      { component: LandingDemoRequest, eyebrow: 'Запросить демо', title: 'Покажем, как собрать материалы в вашем стиле', description: 'Оставьте контакты' },
      { component: LandingFaq, title: 'Частые вопросы', description: 'Ответы о возможностях' },
    ]

    for (const { component, eyebrow, title, description } of cases) {
      const wrapper = await mountSuspended(component)
      const header = wrapper.get('.ui-section-header')

      expect(header.get('h2').text()).toBe(title)
      expect(header.get('.ui-section-header__description').text()).toContain(description)
      if (eyebrow) {
        expect(header.get('.ui-section-header__eyebrow').text()).toBe(eyebrow)
      } else {
        expect(header.find('.ui-section-header__eyebrow').exists()).toBe(false)
      }
      wrapper.unmount()
    }
  })

  it('stacks the demo request header and form vertically', async () => {
    const wrapper = await mountSuspended(LandingDemoRequest)
    const inner = wrapper.get('.demo-request__inner')

    expect(wrapper.find('.demo-request__intro').exists()).toBe(false)
    expect(wrapper.find('.demo-request__eyebrow').exists()).toBe(false)
    expect(inner.element.children[0]?.classList.contains('ui-section-header')).toBe(true)
    expect(inner.element.children[1]?.classList.contains('demo-request__card')).toBe(true)
    expect(wrapper.get('.ui-section-header__eyebrow').text()).toBe('Запросить демо')
  })

  it('exposes every FAQ item as a native checkbox disclosure', async () => {
    const wrapper = await mountSuspended(LandingFaq)
    const controls = wrapper.findAll('.dds-accordion-state')

    expect(controls).toHaveLength(8)
    await controls[0]!.setValue(true)
    expect((controls[0]!.element as HTMLInputElement).checked).toBe(true)
  })

  it('renders complete data-driven roadmap, process, security and comparison collections', async () => {
    const roadmap = await mountSuspended(LandingRoadmap)
    const process = await mountSuspended(LandingProcess)
    const security = await mountSuspended(LandingSecurity)
    const comparison = await mountSuspended(LandingComparison)

    expect(roadmap.findAll('.dds-rmap-item')).toHaveLength(12)
    expect(roadmap.get('.dds-rmap-track').attributes('style')).toContain('--dds-rmap-progress: 8')
    expect(roadmap.find('progress').exists()).toBe(false)
    expect(process.findAll('.dds-steps-card')).toHaveLength(3)
    expect(security.findAll('.dds-why-safe-point')).toHaveLength(3)
    expect(comparison.findAll('.sds-compare-row')).toHaveLength(5)
  })

  it('uses one marquee track with a repeated logo sequence and labels logos as illustrative', async () => {
    const wrapper = await mountSuspended(LandingLogos)

    expect(wrapper.findAll('.dds-marquee-track')).toHaveLength(1)
    expect(wrapper.findAll('.dds-marquee-content')).toHaveLength(2)
    expect(wrapper.findAll('.dds-marquee-item')).toHaveLength(10)
    expect(wrapper.findAll('.dds-marquee-caption').map(node => node.text())).toEqual([
      'Озон', 'Самокат', 'Авито', 'ЦИАН', 'Лента', 'Озон', 'Самокат', 'Авито', 'ЦИАН', 'Лента',
    ])
    expect(wrapper.get('.logos__disclaimer').text()).toContain('иллюстративных целях')
    expect(wrapper.get('#logos').attributes('aria-label')).toBe('Логотипы компаний — иллюстрация')
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
    expect(wrapper.findAll('.measurable-effect__metric strong').map(node => node.text())).toEqual(['6×', '90%', '24'])
    expect(wrapper.get('.ui-section-header__description').text()).toContain('пример')
    expect(wrapper.findAll('.measurable-effect__row')).toHaveLength(3)
    expect(wrapper.get('.measurable-effect__comparison').text()).toContain('До и со Снэпбилдом')
    expect(wrapper.text()).toContain('24 версии из одной согласованной идеи')
  })
})
