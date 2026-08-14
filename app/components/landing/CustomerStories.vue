<!-- Presents clearly labelled illustrative customer workflows as a static card grid. -->
<script setup lang="ts">
import { customerStories } from '~/data/landing'

</script>

<template>
  <section id="customer-stories" class="customer-stories" aria-labelledby="customer-stories-title">
    <div class="customer-stories__inner">
      <UiSectionHeader
        eyebrow="Истории клиентов"
        title="Как команды применяют Снэпбилд"
        description="Три демонстрационных маршрута — примеры применения продукта, а не подтверждённые отзывы клиентов."
        title-id="customer-stories-title"
      />

      <div class="customer-stories__grid">
        <article
          v-for="story in customerStories"
          :key="story.id"
          class="customer-stories__card"
          :aria-labelledby="`customer-story-title-${story.id}`"
        >
          <div class="customer-stories__portrait">
            <img
              :src="useAssetUrl(story.image)"
              :alt="story.imageAlt"
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            >
          </div>

          <div class="customer-stories__person">
            <p>{{ story.role }}</p>
            <p>{{ story.company }}</p>
          </div>

          <div class="customer-stories__content">
            <p class="customer-stories__scenario-label">Демонстрационный сценарий</p>
            <h3 :id="`customer-story-title-${story.id}`">{{ story.title }}</h3>
            <dl class="customer-stories__details">
              <div>
                <dt>Исходная задача</dt>
                <dd>{{ story.task }}</dd>
              </div>
              <div>
                <dt>Результат</dt>
                <dd>{{ story.result }}</dd>
              </div>
            </dl>
            <ul class="customer-stories__deliverables" aria-label="Состав результата">
              <li v-for="item in story.deliverables" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
