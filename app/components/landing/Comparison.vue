<!-- Renders the LandingComparison section of the landing page. -->
<template>
<section id="compare" class="compare dds-compare dds-benefit">
    <header class="dds-benefit-header">
      <h2 class="dds-benefit-title">Почему команды выбирают Снэпбилд</h2>
      <p class="dds-benefit-subtitle">Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками</p>
    </header>

    <div class="dds-benefit-scroll">
      <div class="sds-compare-table" role="region" aria-label="Сравнение способов создания маркетинговых материалов">
        <div class="sds-compare-brand-border" aria-hidden="true"/>

        <div class="sds-compare-row sds-compare-row--head">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Особенности</span></div>
          <div class="sds-compare-cell">
            <span class="sds-compare-brandname">снэпбилд</span>
          </div>
          <div class="sds-compare-cell">
            <span>Claude + Figma MCP</span>
          </div>
          <div class="sds-compare-cell sds-compare-cell--narrow">
            <span>No-code платформы</span>
          </div>
          <div class="sds-compare-cell">
            <span>Cursor</span>
          </div>
          <div class="sds-compare-cell">
            <span>Традиционный</span>
          </div>
        </div>

        <div class="sds-compare-row">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Time-to-market</span></div>
          <div class="sds-compare-cell"><span>5 минут</span></div>
          <div class="sds-compare-cell"><span>30–60 мин</span></div>
          <div class="sds-compare-cell"><span>2–3 дня</span></div>
          <div class="sds-compare-cell"><span>1–2 дня</span></div>
          <div class="sds-compare-cell"><span>3–5 недель</span></div>
        </div>

        <div class="sds-compare-row">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Дизайн-система</span></div>
          <div class="sds-compare-cell"><span>100%<br>точность</span></div>
          <div class="sds-compare-cell"><span>Частично, из Figma</span></div>
          <div class="sds-compare-cell"><span>Шаблоны</span></div>
          <div class="sds-compare-cell"><span>Вручную в коде</span></div>
          <div class="sds-compare-cell"><span>Вручную, через ревью</span></div>
        </div>

        <div class="sds-compare-row">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Визуальный редактор</span></div>
          <div class="sds-compare-cell">
            <span class="sds-check"><img :src="useAssetUrl('assets/images/a4ce0581ce7807b6.svg')" alt="" width="100%" height="100%"></span>
            <span>+ ИИ</span>
          </div>
          <div class="sds-compare-cell"><span>—</span></div>
          <div class="sds-compare-cell"><span class="sds-check"><img :src="useAssetUrl('assets/images/a4ce0581ce7807b6.svg')" alt="" width="100%" height="100%"></span><span/></div>
          <div class="sds-compare-cell">
            <span>—</span>
          </div>
          <div class="sds-compare-cell"><span>—</span></div>
        </div>

        <div class="sds-compare-row">
          <div class="sds-compare-cell sds-compare-cell--label"><span>Требуемые навыки</span></div>
          <div class="sds-compare-cell"><span>Нет</span></div>
          <div class="sds-compare-cell"><span>Промпты + код</span></div>
          <div class="sds-compare-cell"><span>Дизайн</span></div>
          <div class="sds-compare-cell"><span>Разработка</span></div>
          <div class="sds-compare-cell"><span>Полная команда</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
