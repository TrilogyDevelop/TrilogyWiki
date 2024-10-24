import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TrilogyLoader Wiki",
  description: "Документация по TrilogyLoader",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://trilogy.xyeta.eu',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Trilogy Loader | Lua Scripts for GTA:SA DE' }],
    ['meta', { property: 'og:site_name', content: 'Trilogy Loader' }],
    ['meta', { property: 'og:image', content: 'https://trilogy.xyeta.eu/trilogyloader-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://trilogy.xyeta.eu/' }],
  ],
  appearance: 'dark',
  themeConfig: {
    logo: { src: '/logo.png', width: 64, height: 64 },
    siteTitle: 'TrilogyLoader Wiki',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Темная тема',

    search: {
      provider: 'local',
      options: {
        translations: {
          modal: {
            backButtonTitle: 'Назад',
            displayDetails: 'Показать подробности',
            footer: {
              closeKeyAriaLabel: 'Закрыть',
              closeText: 'Закрыть',
              navigateDownKeyAriaLabel: 'Навигация вниз',
              navigateText: 'Навигация',
              navigateUpKeyAriaLabel: 'Навигация вверх',
              selectKeyAriaLabel: 'Выбор',
              selectText: 'Выбор',
            },
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить',
          },
          button: {
            buttonAriaLabel: 'Найти',
            buttonText: 'Найти',
          }
        }
      }
    },

    notFound: {
      code: '404',
      linkLabel: 'Вернуться на главную',
      linkText: 'Вернуться на главную',
      quote: 'Ничего не найдено',
      title: 'Страница не найдена',
    },
    
    nav: [
      {
        text: 'Введение',
        link: '/introduction'
      },
      {
        text: 'Lua API',
        link: '/lua-api'
      }
    ],

    // sidebar
    sidebarMenuLabel: 'Меню',
    sidebar: [
      {
        text: 'Гайды',
        items: [
          { text: 'Введение', link: '/guides/introduction' },
          { text: 'Консоль', link: '/guides/console' },
          { text: 'SDK', link: '/guides/sdk' },
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Обзор', link: '/api/overview' },
          { text: 'Рендер', link: '/api/render' },
          { text: 'Совместимое с Moonloader', link: '/api/moonloader-compatible' },
        ]
      },
      {
        text: 'Библиотеки',
        items: [
          { text: 'Обзор', link: '/libs/overview' },
          { text: 'ArizonaAPI', link: '/libs/arizona-api' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TrilogyDevelop' }
    ],
    
    lastUpdated: {
      text: 'Последнее обновление',
    },
    returnToTopLabel: 'Наверх',
    footer: {
      copyright: 'Copyright © 2024 TrilogyLoader Team',
      message: 'Все права защищены.',
    },
    docFooter: {
      next: "Дальше",
      prev: "Назад"
    },
    outline: {
      label: 'На этой странице',
    },
  }
})
