<!-- Renders the data-driven FAQ as two responsive disclosure columns. -->
<script setup lang="ts">
import { faqItems } from '~/data/landing'

const columns = [faqItems.slice(0, 4), faqItems.slice(4)]
</script>

<template>
  <section id="faq" class="faq dds-faq dds-accordion">
    <UiSectionHeader
      title="Частые вопросы"
      description="Ответы о возможностях, интеграции и безопасности платформы"
    />
    <div class="dds-accordion-grid">
      <div v-for="(column, index) in columns" :key="index" class="dds-accordion-col">
        <UiDisclosureItem v-for="item in column" :key="item.id" v-bind="item" />
      </div>
    </div>
  </section>
</template>
