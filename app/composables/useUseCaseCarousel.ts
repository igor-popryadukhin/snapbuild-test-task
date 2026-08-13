import type { UseCaseTab } from '~/types/landing'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

/** Controls ordered use-case playback and resets its timer after manual selection.
 * @param tabs Ordered tab and card content.
 * @param durationMs Time each card remains active.
 * @returns Reactive selection, progress and selection controls.
 */
export function useUseCaseCarousel(tabs: readonly UseCaseTab[], durationMs = 8000) {
  const activeTabIndex = ref(0)
  const activeItemIndex = ref(0)
  const progress = ref(0)
  let interval: ReturnType<typeof setInterval> | undefined
  let startedAt = 0

  const activeTab = computed(() => tabs[activeTabIndex.value])
  const activeItem = computed(() => activeTab.value?.items[activeItemIndex.value])

  /** Stops the active progress timer. */
  function stop(): void {
    if (interval !== undefined) clearInterval(interval)
    interval = undefined
  }

  /** Advances to the next card, wrapping through all tabs. */
  function advance(): void {
    const items = tabs[activeTabIndex.value]?.items ?? []
    if (activeItemIndex.value + 1 < items.length) {
      activeItemIndex.value += 1
    }
    else {
      activeItemIndex.value = 0
      activeTabIndex.value = (activeTabIndex.value + 1) % tabs.length
    }
    restart()
  }

  /** Starts a fresh progress interval for the current card. */
  function restart(): void {
    stop()
    progress.value = 0
    startedAt = Date.now()
    interval = setInterval(() => {
      progress.value = Math.min((Date.now() - startedAt) / durationMs, 1)
      if (progress.value >= 1) advance()
    }, 50)
  }

  /** Selects a specific tab and card and restarts autoplay.
   * @param tabIndex Zero-based tab index.
   * @param itemIndex Zero-based card index.
   */
  function select(tabIndex: number, itemIndex = 0): void {
    if (!tabs[tabIndex]?.items[itemIndex]) return
    activeTabIndex.value = tabIndex
    activeItemIndex.value = itemIndex
    restart()
  }

  onMounted(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) restart()
  })
  onBeforeUnmount(stop)

  return { activeItem, activeItemIndex, activeTabIndex, progress, select, stop }
}
