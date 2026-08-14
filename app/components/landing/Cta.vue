<!-- Renders the LandingCta section of the landing page. -->
<script setup lang="ts">
import { ctaBenefits } from '~/data/landing'
</script>

<template>
<section id="cta" class="cta dds-cta dds-launch">
    <div class="dds-launch-dust" aria-hidden="true">
      <img class="dds-launch-dust--d" :src="useAssetUrl('assets/images/c3714c375a04149c.webp')" alt="" width="1440" height="464" loading="lazy">
      <img class="dds-launch-dust--t" :src="useAssetUrl('assets/images/f38670cf14e4b7dd.webp')" alt="" width="810" height="416" loading="lazy">
      <img class="dds-launch-dust--m" :src="useAssetUrl('assets/images/a4285c4b0717be2b.webp')" alt="" width="388" height="388" loading="lazy">
    </div>
    <div class="dds-launch-shine" aria-hidden="true"/>
    <div class="dds-launch-content">
      <div class="dds-launch-intro">
        <h2 class="dds-launch-title"><span class="dds-launch-title-desktop">Соберите первый материал<br>в&nbsp;фирменном стиле</span><span class="dds-launch-title-responsive">Соберите первый материал в&nbsp;фирменном стиле</span></h2>
        <p class="dds-launch-subtitle">Дизайн-система, комплект форматов и готовый план внедрения — всё, чтобы команда выпускала материалы в едином стиле.</p>
      </div>
      <ul class="cta-benefits" aria-label="Что вы получаете">
        <li v-for="benefit in ctaBenefits" :key="benefit.id">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </li>
      </ul>
      <div class="dds-launch-actions">
        <a class="dds-launch-btn ui-external-cta" href="https://builder.snapbuild.ru/page/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c" target="_blank" rel="noopener noreferrer"><span class="dds-launch-btn-text">Начать сейчас</span></a>

      </div>
    </div>
  </section>
</template>
