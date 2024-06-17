export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"主页","i":"icon-client"} }],
  ["/docs/preface.html", { loader: () => import(/* webpackChunkName: "preface.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/docs/preface.html.js"), meta: {"y":"a","t":"前言","i":"icon-quill","O":1} }],
  ["/docs/punishes.html", { loader: () => import(/* webpackChunkName: "punishes.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/docs/punishes.html.js"), meta: {"y":"a","t":"违规处罚","i":"icon-zomibie","O":2} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/docs/index.html.js"), meta: {"y":"a","t":"游玩须知","i":"icon-apex"} }],
  ["/encrypt/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/encrypt/index.html.js"), meta: {"y":"a","t":"服务器地址获取","i":"icon-hack"} }],
  ["/issue/client.html", { loader: () => import(/* webpackChunkName: "client.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/issue/client.html.js"), meta: {"y":"a","t":"客户端问题","i":"icon-client1","O":1} }],
  ["/issue/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/issue/index.html.js"), meta: {"y":"a","t":"疑难杂症","i":"icon-creeper"} }],
  ["/issue/server.html", { loader: () => import(/* webpackChunkName: "server.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/issue/server.html.js"), meta: {"y":"a","t":"服务器问题","i":"icon-world","O":2} }],
  ["/news/bible.html", { loader: () => import(/* webpackChunkName: "bible.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/news/bible.html.js"), meta: {"y":"a","t":"纸片圣经","i":"icon-pixbook1","O":2} }],
  ["/news/daily.html", { loader: () => import(/* webpackChunkName: "daily.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/news/daily.html.js"), meta: {"y":"a","t":"纸片日报","i":"icon-news1","O":1} }],
  ["/news/game.html", { loader: () => import(/* webpackChunkName: "game.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/news/game.html.js"), meta: {"y":"a","t":"纸片小游戏","i":"icon-pixchamp","O":4} }],
  ["/news/hack.html", { loader: () => import(/* webpackChunkName: "hack.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/news/hack.html.js"), meta: {"y":"a","t":"纸片封神榜","i":"icon-pixnews1","O":3} }],
  ["/news/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/news/index.html.js"), meta: {"y":"a","t":"纸片新闻","i":"icon-news"} }],
  ["/tutorial/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/index.html.js"), meta: {"y":"a","t":"教程总目录","i":"icon-books"} }],
  ["/tutorial/client/install.html", { loader: () => import(/* webpackChunkName: "install.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/client/install.html.js"), meta: {"y":"a","t":"安装客户端","i":"icon-build","O":1} }],
  ["/tutorial/client/mod.html", { loader: () => import(/* webpackChunkName: "mod.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/client/mod.html.js"), meta: {"y":"a","t":"Mod配置相关","i":"icon-briefcase","O":2} }],
  ["/tutorial/client/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/client/index.html.js"), meta: {"y":"a","t":"客户端教程","i":"icon-client1-1"} }],
  ["/tutorial/server/command.html", { loader: () => import(/* webpackChunkName: "command.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/command.html.js"), meta: {"y":"a","t":"服务器指令","i":"icon-terminal","O":3} }],
  ["/tutorial/server/join.html", { loader: () => import(/* webpackChunkName: "join.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/join.html.js"), meta: {"y":"a","t":"加入服务器","i":"icon-user-plus","O":2} }],
  ["/tutorial/server/name.html", { loader: () => import(/* webpackChunkName: "name.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/name.html.js"), meta: {"y":"a","t":"中文名申请流程","i":"icon-profile","O":5} }],
  ["/tutorial/server/plugin.html", { loader: () => import(/* webpackChunkName: "plugin.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/plugin.html.js"), meta: {"y":"a","t":"服务器插件介绍","i":"icon-pacman","O":6} }],
  ["/tutorial/server/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/index.html.js"), meta: {"y":"a","t":"服务器教程","i":"icon-world"} }],
  ["/tutorial/server/support.html", { loader: () => import(/* webpackChunkName: "support.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/support.html.js"), meta: {"y":"a","t":"支持与赞助","i":"icon-heart","O":6} }],
  ["/tutorial/server/title.html", { loader: () => import(/* webpackChunkName: "title.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/server/title.html.js"), meta: {"y":"a","t":"称号设计指南","i":"icon-trophy","O":4} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/projects/new/my-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
