import { type FunctionalComponent, h } from "vue";

const BiliLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo",
      style: "padding-top: 4px; padding-right: 4px;" },
    h("a", {
      class: "vp-repo-link",
      href: "https://space.bilibili.com/266986139",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "bilibili",
      innerHTML:
        '<i class="icon-bilibili-fill"></i>',
    })
  );

  BiliLink.displayName = "BiliLink";

export default BiliLink;