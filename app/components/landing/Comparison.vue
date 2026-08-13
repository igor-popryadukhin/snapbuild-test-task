<!-- Renders the data-driven comparison of marketing-production approaches. -->
<script setup lang="ts">
import { comparisonRows } from '~/data/landing'

const comparisonHeaders = ['снэпбилд', 'Claude + Figma MCP', 'No-code платформы', 'Cursor', 'Традиционный']

/** Reports whether a comparison cell includes the positive visual-editor mark. */
function hasCheck(rowIndex: number, cellIndex: number): boolean {
  return comparisonRows[rowIndex]?.checks?.includes(cellIndex) ?? false
}
</script>

<template>
  <section id="compare" class="compare dds-compare dds-benefit">
    <header class="dds-benefit-header">
      <h2 class="dds-benefit-title">Почему команды выбирают Снэпбилд</h2>
      <p class="dds-benefit-subtitle">Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками</p>
    </header>
    <div class="dds-benefit-scroll">
      <div class="sds-compare-table" role="region" aria-label="Сравнение способов создания маркетинговых материалов">
        <div class="sds-compare-brand-border" aria-hidden="true" />
        <div class="sds-compare-row sds-compare-row--head">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Особенности</span></div>
          <div v-for="(header, index) in comparisonHeaders" :key="header" class="sds-compare-cell" :class="{ 'sds-compare-cell--narrow': index === 2 }"><span :class="{ 'sds-compare-brandname': index === 0 }">{{ header }}</span></div>
        </div>
        <div v-for="(row, rowIndex) in comparisonRows" :key="row.id" class="sds-compare-row">
          <div class="sds-compare-cell sds-compare-cell--label"><span>{{ row.label }}</span></div>
          <div v-for="(value, cellIndex) in row.values" :key="cellIndex" class="sds-compare-cell">
            <span v-if="hasCheck(rowIndex, cellIndex)" class="sds-check"><img :src="useAssetUrl('assets/images/a4ce0581ce7807b6.svg')" alt="Да" width="100%" height="100%"></span>
            <span>{{ value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
