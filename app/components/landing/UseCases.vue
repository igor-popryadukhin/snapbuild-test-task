<!-- Presents five content formats with keyboard-accessible cards and timed media playback. -->
<script setup lang="ts">
import { useCaseTabs } from '~/data/landing'
import type { UseCaseItem } from '~/types/landing'

const { activeItem, activeItemIndex, activeTabIndex, progress, select } = useUseCaseCarousel(useCaseTabs)
const flatUseCaseItems: readonly UseCaseItem[] = useCaseTabs.flatMap(tab => [...tab.items])

/** Selects a tab from its keyboard-operable visual label.
 * @param event Keyboard event raised by a tab label.
 * @param tabIndex Zero-based tab index.
 */
function selectTabFromKeyboard(event: KeyboardEvent, tabIndex: number): void {
  if (event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  select(tabIndex)
}

/** Selects a card from the keyboard.
 * @param event Keyboard event raised by a card.
 * @param tabIndex Zero-based tab index.
 * @param itemIndex Zero-based card index.
 */
function selectCardFromKeyboard(event: KeyboardEvent, tabIndex: number, itemIndex: number): void {
  if (event.key !== 'Enter' && event.key !== ' ') return
  event.preventDefault()
  select(tabIndex, itemIndex)
}
</script>

<template>
  <section id="use-cases" class="use-cases dds-use-cases dds-tabs">
    <input
      v-for="(_, tabIndex) in useCaseTabs"
      :id="`uc-tab-${tabIndex + 1}`"
      :key="`radio-${tabIndex}`"
      class="dds-tabs-radio"
      name="uc-tabs"
      type="radio"
      :checked="activeTabIndex === tabIndex"
      @change="select(tabIndex)"
    >
    <div class="dds-tabs-inner">
      <div class="dds-tabs-header">
        <h2 class="dds-tabs-title">
          <span class="dds-tabs-wide">Любой контент в фирменном стиле
за считанные минуты</span><span class="dds-tabs-narrow">Любой контент
в фирменном стиле
за считанные минуты</span>
        </h2>
        <div class="dds-tabs-group" role="tablist" aria-label="Форматы контента">
          <label
            v-for="(tab, tabIndex) in useCaseTabs"
            :key="tab.id"
            :for="`uc-tab-${tabIndex + 1}`"
            class="dds-tabs-tab"
            role="tab"
            tabindex="0"
            :aria-selected="activeTabIndex === tabIndex"
            @keydown="selectTabFromKeyboard($event, tabIndex)"
          >{{ tab.label }}</label>
        </div>
      </div>
      <div class="dds-tabs-body">
        <div class="dds-tabs-points">
          <div
            v-for="(tab, tabIndex) in useCaseTabs"
            :key="tab.id"
            class="dds-tabs-points-set"
            :class="`dds-tabs-points-set--${tabIndex + 1}`"
          >
            <article
              v-for="(item, itemIndex) in tab.items"
              :key="item.id"
              class="dds-tabs-card"
              :class="{ 'dds-tabs-card--active': activeTabIndex === tabIndex && activeItemIndex === itemIndex }"
              :data-media="item.id"
              role="button"
              tabindex="0"
              @click="select(tabIndex, itemIndex)"
              @keydown="selectCardFromKeyboard($event, tabIndex, itemIndex)"
            >
              <h3 class="dds-tabs-card-title">{{ item.title }}</h3>
              <p class="dds-tabs-card-desc"><span>{{ item.description }}</span></p>
              <div class="dds-tabs-card-progress">
                <div
                  class="dds-tabs-card-progress-fill"
                  :style="{ transform: `scaleX(${activeTabIndex === tabIndex && activeItemIndex === itemIndex ? progress : 0})` }"
                />
              </div>
            </article>
          </div>
        </div>
        <div class="dds-tabs-panel">
          <img
            v-for="item in flatUseCaseItems"
            :key="item.id"
            class="dds-tabs-media"
            :class="[{ 'dds-tabs-media--active': activeItem?.id === item.id }, `dds-tabs-media--${item.id}`]"
            :data-media="item.id"
            :src="useAssetUrl(item.image)"
            alt=""
            width="2880"
            height="1620"
          >
        </div>
      </div>
    </div>
  </section>
</template>
