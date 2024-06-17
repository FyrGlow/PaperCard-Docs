export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"FyrGlow\",\"url\":\"https://space.bilibili.com/266986139\"},\"logo\":\"/img/pc.svg\",\"logoDark\":\"/img/pc1.svg\",\"repo\":\"https://space.bilibili.com/266986139\",\"docsDir\":\"docs\",\"darkmode\":\"switch\",\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[\"Links\"],\"end\":[\"KooKLink\",\"BiliLink\",\"QQLink\",\"Outlook\",\"Search\"]},\"footer\":\"PaperCard Docs\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/docs/\",\"/news/\",\"/issue/\",{\"text\":\"教程文档\",\"icon\":\"icon-crafting\",\"prefix\":\"/tutorial/\",\"children\":[{\"text\":\"客户端教程\",\"icon\":\"icon-client1-1\",\"prefix\":\"client/\",\"children\":[\"install\",{\"text\":\"Mod配置相关\",\"icon\":\"icon-briefcase\",\"link\":\"mod.md\"},{\"text\":\"...\",\"icon\":\"\",\"link\":\"\"}]},{\"text\":\"服务器教程\",\"icon\":\"icon-world-1\",\"prefix\":\"server/\",\"children\":[\"join\",{\"text\":\"服务器指令\",\"icon\":\"icon-terminal\",\"link\":\"command.md\"},{\"text\":\"称号设计指南\",\"icon\":\"icon-trophy\",\"link\":\"title.md\"},{\"text\":\"中文名申请流程\",\"icon\":\"icon-profile\",\"link\":\"name.md\"},{\"text\":\"服务器插件介绍\",\"icon\":\"icon-pacman\",\"link\":\"plugin.md\"},{\"text\":\"支持与赞助\",\"icon\":\"icon-heart\",\"link\":\"support.md\"},{\"text\":\"...\",\"icon\":\"\",\"link\":\"\"}]}]},{\"text\":\"纸片官网\",\"icon\":\"icon-head\",\"link\":\"https://paper-card.cn/\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"游玩须知\",\"icon\":\"icon-apex\",\"prefix\":\"docs/\",\"link\":\"docs/\",\"children\":\"structure\"},{\"text\":\"纸片新闻\",\"icon\":\"icon-news\",\"prefix\":\"news/\",\"children\":\"structure\"},{\"text\":\"疑难杂症\",\"icon\":\"icon-creeper\",\"prefix\":\"issue/\",\"children\":\"structure\"},{\"text\":\"教程文档\",\"icon\":\"icon-crafting\",\"prefix\":\"tutorial/\",\"children\":\"structure\"},{\"text\":\"纸片官网\",\"icon\":\"icon-head\",\"link\":\"https://paper-card.cn/\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
