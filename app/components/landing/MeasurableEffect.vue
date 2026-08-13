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

<style scoped lang="scss">
.measurable-effect { box-sizing: border-box; width: 100%; max-width: calc(100vw - 16px); padding: clamp(64px, 7vw, 100px) max(16px, 2.78vw); overflow: hidden; border-radius: 16px; color: #111; font-family: var(--font-primary, "TT Commons Pro", sans-serif); background: #fff; }
.measurable-effect__inner { width: min(100%, 1360px); margin: 0 auto; }
.measurable-effect__header { display: grid; grid-template-areas: "label label" "title intro"; grid-template-columns: minmax(0, 1.5fr) minmax(280px, .7fr); gap: 24px clamp(40px, 7vw, 108px); align-items: end; margin-bottom: clamp(40px, 4vw, 56px); }
.measurable-effect__label, .measurable-effect__title, .measurable-effect__intro, .measurable-effect__comparison p, h3, dl, dd { margin: 0; }
.measurable-effect__label, .measurable-effect__comparison p, .measurable-effect__mobile-label { color: #777771; font-size: 14px; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
.measurable-effect__label { grid-area: label; }
.measurable-effect__title { grid-area: title; max-width: 760px; color: inherit; font-size: clamp(40px, 4.2vw, 60px); font-weight: 500; line-height: 1.02; letter-spacing: -.035em; }
.measurable-effect__intro { grid-area: intro; max-width: 390px; padding-bottom: 4px; color: #64645f; font-size: 18px; line-height: 1.45; }
.measurable-effect__metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #d8d8d2; border-bottom: 1px solid #d8d8d2; }
.measurable-effect__metric { min-width: 0; padding: clamp(28px, 3.3vw, 48px); border-right: 1px solid #d8d8d2; }
.measurable-effect__metric:first-child { padding-left: 0; }
.measurable-effect__metric:last-child { padding-right: 0; border-right: 0; }
.measurable-effect__metric dt { display: flex; flex-direction: column; min-height: 150px; }
.measurable-effect__metric strong { color: transparent; font-size: clamp(72px, 8vw, 116px); font-weight: 500; line-height: .82; letter-spacing: -.065em; font-variant-numeric: tabular-nums; background: linear-gradient(90deg, #ff6d3c, #ff6ba7 46%, #bb6dff); background-clip: text; -webkit-background-clip: text; }
.measurable-effect__metric dt span { max-width: 270px; margin-top: 24px; font-size: clamp(20px, 2vw, 27px); line-height: 1.05; }
.measurable-effect__metric dd { max-width: 330px; margin-top: 28px; color: #777771; font-size: 16px; line-height: 1.4; }
.measurable-effect__comparison { margin-top: clamp(56px, 7vw, 96px); border: 1px solid #d8d8d2; border-radius: 20px; overflow: hidden; background: #fff; }
.measurable-effect__comparison-header { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 24px; align-items: end; padding: clamp(28px, 3vw, 44px); background: linear-gradient(110deg, #fff7f2, #fff3f8 52%, #f5f2ff); }
.measurable-effect__comparison h3 { margin-top: 10px; color: inherit; font-size: clamp(30px, 3vw, 44px); font-weight: 500; line-height: 1.05; letter-spacing: -.03em; }
.measurable-effect__legend { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; color: #777771; font-size: 14px; text-transform: uppercase; letter-spacing: .08em; }
.measurable-effect__legend span:last-child { color: #cf467f; }
.measurable-effect__row { display: grid; grid-template-columns: minmax(180px, 1fr) repeat(2, minmax(0, 1fr)); gap: 24px; padding: 0 clamp(28px, 3vw, 44px); border-top: 1px solid #d8d8d2; }
.measurable-effect__row dt, .measurable-effect__row dd { padding-block: 28px; font-size: 18px; line-height: 1.35; }
.measurable-effect__row dt { color: #777771; }
.measurable-effect__row dd { border-left: 1px solid #d8d8d2; padding-left: 24px; }
.measurable-effect__after { color: #b83e72; }
.measurable-effect__mobile-label { display: none; }

@media (max-width: 1023px) {
  .measurable-effect__header { grid-template-columns: minmax(0, 1.4fr) minmax(240px, .8fr); gap: 24px 40px; }
  .measurable-effect__metric { padding-inline: 28px; }
  .measurable-effect__metric strong { font-size: clamp(64px, 9vw, 88px); }
  .measurable-effect__comparison-header { grid-template-columns: minmax(0, 1fr) minmax(0, 1.7fr); }
  .measurable-effect__row { grid-template-columns: minmax(140px, .8fr) repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 767px) {
  .measurable-effect__header { display: block; margin-bottom: 24px; }
  .measurable-effect__label { margin-bottom: 22px; }
  .measurable-effect__intro { margin-top: 20px; font-size: 16px; }
  .measurable-effect__metrics { grid-template-columns: 1fr; }
  .measurable-effect__metric, .measurable-effect__metric:first-child, .measurable-effect__metric:last-child { padding: 30px 0; border-right: 0; border-bottom: 1px solid #d8d8d2; }
  .measurable-effect__metric:last-child { border-bottom: 0; }
  .measurable-effect__metric dt { min-height: 0; }
  .measurable-effect__metric strong { font-size: 72px; }
  .measurable-effect__metric dt span { margin-top: 18px; font-size: 24px; }
  .measurable-effect__metric dd { margin-top: 18px; }
  .measurable-effect__comparison { border-radius: 14px; }
  .measurable-effect__comparison-header { display: block; padding: 24px 20px; }
  .measurable-effect__legend { display: none; }
  .measurable-effect__row { grid-template-columns: 1fr; gap: 0; padding: 0 20px 20px; }
  .measurable-effect__row dt { padding: 20px 0 12px; font-size: 16px; }
  .measurable-effect__row dd { padding: 16px; border: 0; border-radius: 8px; color: #454541; font-size: 16px; background: #f3f3f2; }
  .measurable-effect__row .measurable-effect__after { margin-top: 8px; color: #111; background: linear-gradient(110deg, #fff0e8, #ffeaf3 52%, #eee9ff); }
  .measurable-effect__mobile-label { display: block; margin-bottom: 5px; color: #777771; font-size: 11px; }
  .measurable-effect__after .measurable-effect__mobile-label { color: #a33b6b; }
}
</style>
