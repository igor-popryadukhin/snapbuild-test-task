<!-- Renders the release roadmap with a draggable horizontal timeline. -->
<script setup lang="ts">
const roadmapScroller = useTemplateRef<HTMLElement>('roadmap-scroller')
const { isDragging } = useDragScroll(roadmapScroller)
</script>

<template>
<section id="roadmap" class="roadmap dds-rmap">
    <header class="dds-rmap-header">
      <h2 class="dds-rmap-title">Каждый день — новый релиз</h2>
      <p class="dds-rmap-subtitle">Приоритизируем бэклог для ваших целей</p>
    </header>
    <div
      ref="roadmap-scroller"
      class="dds-rmap-scroller"
      :class="{ 'is-dragging': isDragging }"
      tabindex="0"
      role="region"
      aria-label="Дорожная карта релизов. Перетаскивайте горизонтально для просмотра"
    >
      <div class="dds-rmap-track" style="--dds-rmap-progress: 8;">
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Сайты за 5 минут</h3>
            <p class="dds-rmap-desc">Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков</p>
            <p class="dds-rmap-date">Декабрь, 2025</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Консистентные AI-иллюстрации</h3>
            <p class="dds-rmap-desc">Настраиваете фирменный стиль один раз — графика для каждой секции сайта в едином виде через стилевые пресеты</p>
            <p class="dds-rmap-date">Январь, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Дизайн-система из вашего сайта</h3>
            <p class="dds-rmap-desc">Сканируем существующие страницы и собираем из них готовую дизайн-систему; AI сам выстраивает структуру</p>
            <p class="dds-rmap-date">Февраль, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Режим изображений</h3>
            <p class="dds-rmap-desc">Брендовая графика в один клик: управление стилями и темами, десятки параметров редактирования</p>
            <p class="dds-rmap-date">Март, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Генерация видео</h3>
            <p class="dds-rmap-desc">Видео из ваших изображений с ключевыми кадрами; AI точнее на 78%, панель рассуждений и управление правами</p>
            <p class="dds-rmap-date">Апрель, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Ресайзы изображений</h3>
            <p class="dds-rmap-desc">Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и другие) с автоматическим бюджетом веса на экспорт</p>
            <p class="dds-rmap-date">Май, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Расширенный редактор, как в Figma</h3>
            <p class="dds-rmap-desc">Слои, изменение размеров любого контейнера, превью структуры в чате, версии промптов и ветвление диалогов</p>
            <p class="dds-rmap-date">Июнь, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Канвас, баннеры и презентации</h3>
            <p class="dds-rmap-desc">Канвас во всех режимах; новые режимы — генерация рекламных баннеров и корпоративных презентаций</p>
            <p class="dds-rmap-date">Июль, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item is-reached">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">ИИ-маркетолог</h3>
            <p class="dds-rmap-desc">Следит за данными, сам обновляет ваши материалы и собирает кампанию целиком — от изображений до сайта</p>
            <p class="dds-rmap-date">Август, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Компонентный подход</h3>
            <p class="dds-rmap-desc">AI сам компонует секции сайтов из элементов вашей дизайн-библиотеки</p>
            <p class="dds-rmap-date">Сентябрь, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Предиктивные рекомендации</h3>
            <p class="dds-rmap-desc">Платформа сама предлагает, что обновить в кампаниях — от секций сайта до баннеров</p>
            <p class="dds-rmap-date">Октябрь, 2026</p>
          </div>
        </article>
        <article class="dds-rmap-item">
          <span class="dds-rmap-dot"><span class="dds-rmap-dot-halo"/><span class="dds-rmap-dot-core"/></span>
          <div class="dds-rmap-body">
            <h3 class="dds-rmap-name">Инфраструктура</h3>
            <p class="dds-rmap-desc">Развертывание в вашей сети и контуре</p>
            <p class="dds-rmap-date">Ноябрь, 2026</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
