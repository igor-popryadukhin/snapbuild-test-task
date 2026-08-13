import type {
  CustomerStory,
  EffectComparison,
  EffectMetric,
  ImplementationStep,
  FaqItem, RoadmapItem, ProcessCard, SecurityFeature, LogoItem, ComparisonRow, NavigationLink,
  RoleScenario,
  UseCaseTab,
} from '~/types/landing'

/** Illustrative workflows; these entries are product scenarios, not verified testimonials. */
export const customerStories = [
  {
    id: 'campaign',
    image: 'assets/images/customer-story-marketing.webp',
    imageAlt: 'Портрет руководителя маркетинга в современном офисе',
    role: 'Руководитель маркетинга',
    company: 'Финтех-команда',
    title: 'Запуск кампании без разрыва между каналами',
    task: 'Подготовить страницу продукта, баннеры и презентацию для нового сегмента в единой визуальной системе.',
    result: 'Команда получает связанный комплект материалов, который можно уточнять и адаптировать из одного рабочего пространства.',
    deliverables: ['Лендинг', 'Баннеры', 'Презентация'],
  },
  {
    id: 'sales',
    image: 'assets/images/customer-story-sales.webp',
    imageAlt: 'Портрет менеджера по продажам в современном офисе',
    role: 'Менеджер по продажам',
    company: 'B2B-сервис',
    title: 'Предложение, собранное под контекст встречи',
    task: 'Превратить вводные о клиенте и выбранные кейсы в персональную презентацию перед встречей.',
    result: 'Менеджер получает структурированный черновик в фирменном стиле и самостоятельно обновляет аргументы перед показом.',
    deliverables: ['Структура', 'Слайды', 'Версия для отправки'],
  },
  {
    id: 'product',
    image: 'assets/images/customer-story-product.webp',
    imageAlt: 'Портрет продуктового дизайнера в современной студии',
    role: 'Продуктовый дизайнер',
    company: 'Цифровой продукт',
    title: 'Гипотеза становится наглядной до разработки',
    task: 'Собрать страницу для проверки нового сценария, не выходя за правила действующей дизайн-системы.',
    result: 'Команда обсуждает готовый интерактивный материал, фиксирует обратную связь и сохраняет компоненты для следующей итерации.',
    deliverables: ['Страница', 'Компоненты', 'Материал для теста'],
  },
] as const satisfies readonly CustomerStory[]

/** Illustrative metrics for a team producing recurring campaign materials. */
export const effectMetrics = [
  {
    id: 'speed',
    value: '6×',
    label: 'быстрее первый вариант',
    context: 'С 3 рабочих дней до 4 часов на комплект материалов',
  },
  {
    id: 'consistency',
    value: '90%',
    label: 'материалов без правок по бренду',
    context: '9 из 10 макетов проходят первичную проверку дизайн-системы',
  },
  {
    id: 'scale',
    value: '24',
    label: 'формата из одной идеи',
    context: 'Версии для каналов и сегментов без ручной пересборки каждого макета',
  },
] as const satisfies readonly EffectMetric[]

/** Illustrative workflow comparison paired with the metrics above. */
export const effectComparisons = [
  {
    id: 'draft',
    criterion: 'Первый вариант',
    before: 'Бриф, очередь и 3 рабочих дня',
    after: 'Готовый черновик за 4 часа',
  },
  {
    id: 'brand-review',
    criterion: 'Контроль бренда',
    before: 'Ручная проверка каждого макета',
    after: 'Правила дизайн-системы применяются при сборке',
  },
  {
    id: 'adaptation',
    criterion: 'Адаптация',
    before: 'Каждый формат собирается отдельно',
    after: '24 версии из одной согласованной идеи',
  },
] as const satisfies readonly EffectComparison[]

/** Ordered implementation phases shown without requiring client-side interaction. */
export const implementationSteps = [
  {
    id: 'audit',
    title: 'Аудит бренда и процессов',
    participants: 'Команда бренда, маркетинг, Снэпбилд',
    duration: '3–5 рабочих дней',
    description: 'Разбираем дизайн-систему, типовые форматы, роли и текущий путь согласования материалов.',
    result: 'Карта сценариев и план внедрения',
  },
  {
    id: 'configuration',
    title: 'Настройка дизайн-системы',
    participants: 'Дизайн-команда и Снэпбилд',
    duration: '1–2 недели',
    description: 'Переносим компоненты, шрифты, цвета и правила композиции в защищённое пространство компании.',
    result: 'Рабочая бренд-система в платформе',
  },
  {
    id: 'pilot',
    title: 'Пилот на реальной задаче',
    participants: 'Рабочая группа заказчика',
    duration: '1 неделя',
    description: 'Собираем материалы для выбранного сценария, проверяем качество и уточняем правила вместе с командой.',
    result: 'Проверенный процесс и готовые материалы',
  },
  {
    id: 'launch',
    title: 'Обучение и запуск команды',
    participants: 'Пользователи, администраторы, Снэпбилд',
    duration: '2–3 рабочих дня',
    description: 'Настраиваем доступы, проводим обучение по ролям и передаём инструкции для самостоятельной работы.',
    result: 'Команда работает в Снэпбилде',
  },
  {
    id: 'support',
    title: 'Сопровождение и развитие',
    participants: 'Владелец системы и Снэпбилд',
    duration: 'Постоянно',
    description: 'Следим за использованием, добавляем новые сценарии и обновляем правила вместе с развитием бренда.',
    result: 'Масштабирование без потери контроля',
  },
] as const satisfies readonly ImplementationStep[]

/** Role-based workflows used by the interactive scenarios section. */
export const roleScenarios = [
  {
    id: 'marketing',
    image: 'assets/images/role-marketing.webp',
    imageAlt: 'Визуализация маркетинговой кампании: лендинг и согласованные материалы для разных каналов',
    role: 'Маркетинг',
    eyebrow: 'Запуск кампании',
    title: 'Собрать лендинг и креативы под новый сегмент',
    task: 'Быстро проверить оффер и запустить кампанию без очереди к нескольким специалистам.',
    process: 'Маркетолог загружает бриф, выбирает аудиторию и получает лендинг, баннеры и тексты в фирменном стиле.',
    result: 'Согласованный комплект материалов готов к публикации и дальнейшей адаптации.',
  },
  {
    id: 'design',
    image: 'assets/images/role-design.webp',
    imageAlt: 'Визуализация дизайн-системы с компонентами, палитрой и согласованными форматами',
    role: 'Дизайн',
    eyebrow: 'Контроль бренда',
    title: 'Масштабировать дизайн-систему без ручной рутины',
    task: 'Сохранить визуальную целостность, когда команде нужны десятки новых форматов.',
    process: 'Дизайнер задаёт компоненты, шрифты и правила композиции, а команда собирает материалы внутри этих ограничений.',
    result: 'Больше материалов соответствует дизайн-системе, а дизайнер фокусируется на развитии бренда.',
  },
  {
    id: 'sales',
    image: 'assets/images/role-sales.webp',
    imageAlt: 'Визуализация персонального предложения, собранного из контекста клиента и выбранных кейсов',
    role: 'Продажи',
    eyebrow: 'Подготовка встречи',
    title: 'Персонализировать предложение для клиента',
    task: 'Подготовить убедительную презентацию под отрасль и контекст конкретной встречи.',
    process: 'Менеджер добавляет вводные о клиенте и выбирает нужные кейсы — Снэпбилд собирает структуру и оформляет слайды.',
    result: 'У команды есть персональное предложение, которое можно быстро уточнить перед встречей.',
  },
  {
    id: 'product',
    image: 'assets/images/role-product.webp',
    imageAlt: 'Визуализация продуктовой гипотезы, превращённой в связанный интерактивный прототип',
    role: 'Продукт',
    eyebrow: 'Проверка гипотезы',
    title: 'Показать идею до начала разработки',
    task: 'Проверить новую механику на пользователях до постановки задачи в разработку.',
    process: 'Продакт описывает сценарий, собирает интерактивную страницу и вместе с дизайнером уточняет ключевые состояния.',
    result: 'Команда получает наглядный прототип и обратную связь для следующего решения.',
  },
] as const satisfies readonly RoleScenario[]

/** Immutable content for the interactive use-case section. */
export const useCaseTabs = [
  { id: 'sites', label: 'Сайты', items: [
    { id: 'tab1-item1', title: 'Результат за один запрос', description: 'Отправляйте документ или ссылку на описание продукта — платформа собирает структуру', image: 'assets/images/use-cases-tab1-item1-v2.webp' },
    { id: 'tab1-item2', title: 'Страница за минуту', description: 'В вашей дизайн-системе, с вашими шрифтами, сеткой и компонентами', image: 'assets/images/use-cases-tab1-item2.webp' },
    { id: 'tab1-item3', title: 'AI или визуальный редактор', description: 'Меняйте контент через чат или редактируйте вручную', image: 'assets/images/use-cases-tab1-item3.webp' },
    { id: 'tab1-item4', title: 'Адаптация под ЦА за один клик', description: 'Версия сайта под новый сегмент без работы дизайнеров и копирайтеров', image: 'assets/images/use-cases-web-04.webp' },
  ] },
  { id: 'images', label: 'Изображения', items: [
    { id: 'tab2-item1', title: 'В стиле и цвете бренда', description: 'Изображения по композиционным правилам вашей дизайн-системы', image: 'assets/images/use-cases-img-01.webp' },
    { id: 'tab2-item2', title: 'Попадание с первой генерации', description: 'Без часов промптинга и поиска на стоках', image: 'assets/images/use-cases-tab2-item2.webp' },
    { id: 'tab2-item3', title: 'Редактирование объектов', description: 'Меняйте композицию и удаляйте элементы прямо на изображении', image: 'assets/images/use-cases-tab2-item3.webp' },
    { id: 'tab2-item4', title: 'Любой стиль и формат', description: 'Портреты, иллюстрации, обложки — в нужном соотношении, до 4K', image: 'assets/images/use-cases-tab2-item4.webp' },
  ] },
  { id: 'video', label: 'Видео', items: [
    { id: 'tab3-item1', title: 'Изображения как ключевые кадры', description: 'Используйте графику из модуля изображений напрямую', image: 'assets/images/use-cases-vid-01.webp' },
    { id: 'tab3-item2', title: 'Контроль качества и формата', description: 'Длительность, соотношение, качество — под площадку', image: 'assets/images/use-cases-tab3-item2.webp' },
    { id: 'tab3-item3', title: 'Сохранение стиля и композиции', description: 'AI удерживает визуальную целостность ролика', image: 'assets/images/use-cases-tab3-item3.webp' },
    { id: 'tab3-item4', title: 'Один сценарий — десятки адаптаций', description: 'Версии под популярные форматы соцсетей и рекламные площадки', image: 'assets/images/use-cases-tab3-item4.webp' },
  ] },
  { id: 'banners', label: 'Баннеры', items: [
    { id: 'tab4-item1', title: 'Креативы из одной идеи', description: 'Готовые баннеры в фирменном стиле для любой кампании', image: 'assets/images/use-cases-tab4-item1.webp' },
    { id: 'tab4-item2', title: 'Все размеры автоматически', description: 'Выбирайте готовые размеры для популярных площадок или задавайте собственные — без ручной пересборки', image: 'assets/images/use-cases-tab4-item2.webp' },
    { id: 'tab4-item3', title: 'Текст и графика под контролем', description: 'Редактируйте оффер, композицию и визуальные акценты', image: 'assets/images/use-cases-tab4-item3.webp' },
    { id: 'tab4-item4', title: 'Экспорт под площадку', description: 'Форматы и вес файлов соответствуют требованиям размещения', image: 'assets/images/use-cases-tab4-item4.webp' },
  ] },
  { id: 'presentations', label: 'Презентации', items: [
    { id: 'tab5-item1', title: 'Презентация из запроса', description: 'Платформа собирает структуру и черновик слайдов', image: 'assets/images/use-cases-pres-01.jpg' },
    { id: 'tab5-item2', title: 'В вашей дизайн-системе', description: 'Шрифты, сетки и компоненты применяются автоматически', image: 'assets/images/use-cases-tab5-item2.webp' },
    { id: 'tab5-item3', title: 'Редактирование через AI', description: 'Меняйте отдельный слайд или всю историю через чат', image: 'assets/images/use-cases-tab5-item3.webp' },
    { id: 'tab5-item4', title: 'Экспорт в нужном формате', description: 'Собирайте презентации для встречи, рассылки или публикации', image: 'assets/images/use-cases-tab5-item4.webp' },
  ] },
] as const satisfies readonly UseCaseTab[]

/** Primary landing destinations shared by desktop and mobile navigation. */
export const primaryNavigationLinks = [
  { label: 'Возможности', href: '#use-cases' },
  { label: 'Сценарии', href: '#scenarios' },
  { label: 'Внедрение', href: '#implementation' },
  { label: 'Эффект', href: '#effect' },
  { label: 'Истории', href: '#customer-stories' },
  { label: 'FAQ', href: '#faq' },
] as const satisfies readonly NavigationLink[]

/** Extended footer navigation built on the same primary destinations. */
export const footerNavigationLinks = [
  ...primaryNavigationLinks,
  { label: 'Безопасность', href: '#features' },
  { label: 'Roadmap', href: '#roadmap' },
] as const satisfies readonly NavigationLink[]

export const faqItems = [
  { id: 'capabilities', question: 'Какие материалы можно создавать?', answer: 'Сайты — от лендингов и продуктовых страниц до многостраничных корпоративных сайтов и веб-приложений: калькуляторов, дашбордов, панелей управления. Ограничений по масштабу нет.<br><br>Изображения — рекламные материалы, иллюстрации, OG-изображения в фирменном стиле, до 4K, с автоматическим ресайзом под каждую площадку и плейсмент.<br><br>Видео — генерация и редактирование роликов в стиле бренда; ключевые кадры создаются и меняются в режиме «Изображения», версии — под каждую платформу.<br><br>Баннеры — рекламные креативы: мастер-баннер разворачивается в адаптации под площадки и плейсменты.<br><br>Презентации — питч-деки и клиентские предложения в вашей дизайн-системе.<br><br>Все создается в рамках вашего бренда — из одной идеи получается полный набор материалов компании.' },
  { id: 'brand-analysis', question: 'Как работает анализ бренда?', answer: 'Система анализирует существующие интерфейсы, графические материалы и компоненты. Выделяются цветовые схемы, типографика, сетки, отступы и архитектура элементов. На основе этих данных формируется модель дизайн-системы, которая автоматически применяется ко всем новым интерфейсам.' },
  { id: 'export', question: 'Можно ли экспортировать решение в существующую инфраструктуру?', answer: 'Да. Система формирует чистую структуру интерфейса, пригодную для интеграции в текущую среду разработки (React, Vue, Angular, HTML/CSS), интеграции с GitHub, GitLab, CI/CD. Поддерживается прямое подключение к корпоративным системам контроля версий и конвейерам сборки.' },
  { id: 'design-system', question: 'Действительно ли интерфейс полностью соответствует дизайн-системе?', answer: 'Да. Каждый элемент формируется строго по правилам вашей архитектуры: цвета, типографика, отступы, состояния компонентов. Ручная проверка соответствия не требуется. Контроль встроен на уровне системы.' },
  { id: 'universal-ai', question: 'В чем отличие от универсальных систем на базе искусственного интеллекта?', answer: 'Универсальные решения гибкие, но нестабильные в применении бренд-правил. Наша платформа строит интерфейсы в рамках корпоративной архитектуры, с учетом бизнес-логики и требований безопасности. Генерация — управляемая, а не случайная.' },
  { id: 'no-code', question: 'Чем это отличается от конструкторов без программирования?', answer: 'Конструкторы используют жесткие шаблоны. Здесь применяется компонентная архитектура с гарантированным соблюдением дизайн-системы. Это не набор шаблонов, а управляемая система сборки интерфейсов.' },
  { id: 'ai-builders', question: 'В чем отличие от популярных AI-инструментов для создания сайтов?', answer: 'Такие решения ориентированы на скорость и гибкость, но не гарантируют соблюдение корпоративных стандартов: каждая генерация может выглядеть по-новому. Снэпбилд сочетает ту же скорость с автоматическим соблюдением вашей дизайн-системы, интеграцией бизнес-логики и работой в контуре безопасности компании — контроль бренда встроен по умолчанию. Кроме того, зарубежные сервисы зависят от моделей из санкционных юрисдикций; Снэпбилд построен так, чтобы этой зависимости не было вовсе.' },
  { id: 'private-cloud', question: 'Возможна ли работа в закрытом корпоративном облаке?', answer: 'Да. Поддерживается развертывание в изолированной инфраструктуре без доступа к внешней сети. Данные и вычисления остаются внутри вашей корпоративной среды.' },
] as const satisfies readonly FaqItem[]

export const roadmapItems = [
  ['sites', 'Сайты за 5 минут', 'Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков', 'Декабрь, 2025', true],
  ['illustrations', 'Консистентные AI-иллюстрации', 'Настраиваете фирменный стиль один раз — графика для каждой секции сайта в едином виде через стилевые пресеты', 'Январь, 2026', true],
  ['design-system', 'Дизайн-система из вашего сайта', 'Сканируем существующие страницы и собираем из них готовую дизайн-систему; AI сам выстраивает структуру', 'Февраль, 2026', true],
  ['images', 'Режим изображений', 'Брендовая графика в один клик: управление стилями и темами, десятки параметров редактирования', 'Март, 2026', true],
  ['video', 'Генерация видео', 'Видео из ваших изображений с ключевыми кадрами; AI точнее на 78%, панель рассуждений и управление правами', 'Апрель, 2026', true],
  ['resizes', 'Ресайзы изображений', 'Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и другие) с автоматическим бюджетом веса на экспорт', 'Май, 2026', true],
  ['editor', 'Расширенный редактор, как в Figma', 'Слои, изменение размеров любого контейнера, превью структуры в чате, версии промптов и ветвление диалогов', 'Июнь, 2026', true],
  ['canvas', 'Канвас, баннеры и презентации', 'Канвас во всех режимах; новые режимы — генерация рекламных баннеров и корпоративных презентаций', 'Июль, 2026', true],
  ['marketer', 'ИИ-маркетолог', 'Следит за данными, сам обновляет ваши материалы и собирает кампанию целиком — от изображений до сайта', 'Август, 2026', true],
  ['components', 'Компонентный подход', 'AI сам компонует секции сайтов из элементов вашей дизайн-библиотеки', 'Сентябрь, 2026', false],
  ['recommendations', 'Предиктивные рекомендации', 'Платформа сама предлагает, что обновить в кампаниях — от секций сайта до баннеров', 'Октябрь, 2026', false],
  ['infrastructure', 'Инфраструктура', 'Развертывание в вашей сети и контуре', 'Ноябрь, 2026', false],
].map(([id, title, description, date, reached]) => ({ id, title, description, date, reached })) as readonly RoadmapItem[]

export const processCards: readonly ProcessCard[] = [
  { id: 'design-system', title: 'Дизайн-система — ядро платформы', mobileTitle: 'Дизайн-система Снэпбилд', description: 'Ваши компоненты, цвета и шрифты — единственный источник стиля', image: 'assets/images/84a4450b3827bc21.webp', width: 2365, height: 1774 },
  { id: 'configuration', title: 'Гибкая конфигурация', mobileTitle: 'Гибкая конфигурация', description: 'Правила бренда задаются один раз — работают в каждой генерации', image: 'assets/images/process-flexible-configuration.webp', tabletImage: 'assets/images/process-flexible-configuration-tablet.webp', mobileImage: 'assets/images/process-flexible-configuration-mobile.webp', width: 1448, height: 1086 },
  { id: 'compliance', title: 'Соответствие по умолчанию', mobileTitle: 'Соответствие по умолчанию', description: 'AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам', image: 'assets/images/afe03eb4a67d5dfb.webp', width: 1832, height: 2290 },
] as const

export const securityFeatures = [
  { id: 'models', title: 'Только одобренные модели', description: 'Работаем только с российскими и локализованными моделями, без экспортных ограничений', image: 'assets/images/security-approved-models.webp', mobileImage: 'assets/images/security-approved-models-mobile-v2.jpg' },
  { id: 'cloud', title: 'Ваш контур, ваша юрисдикция', description: 'Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями', image: 'assets/images/security-private-cloud.webp', mobileImage: 'assets/images/security-private-cloud-mobile-v2.jpg' },
  { id: 'stack', title: 'Собственный AI-стек', description: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации', image: 'assets/images/security-ai-stack.webp', mobileImage: 'assets/images/security-ai-stack-mobile-v2.jpg' },
] as const satisfies readonly SecurityFeature[]

export const logos = [
  { id: 'one', image: 'assets/images/5cd01de0b6a5e001.svg', className: 'dds-marquee-item-3' },
  { id: 'two', image: 'assets/images/ee341193d7cf46d6.svg', className: 'dds-marquee-item-4' },
  { id: 'avito', image: 'assets/images/logo-avito.svg', className: 'dds-marquee-item-7' },
  { id: 'cian', image: 'assets/images/logo-cian.svg', className: 'dds-marquee-item-8' },
  { id: 'lenta', image: 'assets/images/logo-lenta.svg', className: 'dds-marquee-item-10' },
] as const satisfies readonly LogoItem[]

export const comparisonRows: readonly ComparisonRow[] = [
  { id: 'time', label: 'Time-to-market', values: ['5 минут', '30–60 мин', '2–3 дня', '1–2 дня', '3–5 недель'] },
  { id: 'system', label: 'Дизайн-система', values: ['100% точность', 'Частично, из Figma', 'Шаблоны', 'Вручную в коде', 'Вручную, через ревью'] },
  { id: 'editor', label: 'Визуальный редактор', values: ['+ ИИ', '—', '', '—', '—'], checks: [0, 2] },
  { id: 'skills', label: 'Требуемые навыки', values: ['Нет', 'Промпты + код', 'Дизайн', 'Разработка', 'Полная команда'] },
] as const
