import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
// import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default hopeTheme({
  
  hostname: "https://asev.gitee.io",

  author: {
    name: "FyrGlow",
    url: "https://space.bilibili.com/266986139",
  },


  logo: "/img/pc.svg",
  logoDark: "/img/pc1.svg",

  repo: "https://space.bilibili.com/266986139",

  docsDir: "docs",
  darkmode: "switch",

  // 导航栏
  navbar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["KooKLink","BiliLink","QQLink", "Outlook", "Search"],
  },

  // 侧边栏
  sidebar,

  // 页脚
  footer: "PaperCard Docs",
  displayFooter: true,
  
  // 加密配置
  // encrypt: {
  //   config: {
  //     "/encrypt/encrypt1.html": ["1234"],
  //   },
  // },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    // Live2D 看板

    // 你应该自行生成自己的评论服务
    comment: {
      provider: "Waline",
      serverURL: "https://paper-card-docs-waline.vercel.app",
      pageview: true, // 浏览量统计
      // lang: 'zh',
      locale: {
        admin: '尊贵的SVIP用户',
        level0: '小纸片',
        level1: '大纸片',
        level2: '超级纸片',
        level3: '宗师纸片',
        level4: '入圣纸片',
        level5: '传说纸片',
      },
    },
    // 卡片
    components: {
      components: [
        // "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        // "VidStack",
        "XiGua",
      ],
      rootComponents: {
        // https://plugin-components.vuejs.press/zh/guide/utilities/notice.html
        notice: [
          {
            path: "/",
            title: "更新日志：",
            showOnce: false,
            // confirm: true,
            // fullscreen: true,
            // key: "",
            content:
              "纸片新闻部从今天开始正式成立辣！<br>纸片新闻由：<br>《日报》、《圣经》、《封神榜》<br>三部分组成，<br>同时欢迎各位踊跃投稿！",
            // actions: [
            //   {
            //     text: "查看纸片新闻",
            //     link: "/news/",
            //     type: "primary",
            //   },
            // ],
          },
        ],
      }
      // components: ["Badge", "VPCard"],
    },
    // 搜索功能
    docsearch: {
      appId: 'KP6S34SK4H',
      apiKey: '5a80d21f93f81286dfd4a5ad067af234',
      indexName: 'asev-gitee',
      algoliaOptions: {
          facetFilters: ["lang:en-US"],
      },
    },
    // 代码复制
    copyCode: {},
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},
{ custom: true },
);

