import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/docs/",
  "/news/",
  "/issue/",
  {
    text: "教程文档",
    icon: "icon-crafting",
    prefix: "/tutorial/",
    children: [
      {
        text: "客户端教程",
        icon: "icon-client1-1",
        prefix: "client/",
        children: ["install", { text: "Mod配置相关", icon: "icon-briefcase", link: "mod.md" }, { text: "...", icon: "", link: "" }],
      },
      {
        text: "服务器教程",
        icon: "icon-world-1",
        prefix: "server/",
        children: ["join", { text: "服务器指令", icon: "icon-terminal", link: "command.md" }, { text: "称号设计指南", icon: "icon-trophy", link: "title.md" }, { text: "中文名申请流程", icon: "icon-profile", link: "name.md" }, { text: "服务器插件介绍", icon: "icon-pacman", link: "plugin.md" }, { text: "支持与赞助", icon: "icon-heart", link: "support.md" }, { text: "...", icon: "", link: "" }],
      },
    ],
  },
  {
    text: "纸片官网",
    icon: "icon-head",
    link: "https://paper-card.cn/",
  },
]);
