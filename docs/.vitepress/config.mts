
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TokenPro',
  description: 'TokenPro Developer Documentation',

  // 临时通过服务器 IP 的 /docs/ 路径访问
  base: '/docs/',

  lang: 'zh-CN',

  head: [
    ['meta', { name: 'theme-color', content: '#1677ff' }]
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'TokenPro',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/start' },
      { text: 'API 文档', link: '/api/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '接入指南', link: '/guide/start' },
            { text: '获取 API Key', link: '/guide/api-key' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 接口',
          items: [
            { text: '接口概览', link: '/api/' }
          ]
        }
      ]
    },

    footer: {
      message: 'Connect · Access · Innovate',       copyright: 'Copyright © 2026 TokenPro'
    },

    search: {
      provider: 'local'
    }
  }
})
