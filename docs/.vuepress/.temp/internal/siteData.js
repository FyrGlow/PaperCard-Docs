export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"PaperCard Docs\",\"description\":\"PaperCard 服务器文档站\",\"head\":[[\"script\",{\"src\":\"/js/autotheme.js\"}],[\"script\",{\"src\":\"/js/encrypt.js\"}],[\"script\",{\"src\":\"/js/timer.js\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/css/mousescroll.css\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/js/encrypt.css\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/js/timer.css\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/font/chill.ttf\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/font/dotted.otf\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/font/quan.ttf\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/font/von12.ttf\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/font/von16.ttf\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/style.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
