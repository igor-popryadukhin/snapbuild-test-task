import { computed, ref } from 'vue'

/** Controls selection and WAI-ARIA keyboard navigation for an ordered tab set.
 * @param itemCount Number of available tabs.
 * @returns Active index together with direct and keyboard selection controls.
 */
export function useScenarioTabs(itemCount: number) {
  const activeIndex = ref(0)

  /** Selects an available tab.
   * @param index Zero-based tab index.
   */
  function select(index: number): void {
    if (index >= 0 && index < itemCount) activeIndex.value = index
  }

  /** Resolves the next tab for arrow, Home and End keys.
   * @param event Keyboard event from the active tab.
   * @param currentIndex Zero-based index of the focused tab.
   * @returns The selected index, or null when the key is unrelated to tab navigation.
   */
  function selectFromKeyboard(event: KeyboardEvent, currentIndex: number): number | null {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (currentIndex + 1) % itemCount
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (currentIndex - 1 + itemCount) % itemCount
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = itemCount - 1
    if (nextIndex === null) return null

    event.preventDefault()
    select(nextIndex)
    return nextIndex
  }

  return { activeIndex: computed(() => activeIndex.value), select, selectFromKeyboard }
}
