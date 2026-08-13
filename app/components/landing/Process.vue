<!-- Renders the LandingProcess section of the landing page. -->
<template>
<section id="process" class="process dds-steps">
    <div class="dds-steps-header">
      <h2 class="dds-steps-title"><span class="dds-steps-wide">Одна платформа — весь маркетинг</span><span class="dds-steps-narrow">Одна платформа —<br>весь маркетинг</span></h2>
      <p class="dds-steps-subtitle">Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле</p>
    </div>
    <div class="dds-steps-grid">
      <article class="dds-steps-card">
        <img :src="useAssetUrl('assets/images/84a4450b3827bc21.webp')" class="dds-steps-media dds-steps-media--1" alt="" style="object-fit: cover;">
        <div class="dds-steps-overlay">
          <div class="dds-steps-copy">
            <h3 class="dds-steps-name"><span class="dds-steps-wide">Дизайн-система — ядро платформы</span><span class="dds-steps-narrow">Дизайн-система Снэпбилд</span></h3>
            <p class="dds-steps-desc"><span class="dds-steps-wide">Ваши компоненты, цвета и шрифты — единственный источник стиля</span><span class="dds-steps-narrow">Ваши компоненты, цвета и шрифты — единственный источник стиля</span></p>
          </div>
        </div>
      </article>
      <article class="dds-steps-card">
        <picture class="dds-steps-picture"><source media="(max-width: 767px)" :srcset="useAssetUrl('assets/images/process-flexible-configuration-mobile.webp')"><source media="(max-width: 1023px)" :srcset="useAssetUrl('assets/images/process-flexible-configuration-tablet.webp')"><img :src="useAssetUrl('assets/images/process-flexible-configuration.webp')" class="dds-steps-media dds-steps-media--2" alt=""></picture>
        <div class="dds-steps-overlay">
          <div class="dds-steps-copy">
            <h3 class="dds-steps-name"><span class="dds-steps-wide">Гибкая конфигурация</span><span class="dds-steps-narrow">Гибкая конфигурация</span></h3>
            <p class="dds-steps-desc"><span class="dds-steps-wide">Правила бренда задаются один раз — работают в каждой генерации</span><span class="dds-steps-narrow">Правила бренда задаются один раз — работают в каждой генерации</span></p>
          </div>
        </div>
      </article>
      <article class="dds-steps-card">
        <img :src="useAssetUrl('assets/images/afe03eb4a67d5dfb.webp')" class="dds-steps-media dds-steps-media--3" alt="">
        <div class="dds-steps-overlay">
          <div class="dds-steps-copy">
            <h3 class="dds-steps-name"><span class="dds-steps-wide">Соответствие по умолчанию</span><span class="dds-steps-narrow">Соответствие по умолчанию</span></h3>
            <p class="dds-steps-desc"><span class="dds-steps-wide">AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам</span><span class="dds-steps-narrow">AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам</span></p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
