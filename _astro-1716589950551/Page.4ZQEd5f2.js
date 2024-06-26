import {
  u as st,
  v as Ft,
  w as Ie,
  T as It,
  a as Oe,
  s as tr,
  b as Ks,
  c as Ou,
  r as yi,
} from "./scrollToSection.D0uleq8q.js";
import {
  i as Dr,
  r as L,
  c as u,
  _ as oe,
  d as re,
  o as De,
  a as Tt,
  b as c,
  e as h,
  f as I,
  t as J,
  g as O,
  n as Ct,
  h as Z,
  j as xe,
  F as pe,
  k as ke,
  l as je,
  w as ue,
  m as Ae,
  p as Be,
  q as W,
  s as Ee,
  u as Ge,
  v as et,
  x as ee,
  y as fe,
  z as cn,
  A as Mr,
  B as Or,
  C as Ne,
  D as Ot,
  E as Lt,
  G as Fn,
  H as Qs,
  I as va,
  J as ft,
  K as A,
  L as Zs,
  M as Bn,
  N as Lu,
  O as Bu,
  P as Xs,
  Q as Js,
  R as ar,
  S as Va,
  T as St,
  U as bi,
  V as Au,
  W as xu,
  X as Ru,
} from "./_plugin-vue_export-helper.x4FAPkXN.js";
import {
  S as jt,
  L as nr,
  a as el,
  M as or,
  D as Nu,
  b as ha,
  c as dn,
  E as ta,
  d as Ba,
  e as tl,
  f as al,
  Z as Hu,
  g as $u,
  h as Uu,
  P as nl,
  i as Vu,
  A as Yu,
  j as Fu,
  k as Wu,
  l as Lr,
  I as _i,
  m as Eo,
  n as qu,
  o as Gu,
  p as ju,
  q as wi,
  r as An,
  s as xn,
  t as Do,
  u as ol,
  v as zu,
  w as Ku,
  x as Qu,
  y as Zu,
  z as ki,
  B as rl,
  C as Si,
  F as Xu,
  G as Ju,
  H as ec,
  J as rr,
  K as Ti,
  N as tc,
  O as ac,
  Q as nc,
  R as oc,
  T as il,
  U as Cn,
  V as Ci,
  W as Pi,
  X as rc,
  Y as ic,
  _ as sc,
  $ as lc,
  a0 as uc,
  a1 as sl,
  a2 as cc,
  a3 as dc,
  a4 as mc,
  a5 as gc,
  a6 as Ii,
  a7 as Ei,
} from "./index.BV9R-oP_.js";
/* empty css                        */ import {
  g as ll,
  a as pc,
  s as Di,
  b as vc,
  i as ul,
  c as Ha,
  d as hc,
} from "./addDocumentElements.ebBXy1z2.js";
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ var Mi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Mi || (Mi = {}));
var Oi;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Oi || (Oi = {}));
var Li;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Li || (Li = {}));
const fc = Symbol(""),
  yc = Symbol("");
function bc() {
  return Dr(fc);
}
function _c() {
  return Dr(yc);
}
const Bi = L(null),
  Ze = L({}),
  Qe = () => {
    const e = (U) => {
        Bi.value = U;
      },
      n = (U) => {
        Ze.value = U;
      },
      a = u(() => Ze.value.pages || {}),
      t = u(() => Ze.value.blocks),
      o = u(() => Ze.value.elements),
      i = u(() => Ze.value.nav),
      r = u(() => Ze.value.homePageId),
      s = u(() => Ze.value.isNavHidden),
      l = u(() => Ze.value.cookieBannerAcceptText),
      m = u(() => Ze.value.cookieBannerDisclaimer),
      g = u(() => Ze.value.cookieBannerDeclineText),
      d = u(() => Ze.value.blogReadingTimeText),
      p = u(() => Ze.value.meta),
      f = u(() => Ze.value.metaTitle),
      b = u(() => Ze.value.forms),
      S = u(() => Ze.value.styles),
      T = u(() => Ze.value.domain),
      w = u(() => Ze.value.siteId),
      y = u(() => Ze.value.ecommerceShoppingCart),
      D = u(() => Ze.value.blogCategories),
      C = u(() => Ze.value.languageSwitcherLanguages),
      M = u(() => Ze.value.currentPageId),
      N = u(() => a.value[M.value]),
      R = u(() => Ze.value.currentLocale),
      Q = u(() => Ze.value.languageKeys),
      G = u(() => Ze.value.ecwidPages),
      P = ({ pageId: U }) => {
        if (!a.value[U]) return null;
        const j = a.value[U].slug;
        return [jt, p.value.defaultLocale].includes(R.value)
          ? r.value === U
            ? "/"
            : `/${j}`
          : r.value === U
          ? `/${R.value}`
          : `/${R.value}/${j}`;
      };
    return {
      website: Bi,
      pageData: Ze,
      pages: a,
      blocks: t,
      elements: o,
      nav: i,
      homePageId: r,
      isNavHidden: s,
      cookieBannerAcceptText: l,
      cookieBannerDisclaimer: m,
      cookieBannerDeclineText: g,
      blogReadingTimeText: d,
      meta: p,
      metaTitle: f,
      forms: b,
      styles: S,
      domain: T,
      siteId: w,
      ecommerceShoppingCart: y,
      blogCategories: D,
      languageSwitcherLanguages: C,
      currentPageId: M,
      currentLocale: R,
      languageKeys: Q,
      ecwidPages: G,
      currentPageData: N,
      setWebsite: e,
      setPageData: n,
      getPagePathFromId: P,
      getButtonHref: ({
        isFormButton: U,
        linkedPageId: j,
        linkType: V,
        href: E,
      }) => (U ? null : E || (V === nr && j ? P({ pageId: j }) : E)),
    };
  },
  Ai = L(!0),
  cl = () => {
    const e = (n) => {
      Ai.value = n;
    };
    return { hasUserScrolled: u(() => !Ai.value), setIntersectingState: e };
  },
  wc = re({
    __name: "StickyTrigger",
    setup(e, { expose: n }) {
      n();
      const a = { threshold: 1 },
        t = L(null),
        o = L(null),
        { setIntersectingState: i } = cl();
      De(() => {
        (o.value = new IntersectionObserver(([{ isIntersecting: s }]) => {
          i(s);
        }, a)),
          t.value && o.value.observe(t.value);
      }),
        Tt(() => {
          o.value?.disconnect();
        });
      const r = {
        OBSERVER_OPTIONS: a,
        stickyTriggerRef: t,
        observer: o,
        setIntersectingState: i,
      };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  kc = { ref: "stickyTriggerRef", class: "sticky-trigger" };
function Sc(e, n, a, t, o, i) {
  return c(), h("div", kc, null, 512);
}
const Tc = oe(wc, [["render", Sc]]),
  xi = 1600,
  Ri = 1224,
  Ni = 12,
  Cc = 1224,
  fa = 1920,
  Pc = (e, n) => {
    const [a, t, o, i] = n.split("/").map(Number.parseFloat),
      { styles: r } = e.settings ?? {},
      s = Number.parseFloat(r?.["row-size"]) ?? 48,
      l = Number.parseFloat(r?.["column-gap"]) ?? 24,
      m = Number.parseFloat(r?.["row-gap"]) ?? 16,
      g = (Ri - (Ni - 1) * l) / Ni,
      d = (fa - xi) / 2 + l,
      p = (xi - Ri) / 2 - l;
    let f = fa;
    const b = o - a,
      S = b * s + (b - 1) * m;
    return (
      t !== 1 && (f -= d),
      i !== 17 && (f -= d),
      t > 2 && (f -= p),
      i < 16 && (f -= p),
      t > 3 && (f -= (t - 3) * (g + l)),
      i < 15 && (f -= (15 - i) * (g + l)),
      i - t === 1 && (f = g),
      { width: f, height: S }
    );
  },
  Hi = (e) => Object.prototype.toString.call(e) === "[object Object]",
  en = (e) => {
    const n = e.split(" "),
      a = n.length;
    if (a < 1 || a > 4) throw new Error(`Cannot parse ${a} sides`);
    return ((o, i = o, r = o, s = i) => ({
      top: o,
      right: i,
      bottom: r,
      left: s,
    }))(...n);
  },
  Ic = ["padding", "m-padding", "block-padding"],
  Ec = ["border-radius"],
  At = (e, n = "") =>
    Hi(e)
      ? Object.entries(e).reduce((a, [t, o]) => {
          const i = n ? `${n}-${t}` : `--${t}`;
          if (Hi(o)) return { ...a, ...At(o, i) };
          const r = Ic.includes(t)
            ? Object.entries(en(o)).reduce(
                (s, [l, m]) => ({ ...s, [`${i}-${l}`]: m, [i]: o }),
                {}
              )
            : { [i]: o };
          return { ...a, ...(Ec.includes(t) ? { [i]: `${o}px` } : r) };
        }, {})
      : {},
  Mo = L([]),
  dl = () => {
    const e = u(() => Mo.value.reduce((o, i) => o + i.quantity, 0)),
      n = () => {
        const o = window.Ecwid.Controller.getEntryPage();
        window.Ecwid.openPage(o.type.toLowerCase(), { id: o.categoryId });
      },
      a = () => {
        window.Ecwid && window.Ecwid.openPage("cart");
      },
      t = (o) => {
        Mo.value = o;
      };
    return {
      ecwidCartItems: u(() => Mo.value),
      ecwidCartItemCount: e,
      openCart: a,
      setEcwidCartItems: t,
      openEcwidHomepage: n,
    };
  },
  Br = (e, n, a) =>
    !e || !n
      ? null
      : e === "assets"
      ? `https://assets.zyrosite.com/${a}/${n}`
      : e === "unsplash"
      ? `https://images.unsplash.com/${n}`
      : n,
  Dc = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
  Mc = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Oc = /^\d+$/,
  Lc = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  Za = (e) => {
    const n = e.split(/[/\\]/).pop(),
      a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase();
  },
  Bc = [
    el,
    "https://assets.zyrosite.space",
    "https://assets.zyrosite.com",
    "https://cdn.zyrosite.com",
  ],
  Ac = "https://images.unsplash.com",
  xc = "cdn-cgi/image",
  Ar = [{ width: 360, height: 640 }],
  xr = [1, 2, 2.625, 3],
  Rc = [{ width: 1440 }, { width: 1920 }],
  Rr = [1, 2],
  Nr = 16,
  Rn = (e, n = Nr) =>
    [`(min-width: ${or}px) ${e}px`, `calc(100vw - ${n * 2}px)`].join(", "),
  Nc = (e, n, a = {}) => {
    const t = a.fit || (a.shouldContain ? "scale-down" : "crop"),
      o = [
        "format=auto",
        a.width && `w=${a.width}`,
        a.height && `h=${a.height}`,
        `fit=${t}`,
        a.isLossless && "q=100",
        a.format && `f=${a.format}`,
        a.trim && `trim=${a.trim}`,
        a.quality && !a.isLossless && `q=${a.quality}`,
      ]
        .filter((r) => !!r)
        .join(",");
    let [, i] = n.split(e);
    for (; i.startsWith("/"); ) i = i.replace("/", "");
    return `${e}/${xc}/${o}/${i}`;
  },
  Hc = (e, n = {}) => {
    const a = new URL(e);
    return (
      a.searchParams.set("auto", n.format || "format"),
      a.searchParams.set("fit", n.shouldContain ? "clip" : "crop"),
      n.width && a.searchParams.set("w", n.width),
      n.height && a.searchParams.set("h", n.height),
      n.isLossless && a.searchParams.set("q", 100),
      a.href
    );
  },
  rt = (e, n, a, t = {}) => {
    const o = Br(e, n, a);
    if (!o) return null;
    if (Za(o) === "svg" || Za(o) === "ico" || Za(o) === "gif") return o;
    const i = Bc.find((r) => o.includes(r));
    return i ? Nc(i, o, t) : o.includes(Ac) ? Hc(o, t) : o;
  },
  ya = (e, n, a, t = {}) => {
    const o = Rc.map((s) =>
      Rr.map((l) => {
        const m = Math.round(s.width * l);
        return `${rt(e, n, a, { ...t, width: m })} ${m}w`;
      })
    ).join(",");
    return `${Ar.map((s) =>
      xr.map((l) => {
        const m = Math.round(s.width * l),
          g = { ...t, width: m };
        return (
          t.isMobileFullScreen && (g.height = Math.round(s.height * l)),
          `${rt(e, n, a, g)} ${m}w`
        );
      })
    ).join(",")},${o}`;
  },
  Aa = (e, n, a, t = {}) => {
    if (!t.width) return ya(e, n, a, t);
    const o = Rr.map((l) => {
        const m = Math.round(t.width * l),
          g = Math.round(t.height * l);
        return `${rt(e, n, a, { ...t, width: m, height: g })} ${m}w`;
      }).join(","),
      i = (t.mobilePadding ?? Nr) * 2;
    return `${Ar.map((l) => {
      const m = l.width - i;
      return xr
        .map((g) => {
          const d = t.width / t.height,
            p = Math.round(m * g),
            f = Math.round(p / d);
          return `${rt(e, n, a, { ...t, width: p, height: f })} ${p}w`;
        })
        .join(",");
    }).join(",")},${o}`;
  },
  $c = (e, n, a, t = {}) => {
    if (!t.width) return ya(e, n, a, t);
    const o = Rr.map((s) => {
        const l = Math.round(t.width * s),
          m = Math.round(t.height * s);
        return `${rt(e, n, a, { ...t, width: l, height: m })} ${l}w`;
      }).join(","),
      i = (t.mobilePadding ?? Nr) * 2;
    return `${Ar.map((s) => {
      const l = Math.round(
        (s.width - i + t.columnGap) / t.columnCount - t.columnGap
      );
      return xr
        .map((m) => {
          const g = Math.round(l * m),
            d = Math.round(l * m);
          return `${rt(e, n, a, {
            ...t,
            width: d,
            height: !t.isMasonryLayout && d,
          })} ${g}w`;
        })
        .join(",");
    }).join(",")},${o}`;
  },
  Uc = () => {
    const { meta: e } = Qe(),
      n = L("z-cookies-consent"),
      a = L("1"),
      t = u(() => !!a.value),
      o = u(() => a.value === "1"),
      i = u(() => a.value !== "0");
    return (
      De(() => {
        const l = ll(window.location.hostname);
        (n.value = `z-cookies-consent-${l}`), (a.value = pc(n.value));
      }),
      {
        acceptCookies: () => {
          Di(n.value, 1, 365),
            (a.value = "1"),
            vc({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          Di(n.value, 0, 1), (a.value = "0");
        },
        hasUserConsentedCookieBanner: t,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i,
      }
    );
  },
  Vc = re({
    __name: "CookieBanner",
    props: {
      disclaimer: { type: String, required: !0 },
      acceptText: { type: String, default: "Accept" },
      declineText: { type: String, default: "Decline" },
      siteMeta: { type: Object, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
        } = Uc(),
        i = {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
          get isAppPrerendering() {
            return ul;
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Yc = { key: 0, class: "cookie-banner" },
  Fc = { class: "cookie-banner__frame" },
  Wc = { class: "cookie-banner__text" },
  qc = { class: "cookie-banner__controls" };
function Gc(e, n, a, t, o, i) {
  return !t.isAppPrerendering && !t.hasUserConsentedCookieBanner
    ? (c(),
      h("div", Yc, [
        I("div", Fc, [
          I("p", Wc, J(a.disclaimer), 1),
          I("div", qc, [
            I(
              "button",
              {
                class: "control-button primary",
                onClick:
                  n[0] ||
                  (n[0] = (...r) => t.acceptCookies && t.acceptCookies(...r)),
              },
              J(a.acceptText),
              1
            ),
            I(
              "button",
              {
                class: "control-button",
                onClick:
                  n[1] ||
                  (n[1] = (...r) => t.declineCookies && t.declineCookies(...r)),
              },
              J(a.declineText),
              1
            ),
          ]),
        ]),
      ]))
    : O("", !0);
}
const jc = oe(Vc, [["render", Gc]]),
  zc = (e) => {
    const n = e.colors.map((a) => a.value).join(", ");
    return `linear-gradient(${e.angle}deg, ${n})`;
  },
  Kc = re({
    __name: "BlockBackground",
    props: {
      type: { default: "color" },
      alt: {},
      overlayOpacity: {},
      src: {},
      srcset: {},
      isEager: { type: Boolean },
      gradient: {},
      color: {},
      isFixed: { type: Boolean },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobile: { type: Boolean, default: !1 },
      isOpacityDisabled: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        st((d) => ({
          bcd875c8: t.value,
          "9b633550": o.value.xStart,
          "97f98412": o.value.yStart,
          "5f04ef51": o.value.xEnd,
          "0bf8c7fc": r.value,
        }));
      const a = e,
        t = u(() =>
          a.type === "gradient" && a.gradient
            ? zc(a.gradient)
            : a.isOpacityDisabled
            ? a.type === "color"
              ? a.color
              : "rgb(255, 255, 255)"
            : a.type === "color"
            ? a.color
            : "transparent"
        ),
        o = u(() => {
          const p = (((a.gradient?.angle || 0) + 90) * Math.PI) / 180,
            f = `${Math.round(50 - 50 * Math.cos(p))}%`,
            b = `${Math.round(50 - 50 * Math.sin(p))}%`,
            S = `${Math.round(50 + 50 * Math.cos(p))}%`,
            T = `${Math.round(50 + 50 * Math.sin(p))}%`;
          return { xStart: f, yStart: b, xEnd: S, yEnd: T };
        }),
        i = u(
          () => a.type === "image" && !a.isOpacityDisabled && a.overlayOpacity
        ),
        r = u(() =>
          a.type === "image" && !a.isOpacityDisabled && a.overlayOpacity
            ? a.overlayOpacity
            : 0
        ),
        s = L(null),
        l = L(Dr("mobileFrame")),
        m = u(() => {
          if (a.isInPreviewMode && a.isMobile && a.isFixed && l.value) {
            const d = l.value.getBoundingClientRect();
            return {
              height: `${d.height}px`,
              width: `${d.width}px`,
              top: `${d.top}px`,
              left: "50%",
              transform: "translate(-50%, 0)",
            };
          }
          return {};
        });
      De(() => {
        Ct(() => {
          s.value?.classList.add("transition-with-bg");
        });
      });
      const g = {
        props: a,
        backgroundColor: t,
        gradientBackgroundPosition: o,
        isBackgroundOverlayShown: i,
        backgroundOverlayOpacity: r,
        blockBackgroundRef: s,
        mobileFrame: l,
        mobilePreviewStyles: m,
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  Qc = ["alt", "src", "srcset", "loading"];
function Zc(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        ref: "blockBackgroundRef",
        class: Z([
          "block-background",
          {
            "block-background--fixed": a.isFixed,
            "block-background--animated-gradient":
              a.type === "gradient" && a.gradient?.isAnimated,
          },
        ]),
      },
      [
        a.type === "image" && a.src
          ? (c(),
            h(
              "img",
              {
                key: a.src,
                alt: a.alt,
                src: a.src,
                srcset: a.srcset,
                width: "100vw",
                sizes: "(max-width: 500px) 800px, 100vw",
                loading: a.isEager ? "eager" : "lazy",
                class: Z([
                  "block-background__image",
                  { "block-background__image--fixed": a.isFixed },
                ]),
                style: xe(t.mobilePreviewStyles),
              },
              null,
              14,
              Qc
            ))
          : O("", !0),
        t.isBackgroundOverlayShown
          ? (c(),
            h(
              "div",
              {
                key: 1,
                class: Z([
                  "block-background__overlay",
                  { "block-background__overlay--fixed": a.isFixed },
                ]),
              },
              null,
              2
            ))
          : O("", !0),
      ],
      2
    )
  );
}
const Hr = oe(Kc, [["render", Zc]]),
  Xc = re({
    props: {
      categories: { type: Array, default: () => [] },
      blogCategories: { type: Object, default: () => ({}) },
    },
    methods: {
      getCategoryNameById(e) {
        return this.blogCategories[e]?.name?.toUpperCase();
      },
    },
  }),
  Jc = { class: "categories" },
  ed = ["onClick"];
function td(e, n, a, t, o, i) {
  return (
    c(),
    h("p", Jc, [
      (c(!0),
      h(
        pe,
        null,
        ke(
          e.categories,
          (r, s) => (
            c(),
            h(
              "span",
              {
                key: r,
                class: "categories__item",
                onClick: (l) => e.$emit("filter-category", e.categories[s]),
              },
              J(e.getCategoryNameById(r)),
              9,
              ed
            )
          )
        ),
        128
      )),
    ])
  );
}
const ml = oe(Xc, [
    ["render", td],
    ["__scopeId", "data-v-17a7aef3"],
  ]),
  ad = re({
    __name: "BlockBlogListItemMeta",
    props: {
      authorName: { type: String, default: "" },
      minutesAmount: { type: String, default: "0" },
      blogReadingTimeText: { type: String, default: "" },
      date: { type: String, default: "" },
      showAvatar: { type: Boolean, default: !0 },
      showName: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !0 },
      showMinutes: { type: Boolean, default: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = {
        get DEFAULT_MIN_READ_TEXT() {
          return Nu;
        },
      };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  nd = { class: "blog-list-item-meta" },
  od = { class: "font-secondary" },
  rd = { class: "blog-list-item-meta__author-name" },
  id = { class: "blog-list-item-meta__subtitle" },
  sd = { key: 0 },
  ld = { key: 1 };
function ud(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", nd, [
      I("div", od, [
        ue((c(), h("p", rd, [Ae(J(a.authorName), 1)])), [
          [Ft, a.showName],
          [r, "blog-author"],
        ]),
        ue(
          I(
            "p",
            id,
            [
              a.showDate && a.date
                ? (c(), h("span", sd, J(a.date), 1))
                : O("", !0),
              a.showMinutes
                ? (c(),
                  h(
                    "span",
                    ld,
                    J(
                      `${a.minutesAmount} ${
                        a.blogReadingTimeText || t.DEFAULT_MIN_READ_TEXT
                      }`
                    ),
                    1
                  ))
                : O("", !0),
            ],
            512
          ),
          [[Ft, a.showDate || a.showMinutes]]
        ),
      ]),
    ])
  );
}
const gl = oe(ad, [
    ["render", ud],
    ["__scopeId", "data-v-88ffe988"],
  ]),
  pl = (e) => new Date(e).toLocaleDateString("en-US"),
  $r = re({
    name: "BlockBlogHeader",
    components: { BlockBlogListItemMeta: gl, BlockBlogListItemCategories: ml },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const a = u(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: pl,
        DATA_ATTRIBUTE_ANIMATION_ROLE: ha,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: dn,
        blogTitleTextSize: a,
      };
    },
    computed: {
      categories() {
        return this.currentBlogPage?.categories ?? [];
      },
      meta() {
        return this.currentBlogPage?.meta ?? {};
      },
      authorName() {
        return this.meta?.authorName;
      },
      shownItems() {
        return this.data?.settings?.shownItems ?? {};
      },
      areCategoriesShown() {
        return this.shownItems.categories && this.categories.length;
      },
    },
  }),
  $i = () => {
    st((e) => ({ "21ab201a": e.blogTitleTextSize }));
  },
  Ui = $r.setup;
$r.setup = Ui ? (e, n) => ($i(), Ui(e, n)) : $i;
const cd = { class: "block-blog-header__content" },
  dd = { class: "font-primary block-blog-header__title" },
  md = { key: 0, class: "font-secondary block-blog-header__description" };
function gd(e, n, a, t, o, i) {
  const r = Be("BlockBlogListItemCategories"),
    s = Be("BlockBlogListItemMeta"),
    l = je("qa");
  return ue(
    (c(),
    h(
      "div",
      et({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        I("div", cd, [
          ue((c(), h("h1", dd, [Ae(J(e.meta.title), 1)])), [
            [l, "blog-label-posttitle"],
          ]),
          e.shownItems.description
            ? ue((c(), h("p", md, [Ae(J(e.meta.description), 1)])), [
                [l, "blog-label-postdescription"],
              ])
            : O("", !0),
          e.areCategoriesShown
            ? ue(
                (c(),
                W(
                  r,
                  {
                    key: 1,
                    class: "font-secondary",
                    categories: e.categories,
                    "blog-categories": e.blogCategories,
                  },
                  null,
                  8,
                  ["categories", "blog-categories"]
                )),
                [[l, "blog-label-category"]]
              )
            : O("", !0),
          Ee(
            s,
            Ge(
              {
                authorName: e.authorName,
                minutesAmount: e.currentBlogPage.minutesToRead,
                date: e.getFormattedNumericDate(e.currentBlogPage.date),
                showAvatar: e.shownItems.avatar,
                showName: e.shownItems.authorFullName,
                showDate: e.shownItems.date,
                showMinutes: e.shownItems.minutesToRead,
              },
              { "blog-reading-time-text": e.blogReadingTimeText }
            ),
            null,
            16,
            ["blog-reading-time-text"]
          ),
        ]),
      ],
      16
    )),
    [[l, "blog-postinformation"]]
  );
}
const pd = oe($r, [
    ["render", gd],
    ["__scopeId", "data-v-dfe4e670"],
  ]),
  ir = L(!1),
  Vi = L(null),
  sr = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: u(() => Vi.value === e && ir.value),
    toggleSearchDropdown: (t) => {
      (Vi.value = e), (ir.value = t);
    },
  }),
  Pn = 16,
  sa = 1224,
  zt = 360,
  vl = zt - Pn * 2,
  Yi = 16,
  vd = re({
    __name: "BlockLayoutWrapper",
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        st((l) => ({
          c467b54c: i.value,
          "2c660f9c": o.value,
          "6ced7b1e": t.value,
          "1f9bbfe2": r.value,
        }));
      const a = e,
        t = u(() =>
          a.isBlockResponsive && !a.isInPreviewMode
            ? `0 ${(Pn * 100) / zt}vw`
            : `0 ${Pn}px`
        ),
        o = u(() => `${zt}px`),
        i = u(() => `${sa}px`),
        r = u(() => `0 ${Pn}px`),
        s = {
          props: a,
          mobileBlockPaddingCSSVar: t,
          mobileMaxWidthCSSVar: o,
          maxWidthCSSVar: i,
          tabletBlockPaddingCSSVar: r,
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function hd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: Z([
          "block-layout",
          {
            "block-layout--legacy": a.isMobileLegacy,
            "block-layout--layout": !a.isMobileLegacy,
            "block-layout--forcedOnTop": a.isForcedOnTop,
          },
        ]),
      },
      [ee(e.$slots, "default")],
      2
    )
  );
}
const fd = oe(vd, [["render", hd]]),
  Fi = ({ blockElements: e, elementPositionKey: n }) =>
    e?.length ? Math.max(...e.map((a) => a[n].top + a[n].height)) : 0,
  yd = [tl, al],
  bd = ({ lowestElementBottom: e, sectionMinHeight: n }) => {
    const t = e >= n ? 0 : n - e;
    return e ? `${t}px` : "1fr";
  },
  ro = ({ blockElementsWithPosition: e }) => {
    try {
      const n = e.flatMap(({ position: t }) => [t.top, t.height + t.top]);
      return [...new Set([0, ...n])].sort((t, o) => t - o);
    } catch (n) {
      console.error(n);
    }
  },
  lr = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: n,
    elementPosition: a,
  }) => {
    const { top: t, left: o, width: i, height: r } = a,
      s = e.indexOf(t) + 1,
      l = e.indexOf(t + r) + 1,
      m = n.indexOf(o) + 1,
      g = n.indexOf(o + i) + 1;
    return { rowStart: s, rowEnd: l, columnStart: m, columnEnd: g };
  },
  io = ({ blockElementsWithPosition: e, blockWidth: n }) => {
    const a = e.flatMap(({ position: o }) => [o.left, o.width + o.left]);
    return [...new Set([0, ...a, n])].sort((o, i) => o - i);
  },
  Nn = ({ blockElements: e, elementPositionKey: n }) =>
    e.map((a) => ({ ...a, position: a[n] })),
  Wi = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
  }) => {
    const t = n === ta ? vl : sa,
      o = Nn({ blockElements: e, elementPositionKey: n });
    return io({ blockElementsWithPosition: o, blockWidth: t })
      .map((l, m, g) => (m === 0 ? l : l - g[m - 1]))
      .filter((l) => l !== 0)
      .map((l) => (a ? `${(l / t) * 100}%` : `${l}px`))
      .join(" ");
  },
  _d = ({ gridRows: e }) => e.filter((n) => n !== 0),
  wd = ({ gridRows: e }) => e.map((n) => `${n}px`),
  kd = ({ gridRows: e }) => e.map((n) => `minmax(${n}px, auto)`),
  Sd = ({ gridRows: e, responsiveRows: n, isMobile: a }) =>
    e.map((t, o) =>
      n.includes(o + 1) ? "auto" : `${(t * 100) / (a ? zt : sa)}vw`
    ),
  Oo = ({ gridRows: e, lastRowHeight: n }) => `${e.join(" ")} ${n}`,
  Kn = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
    responsiveRows: t,
    lowestElementBottom: o,
    sectionMinHeight: i,
  }) => {
    const r = n === ta,
      s = Nn({ blockElements: e, elementPositionKey: n }),
      m = ro({ blockElementsWithPosition: s }).map((f, b, S) =>
        b === 0 ? f : f - S[b - 1]
      ),
      g = bd({ lowestElementBottom: o, sectionMinHeight: i }),
      d = _d({ gridRows: m });
    if (!a) {
      const f = wd({ gridRows: d });
      return Oo({ gridRows: f, lastRowHeight: g });
    }
    if (!t) {
      const f = kd({ gridRows: d });
      return Oo({ gridRows: f, lastRowHeight: g });
    }
    const p = Sd({ gridRows: d, responsiveRows: t, isMobile: r });
    return Oo({ gridRows: p, lastRowHeight: g });
  },
  qi = ({ blockElements: e, elementPositionKey: n }) => {
    const a = Nn({ blockElements: e, elementPositionKey: n }),
      t = ro({ blockElementsWithPosition: a }),
      o = io({ blockElementsWithPosition: a, blockWidth: n === ta ? vl : sa });
    return e
      .filter((i) => !yd.includes(i.type))
      .reduce((i, r) => {
        const { rowEnd: s, rowStart: l } = lr({
            rowTopsUniqueSorted: t,
            columnsLeftUniqueSorted: o,
            elementPosition: r[n],
          }),
          m = s > l ? s - l : 1,
          g = [...new Array(m).keys()].map((d, p) => l + p);
        return i.some((d) => g.includes(d)) ? i : [...i, s - 1];
      }, []);
  },
  Td = (e, n) => {
    const a = Nn({ blockElements: e, elementPositionKey: Ba }),
      t = ro({ blockElementsWithPosition: a }),
      o = io({ blockElementsWithPosition: a, blockWidth: sa }),
      i = Nn({ blockElements: e, elementPositionKey: ta }),
      r = ro({ blockElementsWithPosition: i }),
      s = io({ blockElementsWithPosition: i, blockWidth: sa });
    return e.map((l) => {
      const {
          rowStart: m,
          rowEnd: g,
          columnStart: d,
          columnEnd: p,
        } = lr({
          rowTopsUniqueSorted: t,
          columnsLeftUniqueSorted: o,
          elementPosition: l.desktop,
        }),
        {
          rowStart: f,
          rowEnd: b,
          columnStart: S,
          columnEnd: T,
        } = lr({
          rowTopsUniqueSorted: r,
          columnsLeftUniqueSorted: s,
          elementPosition: l.mobile,
        });
      return {
        ...l,
        settings: {
          ...l.settings,
          styles: {
            ...(l.settings?.styles || {}),
            "z-index": n.indexOf(l.elementId) + 1,
            "grid-row": `${m}/${g}`,
            "grid-column": `${d}/${p}`,
            "m-grid-row": `${f}/${b}`,
            "m-grid-column": `${S}/${T}`,
          },
        },
      };
    });
  },
  ur = ({
    blockData: e,
    siteElements: n,
    shouldBuildResponsive: a = !0,
  } = {}) => {
    const t = L(a),
      o = u(() =>
        e.value.components.map((C) => ({ ...n.value[C], elementId: C }))
      ),
      i = u(() =>
        o?.value?.length
          ? Fi({ blockElements: o.value, elementPositionKey: ta })
          : null
      ),
      r = u(() =>
        o?.value?.length
          ? Fi({ blockElements: o.value, elementPositionKey: Ba })
          : null
      ),
      s = u(() =>
        e.value.mobile?.minHeight && i.value
          ? "auto"
          : `${e.value.mobile?.minHeight || Yi}px`
      ),
      l = u(() =>
        e.value.desktop?.minHeight && r.value
          ? "auto"
          : `${e.value.desktop?.minHeight}px`
      ),
      m = u(() => e.value.components.some((C) => !n.value[C].mobile)),
      g = u(() =>
        Kn({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
        })
      ),
      d = u(() =>
        Wi({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
        })
      ),
      p = u(() =>
        Wi({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      f = u(() => qi({ blockElements: o.value, elementPositionKey: ta })),
      b = u(() =>
        Kn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
          responsiveRows: f.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      S = u(() =>
        Kn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      T = u(() => qi({ blockElements: o.value, elementPositionKey: Ba })),
      w = u(() =>
        Kn({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
          responsiveRows: T.value,
          lowestElementBottom: r.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      y = u(() => Td(o.value, e.value.zindexes)),
      D = u(() => ({
        "--m-grid-template-rows": b.value,
        "--t-grid-template-rows": S.value,
        "--small-desktop-grid-template-rows": w.value,
        "--grid-template-rows": g.value,
        "--m-grid-template-columns": p.value,
        "--grid-template-columns": d.value,
        "--m-block-min-height": s.value,
        "--t-block-min-height": `${e.value.mobile?.minHeight || Yi}px`,
        "--small-desktop-block-min-height": l.value,
        "--block-min-height": `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: o,
      layoutElements: y,
      buildResponsiveGrid: t,
      layoutCSSVars: D,
      isMobileLegacy: m,
    };
  },
  Cd = re({
    name: "LayoutElementWrapper",
    props: {
      elementData: { type: Object, required: !0 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isMobileLegacy: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    computed: {
      settings() {
        return this.elementData.settings;
      },
      styles() {
        return this.settings.styles;
      },
      innerBackgroundValue() {
        const { innerBackground: e } = this.elementData;
        if (!e) return {};
        const n = e[e.current];
        return e.current !== "image"
          ? { "--gridItemInnerBackground": n }
          : {
              "--gridItemInnerBackground": `url(${n})`,
              "--gridItemInnerBackgroundOverlayOpacity":
                "overlay-opacity" in e ? e["overlay-opacity"] : null,
            };
      },
      isHiddenDesktop() {
        return this.elementData.desktop.isHidden;
      },
      isHiddenMobile() {
        return this.elementData.mobile.isHidden;
      },
      computedStyles() {
        return {
          ...At(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { "--hidden-element-z-index": 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { "--m-hidden-element-z-index": 0 }),
          ...(this.isForcedOnTop && { "--z-index": Hu }),
        };
      },
    },
  });
function Pd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: Z([
          "layout-element",
          {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy,
          },
        ]),
        style: xe(e.computedStyles),
      },
      [ee(e.$slots, "default")],
      6
    )
  );
}
const Id = oe(Cd, [["render", Pd]]),
  Ed = re({
    __name: "GridButton",
    props: {
      tagName: { default: "a" },
      href: { default: null },
      target: { default: null },
      rel: { default: null },
      type: { default: "primary" },
      buttonType: { default: null },
      content: { default: "" },
      isDisabled: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      fontSizeMobile: { default: null },
      fontSizeDesktop: { default: null },
      fontFamily: { default: null },
      fontWeight: { default: null },
      borderWidth: { default: null },
      borderRadius: { default: null },
      backgroundColor: { default: null },
      fontColor: { default: null },
      borderColor: { default: null },
      backgroundColorHover: { default: null },
      fontColorHover: { default: null },
      borderColorHover: { default: null },
      mobileElementWidth: { default: 0 },
      mobileElementHeight: { default: 0 },
      isInBuilder: { type: Boolean, default: !1 },
    },
    emits: ["click", "drag", "dragstart"],
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => `${(a.mobileElementWidth * 100) / zt}vw`),
        o = u(() => `${(a.mobileElementHeight * 100) / zt}vw`),
        i = u(() => ({
          "--font-size-mobile": a.fontSizeMobile
            ? `${a.fontSizeMobile}px`
            : null,
          "--font-size-desktop": a.fontSizeDesktop
            ? `${a.fontSizeDesktop}px`
            : null,
          "--font-family": a.fontFamily,
          "--font-weight": a.fontWeight,
          "--border-radius":
            a.borderRadius === 0 || a.borderRadius
              ? `${a.borderRadius}px`
              : null,
          "--border-width":
            a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : "0px",
          "--background-color": a.backgroundColor,
          "--font-color": a.fontColor,
          "--border-color": a.borderColor || "rgb(26, 26, 26)",
          "--background-color-hover": a.backgroundColorHover,
          "--font-color-hover": a.fontColorHover,
          "--border-color-hover": a.borderColorHover,
          "--m-height": a.isInBuilder ? "100%" : o.value,
          "--m-width": a.isInBuilder ? "100%" : t.value,
        })),
        r = u(() => ({
          "grid-button--empty": !a.content,
          [`grid-button--${a.type}`]: a.type,
          loading: a.isLoading,
        })),
        s = {
          props: a,
          mobileWidthCSSVar: t,
          mobileHeightCSSVar: o,
          buttonCSSVars: i,
          computedClass: r,
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Dd(e, n, a, t, o, i) {
  return (
    c(),
    W(
      cn(a.tagName),
      {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: Z(["grid-button", t.computedClass]),
        "aria-hidden": a.isLoading,
        style: xe(t.buttonCSSVars),
        onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
        onDrag: n[1] || (n[1] = (r) => e.$emit("drag", r)),
        onDragstart: n[2] || (n[2] = (r) => e.$emit("dragstart", r)),
      },
      { default: fe(() => [Ae(J(a.content), 1)]), _: 1 },
      40,
      [
        "type",
        "name",
        "href",
        "disabled",
        "target",
        "rel",
        "class",
        "aria-hidden",
        "style",
      ]
    )
  );
}
const Ya = oe(Ed, [
    ["render", Dd],
    ["__scopeId", "data-v-4a176f12"],
  ]),
  Hn = (e, { href: n } = {}) => ({
    href: n,
    type: u(() => e.data.settings?.type),
    fontSizeMobile: u(() => e.data.mobile?.fontSize),
    fontSizeDesktop: u(() => e.data.desktop?.fontSize),
    fontFamily: u(() => e.data.fontFamily),
    fontWeight: u(() => e.data.fontWeight),
    borderWidth: u(() => e.data.borderWidth),
    borderRadius: u(() => e.data.borderRadius),
    backgroundColor: u(() => e.data.backgroundColor),
    fontColor: u(() => e.data.fontColor),
    borderColor: u(() => e.data.borderColor),
    backgroundColorHover: u(() => e.data.backgroundColorHover),
    fontColorHover: u(() => e.data.fontColorHover),
    borderColorHover: u(() => e.data.borderColorHover),
    buttonType: u(() => (e.data.settings.isFormButton ? "submit" : null)),
    tagName: u(() => (e.data.settings.isFormButton ? "button" : "a")),
    target: u(() => e.data.target),
    rel: u(() => e.data.rel),
    content: u(() => e.data.content),
    mobileElementWidth: u(() => e.data.mobile.width),
    mobileElementHeight: u(() => e.data.mobile.height),
  }),
  Md = {
    __name: "GridButtonProviderUser",
    props: {
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Qe(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: p,
          fontFamily: f,
          fontWeight: b,
          borderWidth: S,
          borderRadius: T,
          backgroundColor: w,
          fontColor: y,
          borderColor: D,
          backgroundColorHover: C,
          fontColorHover: M,
          borderColorHover: N,
        } = Hn(a, {
          href: u(() =>
            t({
              isFormButton: a.data.settings.isFormButton,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        R = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: p,
          fontFamily: f,
          fontWeight: b,
          borderWidth: S,
          borderRadius: T,
          backgroundColor: w,
          fontColor: y,
          borderColor: D,
          backgroundColorHover: C,
          fontColorHover: M,
          borderColorHover: N,
          computed: u,
          get useSiteGlobal() {
            return Qe;
          },
          GridButton: Ya,
          get useGridButton() {
            return Hn;
          },
        };
      return (
        Object.defineProperty(R, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        R
      );
    },
  };
function Od(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.GridButton,
      {
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        "button-type": t.buttonType,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
      },
      null,
      8,
      [
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "button-type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const Ld = oe(Md, [["render", Od]]),
  Bd = (e, n) => {
    const a = u(() => n.ecommerce?.products),
      t = u(() => e.data.settings?.productId),
      o = u(() => e.data.settings?.productVariantId);
    return { storeProducts: a, productId: t, productVariantId: o };
  },
  Lo = L(""),
  Gi = L({}),
  xt = () => ({
    openEcommerceModal: (t) => {
      Lo.value = t;
    },
    closeEcommerceModal: () => {
      Lo.value = null;
    },
    openEcommerceModalName: Lo,
    productPreviewData: Gi,
    setProductPreviewData: (t) => {
      Gi.value = t;
    },
  }),
  Ur = "https://cdn.zyrosite.com/cdn-builder-placeholders",
  Bt = `${Ur}/ecommerce-product`,
  at = `${Ur}/instagram`,
  Ad = `${Ur}/password-page`,
  ma = {
    id: -1,
    title: "Product name",
    subtitle: null,
    description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
    images: [],
    options: [],
    product_collections: [],
    ribbon_text: null,
    site_product_selection: null,
    type: { value: "physical" },
    thumbnail: null,
    variants: [
      {
        id: "",
        manage_inventory: !1,
        prices: [
          {
            amount: 0,
            currency_code: "USD",
            sale_amount: null,
            currency: {
              code: "USD",
              decimal_digits: 2,
              template: "$$1",
              name: "US Dollar",
              symbol: "$",
              symbol_native: "$",
              name_plural: "US dollars",
              rounding: 0,
              min_amount: 0,
            },
          },
        ],
        options: [],
      },
    ],
    purchasable: !0,
  };
(({ ...ma, images: `${Bt}`, thumbnail: `${Bt}` }),
{ ...ma, images: `${Bt}`, thumbnail: `${Bt}` }),
  { ...ma, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ma, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ma, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ma, images: `${Bt}`, thumbnail: `${Bt}` };
const cr = "donation",
  Rt = "booking",
  dr = "hours",
  xd = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
  ji = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available",
  },
  Rd = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
  mr = "shopping-cart-items",
  Nd = 864e5,
  hl = "site_product_selection",
  Vr = "lowest_price_first",
  Ka = 160,
  Wn = "https://api-ecommerce.hostinger.com/store",
  Hd = async (e, n) => {
    const a = n.map((i) => `ids[]=${i}`).join("&");
    return (await (await fetch(`${Wn}/${e}/products?${a}`)).json()).products;
  },
  $d = async (e, n) => {
    const a = n.map((i) => `product_ids[]=${i}`).join("&");
    return (
      await (
        await fetch(`${Wn}/${e}/variants?fields=inventory_quantity&${a}`)
      ).json()
    ).variants;
  },
  Ud = async ({
    items: e,
    successUrl: n,
    cancelUrl: a,
    locale: t,
    storeId: o,
  }) =>
    fetch(`${Wn}/${o}/checkout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        items: e,
        successUrl: n,
        cancelUrl: a,
        locale: t,
      }),
    }).then(async (i) => {
      const r = await i.json();
      if (i.ok) return r.url;
      throw r;
    }),
  Vd = async (e, n) =>
    fetch(`${Wn}/time-slots`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: n,
      }),
    }).then(async (a) => {
      const t = await a.json();
      if (a.ok) return t.slots;
      throw t;
    }),
  Yd = async ({ bookingId: e, fromDate: n, toDate: a }) =>
    fetch(`${Wn}/availability`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: n,
        to_date: a,
      }),
    }).then(async (t) => {
      const o = await t.json();
      if (t.ok) return o.disabled_dates;
      throw o;
    }),
  tn = (e) => {
    const { openEcommerceModal: n } = xt(),
      { meta: a, ecommerceShoppingCart: t } = Qe();
    let o = "";
    const i = L("");
    De(() => {
      (o = a.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function r(m) {
      const g = m.some((f) => f.type.value === cr),
        d = m.some((f) => f.type.value === Rt);
      let p = "";
      return (
        d ? (p = `&product=${Rt}`) : g && (p = `&product=${cr}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${p}`
      );
    }
    async function s(m) {
      const g = m.reduce(
          (f, b) =>
            f.find((T) => T.variant_id === b.variants[0].id)
              ? f.map((T) =>
                  T.variant_id === b.variants[0].id
                    ? { variant_id: T.variant_id, quantity: T.quantity + 1 }
                    : T
                )
              : [
                  ...f,
                  {
                    variant_id: b.variants[0].id,
                    quantity: 1,
                    time_slot: b.variants[0].booking_event?.time_slot,
                    time_zone: b.variants[0].booking_event?.time_zone,
                  },
                ],
          []
        ),
        d = t.value?.lang || "en";
      let p = await Ud({
        items: g,
        cancelUrl: i.value,
        successUrl: r(m),
        locale: d,
        storeId: o,
      });
      return (p = new URL(p)), p.searchParams.set("lang", d), p.toString();
    }
    async function l(m) {
      if (!o) {
        n("EcommerceCheckoutFailed");
        return;
      }
      try {
        const g = await s(m);
        window.location.assign(g);
      } catch (g) {
        g.code === ji.INSUFFICIENT_INVENTORY
          ? n("EcommerceOutOfStock")
          : g.code === ji.BOOKING_UNAVAILABLE
          ? n("EcommerceBookingUnavailable")
          : n("EcommerceCheckoutFailed");
      }
    }
    return { initiateCheckout: l, storeId: o };
  },
  zi = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? Rd,
  Ki = () => {
    const e = window.localStorage.getItem(mr);
    if (!e) return [];
    const n = JSON.parse(e);
    return n.payload.length
      ? Date.now() > n.expiry
        ? (window.localStorage.removeItem(mr), [])
        : n.payload
      : [];
  },
  Wa = L([]),
  pn = L([]),
  vn = L([]),
  Qi = L(null),
  Zi = L(!1),
  Xi = L(!1),
  Ji = L(!1),
  es = L(!1),
  Fd = L(!1),
  Nt = () => {
    const { meta: e, pages: n } = Qe(),
      a = u(() => e.value[$u] === Uu),
      t = u(() => !!e.value?.ecommerceStoreId),
      o = u(() =>
        pn.value.reduce(
          (y, D) =>
            y.find((M) => M.product.variants[0].id === D.variants[0].id)
              ? y.map((M) =>
                  M.product.variants[0].id === D.variants[0].id
                    ? { ...M, quantity: M.quantity + 1 }
                    : M
                )
              : [...y, { product: D, quantity: 1 }],
          []
        )
      ),
      i = (y, D) => {
        if (pn.value.length >= Ka) return !1;
        const C = Wa.value.find((N) => N.id === y),
          M = C?.variants.find((N) => N.id === D);
        if (!C || !M) return !1;
        if (M.manage_inventory) {
          const R =
              o.value.find(
                (G) =>
                  G.product.id === y &&
                  G.product.variants.some((P) => P.id === M.id)
              )?.quantity || 0,
            Q = vn.value.find((G) => G.id === D)?.inventory_quantity;
          return R < Q;
        }
        return !0;
      },
      r = u(() => Object.values(n.value).filter((y) => y.type === nl)),
      s = (y) => {
        Ji.value = y;
      },
      l = (y) => {
        es.value = y;
      },
      m = (y) => {
        Xi.value = y;
      },
      g = (y) => {
        Wa.value = y;
      },
      d = (y) => {
        Zi.value = y;
      },
      p = (y) => {
        pn.value = y || [];
        const D = { payload: y, expiry: Date.now() + Nd };
        window.localStorage.setItem(mr, JSON.stringify(D));
      },
      f = (y) => {
        Qi.value = y;
      },
      b = (y) => {
        vn.value = y;
      },
      S = ({ cartItems: y }) =>
        (y || pn.value).reduce((D, C) => {
          const M = Wa.value.find((B) => B.id === C.id),
            N = M?.variants.find((B) => C.variants.some((U) => B.id === U.id)),
            R = D.reduce(
              (B, U) => (U.variants.some((j) => j.id === N?.id) ? B + 1 : B),
              0
            ),
            Q = vn.value.find((B) => B.id === N?.id)?.inventory_quantity,
            G = !N?.manage_inventory || R < Q,
            P =
              M?.type.value === Rt
                ? {
                    ...C.variants[0].booking_event,
                    time_slot: C.variants[0].booking_event.time_slot,
                    date: C.variants[0].booking_event.date,
                  }
                : null;
          return M && N && G
            ? [...D, { ...M, variants: [{ ...N, booking_event: P }] }]
            : D;
        }, []),
      T = async (y) => {
        const D = zi(e.value);
        if (!D) return;
        try {
          const M = await $d(D, y),
            N = [...vn.value, ...M];
          b(N);
        } catch (M) {
          console.error(M);
        }
        const C = await S({ cartItems: Ki() });
        p(C);
      };
    return {
      products: Wa,
      shoppingCartItems: pn,
      selectedBookingProductId: Qi,
      variantsQuantity: vn,
      isShoppingCartOpen: Zi,
      isCheckoutLoading: Xi,
      isLoading: Ji,
      isLoaded: es,
      isProductPageLoaded: Fd,
      isStoreTypeZyro: a,
      isEcommerceStoreCreated: t,
      quantifiedCartItemsList: o,
      canAddToCart: i,
      productPages: r,
      setIsLoading: s,
      setIsLoaded: l,
      setIsCheckoutLoading: m,
      setStoreProducts: g,
      setShoppingCartOpen: d,
      setShoppingCartItems: p,
      setSelectedBookingId: f,
      setVariantsQuantity: b,
      fetchProducts: async (y) => {
        const D = zi(e.value);
        if (!D) return;
        const N = [...Ki().map((R) => R.id), ...y].reduce(
          (R, Q) => (Wa.value.some((G) => G.id === Q) ? R : [...R, Q]),
          []
        );
        if (N.length) {
          l(!1), s(!0);
          try {
            const Q = (await Hd(D, N)).reduce(
              (G, P) => (G.some((U) => U.id === P.id) ? G : [...G, P]),
              [...Wa.value]
            );
            g(Q), await T(N);
          } catch (R) {
            console.error(R);
          } finally {
            s(!1), l(!0);
          }
        }
      },
      updateVariantsQuantity: T,
      refreshCartItems: S,
    };
  },
  Wd = re({
    name: "GridEcommerceButtonProviderUser",
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: n } = Qe(),
        {
          canAddToCart: a,
          isShoppingCartOpen: t,
          products: o,
          shoppingCartItems: i,
          setShoppingCartOpen: r,
          setShoppingCartItems: s,
          setSelectedBookingId: l,
        } = Nt(),
        { initiateCheckout: m } = tn(),
        { openEcommerceModal: g } = xt(),
        {
          content: d,
          type: p,
          fontSizeMobile: f,
          fontSizeDesktop: b,
          fontFamily: S,
          fontWeight: T,
          borderRadius: w,
          backgroundColor: y,
          fontColor: D,
          borderColor: C,
          borderWidth: M,
          backgroundColorHover: N,
          fontColorHover: R,
          borderColorHover: Q,
        } = Hn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        {
          productId: G,
          productVariantId: P,
          storeProducts: B,
        } = Bd(e, { ecommerce: { products: o.value } }),
        U = u(() => o.value.find((Y) => Y.id === G.value)),
        j = u(() => U.value?.type.value === Rt),
        V = u(() => j.value && !!i.value?.some((Y) => Y.id === G.value)),
        E = u(() => V.value || !a(G.value, P.value));
      return {
        openEcommerceModal: g,
        productId: G,
        productVariantId: P,
        content: d,
        type: p,
        fontSizeMobile: f,
        fontSizeDesktop: b,
        fontFamily: S,
        fontWeight: T,
        borderRadius: w,
        borderWidth: M,
        backgroundColor: y,
        fontColor: D,
        borderColor: C,
        backgroundColorHover: N,
        fontColorHover: R,
        borderColorHover: Q,
        initiateCheckout: m,
        shoppingCartItems: i,
        storeProducts: B,
        isAddToCartDisabled: E,
        product: U,
        canAddToCart: a,
        isShoppingCartOpen: t,
        setShoppingCartOpen: r,
        setShoppingCartItems: s,
        setSelectedBookingId: l,
      };
    },
    data() {
      return { isLoading: !1 };
    },
    methods: {
      async handleClick() {
        if (this.product?.type.value === Rt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (Ha() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = this.product?.variants.find(
            (a) => a.id === this.productVariantId
          ),
          n = { ...this.product, variants: [e] };
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, n]),
            this.manageCartOpenState())
          : ((this.isLoading = !0),
            await this.initiateCheckout([n]).then(() => {
              this.isLoading = !1;
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
    },
  });
function qd(e, n, a, t, o, i) {
  const r = Be("GridButton"),
    s = je("qa");
  return ue(
    (c(),
    W(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick,
      },
      null,
      8,
      [
        "content",
        "type",
        "is-disabled",
        "is-loading",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-radius",
        "border-width",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
        "onClick",
      ]
    )),
    [[s, "button-ecommerce-checkout"]]
  );
}
const Gd = oe(Wd, [["render", qd]]),
  jd = re({
    __name: "GridEmbed",
    props: {
      srcdoc: { default: "" },
      shouldRender: { type: Boolean, default: !1 },
      height: { default: null },
      id: {},
    },
    emits: ["iframe-height-updated"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = L(0),
        r = L(),
        s = u(() =>
          t.height && i.value > t.height ? i.value : t.height || i.value
        ),
        l = u(() => ({ "--height": `${s.value}px` })),
        g = {
          props: t,
          emit: o,
          observedHeight: i,
          gridEmbedIframeRef: r,
          embedHeight: s,
          computedStyles: l,
          observeGridEmbed: () => {
            const d = r.value?.contentWindow?.document.querySelector("html");
            new ResizeObserver(([{ contentRect: f }]) => {
              requestAnimationFrame(() => {
                const { height: b } = f;
                b !== i.value &&
                  ((i.value = b), o("iframe-height-updated", i.value));
              });
            }).observe(d);
          },
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  zd = ["id"],
  Kd = ["srcdoc"];
function Qd(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    h(
      "div",
      { id: a.id, class: "grid-embed", style: xe(t.computedStyles) },
      [
        a.shouldRender
          ? (c(),
            h(
              "iframe",
              {
                key: 0,
                ref: "gridEmbedIframeRef",
                class: "grid-embed__iframe",
                srcdoc: a.srcdoc,
                title: "custom code element",
                onLoad: t.observeGridEmbed,
              },
              null,
              40,
              Kd
            ))
          : O("", !0),
      ],
      12,
      zd
    )),
    [[r, "builder-gridelement-gridembed"]]
  );
}
const Zd = oe(jd, [["render", Qd]]),
  Xd = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
  Jd = (e) => {
    const n = document.createElement("div");
    n.innerHTML = e;
    const a = [...n.children].reduce(
      (t, o) =>
        o.tagName === "STYLE"
          ? { ...t, styles: `${t.styles} ${o.outerHTML}` }
          : o.tagName === "SCRIPT"
          ? { ...t, scripts: `${t.scripts} ${o.outerHTML}` }
          : { ...t, html: `${t.html} ${o.outerHTML}` },
      { styles: Xd, scripts: "", html: "" }
    );
    return `<!DOCTYPE html>
	<head>${a.styles}</head>
	<body>${a.html}${a.scripts}</body>
</html>`;
  },
  em = "500px",
  fl = (e, n = em) => {
    const a = L(!1),
      t = L(null);
    try {
      De(() => {
        t.value = new IntersectionObserver(
          ([{ isIntersecting: i }]) => {
            i && ((a.value = !0), t.value?.disconnect());
          },
          { threshold: 0, rootMargin: n }
        );
      });
      const o = Mr(() => {
        if (e.value && t.value) {
          const i = e.value.$el ?? e.value;
          t.value.observe(i), o();
        }
      });
      Tt(() => t.value?.disconnect());
    } catch (o) {
      console.error(o);
    }
    return { isObserved: a };
  },
  tm = re({
    components: { GridEmbed: Zd },
    props: {
      data: { type: Object, default: () => ({}) },
      id: { type: String, default: null },
    },
    setup(e) {
      const n = L(null),
        { isObserved: a } = fl(n),
        t = L(null);
      return (
        De(() => {
          t.value = Jd(e.data.content);
        }),
        { gridEmbedRef: n, isObserved: a, srcdoc: t }
      );
    },
  });
function am(e, n, a, t, o, i) {
  const r = Be("GridEmbed");
  return (
    c(),
    W(
      r,
      {
        id: e.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height,
      },
      null,
      8,
      ["id", "should-render", "srcdoc", "height"]
    )
  );
}
const nm = oe(tm, [["render", am]]),
  Bo = ({ value: e = "", validation: n, validationMessages: a }) => {
    const t = [];
    return (
      n.includes("required") && !e.replace(/ /g, "") && t.push(a.required),
      e.replace(/ /g, "") &&
        (n.includes("email") && !Dc.test(e) && t.push(a.email),
        n.includes("phone") && !Mc.test(e) && t.push(a.phone)),
      t
    );
  },
  om = re({
    props: {
      modelValue: { type: String, default: "" },
      label: { type: String, default: null },
      placeholder: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isRequiredAsteriskVisible: { type: Boolean, default: !0 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        default: "input",
        validator: (e) => ["textarea", "input"].includes(e),
      },
    },
    emits: ["update:model-value"],
    data() {
      return { gridInputValue: "" };
    },
    computed: {
      computedClasses() {
        return [
          { "input__component--textarea": this.tag === "textarea" },
          { "input__component--read-only": !this.isInteractive },
          `input__component--${this.theme}`,
        ];
      },
    },
  }),
  rm = ["placeholder", "value", "readonly", "tabindex"],
  im = ["placeholder", "value", "readonly", "tabindex"],
  sm = { key: 2 };
function lm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: Z(["input", `input--${e.theme}`]) },
      [
        I(
          "label",
          { class: Z(["input__label", `input__label--${e.theme}`]) },
          J(e.label) +
            J(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""),
          3
        ),
        e.tag === "input"
          ? (c(),
            h(
              "input",
              {
                key: 0,
                placeholder: e.placeholder,
                type: "text",
                class: Z(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[0] ||
                  (n[0] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
                onDragstart: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
                onDrag: n[3] || (n[3] = Ie(() => {}, ["prevent"])),
              },
              null,
              42,
              rm
            ))
          : O("", !0),
        e.tag === "textarea"
          ? (c(),
            h(
              "textarea",
              {
                key: 1,
                placeholder: e.placeholder,
                type: "text",
                class: Z(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[4] ||
                  (n[4] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[5] || (n[5] = Ie(() => {}, ["prevent"])),
                onDragstart: n[6] || (n[6] = Ie(() => {}, ["prevent"])),
                onDrag: n[7] || (n[7] = Ie(() => {}, ["prevent"])),
              },
              null,
              42,
              im
            ))
          : O("", !0),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h("div", sm, [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  e.validationErrors,
                  (r) => (
                    c(),
                    h(
                      "p",
                      { key: r, class: "input__error-message text-body-2" },
                      J(r),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O("", !0),
      ],
      2
    )
  );
}
const um = oe(om, [
    ["render", lm],
    ["__scopeId", "data-v-ee2fb8ad"],
  ]),
  cm = re({
    name: "GridSelectInput",
    props: {
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
      tag: { type: String, required: !0 },
      selectedOptions: { type: Array, required: !0 },
      isInteractive: { type: Boolean, default: !0 },
      theme: { type: String, required: !0 },
      isSelected: { type: Boolean, required: !0 },
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
      labelClasses() {
        return [
          { "input__label--read-only": !this.isInteractive },
          `select-input--${this.theme}`,
        ];
      },
      inputClasses() {
        return [{ "input__component--read-only": !this.isInteractive }];
      },
    },
    methods: {
      selectOption() {
        if (!this.isInteractive) return;
        const e = { id: this.id, value: this.name };
        this.tag !== "checkbox"
          ? this.$emit("select-option", e)
          : this.isSelected
          ? this.$emit("remove-selection", e)
          : this.$emit("add-selection", e);
      },
    },
  }),
  dm = ["for"],
  mm = ["id", "type", "checked", "tabindex"];
function gm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "label",
      { class: Z(["select-input", e.labelClasses]), for: e.id },
      [
        (c(),
        h(
          "input",
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: Z(["select-input__input", e.inputClasses]),
            checked: e.isSelected,
            tabindex: e.isInteractive ? 0 : -1,
            onInput:
              n[0] ||
              (n[0] = Ie(
                (...r) => e.selectOption && e.selectOption(...r),
                ["stop"]
              )),
            onDragstart: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
            onDrag: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
          },
          null,
          42,
          mm
        )),
        Ae(" " + J(e.name), 1),
      ],
      10,
      dm
    )
  );
}
const pm = oe(cm, [
    ["render", gm],
    ["__scopeId", "data-v-3b89e969"],
  ]),
  vm = re({
    name: "GridSelectInputsWrapper",
    components: { GridSelectInput: pm },
    props: {
      label: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isTextArea: { type: Boolean, default: !1 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        required: !0,
        validator: (e) => ["radio", "checkbox"].includes(e),
      },
      options: { type: Array, required: !0 },
    },
    emits: ["input"],
    data() {
      return { selectedOptions: [] };
    },
    watch: {
      selectedOptions() {
        const e = this.selectedOptions.map(({ value: n }) => n).toString();
        this.$emit("input", e);
      },
    },
    methods: {
      isSelected(e) {
        return this.selectedOptions.some(({ id: n }) => n === e);
      },
      removeSelection(e) {
        const n = this.selectedOptions.filter((a) => a.id !== e.id);
        this.selectedOptions = n;
      },
      addSelection(e) {
        this.selectedOptions = [...this.selectedOptions, e];
      },
      selectOption(e) {
        this.selectedOptions = [e];
      },
    },
  }),
  hm = { key: 0 };
function fm(e, n, a, t, o, i) {
  const r = Be("GridSelectInput");
  return (
    c(),
    h(
      "div",
      { class: Z(["input", `input--${e.theme}`]) },
      [
        I(
          "label",
          {
            class: Z([
              "input__label input__label--read-only",
              [`input__label--${e.theme}`],
            ]),
          },
          J(e.label) + J(e.isRequired ? "*" : ""),
          3
        ),
        (c(!0),
        h(
          pe,
          null,
          ke(
            e.options,
            (s) => (
              c(),
              h("div", { key: s.id, class: "input__options" }, [
                Ee(
                  r,
                  {
                    id: s.id,
                    name: s.value,
                    tag: e.tag,
                    "is-selected": e.isSelected(s.id),
                    theme: e.theme,
                    "is-interactive": e.isInteractive,
                    "selected-options": e.selectedOptions,
                    onRemoveSelection: e.removeSelection,
                    onAddSelection: e.addSelection,
                    onSelectOption: e.selectOption,
                  },
                  null,
                  8,
                  [
                    "id",
                    "name",
                    "tag",
                    "is-selected",
                    "theme",
                    "is-interactive",
                    "selected-options",
                    "onRemoveSelection",
                    "onAddSelection",
                    "onSelectOption",
                  ]
                ),
              ])
            )
          ),
          128
        )),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h("div", hm, [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  e.validationErrors,
                  (s) => (
                    c(),
                    h(
                      "p",
                      { key: s, class: "input__error-message text-body-2" },
                      J(s),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O("", !0),
      ],
      2
    )
  );
}
const ym = oe(vm, [
    ["render", fm],
    ["__scopeId", "data-v-d57bc6de"],
  ]),
  bm = {
    __name: "GridForm",
    props: {
      id: { type: String, required: !0 },
      settings: { type: Object, required: !0 },
      submitButtonData: { type: Object, required: !0 },
      formId: { type: String, default: null },
      isError: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      isUserSite: { type: Boolean, default: !1 },
      theme: {
        type: String,
        validator: (e) => ["dark", "light"].includes(e),
        default: "light",
      },
      formJustify: { type: String, default: null },
      formButtonJustifySelf: { type: String, default: null },
      mobileFormButtonJustifySelf: { type: String, default: null },
      formBackgroundColor: { type: String, default: null },
      formBorderWidth: { type: String, default: null },
      formBorderColor: { type: String, default: null },
      formBorderRadius: { type: String, default: null },
      formPadding: { type: String, default: null },
      submitButtonBackgroundColor: { type: String, default: null },
      submitButtonBackgroundColorHover: { type: String, default: null },
      submitButtonFontColor: { type: String, default: null },
      submitButtonFontColorHover: { type: String, default: null },
      submitButtonBorderColor: { type: String, default: null },
      submitButtonBorderColorHover: { type: String, default: null },
      submitButtonFontFamily: { type: String, default: null },
      submitButtonFontWeight: { type: Number, default: null },
      submitButtonFontSizeMobile: { type: Number, default: null },
      submitButtonFontSizeDesktop: { type: Number, default: null },
      submitButtonBorderWidth: { type: Number, default: null },
      submitButtonBorderRadius: { type: Number, default: null },
      inputFillColor: { type: String, default: null },
      inputFillColorHover: { type: String, default: null },
      formFontFamily: { type: String, default: null },
      formFontWeight: { type: Number, default: null },
      labelTextColor: { type: String, default: null },
      labelTextSize: { type: Number, default: null },
      mobileLabelTextSize: { type: Number, default: null },
      inputTextColor: { type: String, default: null },
      inputTextColorHover: { type: String, default: null },
      inputTextSize: { type: Number, default: null },
      mobileInputTextSize: { type: Number, default: null },
      inputBorderColor: { type: String, default: null },
      inputBorderColorHover: { type: String, default: null },
      inputBorderWidth: { type: Number, default: null },
      inputBorderRadius: { type: Number, default: null },
      elementsVerticalSpacing: { type: Number, default: null },
      mobileElementsVerticalSpacing: { type: Number, default: null },
    },
    emits: ["on-submit"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = L({}),
        r = L({}),
        s = L(!1),
        l = u(() =>
          t.settings.schema.reduce(
            (S, T) => ({
              ...S,
              [T.name]: {
                validation: T.validation.flat(),
                validationMessages: T["validation-messages"],
              },
            }),
            {}
          )
        ),
        m = u(() => {
          const S = Number.isInteger(t.elementsVerticalSpacing)
              ? `${t.elementsVerticalSpacing}px`
              : null,
            T = Number.isInteger(t.mobileElementsVerticalSpacing)
              ? `${t.mobileElementsVerticalSpacing}px`
              : null;
          return {
            "--form-flex": t.formJustify ? null : "0 1 100%",
            "--form-button-justify-self": t.formButtonJustifySelf,
            "--m-form-button-justify-self": t.mobileFormButtonJustifySelf,
            "--form-background-color": t.formBackgroundColor,
            "--form-border-width": `${t.formBorderWidth}px`,
            "--form-border-color": t.formBorderColor,
            "--form-border-radius": `${t.formBorderRadius}px`,
            "--form-padding": t.formPadding ? `${t.formPadding}px` : null,
            "--form-font-family": t.formFontFamily,
            "--form-font-weight": t.formFontWeight,
            "--input-fill-color": t.inputFillColor,
            "--input-fill-color--hover":
              t.inputFillColorHover || t.inputFillColor,
            "--label-text-color": t.labelTextColor,
            "--label-text-size": t.labelTextSize
              ? `${t.labelTextSize}px`
              : null,
            "--m-label-text-size": t.mobileLabelTextSize
              ? `${t.mobileLabelTextSize}px`
              : null,
            "--input-text-color": t.inputTextColor,
            "--input-text-color--hover":
              t.inputTextColorHover || t.inputTextColor,
            "--input-text-size": t.inputTextSize
              ? `${t.inputTextSize}px`
              : null,
            "--m-input-text-size": t.mobileInputTextSize
              ? `${t.mobileInputTextSize}px`
              : null,
            "--input-height": t.inputTextSize ? "auto" : "48px",
            "--input-border-color": t.inputBorderColor,
            "--input-border-color--hover":
              t.inputBorderColorHover || t.inputBorderColor,
            "--input-border-width": t.inputBorderWidth
              ? `${t.inputBorderWidth}px`
              : null,
            "--input-border-radius": t.inputBorderRadius
              ? `${t.inputBorderRadius}px`
              : null,
            "--form-elements-vertical-spacing": S,
            "--m-form-elements-vertical-spacing": T,
            "--form-spacing": "var(--formSpacing)",
            "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
            "--grid-item-inner-background": "var(--gridItemInnerBackground)",
          };
        }),
        g = () =>
          t.settings.schema.flatMap(({ name: S }) => {
            const T = Bo({ value: r.value[S]?.value, ...l.value[S] });
            return (i.value = { ...i.value, [S]: T }), T;
          }),
        d = (S, T) => {
          (i.value = { ...i.value, [S]: Bo({ value: T, ...l.value[S] }) }),
            (r.value = {
              ...r.value,
              [S]: {
                value: T,
                type:
                  t.settings.schema.find(({ name: w }) => w === S)
                    .validationType || "text",
              },
            });
        },
        p = () => {
          r.value = Object.fromEntries(
            Object.entries(r.value).map(([S, { value: T, type: w }]) => [
              S,
              { value: T.trim(), type: w },
            ])
          );
        },
        b = {
          props: t,
          emit: o,
          validationErrors: i,
          formValues: r,
          areErrorsVisible: s,
          validationRules: l,
          formCSSVars: m,
          validateForm: g,
          updateField: d,
          trimFormValues: p,
          handleSubmit: () => {
            p();
            const S = g();
            (s.value = S.length > 0), s.value || o("on-submit", r.value);
          },
          computed: u,
          ref: L,
          get validateInput() {
            return Bo;
          },
          GridButton: Ya,
          GridInput: um,
          GridSelectInputsWrapper: ym,
        };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  },
  _m = ["id"],
  wm = ["name"];
function km(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: Z([
          "form",
          { "form--single-field": a.settings.type === "singleField" },
        ]),
        style: xe(t.formCSSVars),
      },
      [
        I(
          "form",
          {
            class: Z([
              "form__control",
              { "form__control--invisible": a.showSuccessMessage || a.isError },
            ]),
            name: a.formId,
            onSubmit: Ie(t.handleSubmit, ["prevent"]),
          },
          [
            (c(!0),
            h(
              pe,
              null,
              ke(
                a.settings.schema,
                (s) => (
                  c(),
                  h(
                    pe,
                    { key: s.id },
                    [
                      s.type === "GridInput"
                        ? ue(
                            (c(),
                            W(
                              t.GridInput,
                              {
                                key: 0,
                                theme: a.theme,
                                tag: s.tag,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                "is-required":
                                  t.validationRules[s.name].validation.includes(
                                    "required"
                                  ),
                                "is-required-asterisk-visible":
                                  a.settings.schema.length > 1,
                                "validation-errors": t.validationErrors[s.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                "model-value": t.formValues[s.name]?.value,
                                "onUpdate:modelValue": (l) =>
                                  t.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "placeholder",
                                "label",
                                "is-required",
                                "is-required-asterisk-visible",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "model-value",
                                "onUpdate:modelValue",
                              ]
                            )),
                            [[r, `form-field-${s.inputLabel}`]]
                          )
                        : O("", !0),
                      s.type === "GridSelectInput"
                        ? ue(
                            (c(),
                            W(
                              t.GridSelectInputsWrapper,
                              {
                                key: 1,
                                theme: a.theme,
                                tag: s.tag,
                                options: s.options,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                "is-required":
                                  t.validationRules[s.name].validation.includes(
                                    "required"
                                  ),
                                "validation-errors": t.validationErrors[s.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                onInput: (l) => t.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "options",
                                "placeholder",
                                "label",
                                "is-required",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "onInput",
                              ]
                            )),
                            [[r, `form-field-${s.inputLabel}`]]
                          )
                        : O("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
            Ee(
              t.GridButton,
              {
                content: a.submitButtonData.content,
                type: a.submitButtonData.settings.type,
                "background-color": a.submitButtonBackgroundColor,
                "background-color-hover": a.submitButtonBackgroundColorHover,
                "font-color": a.submitButtonFontColor,
                "font-color-hover": a.submitButtonFontColorHover,
                "border-color": a.submitButtonBorderColor,
                "border-color-hover": a.submitButtonBorderColorHover,
                "font-family": a.submitButtonFontFamily,
                "font-weight": a.submitButtonFontWeight,
                "font-size-mobile": a.submitButtonFontSizeMobile,
                "font-size-desktop": a.submitButtonFontSizeDesktop,
                "border-width": a.submitButtonBorderWidth,
                "border-radius": a.submitButtonBorderRadius,
                class: "form__button",
                "button-type": "submit",
                "tag-name": "button",
              },
              null,
              8,
              [
                "content",
                "type",
                "background-color",
                "background-color-hover",
                "font-color",
                "font-color-hover",
                "border-color",
                "border-color-hover",
                "font-family",
                "font-weight",
                "font-size-mobile",
                "font-size-desktop",
                "border-width",
                "border-radius",
              ]
            ),
          ],
          42,
          wm
        ),
        ee(e.$slots, "default", {}, void 0, !0),
      ],
      14,
      _m
    )
  );
}
const Sm = oe(bm, [
    ["render", km],
    ["__scopeId", "data-v-77575ff3"],
  ]),
  Tm = re({
    __name: "ZyroLoader",
    props: {
      color: { default: "var(--color-dark)" },
      size: { default: "40px" },
      weight: { default: "4px" },
    },
    setup(e, { expose: n }) {
      n(),
        st((t) => ({
          "31918b4a": t.size,
          "19ef3f81": t.weight,
          "007e258c": t.color,
        }));
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  Cm = { class: "loader" },
  Pm = Or(
    '<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>',
    5
  ),
  Im = [Pm];
function Em(e, n, a, t, o, i) {
  return c(), h("div", Cm, Im);
}
const Yr = oe(Tm, [
    ["render", Em],
    ["__scopeId", "data-v-a1cb4206"],
  ]),
  Dm = "light",
  Mm = 200,
  Om = { SHOW_MESSAGE: "showMessage", LINK_TO_PAGE: "linkToPage" },
  Lm = re({
    __name: "PostSubmitElement",
    props: {
      successMessage: { default: "" },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: Dm },
      hasBorderWidth: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = L(null),
        o = u(() => ({
          "--submit-element-border": a.hasBorderWidth
            ? ""
            : "var(--color-gray)",
        }));
      Ne(t, () => {
        t.value &&
          t.value.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      const i = {
        props: a,
        postSubmitRef: t,
        submitElementCSSVars: o,
        ZyroLoader: Yr,
      };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  yl = (e) => (Ot("data-v-00e42172"), (e = e()), Lt(), e),
  Bm = { key: 1, class: "success-message__heading" },
  Am = { key: 2 },
  xm = yl(() =>
    I("div", { class: "submit-message__heading" }, " Something went wrong ", -1)
  ),
  Rm = yl(() => I("div", null, " Please try again later ", -1)),
  Nm = [xm, Rm];
function Hm(e, n, a, t, o, i) {
  return a.isLoading || a.showSuccessMessage || a.isError
    ? (c(),
      h(
        "div",
        {
          key: 0,
          ref: "postSubmitRef",
          class: Z(["submit-message", `submit-message--${a.theme}`]),
          style: xe(t.submitElementCSSVars),
        },
        [
          a.isLoading
            ? (c(),
              W(t.ZyroLoader, {
                key: 0,
                color: "var(--grid-button-primary-background-color)",
              }))
            : a.showSuccessMessage && !a.isError
            ? (c(), h("div", Bm, J(a.successMessage), 1))
            : O("", !0),
          a.isError && !a.isLoading ? (c(), h("div", Am, Nm)) : O("", !0),
        ],
        6
      ))
    : O("", !0);
}
const $m = oe(Lm, [
    ["render", Hm],
    ["__scopeId", "data-v-00e42172"],
  ]),
  Um = re({
    components: { GridForm: Sm, PostSubmitElement: $m },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const { meta: e, forms: n, getPagePathFromId: a } = Qe();
      return { meta: e, forms: n, getPagePathFromId: a };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: n, elementId: a }) {
        await fetch(
          `https://builder-backend.hostinger.com/u1/data/v3/post/${e}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            credentials: "omit",
            mode: "cors",
            body: JSON.stringify({ elementId: a, formData: n }),
          }
        ).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate || this.isInPreviewMode) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let n = !1;
        setTimeout(() => {
          (n = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, Mm);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, r]) => [i, r])
            ),
            elementId: this.data.elementId,
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: a } = this.data.settings;
          if (!a || a.id === Om.SHOW_MESSAGE) return;
          const { pageId: t } = this.data.settings.submitRedirectPage,
            o = this.getPagePathFromId({ pageId: t });
          this.$router.push({ path: o });
        } catch (a) {
          console.error(a), (this.isError = !0);
        } finally {
          n && (this.isLoading = !1);
        }
      },
    },
  });
function Vm(e, n, a, t, o, i) {
  const r = Be("PostSubmitElement"),
    s = Be("GridForm");
  return (
    c(),
    W(
      s,
      {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover":
          e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self":
          e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self":
          e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop?.labelTextSize,
        "mobile-label-text-size": e.data.mobile?.labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop?.inputTextSize,
        "mobile-input-text-size": e.data.mobile?.inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing":
          e.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing":
          e.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit,
      },
      {
        default: fe(() => [
          Ee(
            r,
            {
              "show-success-message": e.showSuccessMessage,
              "success-message": e.data.settings.successMessage,
              "is-loading": e.isLoading,
              "is-error": e.isError,
              theme: e.data.settings.theme,
              "has-border-width": e.data.formBorderWidth !== 0,
            },
            null,
            8,
            [
              "show-success-message",
              "success-message",
              "is-loading",
              "is-error",
              "theme",
              "has-border-width",
            ]
          ),
        ]),
        _: 1,
      },
      8,
      [
        "id",
        "form-id",
        "settings",
        "submit-button-data",
        "submit-button-background-color",
        "submit-button-background-color-hover",
        "submit-button-font-color",
        "submit-button-font-color-hover",
        "submit-button-border-color",
        "submit-button-border-color-hover",
        "submit-button-font-family",
        "submit-button-font-weight",
        "submit-button-font-size-mobile",
        "submit-button-font-size-desktop",
        "submit-button-border-width",
        "submit-button-border-radius",
        "show-success-message",
        "is-error",
        "theme",
        "form-justify",
        "form-button-justify-self",
        "mobile-form-button-justify-self",
        "form-background-color",
        "form-border-width",
        "form-border-color",
        "form-border-radius",
        "form-padding",
        "input-fill-color",
        "input-fill-color-hover",
        "form-font-family",
        "form-font-weight",
        "label-text-color",
        "label-text-size",
        "mobile-label-text-size",
        "input-text-color",
        "input-text-color-hover",
        "input-text-size",
        "mobile-input-text-size",
        "input-border-color",
        "input-border-color-hover",
        "input-border-width",
        "input-border-radius",
        "elements-vertical-spacing",
        "mobile-elements-vertical-spacing",
        "onOnSubmit",
      ]
    )
  );
}
const Ym = oe(Um, [["render", Vm]]),
  Fm = re({
    __name: "GridImage",
    props: {
      src: {},
      alt: {},
      href: { default: null },
      preventDrag: { type: Boolean },
      sizes: {},
      srcset: {},
      tagName: { default: Vu },
      target: { default: null },
      rel: { default: null },
      isLightboxEnabled: { type: Boolean },
      isUnstyled: { type: Boolean },
      resetMobilePosition: { type: Boolean, default: !0 },
      elementWidth: { default: 0 },
      elementHeight: { default: 0 },
      mobileBorderRadius: { default: 0 },
      desktopBorderRadius: { default: 0 },
      cropCssVars: { default: null },
      isOverflowVisible: { type: Boolean },
      isEager: { type: Boolean },
      isMobileImage: { type: Boolean },
      isInBuilder: { type: Boolean },
      isSvg: { type: Boolean },
      shapeMaskSource: { default: null },
      isInPreviewMode: { type: Boolean },
      overlayOpacity: { default: 0 },
    },
    emits: ["image-load", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(),
        st((D) => ({
          "08a09b3a": b.value,
          "41b9bd48": T.value,
          "143cc87a": f.value,
          68139491: d.value,
          "161b5a04": p.value,
          ed9f83f0: S.value,
          "6c589be4": l.value,
          cb1185de: m.value,
        }));
      const t = e,
        o = a,
        i = L(null),
        r = L(!1),
        s = u(
          () =>
            t.elementHeight !== null && t.elementHeight > 0 && t.isMobileImage
        ),
        l = u(() =>
          t.isInBuilder
            ? "100%"
            : t.isInPreviewMode
            ? `${t.elementWidth}px`
            : s.value
            ? `${(t.elementWidth * 100) / zt}vw`
            : "100%"
        ),
        m = u(() =>
          t.isInBuilder
            ? "auto"
            : t.isInPreviewMode
            ? `${t.elementHeight}px`
            : s.value
            ? `${(t.elementHeight * 100) / zt}vw`
            : "auto"
        ),
        g = u(() => ({
          "--overflow": t.isOverflowVisible ? "visible" : null,
          ...t.cropCssVars,
        })),
        d = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementWidth * 100) / sa}vw`
        ),
        p = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementHeight * 100) / sa}vw`
        ),
        f = u(() =>
          t.overlayOpacity ? `rgba(0, 0, 0, ${t.overlayOpacity / 100})` : null
        ),
        b = u(() =>
          t.shapeMaskSource
            ? null
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : null
        ),
        S = u(() =>
          t.shapeMaskSource
            ? null
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : null
        ),
        T = u(() => t.shapeMaskSource && `url('${t.shapeMaskSource}')`),
        w = () => {
          o("image-load"), (r.value = !0);
        };
      De(() => {
        if (i.value) {
          if (i.value?.complete) {
            w();
            return;
          }
          i.value.addEventListener("load", w);
        }
      }),
        Fn(() => {
          i.value && i.value.removeEventListener("load", w);
        });
      const y = {
        props: t,
        emit: o,
        imageRef: i,
        isLoaded: r,
        isMobileLayoutImage: s,
        mobileWidthCSSVar: l,
        mobileHeightCSSVar: m,
        imageCSSVars: g,
        smallDesktopWidthCSSVar: d,
        smallDesktopHeightCSSVar: p,
        overlayOpacityCSSVar: f,
        desktopBorderRadiusCSSVar: b,
        mobileBorderRadiusCSSVar: S,
        shapeMaskSourceCssVar: T,
        handleImageLoadEvent: w,
        get ANCHOR_TAG() {
          return Yu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE() {
          return ha;
        },
        get DATA_ATTRIBUTE_SELECTOR() {
          return Fu;
        },
        get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
          return Wu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
          return Lr;
        },
      };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  }),
  Wm = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function qm(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    W(
      cn(a.tagName),
      et({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: t.imageCSSVars,
        class: [
          "image",
          {
            "image--zoom": a.isLightboxEnabled,
            "image--grid": !a.isUnstyled,
            "image--unstyled": a.isUnstyled,
            "image--link": a.tagName === t.ANCHOR_TAG,
            loaded: t.isLoaded,
          },
        ],
        [t.DATA_ATTRIBUTE_SELECTOR || ""]: t.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = (s) => e.$emit("image-click", s)),
      }),
      {
        default: fe(() => [
          ue(
            I(
              "img",
              Ge(
                {
                  ref: "imageRef",
                  alt: a.alt,
                  src: a.src,
                  srcset: a.srcset,
                  sizes: a.sizes,
                  height: a.elementHeight,
                  width: a.elementWidth,
                  loading: a.isEager ? "eager" : "lazy",
                  class: {
                    "image__image--unstyled": a.isUnstyled,
                    "image__image--cropped": !!a.cropCssVars,
                    image__image: !a.isUnstyled,
                    "image__image--reset-m-position": a.resetMobilePosition,
                    "image__image--svg": a.isSvg,
                  },
                },
                Qs(
                  {
                    drag: a.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                    dragstart: a.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                  },
                  !0
                )
              ),
              null,
              16,
              Wm
            ),
            [[r, "builder-gridelement-gridimage"]]
          ),
          ee(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      16,
      ["href", "target", "rel", "title", "style", "class"]
    )
  );
}
const bl = oe(Fm, [
    ["render", qm],
    ["__scopeId", "data-v-47c05b4e"],
  ]),
  ts = (e, n) => {
    const a = Array(e).fill([]);
    return n.reduce((t, o, i) => {
      const r = i % e;
      return (t[r] = [...t[r], { ...o, originalIndex: i }]), t;
    }, a);
  },
  Gm = re({
    name: "GridGallery",
    components: { GridImage: bl },
    props: {
      columnCount: { type: Number, required: !0 },
      columnGap: { type: Number, required: !0 },
      mobileColumnCount: { type: Number, required: !0 },
      mobileColumnGap: { type: Number, required: !0 },
      gridImages: { type: Array, required: !0 },
      isLightboxEnabled: { type: Boolean, required: !1 },
      isMasonryLayout: { type: Boolean, default: !1 },
      loadImages: { type: Boolean, default: !0 },
    },
    emits: ["image-load"],
    setup(e) {
      const n = u(() => ts(e.columnCount, e.gridImages)),
        a = u(() => ts(e.mobileColumnCount, e.gridImages));
      return { masonryColumns: n, mobileMasonryColumns: a };
    },
    computed: {
      gridGalleryCSSVars() {
        return {
          "--column-gap": `${this.columnGap}px`,
          "--column-count": this.columnCount,
          "--m-column-gap": `${this.mobileColumnGap}px`,
          "--m-column-count": this.mobileColumnCount,
        };
      },
    },
  }),
  jm = { class: "gallery" };
function zm(e, n, a, t, o, i) {
  const r = Be("GridImage");
  return (
    c(),
    h("div", jm, [
      e.isMasonryLayout
        ? (c(),
          h(
            "div",
            {
              key: 0,
              class: "gallery__masonry",
              style: xe(e.gridGalleryCSSVars),
            },
            [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  e.mobileMasonryColumns,
                  (s, l) => (
                    c(),
                    h(
                      "div",
                      { key: l, class: "gallery__masonry-mobile-columns" },
                      [
                        (c(!0),
                        h(
                          pe,
                          null,
                          ke(
                            s,
                            (m, g) => (
                              c(),
                              W(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: "gallery__masonry-image",
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : "",
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  "element-width": m.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit("image-click", m.originalIndex),
                                  onImageLoad:
                                    n[0] ||
                                    (n[0] = (d) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
              (c(!0),
              h(
                pe,
                null,
                ke(
                  e.masonryColumns,
                  (s, l) => (
                    c(),
                    h(
                      "div",
                      { key: l, class: "gallery__masonry-desktop-columns" },
                      [
                        (c(!0),
                        h(
                          pe,
                          null,
                          ke(
                            s,
                            (m, g) => (
                              c(),
                              W(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: "gallery__masonry-image",
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : "",
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  "element-width": m.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit("image-click", m.originalIndex),
                                  onImageLoad:
                                    n[1] ||
                                    (n[1] = (d) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ))
        : (c(),
          h(
            "div",
            { key: 1, class: "gallery__grid", style: xe(e.gridGalleryCSSVars) },
            [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  e.gridImages,
                  (s, l) => (
                    c(),
                    h("div", { key: `${l}${s.src}`, class: "gallery__block" }, [
                      (c(),
                      W(
                        r,
                        {
                          key: `${l}${s.src}`,
                          alt: s.alt,
                          src: e.loadImages ? s.src : "",
                          srcset: s.srcset,
                          sizes: s.sizes,
                          "element-width": s.width,
                          "element-height": s.height,
                          "prevent-drag": "",
                          "is-lightbox-enabled": e.isLightboxEnabled,
                          "reset-mobile-position": !1,
                          "is-eager": "",
                          class: "gallery__image",
                          onImageClick: (m) => e.$emit("image-click", l),
                          onImageLoad:
                            n[2] || (n[2] = (m) => e.$emit("image-load")),
                        },
                        null,
                        8,
                        [
                          "alt",
                          "src",
                          "srcset",
                          "sizes",
                          "element-width",
                          "element-height",
                          "is-lightbox-enabled",
                          "onImageClick",
                        ]
                      )),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )),
      ee(e.$slots, "default", {}, void 0, !0),
    ])
  );
}
const Km = oe(Gm, [
    ["render", zm],
    ["__scopeId", "data-v-0346154b"],
  ]),
  Qm = (e) => {
    const n = u(() => e.data.images.length > 0),
      a = u(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
      t = u(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
      o = u(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
      i = u(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
      r = u(() => e.data.settings.layout === "masonry");
    return {
      hasGridImages: n,
      columnCount: a,
      columnGap: t,
      isMasonryLayout: r,
      mobileColumnCount: o,
      mobileColumnGap: i,
    };
  },
  ot = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight",
  },
  Zm = {
    8: ot.Backspace,
    16: ot.ShiftLeft,
    27: ot.Escape,
    32: ot.Space,
    37: ot.ArrowLeft,
    38: ot.ArrowUp,
    39: ot.ArrowRight,
    40: ot.ArrowDown,
    46: ot.Delete,
    67: ot.KeyC,
    68: ot.KeyD,
    88: ot.KeyX,
    89: ot.KeyY,
    90: ot.KeyZ,
    91: ot.OSLeft,
    111: ot.NumLockSlash,
    191: ot.KeySlash,
    219: ot.BracketLeft,
    221: ot.BracketRight,
  },
  Ao = (e) => {
    let n;
    return (
      e
        ? e.code !== void 0
          ? (n = e.code === "MetaLeft" ? "OSLeft" : e.code)
          : e.keyCode !== void 0 && (n = Zm[e.keyCode])
        : (n = void 0),
      n
    );
  },
  Da = L([]),
  Ma = L(null),
  an = () => {
    const e = u(() => Da.value.length > 0),
      n = u(() => Da.value.length > 1),
      a = u(() => Da.value.length - 1),
      t = u(() => Ma.value === Da.value.length - 1),
      o = u(() => Ma.value === 0),
      i = u(() => Da.value[Ma.value]),
      r = (b) => {
        Ma.value = b;
      },
      s = (b) => {
        Da.value = Array.isArray(b) ? b : [b];
      },
      l = () => (o.value ? r(a.value) : r(Ma.value - 1)),
      m = () => (t.value ? r(0) : r(Ma.value + 1)),
      g = () => {
        s([]), r(null);
      },
      d = () => {
        n.value || g();
      },
      p = (b, S = 0) => {
        s(b), r(S);
      },
      f = (b) => {
        Ao(b) === ot.ArrowRight && m(),
          Ao(b) === ot.ArrowLeft && l(),
          Ao(b) === ot.Escape && g();
      };
    return {
      lightboxImages: u(() => Da.value),
      currentLightboxImageIndex: u(() => Ma.value),
      currentLightboxImage: i,
      lastImageIndex: a,
      isFirstImage: o,
      isLastImage: t,
      isLightboxOpen: e,
      isImageGalleryMode: n,
      setLightboxImages: s,
      setCurrentLightboxImageIndex: r,
      goToNextImage: m,
      goToPreviousImage: l,
      handleLightboxNav: f,
      closeLightbox: g,
      addImagesToLightbox: p,
      onLightboxClickOutside: d,
    };
  },
  Xm = "lightbox",
  Jm = re({
    name: "GridGalleryProviderUser",
    components: { GridGallery: Km },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ["image-load"],
    setup(e) {
      const { siteId: n } = Qe(),
        {
          columnCount: a,
          columnGap: t,
          isMasonryLayout: o,
          mobileColumnCount: i,
          mobileColumnGap: r,
        } = Qm(e),
        { addImagesToLightbox: s } = an(),
        l = u(() => {
          const { right: y } = en(e.mobileBlockPadding ?? "");
          return Number.parseInt(y, 10) || 0;
        }),
        m = L(!1),
        g = () => {
          m.value = window.matchMedia(`(max-width: ${or}px)`).matches;
        };
      De(() => {
        g(), window.addEventListener("resize", g);
      }),
        Fn(() => {
          window.removeEventListener("resize", g);
        });
      const d = u(() => (m.value ? i.value : a.value)),
        p = u(() => Math.ceil((t.value + e.elementWidth) / d.value) - t.value),
        f = u(() => !o.value && p.value),
        b = u(() =>
          [`(min-width: ${or}px) ${p.value}px`, `${100 / d.value}vw`].join(", ")
        ),
        S = u(() =>
          e.data.images.map((y) => {
            const D = u(() =>
                rt(y.origin, y.path, n.value, {
                  width: p.value,
                  height: f.value,
                })
              ),
              C = u(() =>
                $c(y.origin, y.path, n.value, {
                  width: p.value,
                  height: f.value,
                  columnCount: d.value,
                  columnGap: t.value,
                  mobilePadding: l.value,
                  isMasonryLayout: o.value,
                })
              );
            return {
              ...y,
              src: D.value,
              srcset: C.value,
              sizes: b.value,
              width: p.value,
              height: f.value,
            };
          })
        ),
        T = u(() => e.data.settings.imageClickAction === Xm);
      return {
        gridImages: S,
        isLightboxEnabled: T,
        handleGalleryImageClick: (y) => {
          if (T.value) {
            const D = e.data.images.map((C) => ({
              alt: C.alt,
              src: Br(C.origin, C.path, n.value),
            }));
            s(D, y);
          }
        },
        columnCount: a,
        columnGap: t,
        isMasonryLayout: o,
        mobileColumnCount: i,
        mobileColumnGap: r,
      };
    },
  });
function eg(e, n, a, t, o, i) {
  const r = Be("GridGallery");
  return (
    c(),
    W(
      r,
      {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = (s) => e.$emit("image-load")),
      },
      null,
      8,
      [
        "grid-images",
        "is-lightbox-enabled",
        "column-count",
        "column-gap",
        "mobile-column-count",
        "mobile-column-gap",
        "is-masonry-layout",
        "onImageClick",
      ]
    )
  );
}
const tg = oe(Jm, [["render", eg]]),
  ag = (e, n, a) => Math.min(Math.max(e, n), a),
  as = 1920,
  ns = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (e) {
      const r = a / o;
      return Math.round(i * r * n);
    }
    return Math.round(t * n);
  },
  os = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (!e) {
      const r = t / i;
      return Math.round(o * r * n);
    }
    return Math.round(a * n);
  },
  Qn = ({
    offsetInPx: e,
    imageSize: n,
    containerSize: a,
    offsetInPercent: t,
  }) => {
    if (!e) return t;
    const o = (n - a) / 100;
    return ag(t + e / o, 0, 100);
  },
  Zn = ({ imageSize: e, containerSize: n, offset: a }) => (n - e) * (a / 100),
  rs = ({
    prefix: e,
    left: n,
    top: a,
    scale: t,
    isAspectRatioLargerThanContainer: o,
  }) => ({
    [`--${e}-left`]: `${n}px`,
    [`--${e}-top`]: `${a}px`,
    [`--${e}-scale`]: t,
    [`--${e}-width`]: o ? "auto" : "100%",
    [`--${e}-height`]: o ? "100%" : "auto",
  }),
  is = ({
    left: e,
    top: n,
    imageWidth: a,
    imageHeight: t,
    containerWidth: o,
    containerHeight: i,
  }) => ({
    left: Math.round(Math.abs(e)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - o - Math.abs(e)),
    bottom: Math.round(t - i - Math.abs(n)),
    imageWidth: a,
    imageHeight: t,
  }),
  ng = (e, n) => {
    if (e > as) {
      const a = as / e;
      return { width: Math.round(e * a), height: Math.round(n * a) };
    }
    return { width: e, height: n };
  },
  ss = (e, { dragDeltaYPosition: n, dragDeltaXPosition: a, href: t } = {}) => {
    const o = u(() =>
        ng(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = u(() => o.value.width),
      r = u(() => o.value.height),
      s = () => i.value / r.value,
      l = u(() => e.data.desktop?.crop),
      m = u(() => e.renderedPosition || e.data.desktop),
      g = u(() => m.value.width),
      d = u(() => m.value.height),
      p = u(() => g.value / d.value),
      f = u(() => s() > p.value),
      b = u(() =>
        ns({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      S = u(() =>
        os({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      T = u(() =>
        Qn({
          offsetInPx: -n?.value,
          imageSize: S.value,
          containerSize: d.value,
          offsetInPercent: l.value.top,
        })
      ),
      w = u(() =>
        Zn({ imageSize: S.value, containerSize: d.value, offset: T.value })
      ),
      y = u(() =>
        Qn({
          offsetInPx: -a?.value,
          imageSize: b.value,
          containerSize: g.value,
          offsetInPercent: l.value.left,
        })
      ),
      D = u(() =>
        Zn({ imageSize: b.value, containerSize: g.value, offset: y.value })
      ),
      C = u(() =>
        is({
          left: D.value,
          top: w.value,
          imageWidth: b.value,
          imageHeight: S.value,
          containerWidth: g.value,
          containerHeight: d.value,
        })
      ),
      M = u(() => e.data.mobile.crop || l.value),
      N = u(() => e.renderedPosition || e.data.mobile),
      R = u(() => N.value.width),
      Q = u(() => N.value.height),
      G = u(() => R.value / Q.value),
      P = u(() => s() > G.value),
      B = u(() =>
        ns({
          isAspectRatioBiggerThanContainer: P.value,
          scale: M.value.scale,
          containerHeight: Q.value,
          containerWidth: R.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      U = u(() =>
        os({
          isAspectRatioBiggerThanContainer: P.value,
          scale: M.value.scale,
          containerHeight: Q.value,
          containerWidth: R.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      j = u(() =>
        Qn({
          offsetInPx: -n?.value,
          imageSize: U.value,
          containerSize: Q.value,
          offsetInPercent: M.value.top,
        })
      ),
      V = u(() =>
        Zn({ imageSize: U.value, containerSize: Q.value, offset: j.value })
      ),
      E = u(() =>
        Qn({
          offsetInPx: -a?.value,
          imageSize: B.value,
          containerSize: R.value,
          offsetInPercent: M.value.left,
        })
      ),
      Y = u(() =>
        Zn({ imageSize: B.value, containerSize: R.value, offset: E.value })
      ),
      $ = u(() =>
        is({
          left: Y.value,
          top: V.value,
          imageWidth: B.value,
          imageHeight: U.value,
          containerWidth: R.value,
          containerHeight: Q.value,
        })
      ),
      z = u(() => {
        const k = !["svg", "ico", "gif"].includes(Za(e.data.settings.path));
        if (!l.value || !i.value || !r.value || !k) return null;
        const v = rs({
            prefix: "desktop",
            left: D.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: f.value,
          }),
          F = rs({
            prefix: "mobile",
            left: Y.value,
            top: V.value,
            scale: M.value.scale,
            isAspectRatioLargerThanContainer: P.value,
          });
        return { ...v, ...F };
      });
    return {
      href: t,
      cropCSSVars: z,
      desktopCropParams: C,
      mobileCropParams: $,
      desktopTop: w,
      desktopLeft: D,
      mobileLeft: Y,
      mobileTop: V,
      desktopTopPercentWithOffset: T,
      desktopLeftPercentWithOffset: y,
    };
  },
  og = {
    __name: "GridImageProviderUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      resetMobilePosition: { type: Boolean, default: !0 },
      currentLocale: { type: String, required: !0 },
      mobileBorderRadius: { type: Number, default: 0 },
      desktopBorderRadius: { type: Number, default: 0 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    setup(e, { expose: n }) {
      n(), st((j) => ({ "7b817743": M.value, "4e5d6a41": N.value }));
      const a = e,
        { addImagesToLightbox: t } = an(),
        { siteId: o, getPagePathFromId: i } = Qe(),
        {
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: m,
        } = ss(a, {
          href: u(() =>
            a.data.linkType === nr
              ? i({ pageId: a.data.linkedPageId })
              : a.data.href
          ),
        }),
        g = (j) => {
          const { fullResolutionWidth: V, fullResolutionHeight: E } = a.data,
            {
              left: Y,
              top: $,
              right: z,
              bottom: k,
              imageWidth: v,
              imageHeight: F,
            } = j,
            q = Y / v,
            te = $ / F,
            X = z / v,
            x = k / F;
          return { left: V * q, top: E * te, right: V * X, bottom: E * x };
        },
        d = (j) => {
          const { top: V, right: E, bottom: Y, left: $ } = g(j);
          return `${V};${E};${Y};${$}`;
        },
        p = u(() => [a.data.settings.origin, a.data.settings.path, o.value]),
        f = u(() =>
          r.value
            ? rt(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                trim: d(s.value),
              })
            : rt(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        b = u(() => Za(a.data.settings.path) === "svg"),
        S = u(() => a.mobileElementWidth && a.mobileElementHeight),
        T = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? f.value
            : r.value
            ? rt(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                trim: d(l.value),
              })
            : rt(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        w = u(() =>
          r.value
            ? Aa(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(s.value),
              })
            : Aa(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        y = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? w.value
            : r.value
            ? Aa(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(l.value),
              })
            : Aa(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        D = u(() => {
          const { right: j } = en(a.mobileBlockPadding ?? ""),
            V = j ? Number.parseInt(j, 10) : null;
          return Rn(a.elementWidth, V);
        }),
        C = () => {
          a.data.settings.clickAction === Eo &&
            t({
              src: rt(a.data.settings.origin, a.data.settings.path, o.value),
              srcset: ya(a.data.settings.origin, a.data.settings.path, o.value),
              alt: a.data.settings.alt,
            });
        },
        M = u(() => `${a.elementHeight}px`),
        N = u(() => `${a.mobileElementHeight}px`),
        R = u(() => a.data.settings.alt),
        Q = u(() => (a.data.settings.clickAction === _i ? "a" : "div")),
        G = u(() => a.data.target),
        P = u(() => a.data.rel),
        B = u(() => a.data.settings.clickAction === Eo),
        U = {
          props: a,
          addImagesToLightbox: t,
          siteId: o,
          getPagePathFromId: i,
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: m,
          calculateFullResolutionTrim: g,
          constructTrimParamForCloudflare: d,
          imagePathParams: p,
          src: f,
          isSvg: b,
          isMobileLayout: S,
          mobileSrc: T,
          srcset: w,
          mobileSrcset: y,
          sizes: D,
          handleImageClick: C,
          elementHeightCssVar: M,
          mobileElementHeightCssVar: N,
          alt: R,
          tagName: Q,
          target: G,
          rel: P,
          isLightboxEnabled: B,
          computed: u,
          GridImage: bl,
          get useLightbox() {
            return an;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return _i;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return Eo;
          },
          get LINK_TYPE_INTERNAL() {
            return nr;
          },
          get getOptimizedSrc() {
            return rt;
          },
          get getGridItemSrcset() {
            return Aa;
          },
          get getGridItemSizes() {
            return Rn;
          },
          get getFullWidthSrcset() {
            return ya;
          },
          get parseCSSSides() {
            return en;
          },
          get useGridImage() {
            return ss;
          },
          get getExtension() {
            return Za;
          },
          get useSiteGlobal() {
            return Qe;
          },
        };
      return (
        Object.defineProperty(U, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        U
      );
    },
  },
  rg = ["id"];
function ig(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: Z([
          "image-wrapper",
          { "image-wrapper--layout": t.isMobileLayout },
        ]),
      },
      [
        Ee(
          t.GridImage,
          {
            class: "image-wrapper--desktop",
            alt: t.alt,
            href: t.href,
            sizes: t.sizes,
            src: t.src,
            srcset: t.srcset,
            "tag-name": t.tagName,
            target: t.target,
            rel: t.rel,
            "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
            "is-lightbox-enabled": t.isLightboxEnabled,
            "element-height": a.elementHeight,
            "element-width": a.elementWidth,
            "shape-mask-source": a.shapeMaskSource,
            "reset-mobile-position": a.resetMobilePosition,
            "mobile-border-radius": a.mobileBorderRadius,
            "desktop-border-radius": a.desktopBorderRadius,
            "is-in-preview-mode": a.isInPreviewMode,
            "overlay-opacity": a.overlayOpacity,
            onImageClick: t.handleImageClick,
          },
          null,
          8,
          [
            "alt",
            "href",
            "sizes",
            "src",
            "srcset",
            "tag-name",
            "target",
            "rel",
            "is-eager",
            "is-lightbox-enabled",
            "element-height",
            "element-width",
            "shape-mask-source",
            "reset-mobile-position",
            "mobile-border-radius",
            "desktop-border-radius",
            "is-in-preview-mode",
            "overlay-opacity",
          ]
        ),
        t.isMobileLayout
          ? (c(),
            W(
              t.GridImage,
              {
                key: 0,
                "is-mobile-image": !0,
                class: "image-wrapper--mobile",
                alt: t.alt,
                href: t.href,
                sizes: t.sizes,
                src: t.mobileSrc,
                srcset: t.mobileSrcset,
                "tag-name": t.tagName,
                "is-svg": t.isSvg,
                target: t.target,
                rel: t.rel,
                "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
                "is-lightbox-enabled": t.isLightboxEnabled,
                "element-height": a.mobileElementHeight,
                "element-width": a.mobileElementWidth,
                "shape-mask-source": a.shapeMaskSource,
                "reset-mobile-position": a.resetMobilePosition,
                "mobile-border-radius": a.mobileBorderRadius,
                "desktop-border-radius": a.desktopBorderRadius,
                "overlay-opacity": a.overlayOpacity,
                "is-in-preview-mode": a.isInPreviewMode,
                onImageClick: t.handleImageClick,
              },
              null,
              8,
              [
                "alt",
                "href",
                "sizes",
                "src",
                "srcset",
                "tag-name",
                "is-svg",
                "target",
                "rel",
                "is-eager",
                "is-lightbox-enabled",
                "element-height",
                "element-width",
                "shape-mask-source",
                "reset-mobile-position",
                "mobile-border-radius",
                "desktop-border-radius",
                "overlay-opacity",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
      ],
      10,
      rg
    )
  );
}
const sg = oe(og, [
    ["render", ig],
    ["__scopeId", "data-v-b5c3fcb0"],
  ]),
  lg = re({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ["media-load"],
  }),
  ug = ["src", "poster"],
  cg = ["src", "alt"];
function dg(e, n, a, t, o, i) {
  return (
    c(),
    h("figure", null, [
      e.src.includes("video") || e.src.includes(".mp4")
        ? (c(),
          h(
            "video",
            {
              key: 0,
              src: e.src,
              poster: e.poster,
              class: "media-item",
              controls: "",
              onProgressOnce: n[0] || (n[0] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            ug
          ))
        : (c(),
          h(
            "img",
            {
              key: 1,
              src: e.src,
              alt: e.alt,
              class: "media-item",
              onLoad: n[1] || (n[1] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            cg
          )),
    ])
  );
}
const mg = oe(lg, [
    ["render", dg],
    ["__scopeId", "data-v-c35ee7e4"],
  ]),
  gg = re({
    components: { GridInstagramFeedMediaItemFigure: mg },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: ha,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Lr,
        isLoaded: !1,
      };
    },
  }),
  pg = ["href"],
  vg = { key: 1 },
  hg = { key: 2, class: "placeholder" };
function fg(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeedMediaItemFigure");
  return (
    c(),
    h(
      "div",
      et({
        class: ["media-wrapper", { loaded: e.isLoaded }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
      }),
      [
        e.src && e.href
          ? (c(),
            h(
              "a",
              {
                key: 0,
                title: "Open instagram page of this image",
                href: e.href,
                rel: "noopener",
                target: "_blank",
              },
              [
                Ee(
                  r,
                  {
                    src: e.src,
                    alt: e.alt,
                    poster: e.poster,
                    onMediaLoad: n[0] || (n[0] = (s) => (e.isLoaded = !0)),
                  },
                  null,
                  8,
                  ["src", "alt", "poster"]
                ),
              ],
              8,
              pg
            ))
          : e.src && !e.href
          ? (c(),
            h("div", vg, [
              Ee(
                r,
                {
                  src: e.src,
                  alt: e.alt,
                  poster: e.poster,
                  onMediaLoad: n[1] || (n[1] = (s) => (e.isLoaded = !0)),
                },
                null,
                8,
                ["src", "alt", "poster"]
              ),
            ]))
          : (c(), h("div", hg)),
      ],
      16
    )
  );
}
const yg = oe(gg, [
    ["render", fg],
    ["__scopeId", "data-v-8ece2404"],
  ]),
  bg = re({
    components: { GridInstagramFeedMediaItem: yg },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  _g = ["id"];
function wg(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeedMediaItem");
  return (
    c(),
    h(
      "div",
      { id: e.id, class: "instagram-feed" },
      [
        (c(!0),
        h(
          pe,
          null,
          ke(
            e.media,
            (s) => (
              c(),
              W(
                r,
                {
                  key: s.src,
                  src: s.src,
                  href: s.href,
                  alt: s.alt,
                  poster: s.poster,
                },
                null,
                8,
                ["src", "href", "alt", "poster"]
              )
            )
          ),
          128
        )),
      ],
      8,
      _g
    )
  );
}
const kg = oe(bg, [["render", wg]]),
  ls = [
    { alt: "Workstation", id: "qc2YaEHSYsc", src: `${at}/workstation.jpg` },
    {
      alt: "Waterfall between rocks",
      id: "ifnzcFXUmH0",
      src: `${at}/waterfall-between-rocks.jpg`,
    },
    {
      alt: "Trees with snow",
      id: "J2vryWaTqlB",
      src: `${at}/trees-with-snow.png`,
    },
    { alt: "Tree buds", id: "ZzmFPZuw7S1", src: `${at}/tree-buds.jpg` },
    {
      alt: "Tiger drinking water",
      id: "k37Jfax7a6k",
      src: `${at}/tiger-drinking-water.jpg`,
    },
    {
      alt: "Tall well preserved buildings",
      id: "gTNSQDsXWp7",
      src: `${at}/tall-well-preserved-buildings.jpg`,
    },
    {
      alt: "Sunny beautiful wall",
      id: "QEdmdqjqcMf",
      src: `${at}/sunny-beautiful-wall.jpg`,
    },
    { alt: "Stereo gear", id: "iUXujDl2onh", src: `${at}/stereo-gear.jpg` },
    { alt: "Rooftop oasis", id: "LWHjQE4HOv7", src: `${at}/rooftop-oasis.jpg` },
    { alt: "Rocky beach", id: "o4qz1QOQcpJ", src: `${at}/rocky-beach.jpg` },
    {
      alt: "Photographer holding camera",
      id: "VAHQ4wGABhK",
      src: `${at}/photographer-holding-camera.jpg`,
    },
    { alt: "Koi fishes", id: "zg35JVHQ4wG", src: `${at}/koi-fishes.jpg` },
    {
      alt: "Human head artificially created",
      id: "zg35JVl8GY2",
      src: `${at}/human-head-artificially-created.jpg`,
    },
    {
      alt: "Horse eating grass",
      id: "dBwJoATZJBH",
      src: `${at}/horse-eating-grass.jpg`,
    },
    {
      alt: "Fluffy decoration in water",
      id: "HR21NDsphkV",
      src: `${at}/fluffy-docoration-in-water.jpg`,
    },
    {
      alt: "Elk looking at camera",
      id: "oLq0J4X2h2P",
      src: `${at}/elk-looking-at-camera.jpg`,
    },
    {
      alt: "Dog running in snow",
      id: "dbULY2RIxXc",
      src: `${at}/dog-running-in-snow.jpg`,
    },
    {
      alt: "Clean workspace",
      id: "WRmXHA1JA8H",
      src: `${at}/clean-workspace.jpg`,
    },
    {
      alt: "Cinematic food shot",
      id: "YgbHW4EtzbY",
      src: `${at}/cinematic-food-shot.jpg`,
    },
    {
      alt: "Christmas houses",
      id: "Eyoj1y8hvYz",
      src: `${at}/christmas-houses.jpg`,
    },
    {
      alt: "Bird sitting on branch",
      id: "yQKxjLtI8eg",
      src: `${at}/bird-sitting-on-branch.jpg`,
    },
    {
      alt: "Beautiful entry to private property",
      id: "1StnvFtqFjR",
      src: `${at}/beautiful-entry-to-private-property.jpg`,
    },
    {
      alt: "African animals",
      id: "nPjqWNmfFf0",
      src: `${at}/african-animals.jpg`,
    },
    { alt: "Workspace", id: "7gsm5H6lHSH", src: `${at}/workspace.jpg` },
  ],
  Sg = "https://graph.instagram.com/me/media",
  Tg = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
  Cg = ({
    elementId: e,
    elementData: n,
    siteId: a,
    getInstagramTokenHandler: t,
    cleanupCallback: o,
  }) => {
    const i = u(() => n.value.settings["item-count"]),
      r = L(null),
      s = L([]),
      l = u(() =>
        s.value.length > 0
          ? s.value.filter(({ src: d }) => typeof d < "u").slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      m = async () => {
        const d = new URL(Sg);
        d.searchParams.set("fields", Tg.join(",")),
          d.searchParams.set("access_token", r.value);
        const p = await fetch(d.toString());
        return p.ok
          ? (await p.json()).data
          : Promise.reject(new Error("Failed to fetch Instagram media"));
      };
    return {
      media: l,
      init: async () => {
        try {
          r.value = await t({ siteId: a, elementId: e.value });
        } catch {
          s.value = ls;
          return;
        }
        try {
          const d = await m();
          s.value = d.map((p) => ({
            id: p.id,
            src: p.media_url,
            alt: p.caption,
            href: p.permalink,
            poster: p.thumbnail_url,
          }));
        } catch (d) {
          throw ((s.value = ls), o && o(r.value), d);
        }
      },
      itemGap: u(() => n.value.settings.styles["item-gap"]),
    };
  },
  Pg = re({
    components: { GridInstagramFeed: kg },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ["media-loaded"],
    setup(e, n) {
      const { siteId: a } = Qe(),
        t = u(() => e.id),
        o = u(() => e.data),
        i = async ({ siteId: l, elementId: m }) =>
          (
            await (
              await fetch(
                `https://builder-backend.hostinger.com/u1/instagram/token/${l}/${m}`
              )
            ).json()
          ).accessToken,
        { media: r, init: s } = Cg({
          elementId: t,
          elementData: o,
          siteId: a.value,
          getInstagramTokenHandler: i,
        });
      return (
        De(() => {
          s();
        }),
        Ne(
          r,
          async (l) => {
            l?.length && (await Ct(), n.emit("media-loaded"));
          },
          { immediate: !1 }
        ),
        { media: r }
      );
    },
  });
function Ig(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeed");
  return c(), W(r, { id: e.id, media: e.media }, null, 8, ["id", "media"]);
}
const Eg = oe(Pg, [["render", Ig]]),
  Dg = re({
    name: "GridMap",
    props: {
      isIframeLoaded: { type: Boolean, default: !1 },
      shouldRender: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
    },
    computed: {
      renderSrc() {
        return this.shouldRender ? this.src : null;
      },
    },
  }),
  Mg = ["src"],
  Og = { class: "grid-map__pin" };
function Lg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: Z(["grid-map", { "grid-map--loading": !e.isIframeLoaded }]) },
      [
        I(
          "iframe",
          {
            ref: "iframeRef",
            class: "grid-map__frame",
            width: "100%",
            height: "100%",
            src: e.renderSrc,
          },
          null,
          8,
          Mg
        ),
        ue(I("div", Og, null, 512), [[Ft, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const Bg = oe(Dg, [
    ["render", Lg],
    ["__scopeId", "data-v-3b334315"],
  ]),
  Ag = (e, n) => {
    try {
      const { isObserved: a } = fl(n),
        t = L(!1),
        o = va({
          src: u(() => e.data.settings?.src),
          shouldRender: u(() => a.value),
          isIframeLoaded: u(() => t.value),
        }),
        i = Mr(() => {
          const r = n.value?.$refs;
          r &&
            (r.iframeRef.addEventListener("load", () => {
              t.value = !0;
            }),
            i());
        });
      return { composedProps: o };
    } catch (a) {
      console.error(a);
    }
  },
  xg = re({
    name: "GridMapProviderUser",
    components: { GridMap: Bg },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const n = L(null),
        { composedProps: a } = Ag(e, n);
      return { mapRef: n, composedProps: a };
    },
  });
function Rg(e, n, a, t, o, i) {
  const r = Be("GridMap");
  return c(), W(r, Ge({ ref: "mapRef" }, e.composedProps), null, 16);
}
const Ng = oe(xg, [["render", Rg]]),
  Hg = re({
    __name: "GridSocialIcons",
    props: {
      links: { default: () => [] },
      preventLinks: { type: Boolean, default: !1 },
      direction: { default: "row" },
      directionMobile: { default: null },
      preventSpacing: { type: Boolean, default: !1 },
      fullHeight: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => ["social-icons", `social-icons--${a.direction}`]),
        o = u(() => ({
          "--m-icon-direction": a.directionMobile || a.direction,
          "--icon-padding-vertical":
            a.direction === "column" ? "var(--space-between-icons)" : "0",
          "--icon-padding-horizontal":
            a.direction === "row" ? "var(--space-between-icons)" : "0",
          ...(a.fullHeight && { height: "100%" }),
          ...(a.preventSpacing && { "--space-between-icons": "0px" }),
          ...(a.directionMobile && {
            "--m-icon-padding-vertical":
              a.directionMobile === "column"
                ? "var(--space-between-icons)"
                : "0",
            "--m-icon-padding-horizontal":
              a.directionMobile === "row" ? "var(--space-between-icons)" : "0",
          }),
        })),
        i = { props: a, computedClass: t, computedStyles: o };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  $g = ["href", "title", "innerHTML"];
function Ug(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: Z(t.computedClass), style: xe(t.computedStyles) },
      [
        (c(!0),
        h(
          pe,
          null,
          ke(
            a.links,
            ({ link: r, svg: s, title: l }) => (
              c(),
              h(
                "a",
                Ge(
                  {
                    key: r,
                    href: r,
                    target: "_blank",
                    rel: "noopener",
                    title: l,
                    class: "social-icons__link",
                  },
                  Qs({
                    dragstart: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                    click: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                  }),
                  { innerHTML: s }
                ),
                null,
                16,
                $g
              )
            )
          ),
          128
        )),
      ],
      6
    )
  );
}
const _l = oe(Hg, [
    ["render", Ug],
    ["__scopeId", "data-v-1ee40361"],
  ]),
  Vg = (e) => {
    const n = u(() => e.data.settings.styles);
    return va({
      links: u(() =>
        e.data.links.map((t) => ({ ...t, title: `Go to ${Lc(t.icon)} page` }))
      ),
      direction: u(() => n.value["icon-direction"]),
      directionMobile: u(() => n.value["m-icon-direction"]),
      fullHeight: u(() => !n.value.justify),
      preventSpacing: u(() =>
        n.value["icon-spacing"] !== "center" ||
        n.value["icon-direction"] === "column"
          ? !n.value.justify
          : !n.value.align
      ),
    });
  },
  Yg = re({
    components: { GridSocialIcons: _l },
    props: { data: { type: Object, required: !0 } },
    setup(e, n) {
      return { composedProps: Vg(e) };
    },
  });
function Fg(e, n, a, t, o, i) {
  const r = Be("GridSocialIcons");
  return c(), W(r, et(ft(e.composedProps)), null, 16);
}
const Wg = oe(Yg, [["render", Fg]]),
  qg = L(null),
  Gg = (e) => {
    const n = u(() => e.data.settings?.priceId || ""),
      a = u(() => e.data.settings?.paymentType || "payment");
    return { stripeInstance: qg, priceId: n, paymentType: a };
  },
  jg = "https://js.stripe.com/v3",
  zg = re({
    name: "GridStripeButtonProviderUser",
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
    },
    setup(e) {
      const { getButtonHref: n } = Qe(),
        { content: a, type: t } = Hn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: o, priceId: i, paymentType: r } = Gg(e),
        s = L(!1),
        l = () =>
          new Promise((g, d) => {
            if (!!(o.value && window.Stripe)) {
              g();
              return;
            }
            const f = document.createElement("script");
            f.addEventListener("load", () => {
              window.Stripe &&
                ((o.value = window.Stripe(e.stripePublicApiKey)), g());
            }),
              f.addEventListener("error", () => {
                d();
              }),
              (f.src = jg),
              document.head.appendChild(f);
          });
      return {
        content: a,
        type: t,
        isLoadingStripeScript: s,
        handleClick: async () => {
          i.value &&
            ((s.value = !0),
            await l(),
            (s.value = !1),
            o.value
              .redirectToCheckout({
                lineItems: [{ price: i.value, quantity: 1 }],
                mode: r.value,
                successUrl: `${window.location.origin}/${e.successPageSlug}`,
                cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`,
              })
              .then((g) => {
                g.error && console.error(g.error.message);
              }));
        },
      };
    },
  });
function Kg(e, n, a, t, o, i) {
  const r = Be("GridButton"),
    s = je("qa");
  return ue(
    (c(),
    W(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick,
      },
      null,
      8,
      ["content", "type", "is-disabled", "onClick"]
    )),
    [[s, "button-stripe-checkout"]]
  );
}
const Qg = oe(zg, [["render", Kg]]),
  Zg = {
    __name: "GridTextBox",
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: n }) {
      n(),
        st((s) => ({
          "6ce2bb40": o.value,
          "00f7905c": t.value,
          a82e6ffc: i.value,
        }));
      const a = e,
        t = u(() => a.backgroundColor),
        o = u(() => (a.textAlign === "justify" ? "normal" : "break-spaces")),
        i = u(() =>
          a.textAlignMobile && a.textAlignMobile === "justify"
            ? "normal"
            : o.value
        ),
        r = {
          props: a,
          backgroundColor: t,
          whiteSpace: o,
          whiteSpaceMobile: i,
          computed: u,
        };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  },
  Xg = ["innerHTML"],
  Jg = { key: 1, class: "text-box" };
function ep(e, n, a, t, o, i) {
  return a.content
    ? (c(),
      h(
        "div",
        { key: 0, class: "text-box", innerHTML: a.content },
        null,
        8,
        Xg
      ))
    : (c(), h("div", Jg, [ee(e.$slots, "default")]));
}
const wl = oe(Zg, [["render", ep]]),
  tp = {
    __name: "GridTextBoxProviderUser",
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: n }) {
      n();
      const a = { GridTextBox: wl };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  };
function ap(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.GridTextBox,
      {
        "text-align": a.data.settings.styles.text,
        "text-align-mobile": a.data.settings.styles["m-text"],
        "background-color": a.data.backgroundColor,
        content: a.data.content,
      },
      null,
      8,
      ["text-align", "text-align-mobile", "background-color", "content"]
    )
  );
}
const np = oe(tp, [["render", ap]]),
  Pt = { YOUTUBE: "youtube", VIMEO: "vimeo" },
  qn = "0",
  so = "1",
  op = qn,
  rp = qn,
  ip = so,
  sp = qn,
  lp = qn,
  up = so;
Pt.YOUTUBE;
const cp = /t=\d+/g,
  Vt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: { [Pt.YOUTUBE]: "mute", [Pt.VIMEO]: "muted" },
    TIME: "t",
    START: "start",
  },
  dp = {
    [Pt.YOUTUBE]: "https://www.youtube.com/embed/",
    [Pt.VIMEO]: "https://player.vimeo.com/video/",
  },
  mp = {
    [Pt.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [Pt.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  gp = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
  pp = "builder.notifications.errorVimeoVideoPrivate",
  vp = {
    __name: "GridVideo",
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: Pt.YOUTUBE },
      jpg: { type: String, default: "" },
      webp: { type: String, default: "" },
    },
    setup(e, { expose: n }) {
      n(), st((i) => ({ "60d8e812": t.value }));
      const a = L(!1),
        t = u(() => (a.value ? "transparent" : "var(--color-dark)")),
        o = {
          isIframeLoaded: a,
          backgroundColor: t,
          get PROVIDERS() {
            return Pt;
          },
          computed: u,
          ref: L,
        };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  },
  hp = { class: "video" },
  fp = ["src"],
  yp = ["srcset"],
  bp = ["src"];
function _p(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", hp, [
      a.renderIframe
        ? (c(),
          h(
            "iframe",
            {
              key: 0,
              src: a.src,
              class: "video__frame",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: "",
              width: "100%",
              height: "100%",
              onLoad: n[0] || (n[0] = (s) => (t.isIframeLoaded = !0)),
            },
            null,
            40,
            fp
          ))
        : a.renderPicture && (a.jpg || a.webp)
        ? (c(),
          h(
            pe,
            { key: 1 },
            [
              I("picture", null, [
                I(
                  "source",
                  { type: "image/webp", srcset: a.webp },
                  null,
                  8,
                  yp
                ),
                ue(
                  I(
                    "img",
                    {
                      referrerpolicy: "origin",
                      class: "video__placeholder",
                      height: "100%",
                      width: "100%",
                      src: a.jpg,
                    },
                    null,
                    8,
                    bp
                  ),
                  [[r, "builder-gridelement-gridvideo"]]
                ),
              ]),
              I(
                "button",
                {
                  type: "button",
                  class: Z(`video__play video__play--${a.provider}`),
                },
                null,
                2
              ),
            ],
            64
          ))
        : O("", !0),
    ])
  );
}
const wp = oe(vp, [
    ["render", _p],
    ["__scopeId", "data-v-ad3c9850"],
  ]),
  kp = async (e) => {
    const a = await (await fetch(`${gp}/${e}`)).json();
    if (!a.thumbnail_url) throw new Error(pp);
    const t = a.thumbnail_url.replace("_295x166", "_720");
    return {
      jpg: t.replace(".webp", ".jpg"),
      webp: t.replace(".jpg", ".webp"),
    };
  },
  Sp = async (e, n) => {
    switch (e) {
      case Pt.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`,
        };
      case Pt.VIMEO:
        return kp(n);
      default:
        return { jpg: null, webp: null };
    }
  },
  Tp = (e, n, a, t) => {
    const o = n === Pt.VIMEO ? e.split("/")[1] : null,
      i = n === Pt.VIMEO ? e.split("/")[0] : e,
      r = t.match(cp),
      s = n === Pt.YOUTUBE && r ? { [Vt.START]: r[0].slice(2) ?? 0 } : {},
      l = Vt.MUTE[n],
      m = new URLSearchParams({
        [Vt.ALBUM]: o,
        [Vt.PLAYLIST]: i,
        [Vt.AUTOPLAY]: op,
        [Vt.CONTROLS]: ip,
        [Vt.LOOP]: rp,
        [Vt.AUTOPAUSE]: sp,
        [Vt.PLAYSINLINE]: up,
        [l]: lp,
        ...s,
      }).toString();
    return `${dp[n]}${i}?${m}`;
  },
  Cp = async (e, n) => {
    const a = Object.entries(mp).find(([, g]) => e?.match(g)),
      t = a && a.length === 2;
    if (!t) return { url: e, isUrlValid: !1 };
    const [o, i] = a,
      r = e.match(i),
      s = [r[1], r[2]].join(""),
      { jpg: l, webp: m } = await Sp(o, s);
    return {
      src: Tp(s, o, n, e),
      isUrlValid: t,
      jpg: l,
      webp: m,
      provider: o,
      id: s,
    };
  },
  Pp = (e) => {
    const n = va({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      a = va({
        src: u(() => n.src ?? e.data.settings.src),
        provider: u(() => n.provider ?? e.data.settings.provider),
        width: u(() => n.width ?? e.data.settings.width),
        height: u(() => n.height ?? e.data.settings.height),
        webp: u(() => n.webp ?? e.data.settings.webp),
        jpg: u(() => n.jpg ?? e.data.settings.jpg),
      });
    return (
      Mr(() => {
        (e.data.settings.src !== a.src || !e.data.settings.jpg) &&
          Cp(e.data.settings.src).then((t) => {
            Object.entries(t).forEach(([o, i]) => {
              n[o] = i;
            });
          });
      }),
      { composedProps: a }
    );
  },
  Ip = re({
    name: "GridVideoProviderUser",
    components: { GridVideo: wp },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: n } = Pp(e),
        a = L(null),
        t = u(
          () => e.data.settings.src?.includes(`${[Vt.AUTOPLAY]}=${so}`) ?? !1
        ),
        o = u(() => {
          const l = Vt.MUTE[n.provider];
          return t.value
            ? n.src.replace(`${[l]}=${qn}`, `${[l]}=${so}`)
            : n.src;
        }),
        i = L(!1),
        r = L(!1),
        s = () => {
          const l = new IntersectionObserver(
            ([{ isIntersecting: m }]) => {
              m && (t.value ? (i.value = !0) : (r.value = !0), l.disconnect());
            },
            { threshold: 0 }
          );
          l.observe(a.value.$el), (i.value = !0);
        };
      return (
        De(() => {
          s();
        }),
        {
          videoRef: a,
          composedProps: n,
          composedSrc: o,
          renderIframe: i,
          renderPicture: r,
        }
      );
    },
  });
function Ep(e, n, a, t, o, i) {
  const r = Be("GridVideo");
  return (
    c(),
    W(
      r,
      Ge({ ref: "videoRef" }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: n[0] || (n[0] = (s) => (e.renderIframe = !0)),
      }),
      null,
      16,
      ["src", "render-iframe", "render-picture"]
    )
  );
}
const Dp = oe(Ip, [["render", Ep]]),
  Mp = re({
    name: "GridShape",
    props: { svg: { type: String, required: !0 } },
  }),
  Op = ["innerHTML"];
function Lp(e, n, a, t, o, i) {
  return c(), h("div", { class: "grid-shape", innerHTML: e.svg }, null, 8, Op);
}
const Bp = oe(Mp, [["render", Lp]]),
  Ap = re({
    name: "GridShapeProviderUser",
    components: { GridShape: Bp },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / zt,
          n = (this.data.desktop.height * 100) / sa;
        return {
          "--shape-height": `${this.data.desktop.height}px`,
          "--m-shape-height": this.isInPreviewMode
            ? `${this.data.mobile.height}px`
            : `${e}vw`,
          "--t-shape-height": `${this.data.mobile.height}px`,
          "--small-desktop-shape-height": `${n}vw`,
          "--shape-color": `${this.data.color}`,
        };
      },
    },
  });
function xp(e, n, a, t, o, i) {
  const r = Be("GridShape");
  return (
    c(),
    W(r, { svg: e.data.svg, style: xe(e.cssVars) }, null, 8, ["svg", "style"])
  );
}
const Rp = oe(Ap, [["render", xp]]),
  Np = re({
    props: {
      alt: { type: String, default: null },
      src: { type: String, required: !0 },
      isEager: { type: Boolean, default: !1 },
      objectFit: { type: String, default: "cover" },
      width: { type: Number, default: null },
      height: { type: Number, default: null },
      enableSrcset: { type: Boolean, default: !1 },
      imageOrigin: { type: String, default: "other" },
      isLossless: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
    },
    data() {
      return { imageUrl: this.src, srcset: null, isLoaded: !1 };
    },
    computed: {
      sizes() {
        return this.enableSrcset ? Rn(this.width, null) : null;
      },
    },
    watch: {
      objectFit(e, n) {
        e !== n &&
          n === "cover" &&
          this.imageUrl.includes("fit=crop") &&
          ((this.imageUrl = this.getImageUrl()),
          (this.srcset = this.getSrcSet()));
      },
    },
    mounted() {
      (this.imageUrl = this.getImageUrl()), (this.srcset = this.getSrcSet());
    },
    methods: {
      getImageUrl() {
        return rt(this.imageOrigin, this.src, this.siteId, {
          width: this.width,
          height: this.height,
          shouldContain: this.objectFit === "contain",
          isLossless: this.isLossless,
        });
      },
      getSrcSet() {
        return this.enableSrcset
          ? Aa(this.imageOrigin, this.src, this.siteId, {
              width: this.width,
              height: this.height,
              shouldContain: this.objectFit === "contain",
              isLossless: this.isLossless,
            })
          : null;
      },
    },
  }),
  Hp = ["loading", "src", "alt", "srcset", "sizes"];
function $p(e, n, a, t, o, i) {
  return (
    c(),
    W(
      It,
      { name: "fade", mode: "out-in" },
      {
        default: fe(() => [
          I(
            "img",
            Ge(e.$attrs, {
              loading: e.isEager ? "eager" : "lazy",
              src: e.imageUrl,
              alt: e.alt,
              srcset: e.srcset,
              sizes: e.sizes,
              class: [
                "ecommerce-product-image",
                { "ecommerce-product-image--loading": !e.isLoaded },
              ],
              onLoad: n[0] || (n[0] = (r) => (e.isLoaded = !0)),
              onError: n[1] || (n[1] = (r) => (e.isLoaded = !0)),
            }),
            null,
            16,
            Hp
          ),
        ]),
        _: 1,
      }
    )
  );
}
const fo = oe(Np, [["render", $p]]);
function yo(e) {
  return Xs() ? (Js(e), !0) : !1;
}
function Xa(e) {
  return typeof e == "function" ? e() : A(e);
}
const Fr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Up = (e) => e != null,
  Vp = Object.prototype.toString,
  Yp = (e) => Vp.call(e) === "[object Object]",
  In = () => {},
  gr = Fp();
function Fp() {
  var e, n;
  return (
    Fr &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function Wp(e) {
  return Zs();
}
function qp(...e) {
  if (e.length !== 1) return Bn(...e);
  const n = e[0];
  return typeof n == "function" ? Lu(Bu(() => ({ get: n, set: In }))) : L(n);
}
function Gp(e, n = !0, a) {
  Wp() ? De(e, a) : n ? e() : Ct(e);
}
function oa(e) {
  var n;
  const a = Xa(e);
  return (n = a?.$el) != null ? n : a;
}
const bo = Fr ? window : void 0,
  jp = Fr ? window.document : void 0;
function xa(...e) {
  let n, a, t, o;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([a, t, o] = e), (n = bo))
      : ([n, a, t, o] = e),
    !n)
  )
    return In;
  Array.isArray(a) || (a = [a]), Array.isArray(t) || (t = [t]);
  const i = [],
    r = () => {
      i.forEach((g) => g()), (i.length = 0);
    },
    s = (g, d, p, f) => (
      g.addEventListener(d, p, f), () => g.removeEventListener(d, p, f)
    ),
    l = Ne(
      () => [oa(n), Xa(o)],
      ([g, d]) => {
        if ((r(), !g)) return;
        const p = Yp(d) ? { ...d } : d;
        i.push(...a.flatMap((f) => t.map((b) => s(g, f, b, p))));
      },
      { immediate: !0, flush: "post" }
    ),
    m = () => {
      l(), r();
    };
  return yo(m), m;
}
let us = !1;
function _o(e, n, a = {}) {
  const {
    window: t = bo,
    ignore: o = [],
    capture: i = !0,
    detectIframe: r = !1,
  } = a;
  if (!t) return In;
  gr &&
    !us &&
    ((us = !0),
    Array.from(t.document.body.children).forEach((p) =>
      p.addEventListener("click", In)
    ),
    t.document.documentElement.addEventListener("click", In));
  let s = !0;
  const l = (p) =>
      o.some((f) => {
        if (typeof f == "string")
          return Array.from(t.document.querySelectorAll(f)).some(
            (b) => b === p.target || p.composedPath().includes(b)
          );
        {
          const b = oa(f);
          return b && (p.target === b || p.composedPath().includes(b));
        }
      }),
    g = [
      xa(
        t,
        "click",
        (p) => {
          const f = oa(e);
          if (!(!f || f === p.target || p.composedPath().includes(f))) {
            if ((p.detail === 0 && (s = !l(p)), !s)) {
              s = !0;
              return;
            }
            n(p);
          }
        },
        { passive: !0, capture: i }
      ),
      xa(
        t,
        "pointerdown",
        (p) => {
          const f = oa(e);
          s = !l(p) && !!(f && !p.composedPath().includes(f));
        },
        { passive: !0 }
      ),
      r &&
        xa(t, "blur", (p) => {
          setTimeout(() => {
            var f;
            const b = oa(e);
            ((f = t.document.activeElement) == null ? void 0 : f.tagName) ===
              "IFRAME" &&
              !b?.contains(t.document.activeElement) &&
              n(p);
          }, 0);
        }),
    ].filter(Boolean);
  return () => g.forEach((p) => p());
}
function zp() {
  const e = L(!1),
    n = Zs();
  return (
    n &&
      De(() => {
        e.value = !0;
      }, n),
    e
  );
}
function kl(e) {
  const n = zp();
  return u(() => (n.value, !!e()));
}
function Kp(e, n, a = {}) {
  const { window: t = bo, ...o } = a;
  let i;
  const r = kl(() => t && "MutationObserver" in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => {
      const p = Xa(e),
        f = (Array.isArray(p) ? p : [p]).map(oa).filter(Up);
      return new Set(f);
    }),
    m = Ne(
      () => l.value,
      (p) => {
        s(),
          r.value &&
            t &&
            p.size &&
            ((i = new MutationObserver(n)), p.forEach((f) => i.observe(f, o)));
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => i?.takeRecords(),
    d = () => {
      s(), m();
    };
  return yo(d), { isSupported: r, stop: d, takeRecords: g };
}
function Qp(e = {}) {
  const { document: n = jp } = e;
  if (!n) return L("visible");
  const a = L(n.visibilityState);
  return (
    xa(n, "visibilitychange", () => {
      a.value = n.visibilityState;
    }),
    a
  );
}
function Zp(e, n, a = {}) {
  const { window: t = bo, ...o } = a;
  let i;
  const r = kl(() => t && "ResizeObserver" in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => (Array.isArray(e) ? e.map((d) => oa(d)) : [oa(e)])),
    m = Ne(
      l,
      (d) => {
        if ((s(), r.value && t)) {
          i = new ResizeObserver(n);
          for (const p of d) p && i.observe(p, o);
        }
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => {
      s(), m();
    };
  return yo(g), { isSupported: r, stop: g };
}
function Xp(e, n = {}) {
  const {
      reset: a = !0,
      windowResize: t = !0,
      windowScroll: o = !0,
      immediate: i = !0,
    } = n,
    r = L(0),
    s = L(0),
    l = L(0),
    m = L(0),
    g = L(0),
    d = L(0),
    p = L(0),
    f = L(0);
  function b() {
    const S = oa(e);
    if (!S) {
      a &&
        ((r.value = 0),
        (s.value = 0),
        (l.value = 0),
        (m.value = 0),
        (g.value = 0),
        (d.value = 0),
        (p.value = 0),
        (f.value = 0));
      return;
    }
    const T = S.getBoundingClientRect();
    (r.value = T.height),
      (s.value = T.bottom),
      (l.value = T.left),
      (m.value = T.right),
      (g.value = T.top),
      (d.value = T.width),
      (p.value = T.x),
      (f.value = T.y);
  }
  return (
    Zp(e, b),
    Ne(
      () => oa(e),
      (S) => !S && b()
    ),
    Kp(e, b, { attributeFilter: ["style", "class"] }),
    o && xa("scroll", b, { capture: !0, passive: !0 }),
    t && xa("resize", b, { passive: !0 }),
    Gp(() => {
      i && b();
    }),
    {
      height: r,
      bottom: s,
      left: l,
      right: m,
      top: g,
      width: d,
      x: p,
      y: f,
      update: b,
    }
  );
}
function xo(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
    ? e.documentElement
    : e;
}
function Sl(e) {
  const n = window.getComputedStyle(e);
  if (
    n.overflowX === "scroll" ||
    n.overflowY === "scroll" ||
    (n.overflowX === "auto" && e.clientWidth < e.scrollWidth) ||
    (n.overflowY === "auto" && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const a = e.parentNode;
    return !a || a.tagName === "BODY" ? !1 : Sl(a);
  }
}
function Jp(e) {
  const n = e || window.event,
    a = n.target;
  return Sl(a)
    ? !1
    : n.touches.length > 1
    ? !0
    : (n.preventDefault && n.preventDefault(), !1);
}
const Xn = new WeakMap();
function ev(e, n = !1) {
  const a = L(n);
  let t = null;
  Ne(
    qp(e),
    (r) => {
      const s = xo(Xa(r));
      if (s) {
        const l = s;
        Xn.get(l) || Xn.set(l, l.style.overflow),
          a.value && (l.style.overflow = "hidden");
      }
    },
    { immediate: !0 }
  );
  const o = () => {
      const r = xo(Xa(e));
      !r ||
        a.value ||
        (gr &&
          (t = xa(
            r,
            "touchmove",
            (s) => {
              Jp(s);
            },
            { passive: !1 }
          )),
        (r.style.overflow = "hidden"),
        (a.value = !0));
    },
    i = () => {
      var r;
      const s = xo(Xa(e));
      !s ||
        !a.value ||
        (gr && t?.(),
        (s.style.overflow = (r = Xn.get(s)) != null ? r : ""),
        Xn.delete(s),
        (a.value = !1));
    };
  return (
    yo(i),
    u({
      get() {
        return a.value;
      },
      set(r) {
        r ? o() : i();
      },
    })
  );
}
const cs = 45,
  tv = re({
    __name: "SiteElementSearchBar",
    props: {
      placeholderText: {},
      noResultsText: {},
      fillColor: {},
      fillColorHover: {},
      textAndIconColor: {},
      textAndIconColorHover: {},
      resultItemHoverColor: {},
      fontFamily: {},
      borderColor: {},
      borderColorHover: {},
      borderRadius: {},
      translations: {},
      siteId: {},
      searchTerm: { default: "" },
      results: { default: null },
      isLoading: { type: Boolean, default: !1 },
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(e, { expose: n, emit: a }) {
      n(),
        st((y) => ({
          "45245e45": y.fontFamily,
          c48fbf5c: y.textAndIconColor,
          "60741c0a": y.textAndIconColorHover,
          "6b74e73d": p.value,
          "6169fb25": y.borderColor,
          "0b56f8a4": y.fillColor,
          a82de5d2: y.borderColorHover,
          "121b722e": y.fillColorHover,
          "360a1fa9": y.resultItemHoverColor,
          "44bc226c": t,
        }));
      const t = `${cs}px`,
        o = a,
        i = e,
        r = L(null),
        s = L(!1),
        l = L([]),
        m = L(-1),
        g = u(() => i.isLoading),
        d = u(() => i.results),
        p = u(() => `${i.borderRadius}px`),
        f = () => {
          i.results && m.value < i.results.length - 1 && (m.value += 1);
        },
        b = () => {
          m.value > 0 && (m.value -= 1);
        },
        S = () => {
          const y = l.value[m.value];
          if (!y) return;
          const D = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          y.dispatchEvent(D);
        },
        T = () => {
          (s.value = !1), o("update:search-term", ""), (m.value = -1);
        };
      Ne([d, g], () => {
        (s.value = !!d.value || g.value), o("is-dropdown-open", s.value);
      }),
        De(() => {
          _o(r, () => {
            T();
          });
        });
      const w = {
        IMAGE_DIMENSIONS_PX: cs,
        IMAGE_DIMENSIONS_PX_STRING: t,
        emit: o,
        props: i,
        searchBarRef: r,
        isSearchResultDropdownVisible: s,
        itemLinksRefs: l,
        highlightedItemIndex: m,
        isLoading: g,
        results: d,
        borderRadiusInPx: p,
        highlightNextItem: f,
        highlightPreviousItem: b,
        redirectToHighlightedItem: S,
        dropdownCloseHandler: T,
        ZyroLoader: Yr,
        ProductImage: fo,
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  }),
  av = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox",
  },
  nv = { class: "site-element-search-bar__input-wrapper" },
  ov = ["placeholder", "value", "onKeydown"],
  rv = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown",
  },
  iv = { key: 1, class: "site-element-search-bar__dropdown-no-results" },
  sv = ["area-selected"],
  lv = ["href", "onMouseover", "onFocus", "onKeydown"],
  uv = { class: "search-result-item__content" },
  cv = { class: "search-result-item__title" },
  dv = { class: "search-result-item__price" },
  mv = { key: 0 },
  gv = { key: 0 },
  pv = { key: 0, class: "search-result-item__sale-price" },
  vv = { key: 1 };
function hv(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      av,
      [
        I("div", nv, [
          I(
            "input",
            {
              class: "site-element-search-bar__input",
              placeholder: t.props.placeholderText,
              value: t.props.searchTerm,
              onInput:
                n[0] ||
                (n[0] = (r) => t.emit("update:search-term", r.target.value)),
              onKeydown: [
                Oe(Ie(t.highlightNextItem, ["prevent"]), ["down"]),
                Oe(Ie(t.highlightPreviousItem, ["prevent"]), ["up"]),
                Oe(t.redirectToHighlightedItem, ["enter"]),
              ],
            },
            null,
            40,
            ov
          ),
          t.isSearchResultDropdownVisible
            ? (c(),
              h("div", {
                key: 0,
                class: "site-element-search-bar__dropdown-close",
                onClick: t.dropdownCloseHandler,
              }))
            : O("", !0),
        ]),
        t.isSearchResultDropdownVisible
          ? (c(),
            h("ul", rv, [
              t.props.isLoading
                ? (c(),
                  W(
                    t.ZyroLoader,
                    {
                      key: 0,
                      size: "30px",
                      color: t.props.textAndIconColorHover,
                      class: "site-element-search-bar__loader",
                    },
                    null,
                    8,
                    ["color"]
                  ))
                : !t.props.results || t.props.results.length === 0
                ? (c(), h("p", iv, J(a.noResultsText), 1))
                : (c(!0),
                  h(
                    pe,
                    { key: 2 },
                    ke(
                      t.props.results,
                      (r, s) => (
                        c(),
                        h(
                          "li",
                          {
                            key: r.id,
                            role: "option",
                            "area-selected": s === t.highlightedItemIndex,
                          },
                          [
                            I(
                              "a",
                              {
                                ref_for: !0,
                                ref: "itemLinksRefs",
                                href: r.href,
                                class: Z([
                                  "search-result-item",
                                  {
                                    "search-result-item--highlighted":
                                      s === t.highlightedItemIndex,
                                  },
                                ]),
                                onMouseover: (l) =>
                                  (t.highlightedItemIndex = s),
                                onFocus: (l) => (t.highlightedItemIndex = s),
                                onKeydown: Oe(
                                  Ie(t.redirectToHighlightedItem, ["prevent"]),
                                  ["enter"]
                                ),
                              },
                              [
                                r.thumbnail
                                  ? (c(),
                                    W(
                                      t.ProductImage,
                                      {
                                        key: 0,
                                        src: r.thumbnail,
                                        alt: r.title,
                                        class: "search-result-item__image",
                                        width: t.IMAGE_DIMENSIONS_PX,
                                        height: t.IMAGE_DIMENSIONS_PX,
                                        "site-id": t.props.siteId,
                                        "enable-srcset": "",
                                      },
                                      null,
                                      8,
                                      ["src", "alt", "site-id"]
                                    ))
                                  : O("", !0),
                                I("div", uv, [
                                  I("h3", cv, J(r.title), 1),
                                  I("p", dv, [
                                    r.isInStock
                                      ? (c(),
                                        h("span", mv, [
                                          r.price?.length
                                            ? (c(),
                                              h("span", gv, [
                                                r.oldPrice
                                                  ? (c(),
                                                    h(
                                                      "span",
                                                      pv,
                                                      J(r.oldPrice),
                                                      1
                                                    ))
                                                  : O("", !0),
                                                Ae(" " + J(r.price), 1),
                                              ]))
                                            : O("", !0),
                                        ]))
                                      : (c(),
                                        h(
                                          "span",
                                          vv,
                                          J(a.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              lv
                            ),
                          ],
                          8,
                          sv
                        )
                      )
                    ),
                    128
                  )),
            ]))
          : O("", !0),
      ],
      512
    )
  );
}
const fv = oe(tv, [["render", hv]]),
  Tl = (e, n) => {
    let a;
    return function () {
      const o = () => Reflect.apply(e, this, arguments);
      clearTimeout(a), (a = setTimeout(o, n));
    };
  },
  yv = 6,
  bv = 5,
  _v = 4,
  wv = 3,
  Cl = 2,
  kv = { [yv]: 18, [bv]: 15, [_v]: 12, [wv]: 9, [Cl]: 6 },
  Sv = (e) => e?.variants[0].booking_event?.length_unit === dr;
function pr(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Wr = (e, n) => {
    const a = (t) => Math.round(t * 100) / 100;
    return Sv(e)
      ? `${a(pr(e) / 1e3 / 60 / 60)} ${n.hourShort}`
      : `${a(pr(e) / 1e3 / 60)} ${n.minuteShort}`;
  },
  En = (e) =>
    e[hl] !== Vr
      ? !1
      : !e.variants.every((n, a, t) => {
          const o = t[0]?.prices?.[0] ?? t[0],
            i = n?.prices?.[0] ?? n,
            r = o.sale_amount ?? o.amount,
            s = i.sale_amount ?? i.amount;
          return r === s;
        }),
  Tn = ({ variantsQuantity: e, variantId: n }) =>
    e.find((a) => a.id === n)?.inventory_quantity || 0,
  Pl = ({ product: e, variantsQuantity: n }) =>
    e.variants.reduce(
      (a, t) => a + Tn({ variantsQuantity: n, variantId: t.id }),
      0
    ),
  Tv = ({ product: e, variantsQuantity: n }) =>
    e.variants[0].manage_inventory
      ? Pl({ product: e, variantsQuantity: n }) > 0
      : !0,
  Cv = ({ variants: e }) =>
    e.reduce((n, a) =>
      (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a
    );
function Sa({ amount: e, currency: n, isPriceDisplayedWithCurrency: a = !0 }) {
  if (!n) return a ? "€0.00" : "0.00";
  const t = Number(e) || 0,
    i = Number(t / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
  return a ? n.template.replace("$1", i) : i;
}
const Pv = "https://builder-backend.hostinger.com/public",
  Iv = async ({ query: e, indices: n, pageSize: a = 5, storeId: t }) => {
    if (!e) return [];
    const o = await fetch(`${Pv}/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: e, indices: n, storeId: t, pageSize: a }),
      }),
      { results: i } = await o.json();
    return i.products.hits;
  },
  ds = 400,
  Ev = re({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o, ecommerceShoppingCart: i } = Qe(),
        r = u(() => i.value?.translations || {}),
        { toggleSearchDropdown: s } = sr({ blockId: a.blockId }),
        l = L(""),
        m = L(!1),
        g = L(null),
        d = u(() => t.value.ecommerceStoreId),
        p = u(() =>
          g.value
            ? g.value.map((T) => {
                const w =
                    T.site_product_selection === Vr
                      ? Cv({ variants: T.variants })
                      : T.variants[0],
                  {
                    amount: y,
                    sale_amount: D,
                    currency_decimal_digits: C,
                    currency_template: M,
                    manage_inventory: N,
                  } = w,
                  R = { decimal_digits: C, template: M },
                  Q = `/product-redirect/${T.id}`,
                  G = y && En(T) ? `${r.value.from} ` : "",
                  P = y ? `${G}${Sa({ amount: D || y, currency: R })}` : "",
                  B = D ? Sa({ amount: y, currency: R }) : null,
                  U =
                    !N ||
                    (!!y && Tv({ product: T, variantsQuantity: T.variants }));
                return {
                  id: T.id,
                  thumbnail: T.thumbnail,
                  title: T.title,
                  href: Q,
                  price: P,
                  oldPrice: B,
                  isInStock: U,
                };
              })
            : null
        ),
        f = Tl(async () => {
          (m.value = !0),
            l.value && d.value
              ? (g.value = await Iv({
                  query: l.value,
                  indices: [qu],
                  storeId: d.value,
                }))
              : (g.value = null),
            (m.value = !1);
        }, ds),
        S = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: ds,
          props: a,
          meta: t,
          siteId: o,
          ecommerceShoppingCart: i,
          ecommerceTranslations: r,
          toggleSearchDropdown: s,
          searchTerm: l,
          isLoading: m,
          results: g,
          storeId: d,
          computedResults: p,
          searchHandler: f,
          updateSearchTerm: ({ newValue: T }) => {
            (l.value = T), f();
          },
          SiteElementSearchBar: fv,
        };
      return (
        Object.defineProperty(S, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        S
      );
    },
  });
function Dv(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.SiteElementSearchBar,
      {
        "placeholder-text": t.props.data.placeholderText,
        "no-results-text": t.props.data.noResultsText,
        "fill-color": t.props.data.fillColor,
        "fill-color-hover": t.props.data.fillColorHover,
        "text-and-icon-color": t.props.data.textAndIconColor,
        "text-and-icon-color-hover": t.props.data.textAndIconColorHover,
        "font-family": t.props.data.fontFamily,
        "border-color": t.props.data.borderColor,
        "border-color-hover": t.props.data.borderColorHover,
        "border-radius": t.props.data.borderRadius,
        "is-loading": t.isLoading,
        "result-item-hover-color": t.props.data.resultItemHoverColor,
        results: t.computedResults,
        "search-term": t.searchTerm,
        "site-id": t.siteId,
        translations: t.ecommerceTranslations,
        "onUpdate:searchTerm":
          n[0] || (n[0] = (r) => t.updateSearchTerm({ newValue: r })),
        onIsDropdownOpen: t.toggleSearchDropdown,
      },
      null,
      8,
      [
        "placeholder-text",
        "no-results-text",
        "fill-color",
        "fill-color-hover",
        "text-and-icon-color",
        "text-and-icon-color-hover",
        "font-family",
        "border-color",
        "border-color-hover",
        "border-radius",
        "is-loading",
        "result-item-hover-color",
        "results",
        "search-term",
        "site-id",
        "translations",
        "onIsDropdownOpen",
      ]
    )
  );
}
const Mv = oe(Ev, [["render", Dv]]),
  hn = L(!1),
  fn = L(!1),
  Ro = L(!1),
  No = L(""),
  qa = L(null),
  Ho = L(!1),
  nn = ({
    elementData: e,
    data: n,
    elementId: a,
    isParentBlockFooter: t,
  } = {}) => {
    const o = L(null),
      i = L(null),
      r = L(null),
      s = e || n || {},
      l = (w) => `transition transition--${w}`,
      m = u(() => {
        const w = a && Gu.includes(s.type),
          y = !a && !ju.includes(s.type);
        if (w || y) return "";
        const D = l(s.animation?.name);
        return wi.includes(s.type) ? `${D} transition--root-hidden` : D;
      }),
      g = u(() => {
        const w = qa.value && a === qa.value;
        return !hn.value || (qa.value && !w) ? "" : Ro.value;
      }),
      d = u(() => (fn.value ? An : null)),
      p = async (w) => {
        w.forEach(({ target: y, isIntersecting: D }) => {
          if (!D) {
            y.removeAttribute(xn);
            return;
          }
          t || r.value?.unobserve(y), y.setAttribute(xn, An);
        });
      },
      f = ({ root: w = null } = {}) => {
        s.animation?.name &&
          (r.value = new IntersectionObserver(p, { threshold: 0, root: w }));
      },
      b = async (w) => {
        if (s.animation?.name)
          if ((await Ct(), wi.includes(s.type))) {
            const y = w?.querySelectorAll(`[${ha}="${Lr}"]`),
              D = w?.querySelectorAll(`[${ha}="${dn}"]`);
            [...y, ...D].forEach((M) => r.value?.observe(M));
          } else r.value?.observe(w);
      },
      S = () => {
        window.clearTimeout(o.value),
          window.clearTimeout(i.value),
          (hn.value = !1),
          (fn.value = !1);
      },
      T = ({ animation: w, id: y }) => {
        S(),
          !w !== "none" &&
            ((qa.value = y),
            (No.value = w),
            (hn.value = !0),
            (Ro.value = l(No.value)),
            (o.value = setTimeout(() => {
              fn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (hn.value = !1), (fn.value = !1), (qa.value = null);
            }, 2e3)));
      };
    return (
      Ne(Ho, async (w) => {
        w && (await Ct(), (Ho.value = !1));
      }),
      {
        intersectionObserver: r,
        animationClass: m,
        animationInEditorClass: Ro,
        animationInEditorComponentId: qa,
        isAnimationDisplayedInEditor: hn,
        isAnimationDisplayedInEditorActive: fn,
        animationInEditorName: No,
        addIntersectionObserver: f,
        observe: b,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: Ho,
        customAnimationClass: g,
        animationAttributeStateValue: d,
      }
    );
  },
  Ov = {
    __name: "LayoutElementProviderUser",
    props: {
      elementId: { type: String, required: !0 },
      blockId: { type: String, required: !0 },
      elementData: { type: Object, required: !0 },
      overrideWidth: { type: Number, default: null },
      overrideHeight: { type: Number, default: null },
      isMobileLegacy: { type: Boolean, default: !1 },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isParentBlockFooter: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), st((D) => ({ "68a0bbc6": b.value, ebe08afe: S.value }));
      const a = e,
        t = L(null),
        {
          intersectionObserver: o,
          animationClass: i,
          addIntersectionObserver: r,
          observe: s,
          shouldMountAnimationsInPreview: l,
        } = nn({
          elementData: a.elementData,
          isParentBlockFooter: a.isParentBlockFooter,
          elementId: a.elementId,
        }),
        m = u(() => Object.values(a.siteLanguagePages)[0]),
        g = u(() => a.elementData.mobile?.isHidden || !1),
        d = u(() => a.elementData.desktop?.isHidden || !1),
        p = u(() =>
          a.elementData.type !== Do
            ? ""
            : (
                a.siteLanguagePages[a.elementData.settings?.successPageId] ||
                m.value
              ).slug
        ),
        f = u(() =>
          a.elementData.type !== Do
            ? ""
            : (
                a.siteLanguagePages[
                  a.elementData.settings?.cancellationPageId
                ] || m.value
              ).slug
        ),
        b = u(() => `${a.elementData.desktop.height}px`),
        S = u(() => `${a.elementData.mobile.height}px`),
        T = async () => {
          await s(t.value?.$el);
        },
        w = async () => {
          const C = [ki, Si].includes(a.elementData.type),
            N =
              t.value?.$el.getBoundingClientRect().height > window.innerHeight,
            R = !C && N && t.value ? t.value.$el.parentElement : null;
          r({ root: R }), C || (await T());
        };
      De(async () => {
        await w();
      }),
        Tt(() => o.value?.disconnect()),
        Ne(l, async (D) => {
          D && (await w());
        });
      const y = {
        props: a,
        elementRef: t,
        intersectionObserver: o,
        animationClass: i,
        addIntersectionObserver: r,
        observe: s,
        shouldMountAnimationsInPreview: l,
        firstLanguagePage: m,
        isMobileElementHidden: g,
        isDesktopElementHidden: d,
        stripeSuccessPageSlug: p,
        stripeCancellationPageSlug: f,
        elementHeightDesktop: b,
        elementHeightMobile: S,
        observeElement: T,
        initiateAnimations: w,
        get ELEMENT_TYPE_BUTTON() {
          return ol;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Do;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return zu;
        },
        get ELEMENT_TYPE_MAP() {
          return tl;
        },
        get ELEMENT_TYPE_VIDEO() {
          return al;
        },
        get ELEMENT_TYPE_IMAGE() {
          return Ku;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return Qu;
        },
        get ELEMENT_TYPE_FORM() {
          return Zu;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return ki;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return rl;
        },
        get ELEMENT_TYPE_GALLERY() {
          return Si;
        },
        get ELEMENT_TYPE_EMBED() {
          return Xu;
        },
        get ELEMENT_TYPE_SHAPE() {
          return Ju;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return ec;
        },
        LayoutElementWrapper: Id,
        GridButtonProviderUser: Ld,
        GridEcommerceButtonProviderUser: Gd,
        GridEmbedProviderUser: nm,
        GridFormProviderUser: Ym,
        GridGalleryProviderUser: tg,
        GridImageProviderUser: sg,
        GridInstagramFeedProviderUser: Eg,
        GridMapProviderUser: Ng,
        GridSocialIconsProviderUser: Wg,
        GridStripeButtonProviderUser: Qg,
        GridTextBoxProviderUser: np,
        GridVideoProviderUser: Dp,
        GridShapeProviderUser: Rp,
        SiteElementSearchBarProviderSiteEngine: Mv,
        get useSiteEngineAnimations() {
          return nn;
        },
        computed: u,
        onMounted: De,
        onBeforeUnmount: Tt,
        ref: L,
        watch: Ne,
        get isSearchDropdownOpen() {
          return ir;
        },
      };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  };
function Lv(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    W(
      t.LayoutElementWrapper,
      {
        ref: "elementRef",
        class: Z([
          "layout-element",
          [
            {
              "layout-element--desktop-element-hidden":
                t.isDesktopElementHidden,
              "layout-element--mobile-element-hidden": t.isMobileElementHidden,
            },
            t.animationClass,
          ],
        ]),
        "element-data": a.elementData,
        "is-forced-on-top":
          t.isSearchDropdownOpen &&
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": a.isMobileLegacy,
      },
      {
        default: fe(() => [
          a.elementData.type === t.ELEMENT_TYPE_BUTTON
            ? ue(
                (c(),
                W(
                  t.GridButtonProviderUser,
                  {
                    key: 0,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    class:
                      "layout-element__component layout-element__component--GridButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "current-locale",
                    "mobile-element-width",
                    "mobile-element-height",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_STRIPE_BUTTON
            ? ue(
                (c(),
                W(
                  t.GridStripeButtonProviderUser,
                  {
                    key: 1,
                    id: a.elementId,
                    data: a.elementData,
                    "success-page-slug": t.stripeSuccessPageSlug,
                    "cancellation-page-slug": t.stripeCancellationPageSlug,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    class:
                      "layout-element__component layout-element__component--GridStripeButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "success-page-slug",
                    "cancellation-page-slug",
                    "stripe-public-api-key",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_ECOMMERCE_BUTTON
            ? ue(
                (c(),
                W(
                  t.GridEcommerceButtonProviderUser,
                  {
                    key: 2,
                    id: a.elementId,
                    data: a.elementData,
                    "is-cart-visible": a.isCartVisible,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridEcommerceButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "is-cart-visible",
                    "mobile-element-width",
                    "mobile-element-height",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_FORM
            ? ue(
                (c(),
                W(
                  t.GridFormProviderUser,
                  {
                    key: 3,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridForm",
                  },
                  null,
                  8,
                  ["id", "data", "current-locale", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_VIDEO
            ? ue(
                (c(),
                W(
                  t.GridVideoProviderUser,
                  {
                    key: 4,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridVideo",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_TEXT_BOX
            ? ue(
                (c(),
                W(
                  t.GridTextBoxProviderUser,
                  {
                    key: 5,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridTextBox",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_MAP
            ? ue(
                (c(),
                W(
                  t.GridMapProviderUser,
                  {
                    key: 6,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridMap",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SOCIAL_ICONS
            ? ue(
                (c(),
                W(
                  t.GridSocialIconsProviderUser,
                  {
                    key: 7,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridSocialIcons",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_GALLERY
            ? ue(
                (c(),
                W(
                  t.GridGalleryProviderUser,
                  {
                    key: 8,
                    id: a.elementId,
                    data: a.elementData,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    class:
                      "layout-element__component layout-element__component--GridGallery",
                    onImageLoad: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data", "element-width", "element-height"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_IMAGE
            ? ue(
                (c(),
                W(
                  t.GridImageProviderUser,
                  {
                    key: 9,
                    id: a.elementId,
                    lcp: a.lcp,
                    data: a.elementData,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    "reset-mobile-position": a.isMobileLegacy,
                    "current-locale": a.currentLocale,
                    "mobile-border-radius": a.elementData.mobile.borderRadius,
                    "desktop-border-radius": a.elementData.desktop.borderRadius,
                    "shape-mask-source": a.elementData.shapeMaskSource,
                    "overlay-opacity": a.elementData.overlayOpacity,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridImage",
                  },
                  null,
                  8,
                  [
                    "id",
                    "lcp",
                    "data",
                    "mobile-element-width",
                    "mobile-element-height",
                    "element-width",
                    "element-height",
                    "reset-mobile-position",
                    "current-locale",
                    "mobile-border-radius",
                    "desktop-border-radius",
                    "shape-mask-source",
                    "overlay-opacity",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_INSTAGRAM_FEED
            ? ue(
                (c(),
                W(
                  t.GridInstagramFeedProviderUser,
                  {
                    key: 10,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridInstagramFeed",
                    onMediaLoaded: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_EMBED
            ? ue(
                (c(),
                W(
                  t.GridEmbedProviderUser,
                  {
                    key: 11,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridEmbed",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SHAPE
            ? ue(
                (c(),
                W(
                  t.GridShapeProviderUser,
                  {
                    key: 12,
                    id: a.elementId,
                    data: a.elementData,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridShape",
                  },
                  null,
                  8,
                  ["id", "data", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR
            ? ue(
                (c(),
                W(
                  t.SiteElementSearchBarProviderSiteEngine,
                  {
                    key: 13,
                    id: a.elementId,
                    data: a.elementData,
                    class: "layout-element__component",
                    "block-id": a.blockId,
                  },
                  null,
                  8,
                  ["id", "data", "block-id"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          ee(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      8,
      ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"]
    )
  );
}
const Bv = oe(Ov, [
    ["render", Lv],
    ["__scopeId", "data-v-f5dd3112"],
  ]),
  Av = {
    __name: "BlockLayoutProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      components: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isSearchOpenedInCurrentBlock: t } = sr({ blockId: a.blockId }),
        { components: o } = ar(a),
        i = u(() => a.data),
        {
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
        } = ur({
          blockData: i,
          siteElements: o,
          shouldBuildResponsive: !a.isInPreviewMode,
        }),
        m = u(() => i.value.slot === "footer"),
        g = {
          props: a,
          isSearchOpenedInCurrentBlock: t,
          siteElements: o,
          blockData: i,
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
          isBlockFooter: m,
          toRefs: ar,
          computed: u,
          get useSearchElementDropdown() {
            return sr;
          },
          BlockLayoutWrapper: fd,
          get useBlockLayout() {
            return ur;
          },
          LayoutElementProviderUser: Bv,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  };
function xv(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.BlockLayoutWrapper,
      {
        ref: "blockLayout",
        style: xe(t.layoutCSSVars),
        "is-mobile-legacy": t.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": t.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": t.props.isInPreviewMode,
      },
      {
        default: fe(() => [
          (c(!0),
          h(
            pe,
            null,
            ke(
              t.layoutElements,
              (r) => (
                c(),
                W(
                  t.LayoutElementProviderUser,
                  {
                    key: r.elementId,
                    "is-mobile-legacy": t.isMobileLegacy,
                    "element-id": r.elementId,
                    "element-data": r,
                    lcp: a.lcp,
                    "is-cart-visible": a.isCartVisible,
                    "current-locale": a.currentLocale,
                    "site-language-pages": a.siteLanguagePages,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    "is-parent-block-footer": t.isBlockFooter,
                    "block-id": a.blockId,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "is-mobile-legacy",
                    "element-id",
                    "element-data",
                    "lcp",
                    "is-cart-visible",
                    "current-locale",
                    "site-language-pages",
                    "stripe-public-api-key",
                    "is-parent-block-footer",
                    "block-id",
                    "is-in-preview-mode",
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"]
    )
  );
}
const Rv = oe(Av, [["render", xv]]),
  Nv = re({
    __name: "ZyroPagination",
    props: { currentPage: {}, pageCount: {}, color: { default: null } },
    emits: ["change-page"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = u(() => ({ "--button-color": t.color })),
        r = u(() => {
          if (5 > t.pageCount)
            return [...new Array(t.pageCount + 1).keys()].slice(1);
          const m = 4 / 2,
            g = Array.from({ length: 4 }).fill(0);
          if (t.currentPage <= m + 1) {
            g[0] = 1;
            const p = g.map((f, b) => g[0] + b);
            return p.push(t.pageCount), p;
          }
          if (t.currentPage >= t.pageCount - m + 1) {
            const p = g.map((f, b) => t.pageCount - b);
            return p.reverse().unshift(1), p;
          }
          g[0] = t.currentPage - m + 1;
          const d = g.map((p, f) => g[0] + f);
          return d.unshift(1), (d[d.length - 1] = t.pageCount), d;
        }),
        s = { props: t, emit: o, computedStyle: i, paginationTriggersList: r };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  Il = (e) => (Ot("data-v-1ee2fd7c"), (e = e()), Lt(), e),
  Hv = ["disabled"],
  $v = Il(() =>
    I(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M7 1L1 7L7 13",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Uv = [$v],
  Vv = ["data-testId", "disabled", "onClick"],
  Yv = ["disabled"],
  Fv = Il(() =>
    I(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M1 13L7 7L1 1",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Wv = [Fv];
function qv(e, n, a, t, o, i) {
  return a.pageCount > 1
    ? (c(),
      h(
        "div",
        { key: 0, class: "pagination", style: xe(t.computedStyle) },
        [
          I(
            "button",
            {
              disabled: a.currentPage === 1,
              class: "pagination__button",
              "data-testId": "button-previous",
              onClick:
                n[0] ||
                (n[0] = (r) =>
                  t.emit("change-page", Math.max(1, a.currentPage - 1))),
            },
            Uv,
            8,
            Hv
          ),
          (c(!0),
          h(
            pe,
            null,
            ke(
              t.paginationTriggersList,
              (r) => (
                c(),
                h(
                  "button",
                  {
                    key: `${r}-trigger`,
                    class: Z([
                      "pagination__button pagination__trigger",
                      { "pagination__trigger--current": r === a.currentPage },
                    ]),
                    "data-testId": `button-${r}`,
                    disabled: a.currentPage === r,
                    onClick: (s) => t.emit("change-page", r),
                  },
                  J(r),
                  11,
                  Vv
                )
              )
            ),
            128
          )),
          I(
            "button",
            {
              disabled: a.currentPage === a.pageCount,
              class: "pagination__button",
              "data-testId": "button-next",
              onClick:
                n[1] ||
                (n[1] = (r) =>
                  t.emit(
                    "change-page",
                    Math.min(a.pageCount, a.currentPage + 1)
                  )),
            },
            Wv,
            8,
            Yv
          ),
        ],
        4
      ))
    : O("", !0);
}
const El = oe(Nv, [
    ["render", qv],
    ["__scopeId", "data-v-1ee2fd7c"],
  ]),
  vr = 1800,
  Gv = 1080,
  ms = 100,
  jv = {
    __name: "BlockBlogListItem",
    props: {
      post: { type: Object, default: () => ({}) },
      authorName: { type: String, default: null },
      shownItems: {
        type: Object,
        default: () => ({
          authorFullName: !0,
          coverImage: !0,
          title: !0,
          description: !0,
          date: !0,
          categories: !0,
          avatar: !0,
          minutesToRead: !0,
        }),
      },
      coverObjectFit: { type: String, default: "cover" },
      cursor: { type: String, default: "pointer" },
      blogCategories: { type: Object, default: () => ({}) },
      isAnimationActive: { type: Boolean, default: !1 },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
      blogTitleTextSize: { type: Number, default: 24 },
    },
    emits: ["post-click", "filter-category"],
    setup(e, { expose: n }) {
      n(), st((d) => ({ "74783e9f": o.value }));
      const a = e,
        t = L(),
        o = u(() => `${a.blogTitleTextSize}px`),
        i = u(() => a.post?.coverImageAlt ?? ""),
        r = u(() => Rn(vr, null)),
        s = u(() => a.post?.categories ?? []),
        l = u(
          () =>
            !!a.shownItems.coverImage &&
            (a.post?.coverImageSrc || a.post?.coverImageSrcset)
        ),
        m = u(() => {
          const d = t.value?.getBoundingClientRect();
          if (!d || !window || !document) return !0;
          const { top: p } = d,
            { innerHeight: f } = window,
            { clientHeight: b } = document.documentElement;
          return p <= (f || b) + ms;
        }),
        g = {
          props: a,
          VERTICAL_VIEWPORT_OFFSET: ms,
          coverImageContainerRef: t,
          blogTitleTextSize: o,
          coverImageAlt: i,
          sizes: r,
          categories: s,
          isCoverImageShown: l,
          isElementInViewport: m,
          BlockBlogListItemCategories: ml,
          BlockBlogListItemMeta: gl,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return vr;
          },
          get getFormattedNumericDate() {
            return pl;
          },
          get getGridItemSizes() {
            return Rn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return ha;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return dn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return xn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return An;
          },
          computed: u,
          ref: L,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  zv = ["href"],
  Kv = { class: "block-blog-list-item__cover-image-wrapper" },
  Qv = ["alt", "src", "srcset", "sizes", "loading"],
  Zv = ["href"];
function Xv(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      et({
        class: "block-blog-list-item",
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.isAnimationActive
          ? t.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE
          : null,
      }),
      [
        ee(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0),
        t.isCoverImageShown
          ? ue(
              (c(),
              h(
                "a",
                {
                  key: 0,
                  ref: "coverImageContainerRef",
                  href: a.post.slug,
                  class: "block-blog-list-item__cover-image-container",
                  onClick:
                    n[0] ||
                    (n[0] = Ie((s) => e.$emit("post-click"), ["prevent"])),
                },
                [
                  I("div", Kv, [
                    I(
                      "img",
                      {
                        class: "block-blog-list-item__cover-image",
                        alt: t.coverImageAlt,
                        src: a.post.coverImageSrc,
                        srcset: a.post.coverImageSrcset,
                        sizes: t.sizes,
                        loading: t.isElementInViewport ? void 0 : "lazy",
                      },
                      null,
                      8,
                      Qv
                    ),
                  ]),
                ],
                8,
                zv
              )),
              [[r, "blog-list-item-image"]]
            )
          : O("", !0),
        ue(
          Ee(
            t.BlockBlogListItemCategories,
            {
              class: "font-secondary",
              categories: t.categories,
              "blog-categories": a.blogCategories,
              onFilterCategory:
                n[1] || (n[1] = (s) => e.$emit("filter-category", s)),
            },
            null,
            8,
            ["categories", "blog-categories"]
          ),
          [[Ft, a.shownItems.categories && t.categories.length]]
        ),
        I(
          "a",
          {
            class: "block-blog-list-item__content",
            href: a.post.slug,
            onClick:
              n[2] || (n[2] = Ie((s) => e.$emit("post-click"), ["prevent"])),
          },
          [
            ue(
              I(
                "h3",
                { class: "font-primary block-blog-list-item__title" },
                J(a.post.meta.title),
                513
              ),
              [[Ft, a.shownItems.title]]
            ),
            ue(
              I(
                "p",
                { class: "block-blog-list-item__description font-secondary" },
                J(a.post.meta.description),
                513
              ),
              [[Ft, a.shownItems.description]]
            ),
            Ee(
              t.BlockBlogListItemMeta,
              Ge(
                {
                  authorName: a.authorName,
                  minutesAmount: a.post.minutesToRead,
                  date: t.getFormattedNumericDate(a.post.date),
                  showAvatar: a.shownItems.avatar,
                  showName: a.shownItems.authorFullName,
                  showDate: a.shownItems.date,
                  showMinutes: a.shownItems.minutesToRead,
                },
                { "blog-reading-time-text": a.blogReadingTimeText }
              ),
              null,
              16,
              ["blog-reading-time-text"]
            ),
          ],
          8,
          Zv
        ),
      ],
      16
    )
  );
}
const Jv = oe(jv, [
    ["render", Xv],
    ["__scopeId", "data-v-d6576b2a"],
  ]),
  eh = "Show all posts",
  gs = 46,
  ps = 24,
  th = {
    __name: "BlockBlogList",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      posts: { type: Object, default: () => ({}) },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    emits: ["post-click"],
    setup(e, { expose: n, emit: a }) {
      n(), st((y) => ({ "2251a3f7": m.value, f64549e6: l.value }));
      const t = e,
        o = a,
        i = L(0),
        r = L(null),
        s = L(!1),
        l = u(() => Number.parseInt(t.data.settings.postColumnCount, 10)),
        m = u(() => `${gs}px`),
        g = u(() => t.data.settings.blogTitleFontSize || ps),
        d = u(() => {
          const {
              categories: y,
              showAllPosts: D,
              showWithoutCategories: C,
            } = t.data.settings,
            M = D
              ? t.posts
              : Object.fromEntries(
                  Object.entries(t.posts).filter(([, N]) => {
                    const R = y.some((G) => N.categories.includes(G));
                    return (C && N.categories.length === 0) || R;
                  })
                );
          return r.value
            ? Object.fromEntries(
                Object.entries(M).filter(([, N]) =>
                  N.categories.includes(r.value)
                )
              )
            : M;
        }),
        p = u(() =>
          Object.values(d.value).sort(
            (y, D) => Date.parse(D.date) - Date.parse(y.date)
          )
        ),
        f = u(() =>
          p.value.slice(
            (i.value > 0 ? i.value - 1 : 0) * t.data.settings.postsPerPage,
            i.value * t.data.settings.postsPerPage
          )
        ),
        b = u(() =>
          Math.ceil(Object.keys(d.value).length / t.data.settings.postsPerPage)
        ),
        S = () => {
          const y = new URLSearchParams(window.location.search),
            D = Number.parseInt(y.get("page"), 10) || 1;
          D !== i.value && (i.value = D);
        },
        T = (y) => {
          (i.value = y), (s.value = !0);
          const D = new URL(window.location);
          D.searchParams.set("page", i.value),
            window.history.pushState(null, "", D.toString()),
            tr({ linkToSection: `#${t.blockId}` });
        };
      Ne(f, (y) => {
        y.length === 0 && i.value > 1 && (i.value -= 1);
      }),
        Ne(r, () => {
          s.value = !0;
        }),
        De(() => {
          const y = new URLSearchParams(window.location.search),
            D = Number.parseInt(y.get("page"), 10) || 1;
          i.value !== D && (i.value = D),
            window.addEventListener("popstate", () => {
              S();
            });
        }),
        Tt(() => {
          window.removeEventListener("popstate", S);
        });
      const w = {
        SHOW_ALL_POSTS_LABEL: eh,
        BLOG_LIST_PADDING_X: gs,
        props: t,
        emit: o,
        currentPage: i,
        filteredCategoryId: r,
        isAnimationActive: s,
        postColumnCount: l,
        blogListPaddingXCssVar: m,
        BLOG_TITLE_FONT_SIZE_FALLBACK: ps,
        blogTitleTextSize: g,
        postsToRender: d,
        sortedPosts: p,
        currentPageItems: f,
        pageCount: b,
        handleBrowserNavigationPageChange: S,
        setCurrentPage: T,
        get scrollToSection() {
          return tr;
        },
        ZyroPagination: El,
        BlockBlogListItem: Jv,
        ref: L,
        onMounted: De,
        onBeforeUnmount: Tt,
        computed: u,
        watch: Ne,
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  },
  ah = ["id"],
  nh = { key: 0, class: "block-blog-list__filter" },
  oh = { key: 2, class: "block-blog-list__empty-block" };
function rh(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    h(
      "div",
      { id: a.blockId, ref: "blogList", class: "block-blog-list" },
      [
        t.filteredCategoryId
          ? (c(),
            h("div", nh, [
              Ae(J(a.blogCategories[t.filteredCategoryId].name) + " ", 1),
              I(
                "button",
                {
                  class: "block-blog-list__filter-button",
                  onClick:
                    n[0] || (n[0] = (s) => (t.filteredCategoryId = null)),
                },
                J(t.SHOW_ALL_POSTS_LABEL)
              ),
            ]))
          : O("", !0),
        t.currentPageItems.length
          ? (c(),
            h(
              "div",
              {
                key: 1,
                class: Z([
                  "block-blog-list__list",
                  { "block-blog-list__list--one-col": t.postColumnCount === 1 },
                ]),
              },
              [
                (c(!0),
                h(
                  pe,
                  null,
                  ke(t.currentPageItems, (s, l) =>
                    ue(
                      (c(),
                      W(
                        t.BlockBlogListItem,
                        {
                          key: `post-${l}`,
                          post: s,
                          "author-name": s.meta.authorName,
                          "cover-object-fit":
                            a.data.settings.styles["cover-object-fit"],
                          "shown-items": a.data.settings.shownItems,
                          "blog-categories": a.blogCategories,
                          "is-animation-active": t.isAnimationActive,
                          "blog-reading-time-text": a.blogReadingTimeText,
                          "blog-title-text-size": t.blogTitleTextSize,
                          onFilterCategory:
                            n[1] || (n[1] = (m) => (t.filteredCategoryId = m)),
                          onPostClick: (m) => t.emit("post-click", s),
                        },
                        {
                          "block-blog-list-item-overlay": fe(() => [
                            ee(
                              e.$slots,
                              "block-blog-list-overlay",
                              { post: s },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "post",
                          "author-name",
                          "cover-object-fit",
                          "shown-items",
                          "blog-categories",
                          "is-animation-active",
                          "blog-reading-time-text",
                          "blog-title-text-size",
                          "onPostClick",
                        ]
                      )),
                      [[r, "blog-list-item"]]
                    )
                  ),
                  128
                )),
              ],
              2
            ))
          : (c(),
            h("div", oh, [
              ee(e.$slots, "block-blog-list-empty-block", {}, void 0, !0),
            ])),
        Ee(
          t.ZyroPagination,
          {
            class: "block-blog-list__pagination",
            "current-page": t.currentPage,
            "page-count": t.pageCount,
            onChangePage: t.setCurrentPage,
          },
          null,
          8,
          ["current-page", "page-count"]
        ),
      ],
      8,
      ah
    )),
    [[r, "builder-section-blog"]]
  );
}
const ih = oe(th, [
    ["render", rh],
    ["__scopeId", "data-v-759d547e"],
  ]),
  sh = re({
    name: "BlockBlogListProviderUser",
    components: { BlockBlogList: ih },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: jt },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      } = Qe();
      return {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      };
    },
    computed: {
      publishedBlogPages() {
        return Object.fromEntries(
          Object.entries(this.pages).filter(
            ([, e]) => e.type === rr && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([n, a]) => {
            const t = Aa(a.coverImageOrigin, a.coverImagePath, this.siteId, {
              width: vr,
              height: Gv,
            });
            return [
              n,
              {
                id: n,
                ...a,
                coverImageSrcset: t,
                slug: `/${e ? "" : `${this.currentLocale}/`}${a.slug}`,
              },
            ];
          })
        );
      },
    },
  });
function lh(e, n, a, t, o, i) {
  const r = Be("BlockBlogList");
  return (
    c(),
    W(
      r,
      {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText,
      },
      null,
      8,
      ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text"]
    )
  );
}
const uh = oe(sh, [["render", lh]]),
  ch = re({ props: { columnCount: { type: Number, default: 3 } } }),
  qr = (e) => (Ot("data-v-c0f30deb"), (e = e()), Lt(), e),
  dh = { class: "skeleton-loader" },
  mh = qr(() =>
    I("div", { class: "skeleton-loader__image-placeholder" }, null, -1)
  ),
  gh = qr(() => I("div", { class: "skeleton-loader__text" }, null, -1)),
  ph = qr(() => I("div", { class: "skeleton-loader__text" }, null, -1)),
  vh = [mh, gh, ph];
function hh(e, n, a, t, o, i) {
  return (
    c(),
    h("div", dh, [
      (c(!0),
      h(
        pe,
        null,
        ke(
          e.columnCount,
          (r) => (c(), h("div", { key: r, class: "skeleton-loader__item" }, vh))
        ),
        128
      )),
    ])
  );
}
const fh = oe(ch, [
    ["render", hh],
    ["__scopeId", "data-v-c0f30deb"],
  ]),
  yh = re({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...At(this.textColorVars) };
      },
    },
  }),
  bh = I(
    "svg",
    {
      class: "product-list-empty-state__icon",
      width: "41",
      height: "40",
      viewBox: "0 0 41 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      I("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      I("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      I("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  );
function _h(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "product-list-empty-state", style: xe(e.computedStyles) },
      [bh, I("h6", null, J(e.emptyPageMessage), 1)],
      4
    )
  );
}
const wh = oe(yh, [["render", _h]]),
  kh = {},
  Sh = {
    width: "392",
    height: "392",
    viewBox: "0 0 392 392",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Th = Or(
    '<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>',
    2
  ),
  Ch = [Th];
function Ph(e, n) {
  return c(), h("svg", Sh, Ch);
}
const Dl = oe(kh, [["render", Ph]]),
  Ih = {
    props: {
      text: { type: String, default: "" },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...At(this.ribbonStyle) };
      },
    },
  },
  Eh = { class: "ecommerce-product-ribbon__text" };
function Dh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "ecommerce-product-ribbon", style: xe(i.computedStyles) },
      [I("p", Eh, J(a.text), 1)],
      4
    )
  );
}
const Mh = oe(Ih, [["render", Dh]]);
var ea = ((e) => (
  (e.CONTAIN = "contain"),
  (e.COVER = "cover"),
  (e.LANDSCAPE = "landscape"),
  (e.PORTRAIT = "portrait"),
  e
))(ea || {});
const Oh = re({
    __name: "ProductListItem",
    props: {
      image: { default: "" },
      title: {},
      price: { default: null },
      isCentered: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      imageDimensions: {},
      duration: {},
      productType: { default: "" },
      translations: { default: () => ({}) },
      isStoreQuantityTracked: { type: Boolean },
      quantity: {},
      isButtonEnabled: { type: Boolean, default: !1 },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      isPriceRangeShown: { type: Boolean },
      ribbon: { default: "" },
      ribbonStyle: { default: () => ({}) },
      siteId: { default: "" },
      isPurchasable: { type: Boolean },
      imageRatio: { default: ea.COVER },
    },
    emits: ["button-click"],
    setup(e, { expose: n }) {
      n(), st((p) => ({ "1ad12413": m.value }));
      const a = { [ha]: dn },
        t = e,
        o = u(() => !t.isStoreQuantityTracked || t.quantity > 0),
        i = u(() => t.buttonText || t.translations?.addToBag || "Add to bag"),
        r = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-border-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-border-color-hover`],
        })),
        s = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-background-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-background-color-hover`],
        })),
        l = u(() => ({ ...At(t.buttonStyle) })),
        m = u(() => {
          switch (t.imageRatio) {
            case ea.COVER:
            case ea.LANDSCAPE:
            case ea.PORTRAIT:
              return "cover";
            default:
              return "contain";
          }
        }),
        g = u(() =>
          t.imageRatio === ea.PORTRAIT || t.imageRatio === ea.LANDSCAPE
            ? "none"
            : ""
        ),
        d = {
          CUSTOM_ATTRIBUTES: a,
          props: t,
          isInStock: o,
          blockButtonText: i,
          buttonBorderColor: r,
          buttonBackgroundColor: s,
          computedStyles: l,
          objectFit: m,
          placeholderPreserveAspectRatio: g,
          GridButton: Ya,
          get PRODUCT_TYPE_BOOKING() {
            return Rt;
          },
          get formatPrice() {
            return Sa;
          },
          ProductImage: fo,
          ProductImagePlaceholder: Dl,
          ProductRibbon: Mh,
        };
      return (
        Object.defineProperty(d, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  }),
  Lh = { class: "product-list-item__content" },
  Bh = { class: "product-list-item__title" },
  Ah = { key: 0, class: "product-list-item__price-wrapper" },
  xh = { key: 0, class: "product-list-item__price-range" },
  Rh = { key: 0, class: "product-list-item__price-content" },
  Nh = { key: 1, class: "product-list-item__duration" },
  Hh = { key: 1, class: "product-list-item__text" };
function $h(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      Ge(
        {
          class: [
            "product-list-item",
            { "product-list-item--centered": a.isCentered },
          ],
          style: t.computedStyles,
        },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        I("div", Lh, [
          ue(
            (c(),
            h(
              "div",
              {
                class: Z(
                  `product-list-item__image-wrapper product-list-item__image-wrapper--${a.imageRatio}`
                ),
              },
              [
                a.image
                  ? (c(),
                    W(
                      t.ProductImage,
                      {
                        key: 0,
                        src: a.image,
                        alt: a.title,
                        class: "product-list-item__image",
                        "is-eager": a.isEager,
                        width: a.imageDimensions.width,
                        height: a.imageDimensions.height,
                        "site-id": a.siteId,
                        "object-fit": t.objectFit,
                        "enable-srcset": "",
                        "is-lossless": !0,
                      },
                      null,
                      8,
                      [
                        "src",
                        "alt",
                        "is-eager",
                        "width",
                        "height",
                        "site-id",
                        "object-fit",
                      ]
                    ))
                  : (c(),
                    W(
                      t.ProductImagePlaceholder,
                      {
                        key: 1,
                        preserveAspectRatio: t.placeholderPreserveAspectRatio,
                        class: "product-list-item__image",
                      },
                      null,
                      8,
                      ["preserveAspectRatio"]
                    )),
                a.ribbon
                  ? (c(),
                    W(
                      t.ProductRibbon,
                      { key: 2, text: a.ribbon, "ribbon-style": a.ribbonStyle },
                      null,
                      8,
                      ["text", "ribbon-style"]
                    ))
                  : O("", !0),
              ],
              2
            )),
            [[r, "product-list-section-item-image"]]
          ),
          ue((c(), h("h6", Bh, [Ae(J(a.title), 1)])), [
            [r, "product-list-section-item-title"],
          ]),
          a.price
            ? ue(
                (c(),
                h("div", Ah, [
                  t.isInStock
                    ? (c(),
                      h(
                        pe,
                        { key: 0 },
                        [
                          I("p", null, [
                            a.isPriceRangeShown && !a.price.sale_amount
                              ? (c(), h("span", xh, J(a.translations.from), 1))
                              : O("", !0),
                            I(
                              "span",
                              {
                                class: Z({
                                  "product-list-item__price":
                                    a.price.sale_amount,
                                }),
                              },
                              J(
                                t.formatPrice({
                                  amount: a.price.amount,
                                  currency: a.price.currency,
                                })
                              ),
                              3
                            ),
                          ]),
                          a.price.sale_amount
                            ? (c(),
                              h("p", Rh, [
                                a.isPriceRangeShown
                                  ? (c(),
                                    h(
                                      pe,
                                      { key: 0 },
                                      [Ae(J(a.translations.from), 1)],
                                      64
                                    ))
                                  : O("", !0),
                                Ae(
                                  " " +
                                    J(
                                      t.formatPrice({
                                        amount: a.price.sale_amount,
                                        currency: a.price.currency,
                                      })
                                    ),
                                  1
                                ),
                              ]))
                            : O("", !0),
                          a.productType === t.PRODUCT_TYPE_BOOKING
                            ? (c(), h("p", Nh, J(a.duration), 1))
                            : O("", !0),
                        ],
                        64
                      ))
                    : (c(), h("p", Hh, J(a.translations.soldOut), 1)),
                ])),
                [[r, "product-list-section-item-price"]]
              )
            : O("", !0),
        ]),
        a.isButtonEnabled && a.isPurchasable
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: Z([
                  "product-list-item__button-wrapper",
                  {
                    "product-list-item__button-wrapper--hidden": !t.isInStock,
                    "product-list-item__button-wrapper--with-hover":
                      a.buttonDisplay === "hover",
                  },
                ]),
                onClick: n[1] || (n[1] = Ie(() => {}, ["prevent", "stop"])),
              },
              [
                ue(
                  Ee(
                    t.GridButton,
                    {
                      type: a.buttonType,
                      content: t.blockButtonText,
                      class: Z([
                        "product-list-item__button",
                        `product-list-item__button--${a.buttonType}`,
                      ]),
                      "tag-name": "button",
                      "border-width": a.buttonBorderWidth,
                      "border-color": t.buttonBorderColor.normal,
                      "border-color-hover": t.buttonBorderColor.hover,
                      "background-color": t.buttonBackgroundColor.normal,
                      "background-color-hover": t.buttonBackgroundColor.hover,
                      onClick: n[0] || (n[0] = (s) => e.$emit("button-click")),
                    },
                    null,
                    8,
                    [
                      "type",
                      "content",
                      "class",
                      "border-width",
                      "border-color",
                      "border-color-hover",
                      "background-color",
                      "background-color-hover",
                    ]
                  ),
                  [[r, "productlistsection-btn-addtobag"]]
                ),
              ],
              2
            ))
          : O("", !0),
      ],
      16
    )
  );
}
const Uh = oe(Oh, [
    ["render", $h],
    ["__scopeId", "data-v-6dd73b92"],
  ]),
  hr = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t < o ? n : a;
    }),
  Vh = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t > o ? n : a;
    }),
  Jn = 24,
  Yh = re({
    __name: "BlockEcommerceProductList",
    props: {
      blockId: {},
      products: {},
      productPages: { default: () => ({}) },
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      isProductListShown: { type: Boolean, default: !0 },
      isLoading: { type: Boolean },
      isEager: { type: Boolean },
      columnCount: { default: 3 },
      productsPerPage: { default: 9 },
      translations: {},
      productIds: { default: () => [] },
      productCategoryId: { default: "" },
      isButtonEnabled: { type: Boolean },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      ribbonStyle: { default: () => ({}) },
      isProductListItemLinkDisabled: { type: Boolean },
      siteId: {},
      variantsQuantity: {},
      imageRatio: { default: ea.COVER },
    },
    emits: ["product-click", "button-click", "page-changed"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = _c(),
        r = L(1),
        s = L(!1),
        l = u(() => `store-page-${t.blockId}`),
        m = u(() => Math.ceil(t.productIds.length / t.productsPerPage)),
        g = u(() => ({ [xn]: s.value ? An : null })),
        d = u(() => (r.value > m.value ? m.value : r.value < 1 ? 1 : r.value)),
        p = u(() => (d.value - 1) * t.productsPerPage),
        f = u(() => p.value + t.productsPerPage),
        b = u(() => t.productIds.slice(p.value, f.value)),
        S = u(() => {
          const B = Object.values(t.products),
            U = B.filter((j) => b.value.includes(j.id));
          return U.length ? U : B.slice(p.value, f.value);
        }),
        T = u(
          () =>
            t.translations.onlineStoreNoProducts ||
            "No publicly visible products"
        ),
        w = () => {
          const U =
              new URLSearchParams(window.location.search).get(l.value) || "1",
            j = Number.parseInt(U, 10);
          j !== r.value && (r.value = j);
        };
      De(() => {
        const U =
            new URLSearchParams(window.location.search).get(l.value) || "1",
          j = Number.parseInt(U, 10);
        j !== r.value && ((r.value = j), o("page-changed", b.value)),
          window.addEventListener("popstate", () => {
            w();
          });
      }),
        Tt(() => {
          window.removeEventListener("popstate", w);
        });
      const y = u(() => t.blockStyle?.textAlign === "center"),
        D = u(() => {
          const B = (t.columnCount - 1) * Jn,
            U = Cc - B,
            j = Math.floor(U / t.columnCount);
          switch (t.imageRatio) {
            case ea.LANDSCAPE:
              return { width: j, height: j * 0.75 };
            case ea.PORTRAIT:
              return { width: j * 0.75, height: j };
            default:
              return { width: j };
          }
        }),
        C = u(() => ({
          "--content-max-width": `${
            t.columnCount * D.value.width + (t.columnCount - 1) * Jn
          }px`,
          "--image-max-width": `${D.value.width}px`,
          "--image-max-height": D.value.height ? `${D.value.height}px` : "",
          "--gap-size": `${Jn}px`,
          ...At(t.textColorVars),
        })),
        M = async (B) => {
          (s.value = !1),
            (r.value = B),
            o("page-changed", b.value),
            await Ct(),
            (s.value = !0);
          const U = document.getElementById(t.blockId),
            j = U?.getBoundingClientRect();
          (j && j.top >= 0 && j.bottom <= window.innerHeight) ||
            U?.scrollIntoView({ behavior: "smooth" });
        },
        N = (B) => Object.values(t.productPages).find((U) => U.productId === B),
        P = {
          GAP_SIZE: Jn,
          props: t,
          emit: o,
          route: i,
          currentPage: r,
          isAnimationActive: s,
          blockStorePageQuery: l,
          pageCount: m,
          customAttributes: g,
          modifiedCurrentPage: d,
          startIndex: p,
          endIndex: f,
          targetIds: b,
          currentPageProducts: S,
          emptyPageMessage: T,
          handleBrowserNavigationPageChange: w,
          isCentered: y,
          imageDimensions: D,
          computedStyles: C,
          handlePageChange: M,
          getItemProductPage: N,
          getItemProductPageTo: (B) => {
            if (t.isProductListItemLinkDisabled) return i;
            const U = N(B);
            return U ? { path: `/${U.slug}` } : { path: "/" };
          },
          getSmallestProductPrice: (B) =>
            En(B) ? hr(B).prices[0] : B.variants[0].prices[0],
          getProductImage: (B) => (En(B) && hr(B).image_url) || B.thumbnail,
          ListSkeletonLoader: fh,
          ZyroPagination: El,
          ProductListEmptyState: wh,
          ProductListItem: Uh,
          get getFormattedBookingDuration() {
            return Wr;
          },
          get isProductPriceRangeShown() {
            return En;
          },
          get getFullProductQuantity() {
            return Pl;
          },
        };
      return (
        Object.defineProperty(P, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        P
      );
    },
  }),
  Fh = ["id"],
  Wh = { key: 1, ref: "productList", class: "block-product-list" },
  qh = { class: "block-product-list__content" };
function Gh(e, n, a, t, o, i) {
  const r = Be("RouterLink");
  return (
    c(),
    h(
      "div",
      {
        id: a.blockId,
        class: "block-product-list-wrapper",
        style: xe(t.computedStyles),
      },
      [
        a.isLoading
          ? (c(),
            W(
              t.ListSkeletonLoader,
              { key: 0, "column-count": a.columnCount },
              null,
              8,
              ["column-count"]
            ))
          : a.isProductListShown
          ? (c(),
            h(
              "div",
              Wh,
              [
                I("div", qh, [
                  (c(!0),
                  h(
                    pe,
                    null,
                    ke(
                      t.currentPageProducts,
                      (s, l) => (
                        c(),
                        W(
                          r,
                          {
                            key: `product-${l}-${s.id}`,
                            to: t.getItemProductPageTo(s.id),
                            class: "block-product-list__link",
                          },
                          {
                            default: fe(() => [
                              Ee(
                                t.ProductListItem,
                                Ge(t.customAttributes, {
                                  image: t.getProductImage(s),
                                  title: s.title,
                                  ribbon: s.ribbon_text,
                                  price: t.getSmallestProductPrice(s),
                                  "is-centered": t.isCentered,
                                  "is-eager": a.isEager && l === 0,
                                  duration: t.getFormattedBookingDuration(
                                    s,
                                    a.translations
                                  ),
                                  "image-dimensions": t.imageDimensions,
                                  "image-ratio": a.imageRatio,
                                  "is-store-quantity-tracked":
                                    s.variants[0].manage_inventory,
                                  "is-price-range-shown":
                                    t.isProductPriceRangeShown(s),
                                  quantity: t.getFullProductQuantity({
                                    product: s,
                                    variantsQuantity: a.variantsQuantity,
                                  }),
                                  "product-type": s.type.value,
                                  translations: a.translations,
                                  "is-button-enabled": a.isButtonEnabled,
                                  "button-display": a.buttonDisplay,
                                  "button-text": a.buttonText,
                                  "button-style": a.buttonStyle,
                                  "button-type": a.buttonType,
                                  "button-border-width": a.buttonBorderWidth,
                                  "ribbon-style": a.ribbonStyle,
                                  "is-purchasable": s.purchasable ?? !0,
                                  "site-id": a.siteId,
                                  onClick: (m) => e.$emit("product-click", s),
                                  onButtonClick: (m) =>
                                    e.$emit("button-click", s),
                                }),
                                null,
                                16,
                                [
                                  "image",
                                  "title",
                                  "ribbon",
                                  "price",
                                  "is-centered",
                                  "is-eager",
                                  "duration",
                                  "image-dimensions",
                                  "image-ratio",
                                  "is-store-quantity-tracked",
                                  "is-price-range-shown",
                                  "quantity",
                                  "product-type",
                                  "translations",
                                  "is-button-enabled",
                                  "button-display",
                                  "button-text",
                                  "button-style",
                                  "button-type",
                                  "button-border-width",
                                  "ribbon-style",
                                  "is-purchasable",
                                  "site-id",
                                  "onClick",
                                  "onButtonClick",
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                Ee(
                  t.ZyroPagination,
                  {
                    "current-page": t.currentPage,
                    "page-count": t.pageCount,
                    class: "block-product-list__pagination",
                    color: "var(--body-color)",
                    onChangePage: n[0] || (n[0] = (s) => t.handlePageChange(s)),
                  },
                  null,
                  8,
                  ["current-page", "page-count"]
                ),
              ],
              512
            ))
          : (c(),
            W(
              t.ProductListEmptyState,
              {
                key: 2,
                "text-color-vars": a.textColorVars,
                "empty-page-message": t.emptyPageMessage,
              },
              null,
              8,
              ["text-color-vars", "empty-page-message"]
            )),
      ],
      12,
      Fh
    )
  );
}
const jh = oe(Yh, [
    ["render", Gh],
    ["__scopeId", "data-v-b1d3d8e3"],
  ]),
  vs = (e, { productPages: n, isStoreTypeZyro: a, products: t }) => {
    const o = u(() => {
        let D;
        return (
          a.value
            ? (D = t.value?.filter((C) =>
                Object.values(n.value).find((M) => M.productId === C.id)
              ))
            : (D = t.value),
          e.data.productCategoryId
            ? ((D = D.filter((C) =>
                C.product_collections.some(
                  (M) => M.collection_id === e.data.productCategoryId
                )
              )),
              D?.sort((C, M) => {
                const N = C.product_collections.find(
                    (Q) => Q.collection_id === e.data.productCategoryId
                  ),
                  R = M.product_collections.find(
                    (Q) => Q.collection_id === e.data.productCategoryId
                  );
                return N.order - R.order;
              }))
            : D?.sort((C, M) => C.title.localeCompare(M.title))
        );
      }),
      i = u(() => e.data.settings?.styles),
      r = u(() => e.data.textColorVars),
      s = u(() => e.data.columnCount),
      l = u(() => e.data.productCategoryId),
      m = u(() => e.data.productIds),
      g = u(() => e.data.isButtonEnabled ?? !1),
      d = u(() => e.data.buttonDisplay),
      p = u(() => e.data.buttonText),
      f = u(() => e.data.buttonStyle),
      b = u(() => e.data.buttonType),
      S = u(() => e.data.buttonBorderWidth),
      T = u(() => e.data.ribbonStyle),
      w = u(() => e.data.imageRatio),
      y = u(() => e.data.productsPerPage || kv[s.value || Cl]);
    return {
      productList: o,
      textColorVars: r,
      blockStyle: i,
      columnCount: s,
      productsPerPage: y,
      productIds: m,
      productCategoryId: l,
      isButtonEnabled: g,
      buttonDisplay: d,
      buttonText: p,
      buttonStyle: f,
      buttonType: b,
      buttonBorderWidth: S,
      ribbonStyle: T,
      imageRatio: w,
    };
  },
  zh = {
    __name: "BlockEcommerceProductListProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: jt },
      blocks: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = Qe(),
        {
          products: o,
          isStoreTypeZyro: i,
          productPages: r,
          isShoppingCartOpen: s,
          shoppingCartItems: l,
          variantsQuantity: m,
          isLoading: g,
          fetchProducts: d,
          setShoppingCartOpen: p,
          setShoppingCartItems: f,
          setIsCheckoutLoading: b,
          setSelectedBookingId: S,
        } = Nt(),
        {
          openEcommerceModal: T,
          closeEcommerceModal: w,
          setProductPreviewData: y,
        } = xt(),
        { initiateCheckout: D } = tn(),
        {
          productList: C,
          blockStyle: M,
          textColorVars: N,
          columnCount: R,
          productsPerPage: Q,
          productIds: G,
          productCategoryId: P,
          isButtonEnabled: B,
          buttonDisplay: U,
          buttonText: j,
          buttonStyle: V,
          buttonType: E,
          buttonBorderWidth: Y,
          ribbonStyle: $,
          imageRatio: z,
        } = vs(a, { productPages: r, isStoreTypeZyro: i, products: o }),
        k = L(!1),
        v = u(() => !!C.value?.length),
        F = u(() => g.value || !k.value),
        q = (x) => {
          d(x);
        },
        te = async (x) => {
          if (a.isInPreviewMode) {
            T("EcommerceMessageButtonDisabled");
            return;
          }
          if (x.options.length) {
            const ae = Object.values(r.value).find(
                (_e) => _e.productId === x.id
              ),
              se = Object.keys(a.blocks)
                .filter((_e) => a.blocks[_e].type === "BlockEcommerceProduct")
                .find((_e) => ae.blocks.includes(_e));
            if (!se) {
              if (!ae) {
                window.location.assign("/");
                return;
              }
              window.location.assign(`/${ae.slug}`);
              return;
            }
            y(a.blocks[se]), T("EcommerceProductPreview");
            return;
          }
          const _ = [{ ...x, variants: [x.variants[0]] }];
          if ((await w(), x.type.value === Rt)) {
            S(x.id), T("EcommerceBookingEventSelect");
            return;
          }
          if (a.isCartVisible) {
            if ((f([...l.value, ..._]), s.value)) return;
            p(!0);
          } else
            b(!0),
              await D(_).then(() => {
                b(!1);
              });
        };
      De(() => {
        k.value = !0;
      });
      const X = {
        props: a,
        siteId: t,
        products: o,
        isStoreTypeZyro: i,
        productPages: r,
        isShoppingCartOpen: s,
        shoppingCartItems: l,
        variantsQuantity: m,
        isEcommerceLoading: g,
        fetchProducts: d,
        setShoppingCartOpen: p,
        setShoppingCartItems: f,
        setIsCheckoutLoading: b,
        setSelectedBookingId: S,
        openEcommerceModal: T,
        closeEcommerceModal: w,
        setProductPreviewData: y,
        initiateCheckout: D,
        productList: C,
        blockStyle: M,
        textColorVars: N,
        columnCount: R,
        productsPerPage: Q,
        productIds: G,
        productCategoryId: P,
        isButtonEnabled: B,
        buttonDisplay: U,
        buttonText: j,
        buttonStyle: V,
        buttonType: E,
        buttonBorderWidth: Y,
        ribbonStyle: $,
        imageRatio: z,
        isClientLoaded: k,
        isProductListShown: v,
        isLoading: F,
        handlePageChange: q,
        handleButtonClick: te,
        computed: u,
        ref: L,
        onMounted: De,
        get useSiteGlobal() {
          return Qe;
        },
        get isAppPrerendering() {
          return ul;
        },
        BlockEcommerceProductList: jh,
        get useBlockEcommerceProductList() {
          return vs;
        },
        get SYSTEM_LOCALE() {
          return jt;
        },
        get useEcommerceModal() {
          return xt;
        },
        get useEcommerce() {
          return tn;
        },
        get PRODUCT_TYPE_BOOKING() {
          return Rt;
        },
        get useEcommerceGlobal() {
          return Nt;
        },
      };
      return (
        Object.defineProperty(X, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        X
      );
    },
  };
function Kh(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.BlockEcommerceProductList,
      {
        "block-id": a.blockId,
        "block-style": t.blockStyle,
        "text-color-vars": t.textColorVars,
        "is-product-list-shown": t.isProductListShown,
        "products-per-page": t.productsPerPage,
        "column-count": t.columnCount,
        "product-pages": t.productPages,
        "product-ids": t.productIds,
        "product-category-id": t.productCategoryId,
        "is-button-enabled": t.isButtonEnabled,
        "button-display": t.buttonDisplay,
        "button-text": t.buttonText,
        "button-style": t.buttonStyle,
        "button-type": t.buttonType,
        "button-border-width": t.buttonBorderWidth,
        "is-loading": t.isLoading,
        "ribbon-style": t.ribbonStyle,
        products: t.productList,
        translations: a.ecommerceTranslations,
        "image-ratio": t.imageRatio,
        "is-eager":
          a.lcp.type === "block-ecommerce-product-list" &&
          a.lcp.id === a.blockId,
        "site-id": t.siteId,
        "variants-quantity": t.variantsQuantity,
        onPageChanged: t.handlePageChange,
        onButtonClick: t.handleButtonClick,
      },
      null,
      8,
      [
        "block-id",
        "block-style",
        "text-color-vars",
        "is-product-list-shown",
        "products-per-page",
        "column-count",
        "product-pages",
        "product-ids",
        "product-category-id",
        "is-button-enabled",
        "button-display",
        "button-text",
        "button-style",
        "button-type",
        "button-border-width",
        "is-loading",
        "ribbon-style",
        "products",
        "translations",
        "image-ratio",
        "is-eager",
        "site-id",
        "variants-quantity",
      ]
    )
  );
}
const Qh = oe(zh, [["render", Kh]]),
  Ml = ({
    move: e = { swipe: !1, drag: !1 },
    onMoveLeft: n = () => {},
    onMoveRight: a = () => {},
    onMoveUp: t = () => {},
    onMoveDown: o = () => {},
  }) => {
    let i = null,
      r = null;
    const s = e.swipe && e.drag,
      l = e.swipe || e.drag;
    function m(T) {
      return T.touches;
    }
    function g(T) {
      const w = m(T)[0];
      (i = w.clientX), (r = w.clientY);
    }
    function d(T) {
      const w = new Image();
      (w.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="),
        T.dataTransfer.setDragImage(w, 0, 0),
        (i = T.clientX),
        (r = T.clientY);
    }
    const p = (T, w) => {
        Math.abs(T) > Math.abs(w) ? (T > 0 ? n() : a()) : w > 0 ? t() : o(),
          (i = null),
          (r = null);
      },
      f = (T) => {
        if (!i || !r) return;
        const w = T.touches[0].clientX,
          y = T.touches[0].clientY,
          D = i - w,
          C = r - y;
        p(D, C);
      },
      b = (T) => {
        if (!i || !r) return;
        const w = i - T.clientX,
          y = r - T.clientY;
        p(w, y);
      };
    return {
      enableMoveEvents: (T = !0, w = null) => {
        const y = w === null ? document : w,
          D = T ? "addEventListener" : "removeEventListener";
        if (s)
          y[D]("touchstart", g, !1),
            y[D]("touchmove", f, !1),
            y[D]("dragstart", d, !1),
            y[D]("drag", b, !1);
        else if (l) {
          const C = e.swipe ? g : d,
            M = e.swipe ? f : b;
          y[D](e.swipe ? "touchstart" : "dragstart", C, !1),
            y[D](e.swipe ? "touchmove" : "drag", M, !1);
        }
      },
    };
  },
  Zh = re({
    components: { ProductImage: fo, ProductImagePlaceholder: Dl },
    props: {
      images: { type: Array, required: !0 },
      productTitle: { type: String, required: !0 },
      arrowsColor: { type: String, default: "unset" },
      navigationThumbnailArrowsColor: { type: String, default: "unset" },
      galleryPlacement: { type: String, default: "left" },
      imageRatio: { type: String, default: "unset" },
      imageBorderRadius: { type: String, default: "unset" },
      isEager: { type: Boolean, default: !1 },
      variantImage: { type: String, default: null },
      isQuickPreview: { type: Boolean, default: !1 },
      isVariantImagePreselected: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
    },
    emits: ["image-click"],
    data() {
      return {
        PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX: Ti,
        windowWidth: null,
        slideDirection: "",
        currentIndex: 0,
        imageListStartIndex: 0,
      };
    },
    computed: {
      imagePreviewAmount() {
        let e = 0;
        switch (!0) {
          case this.windowWidth < (this.isGalleryLeft ? 920 : 900):
            e = 4;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1060 : 1020):
            e = 5;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1250 : 1160):
            e = 6;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1400 : 1320):
            e = 7;
            break;
          default:
            e = this.isGalleryLeft ? 7 : 8;
        }
        return this.imageListStartIndex !== 0 &&
          this.imageListStartIndex + e < this.images.length
          ? e - 1
          : e;
      },
      isGalleryLeft() {
        return this.galleryPlacement === "left";
      },
      thumbnails() {
        return this.images.slice(
          this.imageListStartIndex,
          this.imageListStartIndex + this.imagePreviewAmount
        );
      },
      isThumbnailVisible() {
        return this.thumbnails.some(
          (e) => e.url === this.images[this.currentIndex].url
        );
      },
      isArrowsShown() {
        return this.isMoreThanOneImage && !this.isQuickPreview;
      },
      isRightImageArrowShown() {
        return this.images.length < this.imagePreviewAmount
          ? !1
          : this.imageListStartIndex + this.imagePreviewAmount <
              this.images.length;
      },
      isMoreThanOneImage() {
        return this.images.length > 1;
      },
      imageMaxWidth() {
        return this.isQuickPreview ? tc : ac;
      },
      carouselStyle() {
        return {
          "--image-max-width": `${this.imageMaxWidth}px`,
          "--image-max-width-left": `${nc}px`,
          "--image-max-width-small": `${Ti}px`,
          "--image-object-fit": this.imageRatio,
          "--image-border-radius":
            this.imageRatio === "cover" ? this.imageBorderRadius : 0,
          "--image-position":
            this.imageRatio === "cover" ? "absolute" : "relative",
          "--arrow-color": this.arrowsColor,
          "--thumbnail-arrow-color": this.navigationThumbnailArrowsColor,
        };
      },
    },
    watch: {
      variantImage() {
        this.setVariantImage(),
          this.isThumbnailVisible || this.presetThumbnailPosition();
      },
    },
    mounted() {
      (this.windowWidth = window.innerWidth),
        window.addEventListener("resize", this.resizeEventHandler),
        this.isVariantImagePreselected && this.setVariantImage(),
        this.enableCarouselMoveEvents(!0);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.resizeEventHandler),
        this.enableCarouselMoveEvents(!1);
    },
    methods: {
      resizeEventHandler() {
        (this.windowWidth = window.innerWidth),
          this.imagePreviewAmount < this.images.length &&
            this.presetThumbnailPosition();
      },
      presetThumbnailPosition() {
        this.images.length - this.currentIndex < this.imagePreviewAmount
          ? (this.imageListStartIndex =
              this.images.length - this.imagePreviewAmount)
          : (this.imageListStartIndex = this.currentIndex);
      },
      isImageMatch(e) {
        return this.thumbnails[e].url === this.images[this.currentIndex].url;
      },
      handleThumbnailClick(e) {
        this.currentIndex = this.images.findIndex(
          (n) => n.url === this.thumbnails[e].url
        );
      },
      goToNextSlide() {
        (this.slideDirection = "right"),
          (this.currentIndex =
            this.currentIndex === this.images.length - 1
              ? 0
              : this.currentIndex + 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex + this.imagePreviewAmount ===
            this.images.length
              ? (this.imageListStartIndex = 0)
              : (this.presetThumbnailPosition(),
                this.imagePreviewAmount !== this.thumbnails.length &&
                  this.presetThumbnailPosition()));
      },
      goToPreviousSlide() {
        (this.slideDirection = "left"),
          (this.currentIndex =
            this.currentIndex === 0
              ? this.images.length - 1
              : this.currentIndex - 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex === 0
              ? (this.imageListStartIndex =
                  this.images.length - this.imagePreviewAmount)
              : this.presetThumbnailPosition());
      },
      moveImageListRight() {
        const e = this.imagePreviewAmount;
        this.imageListStartIndex += 1;
        const n = this.imagePreviewAmount;
        e !== n && this.isRightImageArrowShown && this.moveImageListRight();
      },
      moveImageListLeft() {
        this.imageListStartIndex -= 1;
      },
      enableCarouselMoveEvents(e) {
        if (!this.isMoreThanOneImage) return;
        const { enableMoveEvents: n } = Ml({
          move: { drag: !1, swipe: !0 },
          onMoveLeft: () => this.goToNextSlide(),
          onMoveRight: () => this.goToPreviousSlide(),
        });
        n(e, this.$refs.carouselRef);
      },
      setVariantImage() {
        const e = this.images.findIndex((n) => n.url === this.variantImage);
        e > -1 && (this.currentIndex = e);
      },
    },
  }),
  Xh = I(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--left" },
    null,
    -1
  ),
  Jh = [Xh],
  ef = I(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--right" },
    null,
    -1
  ),
  tf = [ef],
  af = ["onClick"],
  nf = { class: "product-carousel__dots-wrapper" },
  of = ["onClick"];
function rf(e, n, a, t, o, i) {
  const r = Be("ProductImage"),
    s = Be("ProductImagePlaceholder"),
    l = je("qa");
  return (
    c(),
    h(
      "div",
      {
        class: Z([
          "product-carousel",
          { "product-carousel--left": e.isGalleryLeft },
        ]),
        style: xe(e.carouselStyle),
      },
      [
        I(
          "div",
          {
            ref: "carouselRef",
            class: Z([
              "product-carousel__image-wrapper",
              {
                "product-carousel__image-wrapper--contain":
                  e.imageRatio === "contain",
              },
            ]),
          },
          [
            e.isArrowsShown
              ? (c(),
                h(
                  pe,
                  { key: 0 },
                  [
                    ue(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--left",
                          onClick:
                            n[0] ||
                            (n[0] = (...m) =>
                              e.goToPreviousSlide && e.goToPreviousSlide(...m)),
                        },
                        Jh
                      )),
                      [[l, "product-carousel-button-prev"]]
                    ),
                    ue(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--right",
                          onClick:
                            n[1] ||
                            (n[1] = (...m) =>
                              e.goToNextSlide && e.goToNextSlide(...m)),
                        },
                        tf
                      )),
                      [[l, "product-carousel-button-next"]]
                    ),
                  ],
                  64
                ))
              : O("", !0),
            e.images.length
              ? (c(),
                W(
                  It,
                  {
                    key: 1,
                    name: `slide-${e.slideDirection}`,
                    mode: "out-in",
                    class: "product-carousel__image-content",
                  },
                  {
                    default: fe(() => [
                      (c(),
                      W(
                        r,
                        {
                          key: e.images[e.currentIndex].url,
                          src: e.images[e.currentIndex].url,
                          alt: e.productTitle,
                          class:
                            "product-carousel__image product-carousel__main-image",
                          "is-eager": e.isEager,
                          "object-fit": e.imageRatio,
                          width: e.imageMaxWidth,
                          height: e.imageMaxWidth,
                          "enable-srcset": "",
                          onClick:
                            n[2] ||
                            (n[2] = (m) =>
                              e.$emit("image-click", e.currentIndex)),
                        },
                        null,
                        8,
                        [
                          "src",
                          "alt",
                          "is-eager",
                          "object-fit",
                          "width",
                          "height",
                        ]
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name"]
                ))
              : (c(),
                W(s, {
                  key: 2,
                  class: "product-carousel__image product-carousel__main-image",
                })),
          ],
          2
        ),
        e.isMoreThanOneImage
          ? (c(),
            h(
              pe,
              { key: 0 },
              [
                e.isQuickPreview
                  ? O("", !0)
                  : (c(),
                    h(
                      "div",
                      {
                        key: 0,
                        class: Z([
                          "product-carousel__image-list",
                          {
                            "product-carousel__image-list-left":
                              e.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        e.imageListStartIndex !== 0
                          ? ue(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 0,
                                  class: Z([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--left":
                                        !e.isGalleryLeft,
                                      "product-carousel__image-arrow--top":
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    n[3] ||
                                    (n[3] = (...m) =>
                                      e.moveImageListLeft &&
                                      e.moveImageListLeft(...m)),
                                },
                                null,
                                2
                              )),
                              [[l, "product-carousel-image-button-left"]]
                            )
                          : O("", !0),
                        I(
                          "div",
                          {
                            class: Z({
                              "product-carousel__image-list-element-wrapper-left":
                                e.isGalleryLeft,
                            }),
                          },
                          [
                            (c(!0),
                            h(
                              pe,
                              null,
                              ke(
                                e.thumbnails,
                                (m, g) => (
                                  c(),
                                  h(
                                    "button",
                                    {
                                      key: `image-${g}-${m.url}`,
                                      class: Z([
                                        "product-carousel__image-list-element",
                                        {
                                          "product-carousel__image-list-element--active":
                                            e.isImageMatch(g),
                                        },
                                      ]),
                                      onClick: (d) => e.handleThumbnailClick(g),
                                    },
                                    [
                                      Ee(
                                        r,
                                        {
                                          src: m.url,
                                          alt: e.productTitle,
                                          class: "product-carousel__image",
                                          "is-eager": e.isEager,
                                          "object-fit": e.imageRatio,
                                          "site-id": e.siteId,
                                          width:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                          height:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                        },
                                        null,
                                        8,
                                        [
                                          "src",
                                          "alt",
                                          "is-eager",
                                          "object-fit",
                                          "site-id",
                                          "width",
                                          "height",
                                        ]
                                      ),
                                    ],
                                    10,
                                    af
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        e.isRightImageArrowShown
                          ? ue(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 1,
                                  class: Z([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--right":
                                        !e.isGalleryLeft,
                                      "product-carousel__image-arrow--bottom":
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    n[4] ||
                                    (n[4] = (...m) =>
                                      e.moveImageListRight &&
                                      e.moveImageListRight(...m)),
                                },
                                null,
                                2
                              )),
                              [[l, "product-carousel-image-button-right"]]
                            )
                          : O("", !0),
                      ],
                      2
                    )),
                I("div", nf, [
                  (c(!0),
                  h(
                    pe,
                    null,
                    ke(
                      e.images,
                      (m, g) => (
                        c(),
                        h(
                          "button",
                          {
                            key: `image-dot-${g}`,
                            class: "product-carousel__dot-button",
                            onClick: (d) => (e.currentIndex = g),
                          },
                          [
                            I(
                              "span",
                              {
                                class: Z([
                                  "product-carousel__dot",
                                  {
                                    "product-carousel__dot--active":
                                      g === e.currentIndex,
                                  },
                                ]),
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          of
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            ))
          : O("", !0),
      ],
      6
    )
  );
}
const sf = oe(Zh, [["render", rf]]),
  lf = re({
    __name: "OptionSelect",
    props: {
      title: {},
      labelKey: { default: "value" },
      options: { default: () => ({}) },
      value: { default: "" },
    },
    emits: ["set-value"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = a,
        i = {
          emit: t,
          updateSelectedValue: (r) => {
            const s = r.target?.value;
            t("set-value", s);
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  uf = { class: "option-select" },
  cf = { class: "option-select__label" },
  df = { class: "option-select__select-wrapper" },
  mf = ["value"],
  gf = ["value"];
function pf(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", uf, [
      I("p", cf, J(a.title), 1),
      I("div", df, [
        ue(
          (c(),
          h(
            "select",
            {
              value: a.value,
              class: "option-select__select",
              onChange: n[0] || (n[0] = (s) => t.updateSelectedValue(s)),
            },
            [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  a.options,
                  (s, l) => (
                    c(),
                    h(
                      "option",
                      { key: `option-${l}`, value: s.id },
                      J(s[a.labelKey]),
                      9,
                      gf
                    )
                  )
                ),
                128
              )),
            ],
            40,
            mf
          )),
          [[r, "product-section-select-button"]]
        ),
      ]),
    ])
  );
}
const vf = oe(lf, [
    ["render", pf],
    ["__scopeId", "data-v-4f73632f"],
  ]),
  hf = {
    props: {
      imageBorderRadius: { type: String, default: "0" },
      textAlign: { type: String, default: "" },
    },
    computed: {
      computedStyles() {
        return { "--image-border-radius": this.imageBorderRadius };
      },
    },
  },
  Ol = (e) => (Ot("data-v-56d737b7"), (e = e()), Lt(), e),
  ff = Ol(() => I("div", { class: "skeleton-loader__image" }, null, -1)),
  yf = Ol(() =>
    I(
      "div",
      { class: "skeleton-loader__title skeleton-loader__text" },
      null,
      -1
    )
  );
function bf(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "skeleton-loader", style: xe(i.computedStyles) },
      [
        ff,
        I(
          "div",
          {
            class: Z([
              "skeleton-loader__wrapper",
              { "skeleton-loader__wrapper--center": a.textAlign === "center" },
            ]),
          },
          [
            yf,
            (c(),
            h(
              pe,
              null,
              ke(10, (r) =>
                I("div", { key: r, class: "skeleton-loader__text" })
              ),
              64
            )),
          ],
          2
        ),
      ],
      4
    )
  );
}
const _f = oe(hf, [
    ["render", bf],
    ["__scopeId", "data-v-56d737b7"],
  ]),
  wf = re({
    name: "QuantityPicker",
    props: {
      qaSelector: { type: String, default: "" },
      isStockAvailable: { type: Boolean, default: !0 },
      quantity: { type: Number, required: !0 },
      size: { type: Number, default: 48 },
      fontSize: { type: Number, default: 16 },
      isCartStyle: { type: Boolean, default: !1 },
      isInputDisabled: { type: Boolean, default: !1 },
      isLimitReached: { type: Boolean, default: !1 },
    },
    emits: ["quantity-change"],
    data() {
      return { inputValue: this.quantity };
    },
    computed: {
      computedStyles() {
        return {
          "--size": `${this.size}px`,
          "--font-size": `${this.fontSize}px`,
        };
      },
      isIncreaseDisabled() {
        return !this.isStockAvailable || this.isLimitReached;
      },
    },
    watch: {
      quantity(e) {
        this.inputValue = e;
      },
    },
    methods: {
      handleQuantityInput(e) {
        const n = e.target?.value;
        if (n.match(Oc)) this.$emit("quantity-change", Number(e.target.value));
        else if (n === "") return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === "" &&
          (this.$emit("quantity-change", 1), (this.inputValue = 1));
      },
    },
  }),
  kf = ["disabled"],
  Sf = ["disabled"];
function Tf(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "span",
      {
        class: Z([
          "quantity-picker",
          { "quantity-picker--cart-style": e.isCartStyle },
        ]),
        style: xe(e.computedStyles),
      },
      [
        ue(
          (c(),
          h(
            "button",
            {
              class: Z([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              onClick:
                n[0] ||
                (n[0] = (s) => e.$emit("quantity-change", e.quantity - 1)),
            },
            [Ae(" - ")],
            2
          )),
          [[r, `${e.qaSelector}-btn-decrease`]]
        ),
        ue(
          I(
            "input",
            {
              "onUpdate:modelValue": n[1] || (n[1] = (s) => (e.inputValue = s)),
              disabled: e.isInputDisabled,
              class: Z([
                "quantity-picker__amount",
                { "quantity-picker__amount--borderless": e.isCartStyle },
              ]),
              onInput:
                n[2] ||
                (n[2] = (...s) =>
                  e.handleQuantityInput && e.handleQuantityInput(...s)),
              onBlur:
                n[3] ||
                (n[3] = (...s) =>
                  e.handleEmptyInput && e.handleEmptyInput(...s)),
            },
            null,
            42,
            kf
          ),
          [
            [Ks, e.inputValue],
            [r, `${e.qaSelector}-text-qty`],
          ]
        ),
        ue(
          (c(),
          h(
            "button",
            {
              class: Z([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              disabled: e.isIncreaseDisabled,
              onClick:
                n[4] ||
                (n[4] = (s) => e.$emit("quantity-change", e.quantity + 1)),
            },
            [Ae(" + ")],
            10,
            Sf
          )),
          [[r, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Ll = oe(wf, [
    ["render", Tf],
    ["__scopeId", "data-v-9766ec29"],
  ]),
  $o = 5,
  yn = 1,
  Cf = re({
    __name: "BlockEcommerceProduct",
    props: {
      blockId: {},
      productData: {},
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      blockButtonText: { default: "" },
      blockButtonStyle: { default: () => ({}) },
      blockButtonType: { default: "primary" },
      blockButtonBorderWidth: { default: 0 },
      navigationArrowsColor: { default: "" },
      navigationThumbnailArrowsColor: { default: "" },
      galleryPlacement: { default: "" },
      imageRatio: { default: "cover" },
      imageBorderRadius: { default: "0%" },
      isLoading: { type: Boolean, default: !1 },
      isCheckoutLoading: { type: Boolean, default: !1 },
      canAddToCart: { type: Function, default: () => !0 },
      isEager: { type: Boolean, default: !1 },
      translations: {},
      quantifiedCartItemsList: { default: () => [] },
      isQuantityPickerEnabled: { type: Boolean },
      productPages: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      siteId: {},
      shoppingCartItems: { default: () => [] },
      variantsQuantity: {},
      currentPageType: { default: "default" },
    },
    emits: ["buy-button-click", "click-more", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(), st((_) => ({ a6b208e6: g.value }));
      const t = { [ha]: dn },
        o = e,
        i = a,
        r = L(1),
        s = L(""),
        l = L(!1),
        m = L(ma),
        g = u(() => `${zt}px`),
        d = u(() => o.currentPageType === nl),
        p = u(() => ({
          normal:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color`
            ],
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color-hover`
            ],
        })),
        f = u(() => ({
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-border-color-hover`
            ],
          normal:
            o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`],
        })),
        b = u(() => o.blockStyle?.textAlign),
        S = u(() => o.productData),
        T = u(() =>
          S.value.options.length
            ? S.value.options.map((_) => ({
                ..._.values.filter(
                  (ae, ve, se) =>
                    se.findIndex((_e) => _e.value === ae.value) === ve
                ),
              }))
            : []
        ),
        w = u(() => m.value?.variants[0]),
        y = u(
          () =>
            o.productData.purchasable === void 0 || o.productData.purchasable
        ),
        D = (_) => {
          const ae = w.value?.options.find(
            (ve) => ve.option_id === T.value[_][0].option_id
          );
          return Object.values(T.value[_]).find((ve) => ae?.value === ve.value)
            ?.id;
        },
        C = u(() =>
          m.value.id ? w.value?.prices[0] : S.value?.variants[0].prices[0]
        ),
        M = u(
          () =>
            o.quantifiedCartItemsList.find(
              (_) => _.product.variants[0].id === w.value?.id
            )?.quantity || 0
        ),
        N = u(() => (o.isCartVisible ? r.value + M.value : r.value)),
        R = u(() =>
          w.value?.manage_inventory
            ? N.value <
              Tn({
                variantsQuantity: o.variantsQuantity,
                variantId: w.value?.id,
              })
            : !0
        ),
        Q = u(() => ({ ...At({ ...o.textColorVars, ...o.blockButtonStyle }) })),
        G = u(
          () => !S.value?.options.length || (S.value?.options.length && m.value)
        ),
        P = u(() => S.value?.type.value === Rt),
        B = u(
          () =>
            P.value && o.shoppingCartItems?.some((_) => _.id === S.value?.id)
        ),
        U = u(
          () => B.value || !o.canAddToCart(S.value?.id, m.value?.variants[0].id)
        ),
        j = u(() =>
          B.value
            ? `✓ ${o.translations.booked}`
            : o.blockButtonText || o.translations?.addToBag || "Add to bag"
        ),
        V = u(() => S.value?.variants[0].booking_event?.location),
        E = u(() => Wr(S.value, o.translations)),
        Y = u(
          () =>
            w.value?.manage_inventory &&
            Tn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            }) === 0
        ),
        $ = u(() => !!w.value?.manage_inventory),
        z = u(() => {
          if (!o.productPages) return "/";
          const _ = Object.values(o.productPages).find(
            (ae) => ae.productId === S.value.id
          );
          return _ ? `/${_.slug}` : "/";
        }),
        k = u(() => {
          const _ = Tn({
            variantsQuantity: o.variantsQuantity,
            variantId: w.value?.id,
          });
          return Y.value || M.value === _
            ? o.translations.outOfStock
            : `${_ <= $o ? _ : `${$o}+`} ${o.translations.inStock} `;
        }),
        v = (_) => ({ ...S.value, variants: [_] }),
        F = () => {
          if (!S.value) return ma;
          if (S.value[hl] === Vr) {
            const ae = S.value.variants.reduce((_e, me) => {
                const K = _e.prices[0]?.sale_amount || _e.prices[0]?.amount,
                  le = me.prices[0]?.sale_amount || me.prices[0]?.amount;
                return K <= le ? _e : me;
              }),
              ve = T.value.map(
                (_e) =>
                  Object.values(_e).find((me) =>
                    ae.options.some((K) => K.value === me.value)
                  ) || {}
              ),
              se = { ...ae, options: [...ve] };
            return v(se);
          }
          const _ = S.value.variants.find((ae) =>
            ae.options.every((ve) =>
              T.value.some((se) => se[0].value === ve.value)
            )
          );
          return v(_ || S.value.variants[0]);
        },
        q = () => {
          const _ = new Array(r.value).fill(m.value);
          (r.value = yn), i("buy-button-click", _);
        },
        te = (_) => {
          r.value = yn;
          const ae =
              S.value.options
                .map((me) => me.values.find((K) => K.id === _))
                .find((me) => me) || {},
            se = [
              ...w.value?.options.filter((me) => me.option_id !== ae.option_id),
              ae,
            ],
            _e = S.value.variants.find((me) =>
              me.options.every((K) =>
                se.some(
                  (le) => le.value === K.value && le.option_id === K.option_id
                )
              )
            );
          _e && (m.value = v(_e));
        },
        X = (_) => {
          const ae = w.value?.manage_inventory;
          if (((l.value = o.shoppingCartItems.length + _ >= Ka), ae)) {
            const ve = Tn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            });
            if (M.value + _ > ve || l.value) {
              const se = Math.min(
                ve - M.value,
                Ka - o.shoppingCartItems.length
              );
              r.value = se;
              return;
            }
          } else if (l.value) {
            r.value = Ka - o.shoppingCartItems.length;
            return;
          }
          if (_ <= 0) {
            r.value = yn;
            return;
          }
          r.value = _;
        };
      De(() => {
        S.value && (m.value = F());
      }),
        Ne(S, (_, ae) => {
          JSON.stringify(_) !== JSON.stringify(ae) && (m.value = F());
        }),
        Ne(m, (_, ae) => {
          (ae?.id === -1 && !_?.site_product_selection) ||
            (JSON.stringify(_) !== JSON.stringify(ae) &&
              _?.variants[0].image_url &&
              (s.value = _.variants[0].image_url));
        }),
        Ne(
          () => o.shoppingCartItems,
          (_) => {
            const ae = _?.length || 0;
            (r.value = yn), (l.value = ae + r.value >= Ka);
          },
          { immediate: !0 }
        );
      const x = {
        MAX_STOCK_AMOUNT_TO_SHOW: $o,
        DEFAULT_PICKER_VALUE: yn,
        CUSTOM_ATTRIBUTES: t,
        props: o,
        emit: i,
        selectedQuantity: r,
        variantImage: s,
        isLimitReached: l,
        selectedVariant: m,
        mobileMaxWidthCSSVar: g,
        isBlockInProductPage: d,
        buttonBackgroundColor: p,
        buttonBorderColor: f,
        textAlign: b,
        productData: S,
        uniqueOptionSelections: T,
        selectedValueVariant: w,
        isPurchasable: y,
        selectedOption: D,
        priceData: C,
        quantityInCart: M,
        totalQuantitySelected: N,
        isStockAvailable: R,
        computedStyles: Q,
        isPriceShown: G,
        isProductTypeBooking: P,
        isBookingProductInCart: B,
        isAddToCartDisabled: U,
        buttonText: j,
        location: V,
        formattedBookingDuration: E,
        isOutOfStock: Y,
        isStockInfoShown: $,
        productPagePath: z,
        stockInfoText: k,
        getProductWithSelectedVariant: v,
        getInitiallySelectedVariant: F,
        handleButtonClick: q,
        handleVariantOptionChange: te,
        handleQuantityChange: X,
        Carousel: sf,
        OptionSelect: vf,
        GridButton: Ya,
        get formatPrice() {
          return Sa;
        },
        get isProductPriceRangeShown() {
          return En;
        },
        ProductSkeletonLoader: _f,
        QuantityPicker: Ll,
      };
      return (
        Object.defineProperty(x, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        x
      );
    },
  }),
  Pf = ["id"],
  If = { class: "block-product__content-wrapper" },
  Ef = { class: "block-product__price-data-wrapper" },
  Df = { key: 0, class: "block-product__title" },
  Mf = { key: 1, class: "block-product__title" },
  Of = { class: "block-product__subtitle" },
  Lf = { class: "block-product__additional-info" },
  Bf = { key: 0, class: "block-product__price body-large" },
  Af = { key: 1, class: "block-product__duration body-large" },
  xf = { key: 3, class: "block-product__location" },
  Rf = { key: 4, class: "block-product__option-select-wrapper" },
  Nf = { key: 0, class: "block-product__stock-text" },
  Hf = { key: 0, class: "block-product__button-wrapper" },
  $f = { key: 0, class: "block-product__notice" },
  Uf = ["innerHTML"];
function Vf(e, n, a, t, o, i) {
  const r = Be("RouterLink"),
    s = je("qa");
  return (
    c(),
    h(
      "div",
      Ge(
        { id: a.blockId, class: "block-product-wrapper" },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        a.isLoading || !t.productData
          ? (c(),
            W(
              t.ProductSkeletonLoader,
              {
                key: 0,
                "image-border-radius": a.imageBorderRadius,
                "text-align": t.textAlign,
              },
              null,
              8,
              ["image-border-radius", "text-align"]
            ))
          : (c(),
            h(
              "div",
              {
                key: 1,
                class: Z([
                  "block-product",
                  {
                    "block-product--centered": t.textAlign === "center",
                    "block-product--in-preview": a.isQuickPreview,
                  },
                ]),
                style: xe(t.computedStyles),
              },
              [
                Ee(
                  t.Carousel,
                  {
                    images: t.productData.images,
                    "product-title": t.productData.title,
                    "arrows-color": a.navigationArrowsColor,
                    "navigation-thumbnail-arrows-color":
                      a.navigationThumbnailArrowsColor,
                    "gallery-placement": a.galleryPlacement,
                    "image-ratio": a.imageRatio,
                    "image-border-radius": a.imageBorderRadius,
                    "is-eager": a.isEager,
                    "site-id": a.siteId,
                    "variant-image": t.variantImage,
                    "is-quick-preview": a.isQuickPreview,
                    "is-variant-image-preselected": t.isProductPriceRangeShown(
                      t.productData
                    ),
                    onImageClick:
                      n[0] || (n[0] = (l) => e.$emit("image-click", l)),
                  },
                  null,
                  8,
                  [
                    "images",
                    "product-title",
                    "arrows-color",
                    "navigation-thumbnail-arrows-color",
                    "gallery-placement",
                    "image-ratio",
                    "image-border-radius",
                    "is-eager",
                    "site-id",
                    "variant-image",
                    "is-quick-preview",
                    "is-variant-image-preselected",
                  ]
                ),
                I("div", If, [
                  I("div", Ef, [
                    t.isBlockInProductPage
                      ? ue(
                          (c(), h("h1", Df, [Ae(J(t.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        )
                      : ue(
                          (c(), h("h3", Mf, [Ae(J(t.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        ),
                    I("h5", Of, J(t.productData.subtitle), 1),
                    Object.keys(t.priceData || {})?.length
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 2,
                            class: Z([
                              "block-product__price-wrapper",
                              {
                                "block-product__price-wrapper--with-duration":
                                  t.isProductTypeBooking,
                              },
                            ]),
                          },
                          [
                            t.isPriceShown
                              ? (c(),
                                h(
                                  "p",
                                  {
                                    key: 0,
                                    class: Z([
                                      "block-product__price body-large",
                                      {
                                        "block-product__price--sale":
                                          t.priceData.sale_amount,
                                      },
                                    ]),
                                  },
                                  J(
                                    t.formatPrice({
                                      amount: t.priceData.amount,
                                      currency: t.priceData.currency,
                                    })
                                  ),
                                  3
                                ))
                              : O("", !0),
                            I("div", Lf, [
                              t.priceData.sale_amount && t.isPriceShown
                                ? (c(),
                                  h(
                                    "p",
                                    Bf,
                                    J(
                                      t.formatPrice({
                                        amount: t.priceData.sale_amount,
                                        currency: t.priceData.currency,
                                      })
                                    ),
                                    1
                                  ))
                                : O("", !0),
                              t.isProductTypeBooking
                                ? (c(),
                                  h("p", Af, J(t.formattedBookingDuration), 1))
                                : O("", !0),
                            ]),
                          ],
                          2
                        ))
                      : O("", !0),
                    t.isProductTypeBooking
                      ? (c(), h("p", xf, J(t.location), 1))
                      : O("", !0),
                    t.productData.options.length
                      ? (c(),
                        h("div", Rf, [
                          (c(!0),
                          h(
                            pe,
                            null,
                            ke(
                              t.productData.options,
                              (l, m) => (
                                c(),
                                W(
                                  t.OptionSelect,
                                  {
                                    key: `option-${m}`,
                                    value: t.selectedOption(m),
                                    options: t.uniqueOptionSelections[m],
                                    title: l.title,
                                    class: Z([
                                      "block-product__option-select",
                                      {
                                        "block-product__option-select--centered":
                                          t.textAlign === "center",
                                      },
                                    ]),
                                    "label-key": "value",
                                    onSetValue:
                                      n[1] ||
                                      (n[1] = (g) =>
                                        t.handleVariantOptionChange(g)),
                                  },
                                  null,
                                  8,
                                  ["value", "options", "title", "class"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O("", !0),
                    !t.isProductTypeBooking &&
                    a.isQuantityPickerEnabled &&
                    t.isPurchasable
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 5,
                            class: Z([
                              "block-product__quantity-wrapper",
                              {
                                "block-product__quantity-wrapper--disabled":
                                  t.isOutOfStock || t.isAddToCartDisabled,
                              },
                            ]),
                          },
                          [
                            Ee(
                              t.QuantityPicker,
                              {
                                "qa-selector": "productpage",
                                quantity: t.selectedQuantity,
                                "is-limit-reached": t.isLimitReached,
                                "is-stock-available": t.isStockAvailable,
                                onQuantityChange: t.handleQuantityChange,
                              },
                              null,
                              8,
                              [
                                "quantity",
                                "is-limit-reached",
                                "is-stock-available",
                              ]
                            ),
                            t.isStockInfoShown
                              ? (c(), h("p", Nf, J(t.stockInfoText), 1))
                              : O("", !0),
                          ],
                          2
                        ))
                      : O("", !0),
                  ]),
                  t.isPurchasable
                    ? (c(),
                      h("div", Hf, [
                        ue(
                          Ee(
                            t.GridButton,
                            {
                              type: a.blockButtonType,
                              content: t.buttonText,
                              class: Z([
                                "block-product__button",
                                `block-product__button--${a.blockButtonType}`,
                              ]),
                              "is-loading": a.isCheckoutLoading,
                              "tag-name": "button",
                              disabled: t.isAddToCartDisabled,
                              "border-width": a.blockButtonBorderWidth,
                              "border-color": t.buttonBorderColor.normal,
                              "border-color-hover": t.buttonBorderColor.hover,
                              "background-color":
                                t.buttonBackgroundColor.normal,
                              "background-color-hover":
                                t.buttonBackgroundColor.hover,
                              onClick: t.handleButtonClick,
                            },
                            null,
                            8,
                            [
                              "type",
                              "content",
                              "class",
                              "is-loading",
                              "disabled",
                              "border-width",
                              "border-color",
                              "border-color-hover",
                              "background-color",
                              "background-color-hover",
                            ]
                          ),
                          [[s, "productsection-btn-addtobag"]]
                        ),
                      ]))
                    : O("", !0),
                  Ee(It, null, {
                    default: fe(() => [
                      t.isBookingProductInCart
                        ? (c(),
                          h("p", $f, J(a.translations.purchaseToBookAgain), 1))
                        : O("", !0),
                    ]),
                    _: 1,
                  }),
                  t.productData.description && !a.isQuickPreview
                    ? (c(),
                      h(
                        "p",
                        {
                          key: 1,
                          class: "block-product__description",
                          innerHTML: t.productData.description,
                        },
                        null,
                        8,
                        Uf
                      ))
                    : a.isQuickPreview
                    ? (c(),
                      W(
                        r,
                        {
                          key: 2,
                          to: { path: t.productPagePath },
                          class: "block-product__link body-large",
                          onClick:
                            n[2] || (n[2] = (l) => e.$emit("click-more")),
                        },
                        {
                          default: fe(() => [
                            Ae(J(a.translations.moreDetails), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ))
                    : O("", !0),
                ]),
              ],
              6
            )),
      ],
      16,
      Pf
    )
  );
}
const Yf = oe(Cf, [["render", Vf]]),
  Ff = (e) => {
    const n = u(() => e.data.product.id),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.buttonText),
      i = u(() => e.data.buttonStyle),
      r = u(() => e.data.buttonType),
      s = u(() => e.data.buttonBorderWidth),
      l = u(() => e.data.navigationArrowsColor),
      m = u(() => e.data.navigationThumbnailArrowsColor),
      g = u(() => e.data.galleryPlacement),
      d = u(() => e.data.imageRatio),
      p = u(() => e.data.imageBorderRadius),
      f = u(() => e.data.isQuantityPickerEnabled ?? !0);
    return {
      productId: n,
      blockStyle: a,
      blockButtonText: o,
      blockButtonStyle: i,
      blockButtonType: r,
      blockButtonBorderWidth: s,
      textColorVars: t,
      imageBorderRadius: p,
      navigationArrowsColor: l,
      navigationThumbnailArrowsColor: m,
      galleryPlacement: g,
      imageRatio: d,
      isQuantityPickerEnabled: f,
    };
  },
  Wf = (e) => e.replace(/<[^>]*>/g, ""),
  qf = ({ product: e, pageSlug: n }) => {
    const a = ll(window.location.hostname),
      { variants: t } = e,
      o = t.length > 1,
      i = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: e.title,
        image: e.images.map((r) => r.url),
        description: e.description ? Wf(e.description) : "",
        offers: {},
      };
    if (o) {
      const s = hr(e).prices[0],
        l = Sa({
          amount: s.sale_amount || s.amount,
          currency: s.currency,
          isPriceDisplayedWithCurrency: !1,
        }),
        g = Vh(e).prices[0],
        d = Sa({
          amount: g.sale_amount || g.amount,
          currency: g.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "AggregateOffer",
        url: `https://${a}/${n}`,
        priceCurrency: g.currency.code,
        lowPrice: l,
        highPrice: d,
      };
    } else {
      const s = t[0].prices[0],
        l = Sa({
          amount: s.sale_amount || s.amount,
          currency: s.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "Offer",
        url: `https://${a}/${n}`,
        priceCurrency: s.currency.code,
        price: l,
        availability: "https://schema.org/InStock",
      };
    }
    return i;
  },
  Gf = ({ product: e, pageSlug: n }) => {
    const a = {
      type: "element",
      tagName: "script",
      properties: {
        [oc]: `jsonld-product-${e.id}`,
        type: "application/ld+json",
      },
      children: [],
    };
    (a.children = [
      { type: "text", value: JSON.stringify(qf({ product: e, pageSlug: n })) },
    ]),
      hc(a);
  },
  jf = re({
    __name: "BlockEcommerceProductProviderUser",
    props: {
      blockId: { default: "" },
      data: {},
      lcp: { default: () => ({}) },
      ecommerceTranslations: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      productPages: { default: () => [] },
      isCartVisible: { type: Boolean, default: !1 },
      currentPageType: { default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = Qe(),
        {
          quantifiedCartItemsList: o,
          canAddToCart: i,
          isShoppingCartOpen: r,
          products: s,
          shoppingCartItems: l,
          variantsQuantity: m,
          isCheckoutLoading: g,
          isLoading: d,
          isLoaded: p,
          setShoppingCartOpen: f,
          setShoppingCartItems: b,
          setIsCheckoutLoading: S,
          setSelectedBookingId: T,
        } = Nt(),
        { openEcommerceModal: w, closeEcommerceModal: y } = xt(),
        { initiateCheckout: D } = tn(),
        { addImagesToLightbox: C } = an(),
        {
          productId: M,
          blockStyle: N,
          blockButtonText: R,
          blockButtonStyle: Q,
          blockButtonType: G,
          blockButtonBorderWidth: P,
          textColorVars: B,
          imageBorderRadius: U,
          navigationArrowsColor: j,
          navigationThumbnailArrowsColor: V,
          galleryPlacement: E,
          imageRatio: Y,
          isQuantityPickerEnabled: $,
        } = Ff(a),
        z = u(() => s.value.find((_) => _.id === M.value) || ma),
        k = u(() => a.productPages.find((_) => _.productId === z.value.id)),
        v = L(null),
        F = () => {
          setTimeout(() => {
            v.value = An;
          }, 100);
        },
        q = () => {
          r.value || f(!0);
        },
        te = (_) => {
          const ae = z.value.images.map((ve) => ({
            alt: z.value.title,
            src: ve.url,
          }));
          C(ae, _);
        },
        X = async (_) => {
          if ((await y(), z.value.type.value === Rt)) {
            T(M.value), w("EcommerceBookingEventSelect");
            return;
          }
          if (Ha() || a.isInPreviewMode) {
            w("EcommerceMessageButtonDisabled");
            return;
          }
          a.isCartVisible
            ? (b([...l.value, ..._]), q())
            : (S(!0), await D(_), S(!1));
        };
      De(() => {
        F();
      }),
        Tt(() => {
          y();
        }),
        Ne(z, () => {
          z.value &&
            k.value &&
            Gf({ product: z.value, pageSlug: k.value?.slug });
        });
      const x = {
        props: a,
        siteId: t,
        quantifiedCartItemsList: o,
        canAddToCart: i,
        isShoppingCartOpen: r,
        products: s,
        shoppingCartItems: l,
        variantsQuantity: m,
        isCheckoutLoading: g,
        isLoading: d,
        isLoaded: p,
        setShoppingCartOpen: f,
        setShoppingCartItems: b,
        setIsCheckoutLoading: S,
        setSelectedBookingId: T,
        openEcommerceModal: w,
        closeEcommerceModal: y,
        initiateCheckout: D,
        addImagesToLightbox: C,
        productId: M,
        blockStyle: N,
        blockButtonText: R,
        blockButtonStyle: Q,
        blockButtonType: G,
        blockButtonBorderWidth: P,
        textColorVars: B,
        imageBorderRadius: U,
        navigationArrowsColor: j,
        navigationThumbnailArrowsColor: V,
        galleryPlacement: E,
        imageRatio: Y,
        isQuantityPickerEnabled: $,
        product: z,
        productPage: k,
        animationState: v,
        setAnimationState: F,
        manageCartOpenState: q,
        handleImageClick: te,
        handleBuyButtonClick: X,
        get DATA_ATTRIBUTE_ANIMATION_STATE() {
          return xn;
        },
        BlockEcommerceProduct: Yf,
      };
      return (
        Object.defineProperty(x, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        x
      );
    },
  });
function zf(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.BlockEcommerceProduct,
      Ge(
        {
          blockId: a.blockId,
          blockStyle: t.blockStyle,
          blockButtonText: t.blockButtonText,
          blockButtonStyle: t.blockButtonStyle,
          blockButtonType: t.blockButtonType,
          blockButtonBorderWidth: t.blockButtonBorderWidth,
          textColorVars: t.textColorVars,
          imageBorderRadius: t.imageBorderRadius,
          navigationArrowsColor: t.navigationArrowsColor,
          navigationThumbnailArrowsColor: t.navigationThumbnailArrowsColor,
          galleryPlacement: t.galleryPlacement,
          imageRatio: t.imageRatio,
          isQuantityPickerEnabled: t.isQuantityPickerEnabled,
          quantifiedCartItemsList: t.quantifiedCartItemsList,
          isCheckoutLoading: t.isCheckoutLoading,
          productPages: a.productPages,
          isQuickPreview: a.isQuickPreview,
          currentPageType: a.currentPageType,
        },
        {
          "product-data": t.product,
          "can-add-to-cart": t.canAddToCart,
          "is-loading": (t.isLoading || !t.isLoaded) && t.productId !== -1,
          translations: a.ecommerceTranslations,
          "is-cart-visible": a.isCartVisible,
          "is-eager":
            a.lcp.type === "block-ecommerce-product" && a.lcp.id === a.blockId,
          [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: t.animationState,
          "site-id": t.siteId,
          "shopping-cart-items": t.shoppingCartItems,
          "variants-quantity": t.variantsQuantity,
          onBuyButtonClick: t.handleBuyButtonClick,
          onClickMore: t.closeEcommerceModal,
          onImageClick: t.handleImageClick,
        }
      ),
      null,
      16,
      [
        "product-data",
        "can-add-to-cart",
        "is-loading",
        "translations",
        "is-cart-visible",
        "is-eager",
        "site-id",
        "shopping-cart-items",
        "variants-quantity",
        "onClickMore",
      ]
    )
  );
}
const Bl = oe(jf, [["render", zf]]),
  Kf = re({
    components: { ZyroLoader: Yr },
    props: {
      blockId: { type: String, required: !0 },
      storeId: { type: String, required: !0 },
      isStoreLoading: { type: Boolean, required: !0 },
      showStore: { type: Boolean, required: !0 },
      loadingText: { type: String, default: "Store is loading" },
    },
  }),
  Qf = ["id"],
  Zf = { key: 0, class: "block-ecwid-store__loader-block" },
  Xf = ["id"];
function Jf(e, n, a, t, o, i) {
  const r = Be("ZyroLoader"),
    s = je("qa");
  return ue(
    (c(),
    h(
      "div",
      { id: e.blockId, class: "block-ecwid-store" },
      [
        e.isStoreLoading
          ? (c(),
            h("div", Zf, [
              Ee(r, {
                size: "44px",
                class: "block-ecwid-store__loader",
                color: "var(--color-dark)",
              }),
              Ae(" " + J(e.loadingText), 1),
            ]))
          : O("", !0),
        I(
          "div",
          { class: Z({ "height-0": e.isStoreLoading }) },
          [
            e.showStore
              ? ue(
                  (c(),
                  h(
                    "div",
                    { key: 0, id: `my-store-${e.storeId}` },
                    null,
                    8,
                    Xf
                  )),
                  [[s, "onlinestore-section-ecwid"]]
                )
              : O("", !0),
          ],
          2
        ),
      ],
      8,
      Qf
    )),
    [[s, "builder-section-onlinestore"]]
  );
}
const ey = oe(Kf, [
    ["render", Jf],
    ["__scopeId", "data-v-912878a7"],
  ]),
  bn = `${el}/ecwid-app-images`,
  hs = [
    { name: "omniva", logoSource: `${bn}/omniva.svg`, headerText: "Omniva" },
    { name: "dpd", logoSource: `${bn}/dpd.svg`, headerText: "DPD" },
    {
      name: "lpexpress",
      logoSource: `${bn}/lpexpress.svg`,
      headerText: "LPExpress",
    },
    { name: "inpost", logoSource: `${bn}/inpost.svg`, headerText: "InPost" },
    { name: "other", logoSource: `${bn}/other.svg`, headerText: "other" },
  ],
  ty = ({ headerText: e, name: n, logoSource: a }) => {
    const t = n === "other",
      o = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"];
    return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${t ? o : e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${n}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${n}" data-filter="${n}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${a}" alt="${n}" title="${n}" />
							${t ? o : ""}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`;
  },
  ay = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"]}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
  ny = { attributes: !0, childList: !0, subtree: !0 },
  oy = () => {
    let e,
      n = "",
      a,
      t,
      o,
      i;
    const r = (d) => d.some((p) => !!p?.includes(n)),
      s = () => {
        t?.forEach((d) => {
          const { type: p, element: f, title: b, description: S } = d;
          (p !== e || !r([b, S])) &&
            f.classList.add("zyro-ecwid__option--hidden");
        });
      },
      l = () => {
        a = (t?.filter((p) => {
          const { title: f, description: b, element: S, type: T } = p,
            w = r([f, b]),
            y = T === e && (w || !n.length);
          return S.classList.toggle("zyro-ecwid__option--hidden", !y), !y;
        })).length;
      },
      m = (d) => {
        let p = !1;
        t = [...d.querySelectorAll(".ec-radiogroup__item")].map((y) => {
          const D = y.querySelector(".ec-radiogroup__title").innerText,
            C = D.split(":")[0].toLowerCase(),
            M = hs.some((R) => R.name === C) ? C : "other",
            N = y.querySelector('input[type="radio"]');
          return (
            N.addEventListener("change", (R) => {
              R.target.checked && l();
            }),
            {
              title: D.toLowerCase(),
              description: y
                .querySelector(".ec-radiogroup__text")
                .innerText.toLowerCase(),
              element: y,
              cost: y.querySelector(".ec-radiogroup__data").innerText,
              selected: y.querySelector("input").checked,
              type: M,
              radio: N,
            }
          );
        });
        const b = d.closest(".ec-cart-step__section"),
          S = b.querySelector(".ec-radiogroup__wrap");
        o || b.insertAdjacentHTML("beforeend", ay()),
          b.classList.add("zyro-ecwid__radio-section"),
          b.querySelector(".zyro-ecwid__search input").addEventListener(
            "input",
            Tl((y) => {
              (n = y.target.value.toLowerCase()), l();
            }),
            30
          );
        const T = t.find((y) => y.selected),
          w = [...new Set(t.map((y) => y.type))];
        o
          ? (i?.classList.remove("ec-radiogroup--hidden"),
            o?.classList.remove("zyro-ecwid__search--hidden"),
            b
              .querySelector(
                ".ec-cart-step--delivery .ec-radiogroup:last-child"
              )
              ?.classList.add("ec-radiogroup--hidden"))
          : w.forEach((y) => {
              if (y === "other" && p) return;
              const D = hs.find((M) => M.name === y),
                C = ty(D);
              y === "other" && (p = !0),
                b
                  .querySelector(".zyro-ecwid__search")
                  .insertAdjacentHTML("afterbegin", C),
                b
                  .querySelector("[data-filter]")
                  .addEventListener("change", (M) => {
                    M.target.checked && ((e = M.target.dataset.filter), l());
                  });
            }),
          (i = b.querySelector(".ec-cart-step--delivery .ec-radiogroup")),
          (o = b.querySelector(".zyro-ecwid__search")),
          (b.querySelector("[data-filter]").checked = !0),
          (e = w[w.length - 1]),
          l(),
          S.scroll(T.element.offsetTop, 0);
      };
    return new MutationObserver(() => {
      if (!document.querySelector(".ec-cart__body")) return;
      const d = document.querySelector(
          ".ec-cart-step--delivery .ec-radiogroup__items"
        ),
        p = !!document.querySelector(
          ".ec-cart-step--delivery .ec-cart-step__icon--done"
        ),
        f = document.querySelectorAll(".zyro-ecwid__option--hidden");
      !!!document.querySelector(
        ".ec-cart-step--address .ec-cart-step__icon--done"
      ) &&
        !d &&
        o &&
        (o = null),
        !p && !t && d && m(d),
        a !== f.length && s(),
        (p || !d) &&
          (i?.classList.contains("ec-radiogroup--hidden") ||
            i?.classList.add("ec-radiogroup--hidden"),
          o?.classList.contains("zyro-ecwid__search--hidden") ||
            o?.classList.add("zyro-ecwid__search--hidden"),
          (t = null),
          n &&
            ((n = ""),
            (document.getElementById("zyro-ecwid-search").value = "")));
    }, ny);
  },
  fr = "ecwid-loaded",
  ry = () => {
    const e = document.querySelector(".ec-notices");
    if (!e) return;
    const n = document.querySelector(".builder-header")?.clientHeight ?? 0,
      a = document.querySelector(`.${il}`)?.clientHeight ?? 0,
      t = e.getBoundingClientRect().top + n + a;
    e.style.top = `${t}px`;
  },
  Al = () => window.dispatchEvent(new Event(fr)),
  iy = (e) => {
    const { setEcwidCartItems: n } = dl();
    n(e.items);
  },
  sy = () => {
    window.ecwid_initial_data.data.storeClosed && Al();
  },
  ly = () => {
    window.Ecwid.OnAPILoaded.add(sy),
      window.Ecwid.OnPageLoaded.add(Al),
      window.Ecwid.OnPageLoaded.add(ry),
      window.Ecwid.OnCartChanged.add(iy);
  },
  uy = {
    load(e, n) {
      if (
        ((window.ec = window.ec || {}),
        (window.ec.config = window.ec.config || {}),
        (window.ec.config.enable_canonical_urls = !0),
        (window.ec.config.storefrontUrls =
          window.ec.config.storefrontUrls || {}),
        (window.ec.config.storefrontUrls.cleanUrls = !0),
        (window.ec.config.storefrontUrls.queryBasedCleanUrls = !0),
        (window.ecwid_script_defer = !0),
        (window.ecwid_dynamic_widgets = !0),
        typeof Ecwid < "u")
      )
        try {
          window.Ecwid.destroy();
        } catch {}
      if (
        ((window._xnext_initialization_scripts = [
          {
            widgetType: "ProductBrowser",
            id: `my-store-${e}`,
            arg: [
              "id=productBrowser",
              "categoriesPerRow=4",
              "views=grid(4,3) list(10) table(20)",
              "categoryView=grid",
              "searchView=list",
            ],
          },
        ]),
        document.querySelector("#ecwid-script"))
      )
        window.ecwid_onBodyDone(),
          setTimeout(() => {
            !!document.getElementById(`my-store-${e}`)?.innerHTML ||
              this.load(e, n);
          }, 1e3);
      else {
        const a = document.createElement("script");
        (a.defer = !0),
          (a.type = "text/javascript"),
          (a.async = !0),
          (a.src = `https://app.ecwid.com/script.js?${e}`),
          n && n !== jt && (a.src += `&lang=${n}`),
          (a.id = "ecwid-script"),
          a.addEventListener("load", ly),
          document.body.append(a);
      }
    },
  },
  cy = "26103239",
  dy = { attributes: !0, childList: !0, subtree: !0 },
  my = (e, { ecwidStoreId: n, demoEcwidStoreId: a }) => {
    const t = L(!0),
      o = L(!1),
      i = L(!0),
      r = u(() => e.data.settings.loadingText || "Store is loading"),
      s = u(() => n.value || a.value || cy),
      l = () => {
        uy.load(s.value, e.currentLocale);
      },
      m = () => {
        (o.value = !0),
          window.addEventListener(fr, () => {
            o.value = !1;
          }),
          l();
      };
    return (
      De(() => {
        m(),
          (i.value = oy()),
          i.value.observe(document.querySelector(`#my-store-${s.value}`), dy);
      }),
      Tt(() => {
        i.value.disconnect();
      }),
      Ne(s, async (g) => {
        a.value !== g &&
          ((document.querySelector(`#my-store-${s.value}`).innerHTML = ""),
          await Ct(),
          m());
      }),
      {
        storeId: s,
        showStore: t,
        isStoreLoading: o,
        loadStore: l,
        loadingText: r,
        ECWID_LOADED_EVENT: fr,
      }
    );
  },
  gy = re({
    components: { BlockEcwidStore: ey },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: jt },
    },
    setup(e) {
      const { meta: n } = Qe(),
        a = u(() => n.value.ecwidStoreId),
        t = u(() => n.value.demoEcwidStoreId),
        {
          storeId: o,
          showStore: i,
          isStoreLoading: r,
          loadingText: s,
        } = my(e, { ecwidStoreId: a, demoEcwidStoreId: t });
      return (
        De(() => {
          window?.Ecwid?.getStorefrontLang() &&
            window.Ecwid.getStorefrontLang() !== e.currentLocale &&
            !Ha() &&
            window.location.reload();
        }),
        { storeId: o, showStore: i, isStoreLoading: r, loadingText: s }
      );
    },
  });
function py(e, n, a, t, o, i) {
  const r = Be("BlockEcwidStore");
  return (
    c(),
    W(
      r,
      {
        "store-id": e.storeId,
        "block-id": e.blockId,
        "show-store": e.showStore,
        "is-store-loading": e.isStoreLoading,
        "loading-text": e.loadingText,
      },
      null,
      8,
      ["store-id", "block-id", "show-store", "is-store-loading", "loading-text"]
    )
  );
}
const vy = oe(gy, [["render", py]]),
  hy = L({}),
  yr = "forward",
  fs = "backward",
  fy = ({
    isAutoplayEnabled: e,
    isLoopEnabled: n,
    autoplayInterval: a,
    isTransitioning: t,
    slides: o,
  } = {}) => {
    const i = L(0),
      r = L(""),
      s = L(null),
      l = u(() => o.value.length),
      m = u(() => i.value === o.value.length - 1),
      g = u(() => i.value === 0),
      d = u(() => (!m.value || n.value) && l.value > 1 && !t.value),
      p = u(() => (!g.value || n.value) && l.value > 1 && !t.value),
      f = () => {
        if (d.value) {
          if (((r.value = yr), n.value && m.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      b = () => {
        if (p.value) {
          if (((r.value = fs), n.value && g.value)) {
            i.value = o.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      S = (D) => {
        (r.value = D > i.value ? yr : fs), (i.value = D);
      },
      T = () => {
        s.value = setInterval(() => {
          (!n.value && m.value) || f();
        }, a.value * 1e3);
      },
      w = () => {
        s.value && (clearInterval(s.value), (s.value = null));
      },
      y = () => {
        w(), e.value && T();
      };
    return (
      e &&
        (e.value && T(),
        Ne(e, () => {
          e.value ? T() : w();
        }),
        Ne(Qp(), (D) => {
          D === "visible" ? T() : w();
        })),
      a &&
        Ne(a, () => {
          y();
        }),
      {
        slideshowRefs: hy,
        slideToNext: f,
        slideToPrevious: b,
        slideTo: S,
        slideDirection: r,
        slideCount: l,
        currentSlideIndex: i,
        slides: o,
        isLoopEnabled: n,
        isAutoplayEnabled: e,
        autoplayInterval: a,
        resetAutoplayInterval: y,
        setAutoplayInterval: T,
        clearAutoplayInterval: w,
        canSlideToNext: d,
        canSlideToPrevious: p,
      }
    );
  },
  Gr = re({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: yr },
      arrowColor: { type: String, default: "rgb(255, 255, 255)" },
      dotColor: { type: String, default: "rgb(255, 255, 255)" },
      isNextButtonDisabled: { type: Boolean, default: !1 },
      isPreviousButtonDisabled: { type: Boolean, default: !1 },
      isNavigationArrowsVisible: { type: Boolean, default: !0 },
      isNavigationDotsVisible: { type: Boolean, default: !0 },
      isTransitioning: { type: Boolean, default: !1 },
      desktopMinHeight: { type: Number, required: !0 },
      mobileMinHeight: { type: Number, required: !0 },
      websiteId: { type: String, default: "" },
    },
    emits: [
      "transition-start",
      "transition-end",
      "next-slide",
      "previous-slide",
      "dot-click",
    ],
    setup() {
      return { FULL_WIDTH: fa, getOptimizedSrc: rt };
    },
    computed: {
      isNextSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e = this.currentSlideIndex === this.slides.length - 1;
        return this.isNavigationArrowsVisible && !e;
      },
      isPreviousSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e =
          this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
        return this.isNavigationArrowsVisible && !e;
      },
    },
  }),
  ys = () => {
    st((e) => ({
      fd06db1c: e.desktopMinHeight,
      "1f7ca1af": e.arrowColor,
      "56d289af": e.dotColor,
      "3b9747e2": e.mobileMinHeight,
    }));
  },
  bs = Gr.setup;
Gr.setup = bs ? (e, n) => (ys(), bs(e, n)) : ys;
const xl = (e) => (Ot("data-v-f3299b46"), (e = e()), Lt(), e),
  yy = { class: "slideshow" },
  by = ["alt", "src"],
  _y = ["disabled"],
  wy = xl(() =>
    I(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  ky = [wy],
  Sy = ["disabled"],
  Ty = xl(() =>
    I(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Cy = [Ty],
  Py = { key: 2, class: "slideshow__dots" },
  Iy = ["onClick"];
function Ey(e, n, a, t, o, i) {
  return (
    c(),
    h("div", yy, [
      Ee(
        Ou,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: n[0] || (n[0] = (r) => e.$emit("transition-start")),
          onAfterLeave: n[1] || (n[1] = (r) => e.$emit("transition-end")),
        },
        {
          default: fe(() => [
            (c(!0),
            h(
              pe,
              null,
              ke(e.slides, (r, s) =>
                ue(
                  (c(),
                  h(
                    "img",
                    {
                      key: `${r.path}-${s}`,
                      alt: r.alt || "",
                      class: "slide",
                      src: e.getOptimizedSrc(r.origin, r.path, e.websiteId, {
                        width: e.FULL_WIDTH,
                      }),
                    },
                    null,
                    8,
                    by
                  )),
                  [[Ft, e.currentSlideIndex === s]]
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["name"]
      ),
      e.isNextSlideButtonVisible
        ? (c(),
          h(
            "button",
            {
              key: 0,
              class: Z([
                "slideshow-nav-button slideshow-nav-button--right",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: n[2] || (n[2] = (r) => e.$emit("next-slide")),
            },
            ky,
            10,
            _y
          ))
        : O("", !0),
      e.isPreviousSlideButtonVisible
        ? (c(),
          h(
            "button",
            {
              key: 1,
              class: Z([
                "slideshow-nav-button slideshow-nav-button--left",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: n[3] || (n[3] = (r) => e.$emit("previous-slide")),
            },
            Cy,
            10,
            Sy
          ))
        : O("", !0),
      e.isNavigationDotsVisible
        ? (c(),
          h("div", Py, [
            (c(!0),
            h(
              pe,
              null,
              ke(
                e.slides,
                (r, s) => (
                  c(),
                  h(
                    "button",
                    {
                      key: `${r.path}-${s}`,
                      class: Z([
                        "dot",
                        { "dot--current": e.currentSlideIndex === s },
                      ]),
                      onClick: (l) => e.$emit("dot-click", s),
                    },
                    null,
                    10,
                    Iy
                  )
                )
              ),
              128
            )),
          ]))
        : O("", !0),
    ])
  );
}
const Dy = oe(Gr, [
    ["render", Ey],
    ["__scopeId", "data-v-f3299b46"],
  ]),
  My = re({
    components: { BlockImageSlideshow: Dy },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: "" },
    },
    setup(e) {
      const { data: n } = ar(e),
        a = L(!1),
        t = u(() => `${n.value.desktop.minHeight}px`),
        o = u(() => `${n.value.mobile.minHeight}px`),
        i = u(() => n.value.settings.styles.navigationDotsColor),
        r = u(() => n.value.settings.styles.navigationArrowsColor),
        s = u(() => n.value.slides),
        l = u(() => n.value.isLoopEnabled),
        m = u(() => n.value.isAutoplayEnabled),
        g = u(() => n.value.autoplayInterval),
        d = u(() => n.value.isNavigationDotsVisible),
        p = u(() => n.value.isNavigationArrowsVisible),
        f = u(() => n.value.desktop.minHeight),
        b = u(() => n.value.mobile.minHeight),
        {
          slideDirection: S,
          currentSlideIndex: T,
          canSlideToNext: w,
          canSlideToPrevious: y,
          slideToNext: D,
          slideToPrevious: C,
          slideTo: M,
          resetAutoplayInterval: N,
          clearAutoplayInterval: R,
        } = fy({
          isAutoplayEnabled: m,
          isLoopEnabled: l,
          autoplayInterval: g,
          isTransitioning: a,
          slides: s,
        });
      return {
        canSlideToNext: w,
        canSlideToPrevious: y,
        desktopHeight: t,
        mobileHeight: o,
        slides: s,
        currentSlideIndex: T,
        slideDirection: S,
        isLoopEnabled: l,
        isTransitioning: a,
        resetAutoplayInterval: N,
        dotColor: i,
        arrowColor: r,
        isNavigationDotsVisible: d,
        isNavigationArrowsVisible: p,
        clearAutoplayInterval: R,
        slideToNext: D,
        slideToPrevious: C,
        slideTo: M,
        desktopMinHeight: f,
        mobileMinHeight: b,
      };
    },
  });
function Oy(e, n, a, t, o, i) {
  const r = Be("BlockImageSlideshow");
  return (
    c(),
    W(
      r,
      {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: n[0] || (n[0] = (s) => (e.isTransitioning = !0)),
        onTransitionEnd: n[1] || (n[1] = (s) => (e.isTransitioning = !1)),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo,
      },
      null,
      8,
      [
        "slides",
        "is-loop-enabled",
        "current-slide-index",
        "slide-direction",
        "dot-color",
        "is-navigation-arrows-visible",
        "is-navigation-dots-visible",
        "arrow-color",
        "is-next-button-disabled",
        "is-previous-button-disabled",
        "desktop-min-height",
        "mobile-min-height",
        "website-id",
        "onMouseenter",
        "onMouseleave",
        "onNextSlide",
        "onPreviousSlide",
        "onDotClick",
      ]
    )
  );
}
const Ly = oe(My, [["render", Oy]]),
  _s = 360,
  By = {
    __name: "BlockUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: jt },
      style: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      pageId: { type: String, required: !0 },
      currentPageType: { type: String, default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
      screenWidth: { type: Number, default: 0 },
      isFirstVisibleDesktopBlock: { type: Boolean, default: !1 },
      isFirstVisibleMobileBlock: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = L(null),
        { productPages: o, isLoaded: i } = Nt(),
        {
          blocks: r,
          elements: s,
          pages: l,
          siteId: m,
          blogReadingTimeText: g,
          blogCategories: d,
          siteId: p,
          meta: f,
        } = Qe(),
        {
          addIntersectionObserver: b,
          observe: S,
          intersectionObserver: T,
          animationClass: w,
          shouldMountAnimationsInPreview: y,
        } = nn({ data: a.data }),
        D = u(() => a.currentLocale),
        C = u(() => a.screenWidth <= Cn),
        M = u(() =>
          a.data.desktop?.isHidden
            ? a.isInPreviewMode
              ? a.screenWidth > Cn
              : !0
            : !1
        ),
        N = u(() =>
          a.data.mobile?.isHidden ? (a.isInPreviewMode ? C.value : !0) : !1
        ),
        R = u(() => ({ ...a.style, ...At(a.data?.settings?.styles) })),
        Q = u(() => {
          if (!a.data?.settings?.styles["m-block-padding"]) return !1;
          const { top: $, bottom: z } = en(
            a.data.settings.styles["m-block-padding"]
          );
          return Number.parseInt($, 10) + Number.parseInt(z, 10) > _s;
        }),
        G = u(() =>
          rt(a.data.background.origin, a.data.background.path, p.value, {
            width: fa,
          })
        ),
        P = u(() =>
          ya(a.data.background.origin, a.data.background.path, p.value, {
            isMobileFullScreen: Q.value,
          })
        ),
        B = u(() => a.data.slot === "footer"),
        U = u(() => {
          if (a.data.type !== Ci) return null;
          const [, $] = Object.entries(l.value).find(
            ([z, k]) => k.type === rr && z === a.pageId
          );
          return $;
        }),
        j = u(() => f.value.stripePublicApiKey),
        V = u(() => a.data.type === Pi),
        E = async () => {
          b(), (!V.value || i.value) && (await S(t.value));
        };
      De(async () => {
        await E();
      }),
        Tt(() => T.value?.disconnect()),
        Ne([D, i], async ([$, z], [k]) => {
          (z || $ !== k) && V.value && (await S(t.value));
        }),
        Ne(y, async ($) => {
          $ && (await E());
        });
      const Y = {
        MOBILE_FULL_HEIGT_THRESHOLD: _s,
        props: a,
        blockRef: t,
        productPages: o,
        isEcommerceProductsLoaded: i,
        siteBlocks: r,
        siteElements: s,
        siteLanguagePages: l,
        websiteId: m,
        blogReadingTimeText: g,
        blogCategories: d,
        siteId: p,
        meta: f,
        addIntersectionObserver: b,
        observe: S,
        intersectionObserver: T,
        animationClass: w,
        shouldMountAnimationsInPreview: y,
        currentSiteLocale: D,
        isMobile: C,
        isDesktopBlockHidden: M,
        isMobileBlockHidden: N,
        computedStyles: R,
        isMobileFullScreen: Q,
        backgroundSrc: G,
        backgroundSrcSet: P,
        isBlockFooter: B,
        currentBlogPage: U,
        stripePublicApiKey: j,
        isEcommerceBlock: V,
        initiateAnimations: E,
        computed: u,
        onMounted: De,
        onBeforeUnmount: Tt,
        ref: L,
        watch: Ne,
        BlockBackground: Hr,
        BlockBlogHeader: pd,
        get PAGE_TYPE_BLOG() {
          return rr;
        },
        get SYSTEM_LOCALE() {
          return jt;
        },
        get BLOCK_TYPE_LAYOUT() {
          return rc;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return Ci;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return ic;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return sc;
        },
        get BLOCK_TYPE_ECWID() {
          return lc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return uc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return Pi;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return Cn;
        },
        get FULL_WIDTH() {
          return fa;
        },
        get getFullWidthSrcset() {
          return ya;
        },
        get getOptimizedSrc() {
          return rt;
        },
        get useSiteGlobal() {
          return Qe;
        },
        get objectToCssVariables() {
          return At;
        },
        get parseCSSSides() {
          return en;
        },
        BlockLayoutProviderUser: Rv,
        BlockBlogListProviderUser: uh,
        BlockEcommerceProductListProviderUser: Qh,
        BlockEcommerceProductProviderUser: Bl,
        BlockEcwidStoreProviderUser: vy,
        BlockImageSlideshowProviderUser: Ly,
        get useSiteEngineAnimations() {
          return nn;
        },
        get useEcommerceGlobal() {
          return Nt;
        },
      };
      return (
        Object.defineProperty(Y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Y
      );
    },
  },
  Ay = ["id"];
function xy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        id: a.id,
        ref: "blockRef",
        class: Z([
          "block",
          [
            t.animationClass,
            {
              "block--footer": t.isBlockFooter,
              "block--desktop-hidden": t.isDesktopBlockHidden,
              "block--mobile-hidden": t.isMobileBlockHidden,
              "block--desktop-first-visible": a.isFirstVisibleDesktopBlock,
              "block--mobile-first-visible": a.isFirstVisibleMobileBlock,
            },
          ],
        ]),
        style: xe(t.computedStyles),
      },
      [
        a.data.background
          ? (c(),
            W(
              t.BlockBackground,
              {
                key: 0,
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                color: a.data.background.color,
                gradient: a.data.background.gradient,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-eager":
                  a.lcp.type === "block-background" && a.lcp.id === a.id,
                "is-fixed": a.data.attachment === "fixed",
                alt: a.data.background && a.data.background.alt,
                "is-in-preview-mode": t.props.isInPreviewMode,
                "is-mobile": t.isMobile,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "color",
                "gradient",
                "src",
                "srcset",
                "is-eager",
                "is-fixed",
                "alt",
                "is-in-preview-mode",
                "is-mobile",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_LAYOUT
          ? (c(),
            W(
              t.BlockLayoutProviderUser,
              {
                key: 1,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                components: t.siteElements,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "site-language-pages": t.siteLanguagePages,
                "stripe-public-api-key": t.stripePublicApiKey,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "components",
                "current-locale",
                "is-cart-visible",
                "site-language-pages",
                "stripe-public-api-key",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_HEADER
          ? (c(),
            W(
              t.BlockBlogHeader,
              {
                key: 2,
                data: a.data,
                "current-blog-page": t.currentBlogPage,
                "blog-categories": t.blogCategories,
                "blog-reading-time-text": t.blogReadingTimeText,
              },
              null,
              8,
              [
                "data",
                "current-blog-page",
                "blog-categories",
                "blog-reading-time-text",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_LIST
          ? (c(),
            W(
              t.BlockBlogListProviderUser,
              {
                key: 3,
                data: a.data,
                "block-id": a.id,
                "current-locale": a.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_IMAGE_SLIDESHOW
          ? (c(),
            W(
              t.BlockImageSlideshowProviderUser,
              {
                key: 4,
                data: a.data,
                "block-id": a.id,
                "website-id": t.websiteId,
              },
              null,
              8,
              ["data", "block-id", "website-id"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECWID
          ? (c(),
            W(
              t.BlockEcwidStoreProviderUser,
              {
                key: 5,
                data: a.data,
                "block-id": a.id,
                "current-locale": a.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT
          ? (c(),
            W(
              t.BlockEcommerceProductProviderUser,
              {
                key: 6,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                "product-pages": t.productPages,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "current-page-type": a.currentPageType,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "product-pages",
                "is-cart-visible",
                "ecommerce-translations",
                "current-page-type",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST
          ? (c(),
            W(
              t.BlockEcommerceProductListProviderUser,
              {
                key: 7,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                blocks: t.siteBlocks,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "blocks",
                "current-locale",
                "is-cart-visible",
                "ecommerce-translations",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
      ],
      14,
      Ay
    )
  );
}
const Ry = oe(By, [
    ["render", xy],
    ["__scopeId", "data-v-2ff8e178"],
  ]),
  Ny = re({
    __name: "BlockStickyBarLayout",
    props: { blockStyles: {} },
    setup(e, { expose: n }) {
      n(),
        st((l) => ({
          c718ec72: o.value,
          "387a0b1e": A(sl),
          "720ca36e": t.value,
          "16937fe2": i.value,
        }));
      const a = e,
        t = u(() => `${zt}px`),
        o = u(() => `${sa}px`),
        i = u(() => `0 ${Pn}px`),
        r = u(() => At(a.blockStyles)),
        s = {
          props: a,
          mobileMaxWidthCSSVar: t,
          maxWidthCSSVar: o,
          tabletBlockPaddingCSSVar: i,
          computedStyles: r,
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Hy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "block-sticky-bar-layout", style: xe(t.computedStyles) },
      [ee(e.$slots, "default", {}, void 0, !0)],
      4
    )
  );
}
const $y = oe(Ny, [
    ["render", Hy],
    ["__scopeId", "data-v-a943a874"],
  ]),
  Uy = re({
    __name: "BlockStickyBarProviderUser",
    props: {
      data: {},
      components: {},
      isInPreviewMode: { type: Boolean },
      lcp: {},
      screenWidth: { default: 0 },
    },
    setup(e, { expose: n }) {
      n(), st((N) => ({ "0897617a": A(sl) }));
      const a = { [ha]: dn },
        t = e,
        { siteId: o } = Qe(),
        { layoutCSSVars: i } = ur({
          blockData: u(() => t.data),
          siteElements: u(() => t.components),
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        {
          addIntersectionObserver: r,
          observe: s,
          intersectionObserver: l,
          animationClass: m,
          shouldMountAnimationsInPreview: g,
        } = nn({
          elementData: null,
          data: t.data,
          elementId: null,
          isParentBlockFooter: !1,
        }),
        d = L(null),
        p = u(() => t.data.background?.origin || null),
        f = u(() => t.data.background?.path || null),
        b = u(() => t.screenWidth <= Cn),
        S = u(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > Cn
              : !0
            : !1
        ),
        T = u(() =>
          t.data.mobile?.isHidden ? (t.isInPreviewMode ? b.value : !0) : !1
        ),
        w = u(() => rt(p.value, f.value, o.value, { width: fa })),
        y = u(() => ya(p.value, f.value, o.value, { isMobileFullScreen: !1 })),
        D = u(() => t.data.attachment === "fixed"),
        C = async () => {
          r(), await s(d.value);
        };
      De(async () => {
        await C();
      }),
        Tt(() => l.value?.disconnect()),
        Ne(g, async (N) => {
          N && (await C());
        });
      const M = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        siteId: o,
        layoutCSSVars: i,
        addIntersectionObserver: r,
        observe: s,
        intersectionObserver: l,
        animationClass: m,
        shouldMountAnimationsInPreview: g,
        blockRef: d,
        backgroundOrigin: p,
        backgroundPath: f,
        isMobile: b,
        isDesktopBlockHidden: S,
        isMobileBlockHidden: T,
        backgroundSrc: w,
        backgroundSrcSet: y,
        isBlockBackgroundFixed: D,
        initiateAnimations: C,
        BlockBackground: Hr,
        BlockStickyBarLayout: $y,
        GridTextBox: wl,
      };
      return (
        Object.defineProperty(M, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        M
      );
    },
  });
function Vy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        ref: "blockRef",
        class: Z([
          "block-sticky-bar",
          [
            {
              "block-sticky-bar--desktop-hidden": t.isDesktopBlockHidden,
              "block-sticky-bar--mobile-hidden": t.isMobileBlockHidden,
            },
          ],
        ]),
      },
      [
        a.data.background
          ? (c(),
            W(
              t.BlockBackground,
              {
                key: 0,
                class: "block-sticky-bar__background",
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                gradient: a.data.background.gradient,
                color: a.data.background.color,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-fixed": t.isBlockBackgroundFixed,
                alt: a.data.background && a.data.background.alt,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "gradient",
                "color",
                "src",
                "srcset",
                "is-fixed",
                "alt",
              ]
            ))
          : O("", !0),
        Ee(
          t.BlockStickyBarLayout,
          {
            "block-styles": a.data.settings.styles,
            style: xe(t.layoutCSSVars),
            class: Z(t.animationClass),
          },
          {
            default: fe(() => [
              (c(!0),
              h(
                pe,
                null,
                ke(
                  a.data.items,
                  (r, s) => (
                    c(),
                    W(
                      t.GridTextBox,
                      Ge(
                        {
                          key: `sticky-element-${s}`,
                          class: "block-sticky-bar__element",
                          "text-align": "flex-start",
                          "text-align-mobile": "flex-start",
                          content: r.content,
                        },
                        t.CUSTOM_ATTRIBUTES
                      ),
                      null,
                      16,
                      ["content"]
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ["block-styles", "style", "class"]
        ),
      ],
      2
    )
  );
}
const Yy = oe(Uy, [
    ["render", Vy],
    ["__scopeId", "data-v-79325842"],
  ]),
  eo = L({}),
  Rl = ({ pagePassword: e, locale: n, pageId: a }) => {
    const t = u(() => `${a}-${n}`),
      o = u(() => !e || (e && !!eo.value[t.value]));
    return {
      isPageUnlocked: eo,
      openUnlockedPage: () => {
        eo.value = { ...eo.value, [t.value]: !0 };
      },
      isPageOpen: o,
    };
  },
  Fy = async (e) => {
    const n = new TextEncoder().encode(e),
      a = await crypto.subtle.digest("SHA-256", n);
    return [...new Uint8Array(a)]
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
  },
  Wy = {
    src: "/_astro-1716589950551/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg",
  },
  qy = re({
    __name: "PasswordPage",
    props: {
      pageId: {},
      locale: {},
      currentPageData: {},
      isCurrentPageHomepage: { type: Boolean, default: !1 },
      inPreviewMode: { type: Boolean, default: !1 },
      defaultLocale: {},
      homepageName: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = L(""),
        o = L(""),
        i = u(() => a.currentPageData?.meta?.passwordDesign ?? ""),
        r = u(() => a.currentPageData?.meta?.password ?? ""),
        s = u(
          () => a.currentPageData?.meta?.passwordHeadingText ?? "Guest Area"
        ),
        l = u(
          () =>
            a.currentPageData?.meta?.passwordSubheadingText ??
            "Please enter the password to access the page"
        ),
        m = u(() => a.currentPageData?.meta?.passwordButtonText ?? "Enter"),
        g = u(
          () =>
            a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password"
        ),
        d = u(() => a.currentPageData?.meta?.passwordBackText ?? "Back to"),
        p = u(() => i.value === cc),
        f = u(() => i.value === dc),
        { openUnlockedPage: b } = Rl({
          pagePassword: r.value,
          locale: a.locale,
          pageId: a.pageId,
        }),
        S = async () => {
          const D = await Fy(t.value);
          if (!t.value || D !== r.value) {
            o.value = "Please enter the correct password";
            return;
          }
          b();
        },
        T = u(() =>
          a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : "/"
        ),
        w = u(() => !a.inPreviewMode && !a.isCurrentPageHomepage);
      De(() => {
        document.body.style.overflow = "hidden";
      }),
        Tt(() => {
          document.body.style.overflow = "";
        });
      const y = {
        props: a,
        password: t,
        errorMessage: o,
        passwordPageStyle: i,
        currentPagePassword: r,
        passwordPageHeading: s,
        passwordPageSubheading: l,
        passwordPageButtonText: m,
        passwordPlaceholder: g,
        passwordBackText: d,
        isCalmTheme: p,
        isPopularTheme: f,
        openUnlockedPage: b,
        unlock: S,
        homepageLink: T,
        isHomepageLinkShown: w,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Ad;
        },
      };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  }),
  Gy = (e) => (Ot("data-v-5df21e4b"), (e = e()), Lt(), e),
  jy = { key: 0, class: "password-page__background-wave-wrapper" },
  zy = Gy(() =>
    I("div", { class: "password-page__background-wave" }, null, -1)
  ),
  Ky = [zy],
  Qy = ["src"],
  Zy = { key: 0, class: "password-page__icon-lock", src: Wy },
  Xy = { class: "password-page__heading" },
  Jy = { for: "password", class: "password-page__label" },
  eb = ["placeholder"],
  tb = { key: 1, class: "password-page__error-message" },
  ab = { class: "password-page__button", type: "submit" },
  nb = { key: 2, class: "password-page__homepage-link" },
  ob = ["href"];
function rb(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "main",
      {
        class: Z([
          "password-page",
          {
            "password-page--calm": t.isCalmTheme,
            "password-page--popular": t.isPopularTheme,
          },
        ]),
      },
      [
        t.isCalmTheme
          ? ue((c(), h("div", jy, Ky)), [[r, "password-page-background-calm"]])
          : O("", !0),
        t.isPopularTheme
          ? ue(
              (c(),
              h(
                "img",
                {
                  key: 1,
                  class: "password-page__background-image",
                  src: `${t.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`,
                },
                null,
                8,
                Qy
              )),
              [[r, "password-page-background-popular"]]
            )
          : O("", !0),
        I(
          "form",
          { class: "password-page__form", onSubmit: Ie(t.unlock, ["prevent"]) },
          [
            t.isCalmTheme ? (c(), h("img", Zy)) : O("", !0),
            ue((c(), h("h1", Xy, [Ae(J(t.passwordPageHeading), 1)])), [
              [r, "password-page-heading"],
            ]),
            ue((c(), h("label", Jy, [Ae(J(t.passwordPageSubheading), 1)])), [
              [r, "password-page-subheading"],
            ]),
            ue(
              I(
                "input",
                {
                  id: "password",
                  "onUpdate:modelValue":
                    n[0] || (n[0] = (s) => (t.password = s)),
                  type: "password",
                  autocomplete: "off",
                  autocapitalize: "off",
                  autocorrect: "off",
                  name: "password",
                  placeholder: t.passwordPlaceholder,
                  required: "",
                  class: Z([
                    "password-page__input",
                    { "password-page__input--error": t.errorMessage },
                  ]),
                  onBlur: n[1] || (n[1] = (s) => (t.errorMessage = "")),
                },
                null,
                42,
                eb
              ),
              [
                [Ks, t.password],
                [r, "password-page-placeholder"],
              ]
            ),
            t.errorMessage
              ? (c(), h("p", tb, J(t.errorMessage), 1))
              : O("", !0),
            ue((c(), h("button", ab, [Ae(J(t.passwordPageButtonText), 1)])), [
              [r, "password-page-button"],
            ]),
            t.isHomepageLinkShown
              ? ue(
                  (c(),
                  h("p", nb, [
                    Ae(J(t.passwordBackText) + " ", 1),
                    I(
                      "a",
                      {
                        href: t.homepageLink,
                        class: "password-page__homepage-link-text",
                      },
                      J(a.homepageName),
                      9,
                      ob
                    ),
                  ])),
                  [[r, "password-page-footer"]]
                )
              : O("", !0),
          ],
          32
        ),
      ],
      2
    )
  );
}
const ib = oe(qy, [
    ["render", rb],
    ["__scopeId", "data-v-5df21e4b"],
  ]),
  sb = {},
  lb = Or(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  ub = [lb];
function cb(e, n) {
  return (
    c(),
    h(
      "button",
      {
        class: "delete-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("handle-button-click")),
      },
      ub
    )
  );
}
const db = oe(sb, [
    ["render", cb],
    ["__scopeId", "data-v-334df6f8"],
  ]),
  mb = {},
  gb = (e) => (Ot("data-v-2f9813ef"), (e = e()), Lt(), e),
  pb = { class: "close-button" },
  vb = gb(() =>
    I(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M12 4L4 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        I("path", {
          d: "M4 4L12 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  hb = [vb];
function fb(e, n) {
  return c(), h("button", pb, hb);
}
const jr = oe(mb, [
    ["render", fb],
    ["__scopeId", "data-v-2f9813ef"],
  ]),
  yb = re({
    name: "Drawer",
    components: { CloseButton: jr },
    props: {
      placement: {
        type: String,
        default: "right",
        validator: (e) => ["right", "left"].includes(e),
      },
      width: { type: String, default: "350px" },
      alwaysShowCloseButton: { type: Boolean, default: !0 },
      isOpen: { type: Boolean, default: !1 },
      topPositionMobile: { type: String, default: "0px" },
    },
    emits: ["close-drawer"],
    setup(e, n) {
      const a = L(null);
      return (
        De(() => {
          _o(a, () => {
            n.emit("close-drawer");
          });
        }),
        { siteDrawerRef: a }
      );
    },
    computed: {
      computedStyles() {
        return {
          "--sidebar-width": this.width,
          "--sidebar-top-mobile": this.topPositionMobile,
        };
      },
    },
    methods: {
      closeDrawer() {
        this.$emit("close-drawer");
      },
    },
  }),
  bb = { class: "site-drawer__content" };
function _b(e, n, a, t, o, i) {
  const r = Be("CloseButton"),
    s = je("qa");
  return (
    c(),
    h("div", null, [
      e.isOpen
        ? (c(),
          h(
            "div",
            {
              key: 0,
              class: Z([
                "site-drawer-overlay",
                { "site-drawer-overlay--open": e.isOpen },
              ]),
              onTouchend: n[0] || (n[0] = Ie(() => {}, ["stop", "prevent"])),
            },
            null,
            34
          ))
        : O("", !0),
      Ee(
        It,
        {
          name:
            e.placement === "right"
              ? "drawer-slide-right"
              : "drawer-slide-left",
        },
        {
          default: fe(() => [
            e.isOpen
              ? (c(),
                h(
                  "aside",
                  {
                    key: 0,
                    ref: "siteDrawerRef",
                    class: Z([
                      {
                        "site-drawer--left": e.placement === "left",
                        "site-drawer--right": e.placement === "right",
                      },
                      "site-drawer",
                    ]),
                    style: xe(e.computedStyles),
                  },
                  [
                    I("div", bb, [
                      ue(
                        (c(),
                        h(
                          "span",
                          {
                            class: Z([
                              "site-drawer__close-button",
                              {
                                "site-drawer__close-button--hide-mobile":
                                  !e.alwaysShowCloseButton,
                              },
                            ]),
                            onClick:
                              n[1] ||
                              (n[1] = (...l) =>
                                e.closeDrawer && e.closeDrawer(...l)),
                          },
                          [Ee(r)],
                          2
                        )),
                        [[s, "builder-sitedrawer-btn-close"]]
                      ),
                      ee(e.$slots, "default", {}, void 0, !0),
                    ]),
                  ],
                  6
                ))
              : O("", !0),
          ]),
          _: 3,
        },
        8,
        ["name"]
      ),
    ])
  );
}
const wb = oe(yb, [
    ["render", _b],
    ["__scopeId", "data-v-12672165"],
  ]),
  ws = 90,
  kb = re({
    components: {
      Drawer: wb,
      DeleteButton: db,
      ProductImage: fo,
      QuantityPicker: Ll,
    },
    props: {
      isLoading: { type: Boolean, default: !1 },
      isShoppingCartOpen: { type: Boolean, default: !1 },
      translations: { type: Object, default: null },
      language: { type: String, default: "en" },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
      quantifiedCartItemsList: { type: Array, default: () => [] },
      products: { type: Array, default: () => [] },
      shoppingCartItems: { type: Array, default: () => [] },
      variantsQuantity: { type: Array, default: () => [] },
    },
    emits: [
      "close-shopping-cart",
      "checkout-button-click",
      "set-shopping-cart-items",
    ],
    data() {
      return {
        IMAGE_WIDTH_PX: ws,
        isHeaderVisible: !1,
        topPositionMobile: "0px",
        resizeObserver: null,
      };
    },
    computed: {
      totalPrice() {
        return this.quantifiedCartItemsList.reduce(
          (e, n) =>
            e +
            (n.product?.variants[0]?.prices[0]?.sale_amount ||
              n.product?.variants[0]?.prices[0]?.amount ||
              0) *
              n.quantity,
          0
        );
      },
      currencyCode() {
        return this.products[0]?.variants[0]?.prices[0]?.currency;
      },
      computedStyle() {
        return { "--image-width": `${ws}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= Ka;
      },
    },
    watch: {
      isShoppingCartOpen(e) {
        document.documentElement.style.overflow = e ? "hidden" : "auto";
      },
      headerHeight() {
        this.setHeaderVisibilityValues();
      },
    },
    mounted() {
      const e = document.querySelector(".block-header");
      e &&
        ((this.resizeObserver = new ResizeObserver(() => {
          this.setHeaderHeight();
        })),
        this.resizeObserver.observe(e)),
        window.addEventListener("scroll", this.setHeaderVisibilityValues);
    },
    beforeUnmount() {
      this.resizeObserver?.disconnect(),
        window.removeEventListener("scroll", this.setHeaderVisibilityValues);
    },
    methods: {
      getFormattedBookingDuration: Wr,
      formatPrice: Sa,
      isStockAvailable(e) {
        if (e.product.variants[0].manage_inventory) {
          const a =
            this.variantsQuantity.find((t) => t.id === e.product.variants[0].id)
              ?.inventory_quantity || 0;
          return e.quantity < a;
        }
        return !0;
      },
      handleQuantityChange(e, n) {
        if (e > n.quantity) {
          this.increaseQuantity(n);
          return;
        }
        this.decreaseQuantity(n);
      },
      decreaseQuantity(e) {
        const n = [...this.shoppingCartItems],
          a = this.shoppingCartItems.filter(
            (o) => o.variants[0].id === e.product.variants[0].id
          ),
          t = this.shoppingCartItems.lastIndexOf(a[a.length - 1]);
        n.splice(t, 1), this.$emit("set-shopping-cart-items", n);
      },
      increaseQuantity(e) {
        this.$emit("set-shopping-cart-items", [
          ...this.shoppingCartItems,
          e.product,
        ]);
      },
      removeProduct(e) {
        const n = this.shoppingCartItems.filter(
          (a) => a.variants[0].id !== e.variants[0].id
        );
        this.$emit("set-shopping-cart-items", n);
      },
      closeShoppingCart() {
        this.$emit("close-shopping-cart");
      },
      setHeaderVisibility() {
        this.isHeaderVisible =
          this.isHeaderSticky ||
          (this.isNavHidden
            ? !1
            : window.scrollY <= Number(this.headerHeight) * 0.4);
      },
      setTopPositionMobile() {
        const e = this.isHeaderSticky
          ? this.headerHeight
          : this.headerHeight - window.scrollY;
        this.topPositionMobile = `${
          this.isHeaderVisible ? Math.floor(e) - 1 : 0
        }px`;
      },
      setHeaderVisibilityValues() {
        this.setHeaderVisibility(), this.setTopPositionMobile();
      },
      setHeaderHeight() {
        this.headerHeight =
          document.querySelector(".block-header")?.clientHeight;
      },
      getFormattedSelectedDate(e) {
        return (
          new Date(
            e.product?.variants[0]?.booking_event?.date
          ).toLocaleDateString(this.language) || null
        );
      },
      getFormattedTime(e) {
        const n = new Date(e.product?.variants[0]?.booking_event?.time_slot),
          a = n.getTime(),
          t = new Date(a + pr(e.product)),
          o = n.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          i = t.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${o} - ${i}`;
      },
      isProductBookingType(e) {
        return e.product?.type.value === Rt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  Nl = (e) => (Ot("data-v-688c363e"), (e = e()), Lt(), e),
  Sb = { class: "cart" },
  Tb = { class: "cart__content" },
  Cb = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin",
  },
  Pb = { key: 1, class: "cart__content-title" },
  Ib = { class: "cart__list" },
  Eb = { class: "cart__title" },
  Db = { key: 0, class: "cart__text" },
  Mb = { key: 1, class: "cart__text cart__sale-price" },
  Ob = { class: "cart__text cart__duration" },
  Lb = { class: "cart__time-wrapper" },
  Bb = Nl(() =>
    I(
      "svg",
      {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        I("path", {
          d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  Ab = { class: "cart__text cart__text--lighter" },
  xb = { class: "cart__time-wrapper" },
  Rb = Nl(() =>
    I(
      "svg",
      {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        I("path", {
          d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  Nb = { class: "cart__text cart__text--lighter" },
  Hb = { key: 3, class: "cart__quantity" },
  $b = { class: "cart__quantity-title" },
  Ub = { key: 0, class: "cart__footer" },
  Vb = { class: "cart__title cart__title--with-slot" };
function Yb(e, n, a, t, o, i) {
  const r = Be("ProductImage"),
    s = Be("QuantityPicker"),
    l = Be("DeleteButton"),
    m = Be("Drawer"),
    g = je("qa");
  return (
    c(),
    W(
      m,
      {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: xe(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: fe(() => [
          I("div", Sb, [
            I("div", Tb, [
              e.quantifiedCartItemsList.length
                ? (c(), h("p", Pb, J(e.translations.shoppingBag), 1))
                : ue(
                    (c(),
                    h("p", Cb, [Ae(J(e.translations.shoppingBagEmpty), 1)])),
                    [[g, "shoppingcart-text-emptystate"]]
                  ),
              I("ul", Ib, [
                (c(!0),
                h(
                  pe,
                  null,
                  ke(
                    e.quantifiedCartItemsList,
                    (d) => (
                      c(),
                      h(
                        "li",
                        {
                          key: d.product.variants[0].id,
                          class: "cart__list-item",
                        },
                        [
                          d.product.thumbnail
                            ? (c(),
                              W(
                                r,
                                {
                                  key: 0,
                                  src: e.getProductImage(d),
                                  alt: d.product.title,
                                  class: "cart__list-item-image",
                                  width: e.IMAGE_WIDTH_PX,
                                  height: e.IMAGE_WIDTH_PX,
                                  "site-id": e.siteId,
                                  "enable-srcset": "",
                                },
                                null,
                                8,
                                ["src", "alt", "width", "height", "site-id"]
                              ))
                            : O("", !0),
                          I("div", null, [
                            ue((c(), h("p", Eb, [Ae(J(d.product.title), 1)])), [
                              [g, "shoppingcart-text-product"],
                            ]),
                            d.product.options.length
                              ? ue(
                                  (c(),
                                  h("p", Db, [
                                    Ae(J(d.product.variants[0].title), 1),
                                  ])),
                                  [[g, "shoppingcart-text-variant"]]
                                )
                              : O("", !0),
                            ue(
                              (c(),
                              h(
                                "p",
                                {
                                  class: Z([
                                    "cart__text cart__price",
                                    {
                                      "cart__price--strikethrough":
                                        d.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  Ae(
                                    J(
                                      e.formatPrice({
                                        amount:
                                          d.product.variants[0].prices[0]
                                            .amount,
                                        currency:
                                          d.product.variants[0].prices[0]
                                            .currency,
                                      })
                                    ),
                                    1
                                  ),
                                ],
                                2
                              )),
                              [[g, "shoppingcart-text-price"]]
                            ),
                            d.product.variants[0].prices[0].sale_amount
                              ? ue(
                                  (c(),
                                  h("p", Mb, [
                                    Ae(
                                      J(
                                        e.formatPrice({
                                          amount:
                                            d.product.variants[0].prices[0]
                                              .sale_amount,
                                          currency:
                                            d.product.variants[0].prices[0]
                                              .currency,
                                        })
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[g, "shoppingcart-text-saleprice"]]
                                )
                              : O("", !0),
                            e.isProductBookingType(d)
                              ? (c(),
                                h(
                                  pe,
                                  { key: 2 },
                                  [
                                    ue(
                                      (c(),
                                      h("p", Ob, [
                                        Ae(
                                          J(
                                            e.getFormattedBookingDuration(
                                              d.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[g, "shoppingcart-text-duration"]]
                                    ),
                                    I("div", Lb, [
                                      Bb,
                                      I(
                                        "p",
                                        Ab,
                                        J(e.getFormattedSelectedDate(d)),
                                        1
                                      ),
                                    ]),
                                    I("div", xb, [
                                      Rb,
                                      I("p", Nb, J(e.getFormattedTime(d)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (c(),
                                h("p", Hb, [
                                  I(
                                    "span",
                                    $b,
                                    J(e.translations.quantityShort) + ": ",
                                    1
                                  ),
                                  Ee(
                                    s,
                                    {
                                      "qa-selector": "shoppingcart",
                                      "is-cart-style": "",
                                      size: 26,
                                      "font-size": 14,
                                      quantity: d.quantity,
                                      "is-input-disabled": "",
                                      "is-limit-reached": e.isLimitReached,
                                      "is-stock-available":
                                        e.isStockAvailable(d),
                                      onQuantityChange: (p) =>
                                        e.handleQuantityChange(p, d),
                                    },
                                    null,
                                    8,
                                    [
                                      "quantity",
                                      "is-limit-reached",
                                      "is-stock-available",
                                      "onQuantityChange",
                                    ]
                                  ),
                                ])),
                          ]),
                          ue(
                            Ee(
                              l,
                              {
                                class: "cart__remove-button",
                                onHandleButtonClick: (p) =>
                                  e.removeProduct(d.product),
                              },
                              null,
                              8,
                              ["onHandleButtonClick"]
                            ),
                            [[g, "shoppingcart-btn-delete"]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e.quantifiedCartItemsList.length
              ? (c(),
                h("div", Ub, [
                  ue(
                    (c(),
                    h("p", Vb, [
                      Ae(J(e.translations.subtotal) + ": ", 1),
                      I(
                        "span",
                        null,
                        J(
                          e.formatPrice({
                            amount: e.totalPrice,
                            currency: e.currencyCode,
                          })
                        ),
                        1
                      ),
                    ])),
                    [[g, "shoppingcart-text-subtotal"]]
                  ),
                  ue(
                    (c(),
                    h(
                      "button",
                      {
                        class: Z([
                          "cart__text cart__checkout-button",
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          n[0] ||
                          (n[0] = (d) => e.$emit("checkout-button-click")),
                      },
                      [Ae(J(e.translations.checkout), 1)],
                      2
                    )),
                    [[g, "shoppingcart-btn-checkout"]]
                  ),
                ]))
              : O("", !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ["is-open", "top-position-mobile", "style", "onCloseDrawer"]
    )
  );
}
const Fb = oe(kb, [
    ["render", Yb],
    ["__scopeId", "data-v-688c363e"],
  ]),
  Wb = re({
    components: { EcommerceShoppingCart: Fb },
    props: {
      headerHeight: { type: Number, default: 0 },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentPageEcommerceBlocks: { type: Array, default: () => [] },
      currentPageEcommerceComponents: { type: Array, default: () => [] },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: n } = Qe(),
        {
          quantifiedCartItemsList: a,
          products: t,
          isShoppingCartOpen: o,
          isCheckoutLoading: i,
          shoppingCartItems: r,
          variantsQuantity: s,
          fetchProducts: l,
          setShoppingCartOpen: m,
          setShoppingCartItems: g,
          setIsCheckoutLoading: d,
        } = Nt(),
        { openEcommerceModal: p } = xt(),
        { initiateCheckout: f } = tn();
      return {
        openEcommerceModal: p,
        initiateCheckout: f,
        quantifiedCartItemsList: a,
        products: t,
        isShoppingCartOpen: o,
        isCheckoutLoading: i,
        shoppingCartItems: r,
        variantsQuantity: s,
        fetchProducts: l,
        setShoppingCartOpen: m,
        setShoppingCartItems: g,
        setIsCheckoutLoading: d,
        siteId: n,
      };
    },
    computed: {
      currentPageEcommerceElements() {
        return [
          ...this.currentPageEcommerceBlocks,
          ...this.currentPageEcommerceComponents,
        ];
      },
      productIds() {
        const n = this.currentPageEcommerceElements
          .reduce((a, t) => {
            let o = [];
            const i = new URLSearchParams(window.location.search),
              r = Number.parseInt(i.get("store-page"), 10) || 1;
            switch (t.type) {
              case "BlockEcommerceProductList":
                o = [...o, ...t.productIds.slice(0, t.productsPerPage * r)];
                break;
              case "BlockEcommerceProduct":
                o = [...o, t.product?.id];
                break;
              case "GridEcommerceButton":
                o = [...o, t.settings?.productId];
                break;
            }
            return [...a, ...o];
          }, [])
          .filter((a) => a !== -1);
        return [...new Set(n)];
      },
    },
    watch: {
      currentPageEcommerceElements: {
        async handler(e, n) {
          JSON.stringify(e) !== JSON.stringify(n) &&
            (await this.loadProducts());
        },
      },
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      async loadProducts() {
        await this.fetchProducts(this.productIds);
      },
      async initCheckout() {
        if (Ha() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCheckoutLoading ||
          (this.setIsCheckoutLoading(!0),
          await this.initiateCheckout(this.shoppingCartItems).then(() => {
            this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1);
          }));
      },
    },
  });
function qb(e, n, a, t, o, i) {
  const r = Be("EcommerceShoppingCart"),
    s = je("qa");
  return ue(
    (c(),
    W(
      r,
      {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = (l) => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems,
      },
      null,
      8,
      [
        "is-shopping-cart-open",
        "is-loading",
        "header-height",
        "is-header-sticky",
        "is-nav-hidden",
        "translations",
        "language",
        "site-id",
        "quantified-cart-items-list",
        "products",
        "shopping-cart-items",
        "variants-quantity",
        "onCheckoutButtonClick",
        "onSetShoppingCartItems",
      ]
    )),
    [[s, "user-section-zyroecommerceshoppingcart"]]
  );
}
const Gb = oe(Wb, [["render", qb]]),
  jb = re({
    components: { CloseButton: jr },
    props: {
      backgroundColor: { type: String, default: "var(--color-light)" },
      padding: { type: String, default: "16px" },
      width: { type: String, default: "auto" },
      maxWidth: { type: String, default: "unset" },
      overflow: { type: String, default: "unset" },
      height: { type: String, default: "auto" },
      mobileHeight: { type: String, default: "" },
    },
    setup() {
      const { closeEcommerceModal: e } = xt();
      return { closeEcommerceModal: e };
    },
    computed: {
      modalStyle() {
        return {
          "--modal-background-color": this.backgroundColor,
          "--padding": this.padding,
          "--width": this.width,
          "--max-width": this.maxWidth,
          "--overflow": this.overflow,
          "--height": this.height,
          "--mobile-height": this.mobileHeight || this.height,
        };
      },
    },
    mounted() {
      this.$refs.modal?.focus();
    },
    methods: {
      handleCloseModalAction() {
        this.closeEcommerceModal();
        const e = new URLSearchParams(window.location.search);
        if (!e.get("open-modal")) return;
        e.delete("open-modal"), e.delete("product");
        const n = e.toString();
        n && window.history.pushState(null, null, `?${n}`);
      },
    },
  }),
  zb = { class: "modal-wrapper" };
function Kb(e, n, a, t, o, i) {
  const r = Be("CloseButton");
  return (
    c(),
    W(
      It,
      { name: "fade" },
      {
        default: fe(() => [
          I("div", zb, [
            I("div", {
              tabindex: "-1",
              class: "modal-backdrop",
              onClick:
                n[0] ||
                (n[0] = (...s) =>
                  e.handleCloseModalAction && e.handleCloseModalAction(...s)),
            }),
            I(
              "div",
              {
                ref: "modal",
                style: xe(e.modalStyle),
                class: "modal",
                tabindex: "0",
                "aria-modal": "true",
                onKeydown:
                  n[1] ||
                  (n[1] = Oe(
                    (...s) =>
                      e.handleCloseModalAction &&
                      e.handleCloseModalAction(...s),
                    ["esc"]
                  )),
              },
              [
                Ee(
                  r,
                  {
                    class: "modal__close-button",
                    onClick: e.handleCloseModalAction,
                  },
                  null,
                  8,
                  ["onClick"]
                ),
                ee(e.$slots, "default", {}, void 0, !0),
              ],
              36
            ),
          ]),
        ]),
        _: 3,
      }
    )
  );
}
const mn = oe(jb, [
    ["render", Kb],
    ["__scopeId", "data-v-35831679"],
  ]),
  Qb = {
    __name: "EcommerceProductPreview",
    props: {
      translations: { type: Object, default: () => {} },
      isQuickPreview: { type: Boolean, default: !1 },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { productPreviewData: t } = xt(),
        { siteId: o } = Qe(),
        { productPages: i } = Nt(),
        r = u(() =>
          rt(t.value.background.origin, t.value.background.path, o.value, {
            width: fa,
          })
        ),
        s = u(() =>
          ya(t.value.background.origin, t.value.background.path, o.value, {
            isMobileFullScreen: !1,
          })
        ),
        l = {
          props: a,
          productPreviewData: t,
          siteId: o,
          productPages: i,
          backgroundSrc: r,
          backgroundSrcSet: s,
          BlockBackground: Hr,
          ModalLayout: mn,
          BlockEcommerceProductProviderUser: Bl,
          computed: u,
          get useEcommerceModal() {
            return xt;
          },
          get getFullWidthSrcset() {
            return ya;
          },
          get getOptimizedSrc() {
            return rt;
          },
          get FULL_WIDTH() {
            return fa;
          },
          get useEcommerceGlobal() {
            return Nt;
          },
          get useSiteGlobal() {
            return Qe;
          },
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  },
  Zb = { class: "ecommerce-product-preview__content-wrapper" };
function Xb(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    W(
      t.ModalLayout,
      {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview",
      },
      {
        default: fe(() => [
          ue(
            (c(),
            h("div", Zb, [
              t.productPreviewData.background
                ? (c(),
                  W(
                    t.BlockBackground,
                    {
                      key: 0,
                      "overlay-opacity":
                        t.productPreviewData.background["overlay-opacity"],
                      type: t.productPreviewData.background.current,
                      color: t.productPreviewData.background.color,
                      gradient: t.productPreviewData.background.gradient,
                      src: t.backgroundSrc,
                      srcset: t.backgroundSrcSet,
                      "is-fixed": t.productPreviewData.attachment === "fixed",
                      alt:
                        t.productPreviewData.background &&
                        t.productPreviewData.background.alt,
                      class: "ecommerce-product-preview__background",
                    },
                    null,
                    8,
                    [
                      "overlay-opacity",
                      "type",
                      "color",
                      "gradient",
                      "src",
                      "srcset",
                      "is-fixed",
                      "alt",
                    ]
                  ))
                : O("", !0),
              Ee(
                t.BlockEcommerceProductProviderUser,
                {
                  class: "ecommerce-product-preview__content",
                  "is-quick-preview": a.isQuickPreview,
                  data: t.productPreviewData,
                  "product-pages": t.productPages,
                  "is-cart-visible": a.isCartVisible,
                  "ecommerce-translations": a.translations,
                },
                null,
                8,
                [
                  "is-quick-preview",
                  "data",
                  "product-pages",
                  "is-cart-visible",
                  "ecommerce-translations",
                ]
              ),
            ])),
            [[r, "productpreview-modal"]]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const Jb = oe(Qb, [
  ["render", Xb],
  ["__scopeId", "data-v-e0753e53"],
]);
function Ht(e) {
  "@babel/helpers - typeof";
  return (
    (Ht =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    Ht(e)
  );
}
function Pe(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function be(e, n) {
  if (n.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        n.length +
        " present"
    );
}
function we(e) {
  be(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || (Ht(e) === "object" && n === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || n === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || n === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function ga(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return isNaN(t) ? new Date(NaN) : (t && a.setDate(a.getDate() + t), a);
}
function Wt(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  if (isNaN(t)) return new Date(NaN);
  if (!t) return a;
  var o = a.getDate(),
    i = new Date(a.getTime());
  i.setMonth(a.getMonth() + t + 1, 0);
  var r = i.getDate();
  return o >= r ? i : (a.setFullYear(i.getFullYear(), i.getMonth(), o), a);
}
function Hl(e, n) {
  if ((be(2, arguments), !n || Ht(n) !== "object")) return new Date(NaN);
  var a = n.years ? Pe(n.years) : 0,
    t = n.months ? Pe(n.months) : 0,
    o = n.weeks ? Pe(n.weeks) : 0,
    i = n.days ? Pe(n.days) : 0,
    r = n.hours ? Pe(n.hours) : 0,
    s = n.minutes ? Pe(n.minutes) : 0,
    l = n.seconds ? Pe(n.seconds) : 0,
    m = we(e),
    g = t || a ? Wt(m, t + a * 12) : m,
    d = i || o ? ga(g, i + o * 7) : g,
    p = s + r * 60,
    f = l + p * 60,
    b = f * 1e3,
    S = new Date(d.getTime() + b);
  return S;
}
function e_(e, n) {
  be(2, arguments);
  var a = we(e).getTime(),
    t = Pe(n);
  return new Date(a + t);
}
var t_ = {};
function la() {
  return t_;
}
function $a(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = la(),
    d = Pe(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getDay(),
    b = (f < d ? 7 : 0) + f - d;
  return p.setDate(p.getDate() - b), p.setHours(0, 0, 0, 0), p;
}
function lo(e) {
  return be(1, arguments), $a(e, { weekStartsOn: 1 });
}
function a_(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getFullYear(),
    t = new Date(0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var o = lo(t),
    i = new Date(0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  var r = lo(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function n_(e) {
  be(1, arguments);
  var n = a_(e),
    a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var t = lo(a);
  return t;
}
function uo(e) {
  var n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function ks(e) {
  be(1, arguments);
  var n = we(e);
  return n.setHours(0, 0, 0, 0), n;
}
var o_ = 864e5;
function r_(e, n) {
  be(2, arguments);
  var a = ks(e),
    t = ks(n),
    o = a.getTime() - uo(a),
    i = t.getTime() - uo(t);
  return Math.round((o - i) / o_);
}
function i_(e, n) {
  be(2, arguments);
  var a = Pe(n),
    t = a * 3;
  return Wt(e, t);
}
function zr(e, n) {
  be(2, arguments);
  var a = Pe(n);
  return Wt(e, a * 12);
}
var Kr = 6e4,
  Qr = 36e5,
  s_ = 1e3;
function $l(e) {
  return (
    be(1, arguments),
    e instanceof Date ||
      (Ht(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Dn(e) {
  if ((be(1, arguments), !$l(e) && typeof e != "number")) return !1;
  var n = we(e);
  return !isNaN(Number(n));
}
function Ss(e) {
  be(1, arguments);
  var n = we(e),
    a = Math.floor(n.getMonth() / 3) + 1;
  return a;
}
function Ul(e, n) {
  var a;
  be(1, arguments);
  var t = e || {},
    o = we(t.start),
    i = we(t.end),
    r = i.getTime();
  if (!(o.getTime() <= r)) throw new RangeError("Invalid interval");
  var s = [],
    l = o;
  l.setHours(0, 0, 0, 0);
  var m = Number((a = void 0) !== null && a !== void 0 ? a : 1);
  if (m < 1 || isNaN(m))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; l.getTime() <= r; )
    s.push(we(l)), l.setDate(l.getDate() + m), l.setHours(0, 0, 0, 0);
  return s;
}
function $n(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getMonth(),
    t = a - (a % 3);
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function l_(e) {
  be(1, arguments);
  var n = e || {},
    a = we(n.start),
    t = we(n.end),
    o = t.getTime();
  if (!(a.getTime() <= o)) throw new RangeError("Invalid interval");
  var i = $n(a),
    r = $n(t);
  o = r.getTime();
  for (var s = [], l = i; l.getTime() <= o; ) s.push(we(l)), (l = i_(l, 1));
  return s;
}
function u_(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function c_(e) {
  be(1, arguments);
  var n = we(e),
    a = new Date(0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function d_(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = la(),
    d = Pe(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getDay(),
    b = (f < d ? -7 : 0) + 6 - (f - d);
  return p.setDate(p.getDate() + b), p.setHours(23, 59, 59, 999), p;
}
function Ts(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getMonth(),
    t = a - (a % 3) + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Vl(e, n) {
  be(2, arguments);
  var a = Pe(n);
  return e_(e, -a);
}
var m_ = 864e5;
function g_(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var t = n.getTime(),
    o = a - t;
  return Math.floor(o / m_) + 1;
}
function on(e) {
  be(1, arguments);
  var n = 1,
    a = we(e),
    t = a.getUTCDay(),
    o = (t < n ? 7 : 0) + t - n;
  return a.setUTCDate(a.getUTCDate() - o), a.setUTCHours(0, 0, 0, 0), a;
}
function Yl(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getUTCFullYear(),
    t = new Date(0);
  t.setUTCFullYear(a + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = on(t),
    i = new Date(0);
  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var r = on(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function p_(e) {
  be(1, arguments);
  var n = Yl(e),
    a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var t = on(a);
  return t;
}
var v_ = 6048e5;
function Fl(e) {
  be(1, arguments);
  var n = we(e),
    a = on(n).getTime() - p_(n).getTime();
  return Math.round(a / v_) + 1;
}
function Ua(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = la(),
    d = Pe(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getUTCDay(),
    b = (f < d ? 7 : 0) + f - d;
  return p.setUTCDate(p.getUTCDate() - b), p.setUTCHours(0, 0, 0, 0), p;
}
function Zr(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = we(e),
    d = g.getUTCFullYear(),
    p = la(),
    f = Pe(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : p.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = p.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setUTCFullYear(d + 1, 0, f), b.setUTCHours(0, 0, 0, 0);
  var S = Ua(b, n),
    T = new Date(0);
  T.setUTCFullYear(d, 0, f), T.setUTCHours(0, 0, 0, 0);
  var w = Ua(T, n);
  return g.getTime() >= S.getTime()
    ? d + 1
    : g.getTime() >= w.getTime()
    ? d
    : d - 1;
}
function h_(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = la(),
    d = Pe(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    p = Zr(e, n),
    f = new Date(0);
  f.setUTCFullYear(p, 0, d), f.setUTCHours(0, 0, 0, 0);
  var b = Ua(f, n);
  return b;
}
var f_ = 6048e5;
function Wl(e, n) {
  be(1, arguments);
  var a = we(e),
    t = Ua(a, n).getTime() - h_(a, n).getTime();
  return Math.round(t / f_) + 1;
}
function ze(e, n) {
  for (var a = e < 0 ? "-" : "", t = Math.abs(e).toString(); t.length < n; )
    t = "0" + t;
  return a + t;
}
var _a = {
    y: function (n, a) {
      var t = n.getUTCFullYear(),
        o = t > 0 ? t : 1 - t;
      return ze(a === "yy" ? o % 100 : o, a.length);
    },
    M: function (n, a) {
      var t = n.getUTCMonth();
      return a === "M" ? String(t + 1) : ze(t + 1, 2);
    },
    d: function (n, a) {
      return ze(n.getUTCDate(), a.length);
    },
    a: function (n, a) {
      var t = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h: function (n, a) {
      return ze(n.getUTCHours() % 12 || 12, a.length);
    },
    H: function (n, a) {
      return ze(n.getUTCHours(), a.length);
    },
    m: function (n, a) {
      return ze(n.getUTCMinutes(), a.length);
    },
    s: function (n, a) {
      return ze(n.getUTCSeconds(), a.length);
    },
    S: function (n, a) {
      var t = a.length,
        o = n.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, t - 3));
      return ze(i, a.length);
    },
  },
  Ga = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  y_ = {
    G: function (n, a, t) {
      var o = n.getUTCFullYear() > 0 ? 1 : 0;
      switch (a) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(o, { width: "abbreviated" });
        case "GGGGG":
          return t.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return t.era(o, { width: "wide" });
      }
    },
    y: function (n, a, t) {
      if (a === "yo") {
        var o = n.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return t.ordinalNumber(i, { unit: "year" });
      }
      return _a.y(n, a);
    },
    Y: function (n, a, t, o) {
      var i = Zr(n, o),
        r = i > 0 ? i : 1 - i;
      if (a === "YY") {
        var s = r % 100;
        return ze(s, 2);
      }
      return a === "Yo"
        ? t.ordinalNumber(r, { unit: "year" })
        : ze(r, a.length);
    },
    R: function (n, a) {
      var t = Yl(n);
      return ze(t, a.length);
    },
    u: function (n, a) {
      var t = n.getUTCFullYear();
      return ze(t, a.length);
    },
    Q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "Q":
          return String(o);
        case "QQ":
          return ze(o, 2);
        case "Qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return t.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return t.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return t.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "q":
          return String(o);
        case "qq":
          return ze(o, 2);
        case "qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return t.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return t.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return t.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "M":
        case "MM":
          return _a.M(n, a);
        case "Mo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return t.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return t.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return t.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "L":
          return String(o + 1);
        case "LL":
          return ze(o + 1, 2);
        case "Lo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return t.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return t.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return t.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (n, a, t, o) {
      var i = Wl(n, o);
      return a === "wo"
        ? t.ordinalNumber(i, { unit: "week" })
        : ze(i, a.length);
    },
    I: function (n, a, t) {
      var o = Fl(n);
      return a === "Io"
        ? t.ordinalNumber(o, { unit: "week" })
        : ze(o, a.length);
    },
    d: function (n, a, t) {
      return a === "do"
        ? t.ordinalNumber(n.getUTCDate(), { unit: "date" })
        : _a.d(n, a);
    },
    D: function (n, a, t) {
      var o = g_(n);
      return a === "Do"
        ? t.ordinalNumber(o, { unit: "dayOfYear" })
        : ze(o, a.length);
    },
    E: function (n, a, t) {
      var o = n.getUTCDay();
      switch (a) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return t.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "e":
          return String(r);
        case "ee":
          return ze(r, 2);
        case "eo":
          return t.ordinalNumber(r, { unit: "day" });
        case "eee":
          return t.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return t.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return t.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return t.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "c":
          return String(r);
        case "cc":
          return ze(r, a.length);
        case "co":
          return t.ordinalNumber(r, { unit: "day" });
        case "ccc":
          return t.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return t.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return t.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return t.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (n, a, t) {
      var o = n.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (a) {
        case "i":
          return String(i);
        case "ii":
          return ze(i, a.length);
        case "io":
          return t.ordinalNumber(i, { unit: "day" });
        case "iii":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return t.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (n, a, t) {
      var o = n.getUTCHours(),
        i = o / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = Ga.noon)
          : o === 0
          ? (i = Ga.midnight)
          : (i = o / 12 >= 1 ? "pm" : "am"),
        a)
      ) {
        case "b":
        case "bb":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = Ga.evening)
          : o >= 12
          ? (i = Ga.afternoon)
          : o >= 4
          ? (i = Ga.morning)
          : (i = Ga.night),
        a)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (n, a, t) {
      if (a === "ho") {
        var o = n.getUTCHours() % 12;
        return o === 0 && (o = 12), t.ordinalNumber(o, { unit: "hour" });
      }
      return _a.h(n, a);
    },
    H: function (n, a, t) {
      return a === "Ho"
        ? t.ordinalNumber(n.getUTCHours(), { unit: "hour" })
        : _a.H(n, a);
    },
    K: function (n, a, t) {
      var o = n.getUTCHours() % 12;
      return a === "Ko"
        ? t.ordinalNumber(o, { unit: "hour" })
        : ze(o, a.length);
    },
    k: function (n, a, t) {
      var o = n.getUTCHours();
      return (
        o === 0 && (o = 24),
        a === "ko" ? t.ordinalNumber(o, { unit: "hour" }) : ze(o, a.length)
      );
    },
    m: function (n, a, t) {
      return a === "mo"
        ? t.ordinalNumber(n.getUTCMinutes(), { unit: "minute" })
        : _a.m(n, a);
    },
    s: function (n, a, t) {
      return a === "so"
        ? t.ordinalNumber(n.getUTCSeconds(), { unit: "second" })
        : _a.s(n, a);
    },
    S: function (n, a) {
      return _a.S(n, a);
    },
    X: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (a) {
        case "X":
          return Ps(r);
        case "XXXX":
        case "XX":
          return Oa(r);
        case "XXXXX":
        case "XXX":
        default:
          return Oa(r, ":");
      }
    },
    x: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "x":
          return Ps(r);
        case "xxxx":
        case "xx":
          return Oa(r);
        case "xxxxx":
        case "xxx":
        default:
          return Oa(r, ":");
      }
    },
    O: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Cs(r, ":");
        case "OOOO":
        default:
          return "GMT" + Oa(r, ":");
      }
    },
    z: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Cs(r, ":");
        case "zzzz":
        default:
          return "GMT" + Oa(r, ":");
      }
    },
    t: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = Math.floor(i.getTime() / 1e3);
      return ze(r, a.length);
    },
    T: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTime();
      return ze(r, a.length);
    },
  };
function Cs(e, n) {
  var a = e > 0 ? "-" : "+",
    t = Math.abs(e),
    o = Math.floor(t / 60),
    i = t % 60;
  if (i === 0) return a + String(o);
  var r = n;
  return a + String(o) + r + ze(i, 2);
}
function Ps(e, n) {
  if (e % 60 === 0) {
    var a = e > 0 ? "-" : "+";
    return a + ze(Math.abs(e) / 60, 2);
  }
  return Oa(e, n);
}
function Oa(e, n) {
  var a = n || "",
    t = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = ze(Math.floor(o / 60), 2),
    r = ze(o % 60, 2);
  return t + i + a + r;
}
var Is = function (n, a) {
    switch (n) {
      case "P":
        return a.date({ width: "short" });
      case "PP":
        return a.date({ width: "medium" });
      case "PPP":
        return a.date({ width: "long" });
      case "PPPP":
      default:
        return a.date({ width: "full" });
    }
  },
  ql = function (n, a) {
    switch (n) {
      case "p":
        return a.time({ width: "short" });
      case "pp":
        return a.time({ width: "medium" });
      case "ppp":
        return a.time({ width: "long" });
      case "pppp":
      default:
        return a.time({ width: "full" });
    }
  },
  b_ = function (n, a) {
    var t = n.match(/(P+)(p+)?/) || [],
      o = t[1],
      i = t[2];
    if (!i) return Is(n, a);
    var r;
    switch (o) {
      case "P":
        r = a.dateTime({ width: "short" });
        break;
      case "PP":
        r = a.dateTime({ width: "medium" });
        break;
      case "PPP":
        r = a.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        r = a.dateTime({ width: "full" });
        break;
    }
    return r.replace("{{date}}", Is(o, a)).replace("{{time}}", ql(i, a));
  },
  br = { p: ql, P: b_ },
  __ = ["D", "DD"],
  w_ = ["YY", "YYYY"];
function Gl(e) {
  return __.indexOf(e) !== -1;
}
function jl(e) {
  return w_.indexOf(e) !== -1;
}
function co(e, n, a) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var k_ = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  S_ = function (n, a, t) {
    var o,
      i = k_[n];
    return (
      typeof i == "string"
        ? (o = i)
        : a === 1
        ? (o = i.one)
        : (o = i.other.replace("{{count}}", a.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
function Uo(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.width ? String(n.width) : e.defaultWidth,
      t = e.formats[a] || e.formats[e.defaultWidth];
    return t;
  };
}
var T_ = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  C_ = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  P_ = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  I_ = {
    date: Uo({ formats: T_, defaultWidth: "full" }),
    time: Uo({ formats: C_, defaultWidth: "full" }),
    dateTime: Uo({ formats: P_, defaultWidth: "full" }),
  },
  E_ = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  D_ = function (n, a, t, o) {
    return E_[n];
  };
function _n(e) {
  return function (n, a) {
    var t = a != null && a.context ? String(a.context) : "standalone",
      o;
    if (t === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        r = a != null && a.width ? String(a.width) : i;
      o = e.formattingValues[r] || e.formattingValues[i];
    } else {
      var s = e.defaultWidth,
        l = a != null && a.width ? String(a.width) : e.defaultWidth;
      o = e.values[l] || e.values[s];
    }
    var m = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[m];
  };
}
var M_ = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  O_ = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  L_ = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  B_ = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  A_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  x_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  R_ = function (n, a) {
    var t = Number(n),
      o = t % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return t + "st";
        case 2:
          return t + "nd";
        case 3:
          return t + "rd";
      }
    return t + "th";
  },
  N_ = {
    ordinalNumber: R_,
    era: _n({ values: M_, defaultWidth: "wide" }),
    quarter: _n({
      values: O_,
      defaultWidth: "wide",
      argumentCallback: function (n) {
        return n - 1;
      },
    }),
    month: _n({ values: L_, defaultWidth: "wide" }),
    day: _n({ values: B_, defaultWidth: "wide" }),
    dayPeriod: _n({
      values: A_,
      defaultWidth: "wide",
      formattingValues: x_,
      defaultFormattingWidth: "wide",
    }),
  };
function wn(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.width,
      o = (t && e.matchPatterns[t]) || e.matchPatterns[e.defaultMatchWidth],
      i = n.match(o);
    if (!i) return null;
    var r = i[0],
      s = (t && e.parsePatterns[t]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s)
        ? $_(s, function (d) {
            return d.test(r);
          })
        : H_(s, function (d) {
            return d.test(r);
          }),
      m;
    (m = e.valueCallback ? e.valueCallback(l) : l),
      (m = a.valueCallback ? a.valueCallback(m) : m);
    var g = n.slice(r.length);
    return { value: m, rest: g };
  };
}
function H_(e, n) {
  for (var a in e) if (e.hasOwnProperty(a) && n(e[a])) return a;
}
function $_(e, n) {
  for (var a = 0; a < e.length; a++) if (n(e[a])) return a;
}
function U_(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = n.match(e.matchPattern);
    if (!t) return null;
    var o = t[0],
      i = n.match(e.parsePattern);
    if (!i) return null;
    var r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = a.valueCallback ? a.valueCallback(r) : r;
    var s = n.slice(o.length);
    return { value: r, rest: s };
  };
}
var V_ = /^(\d+)(th|st|nd|rd)?/i,
  Y_ = /\d+/i,
  F_ = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  W_ = { any: [/^b/i, /^(a|c)/i] },
  q_ = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  G_ = { any: [/1/i, /2/i, /3/i, /4/i] },
  j_ = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  z_ = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  K_ = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Q_ = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Z_ = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  X_ = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  J_ = {
    ordinalNumber: U_({
      matchPattern: V_,
      parsePattern: Y_,
      valueCallback: function (n) {
        return parseInt(n, 10);
      },
    }),
    era: wn({
      matchPatterns: F_,
      defaultMatchWidth: "wide",
      parsePatterns: W_,
      defaultParseWidth: "any",
    }),
    quarter: wn({
      matchPatterns: q_,
      defaultMatchWidth: "wide",
      parsePatterns: G_,
      defaultParseWidth: "any",
      valueCallback: function (n) {
        return n + 1;
      },
    }),
    month: wn({
      matchPatterns: j_,
      defaultMatchWidth: "wide",
      parsePatterns: z_,
      defaultParseWidth: "any",
    }),
    day: wn({
      matchPatterns: K_,
      defaultMatchWidth: "wide",
      parsePatterns: Q_,
      defaultParseWidth: "any",
    }),
    dayPeriod: wn({
      matchPatterns: Z_,
      defaultMatchWidth: "any",
      parsePatterns: X_,
      defaultParseWidth: "any",
    }),
  },
  zl = {
    code: "en-US",
    formatDistance: S_,
    formatLong: I_,
    formatRelative: D_,
    localize: N_,
    match: J_,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  e0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  t0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  a0 = /^'([^]*?)'?$/,
  n0 = /''/g,
  o0 = /[a-zA-Z]/;
function Ta(e, n, a) {
  var t, o, i, r, s, l, m, g, d, p, f, b, S, T, w, y, D, C;
  be(2, arguments);
  var M = String(n),
    N = la(),
    R =
      (t = (o = a?.locale) !== null && o !== void 0 ? o : N.locale) !== null &&
      t !== void 0
        ? t
        : zl,
    Q = Pe(
      (i =
        (r =
          (s =
            (l = a?.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : a == null ||
                (m = a.locale) === null ||
                m === void 0 ||
                (g = m.options) === null ||
                g === void 0
              ? void 0
              : g.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : N.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (d = N.locale) === null ||
            d === void 0 ||
            (p = d.options) === null ||
            p === void 0
          ? void 0
          : p.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(Q >= 1 && Q <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var G = Pe(
    (f =
      (b =
        (S =
          (T = a?.weekStartsOn) !== null && T !== void 0
            ? T
            : a == null ||
              (w = a.locale) === null ||
              w === void 0 ||
              (y = w.options) === null ||
              y === void 0
            ? void 0
            : y.weekStartsOn) !== null && S !== void 0
          ? S
          : N.weekStartsOn) !== null && b !== void 0
        ? b
        : (D = N.locale) === null ||
          D === void 0 ||
          (C = D.options) === null ||
          C === void 0
        ? void 0
        : C.weekStartsOn) !== null && f !== void 0
      ? f
      : 0
  );
  if (!(G >= 0 && G <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var P = we(e);
  if (!Dn(P)) throw new RangeError("Invalid time value");
  var B = uo(P),
    U = Vl(P, B),
    j = {
      firstWeekContainsDate: Q,
      weekStartsOn: G,
      locale: R,
      _originalDate: P,
    },
    V = M.match(t0)
      .map(function (E) {
        var Y = E[0];
        if (Y === "p" || Y === "P") {
          var $ = br[Y];
          return $(E, R.formatLong);
        }
        return E;
      })
      .join("")
      .match(e0)
      .map(function (E) {
        if (E === "''") return "'";
        var Y = E[0];
        if (Y === "'") return r0(E);
        var $ = y_[Y];
        if ($)
          return (
            !(a != null && a.useAdditionalWeekYearTokens) &&
              jl(E) &&
              co(E, n, String(e)),
            !(a != null && a.useAdditionalDayOfYearTokens) &&
              Gl(E) &&
              co(E, n, String(e)),
            $(U, E, R.localize, j)
          );
        if (Y.match(o0))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              Y +
              "`"
          );
        return E;
      })
      .join("");
  return V;
}
function r0(e) {
  var n = e.match(a0);
  return n ? n[1].replace(n0, "'") : e;
}
function i0(e, n) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  return e;
}
function s0(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getDay();
  return a;
}
function l0(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getFullYear(),
    t = n.getMonth(),
    o = new Date(0);
  return o.setFullYear(a, t + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function qt(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getHours();
  return a;
}
var u0 = 6048e5;
function c0(e) {
  be(1, arguments);
  var n = we(e),
    a = lo(n).getTime() - n_(n).getTime();
  return Math.round(a / u0) + 1;
}
function ia(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getMinutes();
  return a;
}
function Ue(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getMonth();
  return a;
}
function rn(e) {
  be(1, arguments);
  var n = we(e),
    a = n.getSeconds();
  return a;
}
function d0(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = we(e),
    d = g.getFullYear(),
    p = la(),
    f = Pe(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : p.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = p.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setFullYear(d + 1, 0, f), b.setHours(0, 0, 0, 0);
  var S = $a(b, n),
    T = new Date(0);
  T.setFullYear(d, 0, f), T.setHours(0, 0, 0, 0);
  var w = $a(T, n);
  return g.getTime() >= S.getTime()
    ? d + 1
    : g.getTime() >= w.getTime()
    ? d
    : d - 1;
}
function m0(e, n) {
  var a, t, o, i, r, s, l, m;
  be(1, arguments);
  var g = la(),
    d = Pe(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    p = d0(e, n),
    f = new Date(0);
  f.setFullYear(p, 0, d), f.setHours(0, 0, 0, 0);
  var b = $a(f, n);
  return b;
}
var g0 = 6048e5;
function p0(e, n) {
  be(1, arguments);
  var a = we(e),
    t = $a(a, n).getTime() - m0(a, n).getTime();
  return Math.round(t / g0) + 1;
}
function Re(e) {
  return be(1, arguments), we(e).getFullYear();
}
function Un(e, n) {
  be(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() > t.getTime();
}
function Vn(e, n) {
  be(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() < t.getTime();
}
function Qa(e, n) {
  be(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() === t.getTime();
}
function Es(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function v0(e, n) {
  if (e) {
    if (typeof e == "string") return Es(e, n);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (a === "Object" && e.constructor && (a = e.constructor.name),
      a === "Map" || a === "Set")
    )
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Es(e, n);
  }
}
function Ds(e, n) {
  var a = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = v0(e)) || n) {
      a && (e = a);
      var t = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function (m) {
          throw m;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    r = !1,
    s;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var m = a.next();
      return (i = m.done), m;
    },
    e: function (m) {
      (r = !0), (s = m);
    },
    f: function () {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (r) throw s;
      }
    },
  };
}
function ye(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _r(e, n) {
  return (
    (_r = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, o) {
          return (t.__proto__ = o), t;
        }),
    _r(e, n)
  );
}
function Ve(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    n && _r(e, n);
}
function mo(e) {
  return (
    (mo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    mo(e)
  );
}
function Kl() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Kl = function () {
    return !!e;
  })();
}
function h0(e, n) {
  if (n && (Ht(n) === "object" || typeof n == "function")) return n;
  if (n !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ye(e);
}
function Ye(e) {
  var n = Kl();
  return function () {
    var t = mo(e),
      o;
    if (n) {
      var i = mo(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else o = t.apply(this, arguments);
    return h0(this, o);
  };
}
function He(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function f0(e, n) {
  if (Ht(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Ht(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ql(e) {
  var n = f0(e, "string");
  return Ht(n) == "symbol" ? n : String(n);
}
function y0(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(e, Ql(t.key), t);
  }
}
function $e(e, n, a) {
  return (
    n && y0(e.prototype, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function he(e, n, a) {
  return (
    (n = Ql(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = a),
    e
  );
}
var b0 = 10,
  Zl = (function () {
    function e() {
      He(this, e), he(this, "priority", void 0), he(this, "subPriority", 0);
    }
    return (
      $e(e, [
        {
          key: "validate",
          value: function (a, t) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  _0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a(t, o, i, r, s) {
      var l;
      return (
        He(this, a),
        (l = n.call(this)),
        (l.value = t),
        (l.validateValue = o),
        (l.setValue = i),
        (l.priority = r),
        s && (l.subPriority = s),
        l
      );
    }
    return (
      $e(a, [
        {
          key: "validate",
          value: function (o, i) {
            return this.validateValue(o, this.value, i);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return this.setValue(o, i, this.value, r);
          },
        },
      ]),
      a
    );
  })(Zl),
  w0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", b0),
        he(ye(t), "subPriority", -1),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "set",
          value: function (o, i) {
            if (i.timestampIsSet) return o;
            var r = new Date(0);
            return (
              r.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              r.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              r
            );
          },
        },
      ]),
      a
    );
  })(Zl),
  qe = (function () {
    function e() {
      He(this, e),
        he(this, "incompatibleTokens", void 0),
        he(this, "priority", void 0),
        he(this, "subPriority", void 0);
    }
    return (
      $e(e, [
        {
          key: "run",
          value: function (a, t, o, i) {
            var r = this.parse(a, t, o, i);
            return r
              ? {
                  setter: new _0(
                    r.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: r.rest,
                }
              : null;
          },
        },
        {
          key: "validate",
          value: function (a, t, o) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  k0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 140),
        he(ye(t), "incompatibleTokens", ["R", "u", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
              case "GGGGG":
                return r.era(o, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  r.era(o, { width: "wide" }) ||
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (
              (i.era = r),
              o.setUTCFullYear(r, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  lt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  aa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function ut(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}
function nt(e, n) {
  var a = n.match(e);
  return a ? { value: parseInt(a[0], 10), rest: n.slice(a[0].length) } : null;
}
function na(e, n) {
  var a = n.match(e);
  if (!a) return null;
  if (a[0] === "Z") return { value: 0, rest: n.slice(1) };
  var t = a[1] === "+" ? 1 : -1,
    o = a[2] ? parseInt(a[2], 10) : 0,
    i = a[3] ? parseInt(a[3], 10) : 0,
    r = a[5] ? parseInt(a[5], 10) : 0;
  return { value: t * (o * Qr + i * Kr + r * s_), rest: n.slice(a[0].length) };
}
function Xl(e) {
  return nt(lt.anyDigitsSigned, e);
}
function it(e, n) {
  switch (e) {
    case 1:
      return nt(lt.singleDigit, n);
    case 2:
      return nt(lt.twoDigits, n);
    case 3:
      return nt(lt.threeDigits, n);
    case 4:
      return nt(lt.fourDigits, n);
    default:
      return nt(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function go(e, n) {
  switch (e) {
    case 1:
      return nt(lt.singleDigitSigned, n);
    case 2:
      return nt(lt.twoDigitsSigned, n);
    case 3:
      return nt(lt.threeDigitsSigned, n);
    case 4:
      return nt(lt.fourDigitsSigned, n);
    default:
      return nt(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Xr(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Jl(e, n) {
  var a = n > 0,
    t = a ? n : 1 - n,
    o;
  if (t <= 50) o = e || 100;
  else {
    var i = t + 50,
      r = Math.floor(i / 100) * 100,
      s = e >= i % 100;
    o = e + r - (s ? 100 : 0);
  }
  return a ? o : 1 - o;
}
function eu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var S0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 130),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "u",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (m) {
              return { year: m, isTwoDigitYear: i === "yy" };
            };
            switch (i) {
              case "y":
                return ut(it(4, o), s);
              case "yo":
                return ut(r.ordinalNumber(o, { unit: "year" }), s);
              default:
                return ut(it(i.length, o), s);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = o.getUTCFullYear();
            if (r.isTwoDigitYear) {
              var l = Jl(r.year, s);
              return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
            var m = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return o.setUTCFullYear(m, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  T0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 130),
        he(ye(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (m) {
              return { year: m, isTwoDigitYear: i === "YY" };
            };
            switch (i) {
              case "Y":
                return ut(it(4, o), s);
              case "Yo":
                return ut(r.ordinalNumber(o, { unit: "year" }), s);
              default:
                return ut(it(i.length, o), s);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r, s) {
            var l = Zr(o, s);
            if (r.isTwoDigitYear) {
              var m = Jl(r.year, l);
              return (
                o.setUTCFullYear(m, 0, s.firstWeekContainsDate),
                o.setUTCHours(0, 0, 0, 0),
                Ua(o, s)
              );
            }
            var g = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return (
              o.setUTCFullYear(g, 0, s.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Ua(o, s)
            );
          },
        },
      ]),
      a
    );
  })(qe),
  C0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 130),
        he(ye(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i) {
            return go(i === "R" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = new Date(0);
            return s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0), on(s);
          },
        },
      ]),
      a
    );
  })(qe),
  P0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 130),
        he(ye(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i) {
            return go(i === "u" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCFullYear(r, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  I0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 120),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "Q":
              case "QQ":
                return it(i.length, o);
              case "Qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || r.quarter(o, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return r.quarter(o, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "formatting" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  E0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 120),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "q":
              case "qq":
                return it(i.length, o);
              case "qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || r.quarter(o, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return r.quarter(o, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "standalone" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  D0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        he(ye(t), "priority", 110),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (m) {
              return m - 1;
            };
            switch (i) {
              case "M":
                return ut(nt(lt.month, o), s);
              case "MM":
                return ut(it(2, o), s);
              case "Mo":
                return ut(r.ordinalNumber(o, { unit: "month" }), s);
              case "MMM":
                return (
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return r.month(o, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return (
                  r.month(o, { width: "wide", context: "formatting" }) ||
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  M0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 110),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (m) {
              return m - 1;
            };
            switch (i) {
              case "L":
                return ut(nt(lt.month, o), s);
              case "LL":
                return ut(it(2, o), s);
              case "Lo":
                return ut(r.ordinalNumber(o, { unit: "month" }), s);
              case "LLL":
                return (
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return r.month(o, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return (
                  r.month(o, { width: "wide", context: "standalone" }) ||
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function O0(e, n, a) {
  be(2, arguments);
  var t = we(e),
    o = Pe(n),
    i = Wl(t, a) - o;
  return t.setUTCDate(t.getUTCDate() - i * 7), t;
}
var L0 = (function (e) {
  Ve(a, e);
  var n = Ye(a);
  function a() {
    var t;
    He(this, a);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return (
      (t = n.call.apply(n, [this].concat(i))),
      he(ye(t), "priority", 100),
      he(ye(t), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      t
    );
  }
  return (
    $e(a, [
      {
        key: "parse",
        value: function (o, i, r) {
          switch (i) {
            case "w":
              return nt(lt.week, o);
            case "wo":
              return r.ordinalNumber(o, { unit: "week" });
            default:
              return it(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (o, i, r, s) {
          return Ua(O0(o, r, s), s);
        },
      },
    ]),
    a
  );
})(qe);
function B0(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n),
    o = Fl(a) - t;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
var A0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 100),
        he(ye(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "I":
                return nt(lt.week, o);
              case "Io":
                return r.ordinalNumber(o, { unit: "week" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 53;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return on(B0(o, r));
          },
        },
      ]),
      a
    );
  })(qe),
  x0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  R0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  N0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "subPriority", 1),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "d":
                return nt(lt.date, o);
              case "do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = eu(r),
              l = o.getUTCMonth();
            return s ? i >= 1 && i <= R0[l] : i >= 1 && i <= x0[l];
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCDate(r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  H0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "subpriority", 1),
        he(ye(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "D":
              case "DD":
                return nt(lt.dayOfYear, o);
              case "Do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = eu(r);
            return s ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(0, r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function Jr(e, n, a) {
  var t, o, i, r, s, l, m, g;
  be(2, arguments);
  var d = la(),
    p = Pe(
      (t =
        (o =
          (i =
            (r = a?.weekStartsOn) !== null && r !== void 0
              ? r
              : a == null ||
                (s = a.locale) === null ||
                s === void 0 ||
                (l = s.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && i !== void 0
            ? i
            : d.weekStartsOn) !== null && o !== void 0
          ? o
          : (m = d.locale) === null ||
            m === void 0 ||
            (g = m.options) === null ||
            g === void 0
          ? void 0
          : g.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = we(e),
    b = Pe(n),
    S = f.getUTCDay(),
    T = b % 7,
    w = (T + 7) % 7,
    y = (w < p ? 7 : 0) + b - S;
  return f.setUTCDate(f.getUTCDate() + y), f;
}
var $0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEE":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, s) {
            return (o = Jr(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  U0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r, s) {
            var l = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case "e":
              case "ee":
                return ut(it(i.length, o), l);
              case "eo":
                return ut(r.ordinalNumber(o, { unit: "day" }), l);
              case "eee":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeee":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, s) {
            return (o = Jr(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  V0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r, s) {
            var l = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case "c":
              case "cc":
                return ut(it(i.length, o), l);
              case "co":
                return ut(r.ordinalNumber(o, { unit: "day" }), l);
              case "ccc":
                return (
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return r.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "cccc":
              default:
                return (
                  r.day(o, { width: "wide", context: "standalone" }) ||
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, s) {
            return (o = Jr(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function Y0(e, n) {
  be(2, arguments);
  var a = Pe(n);
  a % 7 === 0 && (a = a - 7);
  var t = 1,
    o = we(e),
    i = o.getUTCDay(),
    r = a % 7,
    s = (r + 7) % 7,
    l = (s < t ? 7 : 0) + a - i;
  return o.setUTCDate(o.getUTCDate() + l), o;
}
var F0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 90),
        he(ye(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (m) {
              return m === 0 ? 7 : m;
            };
            switch (i) {
              case "i":
              case "ii":
                return it(i.length, o);
              case "io":
                return r.ordinalNumber(o, { unit: "day" });
              case "iii":
                return ut(
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiii":
                return ut(
                  r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiiii":
                return ut(
                  r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiii":
              default:
                return ut(
                  r.day(o, { width: "wide", context: "formatting" }) ||
                    r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 7;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (o = Y0(o, r)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  W0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 80),
        he(ye(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  q0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 80),
        he(ye(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  G0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 80),
        he(ye(t), "incompatibleTokens", ["a", "b", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(Xr(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  j0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 70),
        he(ye(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "h":
                return nt(lt.hour12h, o);
              case "ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 12;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = o.getUTCHours() >= 12;
            return (
              s && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : !s && r === 12
                ? o.setUTCHours(0, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  z0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 70),
        he(ye(t), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "H":
                return nt(lt.hour23h, o);
              case "Ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 23;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(r, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  K0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 70),
        he(ye(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "K":
                return nt(lt.hour11h, o);
              case "Ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = o.getUTCHours() >= 12;
            return (
              s && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  Q0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 70),
        he(ye(t), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "k":
                return nt(lt.hour24h, o);
              case "ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 24;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = r <= 24 ? r % 24 : r;
            return o.setUTCHours(s, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Z0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 60),
        he(ye(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "m":
                return nt(lt.minute, o);
              case "mo":
                return r.ordinalNumber(o, { unit: "minute" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMinutes(r, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  X0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 50),
        he(ye(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "s":
                return nt(lt.second, o);
              case "so":
                return r.ordinalNumber(o, { unit: "second" });
              default:
                return it(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCSeconds(r, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  J0 = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 30),
        he(ye(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i) {
            var r = function (l) {
              return Math.floor(l * Math.pow(10, -i.length + 3));
            };
            return ut(it(i.length, o), r);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMilliseconds(r), o;
          },
        },
      ]),
      a
    );
  })(qe),
  ew = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 10),
        he(ye(t), "incompatibleTokens", ["t", "T", "x"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "X":
                return na(aa.basicOptionalMinutes, o);
              case "XX":
                return na(aa.basic, o);
              case "XXXX":
                return na(aa.basicOptionalSeconds, o);
              case "XXXXX":
                return na(aa.extendedOptionalSeconds, o);
              case "XXX":
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  tw = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 10),
        he(ye(t), "incompatibleTokens", ["t", "T", "X"]),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "x":
                return na(aa.basicOptionalMinutes, o);
              case "xx":
                return na(aa.basic, o);
              case "xxxx":
                return na(aa.basicOptionalSeconds, o);
              case "xxxxx":
                return na(aa.extendedOptionalSeconds, o);
              case "xxx":
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  aw = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 40),
        he(ye(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o) {
            return Xl(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r * 1e3), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  nw = (function (e) {
    Ve(a, e);
    var n = Ye(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        he(ye(t), "priority", 20),
        he(ye(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o) {
            return Xl(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  ow = {
    G: new k0(),
    y: new S0(),
    Y: new T0(),
    R: new C0(),
    u: new P0(),
    Q: new I0(),
    q: new E0(),
    M: new D0(),
    L: new M0(),
    w: new L0(),
    I: new A0(),
    d: new N0(),
    D: new H0(),
    E: new $0(),
    e: new U0(),
    c: new V0(),
    i: new F0(),
    a: new W0(),
    b: new q0(),
    B: new G0(),
    h: new j0(),
    H: new z0(),
    K: new K0(),
    k: new Q0(),
    m: new Z0(),
    s: new X0(),
    S: new J0(),
    X: new ew(),
    x: new tw(),
    t: new aw(),
    T: new nw(),
  },
  rw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  iw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  sw = /^'([^]*?)'?$/,
  lw = /''/g,
  uw = /\S/,
  cw = /[a-zA-Z]/;
function wr(e, n, a, t) {
  var o, i, r, s, l, m, g, d, p, f, b, S, T, w;
  be(3, arguments);
  var y = String(e),
    D = String(n),
    C = la(),
    M =
      (o = (i = void 0) !== null && i !== void 0 ? i : C.locale) !== null &&
      o !== void 0
        ? o
        : zl;
  if (!M.match) throw new RangeError("locale must contain match property");
  var N = Pe(
    (r =
      (s =
        (l = (m = void 0) !== null && m !== void 0 ? m : void 0) !== null &&
        l !== void 0
          ? l
          : C.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : (g = C.locale) === null ||
          g === void 0 ||
          (d = g.options) === null ||
          d === void 0
        ? void 0
        : d.firstWeekContainsDate) !== null && r !== void 0
      ? r
      : 1
  );
  if (!(N >= 1 && N <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var R = Pe(
    (p =
      (f =
        (b = (S = void 0) !== null && S !== void 0 ? S : void 0) !== null &&
        b !== void 0
          ? b
          : C.weekStartsOn) !== null && f !== void 0
        ? f
        : (T = C.locale) === null ||
          T === void 0 ||
          (w = T.options) === null ||
          w === void 0
        ? void 0
        : w.weekStartsOn) !== null && p !== void 0
      ? p
      : 0
  );
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (D === "") return y === "" ? we(a) : new Date(NaN);
  var Q = { firstWeekContainsDate: N, weekStartsOn: R, locale: M },
    G = [new w0()],
    P = D.match(iw)
      .map(function (X) {
        var x = X[0];
        if (x in br) {
          var _ = br[x];
          return _(X, M.formatLong);
        }
        return X;
      })
      .join("")
      .match(rw),
    B = [],
    U = Ds(P),
    j;
  try {
    var V = function () {
      var x = j.value;
      !(t != null && t.useAdditionalWeekYearTokens) && jl(x) && co(x, D, e),
        !(t != null && t.useAdditionalDayOfYearTokens) && Gl(x) && co(x, D, e);
      var _ = x[0],
        ae = ow[_];
      if (ae) {
        var ve = ae.incompatibleTokens;
        if (Array.isArray(ve)) {
          var se = B.find(function (me) {
            return ve.includes(me.token) || me.token === _;
          });
          if (se)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(se.fullToken, "` and `")
                .concat(x, "` at the same time")
            );
        } else if (ae.incompatibleTokens === "*" && B.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              x,
              "` and any other token at the same time"
            )
          );
        B.push({ token: _, fullToken: x });
        var _e = ae.run(y, x, M.match, Q);
        if (!_e) return { v: new Date(NaN) };
        G.push(_e.setter), (y = _e.rest);
      } else {
        if (_.match(cw))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              _ +
              "`"
          );
        if (
          (x === "''" ? (x = "'") : _ === "'" && (x = dw(x)),
          y.indexOf(x) === 0)
        )
          y = y.slice(x.length);
        else return { v: new Date(NaN) };
      }
    };
    for (U.s(); !(j = U.n()).done; ) {
      var E = V();
      if (Ht(E) === "object") return E.v;
    }
  } catch (X) {
    U.e(X);
  } finally {
    U.f();
  }
  if (y.length > 0 && uw.test(y)) return new Date(NaN);
  var Y = G.map(function (X) {
      return X.priority;
    })
      .sort(function (X, x) {
        return x - X;
      })
      .filter(function (X, x, _) {
        return _.indexOf(X) === x;
      })
      .map(function (X) {
        return G.filter(function (x) {
          return x.priority === X;
        }).sort(function (x, _) {
          return _.subPriority - x.subPriority;
        });
      })
      .map(function (X) {
        return X[0];
      }),
    $ = we(a);
  if (isNaN($.getTime())) return new Date(NaN);
  var z = Vl($, uo($)),
    k = {},
    v = Ds(Y),
    F;
  try {
    for (v.s(); !(F = v.n()).done; ) {
      var q = F.value;
      if (!q.validate(z, Q)) return new Date(NaN);
      var te = q.set(z, k, Q);
      Array.isArray(te) ? ((z = te[0]), i0(k, te[1])) : (z = te);
    }
  } catch (X) {
    v.e(X);
  } finally {
    v.f();
  }
  return z;
}
function dw(e) {
  return e.match(sw)[1].replace(lw, "'");
}
function Ms(e, n) {
  be(2, arguments);
  var a = $n(e),
    t = $n(n);
  return a.getTime() === t.getTime();
}
function mw(e, n) {
  be(2, arguments);
  var a = Pe(n);
  return ga(e, -a);
}
function gw(e, n) {
  var a;
  be(1, arguments);
  var t = Pe((a = void 0) !== null && a !== void 0 ? a : 2);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = fw(e),
    i;
  if (o.date) {
    var r = yw(o.date, t);
    i = bw(r.restDateString, r.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var s = i.getTime(),
    l = 0,
    m;
  if (o.time && ((l = _w(o.time)), isNaN(l))) return new Date(NaN);
  if (o.timezone) {
    if (((m = ww(o.timezone)), isNaN(m))) return new Date(NaN);
  } else {
    var g = new Date(s + l),
      d = new Date(0);
    return (
      d.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()),
      d.setHours(
        g.getUTCHours(),
        g.getUTCMinutes(),
        g.getUTCSeconds(),
        g.getUTCMilliseconds()
      ),
      d
    );
  }
  return new Date(s + l + m);
}
var to = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  pw = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  vw =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  hw = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function fw(e) {
  var n = {},
    a = e.split(to.dateTimeDelimiter),
    t;
  if (a.length > 2) return n;
  if (
    (/:/.test(a[0])
      ? (t = a[0])
      : ((n.date = a[0]),
        (t = a[1]),
        to.timeZoneDelimiter.test(n.date) &&
          ((n.date = e.split(to.timeZoneDelimiter)[0]),
          (t = e.substr(n.date.length, e.length)))),
    t)
  ) {
    var o = to.timezone.exec(t);
    o ? ((n.time = t.replace(o[1], "")), (n.timezone = o[1])) : (n.time = t);
  }
  return n;
}
function yw(e, n) {
  var a = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + n) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + n) +
        "})$)"
    ),
    t = e.match(a);
  if (!t) return { year: NaN, restDateString: "" };
  var o = t[1] ? parseInt(t[1]) : null,
    i = t[2] ? parseInt(t[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((t[1] || t[2]).length),
  };
}
function bw(e, n) {
  if (n === null) return new Date(NaN);
  var a = e.match(pw);
  if (!a) return new Date(NaN);
  var t = !!a[4],
    o = kn(a[1]),
    i = kn(a[2]) - 1,
    r = kn(a[3]),
    s = kn(a[4]),
    l = kn(a[5]) - 1;
  if (t) return Pw(n, s, l) ? kw(n, s, l) : new Date(NaN);
  var m = new Date(0);
  return !Tw(n, i, r) || !Cw(n, o)
    ? new Date(NaN)
    : (m.setUTCFullYear(n, i, Math.max(o, r)), m);
}
function kn(e) {
  return e ? parseInt(e) : 1;
}
function _w(e) {
  var n = e.match(vw);
  if (!n) return NaN;
  var a = Vo(n[1]),
    t = Vo(n[2]),
    o = Vo(n[3]);
  return Iw(a, t, o) ? a * Qr + t * Kr + o * 1e3 : NaN;
}
function Vo(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function ww(e) {
  if (e === "Z") return 0;
  var n = e.match(hw);
  if (!n) return 0;
  var a = n[1] === "+" ? -1 : 1,
    t = parseInt(n[2]),
    o = (n[3] && parseInt(n[3])) || 0;
  return Ew(t, o) ? a * (t * Qr + o * Kr) : NaN;
}
function kw(e, n, a) {
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = (n - 1) * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Sw = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function tu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Tw(e, n, a) {
  return n >= 0 && n <= 11 && a >= 1 && a <= (Sw[n] || (tu(e) ? 29 : 28));
}
function Cw(e, n) {
  return n >= 1 && n <= (tu(e) ? 366 : 365);
}
function Pw(e, n, a) {
  return n >= 1 && n <= 53 && a >= 0 && a <= 6;
}
function Iw(e, n, a) {
  return e === 24
    ? n === 0 && a === 0
    : a >= 0 && a < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function Ew(e, n) {
  return n >= 0 && n <= 59;
}
function au(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n),
    o = a.getFullYear(),
    i = a.getDate(),
    r = new Date(0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  var s = l0(r);
  return a.setMonth(t, Math.min(i, s)), a;
}
function Je(e, n) {
  if ((be(2, arguments), Ht(n) !== "object" || n === null))
    throw new RangeError("values parameter must be an object");
  var a = we(e);
  return isNaN(a.getTime())
    ? new Date(NaN)
    : (n.year != null && a.setFullYear(n.year),
      n.month != null && (a = au(a, n.month)),
      n.date != null && a.setDate(Pe(n.date)),
      n.hours != null && a.setHours(Pe(n.hours)),
      n.minutes != null && a.setMinutes(Pe(n.minutes)),
      n.seconds != null && a.setSeconds(Pe(n.seconds)),
      n.milliseconds != null && a.setMilliseconds(Pe(n.milliseconds)),
      a);
}
function nu(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setHours(t), a;
}
function ei(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setMilliseconds(t), a;
}
function ou(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setMinutes(t), a;
}
function ti(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setSeconds(t), a;
}
function ra(e, n) {
  be(2, arguments);
  var a = we(e),
    t = Pe(n);
  return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(t), a);
}
function sn(e, n) {
  be(2, arguments);
  var a = Pe(n);
  return Wt(e, -a);
}
function Dw(e, n) {
  if ((be(2, arguments), !n || Ht(n) !== "object")) return new Date(NaN);
  var a = n.years ? Pe(n.years) : 0,
    t = n.months ? Pe(n.months) : 0,
    o = n.weeks ? Pe(n.weeks) : 0,
    i = n.days ? Pe(n.days) : 0,
    r = n.hours ? Pe(n.hours) : 0,
    s = n.minutes ? Pe(n.minutes) : 0,
    l = n.seconds ? Pe(n.seconds) : 0,
    m = sn(e, t + a * 12),
    g = mw(m, i + o * 7),
    d = s + r * 60,
    p = l + d * 60,
    f = p * 1e3,
    b = new Date(g.getTime() - f);
  return b;
}
function ru(e, n) {
  be(2, arguments);
  var a = Pe(n);
  return zr(e, -a);
}
function gn() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z",
        }),
        I("path", {
          d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        I("path", {
          d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        I("path", {
          d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z",
        }),
      ]
    )
  );
}
gn.compatConfig = { MODE: 3 };
function iu() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z",
        }),
        I("path", {
          d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
iu.compatConfig = { MODE: 3 };
function ai() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
ai.compatConfig = { MODE: 3 };
function ni() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z",
        }),
      ]
    )
  );
}
ni.compatConfig = { MODE: 3 };
function oi() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z",
        }),
        I("path", {
          d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
      ]
    )
  );
}
oi.compatConfig = { MODE: 3 };
function ri() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
ri.compatConfig = { MODE: 3 };
function ii() {
  return (
    c(),
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        I("path", {
          d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
ii.compatConfig = { MODE: 3 };
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var su = { exports: {} };
(function (e) {
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(su);
var Mw = su.exports,
  kr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(kr, kr.exports);
var Ow = kr.exports;
const Lw = si(Ow);
var Sr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    var o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(Sr, Sr.exports);
var Bw = Sr.exports;
const Os = si(Bw);
function Aw(e, n) {
  var a = Hw(n);
  return a.formatToParts ? Rw(a, e) : Nw(a, e);
}
var xw = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Rw(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var i = xw[a[o].type];
      i >= 0 && (t[i] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (r) {
    if (r instanceof RangeError) return [NaN];
    throw r;
  }
}
function Nw(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""),
    t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Yo = {};
function Hw(e) {
  if (!Yo[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date("2014-06-25T04:00:00.123Z")),
      a =
        n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Yo[e] = a
      ? new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  }
  return Yo[e];
}
function li(e, n, a, t, o, i, r) {
  var s = new Date(0);
  return s.setUTCFullYear(e, n, a), s.setUTCHours(t, o, i, r), s;
}
var Ls = 36e5,
  $w = 6e4,
  Fo = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function ui(e, n, a) {
  var t, o;
  if (e === "" || ((t = Fo.timezoneZ.exec(e)), t)) return 0;
  var i;
  if (((t = Fo.timezoneHH.exec(e)), t))
    return (i = parseInt(t[1], 10)), Bs(i) ? -(i * Ls) : NaN;
  if (((t = Fo.timezoneHHMM.exec(e)), t)) {
    i = parseInt(t[1], 10);
    var r = parseInt(t[2], 10);
    return Bs(i, r) ? ((o = Math.abs(i) * Ls + r * $w), i > 0 ? -o : o) : NaN;
  }
  if (Yw(e)) {
    n = new Date(n || Date.now());
    var s = a ? n : Uw(n),
      l = Tr(s, e),
      m = a ? l : Vw(n, l, e);
    return -m;
  }
  return NaN;
}
function Uw(e) {
  return li(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Tr(e, n) {
  var a = Aw(e, n),
    t = li(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime(),
    o = e.getTime(),
    i = o % 1e3;
  return (o -= i >= 0 ? i : 1e3 + i), t - o;
}
function Vw(e, n, a) {
  var t = e.getTime(),
    o = t - n,
    i = Tr(new Date(o), a);
  if (n === i) return n;
  o -= i - n;
  var r = Tr(new Date(o), a);
  return i === r ? i : Math.max(i, r);
}
function Bs(e, n) {
  return -23 <= e && e <= 23 && (n == null || (0 <= n && n <= 59));
}
var As = {};
function Yw(e) {
  if (As[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), (As[e] = !0), !0;
  } catch {
    return !1;
  }
}
var lu =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Wo = 36e5,
  xs = 6e4,
  Fw = 2,
  kt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: lu,
  };
function Cr(e, n) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (e === null) return new Date(NaN);
  var a = n || {},
    t = a.additionalDigits == null ? Fw : Lw(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  )
    return new Date(e.getTime());
  if (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  )
    return new Date(e);
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = Ww(e),
    i = qw(o.date, t),
    r = i.year,
    s = i.restDateString,
    l = Gw(s, r);
  if (isNaN(l)) return new Date(NaN);
  if (l) {
    var m = l.getTime(),
      g = 0,
      d;
    if (o.time && ((g = jw(o.time)), isNaN(g))) return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (((d = ui(o.timeZone || a.timeZone, new Date(m + g))), isNaN(d)))
        return new Date(NaN);
    } else (d = Os(new Date(m + g))), (d = Os(new Date(m + g + d)));
    return new Date(m + g + d);
  } else return new Date(NaN);
}
function Ww(e) {
  var n = {},
    a = kt.dateTimePattern.exec(e),
    t;
  if (
    (a
      ? ((n.date = a[1]), (t = a[3]))
      : ((a = kt.datePattern.exec(e)),
        a ? ((n.date = a[1]), (t = a[2])) : ((n.date = null), (t = e))),
    t)
  ) {
    var o = kt.timeZone.exec(t);
    o
      ? ((n.time = t.replace(o[1], "")), (n.timeZone = o[1].trim()))
      : (n.time = t);
  }
  return n;
}
function qw(e, n) {
  var a = kt.YYY[n],
    t = kt.YYYYY[n],
    o;
  if (((o = kt.YYYY.exec(e) || t.exec(e)), o)) {
    var i = o[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((o = kt.YY.exec(e) || a.exec(e)), o)) {
    var r = o[1];
    return { year: parseInt(r, 10) * 100, restDateString: e.slice(r.length) };
  }
  return { year: null };
}
function Gw(e, n) {
  if (n === null) return null;
  var a, t, o, i;
  if (e.length === 0) return (t = new Date(0)), t.setUTCFullYear(n), t;
  if (((a = kt.MM.exec(e)), a))
    return (
      (t = new Date(0)),
      (o = parseInt(a[1], 10) - 1),
      Ns(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN)
    );
  if (((a = kt.DDD.exec(e)), a)) {
    t = new Date(0);
    var r = parseInt(a[1], 10);
    return Qw(n, r) ? (t.setUTCFullYear(n, 0, r), t) : new Date(NaN);
  }
  if (((a = kt.MMDD.exec(e)), a)) {
    (t = new Date(0)), (o = parseInt(a[1], 10) - 1);
    var s = parseInt(a[2], 10);
    return Ns(n, o, s) ? (t.setUTCFullYear(n, o, s), t) : new Date(NaN);
  }
  if (((a = kt.Www.exec(e)), a))
    return (i = parseInt(a[1], 10) - 1), Hs(n, i) ? Rs(n, i) : new Date(NaN);
  if (((a = kt.WwwD.exec(e)), a)) {
    i = parseInt(a[1], 10) - 1;
    var l = parseInt(a[2], 10) - 1;
    return Hs(n, i, l) ? Rs(n, i, l) : new Date(NaN);
  }
  return null;
}
function jw(e) {
  var n, a, t;
  if (((n = kt.HH.exec(e)), n))
    return (
      (a = parseFloat(n[1].replace(",", "."))), qo(a) ? (a % 24) * Wo : NaN
    );
  if (((n = kt.HHMM.exec(e)), n))
    return (
      (a = parseInt(n[1], 10)),
      (t = parseFloat(n[2].replace(",", "."))),
      qo(a, t) ? (a % 24) * Wo + t * xs : NaN
    );
  if (((n = kt.HHMMSS.exec(e)), n)) {
    (a = parseInt(n[1], 10)), (t = parseInt(n[2], 10));
    var o = parseFloat(n[3].replace(",", "."));
    return qo(a, t, o) ? (a % 24) * Wo + t * xs + o * 1e3 : NaN;
  }
  return null;
}
function Rs(e, n, a) {
  (n = n || 0), (a = a || 0);
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var zw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Kw = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function uu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Ns(e, n, a) {
  if (n < 0 || n > 11) return !1;
  if (a != null) {
    if (a < 1) return !1;
    var t = uu(e);
    if ((t && a > Kw[n]) || (!t && a > zw[n])) return !1;
  }
  return !0;
}
function Qw(e, n) {
  if (n < 1) return !1;
  var a = uu(e);
  return !((a && n > 366) || (!a && n > 365));
}
function Hs(e, n, a) {
  return !(n < 0 || n > 52 || (a != null && (a < 0 || a > 6)));
}
function qo(e, n, a) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (n != null && (n < 0 || n >= 60)) ||
    (a != null && (a < 0 || a >= 60))
  );
}
var Pr = { exports: {} },
  Ir = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t, o) {
    if (t == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    for (var i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    return t;
  }
  e.exports = n.default;
})(Ir, Ir.exports);
var Zw = Ir.exports;
(function (e, n) {
  var a = Mw.default;
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = o);
  var t = a(Zw);
  function o(i) {
    return (0, t.default)({}, i);
  }
  e.exports = n.default;
})(Pr, Pr.exports);
var Xw = Pr.exports;
const Jw = si(Xw);
function e1(e, n, a) {
  var t = Cr(e, a),
    o = ui(n, t, !0),
    i = new Date(t.getTime() - o),
    r = new Date(0);
  return (
    r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()),
    r.setHours(
      i.getUTCHours(),
      i.getUTCMinutes(),
      i.getUTCSeconds(),
      i.getUTCMilliseconds()
    ),
    r
  );
}
function t1(e, n, a) {
  if (typeof e == "string" && !e.match(lu)) {
    var t = Jw(a);
    return (t.timeZone = n), Cr(e, t);
  }
  var o = Cr(e, a),
    i = li(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    ).getTime(),
    r = ui(n, new Date(i));
  return new Date(i + r);
}
function $s(e) {
  return (n) =>
    new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" })
      .format(new Date(`2017-01-0${n}T00:00:00+00:00`))
      .slice(0, 2);
}
function a1(e) {
  return (n) =>
    Ta(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const n1 = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7];
    let o;
    if (e !== null)
      try {
        o = t.map(a1(e));
      } catch {
        o = t.map($s(n));
      }
    else o = t.map($s(n));
    const i = o.slice(0, a),
      r = o.slice(a + 1, o.length);
    return [o[a]].concat(...r).concat(...i);
  },
  ci = (e, n) => {
    const a = [];
    for (let t = +e[0]; t <= +e[1]; t++) a.push({ value: +t, text: `${t}` });
    return n ? a.reverse() : a;
  },
  cu = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const r = i < 10 ? `0${i}` : i;
      return new Date(`2017-${r}-01T00:00:00+00:00`);
    });
    if (e !== null)
      try {
        const i = a === "long" ? "MMMM" : "MMM";
        return t.map((r, s) => {
          const l = Ta(r, i, { locale: e });
          return { text: l.charAt(0).toUpperCase() + l.substring(1), value: s };
        });
      } catch {}
    const o = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
    return t.map((i, r) => {
      const s = o.format(i);
      return { text: s.charAt(0).toUpperCase() + s.substring(1), value: r };
    });
  },
  o1 = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  mt = (e) => {
    const n = A(e);
    return n != null && n.$el ? n?.$el : n;
  },
  r1 = (e) => Object.assign({ type: "dot" }, e),
  du = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  po = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  gt = (e) => e,
  Us = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  Vs = (e) => e === null,
  i1 = (e) => {
    if (e)
      return [
        ...e.querySelectorAll("input, button, select, textarea, a[href]"),
      ][0];
  },
  s1 = (e) => {
    const n = [],
      a = (t) => t.filter((o) => o);
    for (let t = 0; t < e.length; t += 3) {
      const o = [e[t], e[t + 1], e[t + 2]];
      n.push(a(o));
    }
    return n;
  },
  Yn = (e, n, a) => {
    const t = a != null,
      o = n != null;
    if (!t && !o) return !1;
    const i = +a,
      r = +n;
    return t && o ? +e > i || +e < r : t ? +e > i : o ? +e < r : !1;
  },
  ln = (e, n) =>
    s1(e).map((a) =>
      a.map((t) => {
        const { active: o, disabled: i, isBetween: r, highlighted: s } = n(t);
        return {
          ...t,
          active: o,
          disabled: i,
          className: {
            dp__overlay_cell_active: o,
            dp__overlay_cell: !o,
            dp__overlay_cell_disabled: i,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: i && o,
            dp__cell_in_between: r,
            "dp--highlighted": s,
          },
        };
      })
    ),
  Ca = (e, n, a = !1) => {
    e &&
      n.allowStopPropagation &&
      (a && e.stopImmediatePropagation(), e.stopPropagation());
  },
  l1 = () =>
    [
      "a[href]",
      "area[href]",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
      "[data-datepicker-instance]",
    ].join(", ");
function u1(e, n) {
  let a = [...document.querySelectorAll(l1())];
  a = a.filter(
    (o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance")
  );
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const c1 = (e, n) => {
    let a;
    return function (...t) {
      clearTimeout(a),
        (a = setTimeout(() => {
          e(...t);
        }, n));
    };
  },
  Ys = (e, n, a, t, o) => {
    const i = wr(e, n.slice(0, e.length), new Date());
    return Dn(i) && $l(i)
      ? t || o
        ? i
        : Je(i, {
            hours: +a.hours,
            minutes: +a?.minutes,
            seconds: +a?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  d1 = (e, n, a, t, o) => {
    const i = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string") return Ys(e, n, i, t, o);
    if (Array.isArray(n)) {
      let r = null;
      for (const s of n) if (((r = Ys(e, s, i, t, o)), r)) break;
      return r;
    }
    return typeof n == "function" ? n(e) : null;
  },
  ne = (e) => (e ? new Date(e) : new Date()),
  m1 = (e, n, a) => {
    if (n) {
      const o = (e.getMonth() + 1).toString().padStart(2, "0"),
        i = e.getDate().toString().padStart(2, "0"),
        r = e.getHours().toString().padStart(2, "0"),
        s = e.getMinutes().toString().padStart(2, "0"),
        l = a ? e.getSeconds().toString().padStart(2, "0") : "00";
      return `${e.getFullYear()}-${o}-${i}T${r}:${s}:${l}.000Z`;
    }
    const t = Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds()
    );
    return new Date(t).toISOString();
  },
  bt = (e) => {
    let n = ne(JSON.parse(JSON.stringify(e)));
    return (n = nu(n, 0)), (n = ou(n, 0)), (n = ti(n, 0)), (n = ei(n, 0)), n;
  },
  Pa = (e, n, a, t) => {
    let o = e ? ne(e) : ne();
    return (
      (n || n === 0) && (o = nu(o, +n)),
      (a || a === 0) && (o = ou(o, +a)),
      (t || t === 0) && (o = ti(o, +t)),
      ei(o, 0)
    );
  },
  ht = (e, n) => (!e || !n ? !1 : Vn(bt(e), bt(n))),
  We = (e, n) => (!e || !n ? !1 : Qa(bt(e), bt(n))),
  yt = (e, n) => (!e || !n ? !1 : Un(bt(e), bt(n))),
  wo = (e, n, a) =>
    e != null && e[0] && e != null && e[1]
      ? yt(a, e[0]) && ht(a, e[1])
      : e != null && e[0] && n
      ? (yt(a, e[0]) && ht(a, n)) || (ht(a, e[0]) && yt(a, n))
      : !1,
  Yt = (e) => {
    const n = Je(new Date(e), { date: 1 });
    return bt(n);
  },
  Go = (e, n, a) =>
    n && (a || a === 0)
      ? Object.fromEntries(
          ["hours", "minutes", "seconds"].map((t) =>
            t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]]
          )
        )
      : {
          hours: isNaN(+e.hours) ? void 0 : +e.hours,
          minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
          seconds: isNaN(+e.seconds) ? void 0 : +e.seconds,
        },
  Ra = (e) => ({ hours: qt(e), minutes: ia(e), seconds: rn(e) }),
  mu = (e, n) => {
    if (n) {
      const a = Re(ne(n));
      if (a > e) return 12;
      if (a === e) return Ue(ne(n));
    }
  },
  gu = (e, n) => {
    if (n) {
      const a = Re(ne(n));
      return a < e ? -1 : a === e ? Ue(ne(n)) : void 0;
    }
  },
  un = (e) => {
    if (e) return Re(ne(e));
  },
  Gt = (e, n) => (n ? e1(e, n) : e),
  pu = (e, n) => (n ? t1(e, n) : e),
  g1 = (e) => (e instanceof Date ? e : gw(e)),
  vu = (e, n) => {
    const a = yt(e, n) ? n : e,
      t = yt(n, e) ? n : e;
    return Ul({ start: a, end: t });
  },
  p1 = (e) => {
    const n = Wt(e, 1);
    return { month: Ue(n), year: Re(n) };
  },
  oo = (e, n, a) => {
    const t = $a(Gt(e, n), { weekStartsOn: +a }),
      o = d_(Gt(e, n), { weekStartsOn: +a });
    return [t, o];
  },
  hu = (e, n) => {
    const a = { hours: qt(ne()), minutes: ia(ne()), seconds: n ? rn(ne()) : 0 };
    return Object.assign(a, e);
  },
  ka = (e, n, a) => [
    Je(ne(e), { date: 1 }),
    Je(ne(), { month: n, year: a, date: 1 }),
  ],
  pa = (e, n, a) => {
    let t = e ? ne(e) : ne();
    return (n || n === 0) && (t = au(t, n)), a && (t = ra(t, a)), t;
  },
  fu = (e, n, a, t, o) => {
    if (!t || (o && !n) || (!o && !a)) return !1;
    const i = o ? Wt(e, 1) : sn(e, 1),
      r = [Ue(i), Re(i)];
    return o ? !h1(...r, n) : !v1(...r, a);
  },
  v1 = (e, n, a) => ht(...ka(a, e, n)) || We(...ka(a, e, n)),
  h1 = (e, n, a) => yt(...ka(a, e, n)) || We(...ka(a, e, n)),
  yu = (e, n, a, t, o, i, r) => {
    if (typeof n == "function" && !r) return n(e);
    const s = a ? { locale: a } : void 0;
    return Array.isArray(e)
      ? `${Ta(e[0], i, s)}${o && !e[1] ? "" : t}${e[1] ? Ta(e[1], i, s) : ""}`
      : Ta(e, i, s);
  },
  ja = (e) => {
    if (e) return null;
    throw new Error(po.prop("partial-range"));
  },
  ao = (e, n) => {
    if (n) return e();
    throw new Error(po.prop("range"));
  },
  Er = (e) =>
    Array.isArray(e) ? Dn(e[0]) && (e[1] ? Dn(e[1]) : !0) : e ? Dn(e) : !1,
  f1 = (e, n) =>
    Je(n ?? ne(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  jo = (e, n, a, t) => {
    if (!e) return !0;
    if (t) {
      const o = a === "max" ? Vn(e, n) : Un(e, n),
        i = { seconds: 0, milliseconds: 0 };
      return o || Qa(Je(e, i), Je(n, i));
    }
    return a === "max"
      ? e.getTime() <= n.getTime()
      : e.getTime() >= n.getTime();
  },
  zo = (e, n, a) => (e ? f1(e, n) : ne(a ?? n)),
  Fs = (e, n, a, t, o) => {
    if (Array.isArray(t)) {
      const r = zo(e, t[0], n),
        s = zo(e, t[1], n);
      return jo(t[0], r, a, !!n) && jo(t[1], s, a, !!n) && o;
    }
    const i = zo(e, t, n);
    return jo(t, i, a, !!n) && o;
  },
  Ko = (e) => Je(ne(), Ra(e)),
  y1 = (e, n) =>
    Array.isArray(e)
      ? e
          .map((a) => ne(a))
          .filter((a) => Re(ne(a)) === n)
          .map((a) => Ue(a))
      : [],
  bu = (e, n, a) =>
    typeof e == "function"
      ? e({ month: n, year: a })
      : !!e.months.find((t) => t.month === n && t.year === a),
  di = (e, n) => (typeof e == "function" ? e(n) : e.years.includes(n)),
  Sn = va({ menuFocused: !1, shiftKeyInMenu: !1 }),
  _u = () => {
    const e = (a) => {
        Sn.menuFocused = a;
      },
      n = (a) => {
        Sn.shiftKeyInMenu !== a && (Sn.shiftKeyInMenu = a);
      };
    return {
      control: u(() => ({
        shiftKeyInMenu: Sn.shiftKeyInMenu,
        menuFocused: Sn.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: n,
    };
  },
  Xe = va({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  Qo = L(null),
  no = L(!1),
  Zo = L(!1),
  Xo = L(!1),
  Jo = L(!1),
  wt = L(0),
  vt = L(0),
  Ia = () => {
    const e = u(() =>
        no.value
          ? [...Xe.selectionGrid, Xe.actionRow].filter((d) => d.length)
          : Zo.value
          ? [
              ...Xe.timePicker[0],
              ...Xe.timePicker[1],
              Jo.value ? [] : [Qo.value],
              Xe.actionRow,
            ].filter((d) => d.length)
          : Xo.value
          ? [...Xe.monthPicker, Xe.actionRow]
          : [Xe.monthYear, ...Xe.calendar, Xe.time, Xe.actionRow].filter(
              (d) => d.length
            )
      ),
      n = (d) => {
        wt.value = d ? wt.value + 1 : wt.value - 1;
        let p = null;
        e.value[vt.value] && (p = e.value[vt.value][wt.value]),
          p || (wt.value = d ? wt.value - 1 : wt.value + 1);
      },
      a = (d) => {
        (vt.value === 0 && !d) ||
          (vt.value === e.value.length && d) ||
          ((vt.value = d ? vt.value + 1 : vt.value - 1),
          e.value[vt.value]
            ? e.value[vt.value] &&
              !e.value[vt.value][wt.value] &&
              wt.value !== 0 &&
              (wt.value = e.value[vt.value].length - 1)
            : (vt.value = d ? vt.value - 1 : vt.value + 1));
      },
      t = (d) => {
        let p = null;
        e.value[vt.value] && (p = e.value[vt.value][wt.value]),
          p
            ? p.focus({ preventScroll: !no.value })
            : (wt.value = d ? wt.value - 1 : wt.value + 1);
      },
      o = () => {
        n(!0), t(!0);
      },
      i = () => {
        n(!1), t(!1);
      },
      r = () => {
        a(!1), t(!0);
      },
      s = () => {
        a(!0), t(!0);
      },
      l = (d, p) => {
        Xe[p] = d;
      },
      m = (d, p) => {
        Xe[p] = d;
      },
      g = () => {
        (wt.value = 0), (vt.value = 0);
      };
    return {
      buildMatrix: l,
      buildMultiLevelMatrix: m,
      setTimePickerBackRef: (d) => {
        Qo.value = d;
      },
      setSelectionGrid: (d) => {
        (no.value = d), g(), d || (Xe.selectionGrid = []);
      },
      setTimePicker: (d, p = !1) => {
        (Zo.value = d),
          (Jo.value = p),
          g(),
          d || ((Xe.timePicker[0] = []), (Xe.timePicker[1] = []));
      },
      setTimePickerElements: (d, p = 0) => {
        Xe.timePicker[p] = d;
      },
      arrowRight: o,
      arrowLeft: i,
      arrowUp: r,
      arrowDown: s,
      clearArrowNav: () => {
        (Xe.monthYear = []),
          (Xe.calendar = []),
          (Xe.time = []),
          (Xe.actionRow = []),
          (Xe.selectionGrid = []),
          (Xe.timePicker[0] = []),
          (Xe.timePicker[1] = []),
          (no.value = !1),
          (Zo.value = !1),
          (Jo.value = !1),
          (Xo.value = !1),
          g(),
          (Qo.value = null);
      },
      setMonthPicker: (d) => {
        (Xo.value = d), g();
      },
      refSets: Xe,
    };
  },
  Ws = (e) => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...(e ?? {}),
  }),
  b1 = (e) => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...(e ?? {}),
  }),
  qs = (e) =>
    e ? (typeof e == "boolean" ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  _1 = (e) => {
    const n = typeof e == "object" && e,
      a = { static: !0, solo: !1 };
    if (!e) return { ...a, count: qs(!1) };
    const t = n ? e : {},
      o = n ? t.count ?? !0 : e,
      i = qs(o);
    return Object.assign(a, t, { count: i });
  },
  w1 = (e, n, a) => e || (typeof a == "string" ? a : n),
  k1 = (e) => (typeof e == "boolean" ? (e ? Ws({}) : !1) : Ws(e)),
  S1 = (e) => {
    const n = {
      enterSubmit: !0,
      tabSubmit: !0,
      openMenu: !0,
      selectOnFocus: !1,
      rangeSeparator: " - ",
    };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { ...n, enabled: e };
  },
  T1 = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  C1 = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  P1 = (e) => {
    const n = { input: !1 };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...n };
  },
  I1 = (e) => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...(e ?? {}),
  }),
  E1 = (e, n, a) => {
    const t = {
      dates: Array.isArray(e) ? e.map((o) => ne(o)) : [],
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      weekdays: n,
      options: { highlightDisabled: a },
    };
    return typeof e == "function" ? e : { ...t, ...(e ?? {}) };
  },
  D1 = (e) =>
    typeof e == "object"
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  ct = (e) => {
    const n = () => {
        const w = e.enableSeconds ? ":ss" : "";
        return e.is24 ? `HH:mm${w}` : `hh:mm${w} aa`;
      },
      a = () =>
        e.format
          ? e.format
          : e.monthPicker
          ? "MM/yyyy"
          : e.timePicker
          ? n()
          : e.weekPicker
          ? "MM/dd/yyyy"
          : e.yearPicker
          ? "yyyy"
          : e.quarterPicker
          ? "QQQ/yyyy"
          : e.enableTimePicker
          ? `MM/dd/yyyy, ${n()}`
          : "MM/dd/yyyy",
      t = (w) => hu(w, e.enableSeconds),
      o = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [t(e.startTime[0]), t(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? t(e.startTime)
          : null,
      i = u(() => _1(e.multiCalendars)),
      r = u(() => o()),
      s = u(() => b1(e.ariaLabels)),
      l = u(() => T1(e.filters)),
      m = u(() => k1(e.transitions)),
      g = u(() => C1(e.actionRow)),
      d = u(() => w1(e.previewFormat, e.format, a())),
      p = u(() => S1(e.textInput)),
      f = u(() => P1(e.inline)),
      b = u(() => I1(e.config)),
      S = u(() =>
        E1(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      T = u(() => D1(e.weekNumbers));
    return {
      defaultedTransitions: m,
      defaultedMultiCalendars: i,
      defaultedStartTime: r,
      defaultedAriaLabels: s,
      defaultedFilters: l,
      defaultedActionRow: g,
      defaultedPreviewFormat: d,
      defaultedTextInput: p,
      defaultedInline: f,
      defaultedConfig: b,
      defaultedHighlight: S,
      defaultedWeekNumbers: T,
      getDefaultPattern: a,
      getDefaultStartTime: o,
    };
  },
  M1 = (e, n, a) => {
    const t = L(),
      { defaultedTextInput: o, getDefaultPattern: i } = ct(n),
      r = L(""),
      s = Bn(n, "format");
    Ne(t, () => {
      e("internal-model-change", t.value);
    }),
      Ne(s, () => {
        V();
      });
    const l = (v) => pu(v, n.timezone),
      m = (v) => Gt(v, n.timezone),
      g = (v, F, q = !1) =>
        yu(
          v,
          n.format,
          n.formatLocale,
          o.value.rangeSeparator,
          n.modelAuto,
          F ?? i(),
          q
        ),
      d = (v) =>
        v
          ? n.modelType
            ? Y(v)
            : {
                hours: qt(v),
                minutes: ia(v),
                seconds: n.enableSeconds ? rn(v) : 0,
              }
          : null,
      p = (v) => (n.modelType ? Y(v) : { month: Ue(v), year: Re(v) }),
      f = (v) =>
        Array.isArray(v)
          ? n.multiDates
            ? v.map((F) => b(F, ra(ne(), F)))
            : ao(
                () => [
                  ra(ne(), v[0]),
                  v[1] ? ra(ne(), v[1]) : ja(n.partialRange),
                ],
                n.range
              )
          : ra(ne(), +v),
      b = (v, F) =>
        (typeof v == "string" || typeof v == "number") && n.modelType
          ? E(v)
          : F,
      S = (v) =>
        Array.isArray(v)
          ? [
              b(v[0], Pa(null, +v[0].hours, +v[0].minutes, v[0].seconds)),
              b(v[1], Pa(null, +v[1].hours, +v[1].minutes, v[1].seconds)),
            ]
          : b(v, Pa(null, v.hours, v.minutes, v.seconds)),
      T = (v) =>
        Array.isArray(v)
          ? n.multiDates
            ? v.map((F) => b(F, pa(null, +F.month, +F.year)))
            : ao(
                () => [
                  b(v[0], pa(null, +v[0].month, +v[0].year)),
                  b(
                    v[1],
                    v[1]
                      ? pa(null, +v[1].month, +v[1].year)
                      : ja(n.partialRange)
                  ),
                ],
                n.range
              )
          : b(v, pa(null, +v.month, +v.year)),
      w = (v) => {
        if (Array.isArray(v)) return v.map((F) => E(F));
        throw new Error(po.dateArr("multi-dates"));
      },
      y = (v) => {
        if (Array.isArray(v)) return [ne(v[0]), ne(v[1])];
        throw new Error(po.dateArr("week-picker"));
      },
      D = (v) =>
        n.modelAuto
          ? Array.isArray(v)
            ? [E(v[0]), E(v[1])]
            : n.autoApply
            ? [E(v)]
            : [E(v), null]
          : Array.isArray(v)
          ? ao(() => [E(v[0]), v[1] ? E(v[1]) : ja(n.partialRange)], n.range)
          : E(v),
      C = () => {
        Array.isArray(t.value) &&
          n.range &&
          t.value.length === 1 &&
          t.value.push(ja(n.partialRange));
      },
      M = () => {
        const v = t.value;
        return [Y(v[0]), v[1] ? Y(v[1]) : ja(n.partialRange)];
      },
      N = () => (t.value[1] ? M() : Y(gt(t.value[0]))),
      R = () => (t.value || []).map((v) => Y(v)),
      Q = () => (
        C(),
        n.modelAuto
          ? N()
          : n.multiDates
          ? R()
          : Array.isArray(t.value)
          ? ao(() => M(), n.range)
          : Y(gt(t.value))
      ),
      G = (v) =>
        !v || (Array.isArray(v) && !v.length)
          ? null
          : n.timePicker
          ? S(gt(v))
          : n.monthPicker
          ? T(gt(v))
          : n.yearPicker
          ? f(gt(v))
          : n.multiDates
          ? w(gt(v))
          : n.weekPicker
          ? y(gt(v))
          : D(gt(v)),
      P = (v) => {
        const F = G(v);
        Er(gt(F))
          ? ((t.value = gt(F)), V())
          : ((t.value = null), (r.value = ""));
      },
      B = () => {
        const v = (F) => Ta(F, o.value.format);
        return `${v(t.value[0])} ${o.value.rangeSeparator} ${
          t.value[1] ? v(t.value[1]) : ""
        }`;
      },
      U = () =>
        a.value && t.value
          ? Array.isArray(t.value)
            ? B()
            : Ta(t.value, o.value.format)
          : g(t.value),
      j = () =>
        t.value
          ? n.multiDates
            ? t.value.map((v) => g(v)).join("; ")
            : o.value.enabled && typeof o.value.format == "string"
            ? U()
            : g(t.value)
          : "",
      V = () => {
        !n.format ||
        typeof n.format == "string" ||
        (o.value.enabled && typeof o.value.format == "string")
          ? (r.value = j())
          : (r.value = n.format(t.value));
      },
      E = (v) => {
        if (n.utc) {
          const F = new Date(v);
          return n.utc === "preserve"
            ? new Date(F.getTime() + F.getTimezoneOffset() * 6e4)
            : F;
        }
        return n.modelType
          ? n.modelType === "date" || n.modelType === "timestamp"
            ? m(new Date(v))
            : n.modelType === "format" &&
              (typeof n.format == "string" || !n.format)
            ? wr(v, i(), new Date())
            : m(wr(v, n.modelType, new Date()))
          : m(new Date(v));
      },
      Y = (v) =>
        v
          ? n.utc
            ? m1(v, n.utc === "preserve", n.enableSeconds)
            : n.modelType
            ? n.modelType === "timestamp"
              ? +l(v)
              : n.modelType === "format" &&
                (typeof n.format == "string" || !n.format)
              ? g(l(v))
              : g(l(v), n.modelType, !0)
            : l(v)
          : "",
      $ = (v, F = !1) => {
        if ((e("update:model-value", v), n.emitTimezone && F)) {
          const q = Array.isArray(v)
            ? v.map((te) => Gt(gt(te)), n.emitTimezone)
            : Gt(gt(v), n.emitTimezone);
          e("update:model-timezone-value", q);
        }
      },
      z = (v) =>
        Array.isArray(t.value)
          ? n.multiDates
            ? t.value.map((F) => v(F))
            : [v(t.value[0]), t.value[1] ? v(t.value[1]) : ja(n.partialRange)]
          : v(gt(t.value)),
      k = (v) => $(gt(z(v)));
    return {
      inputValue: r,
      internalModelValue: t,
      checkBeforeEmit: () =>
        t.value
          ? n.range
            ? n.partialRange
              ? t.value.length >= 1
              : t.value.length === 2
            : !!t.value
          : !1,
      parseExternalModelValue: P,
      formatInputValue: V,
      emitModelValue: () => (
        V(),
        n.monthPicker
          ? k(p)
          : n.timePicker
          ? k(d)
          : n.yearPicker
          ? k(Re)
          : n.weekPicker
          ? $(
              t.value.map((v) => Y(v)),
              !0
            )
          : $(Q(), !0)
      ),
    };
  },
  O1 = (e, n) => {
    const { defaultedFilters: a } = ct(e),
      { validateMonthYearInRange: t } = Fa(e),
      o = (m, g) => {
        let d = m;
        return a.value.months.includes(Ue(d))
          ? ((d = g ? Wt(m, 1) : sn(m, 1)), o(d, g))
          : d;
      },
      i = (m, g) => {
        let d = m;
        return a.value.years.includes(Re(d))
          ? ((d = g ? zr(m, 1) : ru(m, 1)), i(d, g))
          : d;
      },
      r = (m, g = !1) => {
        const d = Je(new Date(), { month: e.month, year: e.year });
        let p = m ? Wt(d, 1) : sn(d, 1);
        e.disableYearSelect && (p = ra(p, e.year));
        let f = Ue(p),
          b = Re(p);
        a.value.months.includes(f) && ((p = o(p, m)), (f = Ue(p)), (b = Re(p))),
          a.value.years.includes(b) && ((p = i(p, m)), (b = Re(p))),
          t(f, b, m, e.preventMinMaxNavigation) && s(f, b, g);
      },
      s = (m, g, d) => {
        n("update-month-year", { month: m, year: g, fromNav: d });
      },
      l = u(
        () => (m) =>
          fu(
            Je(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            m
          )
      );
    return { handleMonthYearChange: r, isDisabled: l, updateMonthYear: s };
  };
var za = ((e) => (
    (e.center = "center"), (e.left = "left"), (e.right = "right"), e
  ))(za || {}),
  Ut = ((e) => ((e.month = "month"), (e.year = "year"), e))(Ut || {}),
  La = ((e) => ((e.top = "top"), (e.bottom = "bottom"), e))(La || {}),
  Na = ((e) => (
    (e.header = "header"),
    (e.calendar = "calendar"),
    (e.timePicker = "timePicker"),
    e
  ))(Na || {}),
  Jt = ((e) => (
    (e.month = "month"),
    (e.year = "year"),
    (e.calendar = "calendar"),
    (e.time = "time"),
    (e.minutes = "minutes"),
    (e.hours = "hours"),
    (e.seconds = "seconds"),
    e
  ))(Jt || {});
const L1 = ({
    menuRef: e,
    menuRefInner: n,
    inputRef: a,
    pickerWrapperRef: t,
    inline: o,
    emit: i,
    props: r,
    slots: s,
  }) => {
    const l = L({}),
      m = L(!1),
      g = L({ top: "0", left: "0" }),
      d = L(!1),
      p = Bn(r, "teleportCenter");
    Ne(p, () => {
      (g.value = JSON.parse(JSON.stringify({}))), C();
    });
    const f = (E) => {
        if (r.teleport) {
          const Y = E.getBoundingClientRect();
          return { left: Y.left + window.scrollX, top: Y.top + window.scrollY };
        }
        return { top: 0, left: 0 };
      },
      b = (E, Y) => {
        g.value.left = `${E + Y - l.value.width}px`;
      },
      S = (E) => {
        g.value.left = `${E}px`;
      },
      T = (E, Y) => {
        r.position === za.left && S(E),
          r.position === za.right && b(E, Y),
          r.position === za.center &&
            (g.value.left = `${E + Y / 2 - l.value.width / 2}px`);
      },
      w = (E) => {
        const { width: Y, height: $ } = E.getBoundingClientRect(),
          { top: z, left: k } = r.altPosition ? r.altPosition(E) : f(E);
        return { top: +z, left: +k, width: Y, height: $ };
      },
      y = () => {
        (g.value.left = "50%"),
          (g.value.top = "50%"),
          (g.value.transform = "translate(-50%, -50%)"),
          (g.value.position = "fixed"),
          delete g.value.opacity;
      },
      D = () => {
        const E = mt(a),
          { top: Y, left: $, transform: z } = r.altPosition(E);
        g.value = { top: `${Y}px`, left: `${$}px`, transform: z ?? "" };
      },
      C = (E = !0) => {
        var Y;
        if (!o.value.enabled) {
          if (p.value) return y();
          if (r.altPosition !== null) return D();
          if (E) {
            const $ = r.teleport
              ? (Y = n.value) == null
                ? void 0
                : Y.$el
              : e.value;
            $ && (l.value = $.getBoundingClientRect()),
              i("recalculate-position");
          }
          return B();
        }
      },
      M = ({ inputEl: E, left: Y, width: $ }) => {
        window.screen.width > 768 && !m.value && T(Y, $), Q(E);
      },
      N = (E) => {
        const { top: Y, left: $, height: z, width: k } = w(E);
        (g.value.top = `${z + Y + +r.offset}px`),
          (d.value = !1),
          m.value || (g.value.left = `${$ + k / 2 - l.value.width / 2}px`),
          M({ inputEl: E, left: $, width: k });
      },
      R = (E) => {
        const { top: Y, left: $, width: z } = w(E);
        (g.value.top = `${Y - +r.offset - l.value.height}px`),
          (d.value = !0),
          M({ inputEl: E, left: $, width: z });
      },
      Q = (E) => {
        if (r.autoPosition) {
          const { left: Y, width: $ } = w(E),
            { left: z, right: k } = l.value;
          if (!m.value) {
            if (Math.abs(z) !== Math.abs(k)) {
              if (z <= 0) return (m.value = !0), S(Y);
              if (k >= document.documentElement.clientWidth)
                return (m.value = !0), b(Y, $);
            }
            return T(Y, $);
          }
        }
      },
      G = () => {
        const E = mt(a);
        if (E) {
          const { height: Y } = l.value,
            { top: $, height: z } = E.getBoundingClientRect(),
            k = window.innerHeight - $ - z,
            v = $;
          return Y <= k
            ? La.bottom
            : Y > k && Y <= v
            ? La.top
            : k >= v
            ? La.bottom
            : La.top;
        }
        return La.bottom;
      },
      P = (E) => (G() === La.bottom ? N(E) : R(E)),
      B = () => {
        const E = mt(a);
        if (E) return r.autoPosition ? P(E) : N(E);
      },
      U = function (E) {
        if (E) {
          const Y = E.scrollHeight > E.clientHeight,
            $ = window.getComputedStyle(E).overflowY.indexOf("hidden") !== -1;
          return Y && !$;
        }
        return !0;
      },
      j = function (E) {
        return !E ||
          E === document.body ||
          E.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : U(E)
          ? E
          : j(E.parentNode);
      },
      V = (E) => {
        if (E)
          switch (r.position) {
            case za.left:
              return { left: 0, transform: "translateX(0)" };
            case za.right:
              return { left: `${E.width}px`, transform: "translateX(-100%)" };
            default:
              return {
                left: `${E.width / 2}px`,
                transform: "translateX(-50%)",
              };
          }
        return {};
      };
    return {
      openOnTop: d,
      menuStyle: g,
      xCorrect: m,
      setMenuPosition: C,
      getScrollableParent: j,
      shadowRender: (E, Y) => {
        var $, z, k;
        const v = document.createElement("div"),
          F = ($ = mt(a)) == null ? void 0 : $.getBoundingClientRect();
        v.setAttribute("id", "dp--temp-container");
        const q =
          (z = t.value) != null && z.clientWidth ? t.value : document.body;
        q.append(v);
        const te = V(F),
          X = xu(
            E,
            {
              ...Y,
              shadow: !0,
              style: { opacity: 0, position: "absolute", ...te },
            },
            Object.fromEntries(
              Object.keys(s)
                .filter((x) => ["right-sidebar", "left-sidebar"].includes(x))
                .map((x) => [x, s[x]])
            )
          );
        yi(X, v),
          (l.value = (k = X.el) == null ? void 0 : k.getBoundingClientRect()),
          yi(null, v),
          q.removeChild(v);
      },
    };
  },
  wa = [
    { name: "clock-icon", use: ["time", "calendar", "shared"] },
    {
      name: "arrow-left",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    {
      name: "arrow-right",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
    { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
    {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar", "shared", "year-mode"],
    },
    { name: "day", use: ["calendar", "shared"] },
    { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
    {
      name: "year-overlay-value",
      use: ["calendar", "month-year", "shared", "year-mode"],
    },
    { name: "year-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay-header", use: ["month-year", "shared"] },
    { name: "year-overlay-header", use: ["month-year", "shared"] },
    { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "hours", use: ["calendar", "time", "shared"] },
    { name: "minutes", use: ["calendar", "time", "shared"] },
    { name: "month", use: ["calendar", "month-year", "shared"] },
    { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
    { name: "action-buttons", use: ["action"] },
    { name: "action-preview", use: ["action"] },
    { name: "calendar-header", use: ["calendar", "shared"] },
    { name: "marker-tooltip", use: ["calendar", "shared"] },
    { name: "action-extra", use: ["menu"] },
    { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
    { name: "am-pm-button", use: ["calendar", "time", "shared"] },
    { name: "left-sidebar", use: ["menu"] },
    { name: "right-sidebar", use: ["menu"] },
    { name: "month-year", use: ["month-year", "shared"] },
    { name: "time-picker", use: ["menu", "shared"] },
    { name: "action-row", use: ["action"] },
    { name: "marker", use: ["calendar", "shared"] },
    { name: "quarter", use: ["shared"] },
  ],
  B1 = [
    { name: "trigger" },
    { name: "input-icon" },
    { name: "clear-icon" },
    { name: "dp-input" },
  ],
  A1 = {
    all: () => wa,
    monthYear: () => wa.filter((e) => e.use.includes("month-year")),
    input: () => B1,
    timePicker: () => wa.filter((e) => e.use.includes("time")),
    action: () => wa.filter((e) => e.use.includes("action")),
    calendar: () => wa.filter((e) => e.use.includes("calendar")),
    menu: () => wa.filter((e) => e.use.includes("menu")),
    shared: () => wa.filter((e) => e.use.includes("shared")),
    yearMode: () => wa.filter((e) => e.use.includes("year-mode")),
  },
  Mt = (e, n, a) => {
    const t = [];
    return (
      A1[n]().forEach((o) => {
        e[o.name] && t.push(o.name);
      }),
      a != null &&
        a.length &&
        a.forEach((o) => {
          o.slot && t.push(o.slot);
        }),
      t
    );
  },
  Gn = (e) => {
    const n = u(() => (t) => e.value ? (t ? e.value.open : e.value.close) : ""),
      a = u(
        () => (t) =>
          e.value ? (t ? e.value.menuAppearTop : e.value.menuAppearBottom) : ""
      );
    return { transitionName: n, showTransition: !!e.value, menuTransition: a };
  },
  jn = (e, n) => {
    const a = ne(Gt(new Date(), e.timezone)),
      t = L([{ month: Ue(a), year: Re(a) }]),
      o = va({
        hours: e.range ? [qt(a), qt(a)] : qt(a),
        minutes: e.range ? [ia(a), ia(a)] : ia(a),
        seconds: e.range ? [0, 0] : 0,
      }),
      i = u({
        get: () => e.internalModelValue,
        set: (l) => {
          !e.readonly && !e.disabled && n("update:internal-model-value", l);
        },
      }),
      r = u(() => (l) => t.value[l] ? t.value[l].month : 0),
      s = u(() => (l) => t.value[l] ? t.value[l].year : 0);
    return { calendars: t, time: o, modelValue: i, month: r, year: s };
  },
  x1 = (e, n) => {
    const { defaultedMultiCalendars: a, defaultedHighlight: t } = ct(n),
      { isDisabled: o, matchDate: i } = Fa(n),
      r = L(null),
      s = L(ne(Gt(new Date(), n.timezone))),
      l = (k) => {
        (!k.current && n.hideOffsetDates) || (r.value = k.value);
      },
      m = () => {
        r.value = null;
      },
      g = (k) =>
        Array.isArray(e.value) && n.range && e.value[0] && r.value
          ? k
            ? yt(r.value, e.value[0])
            : ht(r.value, e.value[0])
          : !0,
      d = (k, v) => {
        const F = () =>
            e.value ? (v ? e.value[0] || null : e.value[1]) : null,
          q = e.value && Array.isArray(e.value) ? F() : null;
        return We(ne(k.value), q);
      },
      p = (k) => {
        const v = Array.isArray(e.value) ? e.value[0] : null;
        return k ? !ht(r.value ?? null, v) : !0;
      },
      f = (k, v = !0) =>
        (n.range || n.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? n.hideOffsetDates && !k.current
            ? !1
            : We(ne(k.value), e.value[v ? 0 : 1])
          : n.range
          ? (d(k, v) && p(v)) ||
            (We(k.value, Array.isArray(e.value) ? e.value[0] : null) && g(v))
          : !1,
      b = (k, v, F) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? k
            ? !1
            : F
            ? yt(e.value[0], v.value)
            : ht(e.value[0], v.value)
          : !1,
      S = (k) =>
        !e.value || (n.hideOffsetDates && !k.current)
          ? !1
          : n.range
          ? n.modelAuto && Array.isArray(e.value)
            ? We(k.value, e.value[0] ? e.value[0] : s.value)
            : !1
          : n.multiDates && Array.isArray(e.value)
          ? e.value.some((v) => We(v, k.value))
          : We(k.value, e.value ? e.value : s.value),
      T = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const v = ga(r.value, +n.autoRange),
              F = oo(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(F[1], ne(k.value)) : We(v, ne(k.value));
          }
          return !1;
        }
        return !1;
      },
      w = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            const v = ga(r.value, +n.autoRange);
            if (n.hideOffsetDates && !k.current) return !1;
            const F = oo(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker
              ? yt(k.value, F[0]) && ht(k.value, F[1])
              : yt(k.value, r.value) && ht(k.value, v);
          }
          return !1;
        }
        return !1;
      },
      y = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const v = oo(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(v[0], k.value) : We(r.value, k.value);
          }
          return !1;
        }
        return !1;
      },
      D = (k) => wo(e.value, r.value, k.value),
      C = () =>
        n.modelAuto && Array.isArray(n.internalModelValue)
          ? !!n.internalModelValue[0]
          : !1,
      M = () => (n.modelAuto ? du(n.internalModelValue) : !0),
      N = (k) => {
        if ((Array.isArray(e.value) && e.value.length) || n.weekPicker)
          return !1;
        const v = n.range ? !f(k) && !f(k, !1) : !0;
        return !o(k.value) && !S(k) && !(!k.current && n.hideOffsetDates) && v;
      },
      R = (k) => (n.range ? (n.modelAuto ? C() && S(k) : !1) : S(k)),
      Q = (k) => {
        var v;
        return t.value
          ? typeof t.value == "function"
            ? t.value(k.value)
            : i(
                k.value,
                (v = n.arrMapValues) != null && v.highlightedDates
                  ? n.arrMapValues.highlightedDates
                  : t.value.dates
              )
          : !1;
      },
      G = (k) => {
        const v = o(k.value);
        return (
          v &&
          (typeof t.value == "function"
            ? !t.value(k.value, v)
            : !t.value.options.highlightDisabled)
        );
      },
      P = (k) => {
        var v;
        return typeof t.value == "function"
          ? t.value(k.value)
          : (v = t.value.weekdays) == null
          ? void 0
          : v.includes(k.value.getDay());
      },
      B = (k) =>
        (n.range || n.weekPicker) &&
        (!(a.value.count > 0) || k.current) &&
        M() &&
        !(!k.current && n.hideOffsetDates) &&
        !S(k)
          ? D(k)
          : !1,
      U = (k) => {
        const { isRangeStart: v, isRangeEnd: F } = E(k),
          q = n.range ? v || F : !1;
        return {
          dp__cell_offset: !k.current,
          dp__pointer:
            !n.disabled && !(!k.current && n.hideOffsetDates) && !o(k.value),
          dp__cell_disabled: o(k.value),
          dp__cell_highlight:
            !G(k) &&
            (Q(k) || P(k)) &&
            !R(k) &&
            !q &&
            !y(k) &&
            !(B(k) && n.weekPicker) &&
            !F,
          dp__cell_highlight_active: !G(k) && (Q(k) || P(k)) && R(k),
          dp__today: !n.noToday && We(k.value, s.value) && k.current,
        };
      },
      j = (k) => ({ dp__active_date: R(k), dp__date_hover: N(k) }),
      V = (k) => ({
        ...Y(k),
        ...$(k),
        dp__range_between_week: B(k) && n.weekPicker,
      }),
      E = (k) => {
        const v = a.value.count > 0 ? k.current && f(k) && M() : f(k) && M(),
          F =
            a.value.count > 0 ? k.current && f(k, !1) && M() : f(k, !1) && M();
        return { isRangeStart: v, isRangeEnd: F };
      },
      Y = (k) => {
        const { isRangeStart: v, isRangeEnd: F } = E(k);
        return {
          dp__range_start: v,
          dp__range_end: F,
          dp__range_between: B(k) && !n.weekPicker,
          dp__date_hover_start: b(N(k), k, !0),
          dp__date_hover_end: b(N(k), k, !1),
        };
      },
      $ = (k) => ({
        ...Y(k),
        dp__cell_auto_range: w(k),
        dp__cell_auto_range_start: y(k),
        dp__cell_auto_range_end: T(k),
      }),
      z = (k) =>
        n.range
          ? n.autoRange
            ? $(k)
            : n.modelAuto
            ? { ...j(k), ...Y(k) }
            : Y(k)
          : n.weekPicker
          ? V(k)
          : j(k);
    return {
      setHoverDate: l,
      clearHoverDate: m,
      getDayClassData: (k) =>
        n.hideOffsetDates && !k.current
          ? {}
          : {
              ...U(k),
              ...z(k),
              [n.dayClass ? n.dayClass(k.value) : ""]: !0,
              [n.calendarCellClassName]: !!n.calendarCellClassName,
            },
    };
  },
  Fa = (e) => {
    const { defaultedFilters: n, defaultedHighlight: a } = ct(e),
      t = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return "UTC";
      },
      o = (P) => {
        const B = bt(i(ne(P))).toISOString(),
          [U] = B.split("T");
        return U;
      },
      i = (P) => (e.utc === "preserve" ? pu(P, t()) : Gt(P, t())),
      r = (P) => {
        var B;
        const U = e.maxDate ? yt(P, i(ne(e.maxDate))) : !1,
          j = e.minDate ? ht(P, i(ne(e.minDate))) : !1,
          V = g(
            i(P),
            (B = e.arrMapValues) != null && B.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          E = n.value.months.map((v) => +v).includes(Ue(P)),
          Y = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((v) => +v === s0(P))
            : !1,
          $ = p(P),
          z = Re(P),
          k = z < +e.yearRange[0] || z > +e.yearRange[1];
        return !(U || j || V || E || k || Y || $);
      },
      s = (P, B) => ht(...ka(e.minDate, P, B)) || We(...ka(e.minDate, P, B)),
      l = (P, B) => yt(...ka(e.maxDate, P, B)) || We(...ka(e.maxDate, P, B)),
      m = (P, B, U) => {
        let j = !1;
        return (
          e.maxDate && U && l(P, B) && (j = !0),
          e.minDate && !U && s(P, B) && (j = !0),
          j
        );
      },
      g = (P, B) =>
        P
          ? B instanceof Map
            ? !!B.get(o(P))
            : Array.isArray(B)
            ? B.some((U) => We(i(ne(U)), P))
            : B
            ? B(ne(JSON.parse(JSON.stringify(P))))
            : !1
          : !0,
      d = (P, B, U, j) => {
        let V = !1;
        return (
          j
            ? e.minDate && e.maxDate
              ? (V = m(P, B, U))
              : ((e.minDate && s(P, B)) || (e.maxDate && l(P, B))) && (V = !0)
            : (V = !0),
          V
        );
      },
      p = (P) => {
        var B, U, j, V, E;
        return Array.isArray(e.allowedDates) &&
          !((B = e.allowedDates) != null && B.length)
          ? !0
          : (U = e.arrMapValues) != null && U.allowedDates
          ? !g(P, (j = e.arrMapValues) == null ? void 0 : j.allowedDates)
          : (V = e.allowedDates) != null && V.length
          ? !(
              (E = e.allowedDates) != null && E.some((Y) => We(bt(Y), i(bt(P))))
            )
          : !1;
      },
      f = (P) => !r(P),
      b = (P) =>
        e.noDisabledRange
          ? !Ul({ start: P[0], end: P[1] }).some((B) => f(B))
          : !0,
      S = (P, B, U = 0) => {
        if (Array.isArray(B) && B[U]) {
          const j = r_(P, B[U]),
            V = vu(B[U], P),
            E = V.length === 1 ? 0 : V.filter(($) => f($)).length,
            Y = Math.abs(j) - E;
          if (e.minRange && e.maxRange)
            return Y >= +e.minRange && Y <= +e.maxRange;
          if (e.minRange) return Y >= +e.minRange;
          if (e.maxRange) return Y <= +e.maxRange;
        }
        return !0;
      },
      T = (P) => new Map(P.map((B) => [o(B), !0])),
      w = (P) => Array.isArray(P) && P.length > 0,
      y = () => {
        const P = {
          disabledDates: null,
          allowedDates: null,
          highlightedDates: null,
        };
        return (
          w(e.allowedDates) && (P.allowedDates = T(e.allowedDates)),
          typeof a.value != "function" &&
            w(a.value.dates) &&
            (P.highlightedDates = T(a.value.dates)),
          w(e.disabledDates) && (P.disabledDates = T(e.disabledDates)),
          P
        );
      },
      D = () =>
        !e.enableTimePicker ||
        e.monthPicker ||
        e.yearPicker ||
        e.ignoreTimeValidation,
      C = (P) =>
        Array.isArray(P)
          ? [P[0] ? Ko(P[0]) : null, P[1] ? Ko(P[1]) : null]
          : Ko(P),
      M = (P, B, U) =>
        P.find((j) =>
          +j.hours === qt(B) && j.minutes === "*"
            ? !0
            : +j.minutes === ia(B) && +j.hours === qt(B)
        ) && U,
      N = (P, B, U) => {
        const [j, V] = P,
          [E, Y] = B;
        return !M(j, E, U) && !M(V, Y, U) && U;
      },
      R = (P, B) => {
        const U = Array.isArray(B) ? B : [B];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? N(e.disabledTimes, U, P)
            : !U.some((j) => M(e.disabledTimes, j, P))
          : P;
      },
      Q = (P, B) => {
        const U = Array.isArray(B)
            ? [Ra(B[0]), B[1] ? Ra(B[1]) : void 0]
            : Ra(B),
          j = !e.disabledTimes(U);
        return P && j;
      },
      G = (P, B) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? R(B, P)
            : Q(B, P)
          : B;
    return {
      isDisabled: f,
      validateDate: r,
      validateMonthYearInRange: d,
      isDateRangeAllowed: b,
      checkMinMaxRange: S,
      matchDate: g,
      mapDatesArrToMap: y,
      isValidTime: (P) => {
        let B = !0;
        if (!P || D()) return !0;
        const U = !e.minDate && !e.maxDate ? C(P) : P;
        return (
          (e.maxTime || e.maxDate) &&
            (B = Fs(e.maxTime, e.maxDate, "max", gt(U), B)),
          (e.minTime || e.minDate) &&
            (B = Fs(e.minTime, e.minDate, "min", gt(U), B)),
          G(P, B)
        );
      },
    };
  },
  ko = () => {
    const e = u(() => (t, o) => t?.includes(o)),
      n = u(() => (t, o) => t.count ? (t.solo ? !0 : o === 0) : !0),
      a = u(() => (t, o) => t.count ? (t.solo ? !0 : o === t.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
  },
  R1 = (e, n, a) => {
    const t = L(0),
      o = va({
        [Na.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Na.calendar]: !1,
        [Na.header]: !1,
      }),
      i = u(() => e.monthPicker),
      r = (d) => {
        var p;
        if ((p = e.flow) != null && p.length) {
          if (!d && i.value) return g();
          (o[d] = !0), Object.keys(o).filter((f) => !o[f]).length || g();
        }
      },
      s = () => {
        var d;
        (d = e.flow) != null &&
          d.length &&
          t.value !== -1 &&
          ((t.value += 1), n("flow-step", t.value), g());
      },
      l = () => {
        t.value = -1;
      },
      m = (d, p, ...f) => {
        e.flow[t.value] === d && a.value && a.value[p](...f);
      },
      g = () => {
        m(Jt.month, "toggleMonthPicker", !0),
          m(Jt.year, "toggleYearPicker", !0),
          m(Jt.calendar, "toggleTimePicker", !1, !0),
          m(Jt.time, "toggleTimePicker", !0, !0);
        const d = e.flow[t.value];
        (d === Jt.hours || d === Jt.minutes || d === Jt.seconds) &&
          m(d, "toggleTimePicker", !0, !0, d);
      };
    return { childMount: r, updateFlowStep: s, resetFlow: l, flowStep: t };
  },
  So = {
    multiCalendars: {
      type: [Boolean, Number, String, Object],
      default: void 0,
    },
    modelValue: { type: [String, Date, Array, Object, Number], default: null },
    modelType: { type: String, default: null },
    position: { type: String, default: "center" },
    dark: { type: Boolean, default: !1 },
    format: { type: [String, Function], default: () => null },
    autoPosition: { type: Boolean, default: !0 },
    altPosition: { type: Function, default: null },
    transitions: { type: [Boolean, Object], default: !0 },
    formatLocale: { type: Object, default: null },
    utc: { type: [Boolean, String], default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    offset: { type: [Number, String], default: 10 },
    hideNavigation: { type: Array, default: () => [] },
    timezone: { type: String, default: null },
    emitTimezone: { type: String, default: null },
    vertical: { type: Boolean, default: !1 },
    disableMonthYearSelect: { type: Boolean, default: !1 },
    disableYearSelect: { type: Boolean, default: !1 },
    menuClassName: { type: String, default: null },
    dayClass: { type: Function, default: null },
    yearRange: { type: Array, default: () => [1900, 2100] },
    calendarCellClassName: { type: String, default: null },
    enableTimePicker: { type: Boolean, default: !0 },
    autoApply: { type: Boolean, default: !1 },
    disabledDates: { type: [Array, Function], default: () => [] },
    monthNameFormat: { type: String, default: "short" },
    startDate: { type: [Date, String], default: null },
    startTime: { type: [Object, Array], default: null },
    hideOffsetDates: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: null },
    noToday: { type: Boolean, default: !1 },
    disabledWeekDays: { type: Array, default: () => [] },
    allowedDates: { type: Array, default: null },
    nowButtonLabel: { type: String, default: "Now" },
    markers: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    spaceConfirm: { type: Boolean, default: !0 },
    monthChangeOnArrows: { type: Boolean, default: !0 },
    presetDates: { type: Array, default: () => [] },
    flow: { type: Array, default: () => [] },
    partialFlow: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    minRange: { type: [Number, String], default: null },
    maxRange: { type: [Number, String], default: null },
    multiDatesLimit: { type: [Number, String], default: null },
    reverseYears: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    arrowNavigation: { type: Boolean, default: !1 },
    disableTimeRangeValidation: { type: Boolean, default: !1 },
    highlight: { type: [Array, Function, Object], default: null },
    highlightWeekDays: { type: Array, default: null },
    highlightDisabledDays: { type: Boolean, default: !1 },
    teleport: { type: [String, Boolean, Object], default: null },
    teleportCenter: { type: Boolean, default: !1 },
    locale: { type: String, default: "en-Us" },
    weekNumName: { type: String, default: "W" },
    weekStart: { type: [Number, String], default: 1 },
    weekNumbers: { type: [String, Function, Object], default: null },
    calendarClassName: { type: String, default: null },
    monthChangeOnScroll: { type: [Boolean, String], default: !0 },
    dayNames: { type: [Function, Array], default: null },
    monthPicker: { type: Boolean, default: !1 },
    customProps: { type: Object, default: null },
    yearPicker: { type: Boolean, default: !1 },
    modelAuto: { type: Boolean, default: !1 },
    selectText: { type: String, default: "Select" },
    cancelText: { type: String, default: "Cancel" },
    previewFormat: { type: [String, Function], default: () => "" },
    multiDates: { type: Boolean, default: !1 },
    partialRange: { type: Boolean, default: !0 },
    ignoreTimeValidation: { type: Boolean, default: !1 },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null },
    minTime: { type: Object, default: null },
    maxTime: { type: Object, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: "" },
    hideInputIcon: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: "off" },
    inputClassName: { type: String, default: null },
    fixedStart: { type: Boolean, default: !1 },
    fixedEnd: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    enableSeconds: { type: Boolean, default: !1 },
    is24: { type: Boolean, default: !0 },
    noHoursOverlay: { type: Boolean, default: !1 },
    noMinutesOverlay: { type: Boolean, default: !1 },
    noSecondsOverlay: { type: Boolean, default: !1 },
    hoursGridIncrement: { type: [String, Number], default: 1 },
    minutesGridIncrement: { type: [String, Number], default: 5 },
    secondsGridIncrement: { type: [String, Number], default: 5 },
    hoursIncrement: { type: [Number, String], default: 1 },
    minutesIncrement: { type: [Number, String], default: 1 },
    secondsIncrement: { type: [Number, String], default: 1 },
    range: { type: Boolean, default: !1 },
    uid: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    inline: { type: [Boolean, Object], default: !1 },
    textInput: { type: [Boolean, Object], default: !1 },
    noDisabledRange: { type: Boolean, default: !1 },
    sixWeeks: { type: [Boolean, String], default: !1 },
    actionRow: { type: Object, default: () => ({}) },
    focusStartDate: { type: Boolean, default: !1 },
    disabledTimes: { type: [Function, Array], default: void 0 },
    showLastInRange: { type: Boolean, default: !0 },
    timePickerInline: { type: Boolean, default: !1 },
    calendar: { type: Function, default: null },
    config: { type: Object, default: void 0 },
    quarterPicker: { type: Boolean, default: !1 },
    yearFirst: { type: Boolean, default: !1 },
  },
  Kt = {
    ...So,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  N1 = { key: 1, class: "dp__input_wrap" },
  H1 = [
    "id",
    "name",
    "inputmode",
    "placeholder",
    "disabled",
    "readonly",
    "required",
    "value",
    "autocomplete",
    "aria-label",
    "aria-disabled",
    "aria-invalid",
  ],
  $1 = { key: 2, class: "dp__clear_icon" },
  U1 = re({
    compatConfig: { MODE: 3 },
    __name: "DatepickerInput",
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" },
      ...So,
    },
    emits: [
      "clear",
      "open",
      "update:input-value",
      "set-input-date",
      "close",
      "select-date",
      "set-empty-date",
      "toggle",
      "focus-prev",
      "focus",
      "blur",
      "real-blur",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTextInput: i,
          defaultedAriaLabels: r,
          defaultedInline: s,
          defaultedConfig: l,
          getDefaultPattern: m,
          getDefaultStartTime: g,
        } = ct(o),
        { checkMinMaxRange: d } = Fa(o),
        p = L(),
        f = L(null),
        b = L(!1),
        S = L(!1),
        T = u(() => ({
          dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
          dp__disabled: o.disabled,
          dp__input_readonly: !i.value.enabled,
          dp__input: !0,
          dp__input_icon_pad: !o.hideInputIcon,
          dp__input_valid: !!o.state,
          dp__input_invalid: o.state === !1,
          dp__input_focus: b.value || o.isMenuOpen,
          dp__input_reg: !i.value.enabled,
          [o.inputClassName]: !!o.inputClassName,
        })),
        w = () => {
          t("set-input-date", null),
            o.autoApply && (t("set-empty-date"), (p.value = null));
        },
        y = (V) => {
          const E = g();
          return d1(
            V,
            i.value.format ?? m(),
            E ?? hu({}, o.enableSeconds),
            o.inputValue,
            S.value
          );
        },
        D = (V) => {
          const { rangeSeparator: E } = i.value,
            [Y, $] = V.split(`${E}`);
          if (Y) {
            const z = y(Y.trim()),
              k = $ ? y($.trim()) : null,
              v = z && k ? [z, k] : [z];
            d(k, v, 0) && (p.value = z ? v : null);
          }
        },
        C = () => {
          S.value = !0;
        },
        M = (V) => {
          if (o.range) D(V);
          else if (o.multiDates) {
            const E = V.split(";");
            p.value = E.map((Y) => y(Y.trim())).filter((Y) => Y);
          } else p.value = y(V);
        },
        N = (V) => {
          var E;
          const Y =
            typeof V == "string"
              ? V
              : (E = V.target) == null
              ? void 0
              : E.value;
          Y !== ""
            ? (i.value.openMenu && !o.isMenuOpen && t("open"),
              M(Y),
              t("set-input-date", p.value))
            : w(),
            (S.value = !1),
            t("update:input-value", Y);
        },
        R = (V) => {
          i.value.enabled
            ? (M(V.target.value),
              i.value.enterSubmit && Er(p.value) && o.inputValue !== ""
                ? (t("set-input-date", p.value, !0), (p.value = null))
                : i.value.enterSubmit &&
                  o.inputValue === "" &&
                  ((p.value = null), t("clear")))
            : P(V);
        },
        Q = (V) => {
          i.value.enabled && i.value.tabSubmit && M(V.target.value),
            i.value.tabSubmit && Er(p.value) && o.inputValue !== ""
              ? (t("set-input-date", p.value, !0, !0), (p.value = null))
              : i.value.tabSubmit &&
                o.inputValue === "" &&
                ((p.value = null), t("clear", !0));
        },
        G = () => {
          var V;
          (b.value = !0),
            t("focus"),
            i.value.enabled &&
              i.value.selectOnFocus &&
              ((V = f.value) == null || V.select());
        },
        P = (V) => {
          V.preventDefault(),
            Ca(V, l.value, !0),
            i.value.enabled &&
            i.value.openMenu &&
            !s.value.input &&
            !o.isMenuOpen
              ? t("open")
              : i.value.enabled || t("toggle");
        },
        B = () => {
          t("real-blur"),
            (b.value = !1),
            (!o.isMenuOpen || (s.value.enabled && s.value.input)) && t("blur"),
            o.autoApply &&
              i.value.enabled &&
              p.value &&
              !o.isMenuOpen &&
              (t("set-input-date", p.value),
              t("select-date"),
              (p.value = null));
        },
        U = (V) => {
          Ca(V, l.value, !0), t("clear");
        },
        j = (V) => {
          if (!i.value.enabled) {
            if (V.code === "Tab") return;
            V.preventDefault();
          }
        };
      return (
        n({
          focusInput: () => {
            var V;
            (V = f.value) == null || V.focus({ preventScroll: !0 });
          },
          setParsedDate: (V) => {
            p.value = V;
          },
        }),
        (V, E) => {
          var Y;
          return (
            c(),
            h("div", { onClick: P }, [
              V.$slots.trigger && !V.$slots["dp-input"] && !A(s).enabled
                ? ee(V.$slots, "trigger", { key: 0 })
                : O("", !0),
              !V.$slots.trigger && (!A(s).enabled || A(s).input)
                ? (c(),
                  h("div", N1, [
                    V.$slots["dp-input"] && !V.$slots.trigger && !A(s).enabled
                      ? ee(V.$slots, "dp-input", {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: N,
                          onEnter: R,
                          onTab: Q,
                          onClear: U,
                          onBlur: B,
                          onKeypress: j,
                          onPaste: C,
                          openMenu: () => V.$emit("open"),
                          closeMenu: () => V.$emit("close"),
                          toggleMenu: () => V.$emit("toggle"),
                        })
                      : O("", !0),
                    V.$slots["dp-input"]
                      ? O("", !0)
                      : (c(),
                        h(
                          "input",
                          {
                            key: 1,
                            id: V.uid ? `dp-input-${V.uid}` : void 0,
                            ref_key: "inputRef",
                            ref: f,
                            name: V.name,
                            class: Z(T.value),
                            inputmode: A(i).enabled ? "text" : "none",
                            placeholder: V.placeholder,
                            disabled: V.disabled,
                            readonly: V.readonly,
                            required: V.required,
                            value: e.inputValue,
                            autocomplete: V.autocomplete,
                            "aria-label": (Y = A(r)) == null ? void 0 : Y.input,
                            "aria-disabled": V.disabled || void 0,
                            "aria-invalid": V.state === !1 ? !0 : void 0,
                            onInput: N,
                            onKeydown: [Oe(R, ["enter"]), Oe(Q, ["tab"]), j],
                            onBlur: B,
                            onFocus: G,
                            onKeypress: j,
                            onPaste: C,
                          },
                          null,
                          42,
                          H1
                        )),
                    I("div", { onClick: E[2] || (E[2] = ($) => t("toggle")) }, [
                      V.$slots["input-icon"] && !V.hideInputIcon
                        ? (c(),
                          h(
                            "span",
                            {
                              key: 0,
                              class: "dp__input_icon",
                              onClick: E[0] || (E[0] = ($) => t("toggle")),
                            },
                            [ee(V.$slots, "input-icon")]
                          ))
                        : O("", !0),
                      !V.$slots["input-icon"] &&
                      !V.hideInputIcon &&
                      !V.$slots["dp-input"]
                        ? (c(),
                          W(A(gn), {
                            key: 1,
                            class: "dp__input_icon dp__input_icons",
                            onClick: E[1] || (E[1] = ($) => t("toggle")),
                          }))
                        : O("", !0),
                    ]),
                    V.$slots["clear-icon"] &&
                    e.inputValue &&
                    V.clearable &&
                    !V.disabled &&
                    !V.readonly
                      ? (c(),
                        h("span", $1, [
                          ee(V.$slots, "clear-icon", { clear: U }),
                        ]))
                      : O("", !0),
                    V.clearable &&
                    !V.$slots["clear-icon"] &&
                    e.inputValue &&
                    !V.disabled &&
                    !V.readonly
                      ? (c(),
                        W(A(iu), {
                          key: 3,
                          class: "dp__clear_icon dp__input_icons",
                          onClick:
                            E[3] || (E[3] = Ie(($) => U($), ["prevent"])),
                        }))
                      : O("", !0),
                  ]))
                : O("", !0),
            ])
          );
        }
      );
    },
  }),
  V1 = ["title"],
  Y1 = { class: "dp__action_buttons" },
  F1 = ["disabled"],
  W1 = re({
    compatConfig: { MODE: 3 },
    __name: "ActionRow",
    props: {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 },
      ...Kt,
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        {
          defaultedActionRow: o,
          defaultedPreviewFormat: i,
          defaultedMultiCalendars: r,
          defaultedTextInput: s,
          defaultedInline: l,
          getDefaultPattern: m,
        } = ct(t),
        { isValidTime: g } = Fa(t),
        { buildMatrix: d } = Ia(),
        p = L(null),
        f = L(null);
      De(() => {
        t.arrowNavigation && d([mt(p), mt(f)], "actionRow");
      });
      const b = u(() =>
          t.range && !t.partialRange && t.internalModelValue
            ? t.internalModelValue.length === 2
            : !0
        ),
        S = u(() => !T.value || !w.value || !b.value),
        T = u(() =>
          !t.enableTimePicker || t.ignoreTimeValidation
            ? !0
            : g(t.internalModelValue)
        ),
        w = u(() =>
          t.monthPicker
            ? t.range && Array.isArray(t.internalModelValue)
              ? !t.internalModelValue.filter((P) => !Q(P)).length
              : Q(t.internalModelValue)
            : !0
        ),
        y = () => {
          const P = i.value;
          return t.timePicker || t.monthPicker, P(gt(t.internalModelValue));
        },
        D = () => {
          const P = t.internalModelValue;
          return r.value.count > 0
            ? `${C(P[0])} - ${C(P[1])}`
            : [C(P[0]), C(P[1])];
        },
        C = (P) =>
          yu(
            P,
            i.value,
            t.formatLocale,
            s.value.rangeSeparator,
            t.modelAuto,
            m()
          ),
        M = u(() =>
          !t.internalModelValue || !t.menuMount
            ? ""
            : typeof i.value == "string"
            ? Array.isArray(t.internalModelValue)
              ? t.internalModelValue.length === 2 && t.internalModelValue[1]
                ? D()
                : t.multiDates
                ? t.internalModelValue.map((P) => `${C(P)}`)
                : t.modelAuto
                ? `${C(t.internalModelValue[0])}`
                : `${C(t.internalModelValue[0])} -`
              : C(t.internalModelValue)
            : y()
        ),
        N = () => (t.multiDates ? "; " : " - "),
        R = u(() => (Array.isArray(M.value) ? M.value.join(N()) : M.value)),
        Q = (P) => {
          if (!t.monthPicker) return !0;
          let B = !0;
          const U = ne(Yt(P));
          if (t.minDate && t.maxDate) {
            const j = ne(Yt(t.minDate)),
              V = ne(Yt(t.maxDate));
            return (yt(U, j) && ht(U, V)) || We(U, j) || We(U, V);
          }
          if (t.minDate) {
            const j = ne(Yt(t.minDate));
            B = yt(U, j) || We(U, j);
          }
          if (t.maxDate) {
            const j = ne(Yt(t.maxDate));
            B = ht(U, j) || We(U, j);
          }
          return B;
        },
        G = () => {
          T.value && w.value && b.value
            ? a("select-date")
            : a("invalid-select");
        };
      return (P, B) => (
        c(),
        h(
          "div",
          {
            class: "dp__action_row",
            style: xe(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {}),
          },
          [
            P.$slots["action-row"]
              ? ee(
                  P.$slots,
                  "action-row",
                  et(
                    Ge(
                      { key: 0 },
                      {
                        internalModelValue: P.internalModelValue,
                        disabled: S.value,
                        selectDate: () => P.$emit("select-date"),
                        closePicker: () => P.$emit("close-picker"),
                      }
                    )
                  )
                )
              : (c(),
                h(
                  pe,
                  { key: 1 },
                  [
                    A(o).showPreview
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 0,
                            class: "dp__selection_preview",
                            title: R.value,
                          },
                          [
                            P.$slots["action-preview"]
                              ? ee(P.$slots, "action-preview", {
                                  key: 0,
                                  value: P.internalModelValue,
                                })
                              : O("", !0),
                            P.$slots["action-preview"]
                              ? O("", !0)
                              : (c(),
                                h(pe, { key: 1 }, [Ae(J(R.value), 1)], 64)),
                          ],
                          8,
                          V1
                        ))
                      : O("", !0),
                    I("div", Y1, [
                      P.$slots["action-buttons"]
                        ? ee(P.$slots, "action-buttons", {
                            key: 0,
                            value: P.internalModelValue,
                          })
                        : O("", !0),
                      P.$slots["action-buttons"]
                        ? O("", !0)
                        : (c(),
                          h(
                            pe,
                            { key: 1 },
                            [
                              !A(l).enabled && A(o).showCancel
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 0,
                                      ref_key: "cancelButtonRef",
                                      ref: p,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        B[0] ||
                                        (B[0] = (U) => P.$emit("close-picker")),
                                      onKeydown: [
                                        B[1] ||
                                          (B[1] = Oe(
                                            (U) => P.$emit("close-picker"),
                                            ["enter"]
                                          )),
                                        B[2] ||
                                          (B[2] = Oe(
                                            (U) => P.$emit("close-picker"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    J(P.cancelText),
                                    545
                                  ))
                                : O("", !0),
                              A(o).showNow
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 1,
                                      ref_key: "cancelButtonRef",
                                      ref: p,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        B[3] ||
                                        (B[3] = (U) => P.$emit("select-now")),
                                      onKeydown: [
                                        B[4] ||
                                          (B[4] = Oe(
                                            (U) => P.$emit("select-now"),
                                            ["enter"]
                                          )),
                                        B[5] ||
                                          (B[5] = Oe(
                                            (U) => P.$emit("select-now"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    J(P.nowButtonLabel),
                                    545
                                  ))
                                : O("", !0),
                              A(o).showSelect
                                ? (c(),
                                  h(
                                    "button",
                                    {
                                      key: 2,
                                      ref_key: "selectButtonRef",
                                      ref: f,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_select",
                                      disabled: S.value,
                                      onKeydown: [
                                        Oe(G, ["enter"]),
                                        Oe(G, ["space"]),
                                      ],
                                      onClick: G,
                                    },
                                    J(P.selectText),
                                    41,
                                    F1
                                  ))
                                : O("", !0),
                            ],
                            64
                          )),
                    ]),
                  ],
                  64
                )),
          ],
          4
        )
      );
    },
  }),
  q1 = ["onKeydown"],
  G1 = { class: "dp__selection_grid_header" },
  j1 = [
    "aria-selected",
    "aria-disabled",
    "onClick",
    "onKeydown",
    "onMouseover",
  ],
  z1 = ["aria-label"],
  zn = re({
    __name: "SelectionOverlay",
    props: {
      items: {},
      type: {},
      isLast: { type: Boolean },
      arrowNavigation: { type: Boolean },
      skipButtonRef: { type: Boolean },
      headerRefs: {},
      hideNavigation: {},
      escClose: { type: Boolean },
      useRelative: { type: Boolean },
      height: {},
      textInput: { type: [Boolean, Object] },
      config: {},
      noOverlayFocus: { type: Boolean },
      focusValue: {},
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(e, { expose: n, emit: a }) {
      const {
          setSelectionGrid: t,
          buildMultiLevelMatrix: o,
          setMonthPicker: i,
        } = Ia(),
        r = a,
        s = e,
        {
          defaultedAriaLabels: l,
          defaultedTextInput: m,
          defaultedConfig: g,
        } = ct(s),
        { hideNavigationButtons: d } = ko(),
        p = L(!1),
        f = L(null),
        b = L(null),
        S = L([]),
        T = L(),
        w = L(null),
        y = L(0),
        D = L(null);
      Ru(() => {
        f.value = null;
      }),
        De(() => {
          Ct().then(() => B()), s.noOverlayFocus || M(), C(!0);
        }),
        Fn(() => C(!1));
      const C = (k) => {
          var v;
          s.arrowNavigation &&
            ((v = s.headerRefs) != null && v.length ? i(k) : t(k));
        },
        M = () => {
          var k;
          const v = mt(b);
          v &&
            (m.value.enabled ||
              (f.value
                ? (k = f.value) == null || k.focus({ preventScroll: !0 })
                : v.focus({ preventScroll: !0 })),
            (p.value = v.clientHeight < v.scrollHeight));
        },
        N = u(() => ({
          dp__overlay: !0,
          "dp--overlay-absolute": !s.useRelative,
          "dp--overlay-relative": s.useRelative,
        })),
        R = u(() =>
          s.useRelative ? { height: `${s.height}px`, width: "260px" } : void 0
        ),
        Q = u(() => ({ dp__overlay_col: !0 })),
        G = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__overlay_action: !0,
          dp__over_action_scroll: p.value,
          dp__button_bottom: s.isLast,
        })),
        P = u(() => {
          var k, v;
          return {
            dp__overlay_container: !0,
            dp__container_flex:
              ((k = s.items) == null ? void 0 : k.length) <= 6,
            dp__container_block:
              ((v = s.items) == null ? void 0 : v.length) > 6,
          };
        });
      Ne(
        () => s.items,
        () => B(),
        { deep: !0 }
      );
      const B = () => {
          Ct().then(() => {
            const k = mt(f),
              v = mt(b),
              F = mt(w),
              q = mt(D),
              te = F ? F.getBoundingClientRect().height : 0;
            v &&
              (v.getBoundingClientRect().height
                ? (y.value = v.getBoundingClientRect().height - te)
                : (y.value = g.value.modeHeight - te)),
              k &&
                q &&
                (q.scrollTop =
                  k.offsetTop -
                  q.offsetTop -
                  (y.value / 2 - k.getBoundingClientRect().height) -
                  te);
          });
        },
        U = (k) => {
          k.disabled || r("selected", k.value);
        },
        j = () => {
          r("toggle"), r("reset-flow");
        },
        V = () => {
          s.escClose && j();
        },
        E = (k, v, F, q) => {
          k &&
            ((v.active || v.value === s.focusValue) && (f.value = k),
            s.arrowNavigation &&
              (Array.isArray(S.value[F])
                ? (S.value[F][q] = k)
                : (S.value[F] = [k]),
              Y()));
        },
        Y = () => {
          var k, v;
          const F =
            (k = s.headerRefs) != null && k.length
              ? [s.headerRefs].concat(S.value)
              : S.value.concat([s.skipButtonRef ? [] : [w.value]]);
          o(
            gt(F),
            (v = s.headerRefs) != null && v.length
              ? "monthPicker"
              : "selectionGrid"
          );
        },
        $ = (k) => {
          s.arrowNavigation || Ca(k, g.value, !0);
        },
        z = (k) => {
          (T.value = k), r("hover-value", k);
        };
      return (
        n({ focusGrid: M }),
        (k, v) => {
          var F;
          return (
            c(),
            h(
              "div",
              {
                ref_key: "gridWrapRef",
                ref: b,
                class: Z(N.value),
                style: xe(R.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [
                  Oe(Ie(V, ["prevent"]), ["esc"]),
                  v[0] ||
                    (v[0] = Oe(
                      Ie((q) => $(q), ["prevent"]),
                      ["left"]
                    )),
                  v[1] ||
                    (v[1] = Oe(
                      Ie((q) => $(q), ["prevent"]),
                      ["up"]
                    )),
                  v[2] ||
                    (v[2] = Oe(
                      Ie((q) => $(q), ["prevent"]),
                      ["down"]
                    )),
                  v[3] ||
                    (v[3] = Oe(
                      Ie((q) => $(q), ["prevent"]),
                      ["right"]
                    )),
                ],
              },
              [
                I(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: D,
                    class: Z(P.value),
                    role: "grid",
                    style: xe({ height: `${y.value}px` }),
                  },
                  [
                    I("div", G1, [ee(k.$slots, "header")]),
                    k.$slots.overlay
                      ? ee(k.$slots, "overlay", { key: 0 })
                      : (c(!0),
                        h(
                          pe,
                          { key: 1 },
                          ke(
                            k.items,
                            (q, te) => (
                              c(),
                              h(
                                "div",
                                {
                                  key: te,
                                  class: Z([
                                    "dp__overlay_row",
                                    { dp__flex_row: k.items.length >= 3 },
                                  ]),
                                  role: "row",
                                },
                                [
                                  (c(!0),
                                  h(
                                    pe,
                                    null,
                                    ke(
                                      q,
                                      (X, x) => (
                                        c(),
                                        h(
                                          "div",
                                          {
                                            key: X.value,
                                            ref_for: !0,
                                            ref: (_) => E(_, X, te, x),
                                            role: "gridcell",
                                            class: Z(Q.value),
                                            "aria-selected": X.active,
                                            "aria-disabled":
                                              X.disabled || void 0,
                                            tabindex: "0",
                                            onClick: (_) => U(X),
                                            onKeydown: [
                                              Oe(
                                                Ie((_) => U(X), ["prevent"]),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie((_) => U(X), ["prevent"]),
                                                ["space"]
                                              ),
                                            ],
                                            onMouseover: (_) => z(X.value),
                                          },
                                          [
                                            I(
                                              "div",
                                              { class: Z(X.className) },
                                              [
                                                k.$slots.item
                                                  ? ee(k.$slots, "item", {
                                                      key: 0,
                                                      item: X,
                                                    })
                                                  : O("", !0),
                                                k.$slots.item
                                                  ? O("", !0)
                                                  : (c(),
                                                    h(
                                                      pe,
                                                      { key: 1 },
                                                      [Ae(J(X.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          j1
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  6
                ),
                k.$slots["button-icon"]
                  ? ue(
                      (c(),
                      h(
                        "button",
                        {
                          key: 0,
                          ref_key: "toggleButton",
                          ref: w,
                          type: "button",
                          "aria-label":
                            (F = A(l)) == null ? void 0 : F.toggleOverlay,
                          class: Z(G.value),
                          tabindex: "0",
                          onClick: j,
                          onKeydown: [Oe(j, ["enter"]), Oe(j, ["tab"])],
                        },
                        [ee(k.$slots, "button-icon")],
                        42,
                        z1
                      )),
                      [[Ft, !A(d)(k.hideNavigation, k.type)]]
                    )
                  : O("", !0),
              ],
              46,
              q1
            )
          );
        }
      );
    },
  }),
  To = re({
    __name: "InstanceWrap",
    props: { multiCalendars: {}, stretch: { type: Boolean } },
    setup(e) {
      const n = e,
        a = u(() =>
          n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
        ),
        t = u(() => ({ dp__instance_calendar: n.multiCalendars > 0 }));
      return (o, i) => (
        c(),
        h(
          "div",
          {
            class: Z({
              dp__menu_inner: !o.stretch,
              "dp--menu--inner-stretched": o.stretch,
              dp__flex_display: o.multiCalendars > 0,
            }),
          },
          [
            (c(!0),
            h(
              pe,
              null,
              ke(
                a.value,
                (r, s) => (
                  c(),
                  h(
                    "div",
                    { key: r, class: Z(t.value) },
                    [ee(o.$slots, "default", { instance: r, index: s })],
                    2
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  K1 = ["aria-label", "aria-disabled"],
  Mn = re({
    compatConfig: { MODE: 3 },
    __name: "ArrowBtn",
    props: { ariaLabel: {}, disabled: { type: Boolean } },
    emits: ["activate", "set-ref"],
    setup(e, { emit: n }) {
      const a = n,
        t = L(null);
      return (
        De(() => a("set-ref", t)),
        (o, i) => (
          c(),
          h(
            "button",
            {
              ref_key: "elRef",
              ref: t,
              type: "button",
              class: "dp__btn dp--arrow-btn-nav",
              tabindex: "0",
              "aria-label": o.ariaLabel,
              "aria-disabled": o.disabled || void 0,
              onClick: i[0] || (i[0] = (r) => o.$emit("activate")),
              onKeydown: [
                i[1] ||
                  (i[1] = Oe(
                    Ie((r) => o.$emit("activate"), ["prevent"]),
                    ["enter"]
                  )),
                i[2] ||
                  (i[2] = Oe(
                    Ie((r) => o.$emit("activate"), ["prevent"]),
                    ["space"]
                  )),
              ],
            },
            [
              I(
                "span",
                {
                  class: Z([
                    "dp__inner_nav",
                    { dp__inner_nav_disabled: o.disabled },
                  ]),
                },
                [ee(o.$slots, "default")],
                2
              ),
            ],
            40,
            K1
          )
        )
      );
    },
  }),
  Q1 = { class: "dp--year-mode-picker" },
  Z1 = ["aria-label"],
  wu = re({
    __name: "YearModePicker",
    props: {
      ...Kt,
      showYearPicker: { type: Boolean, default: !1 },
      items: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      isDisabled: { type: Function, default: () => !1 },
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        { showRightIcon: o, showLeftIcon: i } = ko(),
        {
          defaultedConfig: r,
          defaultedMultiCalendars: s,
          defaultedAriaLabels: l,
          defaultedTransitions: m,
        } = ct(t),
        { showTransition: g, transitionName: d } = Gn(m),
        p = (S = !1, T) => {
          a("toggle-year-picker", { flow: S, show: T });
        },
        f = (S) => {
          a("year-select", S);
        },
        b = (S = !1) => {
          a("handle-year", S);
        };
      return (S, T) => {
        var w, y, D;
        return (
          c(),
          h("div", Q1, [
            A(i)(A(s), e.instance)
              ? (c(),
                W(
                  Mn,
                  {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (w = A(l)) == null ? void 0 : w.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: T[0] || (T[0] = (C) => b(!1)),
                  },
                  {
                    default: fe(() => [
                      S.$slots["arrow-left"]
                        ? ee(S.$slots, "arrow-left", { key: 0 })
                        : O("", !0),
                      S.$slots["arrow-left"]
                        ? O("", !0)
                        : (c(), W(A(ai), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : O("", !0),
            I(
              "button",
              {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (y = A(l)) == null ? void 0 : y.openYearsOverlay,
                onClick: T[1] || (T[1] = () => p(!1)),
                onKeydown: T[2] || (T[2] = Oe(() => p(!1), ["enter"])),
              },
              [
                S.$slots.year
                  ? ee(S.$slots, "year", { key: 0, year: e.year })
                  : O("", !0),
                S.$slots.year
                  ? O("", !0)
                  : (c(), h(pe, { key: 1 }, [Ae(J(e.year), 1)], 64)),
              ],
              40,
              Z1
            ),
            A(o)(A(s), e.instance)
              ? (c(),
                W(
                  Mn,
                  {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (D = A(l)) == null ? void 0 : D.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: T[3] || (T[3] = (C) => b(!0)),
                  },
                  {
                    default: fe(() => [
                      S.$slots["arrow-right"]
                        ? ee(S.$slots, "arrow-right", { key: 0 })
                        : O("", !0),
                      S.$slots["arrow-right"]
                        ? O("", !0)
                        : (c(), W(A(ni), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : O("", !0),
            Ee(
              It,
              { name: A(d)(e.showYearPicker), css: A(g) },
              {
                default: fe(() => [
                  e.showYearPicker
                    ? (c(),
                      W(
                        zn,
                        {
                          key: 0,
                          items: e.items,
                          "text-input": S.textInput,
                          "esc-close": S.escClose,
                          config: S.config,
                          "is-last": S.autoApply && !A(r).keepActionRow,
                          "hide-navigation": S.hideNavigation,
                          type: "year",
                          onToggle: p,
                          onSelected: T[4] || (T[4] = (C) => f(C)),
                        },
                        St(
                          {
                            "button-icon": fe(() => [
                              S.$slots["calendar-icon"]
                                ? ee(S.$slots, "calendar-icon", { key: 0 })
                                : O("", !0),
                              S.$slots["calendar-icon"]
                                ? O("", !0)
                                : (c(), W(A(gn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            S.$slots["year-overlay-value"]
                              ? {
                                  name: "item",
                                  fn: fe(({ item: C }) => [
                                    ee(S.$slots, "year-overlay-value", {
                                      text: C.text,
                                      value: C.value,
                                    }),
                                  ]),
                                  key: "0",
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          "items",
                          "text-input",
                          "esc-close",
                          "config",
                          "is-last",
                          "hide-navigation",
                        ]
                      ))
                    : O("", !0),
                ]),
                _: 3,
              },
              8,
              ["name", "css"]
            ),
          ])
        );
      };
    },
  }),
  mi = (e, n, a) => {
    if (n.value && Array.isArray(n.value))
      if (n.value.some((t) => We(e, t))) {
        const t = n.value.filter((o) => !We(o, e));
        n.value = t.length ? t : null;
      } else ((a && +a > n.value.length) || !a) && n.value.push(e);
    else n.value = [e];
  },
  gi = (e, n, a) => {
    let t = e.value ? e.value.slice() : [];
    return (
      t.length === 2 && t[1] !== null && (t = []),
      t.length
        ? ht(n, t[0])
          ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1]))
          : ((t[1] = n), a("range-end", n))
        : ((t = [n]), a("range-start", n)),
      (e.value = t),
      t
    );
  },
  Co = (e, n, a, t) => {
    e[0] && e[1] && a && n("auto-apply"),
      e[0] && !e[1] && t && a && n("auto-apply");
  },
  ku = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((n) => Gt(ne(n), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = Gt(ne(e.value), e.timezone));
  },
  Su = ({
    multiCalendars: e,
    highlight: n,
    calendars: a,
    modelValue: t,
    props: o,
    year: i,
    month: r,
    emit: s,
  }) => {
    const l = u(() => ci(o.yearRange, o.reverseYears)),
      m = L([!1]),
      g = u(() => (C, M) => {
        const N = Je(Yt(new Date()), { month: r.value(C), year: i.value(C) });
        return fu(N, o.maxDate, o.minDate, o.preventMinMaxNavigation, M);
      }),
      d = () => {
        for (let C = 0; C < e.value.count; C++)
          if (C === 0) a.value[C] = a.value[0];
          else {
            const M = Je(ne(), a.value[C - 1]);
            a.value[C] = { month: Ue(M), year: Re(zr(M, 1)) };
          }
      },
      p = (C) => {
        if (!C) return d();
        const M = Je(ne(), a.value[C]);
        return (a.value[0].year = Re(ru(M, e.value.count - 1))), d();
      },
      f = (C) => (o.focusStartDate ? C[0] : C[1] ? C[1] : C[0]),
      b = () => {
        if (t.value) {
          const C = Array.isArray(t.value) ? f(t.value) : t.value;
          a.value[0] = { month: Ue(C), year: Re(C) };
        }
      };
    De(() => {
      b(), e.value.count && d();
    });
    const S = (C, M) => {
        (a.value[M].year = C), e.value.count && !e.value.solo && p(M);
      },
      T = u(
        () => (C) =>
          ln(l.value, (M) => {
            const N = i.value(C) === M.value,
              R = Yn(M.value, un(o.minDate), un(o.maxDate)),
              Q = di(n.value, M.value);
            return { active: N, disabled: R, highlighted: Q };
          })
      ),
      w = (C, M) => {
        S(C, M), D(M);
      },
      y = (C, M = !1) => {
        if (!g.value(C, M)) {
          const N = M ? i.value(C) + 1 : i.value(C) - 1;
          S(N, C);
        }
      },
      D = (C, M = !1, N) => {
        M || s("reset-flow"),
          N !== void 0 ? (m.value[C] = N) : (m.value[C] = !m.value[C]),
          m.value || s("overlay-closed");
      };
    return {
      isDisabled: g,
      groupedYears: T,
      showYearPicker: m,
      selectYear: S,
      toggleYearPicker: D,
      handleYearSelect: w,
      handleYear: y,
    };
  },
  X1 = (e, n) => {
    const {
        defaultedMultiCalendars: a,
        defaultedAriaLabels: t,
        defaultedTransitions: o,
        defaultedConfig: i,
        defaultedHighlight: r,
      } = ct(e),
      { modelValue: s, year: l, month: m, calendars: g } = jn(e, n),
      d = u(() => cu(e.formatLocale, e.locale, e.monthNameFormat)),
      p = L(null),
      {
        selectYear: f,
        groupedYears: b,
        showYearPicker: S,
        toggleYearPicker: T,
        handleYearSelect: w,
        handleYear: y,
        isDisabled: D,
      } = Su({
        modelValue: s,
        multiCalendars: a,
        highlight: r,
        calendars: g,
        year: l,
        month: m,
        props: e,
        emit: n,
      });
    De(() => {
      e.startDate &&
        ((s.value && e.focusStartDate) || !s.value) &&
        f(Re(ne(e.startDate)), 0);
    });
    const C = ($) =>
        $ ? { month: Ue($), year: Re($) } : { month: null, year: null },
      M = () =>
        s.value
          ? Array.isArray(s.value)
            ? s.value.map(($) => C($))
            : C(s.value)
          : C(),
      N = ($, z) => {
        const k = g.value[$],
          v = M();
        return Array.isArray(v)
          ? v.some((F) => F.year === k?.year && F.month === z)
          : k?.year === v.year && z === v.month;
      },
      R = ($, z, k) => {
        var v, F;
        const q = M();
        return Array.isArray(q)
          ? l.value(z) === ((v = q[k]) == null ? void 0 : v.year) &&
              $ === ((F = q[k]) == null ? void 0 : F.month)
          : !1;
      },
      Q = ($, z) => {
        if (e.range) {
          const k = M();
          if (Array.isArray(s.value) && Array.isArray(k)) {
            const v = R($, z, 0) || R($, z, 1),
              F = pa(Yt(ne()), $, l.value(z));
            return wo(s.value, p.value, F) && !v;
          }
          return !1;
        }
        return !1;
      },
      G = u(
        () => ($) =>
          ln(d.value, (z) => {
            const k = N($, z.value),
              v =
                Yn(
                  z.value,
                  mu(l.value($), e.minDate),
                  gu(l.value($), e.maxDate)
                ) || y1(e.disabledDates, l.value($)).includes(z.value),
              F = Q(z.value, $),
              q = bu(r.value, z.value, l.value($));
            return { active: k, disabled: v, isBetween: F, highlighted: q };
          })
      ),
      P = ($, z) => pa(Yt(ne()), $, l.value(z)),
      B = ($, z) => {
        const k = s.value ? s.value : Yt(new Date());
        (s.value = pa(k, $, l.value(z))), n("auto-apply");
      },
      U = ($, z) => {
        const k = gi(s, P($, z), n);
        Co(k, n, e.autoApply, e.modelAuto);
      },
      j = ($, z) => {
        mi(P($, z), s, e.multiDatesLimit), n("auto-apply", !0);
      },
      V = ($, z) => (
        (g.value[z].month = $),
        Y(z, g.value[z].year, $),
        e.multiDates ? j($, z) : e.range ? U($, z) : B($, z)
      ),
      E = ($, z) => {
        f($, z), Y(z, $, null);
      },
      Y = ($, z, k) => {
        let v = k;
        if (!v && v !== 0) {
          const F = M();
          v = Array.isArray(F) ? F[$].month : F.month;
        }
        n("update-month-year", { instance: $, year: z, month: v });
      };
    return {
      groupedMonths: G,
      groupedYears: b,
      year: l,
      isDisabled: D,
      defaultedMultiCalendars: a,
      defaultedAriaLabels: t,
      defaultedTransitions: o,
      defaultedConfig: i,
      showYearPicker: S,
      modelValue: s,
      presetDate: ($, z) => {
        ku({
          value: $,
          modelValue: s,
          range: e.range,
          timezone: z ? void 0 : e.timezone,
        }),
          n("auto-apply");
      },
      setHoverDate: ($, z) => {
        p.value = P($, z);
      },
      selectMonth: V,
      selectYear: E,
      toggleYearPicker: T,
      handleYearSelect: w,
      handleYear: y,
      getModelMonthYear: M,
    };
  },
  J1 = re({
    compatConfig: { MODE: 3 },
    __name: "MonthPicker",
    props: { ...Kt },
    emits: [
      "update:internal-model-value",
      "overlay-closed",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
      "update-month-year",
      "mount",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = Va(),
        i = Mt(o, "yearMode"),
        r = e;
      De(() => {
        r.shadow || t("mount", null);
      });
      const {
        groupedMonths: s,
        groupedYears: l,
        year: m,
        isDisabled: g,
        defaultedMultiCalendars: d,
        defaultedConfig: p,
        showYearPicker: f,
        modelValue: b,
        presetDate: S,
        setHoverDate: T,
        selectMonth: w,
        selectYear: y,
        toggleYearPicker: D,
        handleYearSelect: C,
        handleYear: M,
        getModelMonthYear: N,
      } = X1(r, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: b,
            year: m,
            getModelMonthYear: N,
            selectMonth: w,
            selectYear: y,
            handleYear: M,
          }),
          presetDate: S,
          toggleYearPicker: (R) => D(0, R),
        }),
        (R, Q) => (
          c(),
          W(
            To,
            { "multi-calendars": A(d).count, stretch: "" },
            {
              default: fe(({ instance: G }) => [
                R.$slots["month-year"]
                  ? ee(
                      R.$slots,
                      "month-year",
                      et(
                        Ge(
                          { key: 0 },
                          {
                            year: A(m),
                            months: A(s)(G),
                            years: A(l)(G),
                            selectMonth: A(w),
                            selectYear: A(y),
                            instance: G,
                          }
                        )
                      )
                    )
                  : (c(),
                    W(
                      zn,
                      {
                        key: 1,
                        items: A(s)(G),
                        "arrow-navigation": R.arrowNavigation,
                        "is-last": R.autoApply && !A(p).keepActionRow,
                        "esc-close": R.escClose,
                        height: A(p).modeHeight,
                        config: R.config,
                        "no-overlay-focus": !!(R.noOverlayFocus || R.textInput),
                        "use-relative": "",
                        type: "month",
                        onSelected: (P) => A(w)(P, G),
                        onHoverValue: (P) => A(T)(P, G),
                      },
                      {
                        header: fe(() => [
                          Ee(
                            wu,
                            Ge(R.$props, {
                              items: A(l)(G),
                              instance: G,
                              "show-year-picker": A(f)[G],
                              year: A(m)(G),
                              "is-disabled": (P) => A(g)(G, P),
                              onHandleYear: (P) => A(M)(G, P),
                              onYearSelect: (P) => A(C)(P, G),
                              onToggleYearPicker: (P) =>
                                A(D)(G, P?.flow, P?.show),
                            }),
                            St({ _: 2 }, [
                              ke(A(i), (P, B) => ({
                                name: P,
                                fn: fe((U) => [ee(R.$slots, P, et(ft(U)))]),
                              })),
                            ]),
                            1040,
                            [
                              "items",
                              "instance",
                              "show-year-picker",
                              "year",
                              "is-disabled",
                              "onHandleYear",
                              "onYearSelect",
                              "onToggleYearPicker",
                            ]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      [
                        "items",
                        "arrow-navigation",
                        "is-last",
                        "esc-close",
                        "height",
                        "config",
                        "no-overlay-focus",
                        "onSelected",
                        "onHoverValue",
                      ]
                    )),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  ek = (e, n) => {
    const { modelValue: a } = jn(e, n),
      t = L(null),
      { defaultedHighlight: o, defaultedFilters: i } = ct(e),
      r = L();
    De(() => {
      e.startDate &&
        ((a.value && e.focusStartDate) || !a.value) &&
        (r.value = Re(ne(e.startDate)));
    });
    const s = (d) =>
        Array.isArray(a.value)
          ? a.value.some((p) => Re(p) === d)
          : a.value
          ? Re(a.value) === d
          : !1,
      l = (d) =>
        e.range && Array.isArray(a.value) ? wo(a.value, t.value, g(d)) : !1,
      m = u(() =>
        ln(ci(e.yearRange, e.reverseYears), (d) => {
          const p = s(d.value),
            f =
              Yn(d.value, un(e.minDate), un(e.maxDate)) ||
              i.value.years.includes(d.value),
            b = l(d.value) && !p,
            S = di(o.value, d.value);
          return { active: p, disabled: f, isBetween: b, highlighted: S };
        })
      ),
      g = (d) => ra(Yt(new Date()), d);
    return {
      groupedYears: m,
      modelValue: a,
      focusYear: r,
      setHoverValue: (d) => {
        t.value = ra(Yt(new Date()), d);
      },
      selectYear: (d) => {
        var p;
        if (e.multiDates)
          return (
            a.value
              ? Array.isArray(a.value) &&
                (((p = a.value) == null
                  ? void 0
                  : p.map((f) => Re(f))
                ).includes(d)
                  ? (a.value = a.value.filter((f) => Re(f) !== d))
                  : a.value.push(ra(bt(ne()), d)))
              : (a.value = [ra(bt(ne()), d)]),
            n("auto-apply", !0)
          );
        if (e.range) {
          const f = gi(a, g(d), n);
          return Co(f, n, e.autoApply, e.modelAuto);
        }
        (a.value = g(d)), n("auto-apply");
      },
    };
  },
  tk = re({
    compatConfig: { MODE: 3 },
    __name: "YearPicker",
    props: { ...Kt },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          groupedYears: i,
          modelValue: r,
          focusYear: s,
          selectYear: l,
          setHoverValue: m,
        } = ek(o, t),
        { defaultedConfig: g } = ct(o);
      return (
        n({ getSidebarProps: () => ({ modelValue: r, selectYear: l }) }),
        (d, p) => (
          c(),
          h("div", null, [
            d.$slots["month-year"]
              ? ee(
                  d.$slots,
                  "month-year",
                  et(Ge({ key: 0 }, { years: A(i), selectYear: A(l) }))
                )
              : (c(),
                W(
                  zn,
                  {
                    key: 1,
                    items: A(i),
                    "is-last": d.autoApply && !A(g).keepActionRow,
                    height: A(g).modeHeight,
                    config: d.config,
                    "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
                    "focus-value": A(s),
                    type: "year",
                    "use-relative": "",
                    onSelected: A(l),
                    onHoverValue: A(m),
                  },
                  St({ _: 2 }, [
                    d.$slots["year-overlay-value"]
                      ? {
                          name: "item",
                          fn: fe(({ item: f }) => [
                            ee(d.$slots, "year-overlay-value", {
                              text: f.text,
                              value: f.value,
                            }),
                          ]),
                          key: "0",
                        }
                      : void 0,
                  ]),
                  1032,
                  [
                    "items",
                    "is-last",
                    "height",
                    "config",
                    "no-overlay-focus",
                    "focus-value",
                    "onSelected",
                    "onHoverValue",
                  ]
                )),
          ])
        )
      );
    },
  }),
  ak = { key: 0, class: "dp__time_input" },
  nk = ["aria-label", "onKeydown", "onClick"],
  ok = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  rk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  ik = ["aria-label", "disabled", "onKeydown", "onClick"],
  sk = ["aria-label", "onKeydown", "onClick"],
  lk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  uk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  ck = { key: 0 },
  dk = ["aria-label", "onKeydown"],
  mk = re({
    compatConfig: { MODE: 3 },
    __name: "TimeInput",
    props: {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Kt,
    },
    emits: [
      "set-hours",
      "set-minutes",
      "update:hours",
      "update:minutes",
      "update:seconds",
      "reset-flow",
      "mounted",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { setTimePickerElements: i, setTimePickerBackRef: r } = Ia(),
        {
          defaultedAriaLabels: s,
          defaultedTransitions: l,
          defaultedFilters: m,
          defaultedConfig: g,
        } = ct(o),
        { transitionName: d, showTransition: p } = Gn(l),
        f = va({ hours: !1, minutes: !1, seconds: !1 }),
        b = L("AM"),
        S = L(null),
        T = L([]);
      De(() => {
        t("mounted");
      });
      const w = (_) =>
          Je(new Date(), {
            hours: _.hours,
            minutes: _.minutes,
            seconds: o.enableSeconds ? _.seconds : 0,
            milliseconds: 0,
          }),
        y = u(() => (_) => V(_, o[_]) || C(_, o[_])),
        D = u(() => ({
          hours: o.hours,
          minutes: o.minutes,
          seconds: o.seconds,
        })),
        C = (_, ae) =>
          o.range && !o.disableTimeRangeValidation
            ? !o.validateTime(_, ae)
            : !1,
        M = (_, ae) => {
          if (o.range && !o.disableTimeRangeValidation) {
            const ve = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`],
              se = o[_] + ve;
            return !o.validateTime(_, se);
          }
          return !1;
        },
        N = u(() => (_) => !Y(+o[_] + +o[`${_}Increment`], _) || M(_, !0)),
        R = u(() => (_) => !Y(+o[_] - +o[`${_}Increment`], _) || M(_, !1)),
        Q = (_, ae) => Hl(Je(ne(), _), ae),
        G = (_, ae) => Dw(Je(ne(), _), ae),
        P = u(() => ({
          dp__time_col: !0,
          dp__time_col_block: !o.timePickerInline,
          dp__time_col_reg_block:
            !o.enableSeconds && o.is24 && !o.timePickerInline,
          dp__time_col_reg_inline:
            !o.enableSeconds && o.is24 && o.timePickerInline,
          dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
          dp__time_col_sec: o.enableSeconds && o.is24,
          dp__time_col_sec_with_button: o.enableSeconds && !o.is24,
        })),
        B = u(() => {
          const _ = [
            { type: "hours" },
            { type: "", separator: !0 },
            { type: "minutes" },
          ];
          return o.enableSeconds
            ? _.concat([{ type: "", separator: !0 }, { type: "seconds" }])
            : _;
        }),
        U = u(() => B.value.filter((_) => !_.separator)),
        j = u(() => (_) => {
          if (_ === "hours") {
            const ae = F(+o.hours);
            return { text: ae < 10 ? `0${ae}` : `${ae}`, value: ae };
          }
          return { text: o[_] < 10 ? `0${o[_]}` : `${o[_]}`, value: o[_] };
        }),
        V = (_, ae) => {
          var ve;
          if (!o.disabledTimesConfig) return !1;
          const se = o.disabledTimesConfig(
            o.order,
            _ === "hours" ? ae : void 0
          );
          return se[_] ? !!((ve = se[_]) != null && ve.includes(ae)) : !0;
        },
        E = (_) => {
          const ae = o.is24 ? 24 : 12,
            ve = _ === "hours" ? ae : 60,
            se = +o[`${_}GridIncrement`],
            _e = _ === "hours" && !o.is24 ? se : 0,
            me = [];
          for (let K = _e; K < ve; K += se)
            me.push({ value: K, text: K < 10 ? `0${K}` : `${K}` });
          return (
            _ === "hours" && !o.is24 && me.push({ value: 0, text: "12" }),
            ln(me, (K) => ({
              active: !1,
              disabled:
                m.value.times[_].includes(K.value) ||
                !Y(K.value, _) ||
                V(_, K.value) ||
                C(_, K.value),
            }))
          );
        },
        Y = (_, ae) => {
          const ve = o.minTime ? w(Go(o.minTime)) : null,
            se = o.maxTime ? w(Go(o.maxTime)) : null,
            _e = w(Go(D.value, ae, _));
          return ve && se
            ? (Vn(_e, se) || Qa(_e, se)) && (Un(_e, ve) || Qa(_e, ve))
            : ve
            ? Un(_e, ve) || Qa(_e, ve)
            : se
            ? Vn(_e, se) || Qa(_e, se)
            : !0;
        },
        $ = (_) => o[`no${_[0].toUpperCase() + _.slice(1)}Overlay`],
        z = (_) => {
          $(_) || ((f[_] = !f[_]), f[_] || t("overlay-closed"));
        },
        k = (_) => (_ === "hours" ? qt : _ === "minutes" ? ia : rn),
        v = (_, ae = !0) => {
          const ve = ae ? Q : G,
            se = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`];
          Y(+o[_] + se, _) &&
            t(
              `update:${_}`,
              k(_)(ve({ [_]: +o[_] }, { [_]: +o[`${_}Increment`] }))
            );
        },
        F = (_) =>
          o.is24 ? _ : (_ >= 12 ? (b.value = "PM") : (b.value = "AM"), o1(_)),
        q = () => {
          b.value === "PM"
            ? ((b.value = "AM"), t("update:hours", o.hours - 12))
            : ((b.value = "PM"), t("update:hours", o.hours + 12)),
            t("am-pm-change", b.value);
        },
        te = (_) => {
          f[_] = !0;
        },
        X = (_, ae, ve) => {
          if (_ && o.arrowNavigation) {
            Array.isArray(T.value[ae])
              ? (T.value[ae][ve] = _)
              : (T.value[ae] = [_]);
            const se = T.value.reduce(
              (_e, me) => me.map((K, le) => [...(_e[le] || []), me[le]]),
              []
            );
            r(o.closeTimePickerBtn),
              S.value && (se[1] = se[1].concat(S.value)),
              i(se, o.order);
          }
        },
        x = (_, ae) => (
          z(_),
          _ === "hours" && !o.is24
            ? t(`update:${_}`, b.value === "PM" ? ae + 12 : ae)
            : t(`update:${_}`, ae)
        );
      return (
        n({ openChildCmp: te }),
        (_, ae) => {
          var ve;
          return _.disabled
            ? O("", !0)
            : (c(),
              h("div", ak, [
                (c(!0),
                h(
                  pe,
                  null,
                  ke(B.value, (se, _e) => {
                    var me, K, le;
                    return (
                      c(),
                      h(
                        "div",
                        { key: _e, class: Z(P.value) },
                        [
                          se.separator
                            ? (c(), h(pe, { key: 0 }, [Ae(" : ")], 64))
                            : (c(),
                              h(
                                pe,
                                { key: 1 },
                                [
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => X(Me, _e, 0),
                                      type: "button",
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: N.value(
                                          se.type
                                        ),
                                      }),
                                      "aria-label":
                                        (me = A(s)) == null
                                          ? void 0
                                          : me.incrementValue(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((Me) => v(se.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((Me) => v(se.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => v(se.type),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(pe, { key: 1 }, [ok, rk], 64))
                                        : (c(),
                                          h(
                                            pe,
                                            { key: 0 },
                                            [
                                              _.$slots["arrow-up"]
                                                ? ee(_.$slots, "arrow-up", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              _.$slots["arrow-up"]
                                                ? O("", !0)
                                                : (c(), W(A(ri), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    nk
                                  ),
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => X(Me, _e, 1),
                                      type: "button",
                                      "aria-label":
                                        (K = A(s)) == null
                                          ? void 0
                                          : K.openTpOverlay(se.type),
                                      class: Z({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !_.timePickerInline,
                                        dp__time_display_inline:
                                          _.timePickerInline,
                                        "dp--time-invalid": y.value(se.type),
                                        "dp--time-overlay-btn": !y.value(
                                          se.type
                                        ),
                                      }),
                                      disabled: $(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((Me) => z(se.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((Me) => z(se.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => z(se.type),
                                    },
                                    [
                                      _.$slots[se.type]
                                        ? ee(_.$slots, se.type, {
                                            key: 0,
                                            text: j.value(se.type).text,
                                            value: j.value(se.type).value,
                                          })
                                        : O("", !0),
                                      _.$slots[se.type]
                                        ? O("", !0)
                                        : (c(),
                                          h(
                                            pe,
                                            { key: 1 },
                                            [Ae(J(j.value(se.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    ik
                                  ),
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => X(Me, _e, 2),
                                      type: "button",
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: R.value(
                                          se.type
                                        ),
                                      }),
                                      "aria-label":
                                        (le = A(s)) == null
                                          ? void 0
                                          : le.decrementValue(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie(
                                            (Me) => v(se.type, !1),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie(
                                            (Me) => v(se.type, !1),
                                            ["prevent"]
                                          ),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => v(se.type, !1),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(pe, { key: 1 }, [lk, uk], 64))
                                        : (c(),
                                          h(
                                            pe,
                                            { key: 0 },
                                            [
                                              _.$slots["arrow-down"]
                                                ? ee(_.$slots, "arrow-down", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              _.$slots["arrow-down"]
                                                ? O("", !0)
                                                : (c(), W(A(ii), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    sk
                                  ),
                                ],
                                64
                              )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
                _.is24
                  ? O("", !0)
                  : (c(),
                    h("div", ck, [
                      _.$slots["am-pm-button"]
                        ? ee(_.$slots, "am-pm-button", {
                            key: 0,
                            toggle: q,
                            value: b.value,
                          })
                        : O("", !0),
                      _.$slots["am-pm-button"]
                        ? O("", !0)
                        : (c(),
                          h(
                            "button",
                            {
                              key: 1,
                              ref_key: "amPmButton",
                              ref: S,
                              type: "button",
                              class: "dp__pm_am_button",
                              role: "button",
                              "aria-label":
                                (ve = A(s)) == null ? void 0 : ve.amPmButton,
                              tabindex: "0",
                              onClick: q,
                              onKeydown: [
                                Oe(Ie(q, ["prevent"]), ["enter"]),
                                Oe(Ie(q, ["prevent"]), ["space"]),
                              ],
                            },
                            J(b.value),
                            41,
                            dk
                          )),
                    ])),
                (c(!0),
                h(
                  pe,
                  null,
                  ke(
                    U.value,
                    (se, _e) => (
                      c(),
                      W(
                        It,
                        { key: _e, name: A(d)(f[se.type]), css: A(p) },
                        {
                          default: fe(() => [
                            f[se.type]
                              ? (c(),
                                W(
                                  zn,
                                  {
                                    key: 0,
                                    items: E(se.type),
                                    "is-last":
                                      _.autoApply && !A(g).keepActionRow,
                                    "esc-close": _.escClose,
                                    type: se.type,
                                    "text-input": _.textInput,
                                    config: _.config,
                                    "arrow-navigation": _.arrowNavigation,
                                    onSelected: (me) => x(se.type, me),
                                    onToggle: (me) => z(se.type),
                                    onResetFlow:
                                      ae[0] ||
                                      (ae[0] = (me) => _.$emit("reset-flow")),
                                  },
                                  St(
                                    {
                                      "button-icon": fe(() => [
                                        _.$slots["clock-icon"]
                                          ? ee(_.$slots, "clock-icon", {
                                              key: 0,
                                            })
                                          : O("", !0),
                                        _.$slots["clock-icon"]
                                          ? O("", !0)
                                          : (c(),
                                            W(
                                              cn(
                                                _.timePickerInline
                                                  ? A(gn)
                                                  : A(oi)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      _.$slots[`${se.type}-overlay-value`]
                                        ? {
                                            name: "item",
                                            fn: fe(({ item: me }) => [
                                              ee(
                                                _.$slots,
                                                `${se.type}-overlay-value`,
                                                {
                                                  text: me.text,
                                                  value: me.value,
                                                }
                                              ),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ]
                                  ),
                                  1032,
                                  [
                                    "items",
                                    "is-last",
                                    "esc-close",
                                    "type",
                                    "text-input",
                                    "config",
                                    "arrow-navigation",
                                    "onSelected",
                                    "onToggle",
                                  ]
                                ))
                              : O("", !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["name", "css"]
                      )
                    )
                  ),
                  128
                )),
              ]));
        }
      );
    },
  }),
  gk = { class: "dp--tp-wrap" },
  pk = ["aria-label", "tabindex"],
  vk = ["tabindex"],
  hk = ["aria-label"],
  Tu = re({
    compatConfig: { MODE: 3 },
    __name: "TimePicker",
    props: {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Kt,
    },
    emits: [
      "update:hours",
      "update:minutes",
      "update:seconds",
      "mount",
      "reset-flow",
      "overlay-opened",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMatrix: i, setTimePicker: r } = Ia(),
        s = Va(),
        {
          defaultedTransitions: l,
          defaultedAriaLabels: m,
          defaultedTextInput: g,
          defaultedConfig: d,
        } = ct(o),
        { transitionName: p, showTransition: f } = Gn(l),
        { hideNavigationButtons: b } = ko(),
        S = L(null),
        T = L(null),
        w = L([]),
        y = L(null);
      De(() => {
        t("mount"),
          !o.timePicker && o.arrowNavigation
            ? i([mt(S.value)], "time")
            : r(!0, o.timePicker);
      });
      const D = u(() =>
          o.range && o.modelAuto ? du(o.internalModelValue) : !0
        ),
        C = L(!1),
        M = (E) => ({
          hours: Array.isArray(o.hours) ? o.hours[E] : o.hours,
          minutes: Array.isArray(o.minutes) ? o.minutes[E] : o.minutes,
          seconds: Array.isArray(o.seconds) ? o.seconds[E] : o.seconds,
        }),
        N = u(() => {
          const E = [];
          if (o.range) for (let Y = 0; Y < 2; Y++) E.push(M(Y));
          else E.push(M(0));
          return E;
        }),
        R = (E, Y = !1, $ = "") => {
          Y || t("reset-flow"),
            (C.value = E),
            t(E ? "overlay-opened" : "overlay-closed"),
            o.arrowNavigation && r(E),
            Ct(() => {
              $ !== "" && w.value[0] && w.value[0].openChildCmp($);
            });
        },
        Q = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: o.autoApply && !d.value.keepActionRow,
        })),
        G = Mt(s, "timePicker"),
        P = (E, Y, $) =>
          o.range ? (Y === 0 ? [E, N.value[1][$]] : [N.value[0][$], E]) : E,
        B = (E) => {
          t("update:hours", E);
        },
        U = (E) => {
          t("update:minutes", E);
        },
        j = (E) => {
          t("update:seconds", E);
        },
        V = () => {
          if (y.value && !g.value.enabled && !o.noOverlayFocus) {
            const E = i1(y.value);
            E && E.focus({ preventScroll: !0 });
          }
        };
      return (
        n({ toggleTimePicker: R }),
        (E, Y) => {
          var $;
          return (
            c(),
            h("div", gk, [
              !E.timePicker && !E.timePickerInline
                ? ue(
                    (c(),
                    h(
                      "button",
                      {
                        key: 0,
                        ref_key: "openTimePickerBtn",
                        ref: S,
                        type: "button",
                        class: Z(Q.value),
                        "aria-label":
                          ($ = A(m)) == null ? void 0 : $.openTimePicker,
                        tabindex: E.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          Y[0] || (Y[0] = Oe((z) => R(!0), ["enter"])),
                          Y[1] || (Y[1] = Oe((z) => R(!0), ["space"])),
                        ],
                        onClick: Y[2] || (Y[2] = (z) => R(!0)),
                      },
                      [
                        E.$slots["clock-icon"]
                          ? ee(E.$slots, "clock-icon", { key: 0 })
                          : O("", !0),
                        E.$slots["clock-icon"]
                          ? O("", !0)
                          : (c(), W(A(oi), { key: 1 })),
                      ],
                      42,
                      pk
                    )),
                    [[Ft, !A(b)(E.hideNavigation, "time")]]
                  )
                : O("", !0),
              Ee(
                It,
                { name: A(p)(C.value), css: A(f) && !E.timePickerInline },
                {
                  default: fe(() => {
                    var z;
                    return [
                      C.value || E.timePicker || E.timePickerInline
                        ? (c(),
                          h(
                            "div",
                            {
                              key: 0,
                              ref_key: "overlayRef",
                              ref: y,
                              class: Z({
                                dp__overlay: !E.timePickerInline,
                                "dp--overlay-absolute":
                                  !o.timePicker && !E.timePickerInline,
                                "dp--overlay-relative": o.timePicker,
                              }),
                              style: xe(
                                E.timePicker
                                  ? { height: `${A(d).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: E.timePickerInline ? void 0 : 0,
                            },
                            [
                              I(
                                "div",
                                {
                                  class: Z(
                                    E.timePickerInline
                                      ? "dp__time_picker_inline_container"
                                      : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                                  ),
                                  style: { display: "flex" },
                                },
                                [
                                  E.$slots["time-picker-overlay"]
                                    ? ee(E.$slots, "time-picker-overlay", {
                                        key: 0,
                                        hours: e.hours,
                                        minutes: e.minutes,
                                        seconds: e.seconds,
                                        setHours: B,
                                        setMinutes: U,
                                        setSeconds: j,
                                      })
                                    : O("", !0),
                                  E.$slots["time-picker-overlay"]
                                    ? O("", !0)
                                    : (c(),
                                      h(
                                        "div",
                                        {
                                          key: 1,
                                          class: Z(
                                            E.timePickerInline
                                              ? "dp__flex"
                                              : "dp__overlay_row dp__flex_row"
                                          ),
                                        },
                                        [
                                          (c(!0),
                                          h(
                                            pe,
                                            null,
                                            ke(N.value, (k, v) =>
                                              ue(
                                                (c(),
                                                W(
                                                  mk,
                                                  Ge(
                                                    { key: v },
                                                    {
                                                      ...E.$props,
                                                      order: v,
                                                      hours: k.hours,
                                                      minutes: k.minutes,
                                                      seconds: k.seconds,
                                                      closeTimePickerBtn:
                                                        T.value,
                                                      disabledTimesConfig:
                                                        e.disabledTimesConfig,
                                                      disabled:
                                                        v === 0
                                                          ? E.fixedStart
                                                          : E.fixedEnd,
                                                    },
                                                    {
                                                      ref_for: !0,
                                                      ref_key: "timeInputRefs",
                                                      ref: w,
                                                      "validate-time": (F, q) =>
                                                        e.validateTime(
                                                          F,
                                                          P(q, v, F)
                                                        ),
                                                      "onUpdate:hours": (F) =>
                                                        B(P(F, v, "hours")),
                                                      "onUpdate:minutes": (F) =>
                                                        U(P(F, v, "minutes")),
                                                      "onUpdate:seconds": (F) =>
                                                        j(P(F, v, "seconds")),
                                                      onMounted: V,
                                                      onOverlayClosed: V,
                                                      onAmPmChange:
                                                        Y[3] ||
                                                        (Y[3] = (F) =>
                                                          E.$emit(
                                                            "am-pm-change",
                                                            F
                                                          )),
                                                    }
                                                  ),
                                                  St({ _: 2 }, [
                                                    ke(A(G), (F, q) => ({
                                                      name: F,
                                                      fn: fe((te) => [
                                                        ee(
                                                          E.$slots,
                                                          F,
                                                          et(ft(te))
                                                        ),
                                                      ]),
                                                    })),
                                                  ]),
                                                  1040,
                                                  [
                                                    "validate-time",
                                                    "onUpdate:hours",
                                                    "onUpdate:minutes",
                                                    "onUpdate:seconds",
                                                  ]
                                                )),
                                                [[Ft, v === 0 ? !0 : D.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !E.timePicker && !E.timePickerInline
                                    ? ue(
                                        (c(),
                                        h(
                                          "button",
                                          {
                                            key: 2,
                                            ref_key: "closeTimePickerBtn",
                                            ref: T,
                                            type: "button",
                                            class: Z(Q.value),
                                            "aria-label":
                                              (z = A(m)) == null
                                                ? void 0
                                                : z.closeTimePicker,
                                            tabindex: "0",
                                            onKeydown: [
                                              Y[4] ||
                                                (Y[4] = Oe(
                                                  (k) => R(!1),
                                                  ["enter"]
                                                )),
                                              Y[5] ||
                                                (Y[5] = Oe(
                                                  (k) => R(!1),
                                                  ["space"]
                                                )),
                                            ],
                                            onClick:
                                              Y[6] || (Y[6] = (k) => R(!1)),
                                          },
                                          [
                                            E.$slots["calendar-icon"]
                                              ? ee(E.$slots, "calendar-icon", {
                                                  key: 0,
                                                })
                                              : O("", !0),
                                            E.$slots["calendar-icon"]
                                              ? O("", !0)
                                              : (c(), W(A(gn), { key: 1 })),
                                          ],
                                          42,
                                          hk
                                        )),
                                        [[Ft, !A(b)(E.hideNavigation, "time")]]
                                      )
                                    : O("", !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            vk
                          ))
                        : O("", !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["name", "css"]
              ),
            ])
          );
        }
      );
    },
  }),
  Cu = (e, n, a, t) => {
    const o = (w, y) => (Array.isArray(n[w]) ? n[w][y] : n[w]),
      i = (w) =>
        e.enableSeconds
          ? Array.isArray(n.seconds)
            ? n.seconds[w]
            : n.seconds
          : 0,
      r = (w, y) =>
        w
          ? y !== void 0
            ? Pa(w, o("hours", y), o("minutes", y), i(y))
            : Pa(w, n.hours, n.minutes, i())
          : ti(ne(), i(y)),
      s = (w, y) => {
        n[w] = y;
      },
      l = (w, y) => {
        const D = Object.fromEntries(
          Object.keys(n).map((C) => (C === w ? [C, y] : [C, n[C]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const C = (N) =>
              a.value
                ? Pa(a.value[N], D.hours[N], D.minutes[N], D.seconds[N])
                : null,
            M = (N) => ei(a.value[N], 0);
          return !(We(C(0), C(1)) && (Un(C(0), M(1)) || Vn(C(1), M(0))));
        }
        return !0;
      },
      m = (w, y) => {
        l(w, y) && (s(w, y), t && t());
      },
      g = (w) => {
        m("hours", w);
      },
      d = (w) => {
        m("minutes", w);
      },
      p = (w) => {
        m("seconds", w);
      },
      f = (w, y, D, C) => {
        y && g(w), !y && !D && d(w), D && p(w), a.value && C(a.value);
      },
      b = (w) => {
        if (w) {
          const y = Array.isArray(w),
            D = y ? [+w[0].hours, +w[1].hours] : +w.hours,
            C = y ? [+w[0].minutes, +w[1].minutes] : +w.minutes,
            M = y ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
          s("hours", D), s("minutes", C), e.enableSeconds && s("seconds", M);
        }
      },
      S = (w, y) => {
        const D = {
          hours: Array.isArray(n.hours) ? n.hours[w] : n.hours,
          disabledArr: [],
        };
        return (
          (y || y === 0) && (D.hours = y),
          Array.isArray(e.disabledTimes) &&
            (D.disabledArr =
              e.range && Array.isArray(e.disabledTimes[w])
                ? e.disabledTimes[w]
                : e.disabledTimes),
          D
        );
      },
      T = u(() => (w, y) => {
        var D;
        if (Array.isArray(e.disabledTimes)) {
          const { disabledArr: C, hours: M } = S(w, y),
            N = C.filter((R) => +R.hours === M);
          return ((D = N[0]) == null ? void 0 : D.minutes) === "*"
            ? { hours: [M], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: N?.map((R) => +R.minutes) ?? [],
                seconds: N?.map((R) => (R.seconds ? +R.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: s,
      updateHours: g,
      updateMinutes: d,
      updateSeconds: p,
      getSetDateTime: r,
      updateTimeValues: f,
      getSecondsValue: i,
      assignStartTime: b,
      validateTime: l,
      disabledTimesConfig: T,
    };
  },
  fk = (e, n) => {
    const { modelValue: a, time: t } = jn(e, n),
      { defaultedStartTime: o } = ct(e),
      {
        updateTimeValues: i,
        getSetDateTime: r,
        setTime: s,
        assignStartTime: l,
        disabledTimesConfig: m,
        validateTime: g,
      } = Cu(e, t, a),
      d = (y) => {
        const { hours: D, minutes: C, seconds: M } = y;
        return { hours: +D, minutes: +C, seconds: M ? +M : 0 };
      },
      p = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const D = d(e.startTime[0]),
              C = d(e.startTime[1]);
            return [Je(ne(), D), Je(ne(), C)];
          }
          const y = d(e.startTime);
          return Je(ne(), y);
        }
        return e.range ? [null, null] : null;
      },
      f = () => {
        if (e.range) {
          const [y, D] = p();
          a.value = [r(y, 0), r(D, 1)];
        } else a.value = r(p());
      },
      b = (y) =>
        Array.isArray(y) ? [Ra(ne(y[0])), Ra(ne(y[1]))] : [Ra(y ?? ne())],
      S = (y, D, C) => {
        s("hours", y), s("minutes", D), s("seconds", e.enableSeconds ? C : 0);
      },
      T = () => {
        const [y, D] = b(a.value);
        return e.range
          ? S(
              [y.hours, D.hours],
              [y.minutes, D.minutes],
              [y.seconds, D.minutes]
            )
          : S(y.hours, y.minutes, y.seconds);
      };
    De(() => {
      if (!e.shadow) return l(o.value), a.value ? T() : f();
    });
    const w = () => {
      Array.isArray(a.value)
        ? (a.value = a.value.map((y, D) => y && r(y, D)))
        : (a.value = r(a.value)),
        n("time-update");
    };
    return {
      modelValue: a,
      time: t,
      disabledTimesConfig: m,
      updateTime: (y, D = !0, C = !1) => {
        i(y, D, C, w);
      },
      validateTime: g,
    };
  },
  yk = re({
    compatConfig: { MODE: 3 },
    __name: "TimePickerSolo",
    props: { ...Kt },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Va(),
        r = Mt(i, "timePicker"),
        {
          time: s,
          modelValue: l,
          disabledTimesConfig: m,
          updateTime: g,
          validateTime: d,
        } = fk(o, t);
      return (
        n({
          getSidebarProps: () => ({ modelValue: l, time: s, updateTime: g }),
        }),
        (p, f) => (
          c(),
          W(
            To,
            { "multi-calendars": 0, stretch: "" },
            {
              default: fe(() => [
                Ee(
                  Tu,
                  Ge(p.$props, {
                    hours: A(s).hours,
                    minutes: A(s).minutes,
                    seconds: A(s).seconds,
                    "internal-model-value": p.internalModelValue,
                    "disabled-times-config": A(m),
                    "validate-time": A(d),
                    "onUpdate:hours": f[0] || (f[0] = (b) => A(g)(b)),
                    "onUpdate:minutes": f[1] || (f[1] = (b) => A(g)(b, !1)),
                    "onUpdate:seconds": f[2] || (f[2] = (b) => A(g)(b, !1, !0)),
                    onAmPmChange:
                      f[3] || (f[3] = (b) => p.$emit("am-pm-change", b)),
                  }),
                  St({ _: 2 }, [
                    ke(A(r), (b, S) => ({
                      name: b,
                      fn: fe((T) => [ee(p.$slots, b, et(ft(T)))]),
                    })),
                  ]),
                  1040,
                  [
                    "hours",
                    "minutes",
                    "seconds",
                    "internal-model-value",
                    "disabled-times-config",
                    "validate-time",
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  bk = { class: "dp__month_year_row" },
  _k = ["aria-label", "onClick", "onKeydown"],
  wk = re({
    compatConfig: { MODE: 3 },
    __name: "DpHeader",
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] },
      ...Kt,
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTransitions: i,
          defaultedAriaLabels: r,
          defaultedMultiCalendars: s,
          defaultedFilters: l,
          defaultedConfig: m,
          defaultedHighlight: g,
        } = ct(o),
        { transitionName: d, showTransition: p } = Gn(i),
        { buildMatrix: f } = Ia(),
        {
          handleMonthYearChange: b,
          isDisabled: S,
          updateMonthYear: T,
        } = O1(o, t),
        { showLeftIcon: w, showRightIcon: y } = ko(),
        D = L(!1),
        C = L(!1),
        M = L([null, null, null, null]);
      De(() => {
        t("mount");
      });
      const N = (v) => ({
          get: () => o[v],
          set: (F) => {
            const q = v === Ut.month ? Ut.year : Ut.month;
            t("update-month-year", { [v]: F, [q]: o[q] }),
              v === Ut.month ? V(!0) : E(!0);
          },
        }),
        R = u(N(Ut.month)),
        Q = u(N(Ut.year)),
        G = u(() => (v) => ({
          month: o.month,
          year: o.year,
          items: v === Ut.month ? o.months : o.years,
          instance: o.instance,
          updateMonthYear: T,
          toggle: v === Ut.month ? V : E,
        })),
        P = u(
          () =>
            o.months.find((F) => F.value === o.month) || { text: "", value: 0 }
        ),
        B = u(() =>
          ln(o.months, (v) => {
            const F = o.month === v.value,
              q =
                Yn(v.value, mu(o.year, o.minDate), gu(o.year, o.maxDate)) ||
                l.value.months.includes(v.value),
              te = bu(g.value, v.value, o.year);
            return { active: F, disabled: q, highlighted: te };
          })
        ),
        U = u(() =>
          ln(o.years, (v) => {
            const F = o.year === v.value,
              q =
                Yn(v.value, un(o.minDate), un(o.maxDate)) ||
                l.value.years.includes(v.value),
              te = di(g.value, v.value);
            return { active: F, disabled: q, highlighted: te };
          })
        ),
        j = (v, F) => {
          F !== void 0 ? (v.value = F) : (v.value = !v.value),
            v.value || t("overlay-closed");
        },
        V = (v = !1, F) => {
          Y(v), j(D, F);
        },
        E = (v = !1, F) => {
          Y(v), j(C, F);
        },
        Y = (v) => {
          v || t("reset-flow");
        },
        $ = (v, F) => {
          o.arrowNavigation && ((M.value[F] = mt(v)), f(M.value, "monthYear"));
        },
        z = u(() => {
          var v, F;
          return [
            {
              type: Ut.month,
              index: 1,
              toggle: V,
              modelValue: R.value,
              updateModelValue: (q) => (R.value = q),
              text: P.value.text,
              showSelectionGrid: D.value,
              items: B.value,
              ariaLabel: (v = r.value) == null ? void 0 : v.openMonthsOverlay,
            },
            {
              type: Ut.year,
              index: 2,
              toggle: E,
              modelValue: Q.value,
              updateModelValue: (q) => (Q.value = q),
              text: o.year,
              showSelectionGrid: C.value,
              items: U.value,
              ariaLabel: (F = r.value) == null ? void 0 : F.openYearsOverlay,
            },
          ];
        }),
        k = u(() =>
          o.disableYearSelect
            ? [z.value[0]]
            : o.yearFirst
            ? [...z.value].reverse()
            : z.value
        );
      return (
        n({
          toggleMonthPicker: V,
          toggleYearPicker: E,
          handleMonthYearChange: b,
        }),
        (v, F) => {
          var q, te, X;
          return (
            c(),
            h("div", bk, [
              v.$slots["month-year"]
                ? ee(
                    v.$slots,
                    "month-year",
                    et(
                      Ge(
                        { key: 0 },
                        {
                          month: e.month,
                          year: e.year,
                          months: e.months,
                          years: e.years,
                          updateMonthYear: A(T),
                          handleMonthYearChange: A(b),
                          instance: e.instance,
                        }
                      )
                    )
                  )
                : (c(),
                  h(
                    pe,
                    { key: 1 },
                    [
                      A(w)(A(s), e.instance) && !v.vertical
                        ? (c(),
                          W(
                            Mn,
                            {
                              key: 0,
                              "aria-label":
                                (q = A(r)) == null ? void 0 : q.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: F[0] || (F[0] = (x) => A(b)(!1, !0)),
                              onSetRef: F[1] || (F[1] = (x) => $(x, 0)),
                            },
                            {
                              default: fe(() => [
                                v.$slots["arrow-left"]
                                  ? ee(v.$slots, "arrow-left", { key: 0 })
                                  : O("", !0),
                                v.$slots["arrow-left"]
                                  ? O("", !0)
                                  : (c(), W(A(ai), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : O("", !0),
                      I(
                        "div",
                        {
                          class: Z([
                            "dp__month_year_wrap",
                            { dp__year_disable_select: v.disableYearSelect },
                          ]),
                        },
                        [
                          (c(!0),
                          h(
                            pe,
                            null,
                            ke(
                              k.value,
                              (x, _) => (
                                c(),
                                h(
                                  pe,
                                  { key: x.type },
                                  [
                                    I(
                                      "button",
                                      {
                                        ref_for: !0,
                                        ref: (ae) => $(ae, _ + 1),
                                        type: "button",
                                        class: "dp__btn dp__month_year_select",
                                        tabindex: "0",
                                        "aria-label": x.ariaLabel,
                                        onClick: x.toggle,
                                        onKeydown: [
                                          Oe(Ie(x.toggle, ["prevent"]), [
                                            "enter",
                                          ]),
                                          Oe(Ie(x.toggle, ["prevent"]), [
                                            "space",
                                          ]),
                                        ],
                                      },
                                      [
                                        v.$slots[x.type]
                                          ? ee(v.$slots, x.type, {
                                              key: 0,
                                              text: x.text,
                                              value: o[x.type],
                                            })
                                          : O("", !0),
                                        v.$slots[x.type]
                                          ? O("", !0)
                                          : (c(),
                                            h(
                                              pe,
                                              { key: 1 },
                                              [Ae(J(x.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      _k
                                    ),
                                    Ee(
                                      It,
                                      {
                                        name: A(d)(x.showSelectionGrid),
                                        css: A(p),
                                      },
                                      {
                                        default: fe(() => [
                                          x.showSelectionGrid
                                            ? (c(),
                                              W(
                                                zn,
                                                {
                                                  key: 0,
                                                  items: x.items,
                                                  "arrow-navigation":
                                                    v.arrowNavigation,
                                                  "hide-navigation":
                                                    v.hideNavigation,
                                                  "is-last":
                                                    v.autoApply &&
                                                    !A(m).keepActionRow,
                                                  "skip-button-ref": !1,
                                                  config: v.config,
                                                  type: x.type,
                                                  "header-refs": [],
                                                  "esc-close": v.escClose,
                                                  "text-input": v.textInput,
                                                  onSelected:
                                                    x.updateModelValue,
                                                  onToggle: x.toggle,
                                                },
                                                St(
                                                  {
                                                    "button-icon": fe(() => [
                                                      v.$slots["calendar-icon"]
                                                        ? ee(
                                                            v.$slots,
                                                            "calendar-icon",
                                                            { key: 0 }
                                                          )
                                                        : O("", !0),
                                                      v.$slots["calendar-icon"]
                                                        ? O("", !0)
                                                        : (c(),
                                                          W(A(gn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    v.$slots[
                                                      `${x.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: "item",
                                                          fn: fe(
                                                            ({ item: ae }) => [
                                                              ee(
                                                                v.$slots,
                                                                `${x.type}-overlay-value`,
                                                                {
                                                                  text: ae.text,
                                                                  value:
                                                                    ae.value,
                                                                }
                                                              ),
                                                            ]
                                                          ),
                                                          key: "0",
                                                        }
                                                      : void 0,
                                                    v.$slots[
                                                      `${x.type}-overlay`
                                                    ]
                                                      ? {
                                                          name: "overlay",
                                                          fn: fe(() => [
                                                            ee(
                                                              v.$slots,
                                                              `${x.type}-overlay`,
                                                              et(
                                                                ft(
                                                                  G.value(
                                                                    x.type
                                                                  )
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          key: "1",
                                                        }
                                                      : void 0,
                                                    v.$slots[
                                                      `${x.type}-overlay-header`
                                                    ]
                                                      ? {
                                                          name: "header",
                                                          fn: fe(() => [
                                                            ee(
                                                              v.$slots,
                                                              `${x.type}-overlay-header`,
                                                              {
                                                                toggle:
                                                                  x.toggle,
                                                              }
                                                            ),
                                                          ]),
                                                          key: "2",
                                                        }
                                                      : void 0,
                                                  ]
                                                ),
                                                1032,
                                                [
                                                  "items",
                                                  "arrow-navigation",
                                                  "hide-navigation",
                                                  "is-last",
                                                  "config",
                                                  "type",
                                                  "esc-close",
                                                  "text-input",
                                                  "onSelected",
                                                  "onToggle",
                                                ]
                                              ))
                                            : O("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["name", "css"]
                                    ),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      A(w)(A(s), e.instance) && v.vertical
                        ? (c(),
                          W(
                            Mn,
                            {
                              key: 1,
                              "aria-label":
                                (te = A(r)) == null ? void 0 : te.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: F[2] || (F[2] = (x) => A(b)(!1, !0)),
                            },
                            {
                              default: fe(() => [
                                v.$slots["arrow-up"]
                                  ? ee(v.$slots, "arrow-up", { key: 0 })
                                  : O("", !0),
                                v.$slots["arrow-up"]
                                  ? O("", !0)
                                  : (c(), W(A(ri), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : O("", !0),
                      A(y)(A(s), e.instance)
                        ? (c(),
                          W(
                            Mn,
                            {
                              key: 2,
                              ref: "rightIcon",
                              disabled: A(S)(!0),
                              "aria-label":
                                (X = A(r)) == null ? void 0 : X.nextMonth,
                              onActivate: F[3] || (F[3] = (x) => A(b)(!0, !0)),
                              onSetRef:
                                F[4] ||
                                (F[4] = (x) =>
                                  $(x, v.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: fe(() => [
                                v.$slots[
                                  v.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? ee(
                                      v.$slots,
                                      v.vertical ? "arrow-down" : "arrow-right",
                                      { key: 0 }
                                    )
                                  : O("", !0),
                                v.$slots[
                                  v.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? O("", !0)
                                  : (c(),
                                    W(cn(v.vertical ? A(ii) : A(ni)), {
                                      key: 1,
                                    })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["disabled", "aria-label"]
                          ))
                        : O("", !0),
                    ],
                    64
                  )),
            ])
          );
        }
      );
    },
  }),
  kk = ["aria-label"],
  Sk = { class: "dp__calendar_header", role: "row" },
  Tk = { key: 0, class: "dp__calendar_header_item", role: "gridcell" },
  Ck = I("div", { class: "dp__calendar_header_separator" }, null, -1),
  Pk = ["aria-label"],
  Ik = { key: 0, role: "gridcell", class: "dp__calendar_item dp__week_num" },
  Ek = { class: "dp__cell_inner" },
  Dk = [
    "id",
    "aria-selected",
    "aria-disabled",
    "aria-label",
    "onClick",
    "onKeydown",
    "onMouseenter",
    "onMouseleave",
  ],
  Mk = re({
    compatConfig: { MODE: 3 },
    __name: "DpCalendar",
    props: {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      ...Kt,
    },
    emits: [
      "select-date",
      "set-hover-date",
      "handle-scroll",
      "mount",
      "handle-swipe",
      "handle-space",
      "tooltip-open",
      "tooltip-close",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMultiLevelMatrix: i } = Ia(),
        {
          defaultedTransitions: r,
          defaultedConfig: s,
          defaultedAriaLabels: l,
          defaultedMultiCalendars: m,
          defaultedWeekNumbers: g,
        } = ct(o),
        d = L(null),
        p = L({ bottom: "", left: "", transform: "" }),
        f = L([]),
        b = L(null),
        S = L(!0),
        T = L(""),
        w = L({ startX: 0, endX: 0, startY: 0, endY: 0 }),
        y = L([]),
        D = L({ left: "50%" }),
        C = u(() => (o.calendar ? o.calendar(o.mappedDates) : o.mappedDates)),
        M = u(() =>
          o.dayNames
            ? Array.isArray(o.dayNames)
              ? o.dayNames
              : o.dayNames(o.locale, +o.weekStart)
            : n1(o.formatLocale, o.locale, +o.weekStart)
        );
      De(() => {
        t("mount", { cmp: "calendar", refs: f }),
          s.value.noSwipe ||
            (b.value &&
              (b.value.addEventListener("touchstart", E, { passive: !1 }),
              b.value.addEventListener("touchend", Y, { passive: !1 }),
              b.value.addEventListener("touchmove", $, { passive: !1 }))),
          o.monthChangeOnScroll &&
            b.value &&
            b.value.addEventListener("wheel", v, { passive: !1 });
      });
      const N = (x) =>
          x
            ? o.vertical
              ? "vNext"
              : "next"
            : o.vertical
            ? "vPrevious"
            : "previous",
        R = (x, _) => {
          if (o.transitions) {
            const ae = bt(pa(ne(), o.month, o.year));
            (T.value = yt(bt(pa(ne(), x, _)), ae)
              ? r.value[N(!0)]
              : r.value[N(!1)]),
              (S.value = !1),
              Ct(() => {
                S.value = !0;
              });
          }
        },
        Q = u(() => ({ [o.calendarClassName]: !!o.calendarClassName })),
        G = u(() => (x) => {
          const _ = r1(x);
          return {
            dp__marker_dot: _.type === "dot",
            dp__marker_line: _.type === "line",
          };
        }),
        P = u(() => (x) => We(x, d.value)),
        B = u(() => ({
          dp__calendar: !0,
          dp__calendar_next: m.value.count > 0 && o.instance !== 0,
        })),
        U = u(() => (x) => o.hideOffsetDates ? x.current : !0),
        j = async (x, _, ae) => {
          var ve, se;
          if (
            (t("set-hover-date", x),
            (se = (ve = x.marker) == null ? void 0 : ve.tooltip) != null &&
              se.length)
          ) {
            const _e = mt(f.value[_][ae]);
            if (_e) {
              const { width: me, height: K } = _e.getBoundingClientRect();
              d.value = x.value;
              let le = { left: `${me / 2}px` },
                Me = -50;
              if ((await Ct(), y.value[0])) {
                const { left: ge, width: Fe } =
                  y.value[0].getBoundingClientRect();
                ge < 0 &&
                  ((le = { left: "0" }),
                  (Me = 0),
                  (D.value.left = `${me / 2}px`)),
                  window.innerWidth < ge + Fe &&
                    ((le = { right: "0" }),
                    (Me = 0),
                    (D.value.left = `${Fe - me / 2}px`));
              }
              (p.value = {
                bottom: `${K}px`,
                ...le,
                transform: `translateX(${Me}%)`,
              }),
                t("tooltip-open", x.marker);
            }
          }
        },
        V = (x) => {
          d.value &&
            ((d.value = null),
            (p.value = JSON.parse(
              JSON.stringify({ bottom: "", left: "", transform: "" })
            )),
            t("tooltip-close", x.marker));
        },
        E = (x) => {
          (w.value.startX = x.changedTouches[0].screenX),
            (w.value.startY = x.changedTouches[0].screenY);
        },
        Y = (x) => {
          (w.value.endX = x.changedTouches[0].screenX),
            (w.value.endY = x.changedTouches[0].screenY),
            z();
        },
        $ = (x) => {
          o.vertical && !o.inline && x.preventDefault();
        },
        z = () => {
          const x = o.vertical ? "Y" : "X";
          Math.abs(w.value[`start${x}`] - w.value[`end${x}`]) > 10 &&
            t(
              "handle-swipe",
              w.value[`start${x}`] > w.value[`end${x}`] ? "right" : "left"
            );
        },
        k = (x, _, ae) => {
          x &&
            (Array.isArray(f.value[_])
              ? (f.value[_][ae] = x)
              : (f.value[_] = [x])),
            o.arrowNavigation && i(f.value, "calendar");
        },
        v = (x) => {
          o.monthChangeOnScroll && (x.preventDefault(), t("handle-scroll", x));
        },
        F = (x) =>
          g.value.type === "local"
            ? p0(x.value, { weekStartsOn: +o.weekStart })
            : g.value.type === "iso"
            ? c0(x.value)
            : typeof g.value.type == "function"
            ? g.value.type(x.value)
            : "",
        q = (x) => {
          const _ = x[0];
          return g.value.hideOnOffsetDates
            ? x.some((ae) => ae.current)
              ? F(_)
              : ""
            : F(_);
        },
        te = (x, _) => {
          Ca(x, s.value), t("select-date", _);
        },
        X = (x) => {
          Ca(x, s.value);
        };
      return (
        n({ triggerTransition: R }),
        (x, _) => {
          var ae;
          return (
            c(),
            h(
              "div",
              { class: Z(B.value) },
              [
                I(
                  "div",
                  {
                    ref_key: "calendarWrapRef",
                    ref: b,
                    role: "grid",
                    class: Z(Q.value),
                    "aria-label":
                      (ae = A(l)) == null ? void 0 : ae.calendarWrap,
                  },
                  [
                    (c(),
                    h(
                      pe,
                      { key: 0 },
                      [
                        I("div", Sk, [
                          x.weekNumbers
                            ? (c(), h("div", Tk, J(x.weekNumName), 1))
                            : O("", !0),
                          (c(!0),
                          h(
                            pe,
                            null,
                            ke(
                              M.value,
                              (ve, se) => (
                                c(),
                                h(
                                  "div",
                                  {
                                    key: se,
                                    class: "dp__calendar_header_item",
                                    role: "gridcell",
                                  },
                                  [
                                    x.$slots["calendar-header"]
                                      ? ee(x.$slots, "calendar-header", {
                                          key: 0,
                                          day: ve,
                                          index: se,
                                        })
                                      : O("", !0),
                                    x.$slots["calendar-header"]
                                      ? O("", !0)
                                      : (c(),
                                        h(pe, { key: 1 }, [Ae(J(ve), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        Ck,
                        Ee(
                          It,
                          { name: T.value, css: !!x.transitions },
                          {
                            default: fe(() => {
                              var ve;
                              return [
                                S.value
                                  ? (c(),
                                    h(
                                      "div",
                                      {
                                        key: 0,
                                        class: "dp__calendar",
                                        role: "rowgroup",
                                        "aria-label":
                                          ((ve = A(l)) == null
                                            ? void 0
                                            : ve.calendarDays) || void 0,
                                      },
                                      [
                                        (c(!0),
                                        h(
                                          pe,
                                          null,
                                          ke(
                                            C.value,
                                            (se, _e) => (
                                              c(),
                                              h(
                                                "div",
                                                {
                                                  key: _e,
                                                  class: "dp__calendar_row",
                                                  role: "row",
                                                },
                                                [
                                                  x.weekNumbers
                                                    ? (c(),
                                                      h("div", Ik, [
                                                        I(
                                                          "div",
                                                          Ek,
                                                          J(q(se.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : O("", !0),
                                                  (c(!0),
                                                  h(
                                                    pe,
                                                    null,
                                                    ke(se.days, (me, K) => {
                                                      var le, Me, ge;
                                                      return (
                                                        c(),
                                                        h(
                                                          "div",
                                                          {
                                                            id: me.value
                                                              .toISOString()
                                                              .split("T")[0],
                                                            ref_for: !0,
                                                            ref: (Fe) =>
                                                              k(Fe, _e, K),
                                                            key: K + _e,
                                                            role: "gridcell",
                                                            class:
                                                              "dp__calendar_item",
                                                            "aria-selected":
                                                              me.classData
                                                                .dp__active_date ||
                                                              me.classData
                                                                .dp__range_start ||
                                                              me.classData
                                                                .dp__range_start,
                                                            "aria-disabled":
                                                              me.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            "aria-label":
                                                              (Me =
                                                                (le = A(l)) ==
                                                                null
                                                                  ? void 0
                                                                  : le.day) ==
                                                              null
                                                                ? void 0
                                                                : Me.call(
                                                                    le,
                                                                    me
                                                                  ),
                                                            tabindex: "0",
                                                            onClick: Ie(
                                                              (Fe) =>
                                                                te(Fe, me),
                                                              ["prevent"]
                                                            ),
                                                            onKeydown: [
                                                              Oe(
                                                                (Fe) =>
                                                                  x.$emit(
                                                                    "select-date",
                                                                    me
                                                                  ),
                                                                ["enter"]
                                                              ),
                                                              Oe(
                                                                (Fe) =>
                                                                  x.$emit(
                                                                    "handle-space",
                                                                    me
                                                                  ),
                                                                ["space"]
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              Fe
                                                            ) => j(me, _e, K),
                                                            onMouseleave: (
                                                              Fe
                                                            ) => V(me),
                                                          },
                                                          [
                                                            I(
                                                              "div",
                                                              {
                                                                class: Z([
                                                                  "dp__cell_inner",
                                                                  me.classData,
                                                                ]),
                                                              },
                                                              [
                                                                x.$slots.day &&
                                                                U.value(me)
                                                                  ? ee(
                                                                      x.$slots,
                                                                      "day",
                                                                      {
                                                                        key: 0,
                                                                        day: +me.text,
                                                                        date: me.value,
                                                                      }
                                                                    )
                                                                  : O("", !0),
                                                                x.$slots.day
                                                                  ? O("", !0)
                                                                  : (c(),
                                                                    h(
                                                                      pe,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        Ae(
                                                                          J(
                                                                            me.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                me.marker &&
                                                                U.value(me)
                                                                  ? (c(),
                                                                    h(
                                                                      pe,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [
                                                                        x.$slots
                                                                          .marker
                                                                          ? ee(
                                                                              x.$slots,
                                                                              "marker",
                                                                              {
                                                                                key: 0,
                                                                                marker:
                                                                                  me.marker,
                                                                                day: +me.text,
                                                                                date: me.value,
                                                                              }
                                                                            )
                                                                          : (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  Z(
                                                                                    G.value(
                                                                                      me.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  xe(
                                                                                    me
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            me
                                                                                              .marker
                                                                                              .color,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                              },
                                                                              null,
                                                                              6
                                                                            )),
                                                                      ],
                                                                      64
                                                                    ))
                                                                  : O("", !0),
                                                                P.value(
                                                                  me.value
                                                                )
                                                                  ? (c(),
                                                                    h(
                                                                      "div",
                                                                      {
                                                                        key: 3,
                                                                        ref_for:
                                                                          !0,
                                                                        ref_key:
                                                                          "activeTooltip",
                                                                        ref: y,
                                                                        class:
                                                                          "dp__marker_tooltip",
                                                                        style:
                                                                          xe(
                                                                            p.value
                                                                          ),
                                                                      },
                                                                      [
                                                                        (ge =
                                                                          me.marker) !=
                                                                          null &&
                                                                        ge.tooltip
                                                                          ? (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  "dp__tooltip_content",
                                                                                onClick:
                                                                                  X,
                                                                              },
                                                                              [
                                                                                (c(
                                                                                  !0
                                                                                ),
                                                                                h(
                                                                                  pe,
                                                                                  null,
                                                                                  ke(
                                                                                    me
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      Fe,
                                                                                      pt
                                                                                    ) => (
                                                                                      c(),
                                                                                      h(
                                                                                        "div",
                                                                                        {
                                                                                          key: pt,
                                                                                          class:
                                                                                            "dp__tooltip_text",
                                                                                        },
                                                                                        [
                                                                                          x
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? ee(
                                                                                                x.$slots,
                                                                                                "marker-tooltip",
                                                                                                {
                                                                                                  key: 0,
                                                                                                  tooltip:
                                                                                                    Fe,
                                                                                                  day: me.value,
                                                                                                }
                                                                                              )
                                                                                            : O(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          x
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? O(
                                                                                                "",
                                                                                                !0
                                                                                              )
                                                                                            : (c(),
                                                                                              h(
                                                                                                pe,
                                                                                                {
                                                                                                  key: 1,
                                                                                                },
                                                                                                [
                                                                                                  I(
                                                                                                    "div",
                                                                                                    {
                                                                                                      class:
                                                                                                        "dp__tooltip_mark",
                                                                                                      style:
                                                                                                        xe(
                                                                                                          Fe.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  Fe.color,
                                                                                                              }
                                                                                                            : {}
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    4
                                                                                                  ),
                                                                                                  I(
                                                                                                    "div",
                                                                                                    null,
                                                                                                    J(
                                                                                                      Fe.text
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                64
                                                                                              )),
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ),
                                                                                  128
                                                                                )),
                                                                                I(
                                                                                  "div",
                                                                                  {
                                                                                    class:
                                                                                      "dp__arrow_bottom_tp",
                                                                                    style:
                                                                                      xe(
                                                                                        D.value
                                                                                      ),
                                                                                  },
                                                                                  null,
                                                                                  4
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : O(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                      ],
                                                                      4
                                                                    ))
                                                                  : O("", !0),
                                                              ],
                                                              2
                                                            ),
                                                          ],
                                                          40,
                                                          Dk
                                                        )
                                                      );
                                                    }),
                                                    128
                                                  )),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      Pk
                                    ))
                                  : O("", !0),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ["name", "css"]
                        ),
                      ],
                      64
                    )),
                  ],
                  10,
                  kk
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Gs = (e) => Array.isArray(e),
  Ok = (e, n, a, t) => {
    const o = L([]),
      { modelValue: i, calendars: r, time: s } = jn(e, n),
      { defaultedMultiCalendars: l, defaultedStartTime: m } = ct(e),
      {
        validateMonthYearInRange: g,
        isDisabled: d,
        isDateRangeAllowed: p,
        checkMinMaxRange: f,
      } = Fa(e),
      {
        updateTimeValues: b,
        getSetDateTime: S,
        setTime: T,
        assignStartTime: w,
        validateTime: y,
        disabledTimesConfig: D,
      } = Cu(e, s, i, t),
      C = u(() => (H) => r.value[H] ? r.value[H].month : 0),
      M = u(() => (H) => r.value[H] ? r.value[H].year : 0),
      N = (H, ie, Se) => {
        var ce, Le;
        r.value[H] || (r.value[H] = { month: 0, year: 0 }),
          (r.value[H].month = Vs(ie)
            ? (ce = r.value[H]) == null
              ? void 0
              : ce.month
            : ie),
          (r.value[H].year = Vs(Se)
            ? (Le = r.value[H]) == null
              ? void 0
              : Le.year
            : Se);
      },
      R = () => {
        e.autoApply && n("select-date");
      };
    Ne(i, (H, ie) => {
      JSON.stringify(H) !== JSON.stringify(ie) && P();
    }),
      De(() => {
        e.shadow ||
          (i.value || (v(), m.value && w(m.value)),
          P(!0),
          e.focusStartDate && e.startDate && v());
      });
    const Q = u(() => {
        var H;
        return (H = e.flow) != null && H.length && !e.partialFlow
          ? e.flowStep === e.flow.length
          : !0;
      }),
      G = () => {
        e.autoApply && Q.value && n("auto-apply", e.partialFlow);
      },
      P = (H = !1) => {
        if (i.value)
          return Array.isArray(i.value)
            ? ((o.value = i.value), Y(H))
            : U(i.value, H);
        if (l.value.count && H && !e.startDate) return B(ne(), H);
      },
      B = (H, ie = !1) => {
        if (
          ((!l.value.count || !l.value.static || ie) && N(0, Ue(H), Re(H)),
          l.value.count && (!l.value.solo || !i.value))
        )
          for (let Se = 1; Se < l.value.count; Se++) {
            const ce = Je(ne(), {
                month: C.value(Se - 1),
                year: M.value(Se - 1),
              }),
              Le = Hl(ce, { months: 1 });
            r.value[Se] = { month: Ue(Le), year: Re(Le) };
          }
      },
      U = (H, ie) => {
        B(H),
          T("hours", qt(H)),
          T("minutes", ia(H)),
          T("seconds", rn(H)),
          l.value.count && ie && k();
      },
      j = (H) => {
        if (l.value.count) {
          if (l.value.solo) return 0;
          const ie = Ue(H[0]),
            Se = Ue(H[1]);
          return Math.abs(Se - ie) < l.value.count ? 0 : 1;
        }
        return 1;
      },
      V = (H, ie) => {
        H[1] && e.showLastInRange ? B(H[j(H)], ie) : B(H[0], ie);
        const Se = (ce, Le) => [ce(H[0]), H[1] ? ce(H[1]) : s[Le][1]];
        T("hours", Se(qt, "hours")),
          T("minutes", Se(ia, "minutes")),
          T("seconds", Se(rn, "seconds"));
      },
      E = (H, ie) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return V(H, ie);
        if (e.multiDates && ie) {
          const Se = H[H.length - 1];
          return U(Se, ie);
        }
      },
      Y = (H) => {
        const ie = i.value;
        E(ie, H), l.value.count && l.value.solo && k();
      },
      $ = (H, ie) => {
        const Se = Je(ne(), { month: C.value(ie), year: M.value(ie) }),
          ce = H < 0 ? Wt(Se, 1) : sn(Se, 1);
        g(Ue(ce), Re(ce), H < 0, e.preventMinMaxNavigation) &&
          (N(ie, Ue(ce), Re(ce)),
          n("update-month-year", { instance: ie, month: Ue(ce), year: Re(ce) }),
          l.value.count && !l.value.solo && z(ie),
          a());
      },
      z = (H) => {
        for (let ie = H - 1; ie >= 0; ie--) {
          const Se = sn(
            Je(ne(), { month: C.value(ie + 1), year: M.value(ie + 1) }),
            1
          );
          N(ie, Ue(Se), Re(Se));
        }
        for (let ie = H + 1; ie <= l.value.count - 1; ie++) {
          const Se = Wt(
            Je(ne(), { month: C.value(ie - 1), year: M.value(ie - 1) }),
            1
          );
          N(ie, Ue(Se), Re(Se));
        }
      },
      k = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const H = ne(ne(i.value[1] ? i.value[1] : Wt(i.value[0], 1))),
            [ie, Se] = [Ue(i.value[0]), Re(i.value[0])],
            [ce, Le] = [Ue(i.value[1]), Re(i.value[1])];
          (ie !== ce || (ie === ce && Se !== Le)) &&
            l.value.solo &&
            N(1, Ue(H), Re(H));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (N(0, Ue(i.value), Re(i.value)), B(ne()));
      },
      v = () => {
        e.startDate &&
          (N(0, Ue(ne(e.startDate)), Re(ne(e.startDate))),
          l.value.count && z(0));
      },
      F = c1((H, ie) => {
        e.monthChangeOnScroll &&
          $(e.monthChangeOnScroll !== "inverse" ? -H.deltaY : H.deltaY, ie);
      }, 50),
      q = (H, ie, Se = !1) => {
        e.monthChangeOnArrows && e.vertical === Se && te(H, ie);
      },
      te = (H, ie) => {
        $(H === "right" ? -1 : 1, ie);
      },
      X = (H) =>
        e.markers.find((ie) => We(g1(H.value), Gt(ne(ie.date), e.timezone))),
      x = (H, ie) => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [H == 0, !0];
          case "fair":
            return [H == 0 || ie > H, !0];
          case "append":
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      _ = (H, ie, Se, ce) => {
        if (e.sixWeeks && H.length < 6) {
          const Le = 6 - H.length,
            tt = (ie.getDay() + 7 - ce) % 7,
            dt = 6 - ((Se.getDay() + 7 - ce) % 7),
            [de, Ce] = x(tt, dt);
          for (let Te = 1; Te <= Le; Te++)
            if (Ce ? !!(Te % 2) == de : de) {
              const _t = H[0].days[0],
                Dt = ae(ga(_t.value, -7), Ue(ie));
              H.unshift({ days: Dt });
            } else {
              const _t = H[H.length - 1],
                Dt = _t.days[_t.days.length - 1],
                Ea = ae(ga(Dt.value, 1), Ue(ie));
              H.push({ days: Ea });
            }
        }
        return H;
      },
      ae = (H, ie) => {
        const Se = ne(H),
          ce = [];
        for (let Le = 0; Le < 7; Le++) {
          const tt = ga(Se, Le),
            dt = Ue(tt) !== ie;
          ce.push({
            text: e.hideOffsetDates && dt ? "" : tt.getDate(),
            value: tt,
            current: !dt,
            classData: {},
          });
        }
        return ce;
      },
      ve = (H, ie) => {
        const Se = [],
          ce = new Date(ie, H),
          Le = new Date(ie, H + 1, 0),
          tt = e.weekStart,
          dt = $a(ce, { weekStartsOn: tt }),
          de = (Ce) => {
            const Te = ae(Ce, H);
            if (
              (Se.push({ days: Te }),
              !Se[Se.length - 1].days.some((_t) => We(bt(_t.value), bt(Le))))
            ) {
              const _t = ga(Ce, 7);
              de(_t);
            }
          };
        return de(dt), _(Se, ce, Le, tt);
      },
      se = (H) => (
        (i.value = oo(ne(H.value), e.timezone, e.weekStart)),
        n("date-update", H.value),
        G()
      ),
      _e = (H) => {
        const ie = Pa(ne(H.value), s.hours, s.minutes, Qt());
        n("date-update", ie),
          e.multiDates ? mi(ie, i, e.multiDatesLimit) : (i.value = ie),
          t(),
          Ct().then(() => {
            G();
          });
      },
      me = (H) =>
        e.noDisabledRange ? vu(o.value[0], H).some((ie) => d(ie)) : !1,
      K = () => {
        (o.value = i.value ? i.value.slice() : []),
          o.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (o.value = []);
      },
      le = (H, ie) => {
        const Se = [ne(H.value), ga(ne(H.value), +e.autoRange)];
        p(Se)
          ? (ie && Me(H.value), (o.value = Se))
          : n("invalid-date", H.value);
      },
      Me = (H) => {
        const ie = Ue(ne(H)),
          Se = Re(ne(H));
        if ((N(0, ie, Se), l.value.count > 0))
          for (let ce = 1; ce < l.value.count; ce++) {
            const Le = p1(
              Je(ne(H), { year: C.value(ce - 1), month: M.value(ce - 1) })
            );
            N(ce, Le.month, Le.year);
          }
      },
      ge = (H) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (yt(H, i.value[0]) || We(H, i.value[0]))
            ? [i.value[0], H]
            : e.fixedEnd && (ht(H, i.value[1]) || We(H, i.value[1]))
            ? [H, i.value[1]]
            : (n("invalid-fixed-range", H), i.value)
          : [],
      Fe = (H) => {
        if (me(H.value) || !f(H.value, i.value, e.fixedStart ? 0 : 1))
          return n("invalid-date", H.value);
        o.value = ge(ne(H.value));
      },
      pt = (H, ie) => {
        if ((K(), e.autoRange)) return le(H, ie);
        if (e.fixedStart || e.fixedEnd) return Fe(H);
        o.value[0]
          ? f(ne(H.value), i.value) && !me(H.value)
            ? ht(ne(H.value), ne(o.value[0]))
              ? (o.value.unshift(ne(H.value)), n("range-end", o.value[0]))
              : ((o.value[1] = ne(H.value)), n("range-end", o.value[1]))
            : (e.autoApply && n("auto-apply-invalid", H.value),
              n("invalid-date", H.value))
          : ((o.value[0] = ne(H.value)), n("range-start", o.value[0]));
      },
      Qt = (H = !0) =>
        e.enableSeconds
          ? Array.isArray(s.seconds)
            ? H
              ? s.seconds[0]
              : s.seconds[1]
            : s.seconds
          : 0,
      Et = (H) => {
        o.value[H] = Pa(o.value[H], s.hours[H], s.minutes[H], Qt(H !== 1));
      },
      ua = () => {
        var H, ie;
        o.value[0] &&
          o.value[1] &&
          +((H = o.value) == null ? void 0 : H[0]) >
            +((ie = o.value) == null ? void 0 : ie[1]) &&
          (o.value.reverse(),
          n("range-start", o.value[0]),
          n("range-end", o.value[1]));
      },
      ca = () => {
        o.value.length &&
          (o.value[0] && !o.value[1] ? Et(0) : (Et(0), Et(1), t()),
          ua(),
          (i.value = o.value.slice()),
          Co(o.value, n, e.autoApply, e.modelAuto));
      },
      da = (H, ie = !1) => {
        if (d(H.value) || (!H.current && e.hideOffsetDates))
          return n("invalid-date", H.value);
        if (e.weekPicker) return se(H);
        if (!e.range) return _e(H);
        Gs(s.hours) && Gs(s.minutes) && !e.multiDates && (pt(H, ie), ca());
      },
      Zt = (H, ie) => {
        var Se;
        N(H, ie.month, ie.year),
          l.value.count && !l.value.solo && z(H),
          n("update-month-year", {
            instance: H,
            month: ie.month,
            year: ie.year,
          }),
          a(l.value.solo ? H : void 0);
        const ce =
          (Se = e.flow) != null && Se.length ? e.flow[e.flowStep] : void 0;
        !ie.fromNav && (ce === Jt.month || ce === Jt.year) && t();
      },
      Ke = (H, ie) => {
        ku({
          value: H,
          modelValue: i,
          range: e.range,
          timezone: ie ? void 0 : e.timezone,
        }),
          R(),
          e.multiCalendars && Ct().then(() => P(!0));
      },
      ba = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = ht(ne(), i.value[0])
                ? [ne(), i.value[0]]
                : [i.value[0], ne()])
            : (i.value = [ne()])
          : (i.value = ne()),
          R();
      },
      $t = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const H = Xt();
            i.value[i.value.length - 1] = S(H);
          } else i.value = i.value.map((H, ie) => H && S(H, ie));
        else i.value = S(i.value);
        n("time-update");
      },
      Xt = () =>
        Array.isArray(i.value) && i.value.length
          ? i.value[i.value.length - 1]
          : null;
    return {
      calendars: r,
      modelValue: i,
      month: C,
      year: M,
      time: s,
      disabledTimesConfig: D,
      validateTime: y,
      getCalendarDays: ve,
      getMarker: X,
      handleScroll: F,
      handleSwipe: te,
      handleArrow: q,
      selectDate: da,
      updateMonthYear: Zt,
      presetDate: Ke,
      selectCurrentDate: ba,
      updateTime: (H, ie = !0, Se = !1) => {
        b(H, ie, Se, $t);
      },
    };
  },
  Lk = { key: 0 },
  Bk = re({
    __name: "DatePicker",
    props: { ...Kt },
    emits: [
      "tooltip-open",
      "tooltip-close",
      "mount",
      "update:internal-model-value",
      "update-flow-step",
      "reset-flow",
      "auto-apply",
      "focus-menu",
      "select-date",
      "range-start",
      "range-end",
      "invalid-fixed-range",
      "time-update",
      "am-pm-change",
      "time-picker-open",
      "time-picker-close",
      "recalculate-position",
      "update-month-year",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          calendars: i,
          month: r,
          year: s,
          modelValue: l,
          time: m,
          disabledTimesConfig: g,
          validateTime: d,
          getCalendarDays: p,
          getMarker: f,
          handleArrow: b,
          handleScroll: S,
          handleSwipe: T,
          selectDate: w,
          updateMonthYear: y,
          presetDate: D,
          selectCurrentDate: C,
          updateTime: M,
        } = Ok(o, t, k, v),
        N = Va(),
        { setHoverDate: R, getDayClassData: Q, clearHoverDate: G } = x1(l, o),
        { defaultedMultiCalendars: P } = ct(o),
        B = L([]),
        U = L([]),
        j = L(null),
        V = Mt(N, "calendar"),
        E = Mt(N, "monthYear"),
        Y = Mt(N, "timePicker"),
        $ = (q) => {
          o.shadow || t("mount", q);
        };
      Ne(
        i,
        () => {
          o.shadow ||
            setTimeout(() => {
              t("recalculate-position");
            }, 0);
        },
        { deep: !0 }
      );
      const z = u(
        () => (q) =>
          p(r.value(q), s.value(q)).map((te) => ({
            ...te,
            days: te.days.map(
              (X) => ((X.marker = f(X)), (X.classData = Q(X)), X)
            ),
          }))
      );
      function k(q) {
        var te;
        q || q === 0
          ? (te = U.value[q]) == null ||
            te.triggerTransition(r.value(q), s.value(q))
          : U.value.forEach((X, x) =>
              X.triggerTransition(r.value(x), s.value(x))
            );
      }
      function v() {
        t("update-flow-step");
      }
      const F = (q, te = !1) => {
        w(q, te), o.spaceConfirm && t("select-date");
      };
      return (
        n({
          clearHoverDate: G,
          presetDate: D,
          selectCurrentDate: C,
          toggleMonthPicker: (q, te, X = 0) => {
            var x;
            (x = B.value[X]) == null || x.toggleMonthPicker(q, te);
          },
          toggleYearPicker: (q, te, X = 0) => {
            var x;
            (x = B.value[X]) == null || x.toggleYearPicker(q, te);
          },
          toggleTimePicker: (q, te, X) => {
            var x;
            (x = j.value) == null || x.toggleTimePicker(q, te, X);
          },
          handleArrow: b,
          updateMonthYear: y,
          getSidebarProps: () => ({
            modelValue: l,
            month: r,
            year: s,
            time: m,
            updateTime: M,
            updateMonthYear: y,
            selectDate: w,
            presetDate: D,
          }),
        }),
        (q, te) => (
          c(),
          h(
            pe,
            null,
            [
              Ee(
                To,
                { "multi-calendars": A(P).count },
                {
                  default: fe(({ instance: X, index: x }) => [
                    q.disableMonthYearSelect
                      ? O("", !0)
                      : (c(),
                        W(
                          wk,
                          Ge(
                            {
                              key: 0,
                              ref: (_) => {
                                _ && (B.value[x] = _);
                              },
                              months: A(cu)(
                                q.formatLocale,
                                q.locale,
                                q.monthNameFormat
                              ),
                              years: A(ci)(q.yearRange, q.reverseYears),
                              month: A(r)(X),
                              year: A(s)(X),
                              instance: X,
                            },
                            q.$props,
                            {
                              onMount:
                                te[0] || (te[0] = (_) => $(A(Na).header)),
                              onResetFlow:
                                te[1] || (te[1] = (_) => q.$emit("reset-flow")),
                              onUpdateMonthYear: (_) => A(y)(X, _),
                              onOverlayClosed:
                                te[2] || (te[2] = (_) => q.$emit("focus-menu")),
                            }
                          ),
                          St({ _: 2 }, [
                            ke(A(E), (_, ae) => ({
                              name: _,
                              fn: fe((ve) => [ee(q.$slots, _, et(ft(ve)))]),
                            })),
                          ]),
                          1040,
                          [
                            "months",
                            "years",
                            "month",
                            "year",
                            "instance",
                            "onUpdateMonthYear",
                          ]
                        )),
                    Ee(
                      Mk,
                      Ge(
                        {
                          ref: (_) => {
                            _ && (U.value[x] = _);
                          },
                          "mapped-dates": z.value(X),
                          month: A(r)(X),
                          year: A(s)(X),
                          instance: X,
                        },
                        q.$props,
                        {
                          onSelectDate: (_) => A(w)(_, X !== 1),
                          onHandleSpace: (_) => F(_, X !== 1),
                          onSetHoverDate: te[3] || (te[3] = (_) => A(R)(_)),
                          onHandleScroll: (_) => A(S)(_, X),
                          onHandleSwipe: (_) => A(T)(_, X),
                          onMount: te[4] || (te[4] = (_) => $(A(Na).calendar)),
                          onResetFlow:
                            te[5] || (te[5] = (_) => q.$emit("reset-flow")),
                          onTooltipOpen:
                            te[6] ||
                            (te[6] = (_) => q.$emit("tooltip-open", _)),
                          onTooltipClose:
                            te[7] ||
                            (te[7] = (_) => q.$emit("tooltip-close", _)),
                        }
                      ),
                      St({ _: 2 }, [
                        ke(A(V), (_, ae) => ({
                          name: _,
                          fn: fe((ve) => [ee(q.$slots, _, et(ft({ ...ve })))]),
                        })),
                      ]),
                      1040,
                      [
                        "mapped-dates",
                        "month",
                        "year",
                        "instance",
                        "onSelectDate",
                        "onHandleSpace",
                        "onHandleScroll",
                        "onHandleSwipe",
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["multi-calendars"]
              ),
              q.enableTimePicker
                ? (c(),
                  h("div", Lk, [
                    q.$slots["time-picker"]
                      ? ee(
                          q.$slots,
                          "time-picker",
                          et(Ge({ key: 0 }, { time: A(m), updateTime: A(M) }))
                        )
                      : (c(),
                        W(
                          Tu,
                          Ge(
                            { key: 1, ref_key: "timePickerRef", ref: j },
                            q.$props,
                            {
                              hours: A(m).hours,
                              minutes: A(m).minutes,
                              seconds: A(m).seconds,
                              "internal-model-value": q.internalModelValue,
                              "disabled-times-config": A(g),
                              "validate-time": A(d),
                              onMount:
                                te[8] || (te[8] = (X) => $(A(Na).timePicker)),
                              "onUpdate:hours":
                                te[9] || (te[9] = (X) => A(M)(X)),
                              "onUpdate:minutes":
                                te[10] || (te[10] = (X) => A(M)(X, !1)),
                              "onUpdate:seconds":
                                te[11] || (te[11] = (X) => A(M)(X, !1, !0)),
                              onResetFlow:
                                te[12] ||
                                (te[12] = (X) => q.$emit("reset-flow")),
                              onOverlayClosed:
                                te[13] ||
                                (te[13] = (X) => q.$emit("time-picker-close")),
                              onOverlayOpened:
                                te[14] ||
                                (te[14] = (X) =>
                                  q.$emit("time-picker-open", X)),
                              onAmPmChange:
                                te[15] ||
                                (te[15] = (X) => q.$emit("am-pm-change", X)),
                            }
                          ),
                          St({ _: 2 }, [
                            ke(A(Y), (X, x) => ({
                              name: X,
                              fn: fe((_) => [ee(q.$slots, X, et(ft(_)))]),
                            })),
                          ]),
                          1040,
                          [
                            "hours",
                            "minutes",
                            "seconds",
                            "internal-model-value",
                            "disabled-times-config",
                            "validate-time",
                          ]
                        )),
                  ]))
                : O("", !0),
            ],
            64
          )
        )
      );
    },
  }),
  Ak = (e, n) => {
    const a = L(),
      {
        defaultedMultiCalendars: t,
        defaultedConfig: o,
        defaultedHighlight: i,
      } = ct(e),
      { modelValue: r, year: s, month: l, calendars: m } = jn(e, n),
      { isDisabled: g } = Fa(e),
      {
        selectYear: d,
        groupedYears: p,
        showYearPicker: f,
        isDisabled: b,
        toggleYearPicker: S,
        handleYearSelect: T,
        handleYear: w,
      } = Su({
        modelValue: r,
        multiCalendars: t,
        highlight: i,
        calendars: m,
        month: l,
        year: s,
        props: e,
        emit: n,
      }),
      y = (G, P) =>
        [G, P].map((B) => Ta(B, "MMMM", { locale: e.formatLocale })).join("-"),
      D = u(
        () => (G) =>
          r.value
            ? Array.isArray(r.value)
              ? r.value.some((P) => Ms(G, P))
              : Ms(r.value, G)
            : !1
      ),
      C = (G) => {
        if (e.range) {
          if (Array.isArray(r.value)) {
            const P = We(G, r.value[0]) || We(G, r.value[1]);
            return wo(r.value, a.value, G) && !P;
          }
          return !1;
        }
        return !1;
      },
      M = u(() => (G) => {
        const P = Je(new Date(), { year: s.value(G) });
        return l_({ start: c_(P), end: u_(P) }).map((B) => {
          const U = $n(B),
            j = Ts(B),
            V = g(B),
            E = C(U),
            Y =
              typeof i.value == "function"
                ? i.value({ quarter: Ss(U), year: Re(U) })
                : !!i.value.quarters.find(
                    ($) => $.quarter === Ss(U) && $.year === Re(U)
                  );
          return {
            text: y(U, j),
            value: U,
            active: D.value(U),
            highlighted: Y,
            disabled: V,
            isBetween: E,
          };
        });
      }),
      N = (G) => {
        mi(G, r, e.multiDatesLimit), n("auto-apply", !0);
      },
      R = (G) => {
        const P = gi(r, G, n);
        Co(P, n, e.autoApply, e.modelAuto);
      },
      Q = (G) => {
        (r.value = G), n("auto-apply");
      };
    return {
      defaultedConfig: o,
      defaultedMultiCalendars: t,
      groupedYears: p,
      year: s,
      isDisabled: b,
      quarters: M,
      showYearPicker: f,
      modelValue: r,
      setHoverDate: (G) => {
        a.value = G;
      },
      selectYear: d,
      selectQuarter: (G, P, B) => {
        if (!B)
          return (
            (m.value[P].month = Ue(Ts(G))),
            e.multiDates ? N(G) : e.range ? R(G) : Q(G)
          );
      },
      toggleYearPicker: S,
      handleYearSelect: T,
      handleYear: w,
    };
  },
  xk = { class: "dp--quarter-items" },
  Rk = ["disabled", "onClick", "onMouseover"],
  Nk = re({
    compatConfig: { MODE: 3 },
    __name: "QuarterPicker",
    props: { ...Kt },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "overlay-closed",
      "auto-apply",
      "range-start",
      "range-end",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Va(),
        r = Mt(i, "yearMode"),
        {
          defaultedMultiCalendars: s,
          defaultedConfig: l,
          groupedYears: m,
          year: g,
          isDisabled: d,
          quarters: p,
          modelValue: f,
          showYearPicker: b,
          setHoverDate: S,
          selectQuarter: T,
          toggleYearPicker: w,
          handleYearSelect: y,
          handleYear: D,
        } = Ak(o, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: f,
            year: g,
            selectQuarter: T,
            handleYearSelect: y,
            handleYear: D,
          }),
        }),
        (C, M) => (
          c(),
          W(
            To,
            { "multi-calendars": A(s).count, stretch: "" },
            {
              default: fe(({ instance: N }) => [
                I(
                  "div",
                  {
                    class: "dp-quarter-picker-wrap",
                    style: xe({ minHeight: `${A(l).modeHeight}px` }),
                  },
                  [
                    I("div", null, [
                      Ee(
                        wu,
                        Ge(C.$props, {
                          items: A(m)(N),
                          instance: N,
                          "show-year-picker": A(b)[N],
                          year: A(g)(N),
                          "is-disabled": (R) => A(d)(N, R),
                          onHandleYear: (R) => A(D)(N, R),
                          onYearSelect: (R) => A(y)(R, N),
                          onToggleYearPicker: (R) => A(w)(N, R?.flow, R?.show),
                        }),
                        St({ _: 2 }, [
                          ke(A(r), (R, Q) => ({
                            name: R,
                            fn: fe((G) => [ee(C.$slots, R, et(ft(G)))]),
                          })),
                        ]),
                        1040,
                        [
                          "items",
                          "instance",
                          "show-year-picker",
                          "year",
                          "is-disabled",
                          "onHandleYear",
                          "onYearSelect",
                          "onToggleYearPicker",
                        ]
                      ),
                    ]),
                    I("div", xk, [
                      (c(!0),
                      h(
                        pe,
                        null,
                        ke(
                          A(p)(N),
                          (R, Q) => (
                            c(),
                            h("div", { key: Q }, [
                              I(
                                "button",
                                {
                                  type: "button",
                                  class: Z([
                                    "dp--qr-btn",
                                    {
                                      "dp--qr-btn-active": R.active,
                                      "dp--qr-btn-between": R.isBetween,
                                      "dp--qr-btn-disabled": R.disabled,
                                      "dp--highlighted": R.highlighted,
                                    },
                                  ]),
                                  disabled: R.disabled,
                                  onClick: (G) => A(T)(R.value, N, R.disabled),
                                  onMouseover: (G) => A(S)(R.value),
                                },
                                [
                                  C.$slots.quarter
                                    ? ee(C.$slots, "quarter", {
                                        key: 0,
                                        value: R.value,
                                        text: R.text,
                                      })
                                    : (c(),
                                      h(
                                        pe,
                                        { key: 1 },
                                        [Ae(J(R.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                Rk
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  4
                ),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  Hk = ["id"],
  $k = { key: 0, class: "dp__sidebar_left" },
  Uk = { key: 1, class: "dp--preset-dates" },
  Vk = ["onClick", "onKeydown"],
  Yk = { key: 2, class: "dp__sidebar_right" },
  Fk = { key: 3, class: "dp__action_extra" },
  js = re({
    compatConfig: { MODE: 3 },
    __name: "DatepickerMenu",
    props: {
      ...So,
      shadow: { type: Boolean, default: !1 },
      openOnTop: { type: Boolean, default: !1 },
      internalModelValue: { type: [Date, Array], default: null },
      arrMapValues: { type: Object, default: () => ({}) },
      noOverlayFocus: { type: Boolean, default: !1 },
    },
    emits: [
      "close-picker",
      "select-date",
      "auto-apply",
      "time-update",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "update:internal-model-value",
      "recalculate-position",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = u(() => {
          const { openOnTop: K, ...le } = o;
          return { ...le, flowStep: Q.value, noOverlayFocus: o.noOverlayFocus };
        }),
        { setMenuFocused: r, setShiftKey: s, control: l } = _u(),
        m = Va(),
        {
          defaultedTextInput: g,
          defaultedInline: d,
          defaultedConfig: p,
        } = ct(o),
        f = L(null),
        b = L(0),
        S = L(null),
        T = L(null),
        w = L(!1),
        y = L(null);
      De(() => {
        if (!o.shadow) {
          (w.value = !0), D(), window.addEventListener("resize", D);
          const K = mt(S);
          if ((K && !g.value.enabled && !d.value.enabled && (r(!0), j()), K)) {
            const le = (Me) => {
              p.value.allowPreventDefault && Me.preventDefault(),
                Ca(Me, p.value, !0);
            };
            K.addEventListener("pointerdown", le),
              K.addEventListener("mousedown", le);
          }
        }
      }),
        Fn(() => {
          window.removeEventListener("resize", D);
        });
      const D = () => {
          const K = mt(T);
          K && (b.value = K.getBoundingClientRect().width);
        },
        { arrowRight: C, arrowLeft: M, arrowDown: N, arrowUp: R } = Ia(),
        {
          flowStep: Q,
          updateFlowStep: G,
          childMount: P,
          resetFlow: B,
        } = R1(o, t, y),
        U = u(() =>
          o.monthPicker
            ? J1
            : o.yearPicker
            ? tk
            : o.timePicker
            ? yk
            : o.quarterPicker
            ? Nk
            : Bk
        ),
        j = () => {
          const K = mt(S);
          K && K.focus({ preventScroll: !0 });
        },
        V = u(() => {
          var K;
          return ((K = y.value) == null ? void 0 : K.getSidebarProps()) || {};
        }),
        E = () => {
          o.openOnTop && t("recalculate-position");
        },
        Y = Mt(m, "action"),
        $ = u(() =>
          o.monthPicker || o.yearPicker
            ? Mt(m, "monthYear")
            : o.timePicker
            ? Mt(m, "timePicker")
            : Mt(m, "shared")
        ),
        z = u(() => (o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")),
        k = u(() => ({
          dp__menu_disabled: o.disabled,
          dp__menu_readonly: o.readonly,
        })),
        v = u(() => ({
          dp__menu: !0,
          dp__menu_index: !d.value.enabled,
          dp__relative: d.value.enabled,
          [o.menuClassName]: !!o.menuClassName,
        })),
        F = (K) => {
          Ca(K, p.value, !0);
        },
        q = () => {
          o.escClose && t("close-picker");
        },
        te = (K) => {
          if (o.arrowNavigation) {
            if (K === "up") return R();
            if (K === "down") return N();
            if (K === "left") return M();
            if (K === "right") return C();
          } else
            K === "left" || K === "up"
              ? ve("handleArrow", "left", 0, K === "up")
              : ve("handleArrow", "right", 0, K === "down");
        },
        X = (K) => {
          s(K.shiftKey),
            !o.disableMonthYearSelect &&
              K.code === "Tab" &&
              K.target.classList.contains("dp__menu") &&
              l.value.shiftKeyInMenu &&
              (K.preventDefault(), Ca(K, p.value, !0), t("close-picker"));
        },
        x = () => {
          j(), t("time-picker-close");
        },
        _ = (K) => {
          var le, Me, ge;
          (le = y.value) == null || le.toggleTimePicker(!1, !1),
            (Me = y.value) == null || Me.toggleMonthPicker(!1, !1, K),
            (ge = y.value) == null || ge.toggleYearPicker(!1, !1, K);
        },
        ae = (K, le = 0) => {
          var Me, ge, Fe;
          return K === "month"
            ? (Me = y.value) == null
              ? void 0
              : Me.toggleMonthPicker(!1, !0, le)
            : K === "year"
            ? (ge = y.value) == null
              ? void 0
              : ge.toggleYearPicker(!1, !0, le)
            : K === "time"
            ? (Fe = y.value) == null
              ? void 0
              : Fe.toggleTimePicker(!0, !1)
            : _(le);
        },
        ve = (K, ...le) => {
          var Me, ge;
          (Me = y.value) != null &&
            Me[K] &&
            ((ge = y.value) == null || ge[K](...le));
        },
        se = () => {
          ve("selectCurrentDate");
        },
        _e = (K, le) => {
          ve("presetDate", K, le);
        },
        me = () => {
          ve("clearHoverDate");
        };
      return (
        n({
          updateMonthYear: (K, le) => {
            ve("updateMonthYear", K, le);
          },
          switchView: ae,
        }),
        (K, le) => {
          var Me;
          return (
            c(),
            h(
              "div",
              {
                id: K.uid ? `dp-menu-${K.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: S,
                tabindex: "0",
                role: "dialog",
                class: Z(v.value),
                onMouseleave: me,
                onClick: F,
                onKeydown: [
                  Oe(q, ["esc"]),
                  le[18] ||
                    (le[18] = Oe(
                      Ie((ge) => te("left"), ["prevent"]),
                      ["left"]
                    )),
                  le[19] ||
                    (le[19] = Oe(
                      Ie((ge) => te("up"), ["prevent"]),
                      ["up"]
                    )),
                  le[20] ||
                    (le[20] = Oe(
                      Ie((ge) => te("down"), ["prevent"]),
                      ["down"]
                    )),
                  le[21] ||
                    (le[21] = Oe(
                      Ie((ge) => te("right"), ["prevent"]),
                      ["right"]
                    )),
                  X,
                ],
              },
              [
                (K.disabled || K.readonly) && A(d).enabled
                  ? (c(), h("div", { key: 0, class: Z(k.value) }, null, 2))
                  : O("", !0),
                !A(d).enabled && !K.teleportCenter
                  ? (c(), h("div", { key: 1, class: Z(z.value) }, null, 2))
                  : O("", !0),
                I(
                  "div",
                  {
                    ref_key: "innerMenuRef",
                    ref: T,
                    class: Z({
                      dp__menu_content_wrapper:
                        ((Me = K.presetDates) == null ? void 0 : Me.length) ||
                        !!K.$slots["left-sidebar"] ||
                        !!K.$slots["right-sidebar"],
                    }),
                    style: xe({ "--dp-menu-width": `${b.value}px` }),
                  },
                  [
                    K.$slots["left-sidebar"]
                      ? (c(),
                        h("div", $k, [
                          ee(K.$slots, "left-sidebar", et(ft(V.value))),
                        ]))
                      : O("", !0),
                    K.presetDates.length
                      ? (c(),
                        h("div", Uk, [
                          (c(!0),
                          h(
                            pe,
                            null,
                            ke(
                              K.presetDates,
                              (ge, Fe) => (
                                c(),
                                h(
                                  pe,
                                  { key: Fe },
                                  [
                                    ge.slot
                                      ? ee(K.$slots, ge.slot, {
                                          key: 0,
                                          presetDate: _e,
                                          label: ge.label,
                                          value: ge.value,
                                        })
                                      : (c(),
                                        h(
                                          "button",
                                          {
                                            key: 1,
                                            type: "button",
                                            style: xe(ge.style || {}),
                                            class: "dp__btn dp--preset-range",
                                            onClick: Ie(
                                              (pt) => _e(ge.value, ge.noTz),
                                              ["prevent"]
                                            ),
                                            onKeydown: [
                                              Oe(
                                                Ie(
                                                  (pt) => _e(ge.value, ge.noTz),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie(
                                                  (pt) => _e(ge.value, ge.noTz),
                                                  ["prevent"]
                                                ),
                                                ["space"]
                                              ),
                                            ],
                                          },
                                          J(ge.label),
                                          45,
                                          Vk
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O("", !0),
                    I(
                      "div",
                      {
                        ref_key: "calendarWrapperRef",
                        ref: f,
                        class: "dp__instance_calendar",
                        role: "document",
                      },
                      [
                        (c(),
                        W(
                          cn(U.value),
                          Ge({ ref_key: "dynCmpRef", ref: y }, i.value, {
                            "flow-step": A(Q),
                            onMount: A(P),
                            onUpdateFlowStep: A(G),
                            onResetFlow: A(B),
                            onFocusMenu: j,
                            onSelectDate:
                              le[0] || (le[0] = (ge) => K.$emit("select-date")),
                            onDateUpdate:
                              le[1] ||
                              (le[1] = (ge) => K.$emit("date-update", ge)),
                            onTooltipOpen:
                              le[2] ||
                              (le[2] = (ge) => K.$emit("tooltip-open", ge)),
                            onTooltipClose:
                              le[3] ||
                              (le[3] = (ge) => K.$emit("tooltip-close", ge)),
                            onAutoApply:
                              le[4] ||
                              (le[4] = (ge) => K.$emit("auto-apply", ge)),
                            onRangeStart:
                              le[5] ||
                              (le[5] = (ge) => K.$emit("range-start", ge)),
                            onRangeEnd:
                              le[6] ||
                              (le[6] = (ge) => K.$emit("range-end", ge)),
                            onInvalidFixedRange:
                              le[7] ||
                              (le[7] = (ge) =>
                                K.$emit("invalid-fixed-range", ge)),
                            onTimeUpdate:
                              le[8] || (le[8] = (ge) => K.$emit("time-update")),
                            onAmPmChange:
                              le[9] ||
                              (le[9] = (ge) => K.$emit("am-pm-change", ge)),
                            onTimePickerOpen:
                              le[10] ||
                              (le[10] = (ge) =>
                                K.$emit("time-picker-open", ge)),
                            onTimePickerClose: x,
                            onRecalculatePosition: E,
                            onUpdateMonthYear:
                              le[11] ||
                              (le[11] = (ge) =>
                                K.$emit("update-month-year", ge)),
                            onAutoApplyInvalid:
                              le[12] ||
                              (le[12] = (ge) =>
                                K.$emit("auto-apply-invalid", ge)),
                            onInvalidDate:
                              le[13] ||
                              (le[13] = (ge) => K.$emit("invalid-date", ge)),
                            "onUpdate:internalModelValue":
                              le[14] ||
                              (le[14] = (ge) =>
                                K.$emit("update:internal-model-value", ge)),
                          }),
                          St({ _: 2 }, [
                            ke($.value, (ge, Fe) => ({
                              name: ge,
                              fn: fe((pt) => [
                                ee(K.$slots, ge, et(ft({ ...pt }))),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            "flow-step",
                            "onMount",
                            "onUpdateFlowStep",
                            "onResetFlow",
                          ]
                        )),
                      ],
                      512
                    ),
                    K.$slots["right-sidebar"]
                      ? (c(),
                        h("div", Yk, [
                          ee(K.$slots, "right-sidebar", et(ft(V.value))),
                        ]))
                      : O("", !0),
                    K.$slots["action-extra"]
                      ? (c(),
                        h("div", Fk, [
                          K.$slots["action-extra"]
                            ? ee(K.$slots, "action-extra", {
                                key: 0,
                                selectCurrentDate: se,
                              })
                            : O("", !0),
                        ]))
                      : O("", !0),
                  ],
                  6
                ),
                !K.autoApply || A(p).keepActionRow
                  ? (c(),
                    W(
                      W1,
                      Ge({ key: 2, "menu-mount": w.value }, i.value, {
                        "calendar-width": b.value,
                        onClosePicker:
                          le[15] || (le[15] = (ge) => K.$emit("close-picker")),
                        onSelectDate:
                          le[16] || (le[16] = (ge) => K.$emit("select-date")),
                        onInvalidSelect:
                          le[17] ||
                          (le[17] = (ge) => K.$emit("invalid-select")),
                        onSelectNow: se,
                      }),
                      St({ _: 2 }, [
                        ke(A(Y), (ge, Fe) => ({
                          name: ge,
                          fn: fe((pt) => [ee(K.$slots, ge, et(ft({ ...pt })))]),
                        })),
                      ]),
                      1040,
                      ["menu-mount", "calendar-width"]
                    ))
                  : O("", !0),
              ],
              42,
              Hk
            )
          );
        }
      );
    },
  }),
  Wk = typeof window < "u" ? window : void 0,
  er = () => {},
  qk = (e) => (Xs() ? (Js(e), !0) : !1),
  Gk = (e, n, a, t) => {
    if (!e) return er;
    let o = er;
    const i = Ne(
        () => A(e),
        (s) => {
          o(),
            s &&
              (s.addEventListener(n, a, t),
              (o = () => {
                s.removeEventListener(n, a, t), (o = er);
              }));
        },
        { immediate: !0, flush: "post" }
      ),
      r = () => {
        i(), o();
      };
    return qk(r), r;
  },
  jk = (e, n, a, t = {}) => {
    const { window: o = Wk, event: i = "pointerdown" } = t;
    return o
      ? Gk(
          o,
          i,
          (r) => {
            const s = mt(e),
              l = mt(n);
            !s ||
              !l ||
              s === r.target ||
              r.composedPath().includes(s) ||
              r.composedPath().includes(l) ||
              a(r);
          },
          { passive: !0 }
        )
      : void 0;
  },
  zk = re({
    compatConfig: { MODE: 3 },
    __name: "VueDatePicker",
    props: { ...So },
    emits: [
      "update:model-value",
      "update:model-timezone-value",
      "text-submit",
      "closed",
      "cleared",
      "open",
      "focus",
      "blur",
      "internal-model-change",
      "recalculate-position",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Va(),
        r = L(!1),
        s = Bn(o, "modelValue"),
        l = Bn(o, "timezone"),
        m = L(null),
        g = L(null),
        d = L(null),
        p = L(!1),
        f = L(null),
        b = L(!1),
        S = L(!1),
        { setMenuFocused: T, setShiftKey: w } = _u(),
        { clearArrowNav: y } = Ia(),
        { mapDatesArrToMap: D, validateDate: C, isValidTime: M } = Fa(o),
        {
          defaultedTransitions: N,
          defaultedTextInput: R,
          defaultedInline: Q,
          defaultedConfig: G,
        } = ct(o),
        { menuTransition: P, showTransition: B } = Gn(N);
      De(() => {
        te(o.modelValue),
          Ct().then(() => {
            if (!Q.value.enabled) {
              const de = k(f.value);
              de?.addEventListener("scroll", K),
                window?.addEventListener("resize", le);
            }
          }),
          Q.value.enabled && (r.value = !0),
          window?.addEventListener("keyup", Me),
          window?.addEventListener("keydown", ge);
      });
      const U = u(() => D());
      Fn(() => {
        if (!Q.value.enabled) {
          const de = k(f.value);
          de?.removeEventListener("scroll", K),
            window?.removeEventListener("resize", le);
        }
        window?.removeEventListener("keyup", Me),
          window?.removeEventListener("keydown", ge);
      });
      const j = Mt(i, "all", o.presetDates),
        V = Mt(i, "input");
      Ne(
        [s, l],
        () => {
          te(s.value);
        },
        { deep: !0 }
      );
      const {
          openOnTop: E,
          menuStyle: Y,
          xCorrect: $,
          setMenuPosition: z,
          getScrollableParent: k,
          shadowRender: v,
        } = L1({
          menuRef: m,
          menuRefInner: g,
          inputRef: d,
          pickerWrapperRef: f,
          inline: Q,
          emit: t,
          props: o,
          slots: i,
        }),
        {
          inputValue: F,
          internalModelValue: q,
          parseExternalModelValue: te,
          emitModelValue: X,
          formatInputValue: x,
          checkBeforeEmit: _,
        } = M1(t, o, p),
        ae = u(() => ({
          dp__main: !0,
          dp__theme_dark: o.dark,
          dp__theme_light: !o.dark,
          dp__flex_display: Q.value.enabled,
          dp__flex_display_with_input: Q.value.input,
        })),
        ve = u(() => (o.dark ? "dp__theme_dark" : "dp__theme_light")),
        se = u(() => ({
          to: typeof o.teleport == "boolean" ? "body" : o.teleport,
          disabled: !o.teleport || Q.value.enabled,
        })),
        _e = u(() => ({ class: "dp__outer_menu_wrap" })),
        me = u(
          () =>
            Q.value.enabled &&
            (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
        ),
        K = () => {
          r.value && (G.value.closeOnScroll ? Ke() : z());
        },
        le = () => {
          r.value && z();
        },
        Me = (de) => {
          de.key === "Tab" &&
            !Q.value.enabled &&
            !o.teleport &&
            G.value.tabOutClosesMenu &&
            (f.value.contains(document.activeElement) || Ke()),
            (S.value = de.shiftKey);
        },
        ge = (de) => {
          S.value = de.shiftKey;
        },
        Fe = () => {
          !o.disabled &&
            !o.readonly &&
            (v(js, o),
            z(!1),
            (r.value = !0),
            r.value && t("open"),
            r.value || Zt(),
            te(o.modelValue));
        },
        pt = () => {
          var de;
          (F.value = ""),
            Zt(),
            (de = d.value) == null || de.setParsedDate(null),
            t("update:model-value", null),
            t("update:model-timezone-value", null),
            t("cleared"),
            G.value.closeOnClearValue && Ke();
        },
        Qt = () => {
          const de = q.value;
          return !de || (!Array.isArray(de) && C(de))
            ? !0
            : Array.isArray(de)
            ? o.multiDates || (de.length === 2 && C(de[0]) && C(de[1]))
              ? !0
              : o.partialRange && !o.timePicker
              ? C(de[0])
              : !1
            : !1;
        },
        Et = () => {
          _() && Qt() ? (X(), Ke()) : t("invalid-select", q.value);
        },
        ua = (de) => {
          ca(), X(), G.value.closeOnAutoApply && !de && Ke();
        },
        ca = () => {
          d.value && R.value.enabled && d.value.setParsedDate(q.value);
        },
        da = (de = !1) => {
          o.autoApply &&
            M(q.value) &&
            Qt() &&
            (o.range && Array.isArray(q.value)
              ? (o.partialRange || q.value.length === 2) && ua(de)
              : ua(de));
        },
        Zt = () => {
          R.value.enabled || (q.value = null);
        },
        Ke = () => {
          Q.value.enabled ||
            (r.value &&
              ((r.value = !1),
              ($.value = !1),
              T(!1),
              w(!1),
              y(),
              t("closed"),
              F.value && te(s.value)),
            Zt(),
            t("blur"));
        },
        ba = (de, Ce, Te = !1) => {
          if (!de) {
            q.value = null;
            return;
          }
          const _t = Array.isArray(de) ? !de.some((Ea) => !C(Ea)) : C(de),
            Dt = M(de);
          _t &&
            Dt &&
            ((q.value = de), Ce && ((b.value = Te), Et(), t("text-submit")));
        },
        $t = () => {
          o.autoApply && M(q.value) && X(), ca();
        },
        Xt = () => (r.value ? Ke() : Fe()),
        H = (de) => {
          q.value = de;
        },
        ie = () => {
          R.value.enabled && ((p.value = !0), x()), t("focus");
        },
        Se = () => {
          if (R.value.enabled && ((p.value = !1), te(o.modelValue), b.value)) {
            const de = u1(f.value, S.value);
            de?.focus();
          }
          t("blur");
        },
        ce = (de) => {
          g.value &&
            g.value.updateMonthYear(0, {
              month: Us(de.month),
              year: Us(de.year),
            });
        },
        Le = (de) => {
          te(de ?? o.modelValue);
        },
        tt = (de, Ce) => {
          var Te;
          (Te = g.value) == null || Te.switchView(de, Ce);
        },
        dt = (de) =>
          G.value.onClickOutside ? G.value.onClickOutside(de) : Ke();
      return (
        jk(m, d, () => dt(Qt)),
        n({
          closeMenu: Ke,
          selectDate: Et,
          clearValue: pt,
          openMenu: Fe,
          onScroll: K,
          formatInputValue: x,
          updateInternalModelValue: H,
          setMonthYear: ce,
          parseModel: Le,
          switchView: tt,
          toggleMenu: Xt,
        }),
        (de, Ce) => (
          c(),
          h(
            "div",
            {
              ref_key: "pickerWrapperRef",
              ref: f,
              class: Z(ae.value),
              "data-datepicker-instance": "",
            },
            [
              Ee(
                U1,
                Ge(
                  {
                    ref_key: "inputRef",
                    ref: d,
                    "input-value": A(F),
                    "onUpdate:inputValue":
                      Ce[0] ||
                      (Ce[0] = (Te) => (bi(F) ? (F.value = Te) : null)),
                    "is-menu-open": r.value,
                  },
                  de.$props,
                  {
                    onClear: pt,
                    onOpen: Fe,
                    onSetInputDate: ba,
                    onSetEmptyDate: A(X),
                    onSelectDate: Et,
                    onToggle: Xt,
                    onClose: Ke,
                    onFocus: ie,
                    onBlur: Se,
                    onRealBlur: Ce[1] || (Ce[1] = (Te) => (p.value = !1)),
                  }
                ),
                St({ _: 2 }, [
                  ke(A(V), (Te, _t) => ({
                    name: Te,
                    fn: fe((Dt) => [ee(de.$slots, Te, et(ft(Dt)))]),
                  })),
                ]),
                1040,
                ["input-value", "is-menu-open", "onSetEmptyDate"]
              ),
              Ee(
                Au,
                et(ft(se.value)),
                {
                  default: fe(() => [
                    Ee(
                      It,
                      { name: A(P)(A(E)), css: A(B) && !A(Q).enabled },
                      {
                        default: fe(() => [
                          r.value
                            ? (c(),
                              h(
                                "div",
                                Ge(
                                  { key: 0, ref_key: "dpWrapMenuRef", ref: m },
                                  _e.value,
                                  {
                                    class: {
                                      "dp--menu-wrapper": !A(Q).enabled,
                                    },
                                    style: A(Q).enabled ? void 0 : A(Y),
                                  }
                                ),
                                [
                                  Ee(
                                    js,
                                    Ge(
                                      { ref_key: "dpMenuRef", ref: g },
                                      de.$props,
                                      {
                                        "internal-model-value": A(q),
                                        "onUpdate:internalModelValue":
                                          Ce[2] ||
                                          (Ce[2] = (Te) =>
                                            bi(q) ? (q.value = Te) : null),
                                        class: {
                                          [ve.value]: !0,
                                          "dp--menu-wrapper": de.teleport,
                                        },
                                        "open-on-top": A(E),
                                        "arr-map-values": U.value,
                                        "no-overlay-focus": me.value,
                                        onClosePicker: Ke,
                                        onSelectDate: Et,
                                        onAutoApply: da,
                                        onTimeUpdate: $t,
                                        onFlowStep:
                                          Ce[3] ||
                                          (Ce[3] = (Te) =>
                                            de.$emit("flow-step", Te)),
                                        onUpdateMonthYear:
                                          Ce[4] ||
                                          (Ce[4] = (Te) =>
                                            de.$emit("update-month-year", Te)),
                                        onInvalidSelect:
                                          Ce[5] ||
                                          (Ce[5] = (Te) =>
                                            de.$emit("invalid-select", A(q))),
                                        onAutoApplyInvalid:
                                          Ce[6] ||
                                          (Ce[6] = (Te) =>
                                            de.$emit("invalid-select", Te)),
                                        onInvalidFixedRange:
                                          Ce[7] ||
                                          (Ce[7] = (Te) =>
                                            de.$emit(
                                              "invalid-fixed-range",
                                              Te
                                            )),
                                        onRecalculatePosition: A(z),
                                        onTooltipOpen:
                                          Ce[8] ||
                                          (Ce[8] = (Te) =>
                                            de.$emit("tooltip-open", Te)),
                                        onTooltipClose:
                                          Ce[9] ||
                                          (Ce[9] = (Te) =>
                                            de.$emit("tooltip-close", Te)),
                                        onTimePickerOpen:
                                          Ce[10] ||
                                          (Ce[10] = (Te) =>
                                            de.$emit("time-picker-open", Te)),
                                        onTimePickerClose:
                                          Ce[11] ||
                                          (Ce[11] = (Te) =>
                                            de.$emit("time-picker-close", Te)),
                                        onAmPmChange:
                                          Ce[12] ||
                                          (Ce[12] = (Te) =>
                                            de.$emit("am-pm-change", Te)),
                                        onRangeStart:
                                          Ce[13] ||
                                          (Ce[13] = (Te) =>
                                            de.$emit("range-start", Te)),
                                        onRangeEnd:
                                          Ce[14] ||
                                          (Ce[14] = (Te) =>
                                            de.$emit("range-end", Te)),
                                        onDateUpdate:
                                          Ce[15] ||
                                          (Ce[15] = (Te) =>
                                            de.$emit("date-update", Te)),
                                        onInvalidDate:
                                          Ce[16] ||
                                          (Ce[16] = (Te) =>
                                            de.$emit("invalid-date", Te)),
                                      }
                                    ),
                                    St({ _: 2 }, [
                                      ke(A(j), (Te, _t) => ({
                                        name: Te,
                                        fn: fe((Dt) => [
                                          ee(de.$slots, Te, et(ft({ ...Dt }))),
                                        ]),
                                      })),
                                    ]),
                                    1040,
                                    [
                                      "internal-model-value",
                                      "class",
                                      "open-on-top",
                                      "arr-map-values",
                                      "no-overlay-focus",
                                      "onRecalculatePosition",
                                    ]
                                  ),
                                ],
                                16
                              ))
                            : O("", !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["name", "css"]
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ],
            2
          )
        )
      );
    },
  }),
  pi = (() => {
    const e = zk;
    return (
      (e.install = (n) => {
        n.component("Vue3DatePicker", e);
      }),
      e
    );
  })(),
  Kk = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Object.entries(Kk).forEach(([e, n]) => {
  e !== "default" && (pi[e] = n);
});
const Qk = {
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      customProps: { type: Object, default: null },
    },
    emits: ["update-month-year"],
    computed: {
      getLanguage() {
        return this.customProps.language === "br"
          ? "pt-BR"
          : this.customProps.language;
      },
      calendarTitle() {
        return new Date(this.year, this.month).toLocaleDateString(
          this.getLanguage,
          { year: "numeric", month: "long" }
        );
      },
    },
    methods: {
      onNextClick() {
        let e = this.month,
          n = this.year;
        this.month === 11 ? ((e = 0), (n = this.year + 1)) : (e += 1),
          this.updateDate(e, n);
      },
      onPreviousClick() {
        let e = this.month,
          n = this.year;
        this.month === 0 ? ((e = 11), (n = this.year - 1)) : (e -= 1),
          this.updateDate(e, n);
      },
      updateDate(e, n) {
        this.$emit("update-month-year", { instance: 0, month: e, year: n });
      },
    },
  },
  Pu = (e) => (Ot("data-v-707c7e3f"), (e = e()), Lt(), e),
  Zk = { class: "date-picker-header" },
  Xk = Pu(() =>
    I(
      "div",
      { class: "date-picker-header__arrow" },
      [
        I(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            I("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  Jk = [Xk],
  eS = Pu(() =>
    I(
      "div",
      { class: "date-picker-header__arrow date-picker-header__arrow--next" },
      [
        I(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            I("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  tS = [eS];
function aS(e, n, a, t, o, i) {
  return (
    c(),
    h("div", Zk, [
      I(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[0] ||
            (n[0] = (...r) => i.onPreviousClick && i.onPreviousClick(...r)),
        },
        Jk
      ),
      Ae(" " + J(i.calendarTitle) + " ", 1),
      I(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[1] || (n[1] = (...r) => i.onNextClick && i.onNextClick(...r)),
        },
        tS
      ),
    ])
  );
}
const nS = oe(Qk, [
    ["render", aS],
    ["__scopeId", "data-v-707c7e3f"],
  ]),
  oS = re({
    components: { ModalLayout: mn, DatePicker: pi },
    props: {
      translations: { type: Object, default: () => {} },
      language: { type: String, default: "en" },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const {
          isStoreTypeZyro: n,
          products: a,
          selectedBookingProductId: t,
          shoppingCartItems: o,
          setShoppingCartOpen: i,
          setShoppingCartItems: r,
          setSelectedBookingId: s,
        } = Nt(),
        { openEcommerceModal: l } = xt(),
        { initiateCheckout: m } = tn(),
        g = u(() => nS);
      return {
        initiateCheckout: m,
        openEcommerceModal: l,
        datePickerHeader: g,
        isStoreTypeZyro: n,
        products: a,
        selectedBookingProductId: t,
        shoppingCartItems: o,
        setShoppingCartOpen: i,
        setShoppingCartItems: r,
        setSelectedBookingId: s,
      };
    },
    data() {
      return {
        isTimeSelected: !1,
        selectedTimeSlot: null,
        selectedDate: new Date(),
        timeSlots: [],
        isSlotsLoading: !1,
        isCalendarLoading: !1,
        isCheckoutLoading: !1,
        disabledDates: [],
      };
    },
    computed: {
      isModalEnabled() {
        return this.isStoreTypeZyro && !!this.selectedBookingProductId;
      },
      selectedBookingProduct() {
        return this.products?.find(
          (e) => e.id === this.selectedBookingProductId
        );
      },
      bookingEvent() {
        return this.selectedBookingProduct?.variants[0].booking_event;
      },
      title() {
        return this.selectedBookingProduct?.title;
      },
      location() {
        return this.bookingEvent?.location;
      },
      duration() {
        return this.bookingEvent?.length || null;
      },
      durationUnit() {
        return this.bookingEvent?.length_unit;
      },
      aggregatedDuration() {
        const e =
            this.durationUnit === dr
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          n =
            this.durationUnit === dr
              ? this.translations.hourShort
              : this.translations.minuteShort;
        return `${e} ${n}`;
      },
      eventStartDate() {
        return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null;
      },
      eventEndDate() {
        if (!this.selectedTimeSlot) return null;
        const n = this.eventStartDate.getTime() + this.duration;
        return new Date(n);
      },
      calculatedTime() {
        if (!this.selectedTimeSlot) return "--:--";
        const e = this.getVisibleDate(this.eventStartDate),
          n = this.getVisibleDate(this.eventEndDate);
        return `${e} - ${n}`;
      },
      dayNames() {
        const e = [],
          n = new Date();
        n.setDate(n.getDate() - n.getDay());
        for (let a = 0; a < 7; a += 1)
          n.setDate(n.getDate() + 1),
            e.push(
              new Date(n).toLocaleDateString(this.getLanguage, {
                weekday: "short",
              })
            );
        return e;
      },
      formattedSelectedDate() {
        const e = this.selectedDate?.toLocaleDateString(this.language);
        if (
          this.eventStartDate?.toDateString() !==
          this.eventEndDate?.toDateString()
        ) {
          const n = this.eventEndDate.toLocaleDateString(this.language);
          return `${e} - ${n}`;
        }
        return e;
      },
      selectedMonthAndWeekday() {
        if (!this.selectedDate) return null;
        const e = this.selectedDate?.toLocaleDateString(this.getLanguage, {
          month: "long",
          day: "numeric",
        });
        return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
          weekday: "long",
        })}, ${e}`;
      },
      getLanguage() {
        return this.language === "br" ? "pt-BR" : this.language;
      },
    },
    watch: {
      async selectedDate() {
        (this.selectedTimeSlot = null),
          (this.isTimeSelected = !1),
          await this.loadTimeSlots();
      },
    },
    async mounted() {
      this.isModalEnabled && this.setDefaultData();
    },
    methods: {
      closeEcommerceModal() {
        this.setSelectedBookingId(null),
          this.$refs.modal.handleCloseModalAction();
      },
      async setDefaultData() {
        if (
          (await this.loadAvailability(),
          this.disabledDates.some(
            (e) => e.toDateString() === this.selectedDate.toDateString()
          ))
        ) {
          const n = this.getAllDaysInCurrentMonth()
            .filter(
              (a) =>
                !this.disabledDates.some(
                  (t) => t.toDateString() === a.toDateString()
                )
            )
            .sort((a, t) => new Date(a.date) - new Date(t.date));
          this.selectedDate = n.shift();
        }
        await this.loadTimeSlots();
      },
      async handleSubmit() {
        if (Ha() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = { ...this.selectedBookingProduct },
          { timeZone: n } = Intl.DateTimeFormat().resolvedOptions();
        (e.variants[0].booking_event = {
          ...e.variants[0].booking_event,
          time_slot: this.selectedTimeSlot,
          time_zone: n,
          length: e.variants[0].booking_event.length,
          length_unit: e.variants[0].booking_event.length_unit,
          date: this.selectedDate,
        }),
          this.isCartVisible
            ? ((this.isCheckoutLoading = !0),
              this.setShoppingCartItems([...this.shoppingCartItems, e]),
              this.setShoppingCartOpen(!0),
              this.closeEcommerceModal())
            : await this.initiateCheckout([e]).then(() => {
                (this.isCheckoutLoading = !1), this.closeEcommerceModal();
              });
      },
      selectTimeSlot(e) {
        (this.isTimeSelected = !0), (this.selectedTimeSlot = e);
      },
      async loadTimeSlots() {
        this.isSlotsLoading = !0;
        const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
        this.timeSlots = await Vd(this.bookingEvent.id, e).then(
          (n) => ((this.isSlotsLoading = !1), n)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const n = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          a = new Date(n.getFullYear(), n.getMonth() + 1, 0);
        this.disabledDates = await Yd({
          bookingId: this.bookingEvent.id,
          fromDate: new Intl.DateTimeFormat("lt").format(n),
          toDate: new Intl.DateTimeFormat("lt").format(a),
        }).then(
          (t) => (
            (this.isCalendarLoading = !1),
            t.map((o) => {
              const i = o.split("-");
              return new Date(i[0], i[1] - 1, i[2]);
            })
          )
        );
      },
      getAllDaysInCurrentMonth() {
        const e = new Date().getMonth(),
          n = new Date(new Date().getFullYear(), e, new Date().getDate()),
          a = [];
        for (; n.getMonth() === e; )
          a.push(new Date(n)), n.setDate(n.getDate() + 1);
        return a;
      },
      getVisibleDate(e) {
        return e.toLocaleTimeString(this.language, {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  }),
  rS = { class: "ecommerce-booking-modal" },
  iS = { class: "ecommerce-booking-modal__content" },
  sS = { class: "ecommerce-booking-modal__info" },
  lS = { class: "ecommerce-booking-modal__title" },
  uS = { class: "ecommerce-booking-modal__icons" },
  cS = { class: "ecommerce-booking-modal__text-wrapper" },
  dS = I(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      I(
        "svg",
        {
          width: "16",
          height: "18",
          viewBox: "0 0 16 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          I("path", {
            d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  mS = { class: "ecommerce-booking-modal__text" },
  gS = { class: "ecommerce-booking-modal__text-wrapper" },
  pS = I(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      I(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          I("path", {
            d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  vS = { class: "ecommerce-booking-modal__text" },
  hS = { class: "ecommerce-booking-modal__text-wrapper" },
  fS = I(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      I(
        "svg",
        {
          width: "12",
          height: "18",
          viewBox: "0 0 12 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          I("path", {
            d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  yS = { class: "ecommerce-booking-modal__text" },
  bS = { class: "ecommerce-booking-modal__availability" },
  _S = { class: "ecommerce-booking-modal__time-title" },
  wS = { class: "ecommerce-booking-modal__calendar-wrapper" },
  kS = { class: "ecommerce-booking-modal__time-wrapper" },
  SS = { class: "ecommerce-booking-modal__selected-day" },
  TS = { class: "ecommerce-booking-modal__time-slot-wrapper" },
  CS = { key: 0, class: "ecommerce-booking-modal__time-slot-loader" },
  PS = ["onClick"],
  IS = { class: "ecommerce-booking-modal__buttons" },
  ES = ["disabled"];
function DS(e, n, a, t, o, i) {
  const r = Be("DatePicker"),
    s = Be("ModalLayout");
  return e.isModalEnabled
    ? (c(),
      W(
        s,
        {
          key: 0,
          ref: "modal",
          padding: "0",
          "max-width": "1048px",
          "mobile-height": "100%",
          width: "100vw",
          "background-color": "transparent",
        },
        {
          default: fe(() => [
            I("div", rS, [
              I("div", iS, [
                I("div", sS, [
                  I("p", lS, J(e.title), 1),
                  I("div", uS, [
                    I("div", cS, [
                      dS,
                      I("p", mS, J(e.formattedSelectedDate), 1),
                    ]),
                    I("div", gS, [
                      pS,
                      I(
                        "p",
                        vS,
                        J(e.calculatedTime) +
                          " (" +
                          J(e.aggregatedDuration) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                  I("div", hS, [fS, I("p", yS, J(e.location), 1)]),
                ]),
                I("div", bS, [
                  I("p", _S, J(e.translations.selectDateAndTime), 1),
                  I("div", wS, [
                    Ee(
                      r,
                      {
                        modelValue: e.selectedDate,
                        "onUpdate:modelValue":
                          n[0] || (n[0] = (l) => (e.selectedDate = l)),
                        inline: "",
                        "hide-offset-dates": "",
                        "auto-apply": "",
                        class: Z([
                          "ecommerce-booking-modal-calendar",
                          {
                            "ecommerce-booking-modal-calendar--loading":
                              e.isCalendarLoading,
                          },
                        ]),
                        "disabled-dates": e.disabledDates,
                        "min-date": new Date(),
                        locale: e.getLanguage,
                        "no-swipe": "",
                        "month-change-on-scroll": !1,
                        "enable-time-picker": !1,
                        "custom-props": { language: e.getLanguage },
                        "month-year-component": e.datePickerHeader,
                        onUpdateMonthYear:
                          n[1] ||
                          (n[1] = (l) => e.loadAvailability({ data: l })),
                      },
                      {
                        "calendar-header": fe(({ index: l }) => [
                          I("div", null, J(e.dayNames[l]), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        "modelValue",
                        "class",
                        "disabled-dates",
                        "min-date",
                        "locale",
                        "custom-props",
                        "month-year-component",
                      ]
                    ),
                    I("div", kS, [
                      I("div", null, [
                        I("p", SS, J(e.selectedMonthAndWeekday), 1),
                      ]),
                      I("div", TS, [
                        e.isSlotsLoading
                          ? (c(), h("div", CS))
                          : (c(!0),
                            h(
                              pe,
                              { key: 1 },
                              ke(
                                e.timeSlots,
                                (l, m) => (
                                  c(),
                                  h(
                                    "button",
                                    {
                                      key: `time-${m}`,
                                      class: Z([
                                        "ecommerce-booking-modal__time-slot",
                                        {
                                          "ecommerce-booking-modal__time-slot--active":
                                            e.selectedTimeSlot === l,
                                        },
                                      ]),
                                      onClick: (g) => e.selectTimeSlot(l),
                                    },
                                    J(e.getVisibleDate(new Date(l))),
                                    11,
                                    PS
                                  )
                                )
                              ),
                              128
                            )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              I("div", IS, [
                I(
                  "button",
                  {
                    class: "ecommerce-booking-modal__button",
                    onClick:
                      n[2] ||
                      (n[2] = (...l) =>
                        e.closeEcommerceModal && e.closeEcommerceModal(...l)),
                  },
                  J(e.translations.cancel),
                  1
                ),
                I(
                  "button",
                  {
                    class: Z([
                      "ecommerce-booking-modal__button ecommerce-booking-modal__button--save",
                      { loading: e.isCheckoutLoading },
                    ]),
                    disabled: !e.isTimeSelected,
                    onClick:
                      n[3] ||
                      (n[3] = (...l) => e.handleSubmit && e.handleSubmit(...l)),
                  },
                  J(e.translations.book),
                  11,
                  ES
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        512
      ))
    : O("", !0);
}
const MS = oe(oS, [["render", DS]]),
  OS = re({
    name: "EcommerceModalContent",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: "success" },
    },
    emits: ["handle-close"],
  }),
  LS = { class: "payment-info" },
  BS = { class: "payment-info__content" },
  AS = { class: "payment-info__title" },
  xS = { class: "payment-info__text body-large" };
function RS(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    h("div", LS, [
      I("div", BS, [
        I("h5", AS, J(e.title), 1),
        I("p", xS, J(e.text), 1),
        I(
          "button",
          {
            class: "payment-info__button",
            type: "primary",
            onClick: n[0] || (n[0] = (s) => e.$emit("handle-close")),
          },
          J(e.buttonText),
          1
        ),
      ]),
    ])),
    [[r, `ecommerce-modal-checkout-${e.qaSelector}`]]
  );
}
const Po = oe(OS, [
    ["render", RS],
    ["__scopeId", "data-v-98b20e5c"],
  ]),
  NS = re({
    components: { ModalLayout: mn, ModalContent: Po },
    props: { translations: { type: Object, default: () => {} } },
  });
function HS(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: fe(() => [
          Ee(
            r,
            {
              "qa-selector": "booking-unavailable",
              title: e.translations.checkoutModalBookingUnavailable,
              text: e.translations.checkoutModalChooseDifferentTime,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const $S = oe(NS, [["render", HS]]),
  US = re({
    components: { ModalLayout: mn, ModalContent: Po },
    props: { translations: { type: Object, default: () => {} } },
  });
function VS(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: fe(() => [
          Ee(
            r,
            {
              "qa-selector": "failed",
              title: e.translations.checkoutModalCantAcceptOrders,
              text: e.translations.checkoutModalPleaseContact,
              "button-text": e.translations.close,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const YS = oe(US, [["render", VS]]),
  FS = re({
    __name: "EcommerceCheckoutSuccess",
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isEcommerceStoreCreated: t, setShoppingCartItems: o } = Nt(),
        i = L({
          title: a.translations.checkoutModalThanksForOrder,
          text: a.translations.checkoutModalOrderReceived,
          buttonText: a.translations.gotIt,
          modalType: "success-order",
        }),
        r = L(null);
      De(() => {
        o([]);
        const m = new URLSearchParams(window.location.search).get("product");
        m === Rt
          ? (i.value = {
              title: a.translations.checkoutModalThanksForOrder,
              text: a.translations.checkoutModalSuccessfullyBooked,
              buttonText: a.translations.gotIt,
              modalType: "success-orderbooking",
            })
          : m === cr &&
            (i.value = {
              title: a.translations.checkoutModalThanksForDonation,
              text: a.translations.checkoutModalDonationReceived,
              buttonText: a.translations.gotIt,
              modalType: "success-orderdonation",
            });
      });
      const s = {
        props: a,
        isEcommerceStoreCreated: t,
        setShoppingCartItems: o,
        modalContent: i,
        modalRef: r,
        ModalContent: Po,
        ModalLayout: mn,
      };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function WS(e, n, a, t, o, i) {
  return t.isEcommerceStoreCreated
    ? (c(),
      W(
        t.ModalLayout,
        { key: 0, ref: "modalRef" },
        {
          default: fe(() => [
            Ee(
              t.ModalContent,
              {
                title: t.modalContent.title,
                text: t.modalContent.text,
                "button-text": t.modalContent.buttonText,
                "qa-selector": t.modalContent.modalType,
                onHandleClose:
                  n[0] || (n[0] = (r) => t.modalRef.handleCloseModalAction()),
              },
              null,
              8,
              ["title", "text", "button-text", "qa-selector"]
            ),
          ]),
          _: 1,
        },
        512
      ))
    : O("", !0);
}
const qS = oe(FS, [["render", WS]]),
  GS = re({
    components: { CloseButton: jr },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = xt(),
        n = setTimeout(() => {
          e();
        }, 6e3);
      return (
        Tt(() => {
          clearTimeout(n);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  jS = (e) => (Ot("data-v-2b2551b7"), (e = e()), Lt(), e),
  zS = { class: "notification" },
  KS = jS(() =>
    I(
      "svg",
      {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        I("path", {
          d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        I("path", {
          d: "M12.01 16L12.01 12",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        I("path", {
          d: "M12.01 8L12 8",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  QS = { class: "notification__content" };
function ZS(e, n, a, t, o, i) {
  const r = Be("CloseButton"),
    s = je("qa");
  return (
    c(),
    W(
      It,
      { name: "fade" },
      {
        default: fe(() => [
          ue(
            (c(),
            h("div", zS, [
              KS,
              I("p", QS, J(e.translations.checkoutModalDisabledPreview), 1),
              Ee(r, {
                class: "notification__close",
                title: "Close",
                onClick: n[0] || (n[0] = (l) => e.closeEcommerceModal()),
              }),
            ])),
            [[s, "builder-message-ecommercedisabled"]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const XS = oe(GS, [
    ["render", ZS],
    ["__scopeId", "data-v-2b2551b7"],
  ]),
  JS = re({
    components: { ModalLayout: mn, ModalContent: Po },
    props: { translations: { type: Object, default: () => {} } },
  });
function eT(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: fe(() => [
          Ee(
            r,
            {
              "qa-selector": "outofstock",
              title: e.translations.checkoutModalOutOfStock,
              text: e.translations.checkoutModalTryOrChoose,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const tT = oe(JS, [["render", eT]]),
  aT = "open-modal",
  nT = re({
    components: {
      EcommerceProductPreview: Jb,
      EcommerceBookingEventSelect: MS,
      EcommerceBookingUnavailable: $S,
      EcommerceCheckoutFailed: YS,
      EcommerceCheckoutSuccess: qS,
      EcommerceMessageButtonDisabled: XS,
      EcommerceOutOfStock: tT,
    },
    props: {
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const {
        openEcommerceModal: e,
        closeEcommerceModal: n,
        openEcommerceModalName: a,
      } = xt();
      return (
        De(() => {
          const o = new URLSearchParams(window.location.search).get(aT);
          o && e(o);
        }),
        {
          openEcommerceModal: e,
          closeEcommerceModal: n,
          openEcommerceModalName: a,
        }
      );
    },
  });
function oT(e, n, a, t, o, i) {
  return e.openEcommerceModalName
    ? (c(),
      W(
        cn(e.openEcommerceModalName),
        {
          key: 0,
          translations: e.ecommerceTranslations,
          language: e.language,
          "current-locale": e.currentLocale,
          "is-cart-visible": e.isCartVisible,
          "is-in-preview-mode": e.isInPreviewMode,
          "is-quick-preview": "",
        },
        null,
        8,
        [
          "translations",
          "language",
          "current-locale",
          "is-cart-visible",
          "is-in-preview-mode",
        ]
      ))
    : O("", !0);
}
const rT = oe(nT, [["render", oT]]),
  iT = re({
    __name: "Flag",
    props: { alt: {}, src: { default: void 0 } },
    setup(e, { expose: n }) {
      n();
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  sT = { class: "flag" },
  lT = ["src", "alt"],
  uT = I("div", { class: "flag__shadow" }, null, -1);
function cT(e, n, a, t, o, i) {
  return (
    c(),
    h("div", sT, [
      I("img", { class: "flag__img", src: a.src, alt: a.alt }, null, 8, lT),
      uT,
    ])
  );
}
const dT = oe(iT, [["render", cT]]),
  mT = re({
    __name: "LanguageSwitcher",
    props: { languages: {}, currentLocale: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() =>
          a.languages
            .filter(({ isHidden: r }) => !r)
            .map((r) => ({
              ...r,
              src: `${mc}/${r.flagPath}`,
              alt: `${r.locale} flag`,
            }))
        ),
        o = u(() => t.value.find(({ locale: r }) => r === a.currentLocale)),
        i = {
          props: a,
          languageSwitcherLanguages: t,
          selectedLanguage: o,
          Flag: dT,
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  gT = { ref: "languageSwitcher", class: "language-switcher", tabindex: "0" },
  pT = { class: "language-switcher__button" },
  vT = { key: 1, class: "language-switcher__locale" },
  hT = I(
    "svg",
    {
      class: "language-switcher__icon",
      width: "10",
      height: "7",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      I("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor",
      }),
    ],
    -1
  ),
  fT = { class: "language-switcher__dropdown-area" },
  yT = { class: "language-switcher__dropdown" },
  bT = ["href"];
function _T(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      gT,
      [
        ue(
          (c(),
          h("div", pT, [
            t.selectedLanguage?.country
              ? ue(
                  (c(),
                  W(
                    t.Flag,
                    {
                      key: 0,
                      class: "language-switcher__flag",
                      src: t.selectedLanguage.src,
                      alt: t.selectedLanguage.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  )),
                  [
                    [
                      r,
                      `navigation-selected-language-${t.selectedLanguage.name}`,
                    ],
                  ]
                )
              : (c(), h("div", vT, J(t.selectedLanguage?.locale), 1)),
            hT,
          ])),
          [[r, "navigation-language-switcher"]]
        ),
        I("div", fT, [
          I("ul", yT, [
            (c(!0),
            h(
              pe,
              null,
              ke(t.languageSwitcherLanguages, (s) =>
                ue(
                  (c(),
                  h(
                    "li",
                    {
                      key: s.locale,
                      class: "language-switcher__dropdown-item",
                    },
                    [
                      I(
                        "a",
                        {
                          href: s.href,
                          class: Z([
                            "language-switcher__dropdown-link",
                            { "--current": s.locale === a.currentLocale },
                          ]),
                        },
                        [
                          s.country
                            ? (c(),
                              W(
                                t.Flag,
                                {
                                  key: 0,
                                  class: "language-switcher__dropdown-flag",
                                  src: s.src,
                                  alt: s.alt,
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ))
                            : O("", !0),
                          Ae(" " + J(s.name), 1),
                        ],
                        10,
                        bT
                      ),
                    ]
                  )),
                  [[r, `navigation-language-switcher-${s.locale}`]]
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      512
    )
  );
}
const wT = oe(mT, [["render", _T]]),
  kT = re({
    __name: "ZyroHamburger",
    props: {
      title: { type: String, default: "Menu" },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: "var(--nav-link-text-color)" },
    },
    setup(e, { expose: n }) {
      n(), st((i) => ({ "165ebbac": t.value }));
      const a = e,
        t = u(() => a.color),
        o = { props: a, burgerColor: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  vi = (e) => (Ot("data-v-ccf9b649"), (e = e()), Lt(), e),
  ST = ["title"],
  TT = vi(() => I("span", { class: "burger__bun" }, null, -1)),
  CT = vi(() => I("span", { class: "burger__meat" }, null, -1)),
  PT = vi(() => I("span", { class: "burger__bun" }, null, -1)),
  IT = [TT, CT, PT];
function ET(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "button",
      {
        type: "button",
        class: Z(["burger", { "burger--open": a.isOpen }]),
        title: a.title,
      },
      IT,
      10,
      ST
    )
  );
}
const DT = oe(kT, [
    ["render", ET],
    ["__scopeId", "data-v-ccf9b649"],
  ]),
  MT = re({
    name: "BlockHeaderBackground",
    props: {
      type: { type: String, default: "color" },
      imageUrl: { type: String, default: null },
      color: { type: String, default: "" },
      isTransparent: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    computed: {
      backgroundImage() {
        return this.type === "image" && this.imageUrl;
      },
      backgroundColor() {
        return this.type === "color" ? this.color : "transparent";
      },
      backgroundCSSVars() {
        return {
          "--background-color": this.isTransparent
            ? "transparent"
            : this.backgroundColor,
          ...(!!this.backgroundImage && {
            "--background-image": `url(${this.backgroundImage})`,
          }),
          ...(!!this.overlayOpacity && {
            "--overlay-opacity": this.overlayOpacity,
          }),
        };
      },
    },
  });
function OT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: Z([
          "background",
          { "background--with-image": e.backgroundImage },
        ]),
        style: xe(e.backgroundCSSVars),
      },
      null,
      6
    )
  );
}
const LT = oe(MT, [["render", OT]]),
  BT = re({
    __name: "BlockHeaderCart",
    props: { cartIconSize: {}, cartText: {}, itemsInCart: {}, cartUrl: {} },
    emits: ["cart-click"],
    setup(e, { expose: n, emit: a }) {
      n(), st((s) => ({ "0869983e": i.value }));
      const t = e,
        o = a,
        i = u(() => t.cartIconSize),
        r = { props: t, emit: o, cartIconSize: i };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  AT = (e) => (Ot("data-v-8511a203"), (e = e()), Lt(), e),
  xT = { class: "block-header-cart-wrapper" },
  RT = ["href"],
  NT = { class: "block-header-cart__icon-container" },
  HT = AT(() =>
    I(
      "svg",
      {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon",
      },
      [
        I("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  $T = { class: "block-header-cart__cart-text" };
function UT(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", xT, [
      I(
        "a",
        { href: a.cartUrl, class: "block-header-cart" },
        [
          ue(
            (c(),
            h(
              "button",
              {
                class: "block-header-cart__button",
                title: "Go to cart",
                onClick: n[0] || (n[0] = (s) => t.emit("cart-click")),
              },
              [
                I("div", NT, [
                  HT,
                  I("span", null, [
                    I("span", $T, J(a.cartText), 1),
                    Ae(" (" + J(a.itemsInCart) + ")", 1),
                  ]),
                ]),
              ]
            )),
            [[r, "header-btn-shoppingbag"]]
          ),
        ],
        8,
        RT
      ),
    ])
  );
}
const VT = oe(BT, [
    ["render", UT],
    ["__scopeId", "data-v-8511a203"],
  ]),
  YT = re({
    __name: "BlockHeaderItemContent",
    props: { item: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(
          () =>
            `${
              a.item.isCurrent
                ? "navigationblock-page-active-"
                : "navigationblock-page-"
            }${a.item.name}`
        ),
        o = { props: a, linkDataQa: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  FT = (e) => (Ot("data-v-04741be4"), (e = e()), Lt(), e),
  WT = ["target", "rel", "href", "textContent"],
  qT = ["textContent"],
  GT = { key: 2, class: "item-content__icon-container-wrapper" },
  jT = FT(() =>
    I(
      "span",
      { class: "item-content__icon-container" },
      [
        I(
          "svg",
          {
            class: "item-content__icon",
            width: "10",
            height: "7",
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            I("path", {
              d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
              fill: "currentColor",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  zT = [jT];
function KT(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      {
        class: Z([
          "item-content-wrapper",
          { "item-content-wrapper--active": a.item.isCurrent },
        ]),
      },
      [
        a.item.href
          ? ue(
              (c(),
              h(
                "a",
                {
                  key: 0,
                  class: "item-content",
                  target: a.item.target,
                  rel: a.item.rel,
                  href: a.item.href,
                  textContent: J(a.item.name),
                },
                null,
                8,
                WT
              )),
              [[r, t.linkDataQa]]
            )
          : ue(
              (c(),
              h(
                "span",
                { key: 1, class: "item-content", textContent: J(a.item.name) },
                null,
                8,
                qT
              )),
              [[r, t.linkDataQa]]
            ),
        a.item.hasDropdown ? (c(), h("div", GT, zT)) : O("", !0),
      ],
      2
    )
  );
}
const QT = oe(YT, [
    ["render", KT],
    ["__scopeId", "data-v-04741be4"],
  ]),
  ZT = re({
    __name: "BlockHeaderItem",
    props: { item: {}, areDropdownsHidden: { type: Boolean } },
    setup(e, { expose: n }) {
      n();
      const t = { props: e, BlockHeaderItemContent: QT };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  XT = { class: "block-header-item" },
  JT = { class: "block-header-item__label" },
  eC = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger",
  },
  tC = { key: 1, class: "block-header-item__dropdown-area" },
  aC = { class: "block-header-item__dropdown" };
function nC(e, n, a, t, o, i) {
  const r = Be("BlockHeaderItem", !0),
    s = je("qa");
  return (
    c(),
    h("li", XT, [
      I("label", JT, [
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(), h("input", eC))
          : O("", !0),
        ue(
          Ee(
            t.BlockHeaderItemContent,
            {
              item: a.item,
              class: "block-header-item__item",
              "aria-haspopup": a.item.hasDropdown,
            },
            null,
            8,
            ["item", "aria-haspopup"]
          ),
          [[s, `navigation-item-${a.item.name}`]]
        ),
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(),
            h("div", tC, [
              I("ul", aC, [
                (c(!0),
                h(
                  pe,
                  null,
                  ke(
                    t.props.item.subItems,
                    (l) => (
                      c(), W(r, { key: l.id, item: l }, null, 8, ["item"])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : O("", !0),
      ]),
    ])
  );
}
const oC = oe(ZT, [
    ["render", nC],
    ["__scopeId", "data-v-cfb02be7"],
  ]),
  rC = re({
    __name: "BlockHeaderLogo",
    props: {
      logoSrc: {},
      logoSvg: {},
      href: {},
      height: {},
      heightMobile: {},
      maxWidth: {},
      maxWidthMobile: {},
      objectPosition: {},
      objectPositionMobile: {},
      isOptimized: { type: Boolean },
      siteName: {},
    },
    setup(e, { expose: n }) {
      n(),
        st((d) => ({
          "0c92dd22": r.value,
          "234ca29e": o.value,
          db96c802: l.value,
          "2b0f8ad0": s.value,
          "1d12d55d": i.value,
          "62b79fbe": m.value,
        }));
      const a = e,
        t = u(() => (a.siteName ? `${a.siteName} logo` : "")),
        o = u(() => (a.isOptimized && a.height ? `${a.height}px` : "auto")),
        i = u(() =>
          a.isOptimized && a.heightMobile ? `${a.heightMobile}px` : "auto"
        ),
        r = u(() => a.maxWidth),
        s = u(() => a.maxWidthMobile || r.value),
        l = u(() => a.objectPosition),
        m = u(() => a.objectPositionMobile),
        g = {
          props: a,
          logoAltTag: t,
          height: o,
          mHeight: i,
          width: r,
          mWidth: s,
          objectPosition: l,
          mObjectPosition: m,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  iC = ["href"],
  sC = ["innerHTML"],
  lC = ["src", "alt"];
function uC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "a",
      { class: "block-header-logo", href: t.props.href },
      [
        t.props.logoSvg
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: "block-header-logo__image",
                innerHTML: t.props.logoSvg,
              },
              null,
              8,
              sC
            ))
          : t.props.logoSrc
          ? ue(
              (c(),
              h(
                "img",
                {
                  key: 1,
                  class: "block-header-logo__image",
                  src: t.props.logoSrc,
                  alt: t.logoAltTag,
                },
                null,
                8,
                lC
              )),
              [[r, "builder-siteheader-img-logo"]]
            )
          : O("", !0),
      ],
      8,
      iC
    )
  );
}
const cC = oe(rC, [
    ["render", uC],
    ["__scopeId", "data-v-83dc91a0"],
  ]),
  dC = re({
    __name: "BlockHeaderLayout",
    props: {
      layout: {},
      mobileLayout: {},
      isLogoVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      areSocialIconLinksVisible: { type: Boolean },
      isCartVisible: { type: Boolean },
      isButtonVisible: { type: Boolean },
      isMobileMenuDropdownOpen: { type: Boolean },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    setup(e, { expose: n }) {
      n(), st((d) => ({ "3c28effe": m.value, b96ef066: s.value }));
      const a = e,
        t = L(null),
        o = L(null),
        i = L(0),
        r = ev(o),
        s = u(() => `${i.value}px`),
        l = u(
          () =>
            [
              a.isLanguageSwitcherVisible,
              a.areSocialIconLinksVisible,
              a.isCartVisible,
              a.isButtonVisible,
            ].filter(Boolean).length
        ),
        m = u(
          () =>
            `${a.isLogoVisible ? "min-content" : ""} auto ${
              l.value > 0 ? `repeat(${l.value}, min-content)` : ""
            }`
        );
      De(() => {
        (o.value = document.body),
          (i.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0);
      }),
        Ne(
          () => a.isMobileMenuDropdownOpen,
          (d) => {
            d
              ? (t?.value && (t.value.scrollTop = 0), (r.value = !0))
              : (r.value = !1);
          }
        );
      const g = {
        props: a,
        dropdownRef: t,
        bodyElement: o,
        stickyBarHeight: i,
        isBodyScrollLocked: r,
        stickyBarHeightPx: s,
        visibleNonCenteredRightElementsCount: l,
        nonCenteredLayoutColumns: m,
        get BLOCK_HEADER_LAYOUTS() {
          return gc;
        },
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  mC = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3",
  },
  gC = { class: "block-header-layout-desktop__right-side" },
  pC = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4",
  },
  vC = { class: "block-header-layout-desktop__right-side" },
  hC = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5",
  },
  fC = { class: "block-header-layout-desktop__right-side" };
function yC(e, n, a, t, o, i) {
  return (
    c(),
    h(
      pe,
      null,
      [
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_1 ||
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_2
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: Z(
                  `block-header-layout-desktop block-header-layout-desktop--${t.props.layout}`
                ),
              },
              [
                ee(e.$slots, "logo", {}, void 0, !0),
                ee(e.$slots, "nav", {}, void 0, !0),
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_3
          ? (c(),
            h("div", mC, [
              ee(e.$slots, "logo", {}, void 0, !0),
              ee(e.$slots, "nav", {}, void 0, !0),
              I("div", gC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_4
          ? (c(),
            h("div", pC, [
              ee(e.$slots, "nav", {}, void 0, !0),
              ee(e.$slots, "logo", {}, void 0, !0),
              I("div", vC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_5
          ? (c(),
            h("div", hC, [
              ee(e.$slots, "logo", {}, void 0, !0),
              ee(e.$slots, "social-icons", {}, void 0, !0),
              ee(e.$slots, "nav", {}, void 0, !0),
              I("div", fC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : O("", !0),
        I(
          "div",
          {
            class: Z([
              "block-header-layout-mobile",
              `block-header-layout-mobile--${t.props.mobileLayout}`,
            ]),
          },
          [
            ee(e.$slots, "logo", {}, void 0, !0),
            ee(e.$slots, "cart", {}, void 0, !0),
            ee(e.$slots, "hamburger-menu", {}, void 0, !0),
            I(
              "div",
              {
                ref: "dropdownRef",
                class: Z([
                  "block-header-layout-mobile__dropdown",
                  [
                    `block-header-layout-mobile__dropdown--link-align-${t.props.mobileLinksAlignment}`,
                    {
                      "block-header-layout-mobile__dropdown--open":
                        t.props.isMobileMenuDropdownOpen,
                    },
                    {
                      "block-header-layout-mobile__dropdown--full-screen":
                        t.props.isMobileMenuDropdownFullScreen,
                    },
                  ],
                ]),
              },
              [
                ee(e.$slots, "nav", {}, void 0, !0),
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ),
          ],
          2
        ),
      ],
      64
    )
  );
}
const bC = oe(dC, [
    ["render", yC],
    ["__scopeId", "data-v-3b3f462d"],
  ]),
  _C = re({
    __name: "BlockHeaderButton",
    props: { elementId: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Qe(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: p,
          fontWeight: f,
          borderWidth: b,
          borderRadius: S,
          backgroundColor: T,
          fontColor: w,
          borderColor: y,
          backgroundColorHover: D,
          fontColorHover: C,
          borderColorHover: M,
          mobileElementWidth: N,
          mobileElementHeight: R,
        } = Hn(a, {
          href: u(() =>
            t({
              isFormButton: !1,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        Q = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: p,
          fontWeight: f,
          borderWidth: b,
          borderRadius: S,
          backgroundColor: T,
          fontColor: w,
          borderColor: y,
          backgroundColorHover: D,
          fontColorHover: C,
          borderColorHover: M,
          mobileElementWidth: N,
          mobileElementHeight: R,
          GridButton: Ya,
        };
      return (
        Object.defineProperty(Q, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Q
      );
    },
  });
function wC(e, n, a, t, o, i) {
  return (
    c(),
    W(
      t.GridButton,
      {
        "data-element-ref": a.elementId,
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": t.mobileElementWidth,
        "mobile-element-height": t.mobileElementHeight,
        onClick: n[0] || (n[0] = Ie(() => {}, ["prevent"])),
        onDrag: n[1] || (n[1] = Ie(() => {}, ["prevent"])),
        onDragstart: n[2] || (n[2] = Ie(() => {}, ["prevent"])),
      },
      null,
      8,
      [
        "data-element-ref",
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const kC = oe(_C, [["render", wC]]),
  SC = re({
    __name: "BlockHeader",
    props: {
      siteName: { default: "" },
      headerLayout: {},
      mHeaderLayout: {},
      languageSwitcherLanguages: {},
      items: {},
      logoHref: {},
      logoSrc: { default: "" },
      logoSvg: { default: "" },
      backgroundImageUrl: {},
      isOpen: { type: Boolean, default: !1 },
      isSticky: { type: Boolean },
      isTransparent: { type: Boolean },
      isLogoVisible: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      currentLocale: { default: "" },
      backgroundColor: { default: "" },
      navLinkTextColor: { default: "" },
      navLinkTextColorHover: { default: "" },
      cartText: { default: "" },
      cartUrl: { default: "" },
      itemsInCart: { default: 0 },
      areDropdownsHidden: { type: Boolean },
      isLogoOptimized: { type: Boolean, default: !1 },
      background: {},
      cartIconSize: {},
      logoMaxWidth: {},
      heightMobile: {},
      logoHeight: {},
      logoHeightMobile: {},
      logoMaxWidthMobile: {},
      logoObjectPosition: {},
      logoObjectPositionMobile: {},
      fontFamily: {},
      fontWeight: {},
      socialIconsLinks: { default: () => [] },
      socialIconsStyles: { default: () => ({}) },
      buttonElementId: {},
      buttonElementData: { default: () => ({}) },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    emits: [
      "toggle-visibility",
      "cart-click",
      "logo-click",
      "button-click",
      "navigation-click",
      "social-icons-click",
      "language-switcher-click",
    ],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        { hasUserScrolled: i } = cl(),
        r = L(null),
        s = u(() => t.socialIconsLinks.length > 0),
        l = u(() => !!Object.keys(t.buttonElementData).length),
        m = u(() => i.value && t.isSticky),
        g = u(() => (t.isSticky && !i.value) || !t.isSticky),
        d = u(() => t.isTransparent && g.value && !t.isOpen),
        p = u(() => ({
          "--text-font-family": t.fontFamily,
          "--text-font-weight": t.fontWeight,
          "--nav-link-text-color":
            t.navLinkTextColor || "var(--nav-link-color)",
          "--nav-link-text-color-hover":
            t.navLinkTextColorHover || "var(--nav-link-color-hover)",
          "--header-height-mobile": `${t.heightMobile}px`,
          ...(s.value && {
            "--space-between-icons": "16px",
            "--icon-color": t.socialIconsStyles["icon-color"],
            "--icon-size": t.socialIconsStyles["icon-size"],
            "--icon-color-hover": t.socialIconsStyles["icon-color-hover"],
          }),
        }));
      De(() => {
        _o(r, () => {
          t.isOpen && o("toggle-visibility");
        });
      });
      const f = {
        props: t,
        emit: o,
        hasUserScrolled: i,
        headerRef: r,
        isSocialIconsLinksVisible: s,
        isButtonVisible: l,
        isWithShadow: m,
        shouldForceTransparency: g,
        isCurrentlyTransparent: d,
        computedStyles: p,
        LanguageSwitcher: wT,
        ZyroHamburger: DT,
        BlockHeaderBackground: LT,
        BlockHeaderCart: VT,
        BlockHeaderItem: oC,
        BlockHeaderLogo: cC,
        BlockHeaderLayout: bC,
        get BLOCK_HEADER_CLASS() {
          return il;
        },
        GridSocialIcons: _l,
        BlockHeaderButton: kC,
      };
      return (
        Object.defineProperty(f, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        f
      );
    },
  }),
  TC = { class: "block-header__nav-links" };
function CC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "header",
      {
        ref: "headerRef",
        class: Z({
          [t.BLOCK_HEADER_CLASS]: !0,
          "block-header--with-shadow": t.isWithShadow,
        }),
        style: xe(t.computedStyles),
      },
      [
        t.props.background
          ? (c(),
            W(
              t.BlockHeaderBackground,
              {
                key: 0,
                type: t.props.background.current,
                "image-url": t.props.backgroundImageUrl,
                color: t.props.background.color,
                "overlay-opacity": Number(
                  t.props.background["overlay-opacity"]
                ),
                "is-transparent": t.isCurrentlyTransparent,
              },
              null,
              8,
              [
                "type",
                "image-url",
                "color",
                "overlay-opacity",
                "is-transparent",
              ]
            ))
          : O("", !0),
        Ee(
          t.BlockHeaderLayout,
          {
            layout: t.props.headerLayout,
            "mobile-layout": t.props.mHeaderLayout,
            "is-logo-visible": t.props.isLogoVisible,
            "is-language-switcher-visible": t.props.isLanguageSwitcherVisible,
            "are-social-icon-links-visible": t.isSocialIconsLinksVisible,
            "is-cart-visible": t.props.isCartVisible,
            "is-button-visible": t.isButtonVisible,
            "is-mobile-menu-dropdown-open": t.props.isOpen,
            "is-mobile-menu-dropdown-full-screen":
              t.props.isMobileMenuDropdownFullScreen,
            "mobile-links-alignment": t.props.mobileLinksAlignment,
          },
          {
            "hamburger-menu": fe(() => [
              t.props.items.length || t.props.isLanguageSwitcherVisible
                ? ue(
                    (c(),
                    W(
                      t.ZyroHamburger,
                      {
                        key: 0,
                        class: "block-header__hamburger-menu",
                        "is-open": t.props.isOpen,
                        onClick:
                          n[0] ||
                          (n[0] = Ie(
                            (s) => e.$emit("toggle-visibility"),
                            ["stop"]
                          )),
                      },
                      null,
                      8,
                      ["is-open"]
                    )),
                    [[r, "builder-siteheader-btn-hamburger"]]
                  )
                : O("", !0),
            ]),
            logo: fe(() => [
              t.props.isLogoVisible
                ? (c(),
                  W(
                    t.BlockHeaderLogo,
                    {
                      key: 0,
                      class: "block-header__logo",
                      "logo-src": t.props.logoSrc,
                      "logo-svg": t.props.logoSvg,
                      href: t.props.logoHref,
                      "site-name": t.props.siteName,
                      "max-width": t.props.logoMaxWidth,
                      "max-width-mobile": t.props.logoMaxWidthMobile,
                      height: t.props.logoHeight,
                      "height-mobile": t.props.logoHeightMobile,
                      "is-optimized": t.props.isLogoOptimized,
                      "object-position": t.props.logoObjectPosition,
                      "object-position-mobile":
                        t.props.logoObjectPositionMobile,
                      onClick: n[1] || (n[1] = (s) => e.$emit("logo-click")),
                    },
                    null,
                    8,
                    [
                      "logo-src",
                      "logo-svg",
                      "href",
                      "site-name",
                      "max-width",
                      "max-width-mobile",
                      "height",
                      "height-mobile",
                      "is-optimized",
                      "object-position",
                      "object-position-mobile",
                    ]
                  ))
                : O("", !0),
            ]),
            nav: fe(() => [
              I(
                "nav",
                {
                  class: "block-header__nav",
                  onClick: n[2] || (n[2] = (s) => t.emit("navigation-click")),
                },
                [
                  ue(
                    (c(),
                    h("ul", TC, [
                      (c(!0),
                      h(
                        pe,
                        null,
                        ke(
                          t.props.items,
                          (s) => (
                            c(),
                            W(
                              t.BlockHeaderItem,
                              {
                                key: s.id,
                                item: s,
                                "are-dropdowns-hidden":
                                  t.props.areDropdownsHidden,
                              },
                              null,
                              8,
                              ["item", "are-dropdowns-hidden"]
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                    [[r, "builder-siteheader-emptyspace"]]
                  ),
                ]
              ),
            ]),
            "social-icons": fe(() => [
              t.props.socialIconsLinks.length
                ? (c(),
                  W(
                    t.GridSocialIcons,
                    {
                      key: 0,
                      class: "block-header__social-icons",
                      links: t.props.socialIconsLinks,
                    },
                    null,
                    8,
                    ["links"]
                  ))
                : O("", !0),
            ]),
            "language-switcher": fe(() => [
              t.props.isLanguageSwitcherVisible
                ? (c(),
                  W(
                    t.LanguageSwitcher,
                    {
                      key: 0,
                      class: Z([
                        "block-header__language-switcher",
                        { "mouse-disabled": t.props.areDropdownsHidden },
                      ]),
                      languages: t.props.languageSwitcherLanguages,
                      "current-locale": t.props.currentLocale,
                    },
                    null,
                    8,
                    ["class", "languages", "current-locale"]
                  ))
                : O("", !0),
            ]),
            cart: fe(() => [
              t.props.isCartVisible
                ? (c(),
                  W(
                    t.BlockHeaderCart,
                    {
                      key: 0,
                      class: "block-header__cart",
                      "cart-text": t.props.cartText,
                      "cart-url": t.props.cartUrl,
                      "items-in-cart": t.props.itemsInCart,
                      "cart-icon-size": t.props.cartIconSize,
                      onCartClick:
                        n[3] || (n[3] = (s) => e.$emit("cart-click")),
                    },
                    null,
                    8,
                    ["cart-text", "cart-url", "items-in-cart", "cart-icon-size"]
                  ))
                : O("", !0),
            ]),
            button: fe(() => [
              t.isButtonVisible && t.props.buttonElementId
                ? (c(),
                  W(
                    t.BlockHeaderButton,
                    {
                      key: 0,
                      class: "block-header__button",
                      "element-id": t.props.buttonElementId,
                      data: t.props.buttonElementData,
                    },
                    null,
                    8,
                    ["element-id", "data"]
                  ))
                : O("", !0),
            ]),
            _: 1,
          },
          8,
          [
            "layout",
            "mobile-layout",
            "is-logo-visible",
            "is-language-switcher-visible",
            "are-social-icon-links-visible",
            "is-cart-visible",
            "is-button-visible",
            "is-mobile-menu-dropdown-open",
            "is-mobile-menu-dropdown-full-screen",
            "mobile-links-alignment",
          ]
        ),
      ],
      6
    )
  );
}
const PC = oe(SC, [
    ["render", CC],
    ["__scopeId", "data-v-e93100a8"],
  ]),
  IC = (e) => {
    const a = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: a };
  },
  EC = (e) => e && Object.values(e).some((n) => xd.includes(n.type)),
  DC = (e) =>
    e && Object.values(e).some((n) => n?.type === "GridEcommerceButton"),
  Iu = ({ blocks: e, elements: n }) => DC(n) || EC(e),
  MC = ({
    siteId: e,
    meta: n,
    blocks: a,
    nav: t,
    pages: o,
    elements: i,
    languageMetaTitle: r,
    languageSwitcherLanguages: s,
    currentLocale: l,
    currentPageId: m,
    isLogoOptimized: g,
    shoppingCartItems: d,
    ecwidCartItemCount: p,
    isOpen: f,
    getPagePathFromId: b,
    ecwidPages: S,
    isEcommerceWebsite: T,
  }) => {
    const { headerHeight: w, headerHeightMobile: y, defaultLocale: D } = n,
      {
        background: C,
        settings: M,
        fontWeight: N,
        fontFamily: R,
        navLinkTextColor: Q,
        navLinkTextColorHover: G,
      } = a.header,
      { imageOrigin: P, imagePath: B } = C,
      {
        cartText: U,
        isCartVisible: j,
        isLanguageSwitcherHidden: V,
        isSticky: E,
        logoPlacement: Y,
        navigationPlacement: $,
        showLogo: z,
        styles: k,
        logoImageOrigin: v,
        logoImagePath: F,
        logoSvg: q,
        headerLayout: te,
        mHeaderLayout: X,
        isMobileMenuDropdownFullScreen: x,
        mobileLinksAlignment: _,
      } = M,
      ae = Object.keys(S).length > 0,
      ve = Iu({ blocks: a, elements: i }),
      se = { ...At(k), ...IC(C) },
      _e = () => {
        if (!g) return Br(v, F, e);
        const Ke = Number.parseInt(k["logo-width"], 10);
        return rt(v, F, e, { width: Ke * 2, quality: 95 });
      },
      me = () => rt(P, B, e, { width: fa }),
      K = (Ke) => {
        const {
          navItemId: ba,
          linkType: $t,
          linkedPageId: Xt,
          isHidden: H,
          rel: ie,
          href: Se,
          target: ce,
          name: Le,
          subItems: tt = [],
        } = Ke;
        return {
          navItemId: ba,
          hasDropdown: !!tt.length,
          isCurrent: m === Xt,
          subItems: tt.map(K),
          target: ce,
          name: $t === Ii ? o[Xt]?.name : Le,
          isHidden: H,
          rel: ie,
          href: $t === Ii ? b({ pageId: Xt }) : Se,
          locale: l,
        };
      },
      le = t.filter(({ isHidden: Ke }) => !Ke).map(K),
      Me = j && (ae || ve),
      ge = !!s.length && !V && l !== jt,
      Fe = () => (T || ve ? d.length : j ? p : 0),
      pt = () => {
        if (!S || !Object.keys(S).length) return null;
        const [Ke] = Object.keys(S);
        return `${b({ pageId: Ke })}?store-page=cart`;
      },
      Qt = r ?? n.metaTitle,
      Et = a.header.components.find((Ke) => i[Ke].type === rl),
      ua = i[Et]?.links || [],
      ca = i[Et]?.settings?.styles || {},
      da = a.header.components.find((Ke) => i[Ke].type === ol),
      Zt = i[da];
    return {
      background: C,
      backgroundColor: C.color,
      backgroundImageUrl: me(),
      backgroundColorContrast: k.contrastBackgroundColor,
      cartText: U,
      cartIconSize: k.cartIconSize,
      cartUrl: pt(),
      currentLocale: l,
      height: w,
      heightMobile: y,
      fontFamily: R,
      navLinkTextColor: Q,
      navLinkTextColorHover: G,
      fontWeight: N,
      isTransparent: C.isTransparent,
      items: le,
      isCartVisible: Me,
      itemsInCart: Fe(),
      isSticky: E,
      isLanguageSwitcherVisible: ge,
      isLogoVisible: z,
      isLogoOptimized: g,
      isOpen: f,
      languageSwitcherLanguages: s,
      logoHeight: a.header?.desktop?.logoHeight,
      logoHref: l !== D && l !== jt ? `/${l}` : "/",
      logoHeightMobile: a.header?.mobile?.logoHeight,
      logoMaxWidth: k["logo-width"],
      logoMaxWidthMobile: k["m-logo-width"],
      logoObjectPosition: k["logo-image-object-position"],
      logoObjectPositionMobile: k["m-logo-image-object-position"],
      logoPlacement: Y,
      logoPlacementMobile: M["m-logoPlacement"] || Y,
      logoSrc: _e(),
      logoSvg: q,
      style: se,
      siteName: Qt,
      socialIconsLinks: ua,
      socialIconsStyles: ca,
      buttonElementId: da,
      buttonElementData: Zt,
      navigationPlacement: $,
      navigationPlacementMobile: M["m-navigationPlacement"] || $,
      headerLayout: te,
      mHeaderLayout: X,
      isMobileMenuDropdownFullScreen: x,
      mobileLinksAlignment: _,
    };
  };
function OC(e) {
  if (Array.isArray(e)) {
    for (var n = 0, a = Array(e.length); n < e.length; n++) a[n] = e[n];
    return a;
  } else return Array.from(e);
}
var hi = !1;
if (typeof window < "u") {
  var zs = {
    get passive() {
      hi = !0;
    },
  };
  window.addEventListener("testPassive", null, zs),
    window.removeEventListener("testPassive", null, zs);
}
var Eu =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  Ja = [],
  vo = !1,
  fi = -1,
  On = void 0,
  Ln = void 0,
  Du = function (n) {
    return Ja.some(function (a) {
      return !!(a.options.allowTouchMove && a.options.allowTouchMove(n));
    });
  },
  ho = function (n) {
    var a = n || window.event;
    return Du(a.target) || a.touches.length > 1
      ? !0
      : (a.preventDefault && a.preventDefault(), !1);
  },
  LC = function (n) {
    if (Ln === void 0) {
      var a = !!n,
        t = window.innerWidth - document.documentElement.clientWidth;
      a &&
        t > 0 &&
        ((Ln = document.body.style.paddingRight),
        (document.body.style.paddingRight = t + "px"));
    }
    On === void 0 &&
      ((On = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  BC = function () {
    Ln !== void 0 && ((document.body.style.paddingRight = Ln), (Ln = void 0)),
      On !== void 0 && ((document.body.style.overflow = On), (On = void 0));
  },
  AC = function (n) {
    return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1;
  },
  xC = function (n, a) {
    var t = n.targetTouches[0].clientY - fi;
    return Du(n.target)
      ? !1
      : (a && a.scrollTop === 0 && t > 0) || (AC(a) && t < 0)
      ? ho(n)
      : (n.stopPropagation(), !0);
  },
  RC = function (n, a) {
    if (!n) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !Ja.some(function (o) {
        return o.targetElement === n;
      })
    ) {
      var t = { targetElement: n, options: {} };
      (Ja = [].concat(OC(Ja), [t])),
        Eu
          ? ((n.ontouchstart = function (o) {
              o.targetTouches.length === 1 && (fi = o.targetTouches[0].clientY);
            }),
            (n.ontouchmove = function (o) {
              o.targetTouches.length === 1 && xC(o, n);
            }),
            vo ||
              (document.addEventListener(
                "touchmove",
                ho,
                hi ? { passive: !1 } : void 0
              ),
              (vo = !0)))
          : LC(a);
    }
  },
  NC = function () {
    Eu
      ? (Ja.forEach(function (n) {
          (n.targetElement.ontouchstart = null),
            (n.targetElement.ontouchmove = null);
        }),
        vo &&
          (document.removeEventListener(
            "touchmove",
            ho,
            hi ? { passive: !1 } : void 0
          ),
          (vo = !1)),
        (fi = -1))
      : BC(),
      (Ja = []);
  };
const HC = re({
    name: "Lightbox",
    setup() {
      const {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isLightboxOpen: o,
          isFirstImage: i,
          isLastImage: r,
          isImageGalleryMode: s,
          onLightboxClickOutside: l,
          handleLightboxNav: m,
          goToNextImage: g,
          goToPreviousImage: d,
        } = an(),
        p = L(null),
        { enableMoveEvents: f } = Ml({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: g,
          onMoveRight: d,
        });
      return (
        De(() => {
          _o(p, (b) => {
            b.target.matches("[data-lightbox-button],[data-lightbox-nav]") ||
              t();
          }),
            f(),
            window.document.addEventListener("keydown", m);
        }),
        Tt(() => {
          t(), f(!1), document.removeEventListener("keydown", m);
        }),
        {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isImageGalleryMode: s,
          isFirstImage: i,
          isLastImage: r,
          isLightboxOpen: o,
          onLightboxClickOutside: l,
          goToNextImage: g,
          goToPreviousImage: d,
          lightboxRef: p,
        }
      );
    },
    async mounted() {
      await this.$nextTick(), RC(this.$refs.lightboxRef);
    },
    beforeUnmount() {
      NC();
    },
  }),
  $C = { key: 0, class: "lightbox", role: "dialog", "aria-modal": "true" },
  UC = { class: "lightbox__container" },
  VC = I(
    "button",
    {
      class: "lightbox__button lightbox__button--nav lightbox__button--prev",
      "data-lightbox-button": "",
    },
    null,
    -1
  ),
  YC = [VC],
  FC = ["src", "alt"],
  WC = I(
    "button",
    {
      "data-lightbox-button": "",
      class: "lightbox__button lightbox__button--nav lightbox__button--next",
    },
    null,
    -1
  ),
  qC = [WC];
function GC(e, n, a, t, o, i) {
  return (
    c(),
    W(
      It,
      { name: "fade", appear: "" },
      {
        default: fe(() => [
          e.isLightboxOpen
            ? (c(),
              h("div", $C, [
                I("button", {
                  class: "lightbox__button lightbox__button--close",
                  title: "close-ligthbox-button",
                  "data-lightbox-button": "",
                  onClick:
                    n[0] ||
                    (n[0] = (...r) => e.closeLightbox && e.closeLightbox(...r)),
                }),
                I("div", UC, [
                  I(
                    "div",
                    {
                      class: Z([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[1] ||
                        (n[1] = (...r) =>
                          e.goToPreviousImage && e.goToPreviousImage(...r)),
                    },
                    YC,
                    2
                  ),
                  Ee(
                    It,
                    { name: "fade", mode: "out-in" },
                    {
                      default: fe(() => [
                        (c(),
                        h(
                          "img",
                          {
                            key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                            ref: "lightboxRef",
                            class: Z([
                              "lightbox__image",
                              {
                                "lightbox__image--multiple":
                                  e.isImageGalleryMode,
                                "lightbox__image--single":
                                  !e.isImageGalleryMode,
                              },
                            ]),
                            src: e.currentLightboxImage.src,
                            alt: e.currentLightboxImage.alt,
                          },
                          null,
                          10,
                          FC
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  I(
                    "div",
                    {
                      class: Z([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[2] ||
                        (n[2] = (...r) =>
                          e.goToNextImage && e.goToNextImage(...r)),
                    },
                    qC,
                    2
                  ),
                ]),
              ]))
            : O("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const jC = oe(HC, [["render", GC]]),
  zC = re({
    __name: "Page",
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isPreviewMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), st((ce) => ({ "765278a2": K.value }));
      const a = e,
        {
          pages: t,
          blocks: o,
          elements: i,
          nav: r,
          meta: s,
          metaTitle: l,
          ecommerceShoppingCart: m,
          cookieBannerDisclaimer: g,
          cookieBannerAcceptText: d,
          cookieBannerDeclineText: p,
          currentLocale: f,
          ecwidPages: b,
          languageSwitcherLanguages: S,
          siteId: T,
          homePageId: w,
          styles: y,
          isNavHidden: D,
          currentPageId: C,
          currentPageData: M,
          getPagePathFromId: N,
          setPageData: R,
        } = Qe(),
        {
          isStoreTypeZyro: Q,
          shoppingCartItems: G,
          setShoppingCartOpen: P,
        } = Nt(),
        { ecwidCartItemCount: B } = dl(),
        { isLightboxOpen: U } = an(),
        j = bc(),
        { shouldMountAnimationsInPreview: V } = nn(),
        E = L(!1),
        Y = L(null),
        $ = L(0),
        { width: z } = Xp(Y),
        k = u(() => M.value.type),
        v = u(() => At(y.value)),
        F = u(() => !D.value),
        q = u(() => C.value === w.value),
        te = u(() => t.value?.[w.value]?.name ?? ""),
        X = u(() => o.value.header.settings.isSticky),
        x = u(() => {
          if (!M.value?.meta?.password || a.isInPreviewMode) return !0;
          const { isPageOpen: ce } = Rl({
            pagePassword: M.value?.meta?.password ?? "",
            locale: f.value,
            pageId: C.value,
          });
          return ce.value;
        }),
        _ = u(() => {
          if (!M.value || M.value.footerSlotIsHidden) return [];
          const ce = Object.keys(o.value).find(
            (Le) => o.value[Le].slot === "footer"
          );
          return ce ? [ce] : [];
        }),
        ae = u(() => a.pageData.siteBlocks || {}),
        ve = u(() =>
          M.value
            ? [...M.value.blocks.filter((ce) => ce !== Ei), ..._.value]
            : []
        ),
        se = u(() =>
          MC({
            siteId: T.value,
            meta: s.value,
            blocks: o.value,
            nav: r.value,
            pages: t.value,
            elements: i.value,
            languageMetaTitle: l.value,
            currentLocale: f.value,
            currentPageId: C.value,
            languageSwitcherLanguages: S.value,
            isLogoOptimized: !0,
            shoppingCartItems: G.value,
            ecwidCartItemCount: B.value,
            getPagePathFromId: ({ pageId: ce }) => N({ pageId: ce }),
            isOpen: E.value,
            ecwidPages: b.value,
          })
        ),
        _e = u(() => se.value.height),
        me = u(() => se.value.heightMobile),
        K = u(() => `${me.value + $.value}px`),
        le = u(() => ve.value.map((ce) => o.value[ce])),
        Me = u(() => Iu({ blocks: o.value, elements: i.value })),
        ge = u(() => s.value.defaultLocale ?? jt),
        Fe = u(() => (Q.value ? m.value?.translations ?? {} : {})),
        pt = u(() => (Q.value ? m.value?.lang ?? "en" : null)),
        Qt = u(() =>
          Me.value
            ? le.value.filter((ce) =>
                ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(
                  ce.type
                )
              )
            : []
        ),
        Et = u(() =>
          Me.value
            ? Object.keys(i.value)
                ?.filter((Le) => i.value[Le].type === "GridEcommerceButton")
                .filter((Le) =>
                  le.value.some((tt) => tt.components?.includes(Le))
                )
                .map((Le) => i.value[Le])
            : []
        ),
        ua = u(() => ve.value.find((ce) => !o.value[ce][Ba]?.isHidden)),
        ca = u(() => ve.value.find((ce) => !o.value[ce][ta]?.isHidden)),
        da = u(() => {
          const { isTransparent: ce } = o.value.header.background ?? {};
          if (ce && F.value && me.value) return `${me.value}px`;
        }),
        Zt = u(() => {
          const { isTransparent: ce } = o.value.header.background ?? {};
          if (ce && F.value && _e.value) return `${_e.value}px`;
        }),
        Ke = (ce) => ({
          ...(ua.value === ce && { "--header-height": Zt.value }),
          ...(ca.value === ce && { "--header-height-mobile": da.value }),
        }),
        ba = u(() => {
          const [ce] = M.value?.blocks ?? [];
          if (o.value?.[ce]?.background?.current === "image")
            return { type: "block-background", id: ce };
          if (o.value?.[ce]?.type === "BlockBlogList")
            return { type: "block-blog-list", id: ce };
          if (o.value?.[ce]?.type === "BlockEcommerceProduct")
            return { type: "block-ecommerce-product", id: ce };
          if (o.value?.[ce]?.type === "BlockEcommerceProductList")
            return { type: "block-ecommerce-product-list", id: ce };
          const tt = ve.value
            .filter((dt) => o.value[dt]?.components?.length > 0)
            .flatMap((dt) =>
              o.value[dt].components.map((de) => ({
                blockId: dt,
                elementId: de,
              }))
            )
            .filter(({ elementId: dt }) => i.value[dt]?.type === "GridImage")
            .map(({ blockId: dt, elementId: de }) => {
              const Ce = i.value[de],
                Te = Ce.mobile ?? Ce.desktop,
                { width: _t, height: Dt } =
                  Te ?? Pc(o.value[dt], Ce.settings.styles.position);
              return { elementId: de, imageRatio: Dt / _t };
            })[0];
          return tt ? { type: "grid-image", id: tt?.elementId } : {};
        }),
        $t = ({ hash: ce, isPreviewMode: Le }) => {
          ce || window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
            tr({ linkToSection: ce, isPreviewMode: Le });
        },
        Xt = () => {
          Me.value && P(!0);
        },
        H = (ce) => {
          const { target: Le, href: tt } = ce,
            de =
              Le === "_blank" || Ha() || a.isInPreviewMode ? "_blank" : "_self";
          window.open(tt, de);
        },
        ie = async (ce) => {
          if (!ce.target) return;
          const Le = ce.target.closest("a");
          if (!Le) return;
          const {
            href: tt,
            pathname: dt,
            origin: de,
            hash: Ce,
            target: Te,
          } = Le;
          if (!tt) return;
          if ((ce.preventDefault(), window.location.origin !== de)) {
            H(Le);
            return;
          }
          const Dt = window.location.pathname === dt,
            Ea = Te === "_blank",
            Io = tt.replace(de, ""),
            Mu = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          Dt && !Ea && $t({ hash: Ce, isPreviewMode: a.isInPreviewMode }),
            Ea && !a.isInPreviewMode && !Ha()
              ? window.open(tt, Te)
              : ((Ea && a.isInPreviewMode) || Mu !== Io) &&
                (a.isInPreviewMode ? j.push(Io) : window.location.assign(Io),
                Ce && $t({ hash: Ce, isPreviewMode: a.isInPreviewMode }),
                (E.value = !1));
        };
      Ne(
        () => a.pageData,
        (ce) => {
          R(ce);
        },
        { immediate: !0 }
      ),
        Ne(
          () => a.pageData,
          async () => {
            a.isInPreviewMode && (V.value = !0);
          }
        ),
        De(() => {
          ($.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0),
            $t({
              hash: window.location.hash,
              isPreviewMode: a.isInPreviewMode,
            });
        });
      const Se = {
        props: a,
        pages: t,
        blocks: o,
        elements: i,
        nav: r,
        meta: s,
        metaTitle: l,
        ecommerceShoppingCart: m,
        cookieBannerDisclaimer: g,
        cookieBannerAcceptText: d,
        cookieBannerDeclineText: p,
        currentLocale: f,
        ecwidPages: b,
        languageSwitcherLanguages: S,
        siteId: T,
        homePageId: w,
        styles: y,
        isNavHidden: D,
        currentPageId: C,
        currentPage: M,
        getPagePathFromId: N,
        setPageData: R,
        isStoreTypeZyro: Q,
        shoppingCartItems: G,
        setShoppingCartOpen: P,
        ecwidCartItemCount: B,
        isLightboxOpen: U,
        router: j,
        shouldMountAnimationsInPreview: V,
        isNavOpen: E,
        blockListRef: Y,
        stickyBarHeight: $,
        screenWidth: z,
        currentPageType: k,
        pageCSSVars: v,
        isHeaderVisible: F,
        isCurrentPageHomepage: q,
        homepageName: te,
        isHeaderSettingsSticky: X,
        shouldRenderPage: x,
        pageBlocksSlotFooter: _,
        siteBlocks: ae,
        currentPageBlocks: ve,
        headerProps: se,
        headerHeight: _e,
        headerHeightMobile: me,
        topBarHeightMobilePx: K,
        currentPageBlockData: le,
        isLocaleWithEcommerceItems: Me,
        defaultLocale: ge,
        ecommerceTranslations: Fe,
        language: pt,
        currentPageEcommerceBlocks: Qt,
        currentPageEcommerceComponents: Et,
        firstVisibleDesktopBlockId: ua,
        firstVisibleMobileBlockId: ca,
        visibleMobileHeaderHeight: da,
        visibleDesktopHeaderHeight: Zt,
        getHeaderHeightStyles: Ke,
        lcp: ba,
        scrollToHash: $t,
        handleCartClick: Xt,
        redirectToThirdPartyLink: H,
        handleGlobalClick: ie,
        StickyTrigger: Tc,
        CookieBanner: jc,
        BlockUser: Ry,
        BlockStickyBarProviderUser: Yy,
        PasswordPage: ib,
        EcommerceShoppingCartProviderUser: Gb,
        EcommerceModalRoot: rT,
        BlockHeader: PC,
        Lightbox: jC,
        get BLOCK_STICKY_BAR_ID() {
          return Ei;
        },
      };
      return (
        Object.defineProperty(Se, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Se
      );
    },
  }),
  KC = { ref: "blockListRef", class: "blocks" };
function QC(e, n, a, t, o, i) {
  return (
    c(),
    h(
      pe,
      null,
      [
        t.shouldRenderPage
          ? (c(),
            h(
              "main",
              {
                key: 0,
                style: xe(t.pageCSSVars),
                class: "page",
                onClick: t.handleGlobalClick,
              },
              [
                t.isHeaderSettingsSticky
                  ? (c(), W(t.StickyTrigger, { key: 0 }))
                  : O("", !0),
                !t.isHeaderSettingsSticky && t.siteBlocks[t.BLOCK_STICKY_BAR_ID]
                  ? (c(),
                    W(
                      t.BlockStickyBarProviderUser,
                      {
                        key: 1,
                        "data-block-id": t.BLOCK_STICKY_BAR_ID,
                        data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                        components: t.elements,
                        lcp: t.lcp,
                      },
                      null,
                      8,
                      ["data-block-id", "data", "components", "lcp"]
                    ))
                  : O("", !0),
                I(
                  "div",
                  {
                    class: Z([
                      "top-blocks",
                      {
                        "top-blocks--sticky": t.headerProps.isSticky,
                        "top-blocks--preview-mode": t.props.isInPreviewMode,
                      },
                    ]),
                  },
                  [
                    t.isHeaderSettingsSticky &&
                    t.siteBlocks[t.BLOCK_STICKY_BAR_ID]
                      ? (c(),
                        W(
                          t.BlockStickyBarProviderUser,
                          {
                            key: 0,
                            "data-block-id": t.BLOCK_STICKY_BAR_ID,
                            data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            components: t.elements,
                            lcp: t.lcp,
                          },
                          null,
                          8,
                          ["data-block-id", "data", "components", "lcp"]
                        ))
                      : O("", !0),
                    t.isHeaderVisible
                      ? (c(),
                        W(
                          t.BlockHeader,
                          Ge({ key: 1 }, t.headerProps, {
                            "is-in-preview-mode": t.props.isInPreviewMode,
                            "is-preview-mobile-view": a.isPreviewMobileView,
                            "block-sticky-bar":
                              t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            onToggleVisibility:
                              n[0] ||
                              (n[0] = (r) => (t.isNavOpen = !t.isNavOpen)),
                            onCartClick: t.handleCartClick,
                          }),
                          null,
                          16,
                          [
                            "is-in-preview-mode",
                            "is-preview-mobile-view",
                            "block-sticky-bar",
                          ]
                        ))
                      : O("", !0),
                  ],
                  2
                ),
                I(
                  "div",
                  KC,
                  [
                    (c(!0),
                    h(
                      pe,
                      null,
                      ke(
                        t.currentPageBlocks,
                        (r) => (
                          c(),
                          W(
                            t.BlockUser,
                            {
                              id: t.blocks[r].htmlId || r,
                              key: r,
                              data: t.blocks[r],
                              blocks: t.blocks,
                              lcp: t.lcp,
                              "page-id": t.currentPageId,
                              "ecommerce-translations": t.ecommerceTranslations,
                              "current-page-type": t.currentPageType,
                              components: t.elements,
                              "screen-width": t.screenWidth,
                              style: xe(t.getHeaderHeightStyles(r)),
                              "current-locale": t.currentLocale,
                              "is-cart-visible": t.headerProps.isCartVisible,
                              "is-in-preview-mode": t.props.isInPreviewMode,
                              "is-first-visible-desktop-block":
                                t.firstVisibleDesktopBlockId === r,
                              "is-first-visible-mobile-block":
                                t.firstVisibleMobileBlockId === r,
                            },
                            null,
                            8,
                            [
                              "id",
                              "data",
                              "blocks",
                              "lcp",
                              "page-id",
                              "ecommerce-translations",
                              "current-page-type",
                              "components",
                              "screen-width",
                              "style",
                              "current-locale",
                              "is-cart-visible",
                              "is-in-preview-mode",
                              "is-first-visible-desktop-block",
                              "is-first-visible-mobile-block",
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                t.meta.isCookieBarEnabled
                  ? (c(),
                    W(
                      t.CookieBanner,
                      {
                        key: 2,
                        disclaimer: t.cookieBannerDisclaimer || "",
                        "accept-text": t.cookieBannerAcceptText,
                        "decline-text": t.cookieBannerDeclineText,
                        "site-meta": t.meta,
                      },
                      null,
                      8,
                      ["disclaimer", "accept-text", "decline-text", "site-meta"]
                    ))
                  : O("", !0),
                t.isLocaleWithEcommerceItems
                  ? (c(),
                    W(
                      t.EcommerceShoppingCartProviderUser,
                      {
                        key: 3,
                        "ecommerce-translations": t.ecommerceTranslations,
                        language: t.language,
                        "is-header-sticky": t.headerProps.isSticky,
                        "is-nav-hidden": !t.isHeaderVisible,
                        "current-page-ecommerce-blocks":
                          t.currentPageEcommerceBlocks,
                        "current-page-ecommerce-components":
                          t.currentPageEcommerceComponents,
                        "is-in-preview-mode": t.props.isInPreviewMode,
                      },
                      null,
                      8,
                      [
                        "ecommerce-translations",
                        "language",
                        "is-header-sticky",
                        "is-nav-hidden",
                        "current-page-ecommerce-blocks",
                        "current-page-ecommerce-components",
                        "is-in-preview-mode",
                      ]
                    ))
                  : O("", !0),
                Ee(
                  t.EcommerceModalRoot,
                  {
                    "ecommerce-translations": t.ecommerceTranslations,
                    language: t.language,
                    "current-locale": t.currentLocale,
                    "is-cart-visible": t.headerProps.isCartVisible,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "ecommerce-translations",
                    "language",
                    "current-locale",
                    "is-cart-visible",
                    "is-in-preview-mode",
                  ]
                ),
              ],
              4
            ))
          : (c(),
            W(
              t.PasswordPage,
              {
                key: 1,
                "page-id": t.currentPageId,
                locale: t.currentLocale,
                "default-locale": t.defaultLocale,
                "in-preview-mode": a.isInPreviewMode,
                "current-page-data": t.currentPage,
                "homepage-name": t.homepageName,
                "is-current-page-homepage": t.isCurrentPageHomepage,
              },
              null,
              8,
              [
                "page-id",
                "locale",
                "default-locale",
                "in-preview-mode",
                "current-page-data",
                "homepage-name",
                "is-current-page-homepage",
              ]
            )),
        t.isLightboxOpen ? (c(), W(t.Lightbox, { key: 2 })) : O("", !0),
      ],
      64
    )
  );
}
const aP = oe(zC, [["render", QC]]);
export { aP as default };
