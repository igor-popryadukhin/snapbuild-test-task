<!-- Renders the three data-driven platform process cards. -->
<script setup lang="ts">
import { processCards } from '~/data/landing'
</script>

<template>
  <section id="process" class="process dds-steps">
    <div class="dds-steps-header">
      <h2 class="dds-steps-title"><span class="dds-steps-wide">Одна платформа — весь маркетинг</span><span class="dds-steps-narrow">Одна платформа —<br>весь маркетинг</span></h2>
      <p class="dds-steps-subtitle">Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле</p>
    </div>
    <div class="dds-steps-grid">
      <article v-for="(card, index) in processCards" :key="card.id" class="dds-steps-card">
        <picture class="dds-steps-picture">
          <source v-if="card.mobileImage" media="(max-width: 767px)" :srcset="useAssetUrl(card.mobileImage)">
          <source v-if="card.tabletImage" media="(max-width: 1023px)" :srcset="useAssetUrl(card.tabletImage)">
          <img :src="useAssetUrl(card.image)" class="dds-steps-media" :class="`dds-steps-media--${index + 1}`" alt="" :width="card.width" :height="card.height" loading="lazy">
        </picture>
        <div class="dds-steps-overlay"><div class="dds-steps-copy">
          <h3 class="dds-steps-name"><span class="dds-steps-wide">{{ card.title }}</span><span class="dds-steps-narrow">{{ card.mobileTitle }}</span></h3>
          <p class="dds-steps-desc">{{ card.description }}</p>
        </div></div>
      </article>
    </div>
  </section>
</template>
