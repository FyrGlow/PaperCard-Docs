import comp from "D:/projects/new/my-docs/docs/.vuepress/.temp/pages/tutorial/index.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/\",\"title\":\"教程总目录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"教程总目录\",\"icon\":\"icon-books\",\"description\":\"基础教程 服务器教程 ... 客户端教程 ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://asev.gitee.io/tutorial/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"PaperCard Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"教程总目录\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"基础教程 服务器教程 ... 客户端教程 ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"FyrGlow\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"教程总目录\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"FyrGlow\\\",\\\"url\\\":\\\"https://space.bilibili.com/266986139\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"基础教程\",\"slug\":\"基础教程\",\"link\":\"#基础教程\",\"children\":[{\"level\":3,\"title\":\"服务器教程\",\"slug\":\"服务器教程\",\"link\":\"#服务器教程\",\"children\":[]},{\"level\":3,\"title\":\"客户端教程\",\"slug\":\"客户端教程\",\"link\":\"#客户端教程\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"tutorial/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
