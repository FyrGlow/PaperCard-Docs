import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import CodeDemo from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/projects/new/my-docs/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "D:/projects/new/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
