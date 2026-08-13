<!-- Shows an explicitly illustrative measurement model for Snapbuild adoption. -->
<script setup lang="ts">
import { effectComparisons, effectMetrics } from '~/data/landing'
</script>

<template>
  <section id="effect" class="measurable-effect" aria-labelledby="effect-title">
    <div class="measurable-effect__inner">
      <header class="measurable-effect__header">
        <p class="measurable-effect__label">Измеримый эффект</p>
        <h2 id="effect-title" class="measurable-effect__title">Ценность, которую видно в процессе</h2>
        <p class="measurable-effect__intro">На пилоте фиксируем показатели до и после внедрения. Ниже — пример оценки скорости, консистентности и масштаба.</p>
      </header>

      <dl class="measurable-effect__metrics" aria-label="Пример целевых показателей">
        <div v-for="metric in effectMetrics" :key="metric.id" class="measurable-effect__metric">
          <dt>
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </dt>
          <dd>{{ metric.context }}</dd>
        </div>
      </dl>

      <div class="measurable-effect__comparison" aria-labelledby="effect-comparison-title">
        <div class="measurable-effect__comparison-header">
          <div>
            <p>Изменение процесса</p>
            <h3 id="effect-comparison-title">До и со Снэпбилдом</h3>
          </div>
          <div class="measurable-effect__legend" aria-hidden="true">
            <span>До</span><span>Со Снэпбилдом</span>
          </div>
        </div>

        <dl class="measurable-effect__rows">
          <div v-for="item in effectComparisons" :key="item.id" class="measurable-effect__row">
            <dt>{{ item.criterion }}</dt>
            <dd>
              <span class="measurable-effect__mobile-label">До</span>
              {{ item.before }}
            </dd>
            <dd class="measurable-effect__after">
              <span class="measurable-effect__mobile-label">Со Снэпбилдом</span>
              {{ item.after }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
