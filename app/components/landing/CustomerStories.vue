<!-- Presents clearly labelled illustrative customer workflows with accessible tab navigation. -->
<script setup lang="ts">
import { computed } from 'vue'
import { customerStories } from '~/data/landing'

const { activeIndex, select } = useScenarioTabs(customerStories.length)
const activeStory = computed(() => customerStories[activeIndex.value]!)
const activeStoryImage = computed(() => useAssetUrl(activeStory.value.image))
const storyTabs = customerStories.map(story => ({ id: story.id, label: story.company }))
const activeStoryId = computed({
  get: () => activeStory.value.id,
  set: (id: string) => select(customerStories.findIndex(story => story.id === id)),
})

</script>

<template>
  <section id="customer-stories" class="customer-stories" aria-labelledby="customer-stories-title">
    <div class="customer-stories__inner">
      <header class="customer-stories__header">
        <p class="customer-stories__label">Истории клиентов</p>
        <h2 id="customer-stories-title">Как команды применяют Снэпбилд</h2>
        <p class="customer-stories__intro">Три рабочих маршрута — от исходной задачи до материала, готового к следующему решению.</p>
      </header>

      <div class="customer-stories__navigation">
        <UiTabList v-model="activeStoryId" :items="storyTabs" label="Сценарии команд" panel-id-prefix="customer-story">
          <template #tab="{ item }"><span>{{ item.label }}</span></template>
        </UiTabList>
      </div>

      <div class="customer-stories__layout">
        <div class="customer-stories__panel-shell">
          <article
            :id="`customer-story-panel-${activeStory.id}`"
            :key="activeStory.id"
            class="customer-stories__panel"
            role="tabpanel"
            :aria-labelledby="`customer-story-tab-${activeStory.id}`"
          >
            <div class="customer-stories__identity">
              <div class="customer-stories__portrait">
                <img
                  :src="activeStoryImage"
                  :alt="activeStory.imageAlt"
                  width="720"
                  height="900"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <div class="customer-stories__person">
                <p>{{ activeStory.role }}</p>
                <p>{{ activeStory.company }}</p>
              </div>
            </div>

            <div class="customer-stories__content">
              <p class="customer-stories__scenario-label">Рабочий сценарий</p>
              <h3>{{ activeStory.title }}</h3>
              <dl class="customer-stories__details">
                <div>
                  <dt>Исходная задача</dt>
                  <dd>{{ activeStory.task }}</dd>
                </div>
                <div>
                  <dt>Результат</dt>
                  <dd>{{ activeStory.result }}</dd>
                </div>
              </dl>
              <ul class="customer-stories__deliverables" aria-label="Состав результата">
                <li v-for="item in activeStory.deliverables" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
