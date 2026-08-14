<!-- Owns accessible selection and keyboard focus for a typed list of tabs. -->
<script setup lang="ts">
export interface UiTabItem { readonly id: string; readonly label: string }

const props = defineProps<{ items: readonly UiTabItem[]; label: string; panelIdPrefix: string }>()
const model = defineModel<string>({ required: true })
const buttons = useTemplateRef<HTMLButtonElement[]>('buttons')

/** Selects and focuses the adjacent tab, wrapping at either end. */
function moveFocus(currentIndex: number, offset: number): void {
  const nextIndex = (currentIndex + offset + props.items.length) % props.items.length
  const item = props.items[nextIndex]
  if (!item) return
  model.value = item.id
  nextTick(() => buttons.value?.[nextIndex]?.focus())
}

/** Implements the WAI-ARIA tabs keyboard interaction model. */
function handleKeydown(event: KeyboardEvent, index: number): void {
  if (event.key === 'ArrowRight') moveFocus(index, 1)
  else if (event.key === 'ArrowLeft') moveFocus(index, -1)
  else if (event.key === 'Home') moveFocus(0, -props.items.length)
  else if (event.key === 'End') moveFocus(props.items.length - 1, 0)
  else return
  event.preventDefault()
}
</script>

<template>
  <div class="ui-tab-list" role="tablist" :aria-label="label">
    <button
      v-for="(item, index) in items"
      :id="`${panelIdPrefix}-tab-${item.id}`"
      :key="item.id"
      ref="buttons"
      type="button"
      role="tab"
      :aria-controls="`${panelIdPrefix}-panel-${item.id}`"
      :aria-selected="model === item.id"
      :tabindex="model === item.id ? 0 : -1"
      class="ui-tab-list__tab"
      @click="model = item.id"
      @keydown="handleKeydown($event, index)"
    >
      <slot name="tab" :item="item" :active="model === item.id">{{ item.label }}</slot>
    </button>
  </div>
</template>
