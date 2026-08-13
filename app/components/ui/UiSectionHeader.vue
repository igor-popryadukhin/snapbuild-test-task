<!-- Presents a consistent landing-section eyebrow, title and optional description. -->
<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  titleId?: string
  variant?: 'split' | 'stacked'
}>(), { eyebrow: undefined, description: undefined, titleId: undefined, variant: 'split' })
</script>

<template>
  <header class="ui-section-header" :class="`ui-section-header--${variant}`">
    <p v-if="eyebrow" class="ui-section-header__eyebrow">{{ eyebrow }}</p>
    <h2 :id="titleId" class="ui-section-header__title">{{ title }}</h2>
    <p v-if="description" class="ui-section-header__description">{{ description }}</p>
  </header>
</template>
