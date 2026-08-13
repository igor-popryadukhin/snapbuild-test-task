<!-- Renders responsive primary navigation and owns the mobile menu state. -->
<script setup lang="ts">
const isMenuOpen = ref(false)

/** Closes the mobile menu after following an in-page link. */
function closeMenu(): void {
  isMenuOpen.value = false
}
</script>

<template>
<header id="header" class="header dds-header dds-main">
    <input id="dds-main-toggle" v-model="isMenuOpen" class="dds-main-toggle" type="checkbox" aria-hidden="true">
    <div class="dds-main-bar">
      <a class="dds-main-logo" href="./" aria-label="&#1057;&#1085;&#1101;&#1087;&#1073;&#1080;&#1083;&#1076;" target="_self">
        <img :src="useAssetUrl('assets/images/582db07d8ccd60da.svg')" alt="Снэпбилд" width="153" height="22">
      </a>
      <nav class="dds-main-nav" aria-label="&#1054;&#1089;&#1085;&#1086;&#1074;&#1085;&#1072;&#1103; &#1085;&#1072;&#1074;&#1080;&#1075;&#1072;&#1094;&#1080;&#1103;">
        <a class="dds-main-link" href="#process"><span>Продукт</span></a>
        <a class="dds-main-link" href="#use-cases"><span>Возможности</span></a>
        <a class="dds-main-link" href="#features"><span>Безопасность</span></a>

        <a class="dds-main-link" href="#faq"><span>FAQ</span></a>
      </nav>
      <div class="dds-main-actions">
        <a class="dds-btn dds-btn--l dds-btn--secondary dds-main-demo" href="https://builder.snapbuild.ru/" target="_self"><span>Начать сейчас</span></a>
        <label class="dds-main-burger" for="dds-main-toggle" role="button" tabindex="0" aria-controls="dds-main-menu" :aria-expanded="isMenuOpen" :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'" @keydown.enter.prevent="isMenuOpen = !isMenuOpen" @keydown.space.prevent="isMenuOpen = !isMenuOpen"><span class="dds-main-burger-icon"/></label>
      </div>
    </div>
    <nav id="dds-main-menu" class="dds-main-menu" aria-label="Мобильная навигация" :aria-hidden="!isMenuOpen">
      <a class="dds-main-menu-link" href="#use-cases" @click="closeMenu"><span>Возможности</span></a>
      <a class="dds-main-menu-link" href="#process" @click="closeMenu"><span>Продукт</span></a>
      <a class="dds-main-menu-link" href="#features" @click="closeMenu"><span>Безопасность</span></a>

      <a class="dds-main-menu-link" href="#faq" @click="closeMenu"><span>FAQ</span></a>
      <a class="dds-btn dds-btn--l dds-btn--secondary" href="https://builder.snapbuild.ru/"><span>Начать сейчас</span></a>
    </nav>
  </header>
</template>
