import { defineClientConfig } from "vuepress/client";
import { defineRevealJsConfig } from "vuepress-plugin-md-enhance/client";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import QQLink from "./components/QQLink.js";
import BiliLink from "./components/BiliLink.js";
import KooKLink from "./components/KooKLink.js";
// import "vuepress-theme-hope/presets/bounce-icon.scss";

defineRevealJsConfig({
  // 在此设置 reveal.js 选项
  keyboardCondition: 'focused',
  // mouseWheel: true,
});

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("QQLink", QQLink);
    app.component("BiliLink", BiliLink);
    app.component("KooKLink", KooKLink);
  },
  setup() {},
  rootComponents: [],
});
