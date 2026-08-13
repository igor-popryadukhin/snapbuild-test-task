import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Adds pointer-drag and keyboard scrolling to a horizontal overflow container.
 * @param target Ref containing the scrollable element.
 * @param keyboardStep Distance in pixels moved by an arrow-key press.
 * @returns Reactive dragging state for visual cursor feedback.
 */
export function useDragScroll(target: Readonly<Ref<HTMLElement | null>>, keyboardStep = 240) {
  const isDragging = ref(false)
  let pointerId: number | null = null
  let startX = 0
  let startScrollLeft = 0

  /** Begins tracking a primary pointer drag.
   * @param event Pointer event raised by the scroll container.
   */
  function handlePointerDown(event: PointerEvent): void {
    if (!event.isPrimary || event.button !== 0 || !target.value) return
    pointerId = event.pointerId
    startX = event.clientX
    startScrollLeft = target.value.scrollLeft
    isDragging.value = true
    target.value.setPointerCapture?.(event.pointerId)
  }

  /** Converts horizontal pointer movement into scroll offset.
   * @param event Active pointer movement.
   */
  function handlePointerMove(event: PointerEvent): void {
    if (pointerId !== event.pointerId || !target.value) return
    event.preventDefault()
    target.value.scrollLeft = startScrollLeft + startX - event.clientX
  }

  /** Finishes or cancels the current drag.
   * @param event Pointer completion event.
   */
  function finishDrag(event: PointerEvent): void {
    if (pointerId !== event.pointerId) return
    target.value?.releasePointerCapture?.(event.pointerId)
    pointerId = null
    isDragging.value = false
  }

  /** Supports discoverable keyboard scrolling on the focused region.
   * @param event Keyboard event raised by the scroll container.
   */
  function handleKeydown(event: KeyboardEvent): void {
    if (!target.value || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return
    event.preventDefault()
    target.value.scrollBy({ left: event.key === 'ArrowRight' ? keyboardStep : -keyboardStep, behavior: 'smooth' })
  }

  onMounted(() => {
    const element = target.value
    element?.addEventListener('pointerdown', handlePointerDown)
    element?.addEventListener('pointermove', handlePointerMove)
    element?.addEventListener('pointerup', finishDrag)
    element?.addEventListener('pointercancel', finishDrag)
    element?.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    const element = target.value
    element?.removeEventListener('pointerdown', handlePointerDown)
    element?.removeEventListener('pointermove', handlePointerMove)
    element?.removeEventListener('pointerup', finishDrag)
    element?.removeEventListener('pointercancel', finishDrag)
    element?.removeEventListener('keydown', handleKeydown)
  })

  return { isDragging }
}
