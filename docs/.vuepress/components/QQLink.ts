import { type FunctionalComponent, h } from "vue";

const QQLink: FunctionalComponent = () =>
  h(
    "div",
    { class: "nav-item vp-repo",
      style: "padding-top: 4px;" },
    h("a", {
      class: "vp-repo-link",
      href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=UnmdLo-Z9Ka19LjuWKrB-jQvLnQkL9wW&authKey=E%2FcHHvcJ5A1kAS7hQOOi9vhLQv8ExOTRu7X69CVxbuOhhmX4%2BN4NyuCrgCVBOdBn&noverify=0&group_code=860768366",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "qq",
      innerHTML:
        '<i class="icon-qq-fill"></i>',
    })
  );

QQLink.displayName = "QQLink";

export default QQLink;