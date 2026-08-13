<!-- Shows role-specific Snapbuild workflows in an accessible, height-stable tab panel. -->
<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { roleScenarios } from '~/data/landing'

const { activeIndex, select, selectFromKeyboard } = useScenarioTabs(roleScenarios.length)
const activeScenario = computed(() => roleScenarios[activeIndex.value]!)
const activeScenarioImage = computed(() => useAssetUrl(activeScenario.value.image))

/** Moves selection and DOM focus together for keyboard tab navigation.
 * @param event Keyboard event raised by a role tab.
 * @param index Zero-based index of the focused tab.
 */
async function handleTabKeydown(event: KeyboardEvent, index: number): Promise<void> {
  const nextIndex = selectFromKeyboard(event, index)
  if (nextIndex === null) return
  await nextTick()
  document.getElementById(`scenario-tab-${roleScenarios[nextIndex]!.id}`)?.focus()
}
</script>

<template>
  <section id="scenarios" class="role-scenarios" aria-labelledby="scenarios-title">
    <div class="role-scenarios__inner">
      <header class="role-scenarios__header">
        <p class="role-scenarios__label">Сценарии использования</p>
        <h2 id="scenarios-title" class="role-scenarios__title">Один инструмент<br>для всей команды</h2>
        <p class="role-scenarios__intro">От первого брифа до готового материала — каждый участник работает со своей задачей, а бренд остаётся целостным.</p>
      </header>

      <div class="role-scenarios__tabs" role="tablist" aria-label="Роли в команде">
        <button
          v-for="(scenario, index) in roleScenarios"
          :id="`scenario-tab-${scenario.id}`"
          :key="scenario.id"
          class="role-scenarios__tab"
          :class="{ 'role-scenarios__tab--active': activeIndex === index }"
          type="button"
          role="tab"
          :aria-selected="activeIndex === index"
          :aria-controls="`scenario-panel-${scenario.id}`"
          :tabindex="activeIndex === index ? 0 : -1"
          @click="select(index)"
          @keydown="handleTabKeydown($event, index)"
        >
          <span>{{ scenario.role }}</span>
        </button>
      </div>

      <div class="role-scenarios__panel-shell">
        <article
          :id="`scenario-panel-${activeScenario.id}`"
          :key="activeScenario.id"
          class="role-scenarios__panel"
          role="tabpanel"
          :aria-labelledby="`scenario-tab-${activeScenario.id}`"
          :style="{ '--scenario-accent': activeScenario.accent }"
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

<style scoped lang="scss">
.role-scenarios { padding: clamp(56px, 7vw, 100px) max(16px, 2.78vw); color: #fff; font-family: var(--font-primary, "TT Commons Pro", sans-serif); background: #111; }
.role-scenarios__inner { width: min(100%, 1360px); margin: 0 auto; }
.role-scenarios__header { display: grid; grid-template-columns: 1fr 1.3fr 0.8fr; align-items: start; gap: 32px; margin-bottom: clamp(40px, 5vw, 72px); }
.role-scenarios__label, .role-scenarios__intro, .role-scenarios__eyebrow, h3, h4, p { margin: 0; }
.role-scenarios__label, .role-scenarios__eyebrow { color: #aaa; font-size: 14px; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
.role-scenarios__title { margin: 0; color: #fff; font-size: clamp(40px, 4.2vw, 60px); font-weight: 500; line-height: 1.02; letter-spacing: -.035em; }
.role-scenarios__intro { max-width: 330px; color: #aaa; font-size: 18px; line-height: 1.4; }
.role-scenarios__tabs { display: grid; grid-template-columns: repeat(4, 1fr); }
.role-scenarios__tab { display: flex; justify-content: space-between; gap: 16px; padding: 20px 16px; border: 0; border-top: 1px solid #464646; border-radius: 0 !important; color: #b8b8b8; font: inherit; font-size: 18px; text-align: left; background: #202020; cursor: pointer; transition: color 180ms ease, background-color 180ms ease; }
.role-scenarios__tab:first-child { border-radius: 10px 0 0 !important; }
.role-scenarios__tab:last-child { border-radius: 0 10px 0 0 !important; }
.role-scenarios__tab:hover { color: #fff; background: #2a2a2a; }
.role-scenarios__tab:focus-visible { position: relative; z-index: 1; outline: 2px solid #fff; outline-offset: -3px; }
.role-scenarios__tab--active { color: #111; background: #fff; }
.role-scenarios__tab--active:hover { color: #111; background: #fff; }
.role-scenarios__panel-shell { min-height: 530px; }
.role-scenarios__panel { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); min-height: 530px; background: #fff; color: #111; }
.role-scenarios__summary { display: flex; flex-direction: column; padding: clamp(28px, 3.4vw, 50px); border-right: 1px solid #dedede; }
.role-scenarios__summary h3 { max-width: 520px; margin-top: 18px; font-size: clamp(32px, 3.2vw, 46px); font-weight: 500; line-height: 1.05; letter-spacing: -.03em; }
.role-scenarios__visual { position: relative; flex: 1; min-height: 190px; margin-top: 40px; overflow: hidden; border-radius: 20px; background: #f1f1f2; }
.role-scenarios__visual img { width: 100%; height: 100%; object-fit: cover; }
.role-scenarios__steps { display: grid; grid-template-rows: repeat(3, 1fr); margin: 0; padding: 0; list-style: none; }
.role-scenarios__steps li { padding: clamp(26px, 3vw, 44px); border-bottom: 1px solid #dedede; }
.role-scenarios__steps li:last-child { border-bottom: 0; }
.role-scenarios__steps h4 { margin-bottom: 8px; font-size: 22px; font-weight: 500; }
.role-scenarios__steps p { max-width: 560px; color: #5a5b62; font-size: 17px; line-height: 1.45; }

@media (max-width: 1023px) {
  .role-scenarios__header { grid-template-columns: 1fr 2fr; }
  .role-scenarios__intro { grid-column: 2; }
  .role-scenarios__panel-shell, .role-scenarios__panel { min-height: 720px; }
  .role-scenarios__panel { grid-template-columns: 1fr; }
  .role-scenarios__summary { border-right: 0; border-bottom: 1px solid #dedede; }
  .role-scenarios__visual { flex: none; height: 190px; }
}

@media (max-width: 767px) {
  .role-scenarios__header { display: block; }
  .role-scenarios__label { margin-bottom: 24px; }
  .role-scenarios__intro { margin-top: 20px; font-size: 16px; }
  .role-scenarios__tabs { display: flex; overflow-x: auto; scrollbar-width: none; }
  .role-scenarios__tabs::-webkit-scrollbar { display: none; }
  .role-scenarios__tab { flex: 0 0 148px; min-width: 148px; }
  .role-scenarios__panel-shell, .role-scenarios__panel { min-height: 830px; }
  .role-scenarios__summary h3 { font-size: 32px; }
  .role-scenarios__visual { min-height: 170px; margin-top: 28px; }
  .role-scenarios__steps li { padding: 24px 20px; }
  .role-scenarios__steps p { font-size: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .role-scenarios__tab { transition: none; }
}
</style>
