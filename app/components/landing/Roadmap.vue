<!-- Renders the release roadmap with a draggable horizontal timeline. -->
<script setup lang="ts">
import { roadmapItems } from '~/data/landing'

const roadmapScroller = useTemplateRef<HTMLElement>('roadmap-scroller')
const { isDragging } = useDragScroll(roadmapScroller)
const reachedCount = roadmapItems.filter(item => item.reached).length
const roadmapProgress = Math.max(0, reachedCount - 1)
</script>

<template>
  <section id="roadmap" class="roadmap dds-rmap">
    <header class="dds-rmap-header">
      <h2 class="dds-rmap-title">Каждый день — новый релиз</h2>
      <p class="dds-rmap-subtitle">Приоритизируем бэклог для ваших целей</p>
    </header>
    <div ref="roadmap-scroller" class="dds-rmap-scroller" :class="{ 'is-dragging': isDragging }" tabindex="0" role="region" aria-label="Дорожная карта релизов. Перетаскивайте горизонтально для просмотра">
      <div class="dds-rmap-track" :style="{ '--dds-rmap-progress': roadmapProgress }">
        <article v-for="item in roadmapItems" :key="item.id" class="dds-rmap-item" :class="{ 'is-reached': item.reached }">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">{{ item.title }}</h3>
            <p class="dds-rmap-desc">{{ item.description }}</p>
            <p class="dds-rmap-date">{{ item.date }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
