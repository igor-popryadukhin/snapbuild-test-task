import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Options for the viewport-triggered number animation. */
export interface UseCountUpOptions {
  /** Final numeric value the counter animates towards. */
  end: number
  /** Text appended to the number, e.g. '×' or '%'. */
  suffix?: string
  /** Animation duration in milliseconds. */
  duration?: number
}

/** Animates a number from 0 to `end` once, when the target enters the viewport.
 * SSR-safe: the final value is rendered immediately and only replaced on the
 * client when the animation starts. Respects prefers-reduced-motion.
 * @param target Ref to the element that triggers the animation on intersect.
 * @param options End value, optional suffix and duration.
 * @returns Reactive `display` string to render.
 */
export function useCountUp(target: Readonly<Ref<HTMLElement | null>>, options: UseCountUpOptions) {
  const { end, suffix = '', duration = 1600 } = options
  const display = ref(`${end}${suffix}`)
  let observer: IntersectionObserver | null = null
  let rafId = 0

  function animate(): void {
    const frames = Math.max(1, Math.ceil(duration / 16.7))
    let frame = 0

    const tick = (): void => {
      frame += 1
      const progress = Math.min(frame / frames, 1)
      const eased = 1 - Math.pow(2, -10 * progress)
      display.value = `${Math.round(end * eased)}${suffix}`
      if (progress < 1) rafId = window.requestAnimationFrame(tick)
    }

    display.value = `0${suffix}`
    rafId = window.requestAnimationFrame(tick)
  }

  onMounted(() => {
    const el = target.value
    if (!el || !Number.isFinite(end) || end <= 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window) || typeof window.requestAnimationFrame !== 'function') return

    observer = new IntersectionObserver((entries) => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer?.disconnect()
      observer = null
      animate()
    }, { threshold: 0.5 })

    observer.observe(el)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (rafId) window.cancelAnimationFrame(rafId)
  })

  return { display }
}
