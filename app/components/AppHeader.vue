<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { label: 'Продукт', href: '#product' },
  { label: 'Возможности', href: '#capabilities' },
  { label: 'Безопасность', href: '#security' },
  { label: 'FAQ', href: '#faq' },
]
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="#" aria-label="Снэпбилд — на главную">снэпбилд</a>
      <nav class="site-nav" :class="{ 'site-nav--open': isOpen }" aria-label="Основная навигация">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="isOpen = false">{{ link.label }}</a>
      </nav>
      <a class="button button--small desktop-cta" href="#contact">Начать сейчас</a>
      <button class="menu-button" type="button" :aria-expanded="isOpen" aria-label="Открыть меню" @click="isOpen = !isOpen">
        <span /><span />
      </button>
    </div>
  </header>
</template>
