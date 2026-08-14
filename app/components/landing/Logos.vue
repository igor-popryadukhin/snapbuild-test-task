<!-- Renders the infinitely repeating customer-logo marquee from shared data. -->
<script setup lang="ts">
import { logos } from '~/data/landing'
</script>

<template>
  <section id="logos" class="logos dds-logos dds-marquee" aria-label="Логотипы компаний — иллюстрация">
    <p class="dds-marquee-eyebrow">С платформой работают команды, для которых бренд — закон</p>
    <div class="dds-marquee-track">
      <div v-for="copy in 2" :key="copy" class="dds-marquee-content" :aria-hidden="copy === 2">
        <div v-for="logo in logos" :key="`${copy}-${logo.id}`" class="dds-marquee-item" :class="logo.className">
          <img class="dds-marquee-image" :src="useAssetUrl(logo.image)" width="100%" height="100%" alt="">
          <span class="dds-marquee-caption">{{ logo.name }}</span>
        </div>
      </div>
    </div>
    <p class="logos__disclaimer">Логотипы приведены в иллюстративных целях и не являются подтверждением клиентских отношений.</p>
  </section>
</template>
