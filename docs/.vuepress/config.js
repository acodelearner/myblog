/*
 * @Author: your name
 * @Date: 2020-08-21 09:22:49
 * @LastEditTime: 2020-08-26 15:11:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-master\docs\.vuepress\config.js
 */
module.exports = {
    //*******主题设置
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        authorAvatar: '/boy.png',
        logo: '/boy.png',                                                                               
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: 'home', link: '/', icon: 'reco-home' },
            {
                text: 'other',
                ariaLabel: '分类',
                items: [
                    { text: 'game', link: '/pages/folder1/test1.md' },
                    { text: 'life', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'Github', link: 'https://github.com/acodelearner' },
        ],
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 4, 
        sidebar: {
            '/pages/folder1/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
        },
        blogConfig: {
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
          }
        },
        friendLink: [
            {
              title: 'vuepress-theme-reco',
              desc: 'A simple and beautiful vuepress Blog & Doc theme.',
              logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
              link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
              title: '午后南杂',
              desc: 'Enjoy when you can, and endure when you must.',
              email: 'recoluan@qq.com',
              link: 'https://www.recoluan.com'
            },
            // ...
          ]
    },
    
    
    //*******
    title: 'Zain', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'hzy的个人小站', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    serviceWorker: true,
}