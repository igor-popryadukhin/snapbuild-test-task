<!-- Renders the three data-driven security capabilities with responsive media. -->
<script setup lang="ts">
import { securityFeatures } from '~/data/landing'
</script>

<template>
  <section id="features" class="features dds-why-safe">
    <h2 class="dds-why-safe-section-title">Безопасность без компромиссов</h2>
    <div class="dds-why-safe-points">
      <div v-for="feature in securityFeatures" :key="feature.id" class="dds-why-safe-point">
        <picture class="dds-why-safe-image">
          <source media="(max-width: 767px)" :srcset="useAssetUrl(feature.mobileImage)">
          <img :src="useAssetUrl(feature.image)" alt="" aria-hidden="true" width="864" height="720" loading="lazy">
        </picture>
        <div class="dds-why-safe-card">
          <span class="dds-why-safe-tile" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none"><path d="M10 1.8 16.7 4.3v5c0 4.2-2.7 7.8-6.7 9.1-4-1.3-6.7-4.9-6.7-9.1v-5L10 1.8Zm-1 11.7 4.8-4.8-1.2-1.2L9 11.1 7.3 9.4l-1.1 1.2L9 13.5Z" fill="currentColor"/></svg>
          </span>
        </div>
        <div class="dds-why-safe-point-text">
          <h3 class="dds-why-safe-point-title">{{ feature.title }}</h3>
          <p class="dds-why-safe-point-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
