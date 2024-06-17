import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/projects/new/my-docs/node_modules/@vuepress/helper/lib/client/index.js";
import { h } from "vue";

import FontIcon from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import Share from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import SiteInfo from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VPBanner from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import VPCard from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import XiGua from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import Notice from "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Notice.js";

import "D:/projects/new/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    
  },
  setup: () => {

  },
  rootComponents: [
    () => h(Notice, { config: [{"path":"/","title":"更新日志：","showOnce":false,"content":"纸片新闻部从今天开始正式成立辣！<br>纸片新闻由：<br>《日报》、《圣经》、《封神榜》<br>三部分组成，<br>同时欢迎各位踊跃投稿！"}] }),
  ],
});
