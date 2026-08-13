<script setup lang="ts">
const sections = [
  ['01', 'Сценарии использования', 'От идеи до полной кампании для маркетинга, дизайна и продаж.'],
  ['02', 'Процесс внедрения', 'Понятный путь от аудита дизайн-системы до запуска команды.'],
  ['03', 'Измеримый эффект', 'Метрики скорости, консистентности и экономии ресурсов.'],
  ['04', 'Истории клиентов', 'Результаты команд, для которых бренд — закон.'],
  ['05', 'Запросить демо', 'Валидируемая форма с понятными состояниями отправки.'],
]
</script>

<template>
  <section id="capabilities" class="section section--dark">
    <div class="container">
      <p class="eyebrow eyebrow--light">Архитектура проекта</p>
      <div class="section-heading">
        <h2>Пять новых секций — одна цельная история</h2>
        <p>Каркас готов к содержательной и визуальной проработке после фиксации дизайн-паттернов исходного лендинга.</p>
      </div>
      <ol class="blueprint-grid">
        <li v-for="section in sections" :key="section[0]" class="blueprint-card">
          <span>{{ section[0] }}</span>
          <h3>{{ section[1] }}</h3>
          <p>{{ section[2] }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
