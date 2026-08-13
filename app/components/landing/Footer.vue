<!-- Renders the landing footer and shared primary navigation. -->
<script setup lang="ts">
import { footerNavigationLinks } from '~/data/landing'
</script>
<template>
<footer id="footer" class="footer dds-footer">
    <div class="dds-footer-top">
      <div class="dds-footer-brand">
        <UiBrandLogo class="dds-footer-logo" />
        <p class="dds-footer-tagline">Платформа, где все создается в рамках вашего бренда и дизайн-системы</p>
      </div>
      <nav class="dds-footer-links" aria-label="&#1055;&#1086;&#1076;&#1074;&#1072;&#1083;">
        <div class="dds-footer-col">
          <p class="dds-footer-col-title">Навигация</p>
          <div class="dds-footer-list">
            <a v-for="link in footerNavigationLinks" :key="link.href" class="dds-footer-link" :href="link.href"><span>{{ link.label }}</span></a>
          </div>
        </div>
        <div class="dds-footer-col">
          <p class="dds-footer-col-title">Документация</p>
          <div class="dds-footer-list">


            <a class="dds-footer-link dds-footer-link--block" href="https://snapbuild.ru/privacy" target="_blank" rel="noopener noreferrer"><span>Политика конфиденциальности</span></a>
          </div>
        </div>
        <div class="dds-footer-col">
          <p class="dds-footer-col-title">Контакты</p>
          <div class="dds-footer-list">
            <a class="dds-footer-link dds-footer-link--plain" href="https://t.me/ochen_darya" target="_blank" rel="noopener noreferrer">Запросить демо</a>
            <a class="dds-footer-link dds-footer-link--block" href="https://t.me/snapbuild" target="_blank" rel="noopener noreferrer"><span>Telegram</span></a>
            <a class="dds-footer-link dds-footer-email-mobile" href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>

          </div>
        </div>
      </nav>
    </div>
    <div class="dds-footer-legal">
      <p class="dds-footer-copyright">© Сгенерировано в Снэпбилде. Все права защищены.</p>
      <a class="dds-footer-email" href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
    </div>
  </footer>
</template>
