import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "游玩须知",
      icon: "icon-apex",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "纸片新闻",
      icon: "icon-news",
      prefix: "news/",
      children: "structure",
    },
    {
      text: "疑难杂症",
      icon: "icon-creeper",
      prefix: "issue/",
      children: "structure",
    },
    {
      text: "教程文档",
      icon: "icon-crafting",
      prefix: "tutorial/",
      children: "structure",
    },
    {
      text: "纸片官网",
      icon: "icon-head",
      link: "https://paper-card.cn/",
    },
  ],
});
