import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted } from 'vue'

const revealIds = ['hero', 'logos', 'process', 'use-cases', 'features', 'compare', 'roadmap', 'faq', 'cta', 'footer']

/** Recreates the source landing's viewport reveal classes without its analytics scripts.
 * @param root Ref containing the landing root whose sections may be observed.
 * @returns Nothing. The observer is disconnected when the component unmounts.
 */
export function useOriginalReveals(root: Readonly<Ref<HTMLElement | null>>): void {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = revealIds
      .map(id => root.value?.querySelector<HTMLElement>(`#${id}`) ?? null)
      .filter((section): section is HTMLElement => section !== null)

    sections.forEach(section => section.classList.add('dds-reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      sections.forEach((section) => {
        section.classList.add('is-visible')
        if (section.id === 'logos') section.classList.add('is-logos-revealed')
      })
      return
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const section = entry.target as HTMLElement
        section.classList.add('is-visible')
        if (section.id === 'logos') section.classList.add('is-logos-revealed')
        observer?.unobserve(section)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    sections.forEach(section => observer?.observe(section))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
