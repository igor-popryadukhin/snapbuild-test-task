<!-- Shows role-specific Snapbuild workflows in an accessible, height-stable tab panel. -->
<script setup lang="ts">
import { computed } from 'vue'
import { roleScenarios } from '~/data/landing'

const { activeIndex, select } = useScenarioTabs(roleScenarios.length)
const activeScenario = computed(() => roleScenarios[activeIndex.value]!)
const activeScenarioImage = computed(() => useAssetUrl(activeScenario.value.image))
const scenarioTabs = roleScenarios.map(scenario => ({ id: scenario.id, label: scenario.role }))
const activeScenarioId = computed({
  get: () => activeScenario.value.id,
  set: (id: string) => select(roleScenarios.findIndex(scenario => scenario.id === id)),
})
</script>

<template>
  <section id="scenarios" class="role-scenarios" aria-labelledby="scenarios-title">
    <div class="role-scenarios__inner">
      <header class="role-scenarios__header">
        <p class="role-scenarios__label">Сценарии использования</p>
        <h2 id="scenarios-title" class="role-scenarios__title">Один инструмент<br>для всей команды</h2>
        <p class="role-scenarios__intro">От первого брифа до готового материала — каждый участник работает со своей задачей, а бренд остаётся целостным.</p>
      </header>

      <UiTabList v-model="activeScenarioId" class="role-scenarios__tabs" :items="scenarioTabs" label="Роли в команде" panel-id-prefix="scenario" />

      <div class="role-scenarios__panel-shell">
        <article
          :id="`scenario-panel-${activeScenario.id}`"
          :key="activeScenario.id"
          class="role-scenarios__panel"
          role="tabpanel"
          :aria-labelledby="`scenario-tab-${activeScenario.id}`"
        >
          <div class="role-scenarios__summary">
            <p class="role-scenarios__eyebrow">{{ activeScenario.eyebrow }}</p>
            <h3>{{ activeScenario.title }}</h3>
            <div class="role-scenarios__visual">
              <img
                :src="activeScenarioImage"
                :alt="activeScenario.imageAlt"
                width="1400"
                height="788"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>

          <ol class="role-scenarios__steps">
            <li><div><h4>Задача</h4><p>{{ activeScenario.task }}</p></div></li>
            <li><div><h4>Процесс</h4><p>{{ activeScenario.process }}</p></div></li>
            <li><div><h4>Результат</h4><p>{{ activeScenario.result }}</p></div></li>
          </ol>
        </article>
      </div>
    </div>
  </section>
</template>
