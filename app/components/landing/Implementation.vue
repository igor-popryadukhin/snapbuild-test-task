<!-- Explains the ordered, accountable path from brand audit to team-wide Snapbuild adoption. -->
<script setup lang="ts">
import { implementationSteps } from '~/data/landing'
</script>

<template>
  <section id="implementation" class="implementation" aria-labelledby="implementation-title">
    <div class="implementation__inner">
      <header class="implementation__header">
        <p class="implementation__label">Внедрение</p>
        <h2 id="implementation-title" class="implementation__title">Как проходит внедрение</h2>
        <p class="implementation__intro">Начинаем с ваших процессов и запускаем команду по понятному плану — с ответственными и результатом на каждом этапе.</p>
      </header>

      <ol class="implementation__timeline">
        <li v-for="(step, index) in implementationSteps" :key="step.id" class="implementation__step">
          <div class="implementation__marker" aria-hidden="true">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="implementation__content">
            <div class="implementation__summary">
              <h3>{{ step.title }}</h3>
              <p class="implementation__description">{{ step.description }}</p>
            </div>
            <dl class="implementation__meta">
              <div><dt>Срок</dt><dd>{{ step.duration }}</dd></div>
              <div><dt>Участники</dt><dd>{{ step.participants }}</dd></div>
              <div><dt>Результат</dt><dd>{{ step.result }}</dd></div>
            </dl>
          </div>
        </li>
      </ol>

      <footer class="implementation__footer">
        <p>Покажем, как этот план будет выглядеть для вашей команды.</p>
        <a class="dds-launch-btn" href="https://t.me/ochen_darya" target="_blank" rel="noopener noreferrer"><span class="dds-launch-btn-text">Запросить демонстрацию</span></a>
      </footer>
    </div>
  </section>
</template>

<style scoped lang="scss">
.implementation { box-sizing: border-box; width: 100%; max-width: calc(100vw - 16px); padding: clamp(64px, 7vw, 100px) max(16px, 2.78vw); overflow: hidden; border-radius: 16px; color: #111; font-family: var(--font-primary, "TT Commons Pro", sans-serif); background-color: #fff; background-image: linear-gradient(157deg, #fff 10%, #ffd1b9 37%, #ffabbc 54%, #ffb8eb 69%, #d7d9ff 87%, #fff 104%); }
.implementation__inner { --implementation-rail: clamp(96px, 9.5vw, 136px); box-sizing: border-box; width: min(100%, 1360px); margin: 0 auto; }
.implementation__header { display: grid; grid-template-columns: var(--implementation-rail) minmax(0, 1.25fr) minmax(260px, 1fr); gap: 32px; align-items: start; margin-bottom: clamp(48px, 6vw, 84px); }
.implementation__label, .implementation__title, .implementation__intro, h3, p, dl, dd { margin: 0; }
.implementation__label, dt { color: rgba(0, 0, 0, .58); font-size: 14px; line-height: 1.4; text-transform: uppercase; letter-spacing: .08em; }
.implementation__title { max-width: 600px; font-size: clamp(40px, 4.2vw, 60px); font-weight: 500; line-height: 1.02; letter-spacing: -.035em; }
.implementation__intro { max-width: 430px; color: #5a5b62; font-size: 18px; line-height: 1.45; }
.implementation__timeline { margin: 0; padding: 0; overflow: hidden; border: 1px solid rgba(255, 255, 255, .64); border-radius: 20px; list-style: none; background: rgba(255, 255, 255, .56); backdrop-filter: blur(24px); }
.implementation__step { display: grid; grid-template-columns: var(--implementation-rail) minmax(0, 1fr); gap: 32px; }
.implementation__marker { position: relative; display: flex; align-items: center; justify-content: center; padding: 30px 0; }
.implementation__marker::before { position: absolute; top: 0; bottom: 0; left: 50%; z-index: 1; width: 2px; background: #cfa7cd; transform: translateX(-50%); content: ''; }
.implementation__step:first-child .implementation__marker::before { top: 50%; }
.implementation__step:last-child .implementation__marker::before { bottom: 50%; }
.implementation__marker span { position: relative; z-index: 2; display: grid; width: 48px; height: 48px; place-items: center; border: 2px solid rgba(255, 255, 255, .9); border-radius: 50%; color: #111; font-size: 15px; font-weight: 500; background: linear-gradient(135deg, #ffb0c5, #d7d9ff); box-shadow: 0 8px 24px rgba(143, 99, 151, .18); }
.implementation__content { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(280px, .85fr); gap: clamp(40px, 5vw, 80px); padding: 36px 32px 36px 0; border-bottom: 1px solid rgba(0, 0, 0, .09); }
.implementation__step:last-child .implementation__content { border-bottom: 0; }
.implementation__summary h3 { max-width: 650px; font-size: clamp(26px, 2.4vw, 36px); font-weight: 500; line-height: 1.1; letter-spacing: -.025em; }
.implementation__description { max-width: 680px; margin-top: 18px; color: #5a5b62; font-size: 18px; line-height: 1.45; }
.implementation__meta { display: flex; flex-direction: column; border-left: 1px solid rgba(0, 0, 0, .1); }
.implementation__meta div { display: grid; grid-template-columns: 92px minmax(0, 1fr); gap: 16px; padding: 14px 0 14px 24px; border-bottom: 1px solid rgba(0, 0, 0, .1); }
.implementation__meta div:first-child { padding-top: 0; }
.implementation__meta div:last-child { padding-bottom: 0; border-bottom: 0; }
.implementation__meta dd { font-size: 16px; line-height: 1.35; }
.implementation__footer { display: flex; justify-content: space-between; align-items: center; gap: 32px; margin-top: 40px; padding: 28px 32px; border: 1px solid rgba(255, 255, 255, .7); border-radius: 16px; color: #111; background: rgba(255, 255, 255, .62); backdrop-filter: blur(24px); }
.implementation__footer p { max-width: 620px; font-size: clamp(22px, 2.2vw, 30px); line-height: 1.15; }
.implementation__footer a { flex: none; }
.implementation__footer a:focus-visible { outline: 2px solid #111; outline-offset: 3px; }

@media (max-width: 1023px) {
  .implementation__inner { --implementation-rail: clamp(88px, 12vw, 112px); }
  .implementation__header { grid-template-columns: var(--implementation-rail) minmax(0, 1fr); }
  .implementation__intro { grid-column: 2; }
  .implementation__step { grid-template-columns: var(--implementation-rail) minmax(0, 1fr); }
  .implementation__content { grid-template-columns: 1fr; gap: 28px; padding-right: 24px; }
  .implementation__meta { border-top: 1px solid rgba(0, 0, 0, .1); border-left: 0; }
  .implementation__meta div { padding: 12px 0; }
  .implementation__meta div:first-child { padding-top: 12px; }
  .implementation__meta div:last-child { padding-bottom: 0; }
}

@media (max-width: 767px) {
  .implementation__inner { --implementation-rail: 48px; }
  .implementation__header { display: block; }
  .implementation__label { margin-bottom: 22px; }
  .implementation__intro { margin-top: 20px; font-size: 16px; }
  .implementation__step { grid-template-columns: var(--implementation-rail) minmax(0, 1fr); gap: 18px; }
  .implementation__marker { padding: 24px 0; }
  .implementation__marker span { width: 40px; height: 40px; }
  .implementation__content { padding: 24px 0; }
  .implementation__summary h3 { font-size: 26px; }
  .implementation__description { margin-top: 14px; font-size: 16px; }
  .implementation__meta { gap: 0; }
  .implementation__meta div { display: grid; grid-template-columns: 80px minmax(0, 1fr); gap: 12px; }
  .implementation__footer { align-items: stretch; flex-direction: column; padding: 24px; }
  .implementation__footer a { text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  .implementation__footer a { transition: none; }
}
</style>
