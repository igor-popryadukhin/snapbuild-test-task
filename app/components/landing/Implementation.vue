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
