<!-- Renders the LandingFaq section of the landing page. -->
<template>
<section id="faq" class="faq dds-faq dds-accordion">
    <div class="dds-accordion-header">
      <h2 class="dds-accordion-title">Часто задаваемые вопросы</h2>
      <p class="dds-accordion-subtitle">Ответы, которые помогут вам принять решение уверенно — без рисков для бренда и безопасности</p>
    </div>
    <div class="dds-accordion-list">
      <div class="dds-accordion-col">
      <div class="dds-accordion-item">
        <input id="dds-faq-8" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-8">
          <p class="dds-accordion-question">Что можно создавать в Снэпбилде?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Все основные форматы маркетинговых материалов — в едином фирменном стиле:<br><br>Сайты — от промо-страниц до многостраничных корпоративных сайтов и веб-приложений: калькуляторов, дашбордов, панелей управления. Ограничений по масштабу нет.<br><br>Изображения — рекламные материалы, иллюстрации, OG-изображения в фирменном стиле, до 4K, с автоматическим ресайзом под каждую площадку и плейсмент.<br><br>Видео — генерация и редактирование роликов в стиле бренда; ключевые кадры создаются и меняются в режиме «Изображения», версии — под каждую платформу.<br><br>Баннеры — рекламные креативы: мастер-баннер разворачивается в адаптации под площадки и плейсменты.<br><br>Презентации — питч-деки и клиентские предложения в вашей дизайн-системе.<br><br>Все создается в рамках вашего бренда — из одной идеи получается полный набор материалов компании.</p>
        </div>
      </div><div class="dds-accordion-item">
        <input id="dds-faq-1" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-1">
          <p class="dds-accordion-question">Как работает анализ бренда?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Система анализирует существующие интерфейсы, графические материалы и компоненты. Выделяются цветовые схемы, типографика, сетки, отступы и архитектура элементов. На основе этих данных формируется модель дизайн-системы, которая автоматически применяется ко всем новым интерфейсам.</p>
        </div>
      </div>
      <div class="dds-accordion-item">
        <input id="dds-faq-2" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-2">
          <p class="dds-accordion-question">Можно ли экспортировать решение в существующую инфраструктуру?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Да. Система формирует чистую структуру интерфейса, пригодную для интеграции в текущую среду разработки (React, Vue, Angular, HTML/CSS), интеграции с GitHub, GitLab, CI/CD. Поддерживается прямое подключение к корпоративным системам контроля версий и конвейерам сборки.</p>
        </div>
      </div>
      <div class="dds-accordion-item">
        <input id="dds-faq-3" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-3">
          <p class="dds-accordion-question">Действительно ли интерфейс полностью соответствует дизайн-системе?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Да. Каждый элемент формируется строго по правилам вашей архитектуры: цвета, типографика, отступы, состояния компонентов. Ручная проверка соответствия не требуется. Контроль встроен на уровне системы.</p>
        </div>
      </div>
      </div>
      <div class="dds-accordion-col">
      <div class="dds-accordion-item">
        <input id="dds-faq-4" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-4">
          <p class="dds-accordion-question">В чем отличие от универсальных систем на базе искусственного интеллекта?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Универсальные решения гибкие, но нестабильные в применении бренд-правил. Наша платформа строит интерфейсы в рамках корпоративной архитектуры, с учетом бизнес-логики и требований безопасности. Генерация — управляемая, а не случайная.</p>
        </div>
      </div>
      <div class="dds-accordion-item">
        <input id="dds-faq-5" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-5">
          <p class="dds-accordion-question">Чем это отличается от конструкторов без программирования?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Конструкторы используют жесткие шаблоны. Здесь применяется компонентная архитектура с гарантированным соблюдением дизайн-системы. Это не набор шаблонов, а управляемая система сборки интерфейсов.</p>
        </div>
      </div>
      <div class="dds-accordion-item">
        <input id="dds-faq-6" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-6">
          <p class="dds-accordion-question">В чем отличие от популярных AI-инструментов для создания сайтов?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Такие решения ориентированы на скорость и гибкость, но не гарантируют соблюдение корпоративных стандартов: каждая генерация может выглядеть по-новому. Снэпбилд сочетает ту же скорость с автоматическим соблюдением вашей дизайн-системы, интеграцией бизнес-логики и работой в контуре безопасности компании — контроль бренда встроен по умолчанию. Кроме того, зарубежные сервисы зависят от моделей из санкционных юрисдикций; Снэпбилд построен так, чтобы этой зависимости не было вовсе.</p>
        </div>
      </div>
      <div class="dds-accordion-item">
        <input id="dds-faq-7" type="checkbox" class="dds-accordion-state">
        <label class="dds-accordion-head" for="dds-faq-7">
          <p class="dds-accordion-question">Возможна ли работа в закрытом корпоративном облаке?</p>
          <span class="dds-accordion-icon"><img :src="useAssetUrl('assets/images/c2663c497fb468e1.webp')" style="display: block; object-fit: fill;" width="100%" height="100%" alt=""></span>
        </label>
        <div class="dds-accordion-panel">
          <p class="dds-accordion-answer">Да. Поддерживается развертывание в изолированной инфраструктуре без доступа к внешней сети. Данные и вычисления остаются внутри вашей корпоративной среды.</p>
        </div>
      </div>
      </div>

    </div>
  </section>
</template>
