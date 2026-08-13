import type { UseCaseTab } from '~/types/landing'

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
