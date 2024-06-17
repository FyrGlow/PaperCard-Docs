import { type FunctionalComponent, h } from "vue";

const KooKLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo",
      style: "padding-top: 6px; padding-right: 5px; font-size: 28px;" },
    h("a", {
      class: "vp-repo-link",
      href: "https://kook.top/UzhkW9",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "KooK",
      innerHTML:
        '<i class="icon-kook"></i>',
    })
  );

  KooKLink.displayName = "KooKLink";

export default KooKLink;