/*
 * @Author: your name
 * @Date: 2020-08-21 09:22:49
 * @LastEditTime: 2020-08-26 15:11:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-master\docs\.vuepress\config.js
 */
module.exports = {
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme:['z16', 'haru1', 'haru2', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku']
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)成功连接~",
        hideIcon: "/failure.ico",
        hideText: "(●—●)挂机中...",
        recoverTime: 2000
      }
    ],
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ],
    [
      "cursor-effects"
    ]
  ],
  //*******主题设置
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    authorAvatar: '/boy.png',
    logo: '/boy.png',
    lastUpdated: 'lastUpdate', // string | boolean
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Github',
        link: 'https://github.com/acodelearner',
        icon: 'reco-github',
      },
    ],
    // 自动形成侧边导航
    subSidebar: 'auto',

    sidebarDepth: 4,
    sidebar: {
      '/pages/frontend/': [
        {
          title: '前端', // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [],
        },
      ],
      '/pages/linux/': [
        {
          title: 'linux', // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['mcServer.md', '云服务器搭建MC我的世界服务器'],
            ['centos.md', '网站上线流程'],
          ],
        },
      ],
      '/pages/game/': [
        {
          title: '后端',
          collapsable: true, // 可选的, 默认值是 true,
          children: [
            ['test4.md', '子菜单4'],
            ['test5.md', '子菜单5'],
          ],
        },
      ],
    },
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认文案 “标签”
      },
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com',
      },
      // ...
    ],
  },

  //*******
  title: 'Zain', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'code and life', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/egg.png' }], //浏览器的标签栏的网页图标
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  serviceWorker: true,
}
