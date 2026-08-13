<!-- Renders responsive primary navigation and owns the mobile menu state. -->
<script setup lang="ts">
import { primaryNavigationLinks } from '~/data/landing'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

/** Synchronizes the compact header appearance with the document scroll position. */
function updateScrollState(): void {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateScrollState))

/** Closes the mobile menu after following an in-page link. */
function closeMenu(): void {
  isMenuOpen.value = false
}
</script>

<template>
<header id="header" class="header dds-header dds-main" :class="{ 'is-menu-open': isMenuOpen, 'is-scrolled': isScrolled }">
    <div class="dds-main-bar">
      <a class="dds-main-logo" href="./" aria-label="Снэпбилд" target="_self">
        <img :src="useAssetUrl('assets/images/582db07d8ccd60da.svg')" alt="Снэпбилд" width="153" height="22">
      </a>
      <nav class="dds-main-nav" aria-label="&#1054;&#1089;&#1085;&#1086;&#1074;&#1085;&#1072;&#1103; &#1085;&#1072;&#1074;&#1080;&#1075;&#1072;&#1094;&#1080;&#1103;">
        <a v-for="link in primaryNavigationLinks" :key="link.href" class="dds-main-link" :href="link.href"><span>{{ link.label }}</span></a>
      </nav>
      <div class="dds-main-actions">
        <a class="dds-btn dds-btn--l dds-btn--secondary dds-main-demo" href="https://builder.snapbuild.ru/" target="_self"><span>Начать сейчас</span></a>
        <button class="dds-main-burger" type="button" aria-controls="dds-main-menu" :aria-expanded="isMenuOpen" :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'" @click="isMenuOpen = !isMenuOpen"><span class="dds-main-burger-icon"/></button>
      </div>
    </div>
    <nav id="dds-main-menu" class="dds-main-menu" aria-label="Мобильная навигация" :aria-hidden="!isMenuOpen">
      <a v-for="link in primaryNavigationLinks" :key="link.href" class="dds-main-menu-link" :href="link.href" @click="closeMenu"><span>{{ link.label }}</span></a>
      <a class="dds-btn dds-btn--l dds-btn--secondary" href="https://builder.snapbuild.ru/"><span>Начать сейчас</span></a>
    </nav>
  </header>
</template>
