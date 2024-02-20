import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "路由狗",
    description: "路由看家好帮手",
    base: "/",
    outDir: "./dist",
    cleanUrls: true,
    lang: 'zh-cn',
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            link: "/docs/zh/guide"
        },
        en: {
            label: 'English',
            lang: 'en',
            link: "/docs/en/guide"
        }
    },
    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: "/logo.svg",
        logoLink: {
            target: "_self",
            link: "/",
        },
        siteTitle: false,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/', target: "_self" },
            { text: '指南', link: '/docs/zh/guide/' }
        ],
        sidebar: [
            {
                text: '开始使用',
                link: "/docs/zh/guide/",
                // collapsed: false,
                // items: [
                //     { text: '安装教程', link: '/docs/zh/install/' },
                // ]
            },
            // {
            //     text: '下载',
            //     collapsed: false,
            //     items: [
            //         { text: 'Openwrt', link: '/docs/zh/download/openwrt' },
            //         { text: 'Merlin/华硕官改', link: '/docs/zh/download/asus' },
            //         { text: 'Docker', link: '/docs/zh/download/docker' },
            //         { text: 'Androd', link: '/docs/zh/download/android' },
            //         { text: 'Ios', link: '/docs/zh/download/ios' },

            //     ]
            // },

        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/Carseason/routerdog'
            }
        ],
        footer: {
            // message: 'Released under the MIT License.',
            // copyright: 'Copyright © 2019-present Evan You'
        },
    },
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    lastUpdated: true,
})
