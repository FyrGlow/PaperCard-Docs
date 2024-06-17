import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
// import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PaperCard Docs",
  description: "PaperCard 服务器文档站",
  head: [
    ["script", { src: "/js/autotheme.js" }],
    ["script", { src: "/js/encrypt.js" }],
    ["script", { src: "/js/timer.js" }],
    ["link", { rel: "stylesheet", href: "/css/mousescroll.css" }],
    ["link", { rel: "stylesheet", href: "/js/encrypt.css" }],
    ["link", { rel: "stylesheet", href: "/js/timer.css" }],
    // ...其他head配置
    ['link', { rel: 'stylesheet', href: '/font/chill.ttf' }],
    ['link', { rel: 'stylesheet', href: '/font/dotted.otf' }],
    ['link', { rel: 'stylesheet', href: '/font/quan.ttf' }],
    ['link', { rel: 'stylesheet', href: '/font/von12.ttf' }],
    ['link', { rel: 'stylesheet', href: '/font/von16.ttf' }],
    // ['link', { rel: 'stylesheet', href: '/font/Minecraft.ttf' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }],
  ],

  theme,
  
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    // "@theme-hope/components/HeroInfo": path.resolve(
    //   __dirname,
    //   "./components/HeroInfo.vue",
    // ),
  },
  plugins: [
    oml2dPlugin({
      // 在这里配置选项
      tips: {
        style: {
          offsetX: 20,
          width: 300,
        },
        copyTips: {
          message: ['复制服务器地址或指令时记得不要复制到空格哦<br>(╭￣3￣)╭♡'],
        },
        idleTips: {
          duration: 5000,
          interval: 10000,
          message: ['你好呀ヾ(*´▽‘*)ﾉ','祝你有个愉快的服务器之旅(ゝ∀･)b','记得善用网站右上角的搜索功能哦(づ′▽`)づ','检测到未知来客(°ﾛ°٥)'],
          wordTheDay: true,
        },
        welcomeTips: {
          duration: 3000,
          message: {
            afternoon: "欢迎访问PaperCard Docs！<br>下午了，记得喝杯咖啡提提神哦~<br>(*´▽`*)",
            morning: "欢迎访问PaperCard Docs！<br>一日之计在于晨，去服务器里看看吧~<br>(*´▽`*)",
            dusk: "欢迎访问PaperCard Docs！<br>傍晚了，好好休息一下吧~<br>(*´▽`*)",
            lateNight: "欢迎访问PaperCard Docs！<br>这么晚了还没有睡呀，早点休息吧，晚安~<br>(*´∀`)~♥",
            daybreak: "欢迎访问PaperCard Docs！<br>哇哦你起这么早呀Σ(°Д°; 早安！<br>(^ρ^)/",
            night: "欢迎访问PaperCard Docs！<br>晚上好，今天过得怎么样呢？<br>(⁰▿⁰)",
            noon: "欢迎访问PaperCard Docs！<br>中午了，现在是午餐时间！<br>(^ρ^)/",
            weeHours: "欢迎访问PaperCard Docs！<br>这么晚还不睡吗？当心熬夜秃头哦！<br>(´ー`)",
          }
        },
      },  
      
      models: [
        {
          path: 'https://registry.npmmirror.com/live2d-widget-model-pio/latest/files/assets/index.json',
          scale: 0.5,
          position: [0, 100],
          stageStyle: {
            height: 425,
            width: 350
          }
        },
        {
          path: 'https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json',
          scale: 0.2,
          position: [70, 70],
          stageStyle: {
            height: 400,
            width: 350
          }
        },
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/galgame%20live2d/Fox%20Hime%20Zero/mori_miko/mori_miko.model3.json',
          scale: 0.12,
          position: [75, 100],
          stageStyle: {
            height: 500,
            width: 350
          }
        },
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          scale: 0.12,
          position: [-10, 50],
          stageStyle: {
            width: 350
          }
        },
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/live2dCDN@1.1/live2dv3/assets/xuefeng_3/xuefeng_3.model3.json',
          scale: 0.07,
          position: [0, 100],
          stageStyle: {
            height: 450,
            width: 350
          },
          showHitAreaFrames: true,
        },

        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/live2dCDN@1.3/live2dv3/assets/edu_3/edu_3.model3.json',
          scale: 0.05,
          position: [0, 150],
          stageStyle: {
            height: 420,
            width: 350
          }
        },
      ]
    })

    //  ...other plugins
  ]
});
