<!-- Presents clearly labelled illustrative customer workflows with accessible tab navigation. -->
<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { customerStories } from '~/data/landing'

const { activeIndex, select, selectFromKeyboard } = useScenarioTabs(customerStories.length)
const activeStory = computed(() => customerStories[activeIndex.value]!)

/** Selects the previous or next story and wraps at the collection boundary.
 * @param direction Relative movement through the story collection.
 */
function move(direction: -1 | 1): void {
  select((activeIndex.value + direction + customerStories.length) % customerStories.length)
}

/** Moves tab selection and focus together for keyboard navigation.
 * @param event Keyboard event raised by a story tab.
 * @param index Zero-based index of the focused tab.
 */
async function handleTabKeydown(event: KeyboardEvent, index: number): Promise<void> {
  const nextIndex = selectFromKeyboard(event, index)
  if (nextIndex === null) return
  await nextTick()
  document.getElementById(`customer-story-tab-${customerStories[nextIndex]!.id}`)?.focus()
}
</script>

<template>
  <section id="customer-stories" class="customer-stories" aria-labelledby="customer-stories-title">
    <div class="customer-stories__inner">
      <header class="customer-stories__header">
        <p class="customer-stories__label">Истории клиентов</p>
        <h2 id="customer-stories-title">Как команды применяют Снэпбилд</h2>
        <p class="customer-stories__intro">Три рабочих маршрута — от исходной задачи до материала, готового к следующему решению.</p>
      </header>

      <div class="customer-stories__navigation">
        <div class="customer-stories__tabs" role="tablist" aria-label="Демонстрационные истории команд">
          <button
            v-for="(story, index) in customerStories"
            :id="`customer-story-tab-${story.id}`"
            :key="story.id"
            class="customer-stories__tab"
            :class="{ 'customer-stories__tab--active': activeIndex === index }"
            type="button"
            role="tab"
            :aria-selected="activeIndex === index"
            :aria-controls="`customer-story-panel-${story.id}`"
            :tabindex="activeIndex === index ? 0 : -1"
            @click="select(index)"
            @keydown="handleTabKeydown($event, index)"
          >
            <span class="customer-stories__tab-number">0{{ index + 1 }}</span>
            <span>{{ story.company }}</span>
          </button>
        </div>
      </div>

      <div class="customer-stories__layout">
        <div class="customer-stories__panel-shell">
          <article
            :id="`customer-story-panel-${activeStory.id}`"
            :key="activeStory.id"
            class="customer-stories__panel"
            role="tabpanel"
            :aria-labelledby="`customer-story-tab-${activeStory.id}`"
            :style="{ '--story-accent': activeStory.accent }"
          >
            <div class="customer-stories__identity">
              <span class="customer-stories__mark" aria-hidden="true">{{ activeStory.role.charAt(0) }}</span>
              <div>
                <p>{{ activeStory.role }}</p>
                <p>{{ activeStory.company }}</p>
              </div>
            </div>

            <div class="customer-stories__content">
              <p class="customer-stories__scenario-label">Демонстрационный сценарий</p>
              <h3>{{ activeStory.title }}</h3>
              <dl class="customer-stories__details">
                <div>
                  <dt>Исходная задача</dt>
                  <dd>{{ activeStory.task }}</dd>
                </div>
                <div>
                  <dt>Результат</dt>
                  <dd>{{ activeStory.result }}</dd>
                </div>
              </dl>
              <ul class="customer-stories__deliverables" aria-label="Состав результата">
                <li v-for="item in activeStory.deliverables" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="customer-stories__controls">
          <p aria-live="polite" aria-atomic="true">
            <span>{{ activeIndex + 1 }}</span> / {{ customerStories.length }}
          </p>
          <div>
            <button type="button" aria-label="Предыдущая история" @click="move(-1)">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" aria-label="Следующая история" @click="move(1)">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customer-stories { padding: clamp(64px, 8vw, 116px) max(16px, 2.78vw); color: #111; font-family: var(--font-primary, "TT Commons Pro", sans-serif); background: #f5f5f6; }
.customer-stories__inner { width: min(100%, 1360px); margin: 0 auto; }
.customer-stories__header { display: grid; grid-template-areas: "label intro" "title intro"; grid-template-columns: minmax(0, 1.55fr) minmax(280px, .65fr); gap: 24px clamp(40px, 7vw, 108px); align-items: end; margin-bottom: clamp(48px, 6vw, 80px); }
.customer-stories__header p, .customer-stories__header h2, .customer-stories__panel p, .customer-stories__panel h3, .customer-stories__details, .customer-stories__controls p { margin: 0; }
.customer-stories__label, .customer-stories__scenario-label { color: #696a70; font-size: 14px; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
.customer-stories__label { grid-area: label; }
.customer-stories__header h2 { grid-area: title; max-width: 760px; font-size: clamp(42px, 5vw, 72px); font-weight: 500; line-height: .98; letter-spacing: -.045em; }
.customer-stories__intro { grid-area: intro; max-width: 340px; padding-bottom: 4px; color: #5a5b62; font-size: 18px; line-height: 1.4; }
.customer-stories__navigation { margin-bottom: 40px; border-bottom: 1px solid #d9d9da; }
.customer-stories__tabs { display: flex; min-width: 0; }
.customer-stories__tab { display: flex; align-items: baseline; gap: 10px; min-height: 58px; padding: 16px 20px; border: 0; border-bottom: 2px solid transparent; border-radius: 0 !important; color: #6a6b70; font: inherit; font-size: 17px; white-space: nowrap; text-align: left; background: transparent; cursor: pointer; transition: color 180ms ease, border-color 180ms ease; }
.customer-stories__tab:hover { color: #111; }
.customer-stories__tab:focus-visible { position: relative; z-index: 1; outline: 2px solid #111; outline-offset: -3px; }
.customer-stories__tab--active { border-bottom-color: #111; color: #111; }
.customer-stories__tab-number { color: #939491; font-size: 13px; }
.customer-stories__layout { display: grid; }
.customer-stories__panel-shell { min-height: 500px; }
.customer-stories__panel { display: grid; grid-template-columns: minmax(250px, .8fr) minmax(0, 2fr); min-height: 500px; overflow: hidden; border: 1px solid #dedee0; border-radius: 20px; color: #111; background: #fff; }
.customer-stories__identity { display: flex; flex-direction: column; justify-content: space-between; padding: clamp(32px, 3.5vw, 52px); border-right: 1px solid #ededee; background: #fafafa; }
.customer-stories__identity p:first-child { font-size: 22px; line-height: 1.2; }
.customer-stories__identity p:last-child { margin-top: 8px; color: #5a5b62; font-size: 15px; }
.customer-stories__mark { display: grid; width: 72px; height: 72px; place-items: center; border-radius: 50%; color: #111; font-size: 32px; font-weight: 500; background: var(--story-accent); }
.customer-stories__content { display: flex; flex-direction: column; padding: clamp(30px, 4.2vw, 60px); }
.customer-stories__scenario-label { color: #ff6d3d; }
.customer-stories__content h3 { max-width: 760px; margin-top: 18px; font-size: clamp(32px, 3.5vw, 50px); font-weight: 500; line-height: 1.02; letter-spacing: -.035em; }
.customer-stories__details { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 3vw, 48px); margin-top: auto; padding-top: 48px; }
.customer-stories__details div { padding-top: 16px; border-top: 1px solid #ededee; }
.customer-stories__details dt { margin-bottom: 10px; color: #77787d; font-size: 14px; text-transform: uppercase; letter-spacing: .06em; }
.customer-stories__details dd { margin: 0; color: #33343a; font-size: 17px; line-height: 1.4; }
.customer-stories__deliverables { display: flex; flex-wrap: wrap; gap: 8px; margin: 28px 0 0; padding: 0; list-style: none; }
.customer-stories__deliverables li { padding: 8px 12px; border: 1px solid #dedee0; border-radius: 999px; color: #5a5b62; font-size: 14px; }
.customer-stories__controls { display: flex; align-items: center; justify-content: space-between; padding-top: 24px; }
.customer-stories__controls p { color: #767773; font-size: 14px; }
.customer-stories__controls p span { color: #111; }
.customer-stories__controls > div { display: flex; gap: 8px; }
.customer-stories__controls button { display: grid; width: 48px; height: 48px; place-items: center; border: 1px solid #babbb8; border-radius: 50% !important; color: #111; font: inherit; font-size: 22px; background: transparent; cursor: pointer; transition: color 180ms ease, background-color 180ms ease; }
.customer-stories__controls button:hover { color: #fff; background: #111; }
.customer-stories__controls button:focus-visible { outline: 2px solid #111; outline-offset: 3px; }

@media (max-width: 1023px) {
  .customer-stories__header { grid-template-columns: minmax(0, 1.35fr) minmax(240px, .75fr); gap: 24px 40px; }
  .customer-stories__tabs { overflow-x: auto; scrollbar-width: none; }
  .customer-stories__tabs::-webkit-scrollbar { display: none; }
}

@media (max-width: 767px) {
  .customer-stories__header { display: block; margin-bottom: 36px; }
  .customer-stories__label { margin-bottom: 24px !important; }
  .customer-stories__intro { margin-top: 22px !important; font-size: 16px; }
  .customer-stories__navigation { margin-bottom: 28px; }
  .customer-stories__tab { flex: 0 0 auto; min-height: 58px; padding: 16px 14px; }
  .customer-stories__panel-shell { min-height: 660px; }
  .customer-stories__panel { grid-template-columns: 1fr; min-height: 660px; }
  .customer-stories__identity { flex-direction: row; align-items: center; justify-content: flex-start; gap: 18px; padding: 24px 20px; border-right: 0; border-bottom: 1px solid #ededee; }
  .customer-stories__mark { flex: 0 0 auto; width: 54px; height: 54px; font-size: 24px; }
  .customer-stories__content { padding: 30px 20px; }
  .customer-stories__content h3 { font-size: 32px; }
  .customer-stories__details { grid-template-columns: 1fr; margin-top: 36px; padding-top: 0; }
  .customer-stories__details dd { font-size: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .customer-stories__tab, .customer-stories__controls button { transition: none; }
}
</style>
