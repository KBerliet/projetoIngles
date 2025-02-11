import {
  u as lt,
  v as Wt,
  w as Ie,
  T as Et,
  a as Oe,
  s as nr,
  b as el,
  c as Uu,
  r as Si,
} from "./scrollToSection.CI2bbrrd.js";
import {
  i as Or,
  r as L,
  c as u,
  _ as oe,
  d as ie,
  o as De,
  a as Ct,
  b as c,
  e as h,
  f as I,
  t as J,
  g as O,
  n as Pt,
  h as X,
  j as xe,
  F as ge,
  k as ke,
  l as je,
  w as ce,
  m as Ae,
  p as Be,
  q as W,
  s as Ee,
  u as Ge,
  v as tt,
  x as ee,
  y as ve,
  z as un,
  A as Lr,
  B as Br,
  C as Ne,
  D as Ot,
  E as Lt,
  G as Yn,
  H as tl,
  I as ma,
  J as bt,
  K as A,
  L as al,
  M as nl,
  N as ol,
  O as Ln,
  P as Vu,
  Q as Yu,
  R as or,
  S as Ua,
  T as Tt,
  U as Ti,
  V as Fu,
  W as Wu,
  X as qu,
} from "./_plugin-vue_export-helper.DmTyjxEQ.js";
import {
  S as At,
  L as rr,
  a as rl,
  M as ir,
  D as Gu,
  b as ga,
  c as cn,
  E as Jt,
  d as La,
  e as il,
  f as sl,
  Z as ju,
  g as zu,
  h as Ku,
  P as ll,
  i as Qu,
  A as Zu,
  j as Xu,
  k as Ju,
  l as Ar,
  I as Ci,
  m as Do,
  n as ec,
  o as tc,
  p as ac,
  q as Pi,
  r as Bn,
  s as An,
  t as Mo,
  u as ul,
  v as nc,
  w as oc,
  x as rc,
  y as ic,
  z as Ii,
  B as cl,
  C as Ei,
  F as sc,
  G as lc,
  H as uc,
  J as sr,
  K as Di,
  N as cc,
  O as dc,
  Q as mc,
  R as gc,
  T as dl,
  U as Tn,
  V as Mi,
  W as Oi,
  X as pc,
  Y as vc,
  _ as hc,
  $ as fc,
  a0 as yc,
  a1 as ml,
  a2 as bc,
  a3 as _c,
  a4 as wc,
  a5 as kc,
  a6 as Li,
  a7 as Bi,
} from "./index.BV9R-oP_.js";
/* empty css                        */ import {
  g as gl,
  a as Sc,
  s as Ai,
  b as Tc,
  i as pl,
  c as Na,
  d as Cc,
} from "./addDocumentElements.ebBXy1z2.js";
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ var xi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(xi || (xi = {}));
var Ri;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ri || (Ri = {}));
var Ni;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Ni || (Ni = {}));
const Pc = Symbol(""),
  Ic = Symbol("");
function Ec() {
  return Or(Pc);
}
function Dc() {
  return Or(Ic);
}
const Hi = L(null),
  Xe = L({}),
  Ze = () => {
    const e = ($) => {
        Hi.value = $;
      },
      n = ($) => {
        Xe.value = $;
      },
      a = u(() => Xe.value.pages || {}),
      t = u(() => Xe.value.blocks),
      o = u(() => Xe.value.elements),
      i = u(() => Xe.value.nav),
      r = u(() => Xe.value.homePageId),
      s = u(() => Xe.value.isNavHidden),
      l = u(() => Xe.value.cookieBannerAcceptText),
      d = u(() => Xe.value.cookieBannerDisclaimer),
      g = u(() => Xe.value.cookieBannerDeclineText),
      m = u(() => Xe.value.blogReadingTimeText),
      p = u(() => Xe.value.meta),
      f = u(() => Xe.value.metaTitle),
      b = u(() => Xe.value.forms),
      S = u(() => Xe.value.styles),
      T = u(() => Xe.value.domain),
      w = u(() => Xe.value.siteId),
      y = u(() => Xe.value.ecommerceShoppingCart),
      D = u(() => Xe.value.blogCategories),
      C = u(() => Xe.value.languageSwitcherLanguages),
      M = u(() => Xe.value.currentPageId),
      R = u(() => a.value[M.value]),
      N = u(() => Xe.value.currentLocale),
      Q = u(() => Xe.value.languageKeys),
      G = u(() => Xe.value.ecwidPages),
      P = ({ pageId: $ }) => {
        if (!a.value[$]) return null;
        const K = a.value[$].slug;
        return [At, p.value.defaultLocale].includes(N.value)
          ? r.value === $
            ? "/"
            : `/${K}`
          : r.value === $
          ? `/${N.value}`
          : `/${N.value}/${K}`;
      };
    return {
      website: Hi,
      pageData: Xe,
      pages: a,
      blocks: t,
      elements: o,
      nav: i,
      homePageId: r,
      isNavHidden: s,
      cookieBannerAcceptText: l,
      cookieBannerDisclaimer: d,
      cookieBannerDeclineText: g,
      blogReadingTimeText: m,
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
      currentLocale: N,
      languageKeys: Q,
      ecwidPages: G,
      currentPageData: R,
      setWebsite: e,
      setPageData: n,
      getPagePathFromId: P,
      getButtonHref: ({
        isFormButton: $,
        linkedPageId: K,
        linkType: V,
        href: E,
      }) => ($ ? null : E || (V === rr && K ? P({ pageId: K }) : E)),
    };
  },
  $i = L(!0),
  vl = () => {
    const e = (n) => {
      $i.value = n;
    };
    return { hasUserScrolled: u(() => !$i.value), setIntersectingState: e };
  },
  Mc = ie({
    __name: "StickyTrigger",
    setup(e, { expose: n }) {
      n();
      const a = { threshold: 1 },
        t = L(null),
        o = L(null),
        { setIntersectingState: i } = vl();
      De(() => {
        (o.value = new IntersectionObserver(([{ isIntersecting: s }]) => {
          i(s);
        }, a)),
          t.value && o.value.observe(t.value);
      }),
        Ct(() => {
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
  Oc = { ref: "stickyTriggerRef", class: "sticky-trigger" };
function Lc(e, n, a, t, o, i) {
  return c(), h("div", Oc, null, 512);
}
const Bc = oe(Mc, [["render", Lc]]),
  Ui = 1600,
  Vi = 1224,
  Yi = 12,
  Ac = 1224,
  pa = 1920,
  xc = (e, n) => {
    const [a, t, o, i] = n.split("/").map(Number.parseFloat),
      { styles: r } = e.settings ?? {},
      s = Number.parseFloat(r?.["row-size"]) ?? 48,
      l = Number.parseFloat(r?.["column-gap"]) ?? 24,
      d = Number.parseFloat(r?.["row-gap"]) ?? 16,
      g = (Vi - (Yi - 1) * l) / Yi,
      m = (pa - Ui) / 2 + l,
      p = (Ui - Vi) / 2 - l;
    let f = pa;
    const b = o - a,
      S = b * s + (b - 1) * d;
    return (
      t !== 1 && (f -= m),
      i !== 17 && (f -= m),
      t > 2 && (f -= p),
      i < 16 && (f -= p),
      t > 3 && (f -= (t - 3) * (g + l)),
      i < 15 && (f -= (15 - i) * (g + l)),
      i - t === 1 && (f = g),
      { width: f, height: S }
    );
  },
  Fi = (e) => Object.prototype.toString.call(e) === "[object Object]",
  Ja = (e) => {
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
  Rc = ["padding", "m-padding", "block-padding"],
  Nc = ["border-radius"],
  xt = (e, n = "") =>
    Fi(e)
      ? Object.entries(e).reduce((a, [t, o]) => {
          const i = n ? `${n}-${t}` : `--${t}`;
          if (Fi(o)) return { ...a, ...xt(o, i) };
          const r = Rc.includes(t)
            ? Object.entries(Ja(o)).reduce(
                (s, [l, d]) => ({ ...s, [`${i}-${l}`]: d, [i]: o }),
                {}
              )
            : { [i]: o };
          return { ...a, ...(Nc.includes(t) ? { [i]: `${o}px` } : r) };
        }, {})
      : {},
  Oo = L([]),
  hl = () => {
    const e = u(() => Oo.value.reduce((o, i) => o + i.quantity, 0)),
      n = () => {
        const o = window.Ecwid.Controller.getEntryPage();
        window.Ecwid.openPage(o.type.toLowerCase(), { id: o.categoryId });
      },
      a = () => {
        window.Ecwid && window.Ecwid.openPage("cart");
      },
      t = (o) => {
        Oo.value = o;
      };
    return {
      ecwidCartItems: u(() => Oo.value),
      ecwidCartItemCount: e,
      openCart: a,
      setEcwidCartItems: t,
      openEcwidHomepage: n,
    };
  },
  Hc = ({ path: e, languageKeys: n = [], defaultLocale: a = "system" }) => {
    const [t, o] = e.split("/").filter((i) => i !== "");
    return !n || !n.length > 1
      ? { locale: a, slug: t }
      : n.includes(t)
      ? { locale: t, slug: o }
      : { locale: a ?? At, slug: t };
  },
  xr = (e, n, a) =>
    !e || !n
      ? null
      : e === "assets"
      ? `https://assets.zyrosite.com/${a}/${n}`
      : e === "unsplash"
      ? `https://images.unsplash.com/${n}`
      : n,
  $c = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
  Uc = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Vc = /^\d+$/,
  Yc = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  Qa = (e) => {
    const n = e.split(/[/\\]/).pop(),
      a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase();
  },
  Fc = [
    rl,
    "https://assets.zyrosite.space",
    "https://assets.zyrosite.com",
    "https://cdn.zyrosite.com",
  ],
  Wc = "https://images.unsplash.com",
  qc = "cdn-cgi/image",
  Rr = [{ width: 360, height: 640 }],
  Nr = [1, 2, 2.625, 3],
  Gc = [{ width: 1440 }, { width: 1920 }],
  Hr = [1, 2],
  $r = 16,
  xn = (e, n = $r) =>
    [`(min-width: ${ir}px) ${e}px`, `calc(100vw - ${n * 2}px)`].join(", "),
  jc = (e, n, a = {}) => {
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
    return `${e}/${qc}/${o}/${i}`;
  },
  zc = (e, n = {}) => {
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
  it = (e, n, a, t = {}) => {
    const o = xr(e, n, a);
    if (!o) return null;
    if (Qa(o) === "svg" || Qa(o) === "ico" || Qa(o) === "gif") return o;
    const i = Fc.find((r) => o.includes(r));
    return i ? jc(i, o, t) : o.includes(Wc) ? zc(o, t) : o;
  },
  va = (e, n, a, t = {}) => {
    const o = Gc.map((s) =>
      Hr.map((l) => {
        const d = Math.round(s.width * l);
        return `${it(e, n, a, { ...t, width: d })} ${d}w`;
      })
    ).join(",");
    return `${Rr.map((s) =>
      Nr.map((l) => {
        const d = Math.round(s.width * l),
          g = { ...t, width: d };
        return (
          t.isMobileFullScreen && (g.height = Math.round(s.height * l)),
          `${it(e, n, a, g)} ${d}w`
        );
      })
    ).join(",")},${o}`;
  },
  Ba = (e, n, a, t = {}) => {
    if (!t.width) return va(e, n, a, t);
    const o = Hr.map((l) => {
        const d = Math.round(t.width * l),
          g = Math.round(t.height * l);
        return `${it(e, n, a, { ...t, width: d, height: g })} ${d}w`;
      }).join(","),
      i = (t.mobilePadding ?? $r) * 2;
    return `${Rr.map((l) => {
      const d = l.width - i;
      return Nr.map((g) => {
        const m = t.width / t.height,
          p = Math.round(d * g),
          f = Math.round(p / m);
        return `${it(e, n, a, { ...t, width: p, height: f })} ${p}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  Kc = (e, n, a, t = {}) => {
    if (!t.width) return va(e, n, a, t);
    const o = Hr.map((s) => {
        const l = Math.round(t.width * s),
          d = Math.round(t.height * s);
        return `${it(e, n, a, { ...t, width: l, height: d })} ${l}w`;
      }).join(","),
      i = (t.mobilePadding ?? $r) * 2;
    return `${Rr.map((s) => {
      const l = Math.round(
        (s.width - i + t.columnGap) / t.columnCount - t.columnGap
      );
      return Nr.map((d) => {
        const g = Math.round(l * d),
          m = Math.round(l * d);
        return `${it(e, n, a, {
          ...t,
          width: m,
          height: !t.isMasonryLayout && m,
        })} ${g}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  Qc = () => {
    const { meta: e } = Ze(),
      n = L("z-cookies-consent"),
      a = L("1"),
      t = u(() => !!a.value),
      o = u(() => a.value === "1"),
      i = u(() => a.value !== "0");
    return (
      De(() => {
        const l = gl(window.location.hostname);
        (n.value = `z-cookies-consent-${l}`), (a.value = Sc(n.value));
      }),
      {
        acceptCookies: () => {
          Ai(n.value, 1, 365),
            (a.value = "1"),
            Tc({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          Ai(n.value, 0, 1), (a.value = "0");
        },
        hasUserConsentedCookieBanner: t,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i,
      }
    );
  },
  Zc = ie({
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
        } = Qc(),
        i = {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
          get isAppPrerendering() {
            return pl;
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
  Xc = { key: 0, class: "cookie-banner" },
  Jc = { class: "cookie-banner__frame" },
  ed = { class: "cookie-banner__text" },
  td = { class: "cookie-banner__controls" };
function ad(e, n, a, t, o, i) {
  return !t.isAppPrerendering && !t.hasUserConsentedCookieBanner
    ? (c(),
      h("div", Xc, [
        I("div", Jc, [
          I("p", ed, J(a.disclaimer), 1),
          I("div", td, [
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
const nd = oe(Zc, [["render", ad]]),
  od = (e) => {
    const n = e.colors.map((a) => a.value).join(", ");
    return `linear-gradient(${e.angle}deg, ${n})`;
  },
  rd = ie({
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
        lt((m) => ({
          "332595fc": t.value,
          "73bc8390": o.value.xStart,
          "7052d252": o.value.yStart,
          47990031: o.value.xEnd,
          "07bec722": r.value,
        }));
      const a = e,
        t = u(() =>
          a.type === "gradient" && a.gradient
            ? od(a.gradient)
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
        l = L(Or("mobileFrame")),
        d = u(() => {
          if (a.isInPreviewMode && a.isMobile && a.isFixed && l.value) {
            const m = l.value.getBoundingClientRect();
            return {
              height: `${m.height}px`,
              width: `${m.width}px`,
              top: `${m.top}px`,
              left: "50%",
              transform: "translate(-50%, 0)",
            };
          }
          return {};
        });
      De(() => {
        Pt(() => {
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
        mobilePreviewStyles: d,
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
  id = ["alt", "src", "srcset", "loading"];
function sd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        ref: "blockBackgroundRef",
        class: X([
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
                class: X([
                  "block-background__image",
                  { "block-background__image--fixed": a.isFixed },
                ]),
                style: xe(t.mobilePreviewStyles),
              },
              null,
              14,
              id
            ))
          : O("", !0),
        t.isBackgroundOverlayShown
          ? (c(),
            h(
              "div",
              {
                key: 1,
                class: X([
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
const Ur = oe(rd, [["render", sd]]),
  ld = ie({
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
  ud = { class: "categories" },
  cd = ["onClick"];
function dd(e, n, a, t, o, i) {
  return (
    c(),
    h("p", ud, [
      (c(!0),
      h(
        ge,
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
              cd
            )
          )
        ),
        128
      )),
    ])
  );
}
const fl = oe(ld, [
    ["render", dd],
    ["__scopeId", "data-v-17a7aef3"],
  ]),
  md = ie({
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
          return Gu;
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
  gd = { class: "blog-list-item-meta" },
  pd = { class: "font-secondary" },
  vd = { class: "blog-list-item-meta__author-name" },
  hd = { class: "blog-list-item-meta__subtitle" },
  fd = { key: 0 },
  yd = { key: 1 };
function bd(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", gd, [
      I("div", pd, [
        ce((c(), h("p", vd, [Ae(J(a.authorName), 1)])), [
          [Wt, a.showName],
          [r, "blog-author"],
        ]),
        ce(
          I(
            "p",
            hd,
            [
              a.showDate && a.date
                ? (c(), h("span", fd, J(a.date), 1))
                : O("", !0),
              a.showMinutes
                ? (c(),
                  h(
                    "span",
                    yd,
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
          [[Wt, a.showDate || a.showMinutes]]
        ),
      ]),
    ])
  );
}
const yl = oe(md, [
    ["render", bd],
    ["__scopeId", "data-v-88ffe988"],
  ]),
  bl = (e) => new Date(e).toLocaleDateString("en-US"),
  Vr = ie({
    name: "BlockBlogHeader",
    components: { BlockBlogListItemMeta: yl, BlockBlogListItemCategories: fl },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const a = u(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: bl,
        DATA_ATTRIBUTE_ANIMATION_ROLE: ga,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: cn,
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
  Wi = () => {
    lt((e) => ({ "21ab201a": e.blogTitleTextSize }));
  },
  qi = Vr.setup;
Vr.setup = qi ? (e, n) => (Wi(), qi(e, n)) : Wi;
const _d = { class: "block-blog-header__content" },
  wd = { class: "font-primary block-blog-header__title" },
  kd = { key: 0, class: "font-secondary block-blog-header__description" };
function Sd(e, n, a, t, o, i) {
  const r = Be("BlockBlogListItemCategories"),
    s = Be("BlockBlogListItemMeta"),
    l = je("qa");
  return ce(
    (c(),
    h(
      "div",
      tt({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        I("div", _d, [
          ce((c(), h("h1", wd, [Ae(J(e.meta.title), 1)])), [
            [l, "blog-label-posttitle"],
          ]),
          e.shownItems.description
            ? ce((c(), h("p", kd, [Ae(J(e.meta.description), 1)])), [
                [l, "blog-label-postdescription"],
              ])
            : O("", !0),
          e.areCategoriesShown
            ? ce(
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
const Td = oe(Vr, [
    ["render", Sd],
    ["__scopeId", "data-v-dfe4e670"],
  ]),
  lr = L(!1),
  Gi = L(null),
  ur = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: u(() => Gi.value === e && lr.value),
    toggleSearchDropdown: (t) => {
      (Gi.value = e), (lr.value = t);
    },
  }),
  Cn = 16,
  ra = 1224,
  zt = 360,
  _l = zt - Cn * 2,
  ji = 16,
  Cd = ie({
    __name: "BlockLayoutWrapper",
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        lt((l) => ({
          c467b54c: i.value,
          "2c660f9c": o.value,
          "6ced7b1e": t.value,
          "1f9bbfe2": r.value,
        }));
      const a = e,
        t = u(() =>
          a.isBlockResponsive && !a.isInPreviewMode
            ? `0 ${(Cn * 100) / zt}vw`
            : `0 ${Cn}px`
        ),
        o = u(() => `${zt}px`),
        i = u(() => `${ra}px`),
        r = u(() => `0 ${Cn}px`),
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
function Pd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
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
const Id = oe(Cd, [["render", Pd]]),
  zi = ({ blockElements: e, elementPositionKey: n }) =>
    e?.length ? Math.max(...e.map((a) => a[n].top + a[n].height)) : 0,
  Ed = [il, sl],
  Dd = ({ lowestElementBottom: e, sectionMinHeight: n }) => {
    const t = e >= n ? 0 : n - e;
    return e ? `${t}px` : "1fr";
  },
  no = ({ blockElementsWithPosition: e }) => {
    try {
      const n = e.flatMap(({ position: t }) => [t.top, t.height + t.top]);
      return [...new Set([0, ...n])].sort((t, o) => t - o);
    } catch (n) {
      console.error(n);
    }
  },
  cr = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: n,
    elementPosition: a,
  }) => {
    const { top: t, left: o, width: i, height: r } = a,
      s = e.indexOf(t) + 1,
      l = e.indexOf(t + r) + 1,
      d = n.indexOf(o) + 1,
      g = n.indexOf(o + i) + 1;
    return { rowStart: s, rowEnd: l, columnStart: d, columnEnd: g };
  },
  oo = ({ blockElementsWithPosition: e, blockWidth: n }) => {
    const a = e.flatMap(({ position: o }) => [o.left, o.width + o.left]);
    return [...new Set([0, ...a, n])].sort((o, i) => o - i);
  },
  Rn = ({ blockElements: e, elementPositionKey: n }) =>
    e.map((a) => ({ ...a, position: a[n] })),
  Ki = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
  }) => {
    const t = n === Jt ? _l : ra,
      o = Rn({ blockElements: e, elementPositionKey: n });
    return oo({ blockElementsWithPosition: o, blockWidth: t })
      .map((l, d, g) => (d === 0 ? l : l - g[d - 1]))
      .filter((l) => l !== 0)
      .map((l) => (a ? `${(l / t) * 100}%` : `${l}px`))
      .join(" ");
  },
  Md = ({ gridRows: e }) => e.filter((n) => n !== 0),
  Od = ({ gridRows: e }) => e.map((n) => `${n}px`),
  Ld = ({ gridRows: e }) => e.map((n) => `minmax(${n}px, auto)`),
  Bd = ({ gridRows: e, responsiveRows: n, isMobile: a }) =>
    e.map((t, o) =>
      n.includes(o + 1) ? "auto" : `${(t * 100) / (a ? zt : ra)}vw`
    ),
  Lo = ({ gridRows: e, lastRowHeight: n }) => `${e.join(" ")} ${n}`,
  zn = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
    responsiveRows: t,
    lowestElementBottom: o,
    sectionMinHeight: i,
  }) => {
    const r = n === Jt,
      s = Rn({ blockElements: e, elementPositionKey: n }),
      d = no({ blockElementsWithPosition: s }).map((f, b, S) =>
        b === 0 ? f : f - S[b - 1]
      ),
      g = Dd({ lowestElementBottom: o, sectionMinHeight: i }),
      m = Md({ gridRows: d });
    if (!a) {
      const f = Od({ gridRows: m });
      return Lo({ gridRows: f, lastRowHeight: g });
    }
    if (!t) {
      const f = Ld({ gridRows: m });
      return Lo({ gridRows: f, lastRowHeight: g });
    }
    const p = Bd({ gridRows: m, responsiveRows: t, isMobile: r });
    return Lo({ gridRows: p, lastRowHeight: g });
  },
  Qi = ({ blockElements: e, elementPositionKey: n }) => {
    const a = Rn({ blockElements: e, elementPositionKey: n }),
      t = no({ blockElementsWithPosition: a }),
      o = oo({ blockElementsWithPosition: a, blockWidth: n === Jt ? _l : ra });
    return e
      .filter((i) => !Ed.includes(i.type))
      .reduce((i, r) => {
        const { rowEnd: s, rowStart: l } = cr({
            rowTopsUniqueSorted: t,
            columnsLeftUniqueSorted: o,
            elementPosition: r[n],
          }),
          d = s > l ? s - l : 1,
          g = [...new Array(d).keys()].map((m, p) => l + p);
        return i.some((m) => g.includes(m)) ? i : [...i, s - 1];
      }, []);
  },
  Ad = (e, n) => {
    const a = Rn({ blockElements: e, elementPositionKey: La }),
      t = no({ blockElementsWithPosition: a }),
      o = oo({ blockElementsWithPosition: a, blockWidth: ra }),
      i = Rn({ blockElements: e, elementPositionKey: Jt }),
      r = no({ blockElementsWithPosition: i }),
      s = oo({ blockElementsWithPosition: i, blockWidth: ra });
    return e.map((l) => {
      const {
          rowStart: d,
          rowEnd: g,
          columnStart: m,
          columnEnd: p,
        } = cr({
          rowTopsUniqueSorted: t,
          columnsLeftUniqueSorted: o,
          elementPosition: l.desktop,
        }),
        {
          rowStart: f,
          rowEnd: b,
          columnStart: S,
          columnEnd: T,
        } = cr({
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
            "grid-row": `${d}/${g}`,
            "grid-column": `${m}/${p}`,
            "m-grid-row": `${f}/${b}`,
            "m-grid-column": `${S}/${T}`,
          },
        },
      };
    });
  },
  dr = ({
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
          ? zi({ blockElements: o.value, elementPositionKey: Jt })
          : null
      ),
      r = u(() =>
        o?.value?.length
          ? zi({ blockElements: o.value, elementPositionKey: La })
          : null
      ),
      s = u(() =>
        e.value.mobile?.minHeight && i.value
          ? "auto"
          : `${e.value.mobile?.minHeight || ji}px`
      ),
      l = u(() =>
        e.value.desktop?.minHeight && r.value
          ? "auto"
          : `${e.value.desktop?.minHeight}px`
      ),
      d = u(() => e.value.components.some((C) => !n.value[C].mobile)),
      g = u(() =>
        zn({
          blockElements: o.value,
          elementPositionKey: La,
          buildResponsiveGrid: t.value,
        })
      ),
      m = u(() =>
        Ki({
          blockElements: o.value,
          elementPositionKey: La,
          buildResponsiveGrid: t.value,
        })
      ),
      p = u(() =>
        Ki({
          blockElements: o.value,
          elementPositionKey: Jt,
          buildResponsiveGrid: t.value,
        })
      ),
      f = u(() => Qi({ blockElements: o.value, elementPositionKey: Jt })),
      b = u(() =>
        zn({
          blockElements: o.value,
          elementPositionKey: Jt,
          buildResponsiveGrid: t.value,
          responsiveRows: f.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      S = u(() =>
        zn({
          blockElements: o.value,
          elementPositionKey: Jt,
          buildResponsiveGrid: t.value,
        })
      ),
      T = u(() => Qi({ blockElements: o.value, elementPositionKey: La })),
      w = u(() =>
        zn({
          blockElements: o.value,
          elementPositionKey: La,
          buildResponsiveGrid: t.value,
          responsiveRows: T.value,
          lowestElementBottom: r.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      y = u(() => Ad(o.value, e.value.zindexes)),
      D = u(() => ({
        "--m-grid-template-rows": b.value,
        "--t-grid-template-rows": S.value,
        "--small-desktop-grid-template-rows": w.value,
        "--grid-template-rows": g.value,
        "--m-grid-template-columns": p.value,
        "--grid-template-columns": m.value,
        "--m-block-min-height": s.value,
        "--t-block-min-height": `${e.value.mobile?.minHeight || ji}px`,
        "--small-desktop-block-min-height": l.value,
        "--block-min-height": `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: o,
      layoutElements: y,
      buildResponsiveGrid: t,
      layoutCSSVars: D,
      isMobileLegacy: d,
    };
  },
  xd = ie({
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
          ...xt(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { "--hidden-element-z-index": 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { "--m-hidden-element-z-index": 0 }),
          ...(this.isForcedOnTop && { "--z-index": ju }),
        };
      },
    },
  });
function Rd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
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
const Nd = oe(xd, [["render", Rd]]),
  Hd = ie({
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
function $d(e, n, a, t, o, i) {
  return (
    c(),
    W(
      un(a.tagName),
      {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: X(["grid-button", t.computedClass]),
        "aria-hidden": a.isLoading,
        style: xe(t.buttonCSSVars),
        onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
        onDrag: n[1] || (n[1] = (r) => e.$emit("drag", r)),
        onDragstart: n[2] || (n[2] = (r) => e.$emit("dragstart", r)),
      },
      { default: ve(() => [Ae(J(a.content), 1)]), _: 1 },
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
const Va = oe(Hd, [
    ["render", $d],
    ["__scopeId", "data-v-4a176f12"],
  ]),
  Nn = (e, { href: n } = {}) => ({
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
  Ud = {
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
        { getButtonHref: t } = Ze(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: d,
          content: g,
          fontSizeMobile: m,
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
          borderColorHover: R,
        } = Nn(a, {
          href: u(() =>
            t({
              isFormButton: a.data.settings.isFormButton,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        N = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: d,
          content: g,
          fontSizeMobile: m,
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
          borderColorHover: R,
          computed: u,
          get useSiteGlobal() {
            return Ze;
          },
          GridButton: Va,
          get useGridButton() {
            return Nn;
          },
        };
      return (
        Object.defineProperty(N, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        N
      );
    },
  };
function Vd(e, n, a, t, o, i) {
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
const Yd = oe(Ud, [["render", Vd]]),
  Fd = (e, n) => {
    const a = u(() => n.ecommerce?.products),
      t = u(() => e.data.settings?.productId),
      o = u(() => e.data.settings?.productVariantId);
    return { storeProducts: a, productId: t, productVariantId: o };
  },
  Bo = L(""),
  Zi = L({}),
  Rt = () => ({
    openEcommerceModal: (t) => {
      Bo.value = t;
    },
    closeEcommerceModal: () => {
      Bo.value = null;
    },
    openEcommerceModalName: Bo,
    productPreviewData: Zi,
    setProductPreviewData: (t) => {
      Zi.value = t;
    },
  }),
  Yr = "https://cdn.zyrosite.com/cdn-builder-placeholders",
  Bt = `${Yr}/ecommerce-product`,
  at = `${Yr}/instagram`,
  Wd = `${Yr}/password-page`,
  ua = {
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
(({ ...ua, images: `${Bt}`, thumbnail: `${Bt}` }),
{ ...ua, images: `${Bt}`, thumbnail: `${Bt}` }),
  { ...ua, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ua, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ua, images: `${Bt}`, thumbnail: `${Bt}` },
  { ...ua, images: `${Bt}`, thumbnail: `${Bt}` };
const mr = "donation",
  Nt = "booking",
  gr = "hours",
  qd = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
  Xi = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available",
  },
  Gd = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
  pr = "shopping-cart-items",
  jd = 864e5,
  wl = "site_product_selection",
  Fr = "lowest_price_first",
  za = 160,
  Fn = "https://api-ecommerce.zyro.com/store",
  zd = async (e, n) => {
    const a = n.map((i) => `ids[]=${i}`).join("&");
    return (await (await fetch(`${Fn}/${e}/products?${a}`)).json()).products;
  },
  Kd = async (e, n) => {
    const a = n.map((i) => `product_ids[]=${i}`).join("&");
    return (
      await (
        await fetch(`${Fn}/${e}/variants?fields=inventory_quantity&${a}`)
      ).json()
    ).variants;
  },
  Qd = async ({
    items: e,
    successUrl: n,
    cancelUrl: a,
    locale: t,
    storeId: o,
  }) =>
    fetch(`${Fn}/${o}/checkout`, {
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
  Zd = async (e, n) =>
    fetch(`${Fn}/time-slots`, {
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
  Xd = async ({ bookingId: e, fromDate: n, toDate: a }) =>
    fetch(`${Fn}/availability`, {
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
  en = (e) => {
    const { openEcommerceModal: n } = Rt(),
      { meta: a, ecommerceShoppingCart: t } = Ze();
    let o = "";
    const i = L("");
    De(() => {
      (o = a.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function r(d) {
      const g = d.some((f) => f.type.value === mr),
        m = d.some((f) => f.type.value === Nt);
      let p = "";
      return (
        m ? (p = `&product=${Nt}`) : g && (p = `&product=${mr}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${p}`
      );
    }
    async function s(d) {
      const g = d.reduce(
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
        m = t.value?.lang || "en";
      let p = await Qd({
        items: g,
        cancelUrl: i.value,
        successUrl: r(d),
        locale: m,
        storeId: o,
      });
      return (p = new URL(p)), p.searchParams.set("lang", m), p.toString();
    }
    async function l(d) {
      if (!o) {
        n("EcommerceCheckoutFailed");
        return;
      }
      try {
        const g = await s(d);
        window.location.assign(g);
      } catch (g) {
        g.code === Xi.INSUFFICIENT_INVENTORY
          ? n("EcommerceOutOfStock")
          : g.code === Xi.BOOKING_UNAVAILABLE
          ? n("EcommerceBookingUnavailable")
          : n("EcommerceCheckoutFailed");
      }
    }
    return { initiateCheckout: l, storeId: o };
  },
  Ji = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? Gd,
  es = () => {
    const e = window.localStorage.getItem(pr);
    if (!e) return [];
    const n = JSON.parse(e);
    return n.payload.length
      ? Date.now() > n.expiry
        ? (window.localStorage.removeItem(pr), [])
        : n.payload
      : [];
  },
  Fa = L([]),
  gn = L([]),
  pn = L([]),
  ts = L(null),
  as = L(!1),
  ns = L(!1),
  os = L(!1),
  rs = L(!1),
  Jd = L(!1),
  Ht = () => {
    const { meta: e, pages: n } = Ze(),
      a = u(() => e.value[zu] === Ku),
      t = u(() => !!e.value?.ecommerceStoreId),
      o = u(() =>
        gn.value.reduce(
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
        if (gn.value.length >= za) return !1;
        const C = Fa.value.find((R) => R.id === y),
          M = C?.variants.find((R) => R.id === D);
        if (!C || !M) return !1;
        if (M.manage_inventory) {
          const N =
              o.value.find(
                (G) =>
                  G.product.id === y &&
                  G.product.variants.some((P) => P.id === M.id)
              )?.quantity || 0,
            Q = pn.value.find((G) => G.id === D)?.inventory_quantity;
          return N < Q;
        }
        return !0;
      },
      r = u(() => Object.values(n.value).filter((y) => y.type === ll)),
      s = (y) => {
        os.value = y;
      },
      l = (y) => {
        rs.value = y;
      },
      d = (y) => {
        ns.value = y;
      },
      g = (y) => {
        Fa.value = y;
      },
      m = (y) => {
        as.value = y;
      },
      p = (y) => {
        gn.value = y || [];
        const D = { payload: y, expiry: Date.now() + jd };
        window.localStorage.setItem(pr, JSON.stringify(D));
      },
      f = (y) => {
        ts.value = y;
      },
      b = (y) => {
        pn.value = y;
      },
      S = ({ cartItems: y }) =>
        (y || gn.value).reduce((D, C) => {
          const M = Fa.value.find((B) => B.id === C.id),
            R = M?.variants.find((B) => C.variants.some(($) => B.id === $.id)),
            N = D.reduce(
              (B, $) => ($.variants.some((K) => K.id === R?.id) ? B + 1 : B),
              0
            ),
            Q = pn.value.find((B) => B.id === R?.id)?.inventory_quantity,
            G = !R?.manage_inventory || N < Q,
            P =
              M?.type.value === Nt
                ? {
                    ...C.variants[0].booking_event,
                    time_slot: C.variants[0].booking_event.time_slot,
                    date: C.variants[0].booking_event.date,
                  }
                : null;
          return M && R && G
            ? [...D, { ...M, variants: [{ ...R, booking_event: P }] }]
            : D;
        }, []),
      T = async (y) => {
        const D = Ji(e.value);
        if (!D) return;
        try {
          const M = await Kd(D, y),
            R = [...pn.value, ...M];
          b(R);
        } catch (M) {
          console.error(M);
        }
        const C = await S({ cartItems: es() });
        p(C);
      };
    return {
      products: Fa,
      shoppingCartItems: gn,
      selectedBookingProductId: ts,
      variantsQuantity: pn,
      isShoppingCartOpen: as,
      isCheckoutLoading: ns,
      isLoading: os,
      isLoaded: rs,
      isProductPageLoaded: Jd,
      isStoreTypeZyro: a,
      isEcommerceStoreCreated: t,
      quantifiedCartItemsList: o,
      canAddToCart: i,
      productPages: r,
      setIsLoading: s,
      setIsLoaded: l,
      setIsCheckoutLoading: d,
      setStoreProducts: g,
      setShoppingCartOpen: m,
      setShoppingCartItems: p,
      setSelectedBookingId: f,
      setVariantsQuantity: b,
      fetchProducts: async (y) => {
        const D = Ji(e.value);
        if (!D) return;
        const R = [...es().map((N) => N.id), ...y].reduce(
          (N, Q) => (Fa.value.some((G) => G.id === Q) ? N : [...N, Q]),
          []
        );
        if (R.length) {
          l(!1), s(!0);
          try {
            const Q = (await zd(D, R)).reduce(
              (G, P) => (G.some(($) => $.id === P.id) ? G : [...G, P]),
              [...Fa.value]
            );
            g(Q), await T(R);
          } catch (N) {
            console.error(N);
          } finally {
            s(!1), l(!0);
          }
        }
      },
      updateVariantsQuantity: T,
      refreshCartItems: S,
    };
  },
  em = ie({
    name: "GridEcommerceButtonProviderUser",
    components: { GridButton: Va },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: n } = Ze(),
        {
          canAddToCart: a,
          isShoppingCartOpen: t,
          products: o,
          shoppingCartItems: i,
          setShoppingCartOpen: r,
          setShoppingCartItems: s,
          setSelectedBookingId: l,
        } = Ht(),
        { initiateCheckout: d } = en(),
        { openEcommerceModal: g } = Rt(),
        {
          content: m,
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
          backgroundColorHover: R,
          fontColorHover: N,
          borderColorHover: Q,
        } = Nn(e, {
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
        } = Fd(e, { ecommerce: { products: o.value } }),
        $ = u(() => o.value.find((Y) => Y.id === G.value)),
        K = u(() => $.value?.type.value === Nt),
        V = u(() => K.value && !!i.value?.some((Y) => Y.id === G.value)),
        E = u(() => V.value || !a(G.value, P.value));
      return {
        openEcommerceModal: g,
        productId: G,
        productVariantId: P,
        content: m,
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
        backgroundColorHover: R,
        fontColorHover: N,
        borderColorHover: Q,
        initiateCheckout: d,
        shoppingCartItems: i,
        storeProducts: B,
        isAddToCartDisabled: E,
        product: $,
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
        if (this.product?.type.value === Nt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (Na() || this.isInPreviewMode) {
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
function tm(e, n, a, t, o, i) {
  const r = Be("GridButton"),
    s = je("qa");
  return ce(
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
const am = oe(em, [["render", tm]]),
  nm = ie({
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
            const m = r.value?.contentWindow?.document.querySelector("html");
            new ResizeObserver(([{ contentRect: f }]) => {
              requestAnimationFrame(() => {
                const { height: b } = f;
                b !== i.value &&
                  ((i.value = b), o("iframe-height-updated", i.value));
              });
            }).observe(m);
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
  om = ["id"],
  rm = ["srcdoc"];
function im(e, n, a, t, o, i) {
  const r = je("qa");
  return ce(
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
              rm
            ))
          : O("", !0),
      ],
      12,
      om
    )),
    [[r, "builder-gridelement-gridembed"]]
  );
}
const sm = oe(nm, [["render", im]]),
  lm = `
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
  um = (e) => {
    const n = document.createElement("div");
    n.innerHTML = e;
    const a = [...n.children].reduce(
      (t, o) =>
        o.tagName === "STYLE"
          ? { ...t, styles: `${t.styles} ${o.outerHTML}` }
          : o.tagName === "SCRIPT"
          ? { ...t, scripts: `${t.scripts} ${o.outerHTML}` }
          : { ...t, html: `${t.html} ${o.outerHTML}` },
      { styles: lm, scripts: "", html: "" }
    );
    return `<!DOCTYPE html>
	<head>${a.styles}</head>
	<body>${a.html}${a.scripts}</body>
</html>`;
  },
  cm = "500px",
  kl = (e, n = cm) => {
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
      const o = Lr(() => {
        if (e.value && t.value) {
          const i = e.value.$el ?? e.value;
          t.value.observe(i), o();
        }
      });
      Ct(() => t.value?.disconnect());
    } catch (o) {
      console.error(o);
    }
    return { isObserved: a };
  },
  dm = ie({
    components: { GridEmbed: sm },
    props: {
      data: { type: Object, default: () => ({}) },
      id: { type: String, default: null },
    },
    setup(e) {
      const n = L(null),
        { isObserved: a } = kl(n),
        t = L(null);
      return (
        De(() => {
          t.value = um(e.data.content);
        }),
        { gridEmbedRef: n, isObserved: a, srcdoc: t }
      );
    },
  });
function mm(e, n, a, t, o, i) {
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
const gm = oe(dm, [["render", mm]]),
  Ao = ({ value: e = "", validation: n, validationMessages: a }) => {
    const t = [];
    return (
      n.includes("required") && !e.replace(/ /g, "") && t.push(a.required),
      e.replace(/ /g, "") &&
        (n.includes("email") && !$c.test(e) && t.push(a.email),
        n.includes("phone") && !Uc.test(e) && t.push(a.phone)),
      t
    );
  },
  pm = ie({
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
  vm = ["placeholder", "value", "readonly", "tabindex"],
  hm = ["placeholder", "value", "readonly", "tabindex"],
  fm = { key: 2 };
function ym(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(["input", `input--${e.theme}`]) },
      [
        I(
          "label",
          { class: X(["input__label", `input__label--${e.theme}`]) },
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
                class: X(["input__component", e.computedClasses]),
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
              vm
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
                class: X(["input__component", e.computedClasses]),
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
              hm
            ))
          : O("", !0),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h("div", fm, [
              (c(!0),
              h(
                ge,
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
const bm = oe(pm, [
    ["render", ym],
    ["__scopeId", "data-v-ee2fb8ad"],
  ]),
  _m = ie({
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
  wm = ["for"],
  km = ["id", "type", "checked", "tabindex"];
function Sm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "label",
      { class: X(["select-input", e.labelClasses]), for: e.id },
      [
        (c(),
        h(
          "input",
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: X(["select-input__input", e.inputClasses]),
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
          km
        )),
        Ae(" " + J(e.name), 1),
      ],
      10,
      wm
    )
  );
}
const Tm = oe(_m, [
    ["render", Sm],
    ["__scopeId", "data-v-3b89e969"],
  ]),
  Cm = ie({
    name: "GridSelectInputsWrapper",
    components: { GridSelectInput: Tm },
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
  Pm = { key: 0 };
function Im(e, n, a, t, o, i) {
  const r = Be("GridSelectInput");
  return (
    c(),
    h(
      "div",
      { class: X(["input", `input--${e.theme}`]) },
      [
        I(
          "label",
          {
            class: X([
              "input__label input__label--read-only",
              [`input__label--${e.theme}`],
            ]),
          },
          J(e.label) + J(e.isRequired ? "*" : ""),
          3
        ),
        (c(!0),
        h(
          ge,
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
            h("div", Pm, [
              (c(!0),
              h(
                ge,
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
const Em = oe(Cm, [
    ["render", Im],
    ["__scopeId", "data-v-d57bc6de"],
  ]),
  Dm = {
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
        d = u(() => {
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
            const T = Ao({ value: r.value[S]?.value, ...l.value[S] });
            return (i.value = { ...i.value, [S]: T }), T;
          }),
        m = (S, T) => {
          (i.value = { ...i.value, [S]: Ao({ value: T, ...l.value[S] }) }),
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
          formCSSVars: d,
          validateForm: g,
          updateField: m,
          trimFormValues: p,
          handleSubmit: () => {
            p();
            const S = g();
            (s.value = S.length > 0), s.value || o("on-submit", r.value);
          },
          computed: u,
          ref: L,
          get validateInput() {
            return Ao;
          },
          GridButton: Va,
          GridInput: bm,
          GridSelectInputsWrapper: Em,
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
  Mm = ["id"],
  Om = ["name"];
function Lm(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: X([
          "form",
          { "form--single-field": a.settings.type === "singleField" },
        ]),
        style: xe(t.formCSSVars),
      },
      [
        I(
          "form",
          {
            class: X([
              "form__control",
              { "form__control--invisible": a.showSuccessMessage || a.isError },
            ]),
            name: a.formId,
            onSubmit: Ie(t.handleSubmit, ["prevent"]),
          },
          [
            (c(!0),
            h(
              ge,
              null,
              ke(
                a.settings.schema,
                (s) => (
                  c(),
                  h(
                    ge,
                    { key: s.id },
                    [
                      s.type === "GridInput"
                        ? ce(
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
                        ? ce(
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
          Om
        ),
        ee(e.$slots, "default", {}, void 0, !0),
      ],
      14,
      Mm
    )
  );
}
const Bm = oe(Dm, [
    ["render", Lm],
    ["__scopeId", "data-v-77575ff3"],
  ]),
  Am = ie({
    __name: "ZyroLoader",
    props: {
      color: { default: "var(--color-dark)" },
      size: { default: "40px" },
      weight: { default: "4px" },
    },
    setup(e, { expose: n }) {
      n(),
        lt((t) => ({
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
  xm = { class: "loader" },
  Rm = Br(
    '<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>',
    5
  ),
  Nm = [Rm];
function Hm(e, n, a, t, o, i) {
  return c(), h("div", xm, Nm);
}
const Wr = oe(Am, [
    ["render", Hm],
    ["__scopeId", "data-v-a1cb4206"],
  ]),
  $m = "light",
  Um = 200,
  Vm = { SHOW_MESSAGE: "showMessage", LINK_TO_PAGE: "linkToPage" },
  Ym = ie({
    __name: "PostSubmitElement",
    props: {
      successMessage: { default: "" },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: $m },
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
        ZyroLoader: Wr,
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
  Sl = (e) => (Ot("data-v-00e42172"), (e = e()), Lt(), e),
  Fm = { key: 1, class: "success-message__heading" },
  Wm = { key: 2 },
  qm = Sl(() =>
    I("div", { class: "submit-message__heading" }, " Something went wrong ", -1)
  ),
  Gm = Sl(() => I("div", null, " Please try again later ", -1)),
  jm = [qm, Gm];
function zm(e, n, a, t, o, i) {
  return a.isLoading || a.showSuccessMessage || a.isError
    ? (c(),
      h(
        "div",
        {
          key: 0,
          ref: "postSubmitRef",
          class: X(["submit-message", `submit-message--${a.theme}`]),
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
            ? (c(), h("div", Fm, J(a.successMessage), 1))
            : O("", !0),
          a.isError && !a.isLoading ? (c(), h("div", Wm, jm)) : O("", !0),
        ],
        6
      ))
    : O("", !0);
}
const Km = oe(Ym, [
    ["render", zm],
    ["__scopeId", "data-v-00e42172"],
  ]),
  Qm = ie({
    components: { GridForm: Bm, PostSubmitElement: Km },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
    },
    setup() {
      const { meta: e, forms: n, getPagePathFromId: a } = Ze();
      return { meta: e, forms: n, getPagePathFromId: a };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: n, elementId: a }) {
        await fetch(`https://backend.zyro.com/u1/data/v3/post/${e}`, {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=UTF-8" },
          credentials: "omit",
          mode: "cors",
          body: JSON.stringify({ elementId: a, formData: n }),
        }).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let n = !1;
        setTimeout(() => {
          (n = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, Um);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, r]) => [i.replace(/["']+/g, ""), r])
            ),
            elementId: this.data.elementId,
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: a } = this.data.settings;
          if (!a || a.id === Vm.SHOW_MESSAGE) return;
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
function Zm(e, n, a, t, o, i) {
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
        default: ve(() => [
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
const Xm = oe(Qm, [["render", Zm]]),
  Jm = ie({
    __name: "GridImage",
    props: {
      src: {},
      alt: {},
      href: { default: null },
      preventDrag: { type: Boolean },
      sizes: {},
      srcset: {},
      tagName: { default: Qu },
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
        lt((D) => ({
          "359fefd5": b.value,
          "04b99763": T.value,
          "4ec09248": f.value,
          "6a8553ec": m.value,
          "61e18609": p.value,
          "56132be6": S.value,
          "1977bb7f": l.value,
          dd87de54: d.value,
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
        d = u(() =>
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
        m = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementWidth * 100) / ra}vw`
        ),
        p = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementHeight * 100) / ra}vw`
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
        Yn(() => {
          i.value && i.value.removeEventListener("load", w);
        });
      const y = {
        props: t,
        emit: o,
        imageRef: i,
        isLoaded: r,
        isMobileLayoutImage: s,
        mobileWidthCSSVar: l,
        mobileHeightCSSVar: d,
        imageCSSVars: g,
        smallDesktopWidthCSSVar: m,
        smallDesktopHeightCSSVar: p,
        overlayOpacityCSSVar: f,
        desktopBorderRadiusCSSVar: b,
        mobileBorderRadiusCSSVar: S,
        shapeMaskSourceCssVar: T,
        handleImageLoadEvent: w,
        get ANCHOR_TAG() {
          return Zu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE() {
          return ga;
        },
        get DATA_ATTRIBUTE_SELECTOR() {
          return Xu;
        },
        get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
          return Ju;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
          return Ar;
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
  eg = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function tg(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    W(
      un(a.tagName),
      tt({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: t.imageCSSVars,
        class: [
          "image",
          {
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
        default: ve(() => [
          ce(
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
                    "image__image--zoom": a.isLightboxEnabled,
                    "image__image--unstyled": a.isUnstyled,
                    "image__image--cropped": !!a.cropCssVars,
                    image__image: !a.isUnstyled,
                    "image__image--reset-m-position": a.resetMobilePosition,
                    "image__image--svg": a.isSvg,
                  },
                },
                tl(
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
              eg
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
const Tl = oe(Jm, [
    ["render", tg],
    ["__scopeId", "data-v-bf5356a1"],
  ]),
  is = (e, n) => {
    const a = Array(e).fill([]);
    return n.reduce((t, o, i) => {
      const r = i % e;
      return (t[r] = [...t[r], { ...o, originalIndex: i }]), t;
    }, a);
  },
  ag = ie({
    name: "GridGallery",
    components: { GridImage: Tl },
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
      const n = u(() => is(e.columnCount, e.gridImages)),
        a = u(() => is(e.mobileColumnCount, e.gridImages));
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
  ng = { class: "gallery" };
function og(e, n, a, t, o, i) {
  const r = Be("GridImage");
  return (
    c(),
    h("div", ng, [
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
                ge,
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
                          ge,
                          null,
                          ke(
                            s,
                            (d, g) => (
                              c(),
                              W(
                                r,
                                {
                                  key: `${g}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (m) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    n[0] ||
                                    (n[0] = (m) => e.$emit("image-load")),
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
                ge,
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
                          ge,
                          null,
                          ke(
                            s,
                            (d, g) => (
                              c(),
                              W(
                                r,
                                {
                                  key: `${g}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (m) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    n[1] ||
                                    (n[1] = (m) => e.$emit("image-load")),
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
                ge,
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
                          onImageClick: (d) => e.$emit("image-click", l),
                          onImageLoad:
                            n[2] || (n[2] = (d) => e.$emit("image-load")),
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
const rg = oe(ag, [
    ["render", og],
    ["__scopeId", "data-v-0346154b"],
  ]),
  ig = (e) => {
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
  rt = {
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
  sg = {
    8: rt.Backspace,
    16: rt.ShiftLeft,
    27: rt.Escape,
    32: rt.Space,
    37: rt.ArrowLeft,
    38: rt.ArrowUp,
    39: rt.ArrowRight,
    40: rt.ArrowDown,
    46: rt.Delete,
    67: rt.KeyC,
    68: rt.KeyD,
    88: rt.KeyX,
    89: rt.KeyY,
    90: rt.KeyZ,
    91: rt.OSLeft,
    111: rt.NumLockSlash,
    191: rt.KeySlash,
    219: rt.BracketLeft,
    221: rt.BracketRight,
  },
  xo = (e) => {
    let n;
    return (
      e
        ? e.code !== void 0
          ? (n = e.code === "MetaLeft" ? "OSLeft" : e.code)
          : e.keyCode !== void 0 && (n = sg[e.keyCode])
        : (n = void 0),
      n
    );
  },
  Ea = L([]),
  Da = L(null),
  tn = () => {
    const e = u(() => Ea.value.length > 0),
      n = u(() => Ea.value.length > 1),
      a = u(() => Ea.value.length - 1),
      t = u(() => Da.value === Ea.value.length - 1),
      o = u(() => Da.value === 0),
      i = u(() => Ea.value[Da.value]),
      r = (b) => {
        Da.value = b;
      },
      s = (b) => {
        Ea.value = Array.isArray(b) ? b : [b];
      },
      l = () => (o.value ? r(a.value) : r(Da.value - 1)),
      d = () => (t.value ? r(0) : r(Da.value + 1)),
      g = () => {
        s([]), r(null);
      },
      m = () => {
        n.value || g();
      },
      p = (b, S = 0) => {
        s(b), r(S);
      },
      f = (b) => {
        xo(b) === rt.ArrowRight && d(),
          xo(b) === rt.ArrowLeft && l(),
          xo(b) === rt.Escape && g();
      };
    return {
      lightboxImages: u(() => Ea.value),
      currentLightboxImageIndex: u(() => Da.value),
      currentLightboxImage: i,
      lastImageIndex: a,
      isFirstImage: o,
      isLastImage: t,
      isLightboxOpen: e,
      isImageGalleryMode: n,
      setLightboxImages: s,
      setCurrentLightboxImageIndex: r,
      goToNextImage: d,
      goToPreviousImage: l,
      handleLightboxNav: f,
      closeLightbox: g,
      addImagesToLightbox: p,
      onLightboxClickOutside: m,
    };
  },
  lg = "lightbox",
  ug = ie({
    name: "GridGalleryProviderUser",
    components: { GridGallery: rg },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ["image-load"],
    setup(e) {
      const { siteId: n } = Ze(),
        {
          columnCount: a,
          columnGap: t,
          isMasonryLayout: o,
          mobileColumnCount: i,
          mobileColumnGap: r,
        } = ig(e),
        { addImagesToLightbox: s } = tn(),
        l = u(() => {
          const { right: y } = Ja(e.mobileBlockPadding ?? "");
          return Number.parseInt(y, 10) || 0;
        }),
        d = L(!1),
        g = () => {
          d.value = window.matchMedia(`(max-width: ${ir}px)`).matches;
        };
      De(() => {
        g(), window.addEventListener("resize", g);
      }),
        Yn(() => {
          window.removeEventListener("resize", g);
        });
      const m = u(() => (d.value ? i.value : a.value)),
        p = u(() => Math.ceil((t.value + e.elementWidth) / m.value) - t.value),
        f = u(() => !o.value && p.value),
        b = u(() =>
          [`(min-width: ${ir}px) ${p.value}px`, `${100 / m.value}vw`].join(", ")
        ),
        S = u(() =>
          e.data.images.map((y) => {
            const D = u(() =>
                it(y.origin, y.path, n.value, {
                  width: p.value,
                  height: f.value,
                })
              ),
              C = u(() =>
                Kc(y.origin, y.path, n.value, {
                  width: p.value,
                  height: f.value,
                  columnCount: m.value,
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
        T = u(() => e.data.settings.imageClickAction === lg);
      return {
        gridImages: S,
        isLightboxEnabled: T,
        handleGalleryImageClick: (y) => {
          if (T.value) {
            const D = e.data.images.map((C) => ({
              alt: C.alt,
              src: xr(C.origin, C.path, n.value),
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
function cg(e, n, a, t, o, i) {
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
const dg = oe(ug, [["render", cg]]),
  mg = (e, n, a) => Math.min(Math.max(e, n), a),
  ss = 1920,
  ls = ({
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
  us = ({
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
  Kn = ({
    offsetInPx: e,
    imageSize: n,
    containerSize: a,
    offsetInPercent: t,
  }) => {
    if (!e) return t;
    const o = (n - a) / 100;
    return mg(t + e / o, 0, 100);
  },
  Qn = ({ imageSize: e, containerSize: n, offset: a }) => (n - e) * (a / 100),
  cs = ({
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
  ds = ({
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
  gg = (e, n) => {
    if (e > ss) {
      const a = ss / e;
      return { width: Math.round(e * a), height: Math.round(n * a) };
    }
    return { width: e, height: n };
  },
  ms = (e, { dragDeltaYPosition: n, dragDeltaXPosition: a, href: t } = {}) => {
    const o = u(() =>
        gg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = u(() => o.value.width),
      r = u(() => o.value.height),
      s = () => i.value / r.value,
      l = u(() => e.data.desktop?.crop),
      d = u(() => e.renderedPosition || e.data.desktop),
      g = u(() => d.value.width),
      m = u(() => d.value.height),
      p = u(() => g.value / m.value),
      f = u(() => s() > p.value),
      b = u(() =>
        ls({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: m.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      S = u(() =>
        us({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: m.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      T = u(() =>
        Kn({
          offsetInPx: -n?.value,
          imageSize: S.value,
          containerSize: m.value,
          offsetInPercent: l.value.top,
        })
      ),
      w = u(() =>
        Qn({ imageSize: S.value, containerSize: m.value, offset: T.value })
      ),
      y = u(() =>
        Kn({
          offsetInPx: -a?.value,
          imageSize: b.value,
          containerSize: g.value,
          offsetInPercent: l.value.left,
        })
      ),
      D = u(() =>
        Qn({ imageSize: b.value, containerSize: g.value, offset: y.value })
      ),
      C = u(() =>
        ds({
          left: D.value,
          top: w.value,
          imageWidth: b.value,
          imageHeight: S.value,
          containerWidth: g.value,
          containerHeight: m.value,
        })
      ),
      M = u(() => e.data.mobile.crop || l.value),
      R = u(() => e.renderedPosition || e.data.mobile),
      N = u(() => R.value.width),
      Q = u(() => R.value.height),
      G = u(() => N.value / Q.value),
      P = u(() => s() > G.value),
      B = u(() =>
        ls({
          isAspectRatioBiggerThanContainer: P.value,
          scale: M.value.scale,
          containerHeight: Q.value,
          containerWidth: N.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      $ = u(() =>
        us({
          isAspectRatioBiggerThanContainer: P.value,
          scale: M.value.scale,
          containerHeight: Q.value,
          containerWidth: N.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      K = u(() =>
        Kn({
          offsetInPx: -n?.value,
          imageSize: $.value,
          containerSize: Q.value,
          offsetInPercent: M.value.top,
        })
      ),
      V = u(() =>
        Qn({ imageSize: $.value, containerSize: Q.value, offset: K.value })
      ),
      E = u(() =>
        Kn({
          offsetInPx: -a?.value,
          imageSize: B.value,
          containerSize: N.value,
          offsetInPercent: M.value.left,
        })
      ),
      Y = u(() =>
        Qn({ imageSize: B.value, containerSize: N.value, offset: E.value })
      ),
      U = u(() =>
        ds({
          left: Y.value,
          top: V.value,
          imageWidth: B.value,
          imageHeight: $.value,
          containerWidth: N.value,
          containerHeight: Q.value,
        })
      ),
      j = u(() => {
        const k = !["svg", "ico", "gif"].includes(Qa(e.data.settings.path));
        if (!l.value || !i.value || !r.value || !k) return null;
        const v = cs({
            prefix: "desktop",
            left: D.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: f.value,
          }),
          F = cs({
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
      cropCSSVars: j,
      desktopCropParams: C,
      mobileCropParams: U,
      desktopTop: w,
      desktopLeft: D,
      mobileLeft: Y,
      mobileTop: V,
      desktopTopPercentWithOffset: T,
      desktopLeftPercentWithOffset: y,
    };
  },
  pg = {
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
      n(), lt((K) => ({ "7fdc9964": M.value, "6ff6a0bc": R.value }));
      const a = e,
        { addImagesToLightbox: t } = tn(),
        { siteId: o, getPagePathFromId: i } = Ze(),
        {
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: d,
        } = ms(a, {
          href: u(() =>
            a.data.linkType === rr
              ? i({ pageId: a.data.linkedPageId })
              : a.data.href
          ),
        }),
        g = (K) => {
          const { fullResolutionWidth: V, fullResolutionHeight: E } = a.data,
            {
              left: Y,
              top: U,
              right: j,
              bottom: k,
              imageWidth: v,
              imageHeight: F,
            } = K,
            q = Y / v,
            te = U / F,
            Z = j / v,
            x = k / F;
          return { left: V * q, top: E * te, right: V * Z, bottom: E * x };
        },
        m = (K) => {
          const { top: V, right: E, bottom: Y, left: U } = g(K);
          return `${V};${E};${Y};${U}`;
        },
        p = u(() => [a.data.settings.origin, a.data.settings.path, o.value]),
        f = u(() =>
          r.value
            ? it(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                trim: m(s.value),
              })
            : it(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        b = u(() => Qa(a.data.settings.path) === "svg"),
        S = u(() => a.mobileElementWidth && a.mobileElementHeight),
        T = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? f.value
            : r.value
            ? it(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                trim: m(l.value),
              })
            : it(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        w = u(() =>
          r.value
            ? Ba(...p.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: m(s.value),
              })
            : Ba(...p.value, {
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
            ? Ba(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: m(l.value),
              })
            : Ba(...p.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        D = u(() => {
          const { right: K } = Ja(a.mobileBlockPadding ?? ""),
            V = K ? Number.parseInt(K, 10) : null;
          return xn(a.elementWidth, V);
        }),
        C = () => {
          a.data.settings.clickAction === Do &&
            t({
              src: it(a.data.settings.origin, a.data.settings.path, o.value),
              srcset: va(a.data.settings.origin, a.data.settings.path, o.value),
              alt: a.data.settings.alt,
            });
        },
        M = u(() => `${a.elementHeight}px`),
        R = u(() => `${a.mobileElementHeight}px`),
        N = u(() => a.data.settings.alt),
        Q = u(() => (a.data.settings.clickAction === Ci ? "a" : "div")),
        G = u(() => a.data.target),
        P = u(() => a.data.rel),
        B = u(() => a.data.settings.clickAction === Do),
        $ = {
          props: a,
          addImagesToLightbox: t,
          siteId: o,
          getPagePathFromId: i,
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: d,
          calculateFullResolutionTrim: g,
          constructTrimParamForCloudflare: m,
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
          mobileElementHeightCssVar: R,
          alt: N,
          tagName: Q,
          target: G,
          rel: P,
          isLightboxEnabled: B,
          computed: u,
          GridImage: Tl,
          get useLightbox() {
            return tn;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return Ci;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return Do;
          },
          get LINK_TYPE_INTERNAL() {
            return rr;
          },
          get getOptimizedSrc() {
            return it;
          },
          get getGridItemSrcset() {
            return Ba;
          },
          get getGridItemSizes() {
            return xn;
          },
          get getFullWidthSrcset() {
            return va;
          },
          get parseCSSSides() {
            return Ja;
          },
          get useGridImage() {
            return ms;
          },
          get getExtension() {
            return Qa;
          },
          get useSiteGlobal() {
            return Ze;
          },
        };
      return (
        Object.defineProperty($, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        $
      );
    },
  },
  vg = ["id"];
function hg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        id: a.id,
        class: X([
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
      vg
    )
  );
}
const fg = oe(pg, [
    ["render", hg],
    ["__scopeId", "data-v-a2e77deb"],
  ]),
  yg = ie({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ["media-load"],
  }),
  bg = ["src", "poster"],
  _g = ["src", "alt"];
function wg(e, n, a, t, o, i) {
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
            bg
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
            _g
          )),
    ])
  );
}
const kg = oe(yg, [
    ["render", wg],
    ["__scopeId", "data-v-c35ee7e4"],
  ]),
  Sg = ie({
    components: { GridInstagramFeedMediaItemFigure: kg },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: ga,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Ar,
        isLoaded: !1,
      };
    },
  }),
  Tg = ["href"],
  Cg = { key: 1 },
  Pg = { key: 2, class: "placeholder" };
function Ig(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeedMediaItemFigure");
  return (
    c(),
    h(
      "div",
      tt({
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
              Tg
            ))
          : e.src && !e.href
          ? (c(),
            h("div", Cg, [
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
          : (c(), h("div", Pg)),
      ],
      16
    )
  );
}
const Eg = oe(Sg, [
    ["render", Ig],
    ["__scopeId", "data-v-8ece2404"],
  ]),
  Dg = ie({
    components: { GridInstagramFeedMediaItem: Eg },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  Mg = ["id"];
function Og(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeedMediaItem");
  return (
    c(),
    h(
      "div",
      { id: e.id, class: "instagram-feed" },
      [
        (c(!0),
        h(
          ge,
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
      Mg
    )
  );
}
const Lg = oe(Dg, [["render", Og]]),
  gs = [
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
  Bg = "https://graph.instagram.com/me/media",
  Ag = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
  xg = ({
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
          ? s.value.filter(({ src: m }) => typeof m < "u").slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      d = async () => {
        const m = new URL(Bg);
        m.searchParams.set("fields", Ag.join(",")),
          m.searchParams.set("access_token", r.value);
        const p = await fetch(m.toString());
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
          s.value = gs;
          return;
        }
        try {
          const m = await d();
          s.value = m.map((p) => ({
            id: p.id,
            src: p.media_url,
            alt: p.caption,
            href: p.permalink,
            poster: p.thumbnail_url,
          }));
        } catch (m) {
          throw ((s.value = gs), o && o(r.value), m);
        }
      },
      itemGap: u(() => n.value.settings.styles["item-gap"]),
    };
  },
  Rg = ie({
    components: { GridInstagramFeed: Lg },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ["media-loaded"],
    setup(e, n) {
      const { siteId: a } = Ze(),
        t = u(() => e.id),
        o = u(() => e.data),
        i = async ({ siteId: l, elementId: d }) =>
          (
            await (
              await fetch(
                `https://backend.zyro.com/u1/instagram/token/${l}/${d}`
              )
            ).json()
          ).accessToken,
        { media: r, init: s } = xg({
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
            l?.length && (await Pt(), n.emit("media-loaded"));
          },
          { immediate: !1 }
        ),
        { media: r }
      );
    },
  });
function Ng(e, n, a, t, o, i) {
  const r = Be("GridInstagramFeed");
  return c(), W(r, { id: e.id, media: e.media }, null, 8, ["id", "media"]);
}
const Hg = oe(Rg, [["render", Ng]]),
  $g = ie({
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
  Ug = ["src"],
  Vg = { class: "grid-map__pin" };
function Yg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(["grid-map", { "grid-map--loading": !e.isIframeLoaded }]) },
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
          Ug
        ),
        ce(I("div", Vg, null, 512), [[Wt, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const Fg = oe($g, [
    ["render", Yg],
    ["__scopeId", "data-v-3b334315"],
  ]),
  Wg = (e, n) => {
    try {
      const { isObserved: a } = kl(n),
        t = L(!1),
        o = ma({
          src: u(() => e.data.settings?.src),
          shouldRender: u(() => a.value),
          isIframeLoaded: u(() => t.value),
        }),
        i = Lr(() => {
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
  qg = ie({
    name: "GridMapProviderUser",
    components: { GridMap: Fg },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const n = L(null),
        { composedProps: a } = Wg(e, n);
      return { mapRef: n, composedProps: a };
    },
  });
function Gg(e, n, a, t, o, i) {
  const r = Be("GridMap");
  return c(), W(r, Ge({ ref: "mapRef" }, e.composedProps), null, 16);
}
const jg = oe(qg, [["render", Gg]]),
  zg = ie({
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
  Kg = ["href", "title", "innerHTML"];
function Qg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: X(t.computedClass), style: xe(t.computedStyles) },
      [
        (c(!0),
        h(
          ge,
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
                  tl({
                    dragstart: a.preventLinks
                      ? (d) => d.preventDefault()
                      : () => null,
                    click: a.preventLinks
                      ? (d) => d.preventDefault()
                      : () => null,
                  }),
                  { innerHTML: s }
                ),
                null,
                16,
                Kg
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
const Cl = oe(zg, [
    ["render", Qg],
    ["__scopeId", "data-v-1ee40361"],
  ]),
  Zg = (e) => {
    const n = u(() => e.data.settings.styles);
    return ma({
      links: u(() =>
        e.data.links.map((t) => ({ ...t, title: `Go to ${Yc(t.icon)} page` }))
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
  Xg = ie({
    components: { GridSocialIcons: Cl },
    props: { data: { type: Object, required: !0 } },
    setup(e, n) {
      return { composedProps: Zg(e) };
    },
  });
function Jg(e, n, a, t, o, i) {
  const r = Be("GridSocialIcons");
  return c(), W(r, tt(bt(e.composedProps)), null, 16);
}
const ep = oe(Xg, [["render", Jg]]),
  tp = L(null),
  ap = (e) => {
    const n = u(() => e.data.settings?.priceId || ""),
      a = u(() => e.data.settings?.paymentType || "payment");
    return { stripeInstance: tp, priceId: n, paymentType: a };
  },
  np = "https://js.stripe.com/v3",
  op = ie({
    name: "GridStripeButtonProviderUser",
    components: { GridButton: Va },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
    },
    setup(e) {
      const { getButtonHref: n } = Ze(),
        { content: a, type: t } = Nn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: o, priceId: i, paymentType: r } = ap(e),
        s = L(!1),
        l = () =>
          new Promise((g, m) => {
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
                m();
              }),
              (f.src = np),
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
function rp(e, n, a, t, o, i) {
  const r = Be("GridButton"),
    s = je("qa");
  return ce(
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
const ip = oe(op, [["render", rp]]),
  sp = {
    __name: "GridTextBox",
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: n }) {
      n(),
        lt((s) => ({
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
  lp = ["innerHTML"],
  up = { key: 1, class: "text-box" };
function cp(e, n, a, t, o, i) {
  return a.content
    ? (c(),
      h(
        "div",
        { key: 0, class: "text-box", innerHTML: a.content },
        null,
        8,
        lp
      ))
    : (c(), h("div", up, [ee(e.$slots, "default")]));
}
const Pl = oe(sp, [["render", cp]]),
  dp = {
    __name: "GridTextBoxProviderUser",
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: n }) {
      n();
      const a = { GridTextBox: Pl };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  };
function mp(e, n, a, t, o, i) {
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
const gp = oe(dp, [["render", mp]]),
  It = { YOUTUBE: "youtube", VIMEO: "vimeo" },
  Wn = "0",
  ro = "1",
  pp = Wn,
  vp = Wn,
  hp = ro,
  fp = Wn,
  yp = Wn,
  bp = ro;
It.YOUTUBE;
const _p = /t=\d+/g,
  Yt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: { [It.YOUTUBE]: "mute", [It.VIMEO]: "muted" },
    TIME: "t",
    START: "start",
  },
  wp = {
    [It.YOUTUBE]: "https://www.youtube.com/embed/",
    [It.VIMEO]: "https://player.vimeo.com/video/",
  },
  kp = {
    [It.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [It.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  Sp = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
  Tp = "builder.notifications.errorVimeoVideoPrivate",
  Cp = {
    __name: "GridVideo",
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: It.YOUTUBE },
      jpg: { type: String, default: "" },
      webp: { type: String, default: "" },
    },
    setup(e, { expose: n }) {
      n(), lt((i) => ({ "60d8e812": t.value }));
      const a = L(!1),
        t = u(() => (a.value ? "transparent" : "var(--color-dark)")),
        o = {
          isIframeLoaded: a,
          backgroundColor: t,
          get PROVIDERS() {
            return It;
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
  Pp = { class: "video" },
  Ip = ["src"],
  Ep = ["srcset"],
  Dp = ["src"];
function Mp(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", Pp, [
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
            Ip
          ))
        : a.renderPicture && (a.jpg || a.webp)
        ? (c(),
          h(
            ge,
            { key: 1 },
            [
              I("picture", null, [
                I(
                  "source",
                  { type: "image/webp", srcset: a.webp },
                  null,
                  8,
                  Ep
                ),
                ce(
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
                    Dp
                  ),
                  [[r, "builder-gridelement-gridvideo"]]
                ),
              ]),
              I(
                "button",
                {
                  type: "button",
                  class: X(`video__play video__play--${a.provider}`),
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
const Op = oe(Cp, [
    ["render", Mp],
    ["__scopeId", "data-v-ad3c9850"],
  ]),
  Lp = async (e) => {
    const a = await (await fetch(`${Sp}/${e}`)).json();
    if (!a.thumbnail_url) throw new Error(Tp);
    const t = a.thumbnail_url.replace("_295x166", "_720");
    return {
      jpg: t.replace(".webp", ".jpg"),
      webp: t.replace(".jpg", ".webp"),
    };
  },
  Bp = async (e, n) => {
    switch (e) {
      case It.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`,
        };
      case It.VIMEO:
        return Lp(n);
      default:
        return { jpg: null, webp: null };
    }
  },
  Ap = (e, n, a, t) => {
    const o = n === It.VIMEO ? e.split("/")[1] : null,
      i = n === It.VIMEO ? e.split("/")[0] : e,
      r = t.match(_p),
      s = n === It.YOUTUBE && r ? { [Yt.START]: r[0].slice(2) ?? 0 } : {},
      l = Yt.MUTE[n],
      d = new URLSearchParams({
        [Yt.ALBUM]: o,
        [Yt.PLAYLIST]: i,
        [Yt.AUTOPLAY]: pp,
        [Yt.CONTROLS]: hp,
        [Yt.LOOP]: vp,
        [Yt.AUTOPAUSE]: fp,
        [Yt.PLAYSINLINE]: bp,
        [l]: yp,
        ...s,
      }).toString();
    return `${wp[n]}${i}?${d}`;
  },
  xp = async (e, n) => {
    const a = Object.entries(kp).find(([, g]) => e?.match(g)),
      t = a && a.length === 2;
    if (!t) return { url: e, isUrlValid: !1 };
    const [o, i] = a,
      r = e.match(i),
      s = [r[1], r[2]].join(""),
      { jpg: l, webp: d } = await Bp(o, s);
    return {
      src: Ap(s, o, n, e),
      isUrlValid: t,
      jpg: l,
      webp: d,
      provider: o,
      id: s,
    };
  },
  Rp = (e) => {
    const n = ma({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      a = ma({
        src: u(() => n.src ?? e.data.settings.src),
        provider: u(() => n.provider ?? e.data.settings.provider),
        width: u(() => n.width ?? e.data.settings.width),
        height: u(() => n.height ?? e.data.settings.height),
        webp: u(() => n.webp ?? e.data.settings.webp),
        jpg: u(() => n.jpg ?? e.data.settings.jpg),
      });
    return (
      Lr(() => {
        (e.data.settings.src !== a.src || !e.data.settings.jpg) &&
          xp(e.data.settings.src).then((t) => {
            Object.entries(t).forEach(([o, i]) => {
              n[o] = i;
            });
          });
      }),
      { composedProps: a }
    );
  },
  Np = ie({
    name: "GridVideoProviderUser",
    components: { GridVideo: Op },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: n } = Rp(e),
        a = L(null),
        t = u(
          () => e.data.settings.src?.includes(`${[Yt.AUTOPLAY]}=${ro}`) ?? !1
        ),
        o = u(() => {
          const l = Yt.MUTE[n.provider];
          return t.value
            ? n.src.replace(`${[l]}=${Wn}`, `${[l]}=${ro}`)
            : n.src;
        }),
        i = L(!1),
        r = L(!1),
        s = () => {
          const l = new IntersectionObserver(
            ([{ isIntersecting: d }]) => {
              d && (t.value ? (i.value = !0) : (r.value = !0), l.disconnect());
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
function Hp(e, n, a, t, o, i) {
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
const $p = oe(Np, [["render", Hp]]),
  Up = ie({
    name: "GridShape",
    props: { svg: { type: String, required: !0 } },
  }),
  Vp = ["innerHTML"];
function Yp(e, n, a, t, o, i) {
  return c(), h("div", { class: "grid-shape", innerHTML: e.svg }, null, 8, Vp);
}
const Fp = oe(Up, [["render", Yp]]),
  Wp = ie({
    name: "GridShapeProviderUser",
    components: { GridShape: Fp },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / zt,
          n = (this.data.desktop.height * 100) / ra;
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
function qp(e, n, a, t, o, i) {
  const r = Be("GridShape");
  return (
    c(),
    W(r, { svg: e.data.svg, style: xe(e.cssVars) }, null, 8, ["svg", "style"])
  );
}
const Gp = oe(Wp, [["render", qp]]),
  jp = ie({
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
        return this.enableSrcset ? xn(this.width, null) : null;
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
        return it(this.imageOrigin, this.src, this.siteId, {
          width: this.width,
          height: this.height,
          shouldContain: this.objectFit === "contain",
          isLossless: this.isLossless,
        });
      },
      getSrcSet() {
        return this.enableSrcset
          ? Ba(this.imageOrigin, this.src, this.siteId, {
              width: this.width,
              height: this.height,
              shouldContain: this.objectFit === "contain",
              isLossless: this.isLossless,
            })
          : null;
      },
    },
  }),
  zp = ["loading", "src", "alt", "srcset", "sizes"];
function Kp(e, n, a, t, o, i) {
  return (
    c(),
    W(
      Et,
      { name: "fade", mode: "out-in" },
      {
        default: ve(() => [
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
            zp
          ),
        ]),
        _: 1,
      }
    )
  );
}
const vo = oe(jp, [["render", Kp]]);
function ho(e) {
  return nl() ? (ol(e), !0) : !1;
}
function Za(e) {
  return typeof e == "function" ? e() : A(e);
}
const qr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Qp = (e) => e != null,
  Zp = Object.prototype.toString,
  Xp = (e) => Zp.call(e) === "[object Object]",
  Pn = () => {},
  vr = Jp();
function Jp() {
  var e, n;
  return (
    qr &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function ev(e) {
  return al();
}
function tv(...e) {
  if (e.length !== 1) return Ln(...e);
  const n = e[0];
  return typeof n == "function" ? Vu(Yu(() => ({ get: n, set: Pn }))) : L(n);
}
function av(e, n = !0, a) {
  ev() ? De(e, a) : n ? e() : Pt(e);
}
function aa(e) {
  var n;
  const a = Za(e);
  return (n = a?.$el) != null ? n : a;
}
const fo = qr ? window : void 0,
  nv = qr ? window.document : void 0;
function Aa(...e) {
  let n, a, t, o;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([a, t, o] = e), (n = fo))
      : ([n, a, t, o] = e),
    !n)
  )
    return Pn;
  Array.isArray(a) || (a = [a]), Array.isArray(t) || (t = [t]);
  const i = [],
    r = () => {
      i.forEach((g) => g()), (i.length = 0);
    },
    s = (g, m, p, f) => (
      g.addEventListener(m, p, f), () => g.removeEventListener(m, p, f)
    ),
    l = Ne(
      () => [aa(n), Za(o)],
      ([g, m]) => {
        if ((r(), !g)) return;
        const p = Xp(m) ? { ...m } : m;
        i.push(...a.flatMap((f) => t.map((b) => s(g, f, b, p))));
      },
      { immediate: !0, flush: "post" }
    ),
    d = () => {
      l(), r();
    };
  return ho(d), d;
}
let ps = !1;
function yo(e, n, a = {}) {
  const {
    window: t = fo,
    ignore: o = [],
    capture: i = !0,
    detectIframe: r = !1,
  } = a;
  if (!t) return Pn;
  vr &&
    !ps &&
    ((ps = !0),
    Array.from(t.document.body.children).forEach((p) =>
      p.addEventListener("click", Pn)
    ),
    t.document.documentElement.addEventListener("click", Pn));
  let s = !0;
  const l = (p) =>
      o.some((f) => {
        if (typeof f == "string")
          return Array.from(t.document.querySelectorAll(f)).some(
            (b) => b === p.target || p.composedPath().includes(b)
          );
        {
          const b = aa(f);
          return b && (p.target === b || p.composedPath().includes(b));
        }
      }),
    g = [
      Aa(
        t,
        "click",
        (p) => {
          const f = aa(e);
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
      Aa(
        t,
        "pointerdown",
        (p) => {
          const f = aa(e);
          s = !l(p) && !!(f && !p.composedPath().includes(f));
        },
        { passive: !0 }
      ),
      r &&
        Aa(t, "blur", (p) => {
          setTimeout(() => {
            var f;
            const b = aa(e);
            ((f = t.document.activeElement) == null ? void 0 : f.tagName) ===
              "IFRAME" &&
              !b?.contains(t.document.activeElement) &&
              n(p);
          }, 0);
        }),
    ].filter(Boolean);
  return () => g.forEach((p) => p());
}
function ov() {
  const e = L(!1),
    n = al();
  return (
    n &&
      De(() => {
        e.value = !0;
      }, n),
    e
  );
}
function Il(e) {
  const n = ov();
  return u(() => (n.value, !!e()));
}
function rv(e, n, a = {}) {
  const { window: t = fo, ...o } = a;
  let i;
  const r = Il(() => t && "MutationObserver" in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => {
      const p = Za(e),
        f = (Array.isArray(p) ? p : [p]).map(aa).filter(Qp);
      return new Set(f);
    }),
    d = Ne(
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
    m = () => {
      s(), d();
    };
  return ho(m), { isSupported: r, stop: m, takeRecords: g };
}
function iv(e = {}) {
  const { document: n = nv } = e;
  if (!n) return L("visible");
  const a = L(n.visibilityState);
  return (
    Aa(n, "visibilitychange", () => {
      a.value = n.visibilityState;
    }),
    a
  );
}
function sv(e, n, a = {}) {
  const { window: t = fo, ...o } = a;
  let i;
  const r = Il(() => t && "ResizeObserver" in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => (Array.isArray(e) ? e.map((m) => aa(m)) : [aa(e)])),
    d = Ne(
      l,
      (m) => {
        if ((s(), r.value && t)) {
          i = new ResizeObserver(n);
          for (const p of m) p && i.observe(p, o);
        }
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => {
      s(), d();
    };
  return ho(g), { isSupported: r, stop: g };
}
function lv(e, n = {}) {
  const {
      reset: a = !0,
      windowResize: t = !0,
      windowScroll: o = !0,
      immediate: i = !0,
    } = n,
    r = L(0),
    s = L(0),
    l = L(0),
    d = L(0),
    g = L(0),
    m = L(0),
    p = L(0),
    f = L(0);
  function b() {
    const S = aa(e);
    if (!S) {
      a &&
        ((r.value = 0),
        (s.value = 0),
        (l.value = 0),
        (d.value = 0),
        (g.value = 0),
        (m.value = 0),
        (p.value = 0),
        (f.value = 0));
      return;
    }
    const T = S.getBoundingClientRect();
    (r.value = T.height),
      (s.value = T.bottom),
      (l.value = T.left),
      (d.value = T.right),
      (g.value = T.top),
      (m.value = T.width),
      (p.value = T.x),
      (f.value = T.y);
  }
  return (
    sv(e, b),
    Ne(
      () => aa(e),
      (S) => !S && b()
    ),
    rv(e, b, { attributeFilter: ["style", "class"] }),
    o && Aa("scroll", b, { capture: !0, passive: !0 }),
    t && Aa("resize", b, { passive: !0 }),
    av(() => {
      i && b();
    }),
    {
      height: r,
      bottom: s,
      left: l,
      right: d,
      top: g,
      width: m,
      x: p,
      y: f,
      update: b,
    }
  );
}
function Ro(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
    ? e.documentElement
    : e;
}
function El(e) {
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
    return !a || a.tagName === "BODY" ? !1 : El(a);
  }
}
function uv(e) {
  const n = e || window.event,
    a = n.target;
  return El(a)
    ? !1
    : n.touches.length > 1
    ? !0
    : (n.preventDefault && n.preventDefault(), !1);
}
const Zn = new WeakMap();
function cv(e, n = !1) {
  const a = L(n);
  let t = null;
  Ne(
    tv(e),
    (r) => {
      const s = Ro(Za(r));
      if (s) {
        const l = s;
        Zn.get(l) || Zn.set(l, l.style.overflow),
          a.value && (l.style.overflow = "hidden");
      }
    },
    { immediate: !0 }
  );
  const o = () => {
      const r = Ro(Za(e));
      !r ||
        a.value ||
        (vr &&
          (t = Aa(
            r,
            "touchmove",
            (s) => {
              uv(s);
            },
            { passive: !1 }
          )),
        (r.style.overflow = "hidden"),
        (a.value = !0));
    },
    i = () => {
      var r;
      const s = Ro(Za(e));
      !s ||
        !a.value ||
        (vr && t?.(),
        (s.style.overflow = (r = Zn.get(s)) != null ? r : ""),
        Zn.delete(s),
        (a.value = !1));
    };
  return (
    ho(i),
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
const vs = 45,
  dv = ie({
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
        lt((y) => ({
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
      const t = `${vs}px`,
        o = a,
        i = e,
        r = L(null),
        s = L(!1),
        l = L([]),
        d = L(-1),
        g = u(() => i.isLoading),
        m = u(() => i.results),
        p = u(() => `${i.borderRadius}px`),
        f = () => {
          i.results && d.value < i.results.length - 1 && (d.value += 1);
        },
        b = () => {
          d.value > 0 && (d.value -= 1);
        },
        S = () => {
          const y = l.value[d.value];
          if (!y) return;
          const D = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          y.dispatchEvent(D);
        },
        T = () => {
          (s.value = !1), o("update:search-term", ""), (d.value = -1);
        };
      Ne([m, g], () => {
        (s.value = !!m.value || g.value), o("is-dropdown-open", s.value);
      }),
        De(() => {
          yo(r, () => {
            T();
          });
        });
      const w = {
        IMAGE_DIMENSIONS_PX: vs,
        IMAGE_DIMENSIONS_PX_STRING: t,
        emit: o,
        props: i,
        searchBarRef: r,
        isSearchResultDropdownVisible: s,
        itemLinksRefs: l,
        highlightedItemIndex: d,
        isLoading: g,
        results: m,
        borderRadiusInPx: p,
        highlightNextItem: f,
        highlightPreviousItem: b,
        redirectToHighlightedItem: S,
        dropdownCloseHandler: T,
        ZyroLoader: Wr,
        ProductImage: vo,
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
  mv = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox",
  },
  gv = { class: "site-element-search-bar__input-wrapper" },
  pv = ["placeholder", "value", "onKeydown"],
  vv = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown",
  },
  hv = { key: 1, class: "site-element-search-bar__dropdown-no-results" },
  fv = ["area-selected"],
  yv = ["href", "onMouseover", "onFocus", "onKeydown"],
  bv = { class: "search-result-item__content" },
  _v = { class: "search-result-item__title" },
  wv = { class: "search-result-item__price" },
  kv = { key: 0 },
  Sv = { key: 0 },
  Tv = { key: 0, class: "search-result-item__sale-price" },
  Cv = { key: 1 };
function Pv(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      mv,
      [
        I("div", gv, [
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
            pv
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
            h("ul", vv, [
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
                ? (c(), h("p", hv, J(a.noResultsText), 1))
                : (c(!0),
                  h(
                    ge,
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
                                class: X([
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
                                I("div", bv, [
                                  I("h3", _v, J(r.title), 1),
                                  I("p", wv, [
                                    r.isInStock
                                      ? (c(),
                                        h("span", kv, [
                                          r.price?.length
                                            ? (c(),
                                              h("span", Sv, [
                                                r.oldPrice
                                                  ? (c(),
                                                    h(
                                                      "span",
                                                      Tv,
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
                                          Cv,
                                          J(a.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              yv
                            ),
                          ],
                          8,
                          fv
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
const Iv = oe(dv, [["render", Pv]]),
  Dl = (e, n) => {
    let a;
    return function () {
      const o = () => Reflect.apply(e, this, arguments);
      clearTimeout(a), (a = setTimeout(o, n));
    };
  },
  Ev = 6,
  Dv = 5,
  Mv = 4,
  Ov = 3,
  Ml = 2,
  Lv = { [Ev]: 18, [Dv]: 15, [Mv]: 12, [Ov]: 9, [Ml]: 6 },
  Bv = (e) => e?.variants[0].booking_event?.length_unit === gr;
function hr(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Gr = (e, n) => {
    const a = (t) => Math.round(t * 100) / 100;
    return Bv(e)
      ? `${a(hr(e) / 1e3 / 60 / 60)} ${n.hourShort}`
      : `${a(hr(e) / 1e3 / 60)} ${n.minuteShort}`;
  },
  In = (e) =>
    e[wl] !== Fr
      ? !1
      : !e.variants.every((n, a, t) => {
          const o = t[0]?.prices?.[0] ?? t[0],
            i = n?.prices?.[0] ?? n,
            r = o.sale_amount ?? o.amount,
            s = i.sale_amount ?? i.amount;
          return r === s;
        }),
  Sn = ({ variantsQuantity: e, variantId: n }) =>
    e.find((a) => a.id === n)?.inventory_quantity || 0,
  Ol = ({ product: e, variantsQuantity: n }) =>
    e.variants.reduce(
      (a, t) => a + Sn({ variantsQuantity: n, variantId: t.id }),
      0
    ),
  Av = ({ product: e, variantsQuantity: n }) =>
    e.variants[0].manage_inventory
      ? Ol({ product: e, variantsQuantity: n }) > 0
      : !0,
  xv = ({ variants: e }) =>
    e.reduce((n, a) =>
      (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a
    );
function Sa({ amount: e, currency: n, isPriceDisplayedWithCurrency: a = !0 }) {
  if (!n) return a ? "€0.00" : "0.00";
  const t = Number(e) || 0,
    i = Number(t / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
  return a ? n.template.replace("$1", i) : i;
}
const Rv = "https://backend.zyro.com/public",
  Nv = async ({ query: e, indices: n, pageSize: a = 5, storeId: t }) => {
    if (!e) return [];
    const o = await fetch(`${Rv}/search`, {
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
  hs = 400,
  Hv = ie({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o, ecommerceShoppingCart: i } = Ze(),
        r = u(() => i.value?.translations || {}),
        { toggleSearchDropdown: s } = ur({ blockId: a.blockId }),
        l = L(""),
        d = L(!1),
        g = L(null),
        m = u(() => t.value.ecommerceStoreId),
        p = u(() =>
          g.value
            ? g.value.map((T) => {
                const w =
                    T.site_product_selection === Fr
                      ? xv({ variants: T.variants })
                      : T.variants[0],
                  {
                    amount: y,
                    sale_amount: D,
                    currency_decimal_digits: C,
                    currency_template: M,
                    manage_inventory: R,
                  } = w,
                  N = { decimal_digits: C, template: M },
                  Q = `/product-redirect/${T.id}`,
                  G = y && In(T) ? `${r.value.from} ` : "",
                  P = y ? `${G}${Sa({ amount: D || y, currency: N })}` : "",
                  B = D ? Sa({ amount: y, currency: N }) : null,
                  $ =
                    !R ||
                    (!!y && Av({ product: T, variantsQuantity: T.variants }));
                return {
                  id: T.id,
                  thumbnail: T.thumbnail,
                  title: T.title,
                  href: Q,
                  price: P,
                  oldPrice: B,
                  isInStock: $,
                };
              })
            : null
        ),
        f = Dl(async () => {
          (d.value = !0),
            l.value && m.value
              ? (g.value = await Nv({
                  query: l.value,
                  indices: [ec],
                  storeId: m.value,
                }))
              : (g.value = null),
            (d.value = !1);
        }, hs),
        S = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: hs,
          props: a,
          meta: t,
          siteId: o,
          ecommerceShoppingCart: i,
          ecommerceTranslations: r,
          toggleSearchDropdown: s,
          searchTerm: l,
          isLoading: d,
          results: g,
          storeId: m,
          computedResults: p,
          searchHandler: f,
          updateSearchTerm: ({ newValue: T }) => {
            (l.value = T), f();
          },
          SiteElementSearchBar: Iv,
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
function $v(e, n, a, t, o, i) {
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
const Uv = oe(Hv, [["render", $v]]),
  vn = L(!1),
  hn = L(!1),
  No = L(!1),
  Ho = L(""),
  Wa = L(null),
  $o = L(!1),
  an = ({
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
      d = u(() => {
        const w = a && tc.includes(s.type),
          y = !a && !ac.includes(s.type);
        if (w || y) return "";
        const D = l(s.animation?.name);
        return Pi.includes(s.type) ? `${D} transition--root-hidden` : D;
      }),
      g = u(() => {
        const w = Wa.value && a === Wa.value;
        return !vn.value || (Wa.value && !w) ? "" : No.value;
      }),
      m = u(() => (hn.value ? Bn : null)),
      p = async (w) => {
        w.forEach(({ target: y, isIntersecting: D }) => {
          if (!D) {
            y.removeAttribute(An);
            return;
          }
          t || r.value?.unobserve(y), y.setAttribute(An, Bn);
        });
      },
      f = ({ root: w = null } = {}) => {
        s.animation?.name &&
          (r.value = new IntersectionObserver(p, { threshold: 0, root: w }));
      },
      b = async (w) => {
        if (s.animation?.name)
          if ((await Pt(), Pi.includes(s.type))) {
            const y = w?.querySelectorAll(`[${ga}="${Ar}"]`),
              D = w?.querySelectorAll(`[${ga}="${cn}"]`);
            [...y, ...D].forEach((M) => r.value?.observe(M));
          } else r.value?.observe(w);
      },
      S = () => {
        window.clearTimeout(o.value),
          window.clearTimeout(i.value),
          (vn.value = !1),
          (hn.value = !1);
      },
      T = ({ animation: w, id: y }) => {
        S(),
          !w !== "none" &&
            ((Wa.value = y),
            (Ho.value = w),
            (vn.value = !0),
            (No.value = l(Ho.value)),
            (o.value = setTimeout(() => {
              hn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (vn.value = !1), (hn.value = !1), (Wa.value = null);
            }, 2e3)));
      };
    return (
      Ne($o, async (w) => {
        w && (await Pt(), ($o.value = !1));
      }),
      {
        intersectionObserver: r,
        animationClass: d,
        animationInEditorClass: No,
        animationInEditorComponentId: Wa,
        isAnimationDisplayedInEditor: vn,
        isAnimationDisplayedInEditorActive: hn,
        animationInEditorName: Ho,
        addIntersectionObserver: f,
        observe: b,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: $o,
        customAnimationClass: g,
        animationAttributeStateValue: m,
      }
    );
  },
  Vv = {
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
      n(), lt((D) => ({ d75d39c4: b.value, "18bd5540": S.value }));
      const a = e,
        t = L(null),
        {
          intersectionObserver: o,
          animationClass: i,
          addIntersectionObserver: r,
          observe: s,
          shouldMountAnimationsInPreview: l,
        } = an({
          elementData: a.elementData,
          isParentBlockFooter: a.isParentBlockFooter,
          elementId: a.elementId,
        }),
        d = u(() => Object.values(a.siteLanguagePages)[0]),
        g = u(() => a.elementData.mobile?.isHidden || !1),
        m = u(() => a.elementData.desktop?.isHidden || !1),
        p = u(() =>
          a.elementData.type !== Mo
            ? ""
            : (
                a.siteLanguagePages[a.elementData.settings?.successPageId] ||
                d.value
              ).slug
        ),
        f = u(() =>
          a.elementData.type !== Mo
            ? ""
            : (
                a.siteLanguagePages[
                  a.elementData.settings?.cancellationPageId
                ] || d.value
              ).slug
        ),
        b = u(() => `${a.elementData.desktop.height}px`),
        S = u(() => `${a.elementData.mobile.height}px`),
        T = async () => {
          await s(t.value?.$el);
        },
        w = async () => {
          const C = [Ii, Ei].includes(a.elementData.type),
            R =
              t.value?.$el.getBoundingClientRect().height > window.innerHeight,
            N = !C && R && t.value ? t.value.$el.parentElement : null;
          r({ root: N }), C || (await T());
        };
      De(async () => {
        await w();
      }),
        Ct(() => o.value?.disconnect()),
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
        firstLanguagePage: d,
        isMobileElementHidden: g,
        isDesktopElementHidden: m,
        stripeSuccessPageSlug: p,
        stripeCancellationPageSlug: f,
        elementHeightDesktop: b,
        elementHeightMobile: S,
        observeElement: T,
        initiateAnimations: w,
        get ELEMENT_TYPE_BUTTON() {
          return ul;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Mo;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return nc;
        },
        get ELEMENT_TYPE_MAP() {
          return il;
        },
        get ELEMENT_TYPE_VIDEO() {
          return sl;
        },
        get ELEMENT_TYPE_IMAGE() {
          return oc;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return rc;
        },
        get ELEMENT_TYPE_FORM() {
          return ic;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return Ii;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return cl;
        },
        get ELEMENT_TYPE_GALLERY() {
          return Ei;
        },
        get ELEMENT_TYPE_EMBED() {
          return sc;
        },
        get ELEMENT_TYPE_SHAPE() {
          return lc;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return uc;
        },
        LayoutElementWrapper: Nd,
        GridButtonProviderUser: Yd,
        GridEcommerceButtonProviderUser: am,
        GridEmbedProviderUser: gm,
        GridFormProviderUser: Xm,
        GridGalleryProviderUser: dg,
        GridImageProviderUser: fg,
        GridInstagramFeedProviderUser: Hg,
        GridMapProviderUser: jg,
        GridSocialIconsProviderUser: ep,
        GridStripeButtonProviderUser: ip,
        GridTextBoxProviderUser: gp,
        GridVideoProviderUser: $p,
        GridShapeProviderUser: Gp,
        SiteElementSearchBarProviderSiteEngine: Uv,
        get useSiteEngineAnimations() {
          return an;
        },
        computed: u,
        onMounted: De,
        onBeforeUnmount: Ct,
        ref: L,
        watch: Ne,
        get isSearchDropdownOpen() {
          return lr;
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
function Yv(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    W(
      t.LayoutElementWrapper,
      {
        ref: "elementRef",
        class: X([
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
        default: ve(() => [
          a.elementData.type === t.ELEMENT_TYPE_BUTTON
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
                (c(),
                W(
                  t.GridFormProviderUser,
                  {
                    key: 3,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    class:
                      "layout-element__component layout-element__component--GridForm",
                  },
                  null,
                  8,
                  ["id", "data", "current-locale"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_VIDEO
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
            ? ce(
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
const Fv = oe(Vv, [
    ["render", Yv],
    ["__scopeId", "data-v-56b48ae8"],
  ]),
  Wv = {
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
        { isSearchOpenedInCurrentBlock: t } = ur({ blockId: a.blockId }),
        { components: o } = or(a),
        i = u(() => a.data),
        {
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
        } = dr({
          blockData: i,
          siteElements: o,
          shouldBuildResponsive: !a.isInPreviewMode,
        }),
        d = u(() => i.value.slot === "footer"),
        g = {
          props: a,
          isSearchOpenedInCurrentBlock: t,
          siteElements: o,
          blockData: i,
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
          isBlockFooter: d,
          toRefs: or,
          computed: u,
          get useSearchElementDropdown() {
            return ur;
          },
          BlockLayoutWrapper: Id,
          get useBlockLayout() {
            return dr;
          },
          LayoutElementProviderUser: Fv,
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
function qv(e, n, a, t, o, i) {
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
        default: ve(() => [
          (c(!0),
          h(
            ge,
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
const Gv = oe(Wv, [["render", qv]]),
  jv = ie({
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
          const d = 4 / 2,
            g = Array.from({ length: 4 }).fill(0);
          if (t.currentPage <= d + 1) {
            g[0] = 1;
            const p = g.map((f, b) => g[0] + b);
            return p.push(t.pageCount), p;
          }
          if (t.currentPage >= t.pageCount - d + 1) {
            const p = g.map((f, b) => t.pageCount - b);
            return p.reverse().unshift(1), p;
          }
          g[0] = t.currentPage - d + 1;
          const m = g.map((p, f) => g[0] + f);
          return m.unshift(1), (m[m.length - 1] = t.pageCount), m;
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
  Ll = (e) => (Ot("data-v-1ee2fd7c"), (e = e()), Lt(), e),
  zv = ["disabled"],
  Kv = Ll(() =>
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
  Qv = [Kv],
  Zv = ["data-testId", "disabled", "onClick"],
  Xv = ["disabled"],
  Jv = Ll(() =>
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
  eh = [Jv];
function th(e, n, a, t, o, i) {
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
            Qv,
            8,
            zv
          ),
          (c(!0),
          h(
            ge,
            null,
            ke(
              t.paginationTriggersList,
              (r) => (
                c(),
                h(
                  "button",
                  {
                    key: `${r}-trigger`,
                    class: X([
                      "pagination__button pagination__trigger",
                      { "pagination__trigger--current": r === a.currentPage },
                    ]),
                    "data-testId": `button-${r}`,
                    disabled: a.currentPage === r,
                    onClick: (s) => t.emit("change-page", r),
                  },
                  J(r),
                  11,
                  Zv
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
            eh,
            8,
            Xv
          ),
        ],
        4
      ))
    : O("", !0);
}
const Bl = oe(jv, [
    ["render", th],
    ["__scopeId", "data-v-1ee2fd7c"],
  ]),
  fr = 1800,
  ah = 1080,
  fs = 100,
  nh = {
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
      n(), lt((m) => ({ "74783e9f": o.value }));
      const a = e,
        t = L(),
        o = u(() => `${a.blogTitleTextSize}px`),
        i = u(() => a.post?.coverImageAlt ?? ""),
        r = u(() => xn(fr, null)),
        s = u(() => a.post?.categories ?? []),
        l = u(
          () =>
            !!a.shownItems.coverImage &&
            (a.post?.coverImageSrc || a.post?.coverImageSrcset)
        ),
        d = u(() => {
          const m = t.value?.getBoundingClientRect();
          if (!m || !window || !document) return !0;
          const { top: p } = m,
            { innerHeight: f } = window,
            { clientHeight: b } = document.documentElement;
          return p <= (f || b) + fs;
        }),
        g = {
          props: a,
          VERTICAL_VIEWPORT_OFFSET: fs,
          coverImageContainerRef: t,
          blogTitleTextSize: o,
          coverImageAlt: i,
          sizes: r,
          categories: s,
          isCoverImageShown: l,
          isElementInViewport: d,
          BlockBlogListItemCategories: fl,
          BlockBlogListItemMeta: yl,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return fr;
          },
          get getFormattedNumericDate() {
            return bl;
          },
          get getGridItemSizes() {
            return xn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return ga;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return cn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return An;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return Bn;
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
  oh = ["href"],
  rh = { class: "block-blog-list-item__cover-image-wrapper" },
  ih = ["alt", "src", "srcset", "sizes", "loading"],
  sh = ["href"];
function lh(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      tt({
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
          ? ce(
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
                  I("div", rh, [
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
                      ih
                    ),
                  ]),
                ],
                8,
                oh
              )),
              [[r, "blog-list-item-image"]]
            )
          : O("", !0),
        ce(
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
          [[Wt, a.shownItems.categories && t.categories.length]]
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
            ce(
              I(
                "h3",
                { class: "font-primary block-blog-list-item__title" },
                J(a.post.meta.title),
                513
              ),
              [[Wt, a.shownItems.title]]
            ),
            ce(
              I(
                "p",
                { class: "block-blog-list-item__description font-secondary" },
                J(a.post.meta.description),
                513
              ),
              [[Wt, a.shownItems.description]]
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
          sh
        ),
      ],
      16
    )
  );
}
const uh = oe(nh, [
    ["render", lh],
    ["__scopeId", "data-v-d6576b2a"],
  ]),
  ch = "Show all posts",
  ys = 46,
  bs = 24,
  dh = {
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
      n(), lt((y) => ({ "2251a3f7": d.value, f64549e6: l.value }));
      const t = e,
        o = a,
        i = L(0),
        r = L(null),
        s = L(!1),
        l = u(() => Number.parseInt(t.data.settings.postColumnCount, 10)),
        d = u(() => `${ys}px`),
        g = u(() => t.data.settings.blogTitleFontSize || bs),
        m = u(() => {
          const {
              categories: y,
              showAllPosts: D,
              showWithoutCategories: C,
            } = t.data.settings,
            M = D
              ? t.posts
              : Object.fromEntries(
                  Object.entries(t.posts).filter(([, R]) => {
                    const N = y.some((G) => R.categories.includes(G));
                    return (C && R.categories.length === 0) || N;
                  })
                );
          return r.value
            ? Object.fromEntries(
                Object.entries(M).filter(([, R]) =>
                  R.categories.includes(r.value)
                )
              )
            : M;
        }),
        p = u(() =>
          Object.values(m.value).sort(
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
          Math.ceil(Object.keys(m.value).length / t.data.settings.postsPerPage)
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
            nr({ linkToSection: `#${t.blockId}` });
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
        Ct(() => {
          window.removeEventListener("popstate", S);
        });
      const w = {
        SHOW_ALL_POSTS_LABEL: ch,
        BLOG_LIST_PADDING_X: ys,
        props: t,
        emit: o,
        currentPage: i,
        filteredCategoryId: r,
        isAnimationActive: s,
        postColumnCount: l,
        blogListPaddingXCssVar: d,
        BLOG_TITLE_FONT_SIZE_FALLBACK: bs,
        blogTitleTextSize: g,
        postsToRender: m,
        sortedPosts: p,
        currentPageItems: f,
        pageCount: b,
        handleBrowserNavigationPageChange: S,
        setCurrentPage: T,
        get scrollToSection() {
          return nr;
        },
        ZyroPagination: Bl,
        BlockBlogListItem: uh,
        ref: L,
        onMounted: De,
        onBeforeUnmount: Ct,
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
  mh = ["id"],
  gh = { key: 0, class: "block-blog-list__filter" },
  ph = { key: 2, class: "block-blog-list__empty-block" };
function vh(e, n, a, t, o, i) {
  const r = je("qa");
  return ce(
    (c(),
    h(
      "div",
      { id: a.blockId, ref: "blogList", class: "block-blog-list" },
      [
        t.filteredCategoryId
          ? (c(),
            h("div", gh, [
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
                class: X([
                  "block-blog-list__list",
                  { "block-blog-list__list--one-col": t.postColumnCount === 1 },
                ]),
              },
              [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(t.currentPageItems, (s, l) =>
                    ce(
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
                            n[1] || (n[1] = (d) => (t.filteredCategoryId = d)),
                          onPostClick: (d) => t.emit("post-click", s),
                        },
                        {
                          "block-blog-list-item-overlay": ve(() => [
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
            h("div", ph, [
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
      mh
    )),
    [[r, "builder-section-blog"]]
  );
}
const hh = oe(dh, [
    ["render", vh],
    ["__scopeId", "data-v-759d547e"],
  ]),
  fh = ie({
    name: "BlockBlogListProviderUser",
    components: { BlockBlogList: hh },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: At },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      } = Ze();
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
            ([, e]) => e.type === sr && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([n, a]) => {
            const t = Ba(a.coverImageOrigin, a.coverImagePath, this.siteId, {
              width: fr,
              height: ah,
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
function yh(e, n, a, t, o, i) {
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
const bh = oe(fh, [["render", yh]]),
  _h = ie({ props: { columnCount: { type: Number, default: 3 } } }),
  jr = (e) => (Ot("data-v-c0f30deb"), (e = e()), Lt(), e),
  wh = { class: "skeleton-loader" },
  kh = jr(() =>
    I("div", { class: "skeleton-loader__image-placeholder" }, null, -1)
  ),
  Sh = jr(() => I("div", { class: "skeleton-loader__text" }, null, -1)),
  Th = jr(() => I("div", { class: "skeleton-loader__text" }, null, -1)),
  Ch = [kh, Sh, Th];
function Ph(e, n, a, t, o, i) {
  return (
    c(),
    h("div", wh, [
      (c(!0),
      h(
        ge,
        null,
        ke(
          e.columnCount,
          (r) => (c(), h("div", { key: r, class: "skeleton-loader__item" }, Ch))
        ),
        128
      )),
    ])
  );
}
const Ih = oe(_h, [
    ["render", Ph],
    ["__scopeId", "data-v-c0f30deb"],
  ]),
  Eh = ie({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...xt(this.textColorVars) };
      },
    },
  }),
  Dh = I(
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
function Mh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "product-list-empty-state", style: xe(e.computedStyles) },
      [Dh, I("h6", null, J(e.emptyPageMessage), 1)],
      4
    )
  );
}
const Oh = oe(Eh, [["render", Mh]]),
  Lh = {},
  Bh = {
    width: "392",
    height: "392",
    viewBox: "0 0 392 392",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ah = Br(
    '<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>',
    2
  ),
  xh = [Ah];
function Rh(e, n) {
  return c(), h("svg", Bh, xh);
}
const Al = oe(Lh, [["render", Rh]]),
  Nh = {
    props: {
      text: { type: String, default: "" },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...xt(this.ribbonStyle) };
      },
    },
  },
  Hh = { class: "ecommerce-product-ribbon__text" };
function $h(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "ecommerce-product-ribbon", style: xe(i.computedStyles) },
      [I("p", Hh, J(a.text), 1)],
      4
    )
  );
}
const Uh = oe(Nh, [["render", $h]]),
  Vh = ie({
    __name: "ProductListItem",
    props: {
      image: { default: "" },
      title: {},
      price: { default: null },
      isCentered: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      imageMaxWidth: {},
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
      imageRatio: { default: "cover" },
    },
    emits: ["button-click"],
    setup(e, { expose: n }) {
      n(), lt((g) => ({ "5a795a7f": g.imageRatio }));
      const a = { [ga]: cn },
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
        l = u(() => ({ ...xt(t.buttonStyle) })),
        d = {
          CUSTOM_ATTRIBUTES: a,
          props: t,
          isInStock: o,
          blockButtonText: i,
          buttonBorderColor: r,
          buttonBackgroundColor: s,
          computedStyles: l,
          GridButton: Va,
          get PRODUCT_TYPE_BOOKING() {
            return Nt;
          },
          get formatPrice() {
            return Sa;
          },
          ProductImage: vo,
          ProductImagePlaceholder: Al,
          ProductRibbon: Uh,
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
  Yh = { class: "product-list-item__content" },
  Fh = { class: "product-list-item__title" },
  Wh = { key: 0, class: "product-list-item__price-wrapper" },
  qh = { key: 0, class: "product-list-item__price-range" },
  Gh = { key: 0, class: "product-list-item__price-content" },
  jh = { key: 1, class: "product-list-item__duration" },
  zh = { key: 1, class: "product-list-item__text" };
function Kh(e, n, a, t, o, i) {
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
        I("div", Yh, [
          ce(
            (c(),
            h(
              "div",
              {
                class: X([
                  "product-list-item__image-wrapper",
                  {
                    "product-list-item__image-wrapper--contain":
                      a.imageRatio === "contain",
                  },
                ]),
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
                        width: a.imageMaxWidth,
                        height: a.imageMaxWidth,
                        "site-id": a.siteId,
                        "object-fit": a.imageRatio,
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
                    W(t.ProductImagePlaceholder, {
                      key: 1,
                      class: "product-list-item__image",
                    })),
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
          ce((c(), h("h6", Fh, [Ae(J(a.title), 1)])), [
            [r, "product-list-section-item-title"],
          ]),
          a.price
            ? ce(
                (c(),
                h("div", Wh, [
                  t.isInStock
                    ? (c(),
                      h(
                        ge,
                        { key: 0 },
                        [
                          I("p", null, [
                            a.isPriceRangeShown && !a.price.sale_amount
                              ? (c(), h("span", qh, J(a.translations.from), 1))
                              : O("", !0),
                            I(
                              "span",
                              {
                                class: X({
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
                              h("p", Gh, [
                                a.isPriceRangeShown
                                  ? (c(),
                                    h(
                                      ge,
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
                            ? (c(), h("p", jh, J(a.duration), 1))
                            : O("", !0),
                        ],
                        64
                      ))
                    : (c(), h("p", zh, J(a.translations.soldOut), 1)),
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
                class: X([
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
                ce(
                  Ee(
                    t.GridButton,
                    {
                      type: a.buttonType,
                      content: t.blockButtonText,
                      class: X([
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
const Qh = oe(Vh, [
    ["render", Kh],
    ["__scopeId", "data-v-ad1657c2"],
  ]),
  yr = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t < o ? n : a;
    }),
  Zh = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t > o ? n : a;
    }),
  Uo = 24,
  Xh = ie({
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
      imageRatio: { default: "cover" },
    },
    emits: ["product-click", "button-click", "page-changed"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = Dc(),
        r = L(1),
        s = L(!1),
        l = u(() => `store-page-${t.blockId}`),
        d = u(() => Math.ceil(t.productIds.length / t.productsPerPage)),
        g = u(() => ({ [An]: s.value ? Bn : null })),
        m = u(() => (r.value > d.value ? d.value : r.value < 1 ? 1 : r.value)),
        p = u(() => (m.value - 1) * t.productsPerPage),
        f = u(() => p.value + t.productsPerPage),
        b = u(() => t.productIds.slice(p.value, f.value)),
        S = u(() => {
          const B = Object.values(t.products),
            $ = B.filter((K) => b.value.includes(K.id));
          return $.length ? $ : B.slice(p.value, f.value);
        }),
        T = u(
          () =>
            t.translations.onlineStoreNoProducts ||
            "No publicly visible products"
        ),
        w = () => {
          const $ =
              new URLSearchParams(window.location.search).get(l.value) || "1",
            K = Number.parseInt($, 10);
          K !== r.value && (r.value = K);
        };
      De(() => {
        const $ =
            new URLSearchParams(window.location.search).get(l.value) || "1",
          K = Number.parseInt($, 10);
        K !== r.value && ((r.value = K), o("page-changed", b.value)),
          window.addEventListener("popstate", () => {
            w();
          });
      }),
        Ct(() => {
          window.removeEventListener("popstate", w);
        });
      const y = u(() => t.blockStyle?.textAlign === "center"),
        D = u(() => {
          const B = (t.columnCount - 1) * Uo,
            $ = Ac - B;
          return Math.floor($ / t.columnCount);
        }),
        C = u(() => ({
          "--image-max-width": `${D.value}px`,
          "--gap-size": `${Uo}px`,
          ...xt(t.textColorVars),
        })),
        M = async (B) => {
          (s.value = !1),
            (r.value = B),
            o("page-changed", b.value),
            await Pt(),
            (s.value = !0);
          const $ = document.getElementById(t.blockId),
            K = $?.getBoundingClientRect();
          (K && K.top >= 0 && K.bottom <= window.innerHeight) ||
            $?.scrollIntoView({ behavior: "smooth" });
        },
        R = (B) => Object.values(t.productPages).find(($) => $.productId === B),
        P = {
          GAP_SIZE: Uo,
          props: t,
          emit: o,
          route: i,
          currentPage: r,
          isAnimationActive: s,
          blockStorePageQuery: l,
          pageCount: d,
          customAttributes: g,
          modifiedCurrentPage: m,
          startIndex: p,
          endIndex: f,
          targetIds: b,
          currentPageProducts: S,
          emptyPageMessage: T,
          handleBrowserNavigationPageChange: w,
          isCentered: y,
          imageWidth: D,
          computedStyles: C,
          handlePageChange: M,
          getItemProductPage: R,
          getItemProductPageTo: (B) => {
            if (t.isProductListItemLinkDisabled) return i;
            const $ = R(B);
            return $ ? { path: `/${$.slug}` } : { path: "/" };
          },
          getSmallestProductPrice: (B) =>
            In(B) ? yr(B).prices[0] : B.variants[0].prices[0],
          getProductImage: (B) => (In(B) && yr(B).image_url) || B.thumbnail,
          ListSkeletonLoader: Ih,
          ZyroPagination: Bl,
          ProductListEmptyState: Oh,
          ProductListItem: Qh,
          get getFormattedBookingDuration() {
            return Gr;
          },
          get isProductPriceRangeShown() {
            return In;
          },
          get getFullProductQuantity() {
            return Ol;
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
  Jh = ["id"],
  ef = { key: 1, ref: "productList", class: "block-product-list" },
  tf = { class: "block-product-list__content" };
function af(e, n, a, t, o, i) {
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
              ef,
              [
                I("div", tf, [
                  (c(!0),
                  h(
                    ge,
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
                            default: ve(() => [
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
                                  "image-max-width": t.imageWidth,
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
                                  onClick: (d) => e.$emit("product-click", s),
                                  onButtonClick: (d) =>
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
                                  "image-max-width",
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
      Jh
    )
  );
}
const nf = oe(Xh, [
    ["render", af],
    ["__scopeId", "data-v-327db8c3"],
  ]),
  _s = (e, { productPages: n, isStoreTypeZyro: a, products: t }) => {
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
                const R = C.product_collections.find(
                    (Q) => Q.collection_id === e.data.productCategoryId
                  ),
                  N = M.product_collections.find(
                    (Q) => Q.collection_id === e.data.productCategoryId
                  );
                return R.order - N.order;
              }))
            : D?.sort((C, M) => C.title.localeCompare(M.title))
        );
      }),
      i = u(() => e.data.settings?.styles),
      r = u(() => e.data.textColorVars),
      s = u(() => e.data.columnCount),
      l = u(() => e.data.productCategoryId),
      d = u(() => e.data.productIds),
      g = u(() => e.data.isButtonEnabled ?? !1),
      m = u(() => e.data.buttonDisplay),
      p = u(() => e.data.buttonText),
      f = u(() => e.data.buttonStyle),
      b = u(() => e.data.buttonType),
      S = u(() => e.data.buttonBorderWidth),
      T = u(() => e.data.ribbonStyle),
      w = u(() => e.data.imageRatio),
      y = u(() => e.data.productsPerPage || Lv[s.value || Ml]);
    return {
      productList: o,
      textColorVars: r,
      blockStyle: i,
      columnCount: s,
      productsPerPage: y,
      productIds: d,
      productCategoryId: l,
      isButtonEnabled: g,
      buttonDisplay: m,
      buttonText: p,
      buttonStyle: f,
      buttonType: b,
      buttonBorderWidth: S,
      ribbonStyle: T,
      imageRatio: w,
    };
  },
  of = {
    __name: "BlockEcommerceProductListProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: At },
      blocks: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = Ze(),
        {
          products: o,
          isStoreTypeZyro: i,
          productPages: r,
          isShoppingCartOpen: s,
          shoppingCartItems: l,
          variantsQuantity: d,
          isLoading: g,
          fetchProducts: m,
          setShoppingCartOpen: p,
          setShoppingCartItems: f,
          setIsCheckoutLoading: b,
          setSelectedBookingId: S,
        } = Ht(),
        {
          openEcommerceModal: T,
          closeEcommerceModal: w,
          setProductPreviewData: y,
        } = Rt(),
        { initiateCheckout: D } = en(),
        {
          productList: C,
          blockStyle: M,
          textColorVars: R,
          columnCount: N,
          productsPerPage: Q,
          productIds: G,
          productCategoryId: P,
          isButtonEnabled: B,
          buttonDisplay: $,
          buttonText: K,
          buttonStyle: V,
          buttonType: E,
          buttonBorderWidth: Y,
          ribbonStyle: U,
          imageRatio: j,
        } = _s(a, { productPages: r, isStoreTypeZyro: i, products: o }),
        k = L(!1),
        v = u(() => !!C.value?.length),
        F = u(() => g.value || !k.value),
        q = (x) => {
          m(x);
        },
        te = async (x) => {
          if (a.isInPreviewMode) {
            T("EcommerceMessageButtonDisabled");
            return;
          }
          if (x.options.length) {
            const ae = Object.values(r.value).find(
                (be) => be.productId === x.id
              ),
              le = Object.keys(a.blocks)
                .filter((be) => a.blocks[be].type === "BlockEcommerceProduct")
                .find((be) => ae.blocks.includes(be));
            if (!le) {
              if (!ae) {
                window.location.assign("/");
                return;
              }
              window.location.assign(`/${ae.slug}`);
              return;
            }
            y(a.blocks[le]), T("EcommerceProductPreview");
            return;
          }
          const _ = [{ ...x, variants: [x.variants[0]] }];
          if ((await w(), x.type.value === Nt)) {
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
      const Z = {
        props: a,
        siteId: t,
        products: o,
        isStoreTypeZyro: i,
        productPages: r,
        isShoppingCartOpen: s,
        shoppingCartItems: l,
        variantsQuantity: d,
        isEcommerceLoading: g,
        fetchProducts: m,
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
        textColorVars: R,
        columnCount: N,
        productsPerPage: Q,
        productIds: G,
        productCategoryId: P,
        isButtonEnabled: B,
        buttonDisplay: $,
        buttonText: K,
        buttonStyle: V,
        buttonType: E,
        buttonBorderWidth: Y,
        ribbonStyle: U,
        imageRatio: j,
        isClientLoaded: k,
        isProductListShown: v,
        isLoading: F,
        handlePageChange: q,
        handleButtonClick: te,
        computed: u,
        ref: L,
        onMounted: De,
        get useSiteGlobal() {
          return Ze;
        },
        get isAppPrerendering() {
          return pl;
        },
        BlockEcommerceProductList: nf,
        get useBlockEcommerceProductList() {
          return _s;
        },
        get SYSTEM_LOCALE() {
          return At;
        },
        get useEcommerceModal() {
          return Rt;
        },
        get useEcommerce() {
          return en;
        },
        get PRODUCT_TYPE_BOOKING() {
          return Nt;
        },
        get useEcommerceGlobal() {
          return Ht;
        },
      };
      return (
        Object.defineProperty(Z, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Z
      );
    },
  };
function rf(e, n, a, t, o, i) {
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
const sf = oe(of, [["render", rf]]),
  xl = ({
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
    function d(T) {
      return T.touches;
    }
    function g(T) {
      const w = d(T)[0];
      (i = w.clientX), (r = w.clientY);
    }
    function m(T) {
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
            y[D]("dragstart", m, !1),
            y[D]("drag", b, !1);
        else if (l) {
          const C = e.swipe ? g : m,
            M = e.swipe ? f : b;
          y[D](e.swipe ? "touchstart" : "dragstart", C, !1),
            y[D](e.swipe ? "touchmove" : "drag", M, !1);
        }
      },
    };
  },
  lf = ie({
    components: { ProductImage: vo, ProductImagePlaceholder: Al },
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
        PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX: Di,
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
        return this.isQuickPreview ? cc : dc;
      },
      carouselStyle() {
        return {
          "--image-max-width": `${this.imageMaxWidth}px`,
          "--image-max-width-left": `${mc}px`,
          "--image-max-width-small": `${Di}px`,
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
        const { enableMoveEvents: n } = xl({
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
  uf = I(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--left" },
    null,
    -1
  ),
  cf = [uf],
  df = I(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--right" },
    null,
    -1
  ),
  mf = [df],
  gf = ["onClick"],
  pf = { class: "product-carousel__dots-wrapper" },
  vf = ["onClick"];
function hf(e, n, a, t, o, i) {
  const r = Be("ProductImage"),
    s = Be("ProductImagePlaceholder"),
    l = je("qa");
  return (
    c(),
    h(
      "div",
      {
        class: X([
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
            class: X([
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
                  ge,
                  { key: 0 },
                  [
                    ce(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--left",
                          onClick:
                            n[0] ||
                            (n[0] = (...d) =>
                              e.goToPreviousSlide && e.goToPreviousSlide(...d)),
                        },
                        cf
                      )),
                      [[l, "product-carousel-button-prev"]]
                    ),
                    ce(
                      (c(),
                      h(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--right",
                          onClick:
                            n[1] ||
                            (n[1] = (...d) =>
                              e.goToNextSlide && e.goToNextSlide(...d)),
                        },
                        mf
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
                  Et,
                  {
                    key: 1,
                    name: `slide-${e.slideDirection}`,
                    mode: "out-in",
                    class: "product-carousel__image-content",
                  },
                  {
                    default: ve(() => [
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
                            (n[2] = (d) =>
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
              ge,
              { key: 0 },
              [
                e.isQuickPreview
                  ? O("", !0)
                  : (c(),
                    h(
                      "div",
                      {
                        key: 0,
                        class: X([
                          "product-carousel__image-list",
                          {
                            "product-carousel__image-list-left":
                              e.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        e.imageListStartIndex !== 0
                          ? ce(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 0,
                                  class: X([
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
                                    (n[3] = (...d) =>
                                      e.moveImageListLeft &&
                                      e.moveImageListLeft(...d)),
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
                            class: X({
                              "product-carousel__image-list-element-wrapper-left":
                                e.isGalleryLeft,
                            }),
                          },
                          [
                            (c(!0),
                            h(
                              ge,
                              null,
                              ke(
                                e.thumbnails,
                                (d, g) => (
                                  c(),
                                  h(
                                    "button",
                                    {
                                      key: `image-${g}-${d.url}`,
                                      class: X([
                                        "product-carousel__image-list-element",
                                        {
                                          "product-carousel__image-list-element--active":
                                            e.isImageMatch(g),
                                        },
                                      ]),
                                      onClick: (m) => e.handleThumbnailClick(g),
                                    },
                                    [
                                      Ee(
                                        r,
                                        {
                                          src: d.url,
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
                                    gf
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        e.isRightImageArrowShown
                          ? ce(
                              (c(),
                              h(
                                "button",
                                {
                                  key: 1,
                                  class: X([
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
                                    (n[4] = (...d) =>
                                      e.moveImageListRight &&
                                      e.moveImageListRight(...d)),
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
                I("div", pf, [
                  (c(!0),
                  h(
                    ge,
                    null,
                    ke(
                      e.images,
                      (d, g) => (
                        c(),
                        h(
                          "button",
                          {
                            key: `image-dot-${g}`,
                            class: "product-carousel__dot-button",
                            onClick: (m) => (e.currentIndex = g),
                          },
                          [
                            I(
                              "span",
                              {
                                class: X([
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
                          vf
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
const ff = oe(lf, [["render", hf]]),
  yf = ie({
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
  bf = { class: "option-select" },
  _f = { class: "option-select__label" },
  wf = { class: "option-select__select-wrapper" },
  kf = ["value"],
  Sf = ["value"];
function Tf(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", bf, [
      I("p", _f, J(a.title), 1),
      I("div", wf, [
        ce(
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
                ge,
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
                      Sf
                    )
                  )
                ),
                128
              )),
            ],
            40,
            kf
          )),
          [[r, "product-section-select-button"]]
        ),
      ]),
    ])
  );
}
const Cf = oe(yf, [
    ["render", Tf],
    ["__scopeId", "data-v-4f73632f"],
  ]),
  Pf = {
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
  Rl = (e) => (Ot("data-v-56d737b7"), (e = e()), Lt(), e),
  If = Rl(() => I("div", { class: "skeleton-loader__image" }, null, -1)),
  Ef = Rl(() =>
    I(
      "div",
      { class: "skeleton-loader__title skeleton-loader__text" },
      null,
      -1
    )
  );
function Df(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      { class: "skeleton-loader", style: xe(i.computedStyles) },
      [
        If,
        I(
          "div",
          {
            class: X([
              "skeleton-loader__wrapper",
              { "skeleton-loader__wrapper--center": a.textAlign === "center" },
            ]),
          },
          [
            Ef,
            (c(),
            h(
              ge,
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
const Mf = oe(Pf, [
    ["render", Df],
    ["__scopeId", "data-v-56d737b7"],
  ]),
  Of = ie({
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
        if (n.match(Vc)) this.$emit("quantity-change", Number(e.target.value));
        else if (n === "") return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === "" &&
          (this.$emit("quantity-change", 1), (this.inputValue = 1));
      },
    },
  }),
  Lf = ["disabled"],
  Bf = ["disabled"];
function Af(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "span",
      {
        class: X([
          "quantity-picker",
          { "quantity-picker--cart-style": e.isCartStyle },
        ]),
        style: xe(e.computedStyles),
      },
      [
        ce(
          (c(),
          h(
            "button",
            {
              class: X([
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
        ce(
          I(
            "input",
            {
              "onUpdate:modelValue": n[1] || (n[1] = (s) => (e.inputValue = s)),
              disabled: e.isInputDisabled,
              class: X([
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
            Lf
          ),
          [
            [el, e.inputValue],
            [r, `${e.qaSelector}-text-qty`],
          ]
        ),
        ce(
          (c(),
          h(
            "button",
            {
              class: X([
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
            Bf
          )),
          [[r, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Nl = oe(Of, [
    ["render", Af],
    ["__scopeId", "data-v-9766ec29"],
  ]),
  Vo = 5,
  fn = 1,
  xf = ie({
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
      n(), lt((_) => ({ a6b208e6: g.value }));
      const t = { [ga]: cn },
        o = e,
        i = a,
        r = L(1),
        s = L(""),
        l = L(!1),
        d = L(ua),
        g = u(() => `${zt}px`),
        m = u(() => o.currentPageType === ll),
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
                  (ae, he, le) =>
                    le.findIndex((be) => be.value === ae.value) === he
                ),
              }))
            : []
        ),
        w = u(() => d.value?.variants[0]),
        y = u(
          () =>
            o.productData.purchasable === void 0 || o.productData.purchasable
        ),
        D = (_) => {
          const ae = w.value?.options.find(
            (he) => he.option_id === T.value[_][0].option_id
          );
          return Object.values(T.value[_]).find((he) => ae?.value === he.value)
            ?.id;
        },
        C = u(() =>
          d.value.id ? w.value?.prices[0] : S.value?.variants[0].prices[0]
        ),
        M = u(
          () =>
            o.quantifiedCartItemsList.find(
              (_) => _.product.variants[0].id === w.value?.id
            )?.quantity || 0
        ),
        R = u(() => (o.isCartVisible ? r.value + M.value : r.value)),
        N = u(() =>
          w.value?.manage_inventory
            ? R.value <
              Sn({
                variantsQuantity: o.variantsQuantity,
                variantId: w.value?.id,
              })
            : !0
        ),
        Q = u(() => ({ ...xt({ ...o.textColorVars, ...o.blockButtonStyle }) })),
        G = u(
          () => !S.value?.options.length || (S.value?.options.length && d.value)
        ),
        P = u(() => S.value?.type.value === Nt),
        B = u(
          () =>
            P.value && o.shoppingCartItems?.some((_) => _.id === S.value?.id)
        ),
        $ = u(
          () => B.value || !o.canAddToCart(S.value?.id, d.value?.variants[0].id)
        ),
        K = u(() =>
          B.value
            ? `✓ ${o.translations.booked}`
            : o.blockButtonText || o.translations?.addToBag || "Add to bag"
        ),
        V = u(() => S.value?.variants[0].booking_event?.location),
        E = u(() => Gr(S.value, o.translations)),
        Y = u(
          () =>
            w.value?.manage_inventory &&
            Sn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            }) === 0
        ),
        U = u(() => !!w.value?.manage_inventory),
        j = u(() => {
          if (!o.productPages) return "/";
          const _ = Object.values(o.productPages).find(
            (ae) => ae.productId === S.value.id
          );
          return _ ? `/${_.slug}` : "/";
        }),
        k = u(() => {
          const _ = Sn({
            variantsQuantity: o.variantsQuantity,
            variantId: w.value?.id,
          });
          return Y.value || M.value === _
            ? o.translations.outOfStock
            : `${_ <= Vo ? _ : `${Vo}+`} ${o.translations.inStock} `;
        }),
        v = (_) => ({ ...S.value, variants: [_] }),
        F = () => {
          if (!S.value) return ua;
          if (S.value[wl] === Fr) {
            const ae = S.value.variants.reduce((be, de) => {
                const z = be.prices[0]?.sale_amount || be.prices[0]?.amount,
                  se = de.prices[0]?.sale_amount || de.prices[0]?.amount;
                return z <= se ? be : de;
              }),
              he = T.value.map(
                (be) =>
                  Object.values(be).find((de) =>
                    ae.options.some((z) => z.value === de.value)
                  ) || {}
              ),
              le = { ...ae, options: [...he] };
            return v(le);
          }
          const _ = S.value.variants.find((ae) =>
            ae.options.every((he) =>
              T.value.some((le) => le[0].value === he.value)
            )
          );
          return v(_ || S.value.variants[0]);
        },
        q = () => {
          const _ = new Array(r.value).fill(d.value);
          (r.value = fn), i("buy-button-click", _);
        },
        te = (_) => {
          r.value = fn;
          const ae =
              S.value.options
                .map((de) => de.values.find((z) => z.id === _))
                .find((de) => de) || {},
            le = [
              ...w.value?.options.filter((de) => de.option_id !== ae.option_id),
              ae,
            ],
            be = S.value.variants.find((de) =>
              de.options.every((z) =>
                le.some(
                  (se) => se.value === z.value && se.option_id === z.option_id
                )
              )
            );
          be && (d.value = v(be));
        },
        Z = (_) => {
          const ae = w.value?.manage_inventory;
          if (((l.value = o.shoppingCartItems.length + _ >= za), ae)) {
            const he = Sn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            });
            if (M.value + _ > he || l.value) {
              const le = Math.min(
                he - M.value,
                za - o.shoppingCartItems.length
              );
              r.value = le;
              return;
            }
          } else if (l.value) {
            r.value = za - o.shoppingCartItems.length;
            return;
          }
          if (_ <= 0) {
            r.value = fn;
            return;
          }
          r.value = _;
        };
      De(() => {
        S.value && (d.value = F());
      }),
        Ne(S, (_, ae) => {
          JSON.stringify(_) !== JSON.stringify(ae) && (d.value = F());
        }),
        Ne(d, (_, ae) => {
          (ae?.id === -1 && !_?.site_product_selection) ||
            (JSON.stringify(_) !== JSON.stringify(ae) &&
              _?.variants[0].image_url &&
              (s.value = _.variants[0].image_url));
        }),
        Ne(
          () => o.shoppingCartItems,
          (_) => {
            const ae = _?.length || 0;
            (r.value = fn), (l.value = ae + r.value >= za);
          },
          { immediate: !0 }
        );
      const x = {
        MAX_STOCK_AMOUNT_TO_SHOW: Vo,
        DEFAULT_PICKER_VALUE: fn,
        CUSTOM_ATTRIBUTES: t,
        props: o,
        emit: i,
        selectedQuantity: r,
        variantImage: s,
        isLimitReached: l,
        selectedVariant: d,
        mobileMaxWidthCSSVar: g,
        isBlockInProductPage: m,
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
        totalQuantitySelected: R,
        isStockAvailable: N,
        computedStyles: Q,
        isPriceShown: G,
        isProductTypeBooking: P,
        isBookingProductInCart: B,
        isAddToCartDisabled: $,
        buttonText: K,
        location: V,
        formattedBookingDuration: E,
        isOutOfStock: Y,
        isStockInfoShown: U,
        productPagePath: j,
        stockInfoText: k,
        getProductWithSelectedVariant: v,
        getInitiallySelectedVariant: F,
        handleButtonClick: q,
        handleVariantOptionChange: te,
        handleQuantityChange: Z,
        Carousel: ff,
        OptionSelect: Cf,
        GridButton: Va,
        get formatPrice() {
          return Sa;
        },
        get isProductPriceRangeShown() {
          return In;
        },
        ProductSkeletonLoader: Mf,
        QuantityPicker: Nl,
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
  Rf = ["id"],
  Nf = { class: "block-product__content-wrapper" },
  Hf = { class: "block-product__price-data-wrapper" },
  $f = { key: 0, class: "block-product__title" },
  Uf = { key: 1, class: "block-product__title" },
  Vf = { class: "block-product__subtitle" },
  Yf = { class: "block-product__additional-info" },
  Ff = { key: 0, class: "block-product__price body-large" },
  Wf = { key: 1, class: "block-product__duration body-large" },
  qf = { key: 3, class: "block-product__location" },
  Gf = { key: 4, class: "block-product__option-select-wrapper" },
  jf = { key: 0, class: "block-product__stock-text" },
  zf = { key: 0, class: "block-product__button-wrapper" },
  Kf = { key: 0, class: "block-product__notice" },
  Qf = ["innerHTML"];
function Zf(e, n, a, t, o, i) {
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
                class: X([
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
                I("div", Nf, [
                  I("div", Hf, [
                    t.isBlockInProductPage
                      ? ce(
                          (c(), h("h1", $f, [Ae(J(t.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        )
                      : ce(
                          (c(), h("h3", Uf, [Ae(J(t.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        ),
                    I("h5", Vf, J(t.productData.subtitle), 1),
                    Object.keys(t.priceData || {})?.length
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 2,
                            class: X([
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
                                    class: X([
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
                            I("div", Yf, [
                              t.priceData.sale_amount && t.isPriceShown
                                ? (c(),
                                  h(
                                    "p",
                                    Ff,
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
                                  h("p", Wf, J(t.formattedBookingDuration), 1))
                                : O("", !0),
                            ]),
                          ],
                          2
                        ))
                      : O("", !0),
                    t.isProductTypeBooking
                      ? (c(), h("p", qf, J(t.location), 1))
                      : O("", !0),
                    t.productData.options.length
                      ? (c(),
                        h("div", Gf, [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              t.productData.options,
                              (l, d) => (
                                c(),
                                W(
                                  t.OptionSelect,
                                  {
                                    key: `option-${d}`,
                                    value: t.selectedOption(d),
                                    options: t.uniqueOptionSelections[d],
                                    title: l.title,
                                    class: X([
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
                            class: X([
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
                              ? (c(), h("p", jf, J(t.stockInfoText), 1))
                              : O("", !0),
                          ],
                          2
                        ))
                      : O("", !0),
                  ]),
                  t.isPurchasable
                    ? (c(),
                      h("div", zf, [
                        ce(
                          Ee(
                            t.GridButton,
                            {
                              type: a.blockButtonType,
                              content: t.buttonText,
                              class: X([
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
                  Ee(Et, null, {
                    default: ve(() => [
                      t.isBookingProductInCart
                        ? (c(),
                          h("p", Kf, J(a.translations.purchaseToBookAgain), 1))
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
                        Qf
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
                          default: ve(() => [
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
      Rf
    )
  );
}
const Xf = oe(xf, [["render", Zf]]),
  Jf = (e) => {
    const n = u(() => e.data.product.id),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.buttonText),
      i = u(() => e.data.buttonStyle),
      r = u(() => e.data.buttonType),
      s = u(() => e.data.buttonBorderWidth),
      l = u(() => e.data.navigationArrowsColor),
      d = u(() => e.data.navigationThumbnailArrowsColor),
      g = u(() => e.data.galleryPlacement),
      m = u(() => e.data.imageRatio),
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
      navigationThumbnailArrowsColor: d,
      galleryPlacement: g,
      imageRatio: m,
      isQuantityPickerEnabled: f,
    };
  },
  ey = (e) => e.replace(/<[^>]*>/g, ""),
  ty = ({ product: e, pageSlug: n }) => {
    const a = gl(window.location.hostname),
      { variants: t } = e,
      o = t.length > 1,
      i = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: e.title,
        image: e.images.map((r) => r.url),
        description: e.description ? ey(e.description) : "",
        offers: {},
      };
    if (o) {
      const s = yr(e).prices[0],
        l = Sa({
          amount: s.sale_amount || s.amount,
          currency: s.currency,
          isPriceDisplayedWithCurrency: !1,
        }),
        g = Zh(e).prices[0],
        m = Sa({
          amount: g.sale_amount || g.amount,
          currency: g.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "AggregateOffer",
        url: `https://${a}/${n}`,
        priceCurrency: g.currency.code,
        lowPrice: l,
        highPrice: m,
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
  ay = ({ product: e, pageSlug: n }) => {
    const a = {
      type: "element",
      tagName: "script",
      properties: {
        [gc]: `jsonld-product-${e.id}`,
        type: "application/ld+json",
      },
      children: [],
    };
    (a.children = [
      { type: "text", value: JSON.stringify(ty({ product: e, pageSlug: n })) },
    ]),
      Cc(a);
  },
  ny = ie({
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
        { siteId: t } = Ze(),
        {
          quantifiedCartItemsList: o,
          canAddToCart: i,
          isShoppingCartOpen: r,
          products: s,
          shoppingCartItems: l,
          variantsQuantity: d,
          isCheckoutLoading: g,
          isLoading: m,
          isLoaded: p,
          setShoppingCartOpen: f,
          setShoppingCartItems: b,
          setIsCheckoutLoading: S,
          setSelectedBookingId: T,
        } = Ht(),
        { openEcommerceModal: w, closeEcommerceModal: y } = Rt(),
        { initiateCheckout: D } = en(),
        { addImagesToLightbox: C } = tn(),
        {
          productId: M,
          blockStyle: R,
          blockButtonText: N,
          blockButtonStyle: Q,
          blockButtonType: G,
          blockButtonBorderWidth: P,
          textColorVars: B,
          imageBorderRadius: $,
          navigationArrowsColor: K,
          navigationThumbnailArrowsColor: V,
          galleryPlacement: E,
          imageRatio: Y,
          isQuantityPickerEnabled: U,
        } = Jf(a),
        j = u(() => s.value.find((_) => _.id === M.value) || ua),
        k = u(() => a.productPages.find((_) => _.productId === j.value.id)),
        v = L(null),
        F = () => {
          setTimeout(() => {
            v.value = Bn;
          }, 100);
        },
        q = () => {
          r.value || f(!0);
        },
        te = (_) => {
          const ae = j.value.images.map((he) => ({
            alt: j.value.title,
            src: he.url,
          }));
          C(ae, _);
        },
        Z = async (_) => {
          if ((await y(), j.value.type.value === Nt)) {
            T(M.value), w("EcommerceBookingEventSelect");
            return;
          }
          if (Na() || a.isInPreviewMode) {
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
        Ct(() => {
          y();
        }),
        Ne(j, () => {
          j.value &&
            k.value &&
            ay({ product: j.value, pageSlug: k.value?.slug });
        });
      const x = {
        props: a,
        siteId: t,
        quantifiedCartItemsList: o,
        canAddToCart: i,
        isShoppingCartOpen: r,
        products: s,
        shoppingCartItems: l,
        variantsQuantity: d,
        isCheckoutLoading: g,
        isLoading: m,
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
        blockStyle: R,
        blockButtonText: N,
        blockButtonStyle: Q,
        blockButtonType: G,
        blockButtonBorderWidth: P,
        textColorVars: B,
        imageBorderRadius: $,
        navigationArrowsColor: K,
        navigationThumbnailArrowsColor: V,
        galleryPlacement: E,
        imageRatio: Y,
        isQuantityPickerEnabled: U,
        product: j,
        productPage: k,
        animationState: v,
        setAnimationState: F,
        manageCartOpenState: q,
        handleImageClick: te,
        handleBuyButtonClick: Z,
        get DATA_ATTRIBUTE_ANIMATION_STATE() {
          return An;
        },
        BlockEcommerceProduct: Xf,
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
function oy(e, n, a, t, o, i) {
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
const Hl = oe(ny, [["render", oy]]),
  ry = ie({
    components: { ZyroLoader: Wr },
    props: {
      blockId: { type: String, required: !0 },
      storeId: { type: String, required: !0 },
      isStoreLoading: { type: Boolean, required: !0 },
      showStore: { type: Boolean, required: !0 },
      loadingText: { type: String, default: "Store is loading" },
    },
  }),
  iy = ["id"],
  sy = { key: 0, class: "block-ecwid-store__loader-block" },
  ly = ["id"];
function uy(e, n, a, t, o, i) {
  const r = Be("ZyroLoader"),
    s = je("qa");
  return ce(
    (c(),
    h(
      "div",
      { id: e.blockId, class: "block-ecwid-store" },
      [
        e.isStoreLoading
          ? (c(),
            h("div", sy, [
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
          { class: X({ "height-0": e.isStoreLoading }) },
          [
            e.showStore
              ? ce(
                  (c(),
                  h(
                    "div",
                    { key: 0, id: `my-store-${e.storeId}` },
                    null,
                    8,
                    ly
                  )),
                  [[s, "onlinestore-section-ecwid"]]
                )
              : O("", !0),
          ],
          2
        ),
      ],
      8,
      iy
    )),
    [[s, "builder-section-onlinestore"]]
  );
}
const cy = oe(ry, [
    ["render", uy],
    ["__scopeId", "data-v-912878a7"],
  ]),
  yn = `${rl}/ecwid-app-images`,
  ws = [
    { name: "omniva", logoSource: `${yn}/omniva.svg`, headerText: "Omniva" },
    { name: "dpd", logoSource: `${yn}/dpd.svg`, headerText: "DPD" },
    {
      name: "lpexpress",
      logoSource: `${yn}/lpexpress.svg`,
      headerText: "LPExpress",
    },
    { name: "inpost", logoSource: `${yn}/inpost.svg`, headerText: "InPost" },
    { name: "other", logoSource: `${yn}/other.svg`, headerText: "other" },
  ],
  dy = ({ headerText: e, name: n, logoSource: a }) => {
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
  my = () => `
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
  gy = { attributes: !0, childList: !0, subtree: !0 },
  py = () => {
    let e,
      n = "",
      a,
      t,
      o,
      i;
    const r = (m) => m.some((p) => !!p?.includes(n)),
      s = () => {
        t?.forEach((m) => {
          const { type: p, element: f, title: b, description: S } = m;
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
      d = (m) => {
        let p = !1;
        t = [...m.querySelectorAll(".ec-radiogroup__item")].map((y) => {
          const D = y.querySelector(".ec-radiogroup__title").innerText,
            C = D.split(":")[0].toLowerCase(),
            M = ws.some((N) => N.name === C) ? C : "other",
            R = y.querySelector('input[type="radio"]');
          return (
            R.addEventListener("change", (N) => {
              N.target.checked && l();
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
              radio: R,
            }
          );
        });
        const b = m.closest(".ec-cart-step__section"),
          S = b.querySelector(".ec-radiogroup__wrap");
        o || b.insertAdjacentHTML("beforeend", my()),
          b.classList.add("zyro-ecwid__radio-section"),
          b.querySelector(".zyro-ecwid__search input").addEventListener(
            "input",
            Dl((y) => {
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
              const D = ws.find((M) => M.name === y),
                C = dy(D);
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
      const m = document.querySelector(
          ".ec-cart-step--delivery .ec-radiogroup__items"
        ),
        p = !!document.querySelector(
          ".ec-cart-step--delivery .ec-cart-step__icon--done"
        ),
        f = document.querySelectorAll(".zyro-ecwid__option--hidden");
      !!!document.querySelector(
        ".ec-cart-step--address .ec-cart-step__icon--done"
      ) &&
        !m &&
        o &&
        (o = null),
        !p && !t && m && d(m),
        a !== f.length && s(),
        (p || !m) &&
          (i?.classList.contains("ec-radiogroup--hidden") ||
            i?.classList.add("ec-radiogroup--hidden"),
          o?.classList.contains("zyro-ecwid__search--hidden") ||
            o?.classList.add("zyro-ecwid__search--hidden"),
          (t = null),
          n &&
            ((n = ""),
            (document.getElementById("zyro-ecwid-search").value = "")));
    }, gy);
  },
  br = "ecwid-loaded",
  vy = () => {
    const e = document.querySelector(".ec-notices");
    if (!e) return;
    const n = document.querySelector(".builder-header")?.clientHeight ?? 0,
      a = document.querySelector(`.${dl}`)?.clientHeight ?? 0,
      t = e.getBoundingClientRect().top + n + a;
    e.style.top = `${t}px`;
  },
  $l = () => window.dispatchEvent(new Event(br)),
  hy = (e) => {
    const { setEcwidCartItems: n } = hl();
    n(e.items);
  },
  fy = () => {
    window.ecwid_initial_data.data.storeClosed && $l();
  },
  yy = () => {
    window.Ecwid.OnAPILoaded.add(fy),
      window.Ecwid.OnPageLoaded.add($l),
      window.Ecwid.OnPageLoaded.add(vy),
      window.Ecwid.OnCartChanged.add(hy);
  },
  by = {
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
          n && n !== At && (a.src += `&lang=${n}`),
          (a.id = "ecwid-script"),
          a.addEventListener("load", yy),
          document.body.append(a);
      }
    },
  },
  _y = "26103239",
  wy = { attributes: !0, childList: !0, subtree: !0 },
  ky = (e, { ecwidStoreId: n, demoEcwidStoreId: a }) => {
    const t = L(!0),
      o = L(!1),
      i = L(!0),
      r = u(() => e.data.settings.loadingText || "Store is loading"),
      s = u(() => n.value || a.value || _y),
      l = () => {
        by.load(s.value, e.currentLocale);
      },
      d = () => {
        (o.value = !0),
          window.addEventListener(br, () => {
            o.value = !1;
          }),
          l();
      };
    return (
      De(() => {
        d(),
          (i.value = py()),
          i.value.observe(document.querySelector(`#my-store-${s.value}`), wy);
      }),
      Ct(() => {
        i.value.disconnect();
      }),
      Ne(s, async (g) => {
        a.value !== g &&
          ((document.querySelector(`#my-store-${s.value}`).innerHTML = ""),
          await Pt(),
          d());
      }),
      {
        storeId: s,
        showStore: t,
        isStoreLoading: o,
        loadStore: l,
        loadingText: r,
        ECWID_LOADED_EVENT: br,
      }
    );
  },
  Sy = ie({
    components: { BlockEcwidStore: cy },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: At },
    },
    setup(e) {
      const { meta: n } = Ze(),
        a = u(() => n.value.ecwidStoreId),
        t = u(() => n.value.demoEcwidStoreId),
        {
          storeId: o,
          showStore: i,
          isStoreLoading: r,
          loadingText: s,
        } = ky(e, { ecwidStoreId: a, demoEcwidStoreId: t });
      return (
        De(() => {
          window?.Ecwid?.getStorefrontLang() &&
            window.Ecwid.getStorefrontLang() !== e.currentLocale &&
            !Na() &&
            window.location.reload();
        }),
        { storeId: o, showStore: i, isStoreLoading: r, loadingText: s }
      );
    },
  });
function Ty(e, n, a, t, o, i) {
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
const Cy = oe(Sy, [["render", Ty]]),
  Py = L({}),
  _r = "forward",
  ks = "backward",
  Iy = ({
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
      d = u(() => i.value === o.value.length - 1),
      g = u(() => i.value === 0),
      m = u(() => (!d.value || n.value) && l.value > 1 && !t.value),
      p = u(() => (!g.value || n.value) && l.value > 1 && !t.value),
      f = () => {
        if (m.value) {
          if (((r.value = _r), n.value && d.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      b = () => {
        if (p.value) {
          if (((r.value = ks), n.value && g.value)) {
            i.value = o.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      S = (D) => {
        (r.value = D > i.value ? _r : ks), (i.value = D);
      },
      T = () => {
        s.value = setInterval(() => {
          (!n.value && d.value) || f();
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
        Ne(iv(), (D) => {
          D === "visible" ? T() : w();
        })),
      a &&
        Ne(a, () => {
          y();
        }),
      {
        slideshowRefs: Py,
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
        canSlideToNext: m,
        canSlideToPrevious: p,
      }
    );
  },
  zr = ie({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: _r },
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
      return { FULL_WIDTH: pa, getOptimizedSrc: it };
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
  Ss = () => {
    lt((e) => ({
      fd06db1c: e.desktopMinHeight,
      "1f7ca1af": e.arrowColor,
      "56d289af": e.dotColor,
      "3b9747e2": e.mobileMinHeight,
    }));
  },
  Ts = zr.setup;
zr.setup = Ts ? (e, n) => (Ss(), Ts(e, n)) : Ss;
const Ul = (e) => (Ot("data-v-f3299b46"), (e = e()), Lt(), e),
  Ey = { class: "slideshow" },
  Dy = ["alt", "src"],
  My = ["disabled"],
  Oy = Ul(() =>
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
  Ly = [Oy],
  By = ["disabled"],
  Ay = Ul(() =>
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
  xy = [Ay],
  Ry = { key: 2, class: "slideshow__dots" },
  Ny = ["onClick"];
function Hy(e, n, a, t, o, i) {
  return (
    c(),
    h("div", Ey, [
      Ee(
        Uu,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: n[0] || (n[0] = (r) => e.$emit("transition-start")),
          onAfterLeave: n[1] || (n[1] = (r) => e.$emit("transition-end")),
        },
        {
          default: ve(() => [
            (c(!0),
            h(
              ge,
              null,
              ke(e.slides, (r, s) =>
                ce(
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
                    Dy
                  )),
                  [[Wt, e.currentSlideIndex === s]]
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
              class: X([
                "slideshow-nav-button slideshow-nav-button--right",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: n[2] || (n[2] = (r) => e.$emit("next-slide")),
            },
            Ly,
            10,
            My
          ))
        : O("", !0),
      e.isPreviousSlideButtonVisible
        ? (c(),
          h(
            "button",
            {
              key: 1,
              class: X([
                "slideshow-nav-button slideshow-nav-button--left",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: n[3] || (n[3] = (r) => e.$emit("previous-slide")),
            },
            xy,
            10,
            By
          ))
        : O("", !0),
      e.isNavigationDotsVisible
        ? (c(),
          h("div", Ry, [
            (c(!0),
            h(
              ge,
              null,
              ke(
                e.slides,
                (r, s) => (
                  c(),
                  h(
                    "button",
                    {
                      key: `${r.path}-${s}`,
                      class: X([
                        "dot",
                        { "dot--current": e.currentSlideIndex === s },
                      ]),
                      onClick: (l) => e.$emit("dot-click", s),
                    },
                    null,
                    10,
                    Ny
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
const $y = oe(zr, [
    ["render", Hy],
    ["__scopeId", "data-v-f3299b46"],
  ]),
  Uy = ie({
    components: { BlockImageSlideshow: $y },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: "" },
    },
    setup(e) {
      const { data: n } = or(e),
        a = L(!1),
        t = u(() => `${n.value.desktop.minHeight}px`),
        o = u(() => `${n.value.mobile.minHeight}px`),
        i = u(() => n.value.settings.styles.navigationDotsColor),
        r = u(() => n.value.settings.styles.navigationArrowsColor),
        s = u(() => n.value.slides),
        l = u(() => n.value.isLoopEnabled),
        d = u(() => n.value.isAutoplayEnabled),
        g = u(() => n.value.autoplayInterval),
        m = u(() => n.value.isNavigationDotsVisible),
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
          resetAutoplayInterval: R,
          clearAutoplayInterval: N,
        } = Iy({
          isAutoplayEnabled: d,
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
        resetAutoplayInterval: R,
        dotColor: i,
        arrowColor: r,
        isNavigationDotsVisible: m,
        isNavigationArrowsVisible: p,
        clearAutoplayInterval: N,
        slideToNext: D,
        slideToPrevious: C,
        slideTo: M,
        desktopMinHeight: f,
        mobileMinHeight: b,
      };
    },
  });
function Vy(e, n, a, t, o, i) {
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
const Yy = oe(Uy, [["render", Vy]]),
  Cs = 360,
  Fy = {
    __name: "BlockUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: At },
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
        { productPages: o, isLoaded: i } = Ht(),
        {
          blocks: r,
          elements: s,
          pages: l,
          siteId: d,
          blogReadingTimeText: g,
          blogCategories: m,
          siteId: p,
          meta: f,
        } = Ze(),
        {
          addIntersectionObserver: b,
          observe: S,
          intersectionObserver: T,
          animationClass: w,
          shouldMountAnimationsInPreview: y,
        } = an({ data: a.data }),
        D = u(() => a.currentLocale),
        C = u(() => a.screenWidth <= Tn),
        M = u(() =>
          a.data.desktop?.isHidden
            ? a.isInPreviewMode
              ? a.screenWidth > Tn
              : !0
            : !1
        ),
        R = u(() =>
          a.data.mobile?.isHidden ? (a.isInPreviewMode ? C.value : !0) : !1
        ),
        N = u(() => ({ ...a.style, ...xt(a.data?.settings?.styles) })),
        Q = u(() => {
          if (!a.data?.settings?.styles["m-block-padding"]) return !1;
          const { top: U, bottom: j } = Ja(
            a.data.settings.styles["m-block-padding"]
          );
          return Number.parseInt(U, 10) + Number.parseInt(j, 10) > Cs;
        }),
        G = u(() =>
          it(a.data.background.origin, a.data.background.path, p.value, {
            width: pa,
          })
        ),
        P = u(() =>
          va(a.data.background.origin, a.data.background.path, p.value, {
            isMobileFullScreen: Q.value,
          })
        ),
        B = u(() => a.data.slot === "footer"),
        $ = u(() => {
          if (a.data.type !== Mi) return null;
          const [, U] = Object.entries(l.value).find(
            ([j, k]) => k.type === sr && j === a.pageId
          );
          return U;
        }),
        K = u(() => f.value.stripePublicApiKey),
        V = u(() => a.data.type === Oi),
        E = async () => {
          b(), (!V.value || i.value) && (await S(t.value));
        };
      De(async () => {
        await E();
      }),
        Ct(() => T.value?.disconnect()),
        Ne([D, i], async ([U, j], [k]) => {
          (j || U !== k) && V.value && (await S(t.value));
        }),
        Ne(y, async (U) => {
          U && (await E());
        });
      const Y = {
        MOBILE_FULL_HEIGT_THRESHOLD: Cs,
        props: a,
        blockRef: t,
        productPages: o,
        isEcommerceProductsLoaded: i,
        siteBlocks: r,
        siteElements: s,
        siteLanguagePages: l,
        websiteId: d,
        blogReadingTimeText: g,
        blogCategories: m,
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
        isMobileBlockHidden: R,
        computedStyles: N,
        isMobileFullScreen: Q,
        backgroundSrc: G,
        backgroundSrcSet: P,
        isBlockFooter: B,
        currentBlogPage: $,
        stripePublicApiKey: K,
        isEcommerceBlock: V,
        initiateAnimations: E,
        computed: u,
        onMounted: De,
        onBeforeUnmount: Ct,
        ref: L,
        watch: Ne,
        BlockBackground: Ur,
        BlockBlogHeader: Td,
        get PAGE_TYPE_BLOG() {
          return sr;
        },
        get SYSTEM_LOCALE() {
          return At;
        },
        get BLOCK_TYPE_LAYOUT() {
          return pc;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return Mi;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return vc;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return hc;
        },
        get BLOCK_TYPE_ECWID() {
          return fc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return yc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return Oi;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return Tn;
        },
        get FULL_WIDTH() {
          return pa;
        },
        get getFullWidthSrcset() {
          return va;
        },
        get getOptimizedSrc() {
          return it;
        },
        get useSiteGlobal() {
          return Ze;
        },
        get objectToCssVariables() {
          return xt;
        },
        get parseCSSSides() {
          return Ja;
        },
        BlockLayoutProviderUser: Gv,
        BlockBlogListProviderUser: bh,
        BlockEcommerceProductListProviderUser: sf,
        BlockEcommerceProductProviderUser: Hl,
        BlockEcwidStoreProviderUser: Cy,
        BlockImageSlideshowProviderUser: Yy,
        get useSiteEngineAnimations() {
          return an;
        },
        get useEcommerceGlobal() {
          return Ht;
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
  Wy = ["id"];
function qy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        id: a.id,
        ref: "blockRef",
        class: X([
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
      Wy
    )
  );
}
const Gy = oe(Fy, [
    ["render", qy],
    ["__scopeId", "data-v-2ff8e178"],
  ]),
  jy = ie({
    __name: "BlockStickyBarLayout",
    props: { blockStyles: {} },
    setup(e, { expose: n }) {
      n(),
        lt((l) => ({
          c718ec72: o.value,
          "387a0b1e": A(ml),
          "720ca36e": t.value,
          "16937fe2": i.value,
        }));
      const a = e,
        t = u(() => `${zt}px`),
        o = u(() => `${ra}px`),
        i = u(() => `0 ${Cn}px`),
        r = u(() => xt(a.blockStyles)),
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
function zy(e, n, a, t, o, i) {
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
const Ky = oe(jy, [
    ["render", zy],
    ["__scopeId", "data-v-a943a874"],
  ]),
  Qy = ie({
    __name: "BlockStickyBarProviderUser",
    props: {
      data: {},
      components: {},
      isInPreviewMode: { type: Boolean },
      lcp: {},
      screenWidth: { default: 0 },
    },
    setup(e, { expose: n }) {
      n(), lt((R) => ({ "0897617a": A(ml) }));
      const a = { [ga]: cn },
        t = e,
        { siteId: o } = Ze(),
        { layoutCSSVars: i } = dr({
          blockData: u(() => t.data),
          siteElements: u(() => t.components),
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        {
          addIntersectionObserver: r,
          observe: s,
          intersectionObserver: l,
          animationClass: d,
          shouldMountAnimationsInPreview: g,
        } = an({
          elementData: null,
          data: t.data,
          elementId: null,
          isParentBlockFooter: !1,
        }),
        m = L(null),
        p = u(() => t.data.background?.origin || null),
        f = u(() => t.data.background?.path || null),
        b = u(() => t.screenWidth <= Tn),
        S = u(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > Tn
              : !0
            : !1
        ),
        T = u(() =>
          t.data.mobile?.isHidden ? (t.isInPreviewMode ? b.value : !0) : !1
        ),
        w = u(() => it(p.value, f.value, o.value, { width: pa })),
        y = u(() => va(p.value, f.value, o.value, { isMobileFullScreen: !1 })),
        D = u(() => t.data.attachment === "fixed"),
        C = async () => {
          r(), await s(m.value);
        };
      De(async () => {
        await C();
      }),
        Ct(() => l.value?.disconnect()),
        Ne(g, async (R) => {
          R && (await C());
        });
      const M = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        siteId: o,
        layoutCSSVars: i,
        addIntersectionObserver: r,
        observe: s,
        intersectionObserver: l,
        animationClass: d,
        shouldMountAnimationsInPreview: g,
        blockRef: m,
        backgroundOrigin: p,
        backgroundPath: f,
        isMobile: b,
        isDesktopBlockHidden: S,
        isMobileBlockHidden: T,
        backgroundSrc: w,
        backgroundSrcSet: y,
        isBlockBackgroundFixed: D,
        initiateAnimations: C,
        BlockBackground: Ur,
        BlockStickyBarLayout: Ky,
        GridTextBox: Pl,
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
function Zy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "section",
      {
        ref: "blockRef",
        class: X([
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
            class: X(t.animationClass),
          },
          {
            default: ve(() => [
              (c(!0),
              h(
                ge,
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
const Xy = oe(Qy, [
    ["render", Zy],
    ["__scopeId", "data-v-79325842"],
  ]),
  Xn = L({}),
  Vl = ({ pagePassword: e, locale: n, pageId: a }) => {
    const t = u(() => `${a}-${n}`),
      o = u(() => !e || (e && !!Xn.value[t.value]));
    return {
      isPageUnlocked: Xn,
      openUnlockedPage: () => {
        Xn.value = { ...Xn.value, [t.value]: !0 };
      },
      isPageOpen: o,
    };
  },
  Jy = async (e) => {
    const n = new TextEncoder().encode(e),
      a = await crypto.subtle.digest("SHA-256", n);
    return [...new Uint8Array(a)]
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
  },
  eb = {
    src: "/_astro-1715965807610/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg",
  },
  tb = ie({
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
        d = u(() => a.currentPageData?.meta?.passwordButtonText ?? "Enter"),
        g = u(
          () =>
            a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password"
        ),
        m = u(() => a.currentPageData?.meta?.passwordBackText ?? "Back to"),
        p = u(() => i.value === bc),
        f = u(() => i.value === _c),
        { openUnlockedPage: b } = Vl({
          pagePassword: r.value,
          locale: a.locale,
          pageId: a.pageId,
        }),
        S = async () => {
          const D = await Jy(t.value);
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
        Ct(() => {
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
        passwordPageButtonText: d,
        passwordPlaceholder: g,
        passwordBackText: m,
        isCalmTheme: p,
        isPopularTheme: f,
        openUnlockedPage: b,
        unlock: S,
        homepageLink: T,
        isHomepageLinkShown: w,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Wd;
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
  ab = (e) => (Ot("data-v-5df21e4b"), (e = e()), Lt(), e),
  nb = { key: 0, class: "password-page__background-wave-wrapper" },
  ob = ab(() =>
    I("div", { class: "password-page__background-wave" }, null, -1)
  ),
  rb = [ob],
  ib = ["src"],
  sb = { key: 0, class: "password-page__icon-lock", src: eb },
  lb = { class: "password-page__heading" },
  ub = { for: "password", class: "password-page__label" },
  cb = ["placeholder"],
  db = { key: 1, class: "password-page__error-message" },
  mb = { class: "password-page__button", type: "submit" },
  gb = { key: 2, class: "password-page__homepage-link" },
  pb = ["href"];
function vb(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "main",
      {
        class: X([
          "password-page",
          {
            "password-page--calm": t.isCalmTheme,
            "password-page--popular": t.isPopularTheme,
          },
        ]),
      },
      [
        t.isCalmTheme
          ? ce((c(), h("div", nb, rb)), [[r, "password-page-background-calm"]])
          : O("", !0),
        t.isPopularTheme
          ? ce(
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
                ib
              )),
              [[r, "password-page-background-popular"]]
            )
          : O("", !0),
        I(
          "form",
          { class: "password-page__form", onSubmit: Ie(t.unlock, ["prevent"]) },
          [
            t.isCalmTheme ? (c(), h("img", sb)) : O("", !0),
            ce((c(), h("h1", lb, [Ae(J(t.passwordPageHeading), 1)])), [
              [r, "password-page-heading"],
            ]),
            ce((c(), h("label", ub, [Ae(J(t.passwordPageSubheading), 1)])), [
              [r, "password-page-subheading"],
            ]),
            ce(
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
                  class: X([
                    "password-page__input",
                    { "password-page__input--error": t.errorMessage },
                  ]),
                  onBlur: n[1] || (n[1] = (s) => (t.errorMessage = "")),
                },
                null,
                42,
                cb
              ),
              [
                [el, t.password],
                [r, "password-page-placeholder"],
              ]
            ),
            t.errorMessage
              ? (c(), h("p", db, J(t.errorMessage), 1))
              : O("", !0),
            ce((c(), h("button", mb, [Ae(J(t.passwordPageButtonText), 1)])), [
              [r, "password-page-button"],
            ]),
            t.isHomepageLinkShown
              ? ce(
                  (c(),
                  h("p", gb, [
                    Ae(J(t.passwordBackText) + " ", 1),
                    I(
                      "a",
                      {
                        href: t.homepageLink,
                        class: "password-page__homepage-link-text",
                      },
                      J(a.homepageName),
                      9,
                      pb
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
const hb = oe(tb, [
    ["render", vb],
    ["__scopeId", "data-v-5df21e4b"],
  ]),
  fb = {},
  yb = Br(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  bb = [yb];
function _b(e, n) {
  return (
    c(),
    h(
      "button",
      {
        class: "delete-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("handle-button-click")),
      },
      bb
    )
  );
}
const wb = oe(fb, [
    ["render", _b],
    ["__scopeId", "data-v-334df6f8"],
  ]),
  kb = {},
  Sb = (e) => (Ot("data-v-2f9813ef"), (e = e()), Lt(), e),
  Tb = { class: "close-button" },
  Cb = Sb(() =>
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
  Pb = [Cb];
function Ib(e, n) {
  return c(), h("button", Tb, Pb);
}
const Kr = oe(kb, [
    ["render", Ib],
    ["__scopeId", "data-v-2f9813ef"],
  ]),
  Eb = ie({
    name: "Drawer",
    components: { CloseButton: Kr },
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
          yo(a, () => {
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
  Db = { class: "site-drawer__content" };
function Mb(e, n, a, t, o, i) {
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
              class: X([
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
        Et,
        {
          name:
            e.placement === "right"
              ? "drawer-slide-right"
              : "drawer-slide-left",
        },
        {
          default: ve(() => [
            e.isOpen
              ? (c(),
                h(
                  "aside",
                  {
                    key: 0,
                    ref: "siteDrawerRef",
                    class: X([
                      {
                        "site-drawer--left": e.placement === "left",
                        "site-drawer--right": e.placement === "right",
                      },
                      "site-drawer",
                    ]),
                    style: xe(e.computedStyles),
                  },
                  [
                    I("div", Db, [
                      ce(
                        (c(),
                        h(
                          "span",
                          {
                            class: X([
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
const Ob = oe(Eb, [
    ["render", Mb],
    ["__scopeId", "data-v-12672165"],
  ]),
  Ps = 90,
  Lb = ie({
    components: {
      Drawer: Ob,
      DeleteButton: wb,
      ProductImage: vo,
      QuantityPicker: Nl,
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
        IMAGE_WIDTH_PX: Ps,
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
        return { "--image-width": `${Ps}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= za;
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
      getFormattedBookingDuration: Gr,
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
          t = new Date(a + hr(e.product)),
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
        return e.product?.type.value === Nt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  Yl = (e) => (Ot("data-v-688c363e"), (e = e()), Lt(), e),
  Bb = { class: "cart" },
  Ab = { class: "cart__content" },
  xb = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin",
  },
  Rb = { key: 1, class: "cart__content-title" },
  Nb = { class: "cart__list" },
  Hb = { class: "cart__title" },
  $b = { key: 0, class: "cart__text" },
  Ub = { key: 1, class: "cart__text cart__sale-price" },
  Vb = { class: "cart__text cart__duration" },
  Yb = { class: "cart__time-wrapper" },
  Fb = Yl(() =>
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
  Wb = { class: "cart__text cart__text--lighter" },
  qb = { class: "cart__time-wrapper" },
  Gb = Yl(() =>
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
  jb = { class: "cart__text cart__text--lighter" },
  zb = { key: 3, class: "cart__quantity" },
  Kb = { class: "cart__quantity-title" },
  Qb = { key: 0, class: "cart__footer" },
  Zb = { class: "cart__title cart__title--with-slot" };
function Xb(e, n, a, t, o, i) {
  const r = Be("ProductImage"),
    s = Be("QuantityPicker"),
    l = Be("DeleteButton"),
    d = Be("Drawer"),
    g = je("qa");
  return (
    c(),
    W(
      d,
      {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: xe(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: ve(() => [
          I("div", Bb, [
            I("div", Ab, [
              e.quantifiedCartItemsList.length
                ? (c(), h("p", Rb, J(e.translations.shoppingBag), 1))
                : ce(
                    (c(),
                    h("p", xb, [Ae(J(e.translations.shoppingBagEmpty), 1)])),
                    [[g, "shoppingcart-text-emptystate"]]
                  ),
              I("ul", Nb, [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(
                    e.quantifiedCartItemsList,
                    (m) => (
                      c(),
                      h(
                        "li",
                        {
                          key: m.product.variants[0].id,
                          class: "cart__list-item",
                        },
                        [
                          m.product.thumbnail
                            ? (c(),
                              W(
                                r,
                                {
                                  key: 0,
                                  src: e.getProductImage(m),
                                  alt: m.product.title,
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
                            ce((c(), h("p", Hb, [Ae(J(m.product.title), 1)])), [
                              [g, "shoppingcart-text-product"],
                            ]),
                            m.product.options.length
                              ? ce(
                                  (c(),
                                  h("p", $b, [
                                    Ae(J(m.product.variants[0].title), 1),
                                  ])),
                                  [[g, "shoppingcart-text-variant"]]
                                )
                              : O("", !0),
                            ce(
                              (c(),
                              h(
                                "p",
                                {
                                  class: X([
                                    "cart__text cart__price",
                                    {
                                      "cart__price--strikethrough":
                                        m.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  Ae(
                                    J(
                                      e.formatPrice({
                                        amount:
                                          m.product.variants[0].prices[0]
                                            .amount,
                                        currency:
                                          m.product.variants[0].prices[0]
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
                            m.product.variants[0].prices[0].sale_amount
                              ? ce(
                                  (c(),
                                  h("p", Ub, [
                                    Ae(
                                      J(
                                        e.formatPrice({
                                          amount:
                                            m.product.variants[0].prices[0]
                                              .sale_amount,
                                          currency:
                                            m.product.variants[0].prices[0]
                                              .currency,
                                        })
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[g, "shoppingcart-text-saleprice"]]
                                )
                              : O("", !0),
                            e.isProductBookingType(m)
                              ? (c(),
                                h(
                                  ge,
                                  { key: 2 },
                                  [
                                    ce(
                                      (c(),
                                      h("p", Vb, [
                                        Ae(
                                          J(
                                            e.getFormattedBookingDuration(
                                              m.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[g, "shoppingcart-text-duration"]]
                                    ),
                                    I("div", Yb, [
                                      Fb,
                                      I(
                                        "p",
                                        Wb,
                                        J(e.getFormattedSelectedDate(m)),
                                        1
                                      ),
                                    ]),
                                    I("div", qb, [
                                      Gb,
                                      I("p", jb, J(e.getFormattedTime(m)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (c(),
                                h("p", zb, [
                                  I(
                                    "span",
                                    Kb,
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
                                      quantity: m.quantity,
                                      "is-input-disabled": "",
                                      "is-limit-reached": e.isLimitReached,
                                      "is-stock-available":
                                        e.isStockAvailable(m),
                                      onQuantityChange: (p) =>
                                        e.handleQuantityChange(p, m),
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
                          ce(
                            Ee(
                              l,
                              {
                                class: "cart__remove-button",
                                onHandleButtonClick: (p) =>
                                  e.removeProduct(m.product),
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
                h("div", Qb, [
                  ce(
                    (c(),
                    h("p", Zb, [
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
                  ce(
                    (c(),
                    h(
                      "button",
                      {
                        class: X([
                          "cart__text cart__checkout-button",
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          n[0] ||
                          (n[0] = (m) => e.$emit("checkout-button-click")),
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
const Jb = oe(Lb, [
    ["render", Xb],
    ["__scopeId", "data-v-688c363e"],
  ]),
  e_ = ie({
    components: { EcommerceShoppingCart: Jb },
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
      const { siteId: n } = Ze(),
        {
          quantifiedCartItemsList: a,
          products: t,
          isShoppingCartOpen: o,
          isCheckoutLoading: i,
          shoppingCartItems: r,
          variantsQuantity: s,
          fetchProducts: l,
          setShoppingCartOpen: d,
          setShoppingCartItems: g,
          setIsCheckoutLoading: m,
        } = Ht(),
        { openEcommerceModal: p } = Rt(),
        { initiateCheckout: f } = en();
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
        setShoppingCartOpen: d,
        setShoppingCartItems: g,
        setIsCheckoutLoading: m,
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
        if (Na() || this.isInPreviewMode) {
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
function t_(e, n, a, t, o, i) {
  const r = Be("EcommerceShoppingCart"),
    s = je("qa");
  return ce(
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
const a_ = oe(e_, [["render", t_]]),
  n_ = ie({
    components: { CloseButton: Kr },
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
      const { closeEcommerceModal: e } = Rt();
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
  o_ = { class: "modal-wrapper" };
function r_(e, n, a, t, o, i) {
  const r = Be("CloseButton");
  return (
    c(),
    W(
      Et,
      { name: "fade" },
      {
        default: ve(() => [
          I("div", o_, [
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
const dn = oe(n_, [
    ["render", r_],
    ["__scopeId", "data-v-35831679"],
  ]),
  i_ = {
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
        { productPreviewData: t } = Rt(),
        { siteId: o } = Ze(),
        { productPages: i } = Ht(),
        r = u(() =>
          it(t.value.background.origin, t.value.background.path, o.value, {
            width: pa,
          })
        ),
        s = u(() =>
          va(t.value.background.origin, t.value.background.path, o.value, {
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
          BlockBackground: Ur,
          ModalLayout: dn,
          BlockEcommerceProductProviderUser: Hl,
          computed: u,
          get useEcommerceModal() {
            return Rt;
          },
          get getFullWidthSrcset() {
            return va;
          },
          get getOptimizedSrc() {
            return it;
          },
          get FULL_WIDTH() {
            return pa;
          },
          get useEcommerceGlobal() {
            return Ht;
          },
          get useSiteGlobal() {
            return Ze;
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
  s_ = { class: "ecommerce-product-preview__content-wrapper" };
function l_(e, n, a, t, o, i) {
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
        default: ve(() => [
          ce(
            (c(),
            h("div", s_, [
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
const u_ = oe(i_, [
  ["render", l_],
  ["__scopeId", "data-v-e0753e53"],
]);
function $t(e) {
  "@babel/helpers - typeof";
  return (
    ($t =
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
    $t(e)
  );
}
function Pe(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ye(e, n) {
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
  ye(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || ($t(e) === "object" && n === "[object Date]")
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
function ca(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return isNaN(t) ? new Date(NaN) : (t && a.setDate(a.getDate() + t), a);
}
function qt(e, n) {
  ye(2, arguments);
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
function Fl(e, n) {
  if ((ye(2, arguments), !n || $t(n) !== "object")) return new Date(NaN);
  var a = n.years ? Pe(n.years) : 0,
    t = n.months ? Pe(n.months) : 0,
    o = n.weeks ? Pe(n.weeks) : 0,
    i = n.days ? Pe(n.days) : 0,
    r = n.hours ? Pe(n.hours) : 0,
    s = n.minutes ? Pe(n.minutes) : 0,
    l = n.seconds ? Pe(n.seconds) : 0,
    d = we(e),
    g = t || a ? qt(d, t + a * 12) : d,
    m = i || o ? ca(g, i + o * 7) : g,
    p = s + r * 60,
    f = l + p * 60,
    b = f * 1e3,
    S = new Date(m.getTime() + b);
  return S;
}
function c_(e, n) {
  ye(2, arguments);
  var a = we(e).getTime(),
    t = Pe(n);
  return new Date(a + t);
}
var d_ = {};
function ia() {
  return d_;
}
function Ha(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = ia(),
    m = Pe(
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getDay(),
    b = (f < m ? 7 : 0) + f - m;
  return p.setDate(p.getDate() - b), p.setHours(0, 0, 0, 0), p;
}
function io(e) {
  return ye(1, arguments), Ha(e, { weekStartsOn: 1 });
}
function m_(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getFullYear(),
    t = new Date(0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var o = io(t),
    i = new Date(0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  var r = io(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function g_(e) {
  ye(1, arguments);
  var n = m_(e),
    a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var t = io(a);
  return t;
}
function so(e) {
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
function Is(e) {
  ye(1, arguments);
  var n = we(e);
  return n.setHours(0, 0, 0, 0), n;
}
var p_ = 864e5;
function v_(e, n) {
  ye(2, arguments);
  var a = Is(e),
    t = Is(n),
    o = a.getTime() - so(a),
    i = t.getTime() - so(t);
  return Math.round((o - i) / p_);
}
function h_(e, n) {
  ye(2, arguments);
  var a = Pe(n),
    t = a * 3;
  return qt(e, t);
}
function Qr(e, n) {
  ye(2, arguments);
  var a = Pe(n);
  return qt(e, a * 12);
}
var Zr = 6e4,
  Xr = 36e5,
  f_ = 1e3;
function Wl(e) {
  return (
    ye(1, arguments),
    e instanceof Date ||
      ($t(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function En(e) {
  if ((ye(1, arguments), !Wl(e) && typeof e != "number")) return !1;
  var n = we(e);
  return !isNaN(Number(n));
}
function Es(e) {
  ye(1, arguments);
  var n = we(e),
    a = Math.floor(n.getMonth() / 3) + 1;
  return a;
}
function ql(e, n) {
  var a;
  ye(1, arguments);
  var t = e || {},
    o = we(t.start),
    i = we(t.end),
    r = i.getTime();
  if (!(o.getTime() <= r)) throw new RangeError("Invalid interval");
  var s = [],
    l = o;
  l.setHours(0, 0, 0, 0);
  var d = Number((a = void 0) !== null && a !== void 0 ? a : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; l.getTime() <= r; )
    s.push(we(l)), l.setDate(l.getDate() + d), l.setHours(0, 0, 0, 0);
  return s;
}
function Hn(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getMonth(),
    t = a - (a % 3);
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function y_(e) {
  ye(1, arguments);
  var n = e || {},
    a = we(n.start),
    t = we(n.end),
    o = t.getTime();
  if (!(a.getTime() <= o)) throw new RangeError("Invalid interval");
  var i = Hn(a),
    r = Hn(t);
  o = r.getTime();
  for (var s = [], l = i; l.getTime() <= o; ) s.push(we(l)), (l = h_(l, 1));
  return s;
}
function b_(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function __(e) {
  ye(1, arguments);
  var n = we(e),
    a = new Date(0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function w_(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = ia(),
    m = Pe(
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getDay(),
    b = (f < m ? -7 : 0) + 6 - (f - m);
  return p.setDate(p.getDate() + b), p.setHours(23, 59, 59, 999), p;
}
function Ds(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getMonth(),
    t = a - (a % 3) + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Gl(e, n) {
  ye(2, arguments);
  var a = Pe(n);
  return c_(e, -a);
}
var k_ = 864e5;
function S_(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var t = n.getTime(),
    o = a - t;
  return Math.floor(o / k_) + 1;
}
function nn(e) {
  ye(1, arguments);
  var n = 1,
    a = we(e),
    t = a.getUTCDay(),
    o = (t < n ? 7 : 0) + t - n;
  return a.setUTCDate(a.getUTCDate() - o), a.setUTCHours(0, 0, 0, 0), a;
}
function jl(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getUTCFullYear(),
    t = new Date(0);
  t.setUTCFullYear(a + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = nn(t),
    i = new Date(0);
  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var r = nn(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function T_(e) {
  ye(1, arguments);
  var n = jl(e),
    a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var t = nn(a);
  return t;
}
var C_ = 6048e5;
function zl(e) {
  ye(1, arguments);
  var n = we(e),
    a = nn(n).getTime() - T_(n).getTime();
  return Math.round(a / C_) + 1;
}
function $a(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = ia(),
    m = Pe(
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = we(e),
    f = p.getUTCDay(),
    b = (f < m ? 7 : 0) + f - m;
  return p.setUTCDate(p.getUTCDate() - b), p.setUTCHours(0, 0, 0, 0), p;
}
function Jr(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = we(e),
    m = g.getUTCFullYear(),
    p = ia(),
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setUTCFullYear(m + 1, 0, f), b.setUTCHours(0, 0, 0, 0);
  var S = $a(b, n),
    T = new Date(0);
  T.setUTCFullYear(m, 0, f), T.setUTCHours(0, 0, 0, 0);
  var w = $a(T, n);
  return g.getTime() >= S.getTime()
    ? m + 1
    : g.getTime() >= w.getTime()
    ? m
    : m - 1;
}
function P_(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = ia(),
    m = Pe(
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    p = Jr(e, n),
    f = new Date(0);
  f.setUTCFullYear(p, 0, m), f.setUTCHours(0, 0, 0, 0);
  var b = $a(f, n);
  return b;
}
var I_ = 6048e5;
function Kl(e, n) {
  ye(1, arguments);
  var a = we(e),
    t = $a(a, n).getTime() - P_(a, n).getTime();
  return Math.round(t / I_) + 1;
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
  qa = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  E_ = {
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
      var i = Jr(n, o),
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
      var t = jl(n);
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
      var i = Kl(n, o);
      return a === "wo"
        ? t.ordinalNumber(i, { unit: "week" })
        : ze(i, a.length);
    },
    I: function (n, a, t) {
      var o = zl(n);
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
      var o = S_(n);
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
          ? (i = qa.noon)
          : o === 0
          ? (i = qa.midnight)
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
          ? (i = qa.evening)
          : o >= 12
          ? (i = qa.afternoon)
          : o >= 4
          ? (i = qa.morning)
          : (i = qa.night),
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
          return Os(r);
        case "XXXX":
        case "XX":
          return Ma(r);
        case "XXXXX":
        case "XXX":
        default:
          return Ma(r, ":");
      }
    },
    x: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "x":
          return Os(r);
        case "xxxx":
        case "xx":
          return Ma(r);
        case "xxxxx":
        case "xxx":
        default:
          return Ma(r, ":");
      }
    },
    O: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Ms(r, ":");
        case "OOOO":
        default:
          return "GMT" + Ma(r, ":");
      }
    },
    z: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Ms(r, ":");
        case "zzzz":
        default:
          return "GMT" + Ma(r, ":");
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
function Ms(e, n) {
  var a = e > 0 ? "-" : "+",
    t = Math.abs(e),
    o = Math.floor(t / 60),
    i = t % 60;
  if (i === 0) return a + String(o);
  var r = n;
  return a + String(o) + r + ze(i, 2);
}
function Os(e, n) {
  if (e % 60 === 0) {
    var a = e > 0 ? "-" : "+";
    return a + ze(Math.abs(e) / 60, 2);
  }
  return Ma(e, n);
}
function Ma(e, n) {
  var a = n || "",
    t = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = ze(Math.floor(o / 60), 2),
    r = ze(o % 60, 2);
  return t + i + a + r;
}
var Ls = function (n, a) {
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
  Ql = function (n, a) {
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
  D_ = function (n, a) {
    var t = n.match(/(P+)(p+)?/) || [],
      o = t[1],
      i = t[2];
    if (!i) return Ls(n, a);
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
    return r.replace("{{date}}", Ls(o, a)).replace("{{time}}", Ql(i, a));
  },
  wr = { p: Ql, P: D_ },
  M_ = ["D", "DD"],
  O_ = ["YY", "YYYY"];
function Zl(e) {
  return M_.indexOf(e) !== -1;
}
function Xl(e) {
  return O_.indexOf(e) !== -1;
}
function lo(e, n, a) {
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
var L_ = {
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
  B_ = function (n, a, t) {
    var o,
      i = L_[n];
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
function Yo(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.width ? String(n.width) : e.defaultWidth,
      t = e.formats[a] || e.formats[e.defaultWidth];
    return t;
  };
}
var A_ = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  x_ = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  R_ = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  N_ = {
    date: Yo({ formats: A_, defaultWidth: "full" }),
    time: Yo({ formats: x_, defaultWidth: "full" }),
    dateTime: Yo({ formats: R_, defaultWidth: "full" }),
  },
  H_ = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  $_ = function (n, a, t, o) {
    return H_[n];
  };
function bn(e) {
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
    var d = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[d];
  };
}
var U_ = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  V_ = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Y_ = {
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
  F_ = {
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
  W_ = {
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
  q_ = {
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
  G_ = function (n, a) {
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
  j_ = {
    ordinalNumber: G_,
    era: bn({ values: U_, defaultWidth: "wide" }),
    quarter: bn({
      values: V_,
      defaultWidth: "wide",
      argumentCallback: function (n) {
        return n - 1;
      },
    }),
    month: bn({ values: Y_, defaultWidth: "wide" }),
    day: bn({ values: F_, defaultWidth: "wide" }),
    dayPeriod: bn({
      values: W_,
      defaultWidth: "wide",
      formattingValues: q_,
      defaultFormattingWidth: "wide",
    }),
  };
function _n(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.width,
      o = (t && e.matchPatterns[t]) || e.matchPatterns[e.defaultMatchWidth],
      i = n.match(o);
    if (!i) return null;
    var r = i[0],
      s = (t && e.parsePatterns[t]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s)
        ? K_(s, function (m) {
            return m.test(r);
          })
        : z_(s, function (m) {
            return m.test(r);
          }),
      d;
    (d = e.valueCallback ? e.valueCallback(l) : l),
      (d = a.valueCallback ? a.valueCallback(d) : d);
    var g = n.slice(r.length);
    return { value: d, rest: g };
  };
}
function z_(e, n) {
  for (var a in e) if (e.hasOwnProperty(a) && n(e[a])) return a;
}
function K_(e, n) {
  for (var a = 0; a < e.length; a++) if (n(e[a])) return a;
}
function Q_(e) {
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
var Z_ = /^(\d+)(th|st|nd|rd)?/i,
  X_ = /\d+/i,
  J_ = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  e0 = { any: [/^b/i, /^(a|c)/i] },
  t0 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  a0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  n0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  o0 = {
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
  r0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  i0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  s0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  l0 = {
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
  u0 = {
    ordinalNumber: Q_({
      matchPattern: Z_,
      parsePattern: X_,
      valueCallback: function (n) {
        return parseInt(n, 10);
      },
    }),
    era: _n({
      matchPatterns: J_,
      defaultMatchWidth: "wide",
      parsePatterns: e0,
      defaultParseWidth: "any",
    }),
    quarter: _n({
      matchPatterns: t0,
      defaultMatchWidth: "wide",
      parsePatterns: a0,
      defaultParseWidth: "any",
      valueCallback: function (n) {
        return n + 1;
      },
    }),
    month: _n({
      matchPatterns: n0,
      defaultMatchWidth: "wide",
      parsePatterns: o0,
      defaultParseWidth: "any",
    }),
    day: _n({
      matchPatterns: r0,
      defaultMatchWidth: "wide",
      parsePatterns: i0,
      defaultParseWidth: "any",
    }),
    dayPeriod: _n({
      matchPatterns: s0,
      defaultMatchWidth: "any",
      parsePatterns: l0,
      defaultParseWidth: "any",
    }),
  },
  Jl = {
    code: "en-US",
    formatDistance: B_,
    formatLong: N_,
    formatRelative: $_,
    localize: j_,
    match: u0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  c0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  d0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  m0 = /^'([^]*?)'?$/,
  g0 = /''/g,
  p0 = /[a-zA-Z]/;
function Ta(e, n, a) {
  var t, o, i, r, s, l, d, g, m, p, f, b, S, T, w, y, D, C;
  ye(2, arguments);
  var M = String(n),
    R = ia(),
    N =
      (t = (o = a?.locale) !== null && o !== void 0 ? o : R.locale) !== null &&
      t !== void 0
        ? t
        : Jl,
    Q = Pe(
      (i =
        (r =
          (s =
            (l = a?.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : a == null ||
                (d = a.locale) === null ||
                d === void 0 ||
                (g = d.options) === null ||
                g === void 0
              ? void 0
              : g.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : R.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (m = R.locale) === null ||
            m === void 0 ||
            (p = m.options) === null ||
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
          : R.weekStartsOn) !== null && b !== void 0
        ? b
        : (D = R.locale) === null ||
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
  if (!N.localize)
    throw new RangeError("locale must contain localize property");
  if (!N.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var P = we(e);
  if (!En(P)) throw new RangeError("Invalid time value");
  var B = so(P),
    $ = Gl(P, B),
    K = {
      firstWeekContainsDate: Q,
      weekStartsOn: G,
      locale: N,
      _originalDate: P,
    },
    V = M.match(d0)
      .map(function (E) {
        var Y = E[0];
        if (Y === "p" || Y === "P") {
          var U = wr[Y];
          return U(E, N.formatLong);
        }
        return E;
      })
      .join("")
      .match(c0)
      .map(function (E) {
        if (E === "''") return "'";
        var Y = E[0];
        if (Y === "'") return v0(E);
        var U = E_[Y];
        if (U)
          return (
            !(a != null && a.useAdditionalWeekYearTokens) &&
              Xl(E) &&
              lo(E, n, String(e)),
            !(a != null && a.useAdditionalDayOfYearTokens) &&
              Zl(E) &&
              lo(E, n, String(e)),
            U($, E, N.localize, K)
          );
        if (Y.match(p0))
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
function v0(e) {
  var n = e.match(m0);
  return n ? n[1].replace(g0, "'") : e;
}
function h0(e, n) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  return e;
}
function f0(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getDay();
  return a;
}
function y0(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getFullYear(),
    t = n.getMonth(),
    o = new Date(0);
  return o.setFullYear(a, t + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Gt(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getHours();
  return a;
}
var b0 = 6048e5;
function _0(e) {
  ye(1, arguments);
  var n = we(e),
    a = io(n).getTime() - g_(n).getTime();
  return Math.round(a / b0) + 1;
}
function oa(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getMinutes();
  return a;
}
function Ve(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getMonth();
  return a;
}
function on(e) {
  ye(1, arguments);
  var n = we(e),
    a = n.getSeconds();
  return a;
}
function w0(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = we(e),
    m = g.getFullYear(),
    p = ia(),
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var b = new Date(0);
  b.setFullYear(m + 1, 0, f), b.setHours(0, 0, 0, 0);
  var S = Ha(b, n),
    T = new Date(0);
  T.setFullYear(m, 0, f), T.setHours(0, 0, 0, 0);
  var w = Ha(T, n);
  return g.getTime() >= S.getTime()
    ? m + 1
    : g.getTime() >= w.getTime()
    ? m
    : m - 1;
}
function k0(e, n) {
  var a, t, o, i, r, s, l, d;
  ye(1, arguments);
  var g = ia(),
    m = Pe(
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
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    p = w0(e, n),
    f = new Date(0);
  f.setFullYear(p, 0, m), f.setHours(0, 0, 0, 0);
  var b = Ha(f, n);
  return b;
}
var S0 = 6048e5;
function T0(e, n) {
  ye(1, arguments);
  var a = we(e),
    t = Ha(a, n).getTime() - k0(a, n).getTime();
  return Math.round(t / S0) + 1;
}
function Re(e) {
  return ye(1, arguments), we(e).getFullYear();
}
function $n(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() > t.getTime();
}
function Un(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() < t.getTime();
}
function Ka(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = we(n);
  return a.getTime() === t.getTime();
}
function Bs(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function C0(e, n) {
  if (e) {
    if (typeof e == "string") return Bs(e, n);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (a === "Object" && e.constructor && (a = e.constructor.name),
      a === "Map" || a === "Set")
    )
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Bs(e, n);
  }
}
function As(e, n) {
  var a = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = C0(e)) || n) {
      a && (e = a);
      var t = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function (d) {
          throw d;
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
      var d = a.next();
      return (i = d.done), d;
    },
    e: function (d) {
      (r = !0), (s = d);
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
function fe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function kr(e, n) {
  return (
    (kr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, o) {
          return (t.__proto__ = o), t;
        }),
    kr(e, n)
  );
}
function Ye(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    n && kr(e, n);
}
function uo(e) {
  return (
    (uo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    uo(e)
  );
}
function eu() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (eu = function () {
    return !!e;
  })();
}
function P0(e, n) {
  if (n && ($t(n) === "object" || typeof n == "function")) return n;
  if (n !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return fe(e);
}
function Fe(e) {
  var n = eu();
  return function () {
    var t = uo(e),
      o;
    if (n) {
      var i = uo(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else o = t.apply(this, arguments);
    return P0(this, o);
  };
}
function He(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function I0(e, n) {
  if ($t(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if ($t(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tu(e) {
  var n = I0(e, "string");
  return $t(n) == "symbol" ? n : String(n);
}
function E0(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(e, tu(t.key), t);
  }
}
function $e(e, n, a) {
  return (
    n && E0(e.prototype, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function pe(e, n, a) {
  return (
    (n = tu(n)),
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
var D0 = 10,
  au = (function () {
    function e() {
      He(this, e), pe(this, "priority", void 0), pe(this, "subPriority", 0);
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
  M0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
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
  })(au),
  O0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", D0),
        pe(fe(t), "subPriority", -1),
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
  })(au),
  qe = (function () {
    function e() {
      He(this, e),
        pe(this, "incompatibleTokens", void 0),
        pe(this, "priority", void 0),
        pe(this, "subPriority", void 0);
    }
    return (
      $e(e, [
        {
          key: "run",
          value: function (a, t, o, i) {
            var r = this.parse(a, t, o, i);
            return r
              ? {
                  setter: new M0(
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
  L0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 140),
        pe(fe(t), "incompatibleTokens", ["R", "u", "t", "T"]),
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
  ut = {
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
  ea = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function ct(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}
function nt(e, n) {
  var a = n.match(e);
  return a ? { value: parseInt(a[0], 10), rest: n.slice(a[0].length) } : null;
}
function ta(e, n) {
  var a = n.match(e);
  if (!a) return null;
  if (a[0] === "Z") return { value: 0, rest: n.slice(1) };
  var t = a[1] === "+" ? 1 : -1,
    o = a[2] ? parseInt(a[2], 10) : 0,
    i = a[3] ? parseInt(a[3], 10) : 0,
    r = a[5] ? parseInt(a[5], 10) : 0;
  return { value: t * (o * Xr + i * Zr + r * f_), rest: n.slice(a[0].length) };
}
function nu(e) {
  return nt(ut.anyDigitsSigned, e);
}
function st(e, n) {
  switch (e) {
    case 1:
      return nt(ut.singleDigit, n);
    case 2:
      return nt(ut.twoDigits, n);
    case 3:
      return nt(ut.threeDigits, n);
    case 4:
      return nt(ut.fourDigits, n);
    default:
      return nt(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function co(e, n) {
  switch (e) {
    case 1:
      return nt(ut.singleDigitSigned, n);
    case 2:
      return nt(ut.twoDigitsSigned, n);
    case 3:
      return nt(ut.threeDigitsSigned, n);
    case 4:
      return nt(ut.fourDigitsSigned, n);
    default:
      return nt(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function ei(e) {
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
function ou(e, n) {
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
function ru(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var B0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 130),
        pe(fe(t), "incompatibleTokens", [
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
            var s = function (d) {
              return { year: d, isTwoDigitYear: i === "yy" };
            };
            switch (i) {
              case "y":
                return ct(st(4, o), s);
              case "yo":
                return ct(r.ordinalNumber(o, { unit: "year" }), s);
              default:
                return ct(st(i.length, o), s);
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
              var l = ou(r.year, s);
              return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
            var d = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return o.setUTCFullYear(d, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  A0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 130),
        pe(fe(t), "incompatibleTokens", [
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
            var s = function (d) {
              return { year: d, isTwoDigitYear: i === "YY" };
            };
            switch (i) {
              case "Y":
                return ct(st(4, o), s);
              case "Yo":
                return ct(r.ordinalNumber(o, { unit: "year" }), s);
              default:
                return ct(st(i.length, o), s);
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
            var l = Jr(o, s);
            if (r.isTwoDigitYear) {
              var d = ou(r.year, l);
              return (
                o.setUTCFullYear(d, 0, s.firstWeekContainsDate),
                o.setUTCHours(0, 0, 0, 0),
                $a(o, s)
              );
            }
            var g = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return (
              o.setUTCFullYear(g, 0, s.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              $a(o, s)
            );
          },
        },
      ]),
      a
    );
  })(qe),
  x0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 130),
        pe(fe(t), "incompatibleTokens", [
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
            return co(i === "R" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var s = new Date(0);
            return s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0), nn(s);
          },
        },
      ]),
      a
    );
  })(qe),
  R0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 130),
        pe(fe(t), "incompatibleTokens", [
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
            return co(i === "u" ? 4 : i.length, o);
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
  N0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 120),
        pe(fe(t), "incompatibleTokens", [
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
                return st(i.length, o);
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
  H0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 120),
        pe(fe(t), "incompatibleTokens", [
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
                return st(i.length, o);
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
  $0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "incompatibleTokens", [
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
        pe(fe(t), "priority", 110),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var s = function (d) {
              return d - 1;
            };
            switch (i) {
              case "M":
                return ct(nt(ut.month, o), s);
              case "MM":
                return ct(st(2, o), s);
              case "Mo":
                return ct(r.ordinalNumber(o, { unit: "month" }), s);
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
  U0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 110),
        pe(fe(t), "incompatibleTokens", [
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
            var s = function (d) {
              return d - 1;
            };
            switch (i) {
              case "L":
                return ct(nt(ut.month, o), s);
              case "LL":
                return ct(st(2, o), s);
              case "Lo":
                return ct(r.ordinalNumber(o, { unit: "month" }), s);
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
function V0(e, n, a) {
  ye(2, arguments);
  var t = we(e),
    o = Pe(n),
    i = Kl(t, a) - o;
  return t.setUTCDate(t.getUTCDate() - i * 7), t;
}
var Y0 = (function (e) {
  Ye(a, e);
  var n = Fe(a);
  function a() {
    var t;
    He(this, a);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return (
      (t = n.call.apply(n, [this].concat(i))),
      pe(fe(t), "priority", 100),
      pe(fe(t), "incompatibleTokens", [
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
              return nt(ut.week, o);
            case "wo":
              return r.ordinalNumber(o, { unit: "week" });
            default:
              return st(i.length, o);
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
          return $a(V0(o, r, s), s);
        },
      },
    ]),
    a
  );
})(qe);
function F0(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n),
    o = zl(a) - t;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
var W0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 100),
        pe(fe(t), "incompatibleTokens", [
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
                return nt(ut.week, o);
              case "Io":
                return r.ordinalNumber(o, { unit: "week" });
              default:
                return st(i.length, o);
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
            return nn(F0(o, r));
          },
        },
      ]),
      a
    );
  })(qe),
  q0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  G0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  j0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "subPriority", 1),
        pe(fe(t), "incompatibleTokens", [
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
                return nt(ut.date, o);
              case "do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return st(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = ru(r),
              l = o.getUTCMonth();
            return s ? i >= 1 && i <= G0[l] : i >= 1 && i <= q0[l];
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
  z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "subpriority", 1),
        pe(fe(t), "incompatibleTokens", [
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
                return nt(ut.dayOfYear, o);
              case "Do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return st(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = ru(r);
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
function ti(e, n, a) {
  var t, o, i, r, s, l, d, g;
  ye(2, arguments);
  var m = ia(),
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
            : m.weekStartsOn) !== null && o !== void 0
          ? o
          : (d = m.locale) === null ||
            d === void 0 ||
            (g = d.options) === null ||
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
var K0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
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
            return (o = ti(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Q0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "incompatibleTokens", [
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
              var m = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + m;
            };
            switch (i) {
              case "e":
              case "ee":
                return ct(st(i.length, o), l);
              case "eo":
                return ct(r.ordinalNumber(o, { unit: "day" }), l);
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
            return (o = ti(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  Z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "incompatibleTokens", [
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
              var m = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + m;
            };
            switch (i) {
              case "c":
              case "cc":
                return ct(st(i.length, o), l);
              case "co":
                return ct(r.ordinalNumber(o, { unit: "day" }), l);
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
            return (o = ti(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function X0(e, n) {
  ye(2, arguments);
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
var J0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 90),
        pe(fe(t), "incompatibleTokens", [
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
            var s = function (d) {
              return d === 0 ? 7 : d;
            };
            switch (i) {
              case "i":
              case "ii":
                return st(i.length, o);
              case "io":
                return r.ordinalNumber(o, { unit: "day" });
              case "iii":
                return ct(
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiii":
                return ct(
                  r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiiii":
                return ct(
                  r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiii":
              default:
                return ct(
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
            return (o = X0(o, r)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  ew = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 80),
        pe(fe(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
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
            return o.setUTCHours(ei(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  tw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 80),
        pe(fe(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
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
            return o.setUTCHours(ei(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  aw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 80),
        pe(fe(t), "incompatibleTokens", ["a", "b", "t", "T"]),
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
            return o.setUTCHours(ei(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  nw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 70),
        pe(fe(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
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
                return nt(ut.hour12h, o);
              case "ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return st(i.length, o);
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
  ow = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 70),
        pe(fe(t), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
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
                return nt(ut.hour23h, o);
              case "Ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return st(i.length, o);
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
  rw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 70),
        pe(fe(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
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
                return nt(ut.hour11h, o);
              case "Ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return st(i.length, o);
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
  iw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 70),
        pe(fe(t), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
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
                return nt(ut.hour24h, o);
              case "ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return st(i.length, o);
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
  sw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 60),
        pe(fe(t), "incompatibleTokens", ["t", "T"]),
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
                return nt(ut.minute, o);
              case "mo":
                return r.ordinalNumber(o, { unit: "minute" });
              default:
                return st(i.length, o);
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
  lw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 50),
        pe(fe(t), "incompatibleTokens", ["t", "T"]),
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
                return nt(ut.second, o);
              case "so":
                return r.ordinalNumber(o, { unit: "second" });
              default:
                return st(i.length, o);
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
  uw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 30),
        pe(fe(t), "incompatibleTokens", ["t", "T"]),
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
            return ct(st(i.length, o), r);
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
  cw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 10),
        pe(fe(t), "incompatibleTokens", ["t", "T", "x"]),
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
                return ta(ea.basicOptionalMinutes, o);
              case "XX":
                return ta(ea.basic, o);
              case "XXXX":
                return ta(ea.basicOptionalSeconds, o);
              case "XXXXX":
                return ta(ea.extendedOptionalSeconds, o);
              case "XXX":
              default:
                return ta(ea.extended, o);
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
  dw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 10),
        pe(fe(t), "incompatibleTokens", ["t", "T", "X"]),
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
                return ta(ea.basicOptionalMinutes, o);
              case "xx":
                return ta(ea.basic, o);
              case "xxxx":
                return ta(ea.basicOptionalSeconds, o);
              case "xxxxx":
                return ta(ea.extendedOptionalSeconds, o);
              case "xxx":
              default:
                return ta(ea.extended, o);
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
  mw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 40),
        pe(fe(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o) {
            return nu(o);
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
  gw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      He(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), "priority", 20),
        pe(fe(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      $e(a, [
        {
          key: "parse",
          value: function (o) {
            return nu(o);
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
  pw = {
    G: new L0(),
    y: new B0(),
    Y: new A0(),
    R: new x0(),
    u: new R0(),
    Q: new N0(),
    q: new H0(),
    M: new $0(),
    L: new U0(),
    w: new Y0(),
    I: new W0(),
    d: new j0(),
    D: new z0(),
    E: new K0(),
    e: new Q0(),
    c: new Z0(),
    i: new J0(),
    a: new ew(),
    b: new tw(),
    B: new aw(),
    h: new nw(),
    H: new ow(),
    K: new rw(),
    k: new iw(),
    m: new sw(),
    s: new lw(),
    S: new uw(),
    X: new cw(),
    x: new dw(),
    t: new mw(),
    T: new gw(),
  },
  vw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  hw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  fw = /^'([^]*?)'?$/,
  yw = /''/g,
  bw = /\S/,
  _w = /[a-zA-Z]/;
function Sr(e, n, a, t) {
  var o, i, r, s, l, d, g, m, p, f, b, S, T, w;
  ye(3, arguments);
  var y = String(e),
    D = String(n),
    C = ia(),
    M =
      (o = (i = void 0) !== null && i !== void 0 ? i : C.locale) !== null &&
      o !== void 0
        ? o
        : Jl;
  if (!M.match) throw new RangeError("locale must contain match property");
  var R = Pe(
    (r =
      (s =
        (l = (d = void 0) !== null && d !== void 0 ? d : void 0) !== null &&
        l !== void 0
          ? l
          : C.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : (g = C.locale) === null ||
          g === void 0 ||
          (m = g.options) === null ||
          m === void 0
        ? void 0
        : m.firstWeekContainsDate) !== null && r !== void 0
      ? r
      : 1
  );
  if (!(R >= 1 && R <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var N = Pe(
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
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (D === "") return y === "" ? we(a) : new Date(NaN);
  var Q = { firstWeekContainsDate: R, weekStartsOn: N, locale: M },
    G = [new O0()],
    P = D.match(hw)
      .map(function (Z) {
        var x = Z[0];
        if (x in wr) {
          var _ = wr[x];
          return _(Z, M.formatLong);
        }
        return Z;
      })
      .join("")
      .match(vw),
    B = [],
    $ = As(P),
    K;
  try {
    var V = function () {
      var x = K.value;
      !(t != null && t.useAdditionalWeekYearTokens) && Xl(x) && lo(x, D, e),
        !(t != null && t.useAdditionalDayOfYearTokens) && Zl(x) && lo(x, D, e);
      var _ = x[0],
        ae = pw[_];
      if (ae) {
        var he = ae.incompatibleTokens;
        if (Array.isArray(he)) {
          var le = B.find(function (de) {
            return he.includes(de.token) || de.token === _;
          });
          if (le)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(le.fullToken, "` and `")
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
        var be = ae.run(y, x, M.match, Q);
        if (!be) return { v: new Date(NaN) };
        G.push(be.setter), (y = be.rest);
      } else {
        if (_.match(_w))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              _ +
              "`"
          );
        if (
          (x === "''" ? (x = "'") : _ === "'" && (x = ww(x)),
          y.indexOf(x) === 0)
        )
          y = y.slice(x.length);
        else return { v: new Date(NaN) };
      }
    };
    for ($.s(); !(K = $.n()).done; ) {
      var E = V();
      if ($t(E) === "object") return E.v;
    }
  } catch (Z) {
    $.e(Z);
  } finally {
    $.f();
  }
  if (y.length > 0 && bw.test(y)) return new Date(NaN);
  var Y = G.map(function (Z) {
      return Z.priority;
    })
      .sort(function (Z, x) {
        return x - Z;
      })
      .filter(function (Z, x, _) {
        return _.indexOf(Z) === x;
      })
      .map(function (Z) {
        return G.filter(function (x) {
          return x.priority === Z;
        }).sort(function (x, _) {
          return _.subPriority - x.subPriority;
        });
      })
      .map(function (Z) {
        return Z[0];
      }),
    U = we(a);
  if (isNaN(U.getTime())) return new Date(NaN);
  var j = Gl(U, so(U)),
    k = {},
    v = As(Y),
    F;
  try {
    for (v.s(); !(F = v.n()).done; ) {
      var q = F.value;
      if (!q.validate(j, Q)) return new Date(NaN);
      var te = q.set(j, k, Q);
      Array.isArray(te) ? ((j = te[0]), h0(k, te[1])) : (j = te);
    }
  } catch (Z) {
    v.e(Z);
  } finally {
    v.f();
  }
  return j;
}
function ww(e) {
  return e.match(fw)[1].replace(yw, "'");
}
function xs(e, n) {
  ye(2, arguments);
  var a = Hn(e),
    t = Hn(n);
  return a.getTime() === t.getTime();
}
function kw(e, n) {
  ye(2, arguments);
  var a = Pe(n);
  return ca(e, -a);
}
function Sw(e, n) {
  var a;
  ye(1, arguments);
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
  var o = Iw(e),
    i;
  if (o.date) {
    var r = Ew(o.date, t);
    i = Dw(r.restDateString, r.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var s = i.getTime(),
    l = 0,
    d;
  if (o.time && ((l = Mw(o.time)), isNaN(l))) return new Date(NaN);
  if (o.timezone) {
    if (((d = Ow(o.timezone)), isNaN(d))) return new Date(NaN);
  } else {
    var g = new Date(s + l),
      m = new Date(0);
    return (
      m.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()),
      m.setHours(
        g.getUTCHours(),
        g.getUTCMinutes(),
        g.getUTCSeconds(),
        g.getUTCMilliseconds()
      ),
      m
    );
  }
  return new Date(s + l + d);
}
var Jn = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  Tw = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Cw =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Pw = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Iw(e) {
  var n = {},
    a = e.split(Jn.dateTimeDelimiter),
    t;
  if (a.length > 2) return n;
  if (
    (/:/.test(a[0])
      ? (t = a[0])
      : ((n.date = a[0]),
        (t = a[1]),
        Jn.timeZoneDelimiter.test(n.date) &&
          ((n.date = e.split(Jn.timeZoneDelimiter)[0]),
          (t = e.substr(n.date.length, e.length)))),
    t)
  ) {
    var o = Jn.timezone.exec(t);
    o ? ((n.time = t.replace(o[1], "")), (n.timezone = o[1])) : (n.time = t);
  }
  return n;
}
function Ew(e, n) {
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
function Dw(e, n) {
  if (n === null) return new Date(NaN);
  var a = e.match(Tw);
  if (!a) return new Date(NaN);
  var t = !!a[4],
    o = wn(a[1]),
    i = wn(a[2]) - 1,
    r = wn(a[3]),
    s = wn(a[4]),
    l = wn(a[5]) - 1;
  if (t) return Rw(n, s, l) ? Lw(n, s, l) : new Date(NaN);
  var d = new Date(0);
  return !Aw(n, i, r) || !xw(n, o)
    ? new Date(NaN)
    : (d.setUTCFullYear(n, i, Math.max(o, r)), d);
}
function wn(e) {
  return e ? parseInt(e) : 1;
}
function Mw(e) {
  var n = e.match(Cw);
  if (!n) return NaN;
  var a = Fo(n[1]),
    t = Fo(n[2]),
    o = Fo(n[3]);
  return Nw(a, t, o) ? a * Xr + t * Zr + o * 1e3 : NaN;
}
function Fo(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Ow(e) {
  if (e === "Z") return 0;
  var n = e.match(Pw);
  if (!n) return 0;
  var a = n[1] === "+" ? -1 : 1,
    t = parseInt(n[2]),
    o = (n[3] && parseInt(n[3])) || 0;
  return Hw(t, o) ? a * (t * Xr + o * Zr) : NaN;
}
function Lw(e, n, a) {
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = (n - 1) * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Bw = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function iu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Aw(e, n, a) {
  return n >= 0 && n <= 11 && a >= 1 && a <= (Bw[n] || (iu(e) ? 29 : 28));
}
function xw(e, n) {
  return n >= 1 && n <= (iu(e) ? 366 : 365);
}
function Rw(e, n, a) {
  return n >= 1 && n <= 53 && a >= 0 && a <= 6;
}
function Nw(e, n, a) {
  return e === 24
    ? n === 0 && a === 0
    : a >= 0 && a < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function Hw(e, n) {
  return n >= 0 && n <= 59;
}
function su(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n),
    o = a.getFullYear(),
    i = a.getDate(),
    r = new Date(0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  var s = y0(r);
  return a.setMonth(t, Math.min(i, s)), a;
}
function et(e, n) {
  if ((ye(2, arguments), $t(n) !== "object" || n === null))
    throw new RangeError("values parameter must be an object");
  var a = we(e);
  return isNaN(a.getTime())
    ? new Date(NaN)
    : (n.year != null && a.setFullYear(n.year),
      n.month != null && (a = su(a, n.month)),
      n.date != null && a.setDate(Pe(n.date)),
      n.hours != null && a.setHours(Pe(n.hours)),
      n.minutes != null && a.setMinutes(Pe(n.minutes)),
      n.seconds != null && a.setSeconds(Pe(n.seconds)),
      n.milliseconds != null && a.setMilliseconds(Pe(n.milliseconds)),
      a);
}
function lu(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setHours(t), a;
}
function ai(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setMilliseconds(t), a;
}
function uu(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setMinutes(t), a;
}
function ni(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return a.setSeconds(t), a;
}
function na(e, n) {
  ye(2, arguments);
  var a = we(e),
    t = Pe(n);
  return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(t), a);
}
function rn(e, n) {
  ye(2, arguments);
  var a = Pe(n);
  return qt(e, -a);
}
function $w(e, n) {
  if ((ye(2, arguments), !n || $t(n) !== "object")) return new Date(NaN);
  var a = n.years ? Pe(n.years) : 0,
    t = n.months ? Pe(n.months) : 0,
    o = n.weeks ? Pe(n.weeks) : 0,
    i = n.days ? Pe(n.days) : 0,
    r = n.hours ? Pe(n.hours) : 0,
    s = n.minutes ? Pe(n.minutes) : 0,
    l = n.seconds ? Pe(n.seconds) : 0,
    d = rn(e, t + a * 12),
    g = kw(d, i + o * 7),
    m = s + r * 60,
    p = l + m * 60,
    f = p * 1e3,
    b = new Date(g.getTime() - f);
  return b;
}
function cu(e, n) {
  ye(2, arguments);
  var a = Pe(n);
  return Qr(e, -a);
}
function mn() {
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
mn.compatConfig = { MODE: 3 };
function du() {
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
du.compatConfig = { MODE: 3 };
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
          d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
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
          d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z",
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
          d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z",
        }),
        I("path", {
          d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
      ]
    )
  );
}
ii.compatConfig = { MODE: 3 };
function si() {
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
si.compatConfig = { MODE: 3 };
function li() {
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
li.compatConfig = { MODE: 3 };
function ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mu = { exports: {} };
(function (e) {
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(mu);
var Uw = mu.exports,
  Tr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(Tr, Tr.exports);
var Vw = Tr.exports;
const Yw = ui(Vw);
var Cr = { exports: {} };
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
})(Cr, Cr.exports);
var Fw = Cr.exports;
const Rs = ui(Fw);
function Ww(e, n) {
  var a = zw(n);
  return a.formatToParts ? Gw(a, e) : jw(a, e);
}
var qw = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Gw(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var i = qw[a[o].type];
      i >= 0 && (t[i] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (r) {
    if (r instanceof RangeError) return [NaN];
    throw r;
  }
}
function jw(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""),
    t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var Wo = {};
function zw(e) {
  if (!Wo[e]) {
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
    Wo[e] = a
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
  return Wo[e];
}
function ci(e, n, a, t, o, i, r) {
  var s = new Date(0);
  return s.setUTCFullYear(e, n, a), s.setUTCHours(t, o, i, r), s;
}
var Ns = 36e5,
  Kw = 6e4,
  qo = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function di(e, n, a) {
  var t, o;
  if (e === "" || ((t = qo.timezoneZ.exec(e)), t)) return 0;
  var i;
  if (((t = qo.timezoneHH.exec(e)), t))
    return (i = parseInt(t[1], 10)), Hs(i) ? -(i * Ns) : NaN;
  if (((t = qo.timezoneHHMM.exec(e)), t)) {
    i = parseInt(t[1], 10);
    var r = parseInt(t[2], 10);
    return Hs(i, r) ? ((o = Math.abs(i) * Ns + r * Kw), i > 0 ? -o : o) : NaN;
  }
  if (Xw(e)) {
    n = new Date(n || Date.now());
    var s = a ? n : Qw(n),
      l = Pr(s, e),
      d = a ? l : Zw(n, l, e);
    return -d;
  }
  return NaN;
}
function Qw(e) {
  return ci(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Pr(e, n) {
  var a = Ww(e, n),
    t = ci(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime(),
    o = e.getTime(),
    i = o % 1e3;
  return (o -= i >= 0 ? i : 1e3 + i), t - o;
}
function Zw(e, n, a) {
  var t = e.getTime(),
    o = t - n,
    i = Pr(new Date(o), a);
  if (n === i) return n;
  o -= i - n;
  var r = Pr(new Date(o), a);
  return i === r ? i : Math.max(i, r);
}
function Hs(e, n) {
  return -23 <= e && e <= 23 && (n == null || (0 <= n && n <= 59));
}
var $s = {};
function Xw(e) {
  if ($s[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), ($s[e] = !0), !0;
  } catch {
    return !1;
  }
}
var gu =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Go = 36e5,
  Us = 6e4,
  Jw = 2,
  St = {
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
    timeZone: gu,
  };
function Ir(e, n) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (e === null) return new Date(NaN);
  var a = n || {},
    t = a.additionalDigits == null ? Jw : Yw(a.additionalDigits);
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
  var o = e1(e),
    i = t1(o.date, t),
    r = i.year,
    s = i.restDateString,
    l = a1(s, r);
  if (isNaN(l)) return new Date(NaN);
  if (l) {
    var d = l.getTime(),
      g = 0,
      m;
    if (o.time && ((g = n1(o.time)), isNaN(g))) return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (((m = di(o.timeZone || a.timeZone, new Date(d + g))), isNaN(m)))
        return new Date(NaN);
    } else (m = Rs(new Date(d + g))), (m = Rs(new Date(d + g + m)));
    return new Date(d + g + m);
  } else return new Date(NaN);
}
function e1(e) {
  var n = {},
    a = St.dateTimePattern.exec(e),
    t;
  if (
    (a
      ? ((n.date = a[1]), (t = a[3]))
      : ((a = St.datePattern.exec(e)),
        a ? ((n.date = a[1]), (t = a[2])) : ((n.date = null), (t = e))),
    t)
  ) {
    var o = St.timeZone.exec(t);
    o
      ? ((n.time = t.replace(o[1], "")), (n.timeZone = o[1].trim()))
      : (n.time = t);
  }
  return n;
}
function t1(e, n) {
  var a = St.YYY[n],
    t = St.YYYYY[n],
    o;
  if (((o = St.YYYY.exec(e) || t.exec(e)), o)) {
    var i = o[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((o = St.YY.exec(e) || a.exec(e)), o)) {
    var r = o[1];
    return { year: parseInt(r, 10) * 100, restDateString: e.slice(r.length) };
  }
  return { year: null };
}
function a1(e, n) {
  if (n === null) return null;
  var a, t, o, i;
  if (e.length === 0) return (t = new Date(0)), t.setUTCFullYear(n), t;
  if (((a = St.MM.exec(e)), a))
    return (
      (t = new Date(0)),
      (o = parseInt(a[1], 10) - 1),
      Ys(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN)
    );
  if (((a = St.DDD.exec(e)), a)) {
    t = new Date(0);
    var r = parseInt(a[1], 10);
    return i1(n, r) ? (t.setUTCFullYear(n, 0, r), t) : new Date(NaN);
  }
  if (((a = St.MMDD.exec(e)), a)) {
    (t = new Date(0)), (o = parseInt(a[1], 10) - 1);
    var s = parseInt(a[2], 10);
    return Ys(n, o, s) ? (t.setUTCFullYear(n, o, s), t) : new Date(NaN);
  }
  if (((a = St.Www.exec(e)), a))
    return (i = parseInt(a[1], 10) - 1), Fs(n, i) ? Vs(n, i) : new Date(NaN);
  if (((a = St.WwwD.exec(e)), a)) {
    i = parseInt(a[1], 10) - 1;
    var l = parseInt(a[2], 10) - 1;
    return Fs(n, i, l) ? Vs(n, i, l) : new Date(NaN);
  }
  return null;
}
function n1(e) {
  var n, a, t;
  if (((n = St.HH.exec(e)), n))
    return (
      (a = parseFloat(n[1].replace(",", "."))), jo(a) ? (a % 24) * Go : NaN
    );
  if (((n = St.HHMM.exec(e)), n))
    return (
      (a = parseInt(n[1], 10)),
      (t = parseFloat(n[2].replace(",", "."))),
      jo(a, t) ? (a % 24) * Go + t * Us : NaN
    );
  if (((n = St.HHMMSS.exec(e)), n)) {
    (a = parseInt(n[1], 10)), (t = parseInt(n[2], 10));
    var o = parseFloat(n[3].replace(",", "."));
    return jo(a, t, o) ? (a % 24) * Go + t * Us + o * 1e3 : NaN;
  }
  return null;
}
function Vs(e, n, a) {
  (n = n || 0), (a = a || 0);
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var o1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  r1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function pu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Ys(e, n, a) {
  if (n < 0 || n > 11) return !1;
  if (a != null) {
    if (a < 1) return !1;
    var t = pu(e);
    if ((t && a > r1[n]) || (!t && a > o1[n])) return !1;
  }
  return !0;
}
function i1(e, n) {
  if (n < 1) return !1;
  var a = pu(e);
  return !((a && n > 366) || (!a && n > 365));
}
function Fs(e, n, a) {
  return !(n < 0 || n > 52 || (a != null && (a < 0 || a > 6)));
}
function jo(e, n, a) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (n != null && (n < 0 || n >= 60)) ||
    (a != null && (a < 0 || a >= 60))
  );
}
var Er = { exports: {} },
  Dr = { exports: {} };
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
})(Dr, Dr.exports);
var s1 = Dr.exports;
(function (e, n) {
  var a = Uw.default;
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = o);
  var t = a(s1);
  function o(i) {
    return (0, t.default)({}, i);
  }
  e.exports = n.default;
})(Er, Er.exports);
var l1 = Er.exports;
const u1 = ui(l1);
function c1(e, n, a) {
  var t = Ir(e, a),
    o = di(n, t, !0),
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
function d1(e, n, a) {
  if (typeof e == "string" && !e.match(gu)) {
    var t = u1(a);
    return (t.timeZone = n), Ir(e, t);
  }
  var o = Ir(e, a),
    i = ci(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    ).getTime(),
    r = di(n, new Date(i));
  return new Date(i + r);
}
function Ws(e) {
  return (n) =>
    new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" })
      .format(new Date(`2017-01-0${n}T00:00:00+00:00`))
      .slice(0, 2);
}
function m1(e) {
  return (n) =>
    Ta(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const g1 = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7];
    let o;
    if (e !== null)
      try {
        o = t.map(m1(e));
      } catch {
        o = t.map(Ws(n));
      }
    else o = t.map(Ws(n));
    const i = o.slice(0, a),
      r = o.slice(a + 1, o.length);
    return [o[a]].concat(...r).concat(...i);
  },
  mi = (e, n) => {
    const a = [];
    for (let t = +e[0]; t <= +e[1]; t++) a.push({ value: +t, text: `${t}` });
    return n ? a.reverse() : a;
  },
  vu = (e, n, a) => {
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
  p1 = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  gt = (e) => {
    const n = A(e);
    return n != null && n.$el ? n?.$el : n;
  },
  v1 = (e) => Object.assign({ type: "dot" }, e),
  hu = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  mo = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  pt = (e) => e,
  qs = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  Gs = (e) => e === null,
  h1 = (e) => {
    if (e)
      return [
        ...e.querySelectorAll("input, button, select, textarea, a[href]"),
      ][0];
  },
  f1 = (e) => {
    const n = [],
      a = (t) => t.filter((o) => o);
    for (let t = 0; t < e.length; t += 3) {
      const o = [e[t], e[t + 1], e[t + 2]];
      n.push(a(o));
    }
    return n;
  },
  Vn = (e, n, a) => {
    const t = a != null,
      o = n != null;
    if (!t && !o) return !1;
    const i = +a,
      r = +n;
    return t && o ? +e > i || +e < r : t ? +e > i : o ? +e < r : !1;
  },
  sn = (e, n) =>
    f1(e).map((a) =>
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
  y1 = () =>
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
function b1(e, n) {
  let a = [...document.querySelectorAll(y1())];
  a = a.filter(
    (o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance")
  );
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const _1 = (e, n) => {
    let a;
    return function (...t) {
      clearTimeout(a),
        (a = setTimeout(() => {
          e(...t);
        }, n));
    };
  },
  js = (e, n, a, t, o) => {
    const i = Sr(e, n.slice(0, e.length), new Date());
    return En(i) && Wl(i)
      ? t || o
        ? i
        : et(i, {
            hours: +a.hours,
            minutes: +a?.minutes,
            seconds: +a?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  w1 = (e, n, a, t, o) => {
    const i = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string") return js(e, n, i, t, o);
    if (Array.isArray(n)) {
      let r = null;
      for (const s of n) if (((r = js(e, s, i, t, o)), r)) break;
      return r;
    }
    return typeof n == "function" ? n(e) : null;
  },
  ne = (e) => (e ? new Date(e) : new Date()),
  k1 = (e, n, a) => {
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
  wt = (e) => {
    let n = ne(JSON.parse(JSON.stringify(e)));
    return (n = lu(n, 0)), (n = uu(n, 0)), (n = ni(n, 0)), (n = ai(n, 0)), n;
  },
  Pa = (e, n, a, t) => {
    let o = e ? ne(e) : ne();
    return (
      (n || n === 0) && (o = lu(o, +n)),
      (a || a === 0) && (o = uu(o, +a)),
      (t || t === 0) && (o = ni(o, +t)),
      ai(o, 0)
    );
  },
  ft = (e, n) => (!e || !n ? !1 : Un(wt(e), wt(n))),
  We = (e, n) => (!e || !n ? !1 : Ka(wt(e), wt(n))),
  _t = (e, n) => (!e || !n ? !1 : $n(wt(e), wt(n))),
  bo = (e, n, a) =>
    e != null && e[0] && e != null && e[1]
      ? _t(a, e[0]) && ft(a, e[1])
      : e != null && e[0] && n
      ? (_t(a, e[0]) && ft(a, n)) || (ft(a, e[0]) && _t(a, n))
      : !1,
  Ft = (e) => {
    const n = et(new Date(e), { date: 1 });
    return wt(n);
  },
  zo = (e, n, a) =>
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
  xa = (e) => ({ hours: Gt(e), minutes: oa(e), seconds: on(e) }),
  fu = (e, n) => {
    if (n) {
      const a = Re(ne(n));
      if (a > e) return 12;
      if (a === e) return Ve(ne(n));
    }
  },
  yu = (e, n) => {
    if (n) {
      const a = Re(ne(n));
      return a < e ? -1 : a === e ? Ve(ne(n)) : void 0;
    }
  },
  ln = (e) => {
    if (e) return Re(ne(e));
  },
  jt = (e, n) => (n ? c1(e, n) : e),
  bu = (e, n) => (n ? d1(e, n) : e),
  S1 = (e) => (e instanceof Date ? e : Sw(e)),
  _u = (e, n) => {
    const a = _t(e, n) ? n : e,
      t = _t(n, e) ? n : e;
    return ql({ start: a, end: t });
  },
  T1 = (e) => {
    const n = qt(e, 1);
    return { month: Ve(n), year: Re(n) };
  },
  ao = (e, n, a) => {
    const t = Ha(jt(e, n), { weekStartsOn: +a }),
      o = w_(jt(e, n), { weekStartsOn: +a });
    return [t, o];
  },
  wu = (e, n) => {
    const a = { hours: Gt(ne()), minutes: oa(ne()), seconds: n ? on(ne()) : 0 };
    return Object.assign(a, e);
  },
  ka = (e, n, a) => [
    et(ne(e), { date: 1 }),
    et(ne(), { month: n, year: a, date: 1 }),
  ],
  da = (e, n, a) => {
    let t = e ? ne(e) : ne();
    return (n || n === 0) && (t = su(t, n)), a && (t = na(t, a)), t;
  },
  ku = (e, n, a, t, o) => {
    if (!t || (o && !n) || (!o && !a)) return !1;
    const i = o ? qt(e, 1) : rn(e, 1),
      r = [Ve(i), Re(i)];
    return o ? !P1(...r, n) : !C1(...r, a);
  },
  C1 = (e, n, a) => ft(...ka(a, e, n)) || We(...ka(a, e, n)),
  P1 = (e, n, a) => _t(...ka(a, e, n)) || We(...ka(a, e, n)),
  Su = (e, n, a, t, o, i, r) => {
    if (typeof n == "function" && !r) return n(e);
    const s = a ? { locale: a } : void 0;
    return Array.isArray(e)
      ? `${Ta(e[0], i, s)}${o && !e[1] ? "" : t}${e[1] ? Ta(e[1], i, s) : ""}`
      : Ta(e, i, s);
  },
  Ga = (e) => {
    if (e) return null;
    throw new Error(mo.prop("partial-range"));
  },
  eo = (e, n) => {
    if (n) return e();
    throw new Error(mo.prop("range"));
  },
  Mr = (e) =>
    Array.isArray(e) ? En(e[0]) && (e[1] ? En(e[1]) : !0) : e ? En(e) : !1,
  I1 = (e, n) =>
    et(n ?? ne(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  Ko = (e, n, a, t) => {
    if (!e) return !0;
    if (t) {
      const o = a === "max" ? Un(e, n) : $n(e, n),
        i = { seconds: 0, milliseconds: 0 };
      return o || Ka(et(e, i), et(n, i));
    }
    return a === "max"
      ? e.getTime() <= n.getTime()
      : e.getTime() >= n.getTime();
  },
  Qo = (e, n, a) => (e ? I1(e, n) : ne(a ?? n)),
  zs = (e, n, a, t, o) => {
    if (Array.isArray(t)) {
      const r = Qo(e, t[0], n),
        s = Qo(e, t[1], n);
      return Ko(t[0], r, a, !!n) && Ko(t[1], s, a, !!n) && o;
    }
    const i = Qo(e, t, n);
    return Ko(t, i, a, !!n) && o;
  },
  Zo = (e) => et(ne(), xa(e)),
  E1 = (e, n) =>
    Array.isArray(e)
      ? e
          .map((a) => ne(a))
          .filter((a) => Re(ne(a)) === n)
          .map((a) => Ve(a))
      : [],
  Tu = (e, n, a) =>
    typeof e == "function"
      ? e({ month: n, year: a })
      : !!e.months.find((t) => t.month === n && t.year === a),
  gi = (e, n) => (typeof e == "function" ? e(n) : e.years.includes(n)),
  kn = ma({ menuFocused: !1, shiftKeyInMenu: !1 }),
  Cu = () => {
    const e = (a) => {
        kn.menuFocused = a;
      },
      n = (a) => {
        kn.shiftKeyInMenu !== a && (kn.shiftKeyInMenu = a);
      };
    return {
      control: u(() => ({
        shiftKeyInMenu: kn.shiftKeyInMenu,
        menuFocused: kn.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: n,
    };
  },
  Je = ma({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  Xo = L(null),
  to = L(!1),
  Jo = L(!1),
  er = L(!1),
  tr = L(!1),
  kt = L(0),
  ht = L(0),
  Ia = () => {
    const e = u(() =>
        to.value
          ? [...Je.selectionGrid, Je.actionRow].filter((m) => m.length)
          : Jo.value
          ? [
              ...Je.timePicker[0],
              ...Je.timePicker[1],
              tr.value ? [] : [Xo.value],
              Je.actionRow,
            ].filter((m) => m.length)
          : er.value
          ? [...Je.monthPicker, Je.actionRow]
          : [Je.monthYear, ...Je.calendar, Je.time, Je.actionRow].filter(
              (m) => m.length
            )
      ),
      n = (m) => {
        kt.value = m ? kt.value + 1 : kt.value - 1;
        let p = null;
        e.value[ht.value] && (p = e.value[ht.value][kt.value]),
          p || (kt.value = m ? kt.value - 1 : kt.value + 1);
      },
      a = (m) => {
        (ht.value === 0 && !m) ||
          (ht.value === e.value.length && m) ||
          ((ht.value = m ? ht.value + 1 : ht.value - 1),
          e.value[ht.value]
            ? e.value[ht.value] &&
              !e.value[ht.value][kt.value] &&
              kt.value !== 0 &&
              (kt.value = e.value[ht.value].length - 1)
            : (ht.value = m ? ht.value - 1 : ht.value + 1));
      },
      t = (m) => {
        let p = null;
        e.value[ht.value] && (p = e.value[ht.value][kt.value]),
          p
            ? p.focus({ preventScroll: !to.value })
            : (kt.value = m ? kt.value - 1 : kt.value + 1);
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
      l = (m, p) => {
        Je[p] = m;
      },
      d = (m, p) => {
        Je[p] = m;
      },
      g = () => {
        (kt.value = 0), (ht.value = 0);
      };
    return {
      buildMatrix: l,
      buildMultiLevelMatrix: d,
      setTimePickerBackRef: (m) => {
        Xo.value = m;
      },
      setSelectionGrid: (m) => {
        (to.value = m), g(), m || (Je.selectionGrid = []);
      },
      setTimePicker: (m, p = !1) => {
        (Jo.value = m),
          (tr.value = p),
          g(),
          m || ((Je.timePicker[0] = []), (Je.timePicker[1] = []));
      },
      setTimePickerElements: (m, p = 0) => {
        Je.timePicker[p] = m;
      },
      arrowRight: o,
      arrowLeft: i,
      arrowUp: r,
      arrowDown: s,
      clearArrowNav: () => {
        (Je.monthYear = []),
          (Je.calendar = []),
          (Je.time = []),
          (Je.actionRow = []),
          (Je.selectionGrid = []),
          (Je.timePicker[0] = []),
          (Je.timePicker[1] = []),
          (to.value = !1),
          (Jo.value = !1),
          (tr.value = !1),
          (er.value = !1),
          g(),
          (Xo.value = null);
      },
      setMonthPicker: (m) => {
        (er.value = m), g();
      },
      refSets: Je,
    };
  },
  Ks = (e) => ({
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
  D1 = (e) => ({
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
  Qs = (e) =>
    e ? (typeof e == "boolean" ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  M1 = (e) => {
    const n = typeof e == "object" && e,
      a = { static: !0, solo: !1 };
    if (!e) return { ...a, count: Qs(!1) };
    const t = n ? e : {},
      o = n ? t.count ?? !0 : e,
      i = Qs(o);
    return Object.assign(a, t, { count: i });
  },
  O1 = (e, n, a) => e || (typeof a == "string" ? a : n),
  L1 = (e) => (typeof e == "boolean" ? (e ? Ks({}) : !1) : Ks(e)),
  B1 = (e) => {
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
  A1 = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  x1 = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  R1 = (e) => {
    const n = { input: !1 };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...n };
  },
  N1 = (e) => ({
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
  H1 = (e, n, a) => {
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
  $1 = (e) =>
    typeof e == "object"
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  dt = (e) => {
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
      t = (w) => wu(w, e.enableSeconds),
      o = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [t(e.startTime[0]), t(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? t(e.startTime)
          : null,
      i = u(() => M1(e.multiCalendars)),
      r = u(() => o()),
      s = u(() => D1(e.ariaLabels)),
      l = u(() => A1(e.filters)),
      d = u(() => L1(e.transitions)),
      g = u(() => x1(e.actionRow)),
      m = u(() => O1(e.previewFormat, e.format, a())),
      p = u(() => B1(e.textInput)),
      f = u(() => R1(e.inline)),
      b = u(() => N1(e.config)),
      S = u(() =>
        H1(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      T = u(() => $1(e.weekNumbers));
    return {
      defaultedTransitions: d,
      defaultedMultiCalendars: i,
      defaultedStartTime: r,
      defaultedAriaLabels: s,
      defaultedFilters: l,
      defaultedActionRow: g,
      defaultedPreviewFormat: m,
      defaultedTextInput: p,
      defaultedInline: f,
      defaultedConfig: b,
      defaultedHighlight: S,
      defaultedWeekNumbers: T,
      getDefaultPattern: a,
      getDefaultStartTime: o,
    };
  },
  U1 = (e, n, a) => {
    const t = L(),
      { defaultedTextInput: o, getDefaultPattern: i } = dt(n),
      r = L(""),
      s = Ln(n, "format");
    Ne(t, () => {
      e("internal-model-change", t.value);
    }),
      Ne(s, () => {
        V();
      });
    const l = (v) => bu(v, n.timezone),
      d = (v) => jt(v, n.timezone),
      g = (v, F, q = !1) =>
        Su(
          v,
          n.format,
          n.formatLocale,
          o.value.rangeSeparator,
          n.modelAuto,
          F ?? i(),
          q
        ),
      m = (v) =>
        v
          ? n.modelType
            ? Y(v)
            : {
                hours: Gt(v),
                minutes: oa(v),
                seconds: n.enableSeconds ? on(v) : 0,
              }
          : null,
      p = (v) => (n.modelType ? Y(v) : { month: Ve(v), year: Re(v) }),
      f = (v) =>
        Array.isArray(v)
          ? n.multiDates
            ? v.map((F) => b(F, na(ne(), F)))
            : eo(
                () => [
                  na(ne(), v[0]),
                  v[1] ? na(ne(), v[1]) : Ga(n.partialRange),
                ],
                n.range
              )
          : na(ne(), +v),
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
            ? v.map((F) => b(F, da(null, +F.month, +F.year)))
            : eo(
                () => [
                  b(v[0], da(null, +v[0].month, +v[0].year)),
                  b(
                    v[1],
                    v[1]
                      ? da(null, +v[1].month, +v[1].year)
                      : Ga(n.partialRange)
                  ),
                ],
                n.range
              )
          : b(v, da(null, +v.month, +v.year)),
      w = (v) => {
        if (Array.isArray(v)) return v.map((F) => E(F));
        throw new Error(mo.dateArr("multi-dates"));
      },
      y = (v) => {
        if (Array.isArray(v)) return [ne(v[0]), ne(v[1])];
        throw new Error(mo.dateArr("week-picker"));
      },
      D = (v) =>
        n.modelAuto
          ? Array.isArray(v)
            ? [E(v[0]), E(v[1])]
            : n.autoApply
            ? [E(v)]
            : [E(v), null]
          : Array.isArray(v)
          ? eo(() => [E(v[0]), v[1] ? E(v[1]) : Ga(n.partialRange)], n.range)
          : E(v),
      C = () => {
        Array.isArray(t.value) &&
          n.range &&
          t.value.length === 1 &&
          t.value.push(Ga(n.partialRange));
      },
      M = () => {
        const v = t.value;
        return [Y(v[0]), v[1] ? Y(v[1]) : Ga(n.partialRange)];
      },
      R = () => (t.value[1] ? M() : Y(pt(t.value[0]))),
      N = () => (t.value || []).map((v) => Y(v)),
      Q = () => (
        C(),
        n.modelAuto
          ? R()
          : n.multiDates
          ? N()
          : Array.isArray(t.value)
          ? eo(() => M(), n.range)
          : Y(pt(t.value))
      ),
      G = (v) =>
        !v || (Array.isArray(v) && !v.length)
          ? null
          : n.timePicker
          ? S(pt(v))
          : n.monthPicker
          ? T(pt(v))
          : n.yearPicker
          ? f(pt(v))
          : n.multiDates
          ? w(pt(v))
          : n.weekPicker
          ? y(pt(v))
          : D(pt(v)),
      P = (v) => {
        const F = G(v);
        Mr(pt(F))
          ? ((t.value = pt(F)), V())
          : ((t.value = null), (r.value = ""));
      },
      B = () => {
        const v = (F) => Ta(F, o.value.format);
        return `${v(t.value[0])} ${o.value.rangeSeparator} ${
          t.value[1] ? v(t.value[1]) : ""
        }`;
      },
      $ = () =>
        a.value && t.value
          ? Array.isArray(t.value)
            ? B()
            : Ta(t.value, o.value.format)
          : g(t.value),
      K = () =>
        t.value
          ? n.multiDates
            ? t.value.map((v) => g(v)).join("; ")
            : o.value.enabled && typeof o.value.format == "string"
            ? $()
            : g(t.value)
          : "",
      V = () => {
        !n.format ||
        typeof n.format == "string" ||
        (o.value.enabled && typeof o.value.format == "string")
          ? (r.value = K())
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
            ? d(new Date(v))
            : n.modelType === "format" &&
              (typeof n.format == "string" || !n.format)
            ? Sr(v, i(), new Date())
            : d(Sr(v, n.modelType, new Date()))
          : d(new Date(v));
      },
      Y = (v) =>
        v
          ? n.utc
            ? k1(v, n.utc === "preserve", n.enableSeconds)
            : n.modelType
            ? n.modelType === "timestamp"
              ? +l(v)
              : n.modelType === "format" &&
                (typeof n.format == "string" || !n.format)
              ? g(l(v))
              : g(l(v), n.modelType, !0)
            : l(v)
          : "",
      U = (v, F = !1) => {
        if ((e("update:model-value", v), n.emitTimezone && F)) {
          const q = Array.isArray(v)
            ? v.map((te) => jt(pt(te)), n.emitTimezone)
            : jt(pt(v), n.emitTimezone);
          e("update:model-timezone-value", q);
        }
      },
      j = (v) =>
        Array.isArray(t.value)
          ? n.multiDates
            ? t.value.map((F) => v(F))
            : [v(t.value[0]), t.value[1] ? v(t.value[1]) : Ga(n.partialRange)]
          : v(pt(t.value)),
      k = (v) => U(pt(j(v)));
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
          ? k(m)
          : n.yearPicker
          ? k(Re)
          : n.weekPicker
          ? U(
              t.value.map((v) => Y(v)),
              !0
            )
          : U(Q(), !0)
      ),
    };
  },
  V1 = (e, n) => {
    const { defaultedFilters: a } = dt(e),
      { validateMonthYearInRange: t } = Ya(e),
      o = (d, g) => {
        let m = d;
        return a.value.months.includes(Ve(m))
          ? ((m = g ? qt(d, 1) : rn(d, 1)), o(m, g))
          : m;
      },
      i = (d, g) => {
        let m = d;
        return a.value.years.includes(Re(m))
          ? ((m = g ? Qr(d, 1) : cu(d, 1)), i(m, g))
          : m;
      },
      r = (d, g = !1) => {
        const m = et(new Date(), { month: e.month, year: e.year });
        let p = d ? qt(m, 1) : rn(m, 1);
        e.disableYearSelect && (p = na(p, e.year));
        let f = Ve(p),
          b = Re(p);
        a.value.months.includes(f) && ((p = o(p, d)), (f = Ve(p)), (b = Re(p))),
          a.value.years.includes(b) && ((p = i(p, d)), (b = Re(p))),
          t(f, b, d, e.preventMinMaxNavigation) && s(f, b, g);
      },
      s = (d, g, m) => {
        n("update-month-year", { month: d, year: g, fromNav: m });
      },
      l = u(
        () => (d) =>
          ku(
            et(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            d
          )
      );
    return { handleMonthYearChange: r, isDisabled: l, updateMonthYear: s };
  };
var ja = ((e) => (
    (e.center = "center"), (e.left = "left"), (e.right = "right"), e
  ))(ja || {}),
  Vt = ((e) => ((e.month = "month"), (e.year = "year"), e))(Vt || {}),
  Oa = ((e) => ((e.top = "top"), (e.bottom = "bottom"), e))(Oa || {}),
  Ra = ((e) => (
    (e.header = "header"),
    (e.calendar = "calendar"),
    (e.timePicker = "timePicker"),
    e
  ))(Ra || {}),
  Xt = ((e) => (
    (e.month = "month"),
    (e.year = "year"),
    (e.calendar = "calendar"),
    (e.time = "time"),
    (e.minutes = "minutes"),
    (e.hours = "hours"),
    (e.seconds = "seconds"),
    e
  ))(Xt || {});
const Y1 = ({
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
      d = L(!1),
      g = L({ top: "0", left: "0" }),
      m = L(!1),
      p = Ln(r, "teleportCenter");
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
        r.position === ja.left && S(E),
          r.position === ja.right && b(E, Y),
          r.position === ja.center &&
            (g.value.left = `${E + Y / 2 - l.value.width / 2}px`);
      },
      w = (E) => {
        const { width: Y, height: U } = E.getBoundingClientRect(),
          { top: j, left: k } = r.altPosition ? r.altPosition(E) : f(E);
        return { top: +j, left: +k, width: Y, height: U };
      },
      y = () => {
        (g.value.left = "50%"),
          (g.value.top = "50%"),
          (g.value.transform = "translate(-50%, -50%)"),
          (g.value.position = "fixed"),
          delete g.value.opacity;
      },
      D = () => {
        const E = gt(a),
          { top: Y, left: U, transform: j } = r.altPosition(E);
        g.value = { top: `${Y}px`, left: `${U}px`, transform: j ?? "" };
      },
      C = (E = !0) => {
        var Y;
        if (!o.value.enabled) {
          if (p.value) return y();
          if (r.altPosition !== null) return D();
          if (E) {
            const U = r.teleport
              ? (Y = n.value) == null
                ? void 0
                : Y.$el
              : e.value;
            U && (l.value = U.getBoundingClientRect()),
              i("recalculate-position");
          }
          return B();
        }
      },
      M = ({ inputEl: E, left: Y, width: U }) => {
        window.screen.width > 768 && !d.value && T(Y, U), Q(E);
      },
      R = (E) => {
        const { top: Y, left: U, height: j, width: k } = w(E);
        (g.value.top = `${j + Y + +r.offset}px`),
          (m.value = !1),
          d.value || (g.value.left = `${U + k / 2 - l.value.width / 2}px`),
          M({ inputEl: E, left: U, width: k });
      },
      N = (E) => {
        const { top: Y, left: U, width: j } = w(E);
        (g.value.top = `${Y - +r.offset - l.value.height}px`),
          (m.value = !0),
          M({ inputEl: E, left: U, width: j });
      },
      Q = (E) => {
        if (r.autoPosition) {
          const { left: Y, width: U } = w(E),
            { left: j, right: k } = l.value;
          if (!d.value) {
            if (Math.abs(j) !== Math.abs(k)) {
              if (j <= 0) return (d.value = !0), S(Y);
              if (k >= document.documentElement.clientWidth)
                return (d.value = !0), b(Y, U);
            }
            return T(Y, U);
          }
        }
      },
      G = () => {
        const E = gt(a);
        if (E) {
          const { height: Y } = l.value,
            { top: U, height: j } = E.getBoundingClientRect(),
            k = window.innerHeight - U - j,
            v = U;
          return Y <= k
            ? Oa.bottom
            : Y > k && Y <= v
            ? Oa.top
            : k >= v
            ? Oa.bottom
            : Oa.top;
        }
        return Oa.bottom;
      },
      P = (E) => (G() === Oa.bottom ? R(E) : N(E)),
      B = () => {
        const E = gt(a);
        if (E) return r.autoPosition ? P(E) : R(E);
      },
      $ = function (E) {
        if (E) {
          const Y = E.scrollHeight > E.clientHeight,
            U = window.getComputedStyle(E).overflowY.indexOf("hidden") !== -1;
          return Y && !U;
        }
        return !0;
      },
      K = function (E) {
        return !E ||
          E === document.body ||
          E.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : $(E)
          ? E
          : K(E.parentNode);
      },
      V = (E) => {
        if (E)
          switch (r.position) {
            case ja.left:
              return { left: 0, transform: "translateX(0)" };
            case ja.right:
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
      openOnTop: m,
      menuStyle: g,
      xCorrect: d,
      setMenuPosition: C,
      getScrollableParent: K,
      shadowRender: (E, Y) => {
        var U, j, k;
        const v = document.createElement("div"),
          F = (U = gt(a)) == null ? void 0 : U.getBoundingClientRect();
        v.setAttribute("id", "dp--temp-container");
        const q =
          (j = t.value) != null && j.clientWidth ? t.value : document.body;
        q.append(v);
        const te = V(F),
          Z = Wu(
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
        Si(Z, v),
          (l.value = (k = Z.el) == null ? void 0 : k.getBoundingClientRect()),
          Si(null, v),
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
  F1 = [
    { name: "trigger" },
    { name: "input-icon" },
    { name: "clear-icon" },
    { name: "dp-input" },
  ],
  W1 = {
    all: () => wa,
    monthYear: () => wa.filter((e) => e.use.includes("month-year")),
    input: () => F1,
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
      W1[n]().forEach((o) => {
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
  qn = (e) => {
    const n = u(() => (t) => e.value ? (t ? e.value.open : e.value.close) : ""),
      a = u(
        () => (t) =>
          e.value ? (t ? e.value.menuAppearTop : e.value.menuAppearBottom) : ""
      );
    return { transitionName: n, showTransition: !!e.value, menuTransition: a };
  },
  Gn = (e, n) => {
    const a = ne(jt(new Date(), e.timezone)),
      t = L([{ month: Ve(a), year: Re(a) }]),
      o = ma({
        hours: e.range ? [Gt(a), Gt(a)] : Gt(a),
        minutes: e.range ? [oa(a), oa(a)] : oa(a),
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
  q1 = (e, n) => {
    const { defaultedMultiCalendars: a, defaultedHighlight: t } = dt(n),
      { isDisabled: o, matchDate: i } = Ya(n),
      r = L(null),
      s = L(ne(jt(new Date(), n.timezone))),
      l = (k) => {
        (!k.current && n.hideOffsetDates) || (r.value = k.value);
      },
      d = () => {
        r.value = null;
      },
      g = (k) =>
        Array.isArray(e.value) && n.range && e.value[0] && r.value
          ? k
            ? _t(r.value, e.value[0])
            : ft(r.value, e.value[0])
          : !0,
      m = (k, v) => {
        const F = () =>
            e.value ? (v ? e.value[0] || null : e.value[1]) : null,
          q = e.value && Array.isArray(e.value) ? F() : null;
        return We(ne(k.value), q);
      },
      p = (k) => {
        const v = Array.isArray(e.value) ? e.value[0] : null;
        return k ? !ft(r.value ?? null, v) : !0;
      },
      f = (k, v = !0) =>
        (n.range || n.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? n.hideOffsetDates && !k.current
            ? !1
            : We(ne(k.value), e.value[v ? 0 : 1])
          : n.range
          ? (m(k, v) && p(v)) ||
            (We(k.value, Array.isArray(e.value) ? e.value[0] : null) && g(v))
          : !1,
      b = (k, v, F) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? k
            ? !1
            : F
            ? _t(e.value[0], v.value)
            : ft(e.value[0], v.value)
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
            const v = ca(r.value, +n.autoRange),
              F = ao(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(F[1], ne(k.value)) : We(v, ne(k.value));
          }
          return !1;
        }
        return !1;
      },
      w = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            const v = ca(r.value, +n.autoRange);
            if (n.hideOffsetDates && !k.current) return !1;
            const F = ao(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker
              ? _t(k.value, F[0]) && ft(k.value, F[1])
              : _t(k.value, r.value) && ft(k.value, v);
          }
          return !1;
        }
        return !1;
      },
      y = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const v = ao(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(v[0], k.value) : We(r.value, k.value);
          }
          return !1;
        }
        return !1;
      },
      D = (k) => bo(e.value, r.value, k.value),
      C = () =>
        n.modelAuto && Array.isArray(n.internalModelValue)
          ? !!n.internalModelValue[0]
          : !1,
      M = () => (n.modelAuto ? hu(n.internalModelValue) : !0),
      R = (k) => {
        if ((Array.isArray(e.value) && e.value.length) || n.weekPicker)
          return !1;
        const v = n.range ? !f(k) && !f(k, !1) : !0;
        return !o(k.value) && !S(k) && !(!k.current && n.hideOffsetDates) && v;
      },
      N = (k) => (n.range ? (n.modelAuto ? C() && S(k) : !1) : S(k)),
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
      $ = (k) => {
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
            !N(k) &&
            !q &&
            !y(k) &&
            !(B(k) && n.weekPicker) &&
            !F,
          dp__cell_highlight_active: !G(k) && (Q(k) || P(k)) && N(k),
          dp__today: !n.noToday && We(k.value, s.value) && k.current,
        };
      },
      K = (k) => ({ dp__active_date: N(k), dp__date_hover: R(k) }),
      V = (k) => ({
        ...Y(k),
        ...U(k),
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
          dp__date_hover_start: b(R(k), k, !0),
          dp__date_hover_end: b(R(k), k, !1),
        };
      },
      U = (k) => ({
        ...Y(k),
        dp__cell_auto_range: w(k),
        dp__cell_auto_range_start: y(k),
        dp__cell_auto_range_end: T(k),
      }),
      j = (k) =>
        n.range
          ? n.autoRange
            ? U(k)
            : n.modelAuto
            ? { ...K(k), ...Y(k) }
            : Y(k)
          : n.weekPicker
          ? V(k)
          : K(k);
    return {
      setHoverDate: l,
      clearHoverDate: d,
      getDayClassData: (k) =>
        n.hideOffsetDates && !k.current
          ? {}
          : {
              ...$(k),
              ...j(k),
              [n.dayClass ? n.dayClass(k.value) : ""]: !0,
              [n.calendarCellClassName]: !!n.calendarCellClassName,
            },
    };
  },
  Ya = (e) => {
    const { defaultedFilters: n, defaultedHighlight: a } = dt(e),
      t = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return "UTC";
      },
      o = (P) => {
        const B = wt(i(ne(P))).toISOString(),
          [$] = B.split("T");
        return $;
      },
      i = (P) => (e.utc === "preserve" ? bu(P, t()) : jt(P, t())),
      r = (P) => {
        var B;
        const $ = e.maxDate ? _t(P, i(ne(e.maxDate))) : !1,
          K = e.minDate ? ft(P, i(ne(e.minDate))) : !1,
          V = g(
            i(P),
            (B = e.arrMapValues) != null && B.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          E = n.value.months.map((v) => +v).includes(Ve(P)),
          Y = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((v) => +v === f0(P))
            : !1,
          U = p(P),
          j = Re(P),
          k = j < +e.yearRange[0] || j > +e.yearRange[1];
        return !($ || K || V || E || k || Y || U);
      },
      s = (P, B) => ft(...ka(e.minDate, P, B)) || We(...ka(e.minDate, P, B)),
      l = (P, B) => _t(...ka(e.maxDate, P, B)) || We(...ka(e.maxDate, P, B)),
      d = (P, B, $) => {
        let K = !1;
        return (
          e.maxDate && $ && l(P, B) && (K = !0),
          e.minDate && !$ && s(P, B) && (K = !0),
          K
        );
      },
      g = (P, B) =>
        P
          ? B instanceof Map
            ? !!B.get(o(P))
            : Array.isArray(B)
            ? B.some(($) => We(i(ne($)), P))
            : B
            ? B(ne(JSON.parse(JSON.stringify(P))))
            : !1
          : !0,
      m = (P, B, $, K) => {
        let V = !1;
        return (
          K
            ? e.minDate && e.maxDate
              ? (V = d(P, B, $))
              : ((e.minDate && s(P, B)) || (e.maxDate && l(P, B))) && (V = !0)
            : (V = !0),
          V
        );
      },
      p = (P) => {
        var B, $, K, V, E;
        return Array.isArray(e.allowedDates) &&
          !((B = e.allowedDates) != null && B.length)
          ? !0
          : ($ = e.arrMapValues) != null && $.allowedDates
          ? !g(P, (K = e.arrMapValues) == null ? void 0 : K.allowedDates)
          : (V = e.allowedDates) != null && V.length
          ? !(
              (E = e.allowedDates) != null && E.some((Y) => We(wt(Y), i(wt(P))))
            )
          : !1;
      },
      f = (P) => !r(P),
      b = (P) =>
        e.noDisabledRange
          ? !ql({ start: P[0], end: P[1] }).some((B) => f(B))
          : !0,
      S = (P, B, $ = 0) => {
        if (Array.isArray(B) && B[$]) {
          const K = v_(P, B[$]),
            V = _u(B[$], P),
            E = V.length === 1 ? 0 : V.filter((U) => f(U)).length,
            Y = Math.abs(K) - E;
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
          ? [P[0] ? Zo(P[0]) : null, P[1] ? Zo(P[1]) : null]
          : Zo(P),
      M = (P, B, $) =>
        P.find((K) =>
          +K.hours === Gt(B) && K.minutes === "*"
            ? !0
            : +K.minutes === oa(B) && +K.hours === Gt(B)
        ) && $,
      R = (P, B, $) => {
        const [K, V] = P,
          [E, Y] = B;
        return !M(K, E, $) && !M(V, Y, $) && $;
      },
      N = (P, B) => {
        const $ = Array.isArray(B) ? B : [B];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? R(e.disabledTimes, $, P)
            : !$.some((K) => M(e.disabledTimes, K, P))
          : P;
      },
      Q = (P, B) => {
        const $ = Array.isArray(B)
            ? [xa(B[0]), B[1] ? xa(B[1]) : void 0]
            : xa(B),
          K = !e.disabledTimes($);
        return P && K;
      },
      G = (P, B) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? N(B, P)
            : Q(B, P)
          : B;
    return {
      isDisabled: f,
      validateDate: r,
      validateMonthYearInRange: m,
      isDateRangeAllowed: b,
      checkMinMaxRange: S,
      matchDate: g,
      mapDatesArrToMap: y,
      isValidTime: (P) => {
        let B = !0;
        if (!P || D()) return !0;
        const $ = !e.minDate && !e.maxDate ? C(P) : P;
        return (
          (e.maxTime || e.maxDate) &&
            (B = zs(e.maxTime, e.maxDate, "max", pt($), B)),
          (e.minTime || e.minDate) &&
            (B = zs(e.minTime, e.minDate, "min", pt($), B)),
          G(P, B)
        );
      },
    };
  },
  _o = () => {
    const e = u(() => (t, o) => t?.includes(o)),
      n = u(() => (t, o) => t.count ? (t.solo ? !0 : o === 0) : !0),
      a = u(() => (t, o) => t.count ? (t.solo ? !0 : o === t.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
  },
  G1 = (e, n, a) => {
    const t = L(0),
      o = ma({
        [Ra.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Ra.calendar]: !1,
        [Ra.header]: !1,
      }),
      i = u(() => e.monthPicker),
      r = (m) => {
        var p;
        if ((p = e.flow) != null && p.length) {
          if (!m && i.value) return g();
          (o[m] = !0), Object.keys(o).filter((f) => !o[f]).length || g();
        }
      },
      s = () => {
        var m;
        (m = e.flow) != null &&
          m.length &&
          t.value !== -1 &&
          ((t.value += 1), n("flow-step", t.value), g());
      },
      l = () => {
        t.value = -1;
      },
      d = (m, p, ...f) => {
        e.flow[t.value] === m && a.value && a.value[p](...f);
      },
      g = () => {
        d(Xt.month, "toggleMonthPicker", !0),
          d(Xt.year, "toggleYearPicker", !0),
          d(Xt.calendar, "toggleTimePicker", !1, !0),
          d(Xt.time, "toggleTimePicker", !0, !0);
        const m = e.flow[t.value];
        (m === Xt.hours || m === Xt.minutes || m === Xt.seconds) &&
          d(m, "toggleTimePicker", !0, !0, m);
      };
    return { childMount: r, updateFlowStep: s, resetFlow: l, flowStep: t };
  },
  wo = {
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
    ...wo,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  j1 = { key: 1, class: "dp__input_wrap" },
  z1 = [
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
  K1 = { key: 2, class: "dp__clear_icon" },
  Q1 = ie({
    compatConfig: { MODE: 3 },
    __name: "DatepickerInput",
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" },
      ...wo,
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
          getDefaultPattern: d,
          getDefaultStartTime: g,
        } = dt(o),
        { checkMinMaxRange: m } = Ya(o),
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
          return w1(
            V,
            i.value.format ?? d(),
            E ?? wu({}, o.enableSeconds),
            o.inputValue,
            S.value
          );
        },
        D = (V) => {
          const { rangeSeparator: E } = i.value,
            [Y, U] = V.split(`${E}`);
          if (Y) {
            const j = y(Y.trim()),
              k = U ? y(U.trim()) : null,
              v = j && k ? [j, k] : [j];
            m(k, v, 0) && (p.value = j ? v : null);
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
        R = (V) => {
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
        N = (V) => {
          i.value.enabled
            ? (M(V.target.value),
              i.value.enterSubmit && Mr(p.value) && o.inputValue !== ""
                ? (t("set-input-date", p.value, !0), (p.value = null))
                : i.value.enterSubmit &&
                  o.inputValue === "" &&
                  ((p.value = null), t("clear")))
            : P(V);
        },
        Q = (V) => {
          i.value.enabled && i.value.tabSubmit && M(V.target.value),
            i.value.tabSubmit && Mr(p.value) && o.inputValue !== ""
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
        $ = (V) => {
          Ca(V, l.value, !0), t("clear");
        },
        K = (V) => {
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
                  h("div", j1, [
                    V.$slots["dp-input"] && !V.$slots.trigger && !A(s).enabled
                      ? ee(V.$slots, "dp-input", {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: R,
                          onEnter: N,
                          onTab: Q,
                          onClear: $,
                          onBlur: B,
                          onKeypress: K,
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
                            class: X(T.value),
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
                            onInput: R,
                            onKeydown: [Oe(N, ["enter"]), Oe(Q, ["tab"]), K],
                            onBlur: B,
                            onFocus: G,
                            onKeypress: K,
                            onPaste: C,
                          },
                          null,
                          42,
                          z1
                        )),
                    I("div", { onClick: E[2] || (E[2] = (U) => t("toggle")) }, [
                      V.$slots["input-icon"] && !V.hideInputIcon
                        ? (c(),
                          h(
                            "span",
                            {
                              key: 0,
                              class: "dp__input_icon",
                              onClick: E[0] || (E[0] = (U) => t("toggle")),
                            },
                            [ee(V.$slots, "input-icon")]
                          ))
                        : O("", !0),
                      !V.$slots["input-icon"] &&
                      !V.hideInputIcon &&
                      !V.$slots["dp-input"]
                        ? (c(),
                          W(A(mn), {
                            key: 1,
                            class: "dp__input_icon dp__input_icons",
                            onClick: E[1] || (E[1] = (U) => t("toggle")),
                          }))
                        : O("", !0),
                    ]),
                    V.$slots["clear-icon"] &&
                    e.inputValue &&
                    V.clearable &&
                    !V.disabled &&
                    !V.readonly
                      ? (c(),
                        h("span", K1, [
                          ee(V.$slots, "clear-icon", { clear: $ }),
                        ]))
                      : O("", !0),
                    V.clearable &&
                    !V.$slots["clear-icon"] &&
                    e.inputValue &&
                    !V.disabled &&
                    !V.readonly
                      ? (c(),
                        W(A(du), {
                          key: 3,
                          class: "dp__clear_icon dp__input_icons",
                          onClick:
                            E[3] || (E[3] = Ie((U) => $(U), ["prevent"])),
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
  Z1 = ["title"],
  X1 = { class: "dp__action_buttons" },
  J1 = ["disabled"],
  ek = ie({
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
          getDefaultPattern: d,
        } = dt(t),
        { isValidTime: g } = Ya(t),
        { buildMatrix: m } = Ia(),
        p = L(null),
        f = L(null);
      De(() => {
        t.arrowNavigation && m([gt(p), gt(f)], "actionRow");
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
          return t.timePicker || t.monthPicker, P(pt(t.internalModelValue));
        },
        D = () => {
          const P = t.internalModelValue;
          return r.value.count > 0
            ? `${C(P[0])} - ${C(P[1])}`
            : [C(P[0]), C(P[1])];
        },
        C = (P) =>
          Su(
            P,
            i.value,
            t.formatLocale,
            s.value.rangeSeparator,
            t.modelAuto,
            d()
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
        R = () => (t.multiDates ? "; " : " - "),
        N = u(() => (Array.isArray(M.value) ? M.value.join(R()) : M.value)),
        Q = (P) => {
          if (!t.monthPicker) return !0;
          let B = !0;
          const $ = ne(Ft(P));
          if (t.minDate && t.maxDate) {
            const K = ne(Ft(t.minDate)),
              V = ne(Ft(t.maxDate));
            return (_t($, K) && ft($, V)) || We($, K) || We($, V);
          }
          if (t.minDate) {
            const K = ne(Ft(t.minDate));
            B = _t($, K) || We($, K);
          }
          if (t.maxDate) {
            const K = ne(Ft(t.maxDate));
            B = ft($, K) || We($, K);
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
                  tt(
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
                  ge,
                  { key: 1 },
                  [
                    A(o).showPreview
                      ? (c(),
                        h(
                          "div",
                          {
                            key: 0,
                            class: "dp__selection_preview",
                            title: N.value,
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
                                h(ge, { key: 1 }, [Ae(J(N.value), 1)], 64)),
                          ],
                          8,
                          Z1
                        ))
                      : O("", !0),
                    I("div", X1, [
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
                            ge,
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
                                        (B[0] = ($) => P.$emit("close-picker")),
                                      onKeydown: [
                                        B[1] ||
                                          (B[1] = Oe(
                                            ($) => P.$emit("close-picker"),
                                            ["enter"]
                                          )),
                                        B[2] ||
                                          (B[2] = Oe(
                                            ($) => P.$emit("close-picker"),
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
                                        (B[3] = ($) => P.$emit("select-now")),
                                      onKeydown: [
                                        B[4] ||
                                          (B[4] = Oe(
                                            ($) => P.$emit("select-now"),
                                            ["enter"]
                                          )),
                                        B[5] ||
                                          (B[5] = Oe(
                                            ($) => P.$emit("select-now"),
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
                                    J1
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
  tk = ["onKeydown"],
  ak = { class: "dp__selection_grid_header" },
  nk = [
    "aria-selected",
    "aria-disabled",
    "onClick",
    "onKeydown",
    "onMouseover",
  ],
  ok = ["aria-label"],
  jn = ie({
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
          defaultedTextInput: d,
          defaultedConfig: g,
        } = dt(s),
        { hideNavigationButtons: m } = _o(),
        p = L(!1),
        f = L(null),
        b = L(null),
        S = L([]),
        T = L(),
        w = L(null),
        y = L(0),
        D = L(null);
      qu(() => {
        f.value = null;
      }),
        De(() => {
          Pt().then(() => B()), s.noOverlayFocus || M(), C(!0);
        }),
        Yn(() => C(!1));
      const C = (k) => {
          var v;
          s.arrowNavigation &&
            ((v = s.headerRefs) != null && v.length ? i(k) : t(k));
        },
        M = () => {
          var k;
          const v = gt(b);
          v &&
            (d.value.enabled ||
              (f.value
                ? (k = f.value) == null || k.focus({ preventScroll: !0 })
                : v.focus({ preventScroll: !0 })),
            (p.value = v.clientHeight < v.scrollHeight));
        },
        R = u(() => ({
          dp__overlay: !0,
          "dp--overlay-absolute": !s.useRelative,
          "dp--overlay-relative": s.useRelative,
        })),
        N = u(() =>
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
          Pt().then(() => {
            const k = gt(f),
              v = gt(b),
              F = gt(w),
              q = gt(D),
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
        $ = (k) => {
          k.disabled || r("selected", k.value);
        },
        K = () => {
          r("toggle"), r("reset-flow");
        },
        V = () => {
          s.escClose && K();
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
            pt(F),
            (v = s.headerRefs) != null && v.length
              ? "monthPicker"
              : "selectionGrid"
          );
        },
        U = (k) => {
          s.arrowNavigation || Ca(k, g.value, !0);
        },
        j = (k) => {
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
                class: X(R.value),
                style: xe(N.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [
                  Oe(Ie(V, ["prevent"]), ["esc"]),
                  v[0] ||
                    (v[0] = Oe(
                      Ie((q) => U(q), ["prevent"]),
                      ["left"]
                    )),
                  v[1] ||
                    (v[1] = Oe(
                      Ie((q) => U(q), ["prevent"]),
                      ["up"]
                    )),
                  v[2] ||
                    (v[2] = Oe(
                      Ie((q) => U(q), ["prevent"]),
                      ["down"]
                    )),
                  v[3] ||
                    (v[3] = Oe(
                      Ie((q) => U(q), ["prevent"]),
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
                    class: X(P.value),
                    role: "grid",
                    style: xe({ height: `${y.value}px` }),
                  },
                  [
                    I("div", ak, [ee(k.$slots, "header")]),
                    k.$slots.overlay
                      ? ee(k.$slots, "overlay", { key: 0 })
                      : (c(!0),
                        h(
                          ge,
                          { key: 1 },
                          ke(
                            k.items,
                            (q, te) => (
                              c(),
                              h(
                                "div",
                                {
                                  key: te,
                                  class: X([
                                    "dp__overlay_row",
                                    { dp__flex_row: k.items.length >= 3 },
                                  ]),
                                  role: "row",
                                },
                                [
                                  (c(!0),
                                  h(
                                    ge,
                                    null,
                                    ke(
                                      q,
                                      (Z, x) => (
                                        c(),
                                        h(
                                          "div",
                                          {
                                            key: Z.value,
                                            ref_for: !0,
                                            ref: (_) => E(_, Z, te, x),
                                            role: "gridcell",
                                            class: X(Q.value),
                                            "aria-selected": Z.active,
                                            "aria-disabled":
                                              Z.disabled || void 0,
                                            tabindex: "0",
                                            onClick: (_) => $(Z),
                                            onKeydown: [
                                              Oe(
                                                Ie((_) => $(Z), ["prevent"]),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie((_) => $(Z), ["prevent"]),
                                                ["space"]
                                              ),
                                            ],
                                            onMouseover: (_) => j(Z.value),
                                          },
                                          [
                                            I(
                                              "div",
                                              { class: X(Z.className) },
                                              [
                                                k.$slots.item
                                                  ? ee(k.$slots, "item", {
                                                      key: 0,
                                                      item: Z,
                                                    })
                                                  : O("", !0),
                                                k.$slots.item
                                                  ? O("", !0)
                                                  : (c(),
                                                    h(
                                                      ge,
                                                      { key: 1 },
                                                      [Ae(J(Z.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          nk
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
                  ? ce(
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
                          class: X(G.value),
                          tabindex: "0",
                          onClick: K,
                          onKeydown: [Oe(K, ["enter"]), Oe(K, ["tab"])],
                        },
                        [ee(k.$slots, "button-icon")],
                        42,
                        ok
                      )),
                      [[Wt, !A(m)(k.hideNavigation, k.type)]]
                    )
                  : O("", !0),
              ],
              46,
              tk
            )
          );
        }
      );
    },
  }),
  ko = ie({
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
            class: X({
              dp__menu_inner: !o.stretch,
              "dp--menu--inner-stretched": o.stretch,
              dp__flex_display: o.multiCalendars > 0,
            }),
          },
          [
            (c(!0),
            h(
              ge,
              null,
              ke(
                a.value,
                (r, s) => (
                  c(),
                  h(
                    "div",
                    { key: r, class: X(t.value) },
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
  rk = ["aria-label", "aria-disabled"],
  Dn = ie({
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
                  class: X([
                    "dp__inner_nav",
                    { dp__inner_nav_disabled: o.disabled },
                  ]),
                },
                [ee(o.$slots, "default")],
                2
              ),
            ],
            40,
            rk
          )
        )
      );
    },
  }),
  ik = { class: "dp--year-mode-picker" },
  sk = ["aria-label"],
  Pu = ie({
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
        { showRightIcon: o, showLeftIcon: i } = _o(),
        {
          defaultedConfig: r,
          defaultedMultiCalendars: s,
          defaultedAriaLabels: l,
          defaultedTransitions: d,
        } = dt(t),
        { showTransition: g, transitionName: m } = qn(d),
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
          h("div", ik, [
            A(i)(A(s), e.instance)
              ? (c(),
                W(
                  Dn,
                  {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (w = A(l)) == null ? void 0 : w.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: T[0] || (T[0] = (C) => b(!1)),
                  },
                  {
                    default: ve(() => [
                      S.$slots["arrow-left"]
                        ? ee(S.$slots, "arrow-left", { key: 0 })
                        : O("", !0),
                      S.$slots["arrow-left"]
                        ? O("", !0)
                        : (c(), W(A(oi), { key: 1 })),
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
                  : (c(), h(ge, { key: 1 }, [Ae(J(e.year), 1)], 64)),
              ],
              40,
              sk
            ),
            A(o)(A(s), e.instance)
              ? (c(),
                W(
                  Dn,
                  {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (D = A(l)) == null ? void 0 : D.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: T[3] || (T[3] = (C) => b(!0)),
                  },
                  {
                    default: ve(() => [
                      S.$slots["arrow-right"]
                        ? ee(S.$slots, "arrow-right", { key: 0 })
                        : O("", !0),
                      S.$slots["arrow-right"]
                        ? O("", !0)
                        : (c(), W(A(ri), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : O("", !0),
            Ee(
              Et,
              { name: A(m)(e.showYearPicker), css: A(g) },
              {
                default: ve(() => [
                  e.showYearPicker
                    ? (c(),
                      W(
                        jn,
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
                        Tt(
                          {
                            "button-icon": ve(() => [
                              S.$slots["calendar-icon"]
                                ? ee(S.$slots, "calendar-icon", { key: 0 })
                                : O("", !0),
                              S.$slots["calendar-icon"]
                                ? O("", !0)
                                : (c(), W(A(mn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            S.$slots["year-overlay-value"]
                              ? {
                                  name: "item",
                                  fn: ve(({ item: C }) => [
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
  pi = (e, n, a) => {
    if (n.value && Array.isArray(n.value))
      if (n.value.some((t) => We(e, t))) {
        const t = n.value.filter((o) => !We(o, e));
        n.value = t.length ? t : null;
      } else ((a && +a > n.value.length) || !a) && n.value.push(e);
    else n.value = [e];
  },
  vi = (e, n, a) => {
    let t = e.value ? e.value.slice() : [];
    return (
      t.length === 2 && t[1] !== null && (t = []),
      t.length
        ? ft(n, t[0])
          ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1]))
          : ((t[1] = n), a("range-end", n))
        : ((t = [n]), a("range-start", n)),
      (e.value = t),
      t
    );
  },
  So = (e, n, a, t) => {
    e[0] && e[1] && a && n("auto-apply"),
      e[0] && !e[1] && t && a && n("auto-apply");
  },
  Iu = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((n) => jt(ne(n), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = jt(ne(e.value), e.timezone));
  },
  Eu = ({
    multiCalendars: e,
    highlight: n,
    calendars: a,
    modelValue: t,
    props: o,
    year: i,
    month: r,
    emit: s,
  }) => {
    const l = u(() => mi(o.yearRange, o.reverseYears)),
      d = L([!1]),
      g = u(() => (C, M) => {
        const R = et(Ft(new Date()), { month: r.value(C), year: i.value(C) });
        return ku(R, o.maxDate, o.minDate, o.preventMinMaxNavigation, M);
      }),
      m = () => {
        for (let C = 0; C < e.value.count; C++)
          if (C === 0) a.value[C] = a.value[0];
          else {
            const M = et(ne(), a.value[C - 1]);
            a.value[C] = { month: Ve(M), year: Re(Qr(M, 1)) };
          }
      },
      p = (C) => {
        if (!C) return m();
        const M = et(ne(), a.value[C]);
        return (a.value[0].year = Re(cu(M, e.value.count - 1))), m();
      },
      f = (C) => (o.focusStartDate ? C[0] : C[1] ? C[1] : C[0]),
      b = () => {
        if (t.value) {
          const C = Array.isArray(t.value) ? f(t.value) : t.value;
          a.value[0] = { month: Ve(C), year: Re(C) };
        }
      };
    De(() => {
      b(), e.value.count && m();
    });
    const S = (C, M) => {
        (a.value[M].year = C), e.value.count && !e.value.solo && p(M);
      },
      T = u(
        () => (C) =>
          sn(l.value, (M) => {
            const R = i.value(C) === M.value,
              N = Vn(M.value, ln(o.minDate), ln(o.maxDate)),
              Q = gi(n.value, M.value);
            return { active: R, disabled: N, highlighted: Q };
          })
      ),
      w = (C, M) => {
        S(C, M), D(M);
      },
      y = (C, M = !1) => {
        if (!g.value(C, M)) {
          const R = M ? i.value(C) + 1 : i.value(C) - 1;
          S(R, C);
        }
      },
      D = (C, M = !1, R) => {
        M || s("reset-flow"),
          R !== void 0 ? (d.value[C] = R) : (d.value[C] = !d.value[C]),
          d.value || s("overlay-closed");
      };
    return {
      isDisabled: g,
      groupedYears: T,
      showYearPicker: d,
      selectYear: S,
      toggleYearPicker: D,
      handleYearSelect: w,
      handleYear: y,
    };
  },
  lk = (e, n) => {
    const {
        defaultedMultiCalendars: a,
        defaultedAriaLabels: t,
        defaultedTransitions: o,
        defaultedConfig: i,
        defaultedHighlight: r,
      } = dt(e),
      { modelValue: s, year: l, month: d, calendars: g } = Gn(e, n),
      m = u(() => vu(e.formatLocale, e.locale, e.monthNameFormat)),
      p = L(null),
      {
        selectYear: f,
        groupedYears: b,
        showYearPicker: S,
        toggleYearPicker: T,
        handleYearSelect: w,
        handleYear: y,
        isDisabled: D,
      } = Eu({
        modelValue: s,
        multiCalendars: a,
        highlight: r,
        calendars: g,
        year: l,
        month: d,
        props: e,
        emit: n,
      });
    De(() => {
      e.startDate &&
        ((s.value && e.focusStartDate) || !s.value) &&
        f(Re(ne(e.startDate)), 0);
    });
    const C = (U) =>
        U ? { month: Ve(U), year: Re(U) } : { month: null, year: null },
      M = () =>
        s.value
          ? Array.isArray(s.value)
            ? s.value.map((U) => C(U))
            : C(s.value)
          : C(),
      R = (U, j) => {
        const k = g.value[U],
          v = M();
        return Array.isArray(v)
          ? v.some((F) => F.year === k?.year && F.month === j)
          : k?.year === v.year && j === v.month;
      },
      N = (U, j, k) => {
        var v, F;
        const q = M();
        return Array.isArray(q)
          ? l.value(j) === ((v = q[k]) == null ? void 0 : v.year) &&
              U === ((F = q[k]) == null ? void 0 : F.month)
          : !1;
      },
      Q = (U, j) => {
        if (e.range) {
          const k = M();
          if (Array.isArray(s.value) && Array.isArray(k)) {
            const v = N(U, j, 0) || N(U, j, 1),
              F = da(Ft(ne()), U, l.value(j));
            return bo(s.value, p.value, F) && !v;
          }
          return !1;
        }
        return !1;
      },
      G = u(
        () => (U) =>
          sn(m.value, (j) => {
            const k = R(U, j.value),
              v =
                Vn(
                  j.value,
                  fu(l.value(U), e.minDate),
                  yu(l.value(U), e.maxDate)
                ) || E1(e.disabledDates, l.value(U)).includes(j.value),
              F = Q(j.value, U),
              q = Tu(r.value, j.value, l.value(U));
            return { active: k, disabled: v, isBetween: F, highlighted: q };
          })
      ),
      P = (U, j) => da(Ft(ne()), U, l.value(j)),
      B = (U, j) => {
        const k = s.value ? s.value : Ft(new Date());
        (s.value = da(k, U, l.value(j))), n("auto-apply");
      },
      $ = (U, j) => {
        const k = vi(s, P(U, j), n);
        So(k, n, e.autoApply, e.modelAuto);
      },
      K = (U, j) => {
        pi(P(U, j), s, e.multiDatesLimit), n("auto-apply", !0);
      },
      V = (U, j) => (
        (g.value[j].month = U),
        Y(j, g.value[j].year, U),
        e.multiDates ? K(U, j) : e.range ? $(U, j) : B(U, j)
      ),
      E = (U, j) => {
        f(U, j), Y(j, U, null);
      },
      Y = (U, j, k) => {
        let v = k;
        if (!v && v !== 0) {
          const F = M();
          v = Array.isArray(F) ? F[U].month : F.month;
        }
        n("update-month-year", { instance: U, year: j, month: v });
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
      presetDate: (U, j) => {
        Iu({
          value: U,
          modelValue: s,
          range: e.range,
          timezone: j ? void 0 : e.timezone,
        }),
          n("auto-apply");
      },
      setHoverDate: (U, j) => {
        p.value = P(U, j);
      },
      selectMonth: V,
      selectYear: E,
      toggleYearPicker: T,
      handleYearSelect: w,
      handleYear: y,
      getModelMonthYear: M,
    };
  },
  uk = ie({
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
        o = Ua(),
        i = Mt(o, "yearMode"),
        r = e;
      De(() => {
        r.shadow || t("mount", null);
      });
      const {
        groupedMonths: s,
        groupedYears: l,
        year: d,
        isDisabled: g,
        defaultedMultiCalendars: m,
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
        getModelMonthYear: R,
      } = lk(r, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: b,
            year: d,
            getModelMonthYear: R,
            selectMonth: w,
            selectYear: y,
            handleYear: M,
          }),
          presetDate: S,
          toggleYearPicker: (N) => D(0, N),
        }),
        (N, Q) => (
          c(),
          W(
            ko,
            { "multi-calendars": A(m).count, stretch: "" },
            {
              default: ve(({ instance: G }) => [
                N.$slots["month-year"]
                  ? ee(
                      N.$slots,
                      "month-year",
                      tt(
                        Ge(
                          { key: 0 },
                          {
                            year: A(d),
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
                      jn,
                      {
                        key: 1,
                        items: A(s)(G),
                        "arrow-navigation": N.arrowNavigation,
                        "is-last": N.autoApply && !A(p).keepActionRow,
                        "esc-close": N.escClose,
                        height: A(p).modeHeight,
                        config: N.config,
                        "no-overlay-focus": !!(N.noOverlayFocus || N.textInput),
                        "use-relative": "",
                        type: "month",
                        onSelected: (P) => A(w)(P, G),
                        onHoverValue: (P) => A(T)(P, G),
                      },
                      {
                        header: ve(() => [
                          Ee(
                            Pu,
                            Ge(N.$props, {
                              items: A(l)(G),
                              instance: G,
                              "show-year-picker": A(f)[G],
                              year: A(d)(G),
                              "is-disabled": (P) => A(g)(G, P),
                              onHandleYear: (P) => A(M)(G, P),
                              onYearSelect: (P) => A(C)(P, G),
                              onToggleYearPicker: (P) =>
                                A(D)(G, P?.flow, P?.show),
                            }),
                            Tt({ _: 2 }, [
                              ke(A(i), (P, B) => ({
                                name: P,
                                fn: ve(($) => [ee(N.$slots, P, tt(bt($)))]),
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
  ck = (e, n) => {
    const { modelValue: a } = Gn(e, n),
      t = L(null),
      { defaultedHighlight: o, defaultedFilters: i } = dt(e),
      r = L();
    De(() => {
      e.startDate &&
        ((a.value && e.focusStartDate) || !a.value) &&
        (r.value = Re(ne(e.startDate)));
    });
    const s = (m) =>
        Array.isArray(a.value)
          ? a.value.some((p) => Re(p) === m)
          : a.value
          ? Re(a.value) === m
          : !1,
      l = (m) =>
        e.range && Array.isArray(a.value) ? bo(a.value, t.value, g(m)) : !1,
      d = u(() =>
        sn(mi(e.yearRange, e.reverseYears), (m) => {
          const p = s(m.value),
            f =
              Vn(m.value, ln(e.minDate), ln(e.maxDate)) ||
              i.value.years.includes(m.value),
            b = l(m.value) && !p,
            S = gi(o.value, m.value);
          return { active: p, disabled: f, isBetween: b, highlighted: S };
        })
      ),
      g = (m) => na(Ft(new Date()), m);
    return {
      groupedYears: d,
      modelValue: a,
      focusYear: r,
      setHoverValue: (m) => {
        t.value = na(Ft(new Date()), m);
      },
      selectYear: (m) => {
        var p;
        if (e.multiDates)
          return (
            a.value
              ? Array.isArray(a.value) &&
                (((p = a.value) == null
                  ? void 0
                  : p.map((f) => Re(f))
                ).includes(m)
                  ? (a.value = a.value.filter((f) => Re(f) !== m))
                  : a.value.push(na(wt(ne()), m)))
              : (a.value = [na(wt(ne()), m)]),
            n("auto-apply", !0)
          );
        if (e.range) {
          const f = vi(a, g(m), n);
          return So(f, n, e.autoApply, e.modelAuto);
        }
        (a.value = g(m)), n("auto-apply");
      },
    };
  },
  dk = ie({
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
          setHoverValue: d,
        } = ck(o, t),
        { defaultedConfig: g } = dt(o);
      return (
        n({ getSidebarProps: () => ({ modelValue: r, selectYear: l }) }),
        (m, p) => (
          c(),
          h("div", null, [
            m.$slots["month-year"]
              ? ee(
                  m.$slots,
                  "month-year",
                  tt(Ge({ key: 0 }, { years: A(i), selectYear: A(l) }))
                )
              : (c(),
                W(
                  jn,
                  {
                    key: 1,
                    items: A(i),
                    "is-last": m.autoApply && !A(g).keepActionRow,
                    height: A(g).modeHeight,
                    config: m.config,
                    "no-overlay-focus": !!(m.noOverlayFocus || m.textInput),
                    "focus-value": A(s),
                    type: "year",
                    "use-relative": "",
                    onSelected: A(l),
                    onHoverValue: A(d),
                  },
                  Tt({ _: 2 }, [
                    m.$slots["year-overlay-value"]
                      ? {
                          name: "item",
                          fn: ve(({ item: f }) => [
                            ee(m.$slots, "year-overlay-value", {
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
  mk = { key: 0, class: "dp__time_input" },
  gk = ["aria-label", "onKeydown", "onClick"],
  pk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  vk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  hk = ["aria-label", "disabled", "onKeydown", "onClick"],
  fk = ["aria-label", "onKeydown", "onClick"],
  yk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  bk = I("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  _k = { key: 0 },
  wk = ["aria-label", "onKeydown"],
  kk = ie({
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
          defaultedFilters: d,
          defaultedConfig: g,
        } = dt(o),
        { transitionName: m, showTransition: p } = qn(l),
        f = ma({ hours: !1, minutes: !1, seconds: !1 }),
        b = L("AM"),
        S = L(null),
        T = L([]);
      De(() => {
        t("mounted");
      });
      const w = (_) =>
          et(new Date(), {
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
            const he = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`],
              le = o[_] + he;
            return !o.validateTime(_, le);
          }
          return !1;
        },
        R = u(() => (_) => !Y(+o[_] + +o[`${_}Increment`], _) || M(_, !0)),
        N = u(() => (_) => !Y(+o[_] - +o[`${_}Increment`], _) || M(_, !1)),
        Q = (_, ae) => Fl(et(ne(), _), ae),
        G = (_, ae) => $w(et(ne(), _), ae),
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
        $ = u(() => B.value.filter((_) => !_.separator)),
        K = u(() => (_) => {
          if (_ === "hours") {
            const ae = F(+o.hours);
            return { text: ae < 10 ? `0${ae}` : `${ae}`, value: ae };
          }
          return { text: o[_] < 10 ? `0${o[_]}` : `${o[_]}`, value: o[_] };
        }),
        V = (_, ae) => {
          var he;
          if (!o.disabledTimesConfig) return !1;
          const le = o.disabledTimesConfig(
            o.order,
            _ === "hours" ? ae : void 0
          );
          return le[_] ? !!((he = le[_]) != null && he.includes(ae)) : !0;
        },
        E = (_) => {
          const ae = o.is24 ? 24 : 12,
            he = _ === "hours" ? ae : 60,
            le = +o[`${_}GridIncrement`],
            be = _ === "hours" && !o.is24 ? le : 0,
            de = [];
          for (let z = be; z < he; z += le)
            de.push({ value: z, text: z < 10 ? `0${z}` : `${z}` });
          return (
            _ === "hours" && !o.is24 && de.push({ value: 0, text: "12" }),
            sn(de, (z) => ({
              active: !1,
              disabled:
                d.value.times[_].includes(z.value) ||
                !Y(z.value, _) ||
                V(_, z.value) ||
                C(_, z.value),
            }))
          );
        },
        Y = (_, ae) => {
          const he = o.minTime ? w(zo(o.minTime)) : null,
            le = o.maxTime ? w(zo(o.maxTime)) : null,
            be = w(zo(D.value, ae, _));
          return he && le
            ? (Un(be, le) || Ka(be, le)) && ($n(be, he) || Ka(be, he))
            : he
            ? $n(be, he) || Ka(be, he)
            : le
            ? Un(be, le) || Ka(be, le)
            : !0;
        },
        U = (_) => o[`no${_[0].toUpperCase() + _.slice(1)}Overlay`],
        j = (_) => {
          U(_) || ((f[_] = !f[_]), f[_] || t("overlay-closed"));
        },
        k = (_) => (_ === "hours" ? Gt : _ === "minutes" ? oa : on),
        v = (_, ae = !0) => {
          const he = ae ? Q : G,
            le = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`];
          Y(+o[_] + le, _) &&
            t(
              `update:${_}`,
              k(_)(he({ [_]: +o[_] }, { [_]: +o[`${_}Increment`] }))
            );
        },
        F = (_) =>
          o.is24 ? _ : (_ >= 12 ? (b.value = "PM") : (b.value = "AM"), p1(_)),
        q = () => {
          b.value === "PM"
            ? ((b.value = "AM"), t("update:hours", o.hours - 12))
            : ((b.value = "PM"), t("update:hours", o.hours + 12)),
            t("am-pm-change", b.value);
        },
        te = (_) => {
          f[_] = !0;
        },
        Z = (_, ae, he) => {
          if (_ && o.arrowNavigation) {
            Array.isArray(T.value[ae])
              ? (T.value[ae][he] = _)
              : (T.value[ae] = [_]);
            const le = T.value.reduce(
              (be, de) => de.map((z, se) => [...(be[se] || []), de[se]]),
              []
            );
            r(o.closeTimePickerBtn),
              S.value && (le[1] = le[1].concat(S.value)),
              i(le, o.order);
          }
        },
        x = (_, ae) => (
          j(_),
          _ === "hours" && !o.is24
            ? t(`update:${_}`, b.value === "PM" ? ae + 12 : ae)
            : t(`update:${_}`, ae)
        );
      return (
        n({ openChildCmp: te }),
        (_, ae) => {
          var he;
          return _.disabled
            ? O("", !0)
            : (c(),
              h("div", mk, [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(B.value, (le, be) => {
                    var de, z, se;
                    return (
                      c(),
                      h(
                        "div",
                        { key: be, class: X(P.value) },
                        [
                          le.separator
                            ? (c(), h(ge, { key: 0 }, [Ae(" : ")], 64))
                            : (c(),
                              h(
                                ge,
                                { key: 1 },
                                [
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => Z(Me, be, 0),
                                      type: "button",
                                      class: X({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: R.value(
                                          le.type
                                        ),
                                      }),
                                      "aria-label":
                                        (de = A(s)) == null
                                          ? void 0
                                          : de.incrementValue(le.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((Me) => v(le.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((Me) => v(le.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => v(le.type),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ge, { key: 1 }, [pk, vk], 64))
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 0 },
                                            [
                                              _.$slots["arrow-up"]
                                                ? ee(_.$slots, "arrow-up", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              _.$slots["arrow-up"]
                                                ? O("", !0)
                                                : (c(), W(A(si), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    gk
                                  ),
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => Z(Me, be, 1),
                                      type: "button",
                                      "aria-label":
                                        (z = A(s)) == null
                                          ? void 0
                                          : z.openTpOverlay(le.type),
                                      class: X({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !_.timePickerInline,
                                        dp__time_display_inline:
                                          _.timePickerInline,
                                        "dp--time-invalid": y.value(le.type),
                                        "dp--time-overlay-btn": !y.value(
                                          le.type
                                        ),
                                      }),
                                      disabled: U(le.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie((Me) => j(le.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie((Me) => j(le.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => j(le.type),
                                    },
                                    [
                                      _.$slots[le.type]
                                        ? ee(_.$slots, le.type, {
                                            key: 0,
                                            text: K.value(le.type).text,
                                            value: K.value(le.type).value,
                                          })
                                        : O("", !0),
                                      _.$slots[le.type]
                                        ? O("", !0)
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 1 },
                                            [Ae(J(K.value(le.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    hk
                                  ),
                                  I(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Me) => Z(Me, be, 2),
                                      type: "button",
                                      class: X({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: N.value(
                                          le.type
                                        ),
                                      }),
                                      "aria-label":
                                        (se = A(s)) == null
                                          ? void 0
                                          : se.decrementValue(le.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Oe(
                                          Ie(
                                            (Me) => v(le.type, !1),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        ),
                                        Oe(
                                          Ie(
                                            (Me) => v(le.type, !1),
                                            ["prevent"]
                                          ),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Me) => v(le.type, !1),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ge, { key: 1 }, [yk, bk], 64))
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 0 },
                                            [
                                              _.$slots["arrow-down"]
                                                ? ee(_.$slots, "arrow-down", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              _.$slots["arrow-down"]
                                                ? O("", !0)
                                                : (c(), W(A(li), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    fk
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
                    h("div", _k, [
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
                                (he = A(s)) == null ? void 0 : he.amPmButton,
                              tabindex: "0",
                              onClick: q,
                              onKeydown: [
                                Oe(Ie(q, ["prevent"]), ["enter"]),
                                Oe(Ie(q, ["prevent"]), ["space"]),
                              ],
                            },
                            J(b.value),
                            41,
                            wk
                          )),
                    ])),
                (c(!0),
                h(
                  ge,
                  null,
                  ke(
                    $.value,
                    (le, be) => (
                      c(),
                      W(
                        Et,
                        { key: be, name: A(m)(f[le.type]), css: A(p) },
                        {
                          default: ve(() => [
                            f[le.type]
                              ? (c(),
                                W(
                                  jn,
                                  {
                                    key: 0,
                                    items: E(le.type),
                                    "is-last":
                                      _.autoApply && !A(g).keepActionRow,
                                    "esc-close": _.escClose,
                                    type: le.type,
                                    "text-input": _.textInput,
                                    config: _.config,
                                    "arrow-navigation": _.arrowNavigation,
                                    onSelected: (de) => x(le.type, de),
                                    onToggle: (de) => j(le.type),
                                    onResetFlow:
                                      ae[0] ||
                                      (ae[0] = (de) => _.$emit("reset-flow")),
                                  },
                                  Tt(
                                    {
                                      "button-icon": ve(() => [
                                        _.$slots["clock-icon"]
                                          ? ee(_.$slots, "clock-icon", {
                                              key: 0,
                                            })
                                          : O("", !0),
                                        _.$slots["clock-icon"]
                                          ? O("", !0)
                                          : (c(),
                                            W(
                                              un(
                                                _.timePickerInline
                                                  ? A(mn)
                                                  : A(ii)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      _.$slots[`${le.type}-overlay-value`]
                                        ? {
                                            name: "item",
                                            fn: ve(({ item: de }) => [
                                              ee(
                                                _.$slots,
                                                `${le.type}-overlay-value`,
                                                {
                                                  text: de.text,
                                                  value: de.value,
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
  Sk = { class: "dp--tp-wrap" },
  Tk = ["aria-label", "tabindex"],
  Ck = ["tabindex"],
  Pk = ["aria-label"],
  Du = ie({
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
        s = Ua(),
        {
          defaultedTransitions: l,
          defaultedAriaLabels: d,
          defaultedTextInput: g,
          defaultedConfig: m,
        } = dt(o),
        { transitionName: p, showTransition: f } = qn(l),
        { hideNavigationButtons: b } = _o(),
        S = L(null),
        T = L(null),
        w = L([]),
        y = L(null);
      De(() => {
        t("mount"),
          !o.timePicker && o.arrowNavigation
            ? i([gt(S.value)], "time")
            : r(!0, o.timePicker);
      });
      const D = u(() =>
          o.range && o.modelAuto ? hu(o.internalModelValue) : !0
        ),
        C = L(!1),
        M = (E) => ({
          hours: Array.isArray(o.hours) ? o.hours[E] : o.hours,
          minutes: Array.isArray(o.minutes) ? o.minutes[E] : o.minutes,
          seconds: Array.isArray(o.seconds) ? o.seconds[E] : o.seconds,
        }),
        R = u(() => {
          const E = [];
          if (o.range) for (let Y = 0; Y < 2; Y++) E.push(M(Y));
          else E.push(M(0));
          return E;
        }),
        N = (E, Y = !1, U = "") => {
          Y || t("reset-flow"),
            (C.value = E),
            t(E ? "overlay-opened" : "overlay-closed"),
            o.arrowNavigation && r(E),
            Pt(() => {
              U !== "" && w.value[0] && w.value[0].openChildCmp(U);
            });
        },
        Q = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: o.autoApply && !m.value.keepActionRow,
        })),
        G = Mt(s, "timePicker"),
        P = (E, Y, U) =>
          o.range ? (Y === 0 ? [E, R.value[1][U]] : [R.value[0][U], E]) : E,
        B = (E) => {
          t("update:hours", E);
        },
        $ = (E) => {
          t("update:minutes", E);
        },
        K = (E) => {
          t("update:seconds", E);
        },
        V = () => {
          if (y.value && !g.value.enabled && !o.noOverlayFocus) {
            const E = h1(y.value);
            E && E.focus({ preventScroll: !0 });
          }
        };
      return (
        n({ toggleTimePicker: N }),
        (E, Y) => {
          var U;
          return (
            c(),
            h("div", Sk, [
              !E.timePicker && !E.timePickerInline
                ? ce(
                    (c(),
                    h(
                      "button",
                      {
                        key: 0,
                        ref_key: "openTimePickerBtn",
                        ref: S,
                        type: "button",
                        class: X(Q.value),
                        "aria-label":
                          (U = A(d)) == null ? void 0 : U.openTimePicker,
                        tabindex: E.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          Y[0] || (Y[0] = Oe((j) => N(!0), ["enter"])),
                          Y[1] || (Y[1] = Oe((j) => N(!0), ["space"])),
                        ],
                        onClick: Y[2] || (Y[2] = (j) => N(!0)),
                      },
                      [
                        E.$slots["clock-icon"]
                          ? ee(E.$slots, "clock-icon", { key: 0 })
                          : O("", !0),
                        E.$slots["clock-icon"]
                          ? O("", !0)
                          : (c(), W(A(ii), { key: 1 })),
                      ],
                      42,
                      Tk
                    )),
                    [[Wt, !A(b)(E.hideNavigation, "time")]]
                  )
                : O("", !0),
              Ee(
                Et,
                { name: A(p)(C.value), css: A(f) && !E.timePickerInline },
                {
                  default: ve(() => {
                    var j;
                    return [
                      C.value || E.timePicker || E.timePickerInline
                        ? (c(),
                          h(
                            "div",
                            {
                              key: 0,
                              ref_key: "overlayRef",
                              ref: y,
                              class: X({
                                dp__overlay: !E.timePickerInline,
                                "dp--overlay-absolute":
                                  !o.timePicker && !E.timePickerInline,
                                "dp--overlay-relative": o.timePicker,
                              }),
                              style: xe(
                                E.timePicker
                                  ? { height: `${A(m).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: E.timePickerInline ? void 0 : 0,
                            },
                            [
                              I(
                                "div",
                                {
                                  class: X(
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
                                        setMinutes: $,
                                        setSeconds: K,
                                      })
                                    : O("", !0),
                                  E.$slots["time-picker-overlay"]
                                    ? O("", !0)
                                    : (c(),
                                      h(
                                        "div",
                                        {
                                          key: 1,
                                          class: X(
                                            E.timePickerInline
                                              ? "dp__flex"
                                              : "dp__overlay_row dp__flex_row"
                                          ),
                                        },
                                        [
                                          (c(!0),
                                          h(
                                            ge,
                                            null,
                                            ke(R.value, (k, v) =>
                                              ce(
                                                (c(),
                                                W(
                                                  kk,
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
                                                        $(P(F, v, "minutes")),
                                                      "onUpdate:seconds": (F) =>
                                                        K(P(F, v, "seconds")),
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
                                                  Tt({ _: 2 }, [
                                                    ke(A(G), (F, q) => ({
                                                      name: F,
                                                      fn: ve((te) => [
                                                        ee(
                                                          E.$slots,
                                                          F,
                                                          tt(bt(te))
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
                                                [[Wt, v === 0 ? !0 : D.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !E.timePicker && !E.timePickerInline
                                    ? ce(
                                        (c(),
                                        h(
                                          "button",
                                          {
                                            key: 2,
                                            ref_key: "closeTimePickerBtn",
                                            ref: T,
                                            type: "button",
                                            class: X(Q.value),
                                            "aria-label":
                                              (j = A(d)) == null
                                                ? void 0
                                                : j.closeTimePicker,
                                            tabindex: "0",
                                            onKeydown: [
                                              Y[4] ||
                                                (Y[4] = Oe(
                                                  (k) => N(!1),
                                                  ["enter"]
                                                )),
                                              Y[5] ||
                                                (Y[5] = Oe(
                                                  (k) => N(!1),
                                                  ["space"]
                                                )),
                                            ],
                                            onClick:
                                              Y[6] || (Y[6] = (k) => N(!1)),
                                          },
                                          [
                                            E.$slots["calendar-icon"]
                                              ? ee(E.$slots, "calendar-icon", {
                                                  key: 0,
                                                })
                                              : O("", !0),
                                            E.$slots["calendar-icon"]
                                              ? O("", !0)
                                              : (c(), W(A(mn), { key: 1 })),
                                          ],
                                          42,
                                          Pk
                                        )),
                                        [[Wt, !A(b)(E.hideNavigation, "time")]]
                                      )
                                    : O("", !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            Ck
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
  Mu = (e, n, a, t) => {
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
          : ni(ne(), i(y)),
      s = (w, y) => {
        n[w] = y;
      },
      l = (w, y) => {
        const D = Object.fromEntries(
          Object.keys(n).map((C) => (C === w ? [C, y] : [C, n[C]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const C = (R) =>
              a.value
                ? Pa(a.value[R], D.hours[R], D.minutes[R], D.seconds[R])
                : null,
            M = (R) => ai(a.value[R], 0);
          return !(We(C(0), C(1)) && ($n(C(0), M(1)) || Un(C(1), M(0))));
        }
        return !0;
      },
      d = (w, y) => {
        l(w, y) && (s(w, y), t && t());
      },
      g = (w) => {
        d("hours", w);
      },
      m = (w) => {
        d("minutes", w);
      },
      p = (w) => {
        d("seconds", w);
      },
      f = (w, y, D, C) => {
        y && g(w), !y && !D && m(w), D && p(w), a.value && C(a.value);
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
            R = C.filter((N) => +N.hours === M);
          return ((D = R[0]) == null ? void 0 : D.minutes) === "*"
            ? { hours: [M], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: R?.map((N) => +N.minutes) ?? [],
                seconds: R?.map((N) => (N.seconds ? +N.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: s,
      updateHours: g,
      updateMinutes: m,
      updateSeconds: p,
      getSetDateTime: r,
      updateTimeValues: f,
      getSecondsValue: i,
      assignStartTime: b,
      validateTime: l,
      disabledTimesConfig: T,
    };
  },
  Ik = (e, n) => {
    const { modelValue: a, time: t } = Gn(e, n),
      { defaultedStartTime: o } = dt(e),
      {
        updateTimeValues: i,
        getSetDateTime: r,
        setTime: s,
        assignStartTime: l,
        disabledTimesConfig: d,
        validateTime: g,
      } = Mu(e, t, a),
      m = (y) => {
        const { hours: D, minutes: C, seconds: M } = y;
        return { hours: +D, minutes: +C, seconds: M ? +M : 0 };
      },
      p = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const D = m(e.startTime[0]),
              C = m(e.startTime[1]);
            return [et(ne(), D), et(ne(), C)];
          }
          const y = m(e.startTime);
          return et(ne(), y);
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
        Array.isArray(y) ? [xa(ne(y[0])), xa(ne(y[1]))] : [xa(y ?? ne())],
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
      disabledTimesConfig: d,
      updateTime: (y, D = !0, C = !1) => {
        i(y, D, C, w);
      },
      validateTime: g,
    };
  },
  Ek = ie({
    compatConfig: { MODE: 3 },
    __name: "TimePickerSolo",
    props: { ...Kt },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = Mt(i, "timePicker"),
        {
          time: s,
          modelValue: l,
          disabledTimesConfig: d,
          updateTime: g,
          validateTime: m,
        } = Ik(o, t);
      return (
        n({
          getSidebarProps: () => ({ modelValue: l, time: s, updateTime: g }),
        }),
        (p, f) => (
          c(),
          W(
            ko,
            { "multi-calendars": 0, stretch: "" },
            {
              default: ve(() => [
                Ee(
                  Du,
                  Ge(p.$props, {
                    hours: A(s).hours,
                    minutes: A(s).minutes,
                    seconds: A(s).seconds,
                    "internal-model-value": p.internalModelValue,
                    "disabled-times-config": A(d),
                    "validate-time": A(m),
                    "onUpdate:hours": f[0] || (f[0] = (b) => A(g)(b)),
                    "onUpdate:minutes": f[1] || (f[1] = (b) => A(g)(b, !1)),
                    "onUpdate:seconds": f[2] || (f[2] = (b) => A(g)(b, !1, !0)),
                    onAmPmChange:
                      f[3] || (f[3] = (b) => p.$emit("am-pm-change", b)),
                  }),
                  Tt({ _: 2 }, [
                    ke(A(r), (b, S) => ({
                      name: b,
                      fn: ve((T) => [ee(p.$slots, b, tt(bt(T)))]),
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
  Dk = { class: "dp__month_year_row" },
  Mk = ["aria-label", "onClick", "onKeydown"],
  Ok = ie({
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
          defaultedConfig: d,
          defaultedHighlight: g,
        } = dt(o),
        { transitionName: m, showTransition: p } = qn(i),
        { buildMatrix: f } = Ia(),
        {
          handleMonthYearChange: b,
          isDisabled: S,
          updateMonthYear: T,
        } = V1(o, t),
        { showLeftIcon: w, showRightIcon: y } = _o(),
        D = L(!1),
        C = L(!1),
        M = L([null, null, null, null]);
      De(() => {
        t("mount");
      });
      const R = (v) => ({
          get: () => o[v],
          set: (F) => {
            const q = v === Vt.month ? Vt.year : Vt.month;
            t("update-month-year", { [v]: F, [q]: o[q] }),
              v === Vt.month ? V(!0) : E(!0);
          },
        }),
        N = u(R(Vt.month)),
        Q = u(R(Vt.year)),
        G = u(() => (v) => ({
          month: o.month,
          year: o.year,
          items: v === Vt.month ? o.months : o.years,
          instance: o.instance,
          updateMonthYear: T,
          toggle: v === Vt.month ? V : E,
        })),
        P = u(
          () =>
            o.months.find((F) => F.value === o.month) || { text: "", value: 0 }
        ),
        B = u(() =>
          sn(o.months, (v) => {
            const F = o.month === v.value,
              q =
                Vn(v.value, fu(o.year, o.minDate), yu(o.year, o.maxDate)) ||
                l.value.months.includes(v.value),
              te = Tu(g.value, v.value, o.year);
            return { active: F, disabled: q, highlighted: te };
          })
        ),
        $ = u(() =>
          sn(o.years, (v) => {
            const F = o.year === v.value,
              q =
                Vn(v.value, ln(o.minDate), ln(o.maxDate)) ||
                l.value.years.includes(v.value),
              te = gi(g.value, v.value);
            return { active: F, disabled: q, highlighted: te };
          })
        ),
        K = (v, F) => {
          F !== void 0 ? (v.value = F) : (v.value = !v.value),
            v.value || t("overlay-closed");
        },
        V = (v = !1, F) => {
          Y(v), K(D, F);
        },
        E = (v = !1, F) => {
          Y(v), K(C, F);
        },
        Y = (v) => {
          v || t("reset-flow");
        },
        U = (v, F) => {
          o.arrowNavigation && ((M.value[F] = gt(v)), f(M.value, "monthYear"));
        },
        j = u(() => {
          var v, F;
          return [
            {
              type: Vt.month,
              index: 1,
              toggle: V,
              modelValue: N.value,
              updateModelValue: (q) => (N.value = q),
              text: P.value.text,
              showSelectionGrid: D.value,
              items: B.value,
              ariaLabel: (v = r.value) == null ? void 0 : v.openMonthsOverlay,
            },
            {
              type: Vt.year,
              index: 2,
              toggle: E,
              modelValue: Q.value,
              updateModelValue: (q) => (Q.value = q),
              text: o.year,
              showSelectionGrid: C.value,
              items: $.value,
              ariaLabel: (F = r.value) == null ? void 0 : F.openYearsOverlay,
            },
          ];
        }),
        k = u(() =>
          o.disableYearSelect
            ? [j.value[0]]
            : o.yearFirst
            ? [...j.value].reverse()
            : j.value
        );
      return (
        n({
          toggleMonthPicker: V,
          toggleYearPicker: E,
          handleMonthYearChange: b,
        }),
        (v, F) => {
          var q, te, Z;
          return (
            c(),
            h("div", Dk, [
              v.$slots["month-year"]
                ? ee(
                    v.$slots,
                    "month-year",
                    tt(
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
                    ge,
                    { key: 1 },
                    [
                      A(w)(A(s), e.instance) && !v.vertical
                        ? (c(),
                          W(
                            Dn,
                            {
                              key: 0,
                              "aria-label":
                                (q = A(r)) == null ? void 0 : q.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: F[0] || (F[0] = (x) => A(b)(!1, !0)),
                              onSetRef: F[1] || (F[1] = (x) => U(x, 0)),
                            },
                            {
                              default: ve(() => [
                                v.$slots["arrow-left"]
                                  ? ee(v.$slots, "arrow-left", { key: 0 })
                                  : O("", !0),
                                v.$slots["arrow-left"]
                                  ? O("", !0)
                                  : (c(), W(A(oi), { key: 1 })),
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
                          class: X([
                            "dp__month_year_wrap",
                            { dp__year_disable_select: v.disableYearSelect },
                          ]),
                        },
                        [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              k.value,
                              (x, _) => (
                                c(),
                                h(
                                  ge,
                                  { key: x.type },
                                  [
                                    I(
                                      "button",
                                      {
                                        ref_for: !0,
                                        ref: (ae) => U(ae, _ + 1),
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
                                              ge,
                                              { key: 1 },
                                              [Ae(J(x.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      Mk
                                    ),
                                    Ee(
                                      Et,
                                      {
                                        name: A(m)(x.showSelectionGrid),
                                        css: A(p),
                                      },
                                      {
                                        default: ve(() => [
                                          x.showSelectionGrid
                                            ? (c(),
                                              W(
                                                jn,
                                                {
                                                  key: 0,
                                                  items: x.items,
                                                  "arrow-navigation":
                                                    v.arrowNavigation,
                                                  "hide-navigation":
                                                    v.hideNavigation,
                                                  "is-last":
                                                    v.autoApply &&
                                                    !A(d).keepActionRow,
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
                                                Tt(
                                                  {
                                                    "button-icon": ve(() => [
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
                                                          W(A(mn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    v.$slots[
                                                      `${x.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: "item",
                                                          fn: ve(
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
                                                          fn: ve(() => [
                                                            ee(
                                                              v.$slots,
                                                              `${x.type}-overlay`,
                                                              tt(
                                                                bt(
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
                                                          fn: ve(() => [
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
                            Dn,
                            {
                              key: 1,
                              "aria-label":
                                (te = A(r)) == null ? void 0 : te.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: F[2] || (F[2] = (x) => A(b)(!1, !0)),
                            },
                            {
                              default: ve(() => [
                                v.$slots["arrow-up"]
                                  ? ee(v.$slots, "arrow-up", { key: 0 })
                                  : O("", !0),
                                v.$slots["arrow-up"]
                                  ? O("", !0)
                                  : (c(), W(A(si), { key: 1 })),
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
                            Dn,
                            {
                              key: 2,
                              ref: "rightIcon",
                              disabled: A(S)(!0),
                              "aria-label":
                                (Z = A(r)) == null ? void 0 : Z.nextMonth,
                              onActivate: F[3] || (F[3] = (x) => A(b)(!0, !0)),
                              onSetRef:
                                F[4] ||
                                (F[4] = (x) =>
                                  U(x, v.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: ve(() => [
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
                                    W(un(v.vertical ? A(li) : A(ri)), {
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
  Lk = ["aria-label"],
  Bk = { class: "dp__calendar_header", role: "row" },
  Ak = { key: 0, class: "dp__calendar_header_item", role: "gridcell" },
  xk = I("div", { class: "dp__calendar_header_separator" }, null, -1),
  Rk = ["aria-label"],
  Nk = { key: 0, role: "gridcell", class: "dp__calendar_item dp__week_num" },
  Hk = { class: "dp__cell_inner" },
  $k = [
    "id",
    "aria-selected",
    "aria-disabled",
    "aria-label",
    "onClick",
    "onKeydown",
    "onMouseenter",
    "onMouseleave",
  ],
  Uk = ie({
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
          defaultedMultiCalendars: d,
          defaultedWeekNumbers: g,
        } = dt(o),
        m = L(null),
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
            : g1(o.formatLocale, o.locale, +o.weekStart)
        );
      De(() => {
        t("mount", { cmp: "calendar", refs: f }),
          s.value.noSwipe ||
            (b.value &&
              (b.value.addEventListener("touchstart", E, { passive: !1 }),
              b.value.addEventListener("touchend", Y, { passive: !1 }),
              b.value.addEventListener("touchmove", U, { passive: !1 }))),
          o.monthChangeOnScroll &&
            b.value &&
            b.value.addEventListener("wheel", v, { passive: !1 });
      });
      const R = (x) =>
          x
            ? o.vertical
              ? "vNext"
              : "next"
            : o.vertical
            ? "vPrevious"
            : "previous",
        N = (x, _) => {
          if (o.transitions) {
            const ae = wt(da(ne(), o.month, o.year));
            (T.value = _t(wt(da(ne(), x, _)), ae)
              ? r.value[R(!0)]
              : r.value[R(!1)]),
              (S.value = !1),
              Pt(() => {
                S.value = !0;
              });
          }
        },
        Q = u(() => ({ [o.calendarClassName]: !!o.calendarClassName })),
        G = u(() => (x) => {
          const _ = v1(x);
          return {
            dp__marker_dot: _.type === "dot",
            dp__marker_line: _.type === "line",
          };
        }),
        P = u(() => (x) => We(x, m.value)),
        B = u(() => ({
          dp__calendar: !0,
          dp__calendar_next: d.value.count > 0 && o.instance !== 0,
        })),
        $ = u(() => (x) => o.hideOffsetDates ? x.current : !0),
        K = async (x, _, ae) => {
          var he, le;
          if (
            (t("set-hover-date", x),
            (le = (he = x.marker) == null ? void 0 : he.tooltip) != null &&
              le.length)
          ) {
            const be = gt(f.value[_][ae]);
            if (be) {
              const { width: de, height: z } = be.getBoundingClientRect();
              m.value = x.value;
              let se = { left: `${de / 2}px` },
                Me = -50;
              if ((await Pt(), y.value[0])) {
                const { left: me, width: Ue } =
                  y.value[0].getBoundingClientRect();
                me < 0 &&
                  ((se = { left: "0" }),
                  (Me = 0),
                  (D.value.left = `${de / 2}px`)),
                  window.innerWidth < me + Ue &&
                    ((se = { right: "0" }),
                    (Me = 0),
                    (D.value.left = `${Ue - de / 2}px`));
              }
              (p.value = {
                bottom: `${z}px`,
                ...se,
                transform: `translateX(${Me}%)`,
              }),
                t("tooltip-open", x.marker);
            }
          }
        },
        V = (x) => {
          m.value &&
            ((m.value = null),
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
            j();
        },
        U = (x) => {
          o.vertical && !o.inline && x.preventDefault();
        },
        j = () => {
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
            ? T0(x.value, { weekStartsOn: +o.weekStart })
            : g.value.type === "iso"
            ? _0(x.value)
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
        Z = (x) => {
          Ca(x, s.value);
        };
      return (
        n({ triggerTransition: N }),
        (x, _) => {
          var ae;
          return (
            c(),
            h(
              "div",
              { class: X(B.value) },
              [
                I(
                  "div",
                  {
                    ref_key: "calendarWrapRef",
                    ref: b,
                    role: "grid",
                    class: X(Q.value),
                    "aria-label":
                      (ae = A(l)) == null ? void 0 : ae.calendarWrap,
                  },
                  [
                    (c(),
                    h(
                      ge,
                      { key: 0 },
                      [
                        I("div", Bk, [
                          x.weekNumbers
                            ? (c(), h("div", Ak, J(x.weekNumName), 1))
                            : O("", !0),
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              M.value,
                              (he, le) => (
                                c(),
                                h(
                                  "div",
                                  {
                                    key: le,
                                    class: "dp__calendar_header_item",
                                    role: "gridcell",
                                  },
                                  [
                                    x.$slots["calendar-header"]
                                      ? ee(x.$slots, "calendar-header", {
                                          key: 0,
                                          day: he,
                                          index: le,
                                        })
                                      : O("", !0),
                                    x.$slots["calendar-header"]
                                      ? O("", !0)
                                      : (c(),
                                        h(ge, { key: 1 }, [Ae(J(he), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        xk,
                        Ee(
                          Et,
                          { name: T.value, css: !!x.transitions },
                          {
                            default: ve(() => {
                              var he;
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
                                          ((he = A(l)) == null
                                            ? void 0
                                            : he.calendarDays) || void 0,
                                      },
                                      [
                                        (c(!0),
                                        h(
                                          ge,
                                          null,
                                          ke(
                                            C.value,
                                            (le, be) => (
                                              c(),
                                              h(
                                                "div",
                                                {
                                                  key: be,
                                                  class: "dp__calendar_row",
                                                  role: "row",
                                                },
                                                [
                                                  x.weekNumbers
                                                    ? (c(),
                                                      h("div", Nk, [
                                                        I(
                                                          "div",
                                                          Hk,
                                                          J(q(le.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : O("", !0),
                                                  (c(!0),
                                                  h(
                                                    ge,
                                                    null,
                                                    ke(le.days, (de, z) => {
                                                      var se, Me, me;
                                                      return (
                                                        c(),
                                                        h(
                                                          "div",
                                                          {
                                                            id: de.value
                                                              .toISOString()
                                                              .split("T")[0],
                                                            ref_for: !0,
                                                            ref: (Ue) =>
                                                              k(Ue, be, z),
                                                            key: z + be,
                                                            role: "gridcell",
                                                            class:
                                                              "dp__calendar_item",
                                                            "aria-selected":
                                                              de.classData
                                                                .dp__active_date ||
                                                              de.classData
                                                                .dp__range_start ||
                                                              de.classData
                                                                .dp__range_start,
                                                            "aria-disabled":
                                                              de.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            "aria-label":
                                                              (Me =
                                                                (se = A(l)) ==
                                                                null
                                                                  ? void 0
                                                                  : se.day) ==
                                                              null
                                                                ? void 0
                                                                : Me.call(
                                                                    se,
                                                                    de
                                                                  ),
                                                            tabindex: "0",
                                                            onClick: Ie(
                                                              (Ue) =>
                                                                te(Ue, de),
                                                              ["prevent"]
                                                            ),
                                                            onKeydown: [
                                                              Oe(
                                                                (Ue) =>
                                                                  x.$emit(
                                                                    "select-date",
                                                                    de
                                                                  ),
                                                                ["enter"]
                                                              ),
                                                              Oe(
                                                                (Ue) =>
                                                                  x.$emit(
                                                                    "handle-space",
                                                                    de
                                                                  ),
                                                                ["space"]
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              Ue
                                                            ) => K(de, be, z),
                                                            onMouseleave: (
                                                              Ue
                                                            ) => V(de),
                                                          },
                                                          [
                                                            I(
                                                              "div",
                                                              {
                                                                class: X([
                                                                  "dp__cell_inner",
                                                                  de.classData,
                                                                ]),
                                                              },
                                                              [
                                                                x.$slots.day &&
                                                                $.value(de)
                                                                  ? ee(
                                                                      x.$slots,
                                                                      "day",
                                                                      {
                                                                        key: 0,
                                                                        day: +de.text,
                                                                        date: de.value,
                                                                      }
                                                                    )
                                                                  : O("", !0),
                                                                x.$slots.day
                                                                  ? O("", !0)
                                                                  : (c(),
                                                                    h(
                                                                      ge,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        Ae(
                                                                          J(
                                                                            de.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                de.marker &&
                                                                $.value(de)
                                                                  ? (c(),
                                                                    h(
                                                                      ge,
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
                                                                                  de.marker,
                                                                                day: +de.text,
                                                                                date: de.value,
                                                                              }
                                                                            )
                                                                          : (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  X(
                                                                                    G.value(
                                                                                      de.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  xe(
                                                                                    de
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            de
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
                                                                  de.value
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
                                                                        (me =
                                                                          de.marker) !=
                                                                          null &&
                                                                        me.tooltip
                                                                          ? (c(),
                                                                            h(
                                                                              "div",
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  "dp__tooltip_content",
                                                                                onClick:
                                                                                  Z,
                                                                              },
                                                                              [
                                                                                (c(
                                                                                  !0
                                                                                ),
                                                                                h(
                                                                                  ge,
                                                                                  null,
                                                                                  ke(
                                                                                    de
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      Ue,
                                                                                      mt
                                                                                    ) => (
                                                                                      c(),
                                                                                      h(
                                                                                        "div",
                                                                                        {
                                                                                          key: mt,
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
                                                                                                    Ue,
                                                                                                  day: de.value,
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
                                                                                                ge,
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
                                                                                                          Ue.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  Ue.color,
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
                                                                                                      Ue.text
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
                                                          $k
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
                                      Rk
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
                  Lk
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Zs = (e) => Array.isArray(e),
  Vk = (e, n, a, t) => {
    const o = L([]),
      { modelValue: i, calendars: r, time: s } = Gn(e, n),
      { defaultedMultiCalendars: l, defaultedStartTime: d } = dt(e),
      {
        validateMonthYearInRange: g,
        isDisabled: m,
        isDateRangeAllowed: p,
        checkMinMaxRange: f,
      } = Ya(e),
      {
        updateTimeValues: b,
        getSetDateTime: S,
        setTime: T,
        assignStartTime: w,
        validateTime: y,
        disabledTimesConfig: D,
      } = Mu(e, s, i, t),
      C = u(() => (H) => r.value[H] ? r.value[H].month : 0),
      M = u(() => (H) => r.value[H] ? r.value[H].year : 0),
      R = (H, re, Te) => {
        var Le, Qe;
        r.value[H] || (r.value[H] = { month: 0, year: 0 }),
          (r.value[H].month = Gs(re)
            ? (Le = r.value[H]) == null
              ? void 0
              : Le.month
            : re),
          (r.value[H].year = Gs(Te)
            ? (Qe = r.value[H]) == null
              ? void 0
              : Qe.year
            : Te);
      },
      N = () => {
        e.autoApply && n("select-date");
      };
    Ne(i, (H, re) => {
      JSON.stringify(H) !== JSON.stringify(re) && P();
    }),
      De(() => {
        e.shadow ||
          (i.value || (v(), d.value && w(d.value)),
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
            : $(i.value, H);
        if (l.value.count && H && !e.startDate) return B(ne(), H);
      },
      B = (H, re = !1) => {
        if (
          ((!l.value.count || !l.value.static || re) && R(0, Ve(H), Re(H)),
          l.value.count && (!l.value.solo || !i.value))
        )
          for (let Te = 1; Te < l.value.count; Te++) {
            const Le = et(ne(), {
                month: C.value(Te - 1),
                year: M.value(Te - 1),
              }),
              Qe = Fl(Le, { months: 1 });
            r.value[Te] = { month: Ve(Qe), year: Re(Qe) };
          }
      },
      $ = (H, re) => {
        B(H),
          T("hours", Gt(H)),
          T("minutes", oa(H)),
          T("seconds", on(H)),
          l.value.count && re && k();
      },
      K = (H) => {
        if (l.value.count) {
          if (l.value.solo) return 0;
          const re = Ve(H[0]),
            Te = Ve(H[1]);
          return Math.abs(Te - re) < l.value.count ? 0 : 1;
        }
        return 1;
      },
      V = (H, re) => {
        H[1] && e.showLastInRange ? B(H[K(H)], re) : B(H[0], re);
        const Te = (Le, Qe) => [Le(H[0]), H[1] ? Le(H[1]) : s[Qe][1]];
        T("hours", Te(Gt, "hours")),
          T("minutes", Te(oa, "minutes")),
          T("seconds", Te(on, "seconds"));
      },
      E = (H, re) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return V(H, re);
        if (e.multiDates && re) {
          const Te = H[H.length - 1];
          return $(Te, re);
        }
      },
      Y = (H) => {
        const re = i.value;
        E(re, H), l.value.count && l.value.solo && k();
      },
      U = (H, re) => {
        const Te = et(ne(), { month: C.value(re), year: M.value(re) }),
          Le = H < 0 ? qt(Te, 1) : rn(Te, 1);
        g(Ve(Le), Re(Le), H < 0, e.preventMinMaxNavigation) &&
          (R(re, Ve(Le), Re(Le)),
          n("update-month-year", { instance: re, month: Ve(Le), year: Re(Le) }),
          l.value.count && !l.value.solo && j(re),
          a());
      },
      j = (H) => {
        for (let re = H - 1; re >= 0; re--) {
          const Te = rn(
            et(ne(), { month: C.value(re + 1), year: M.value(re + 1) }),
            1
          );
          R(re, Ve(Te), Re(Te));
        }
        for (let re = H + 1; re <= l.value.count - 1; re++) {
          const Te = qt(
            et(ne(), { month: C.value(re - 1), year: M.value(re - 1) }),
            1
          );
          R(re, Ve(Te), Re(Te));
        }
      },
      k = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const H = ne(ne(i.value[1] ? i.value[1] : qt(i.value[0], 1))),
            [re, Te] = [Ve(i.value[0]), Re(i.value[0])],
            [Le, Qe] = [Ve(i.value[1]), Re(i.value[1])];
          (re !== Le || (re === Le && Te !== Qe)) &&
            l.value.solo &&
            R(1, Ve(H), Re(H));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (R(0, Ve(i.value), Re(i.value)), B(ne()));
      },
      v = () => {
        e.startDate &&
          (R(0, Ve(ne(e.startDate)), Re(ne(e.startDate))),
          l.value.count && j(0));
      },
      F = _1((H, re) => {
        e.monthChangeOnScroll &&
          U(e.monthChangeOnScroll !== "inverse" ? -H.deltaY : H.deltaY, re);
      }, 50),
      q = (H, re, Te = !1) => {
        e.monthChangeOnArrows && e.vertical === Te && te(H, re);
      },
      te = (H, re) => {
        U(H === "right" ? -1 : 1, re);
      },
      Z = (H) =>
        e.markers.find((re) => We(S1(H.value), jt(ne(re.date), e.timezone))),
      x = (H, re) => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [H == 0, !0];
          case "fair":
            return [H == 0 || re > H, !0];
          case "append":
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      _ = (H, re, Te, Le) => {
        if (e.sixWeeks && H.length < 6) {
          const Qe = 6 - H.length,
            yt = (re.getDay() + 7 - Le) % 7,
            Ce = 6 - ((Te.getDay() + 7 - Le) % 7),
            [ue, Se] = x(yt, Ce);
          for (let _e = 1; _e <= Qe; _e++)
            if (Se ? !!(_e % 2) == ue : ue) {
              const ot = H[0].days[0],
                vt = ae(ca(ot.value, -7), Ve(re));
              H.unshift({ days: vt });
            } else {
              const ot = H[H.length - 1],
                vt = ot.days[ot.days.length - 1],
                ba = ae(ca(vt.value, 1), Ve(re));
              H.push({ days: ba });
            }
        }
        return H;
      },
      ae = (H, re) => {
        const Te = ne(H),
          Le = [];
        for (let Qe = 0; Qe < 7; Qe++) {
          const yt = ca(Te, Qe),
            Ce = Ve(yt) !== re;
          Le.push({
            text: e.hideOffsetDates && Ce ? "" : yt.getDate(),
            value: yt,
            current: !Ce,
            classData: {},
          });
        }
        return Le;
      },
      he = (H, re) => {
        const Te = [],
          Le = new Date(re, H),
          Qe = new Date(re, H + 1, 0),
          yt = e.weekStart,
          Ce = Ha(Le, { weekStartsOn: yt }),
          ue = (Se) => {
            const _e = ae(Se, H);
            if (
              (Te.push({ days: _e }),
              !Te[Te.length - 1].days.some((ot) => We(wt(ot.value), wt(Qe))))
            ) {
              const ot = ca(Se, 7);
              ue(ot);
            }
          };
        return ue(Ce), _(Te, Le, Qe, yt);
      },
      le = (H) => (
        (i.value = ao(ne(H.value), e.timezone, e.weekStart)),
        n("date-update", H.value),
        G()
      ),
      be = (H) => {
        const re = Pa(ne(H.value), s.hours, s.minutes, Ut());
        n("date-update", re),
          e.multiDates ? pi(re, i, e.multiDatesLimit) : (i.value = re),
          t(),
          Pt().then(() => {
            G();
          });
      },
      de = (H) =>
        e.noDisabledRange ? _u(o.value[0], H).some((re) => m(re)) : !1,
      z = () => {
        (o.value = i.value ? i.value.slice() : []),
          o.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (o.value = []);
      },
      se = (H, re) => {
        const Te = [ne(H.value), ca(ne(H.value), +e.autoRange)];
        p(Te)
          ? (re && Me(H.value), (o.value = Te))
          : n("invalid-date", H.value);
      },
      Me = (H) => {
        const re = Ve(ne(H)),
          Te = Re(ne(H));
        if ((R(0, re, Te), l.value.count > 0))
          for (let Le = 1; Le < l.value.count; Le++) {
            const Qe = T1(
              et(ne(H), { year: C.value(Le - 1), month: M.value(Le - 1) })
            );
            R(Le, Qe.month, Qe.year);
          }
      },
      me = (H) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (_t(H, i.value[0]) || We(H, i.value[0]))
            ? [i.value[0], H]
            : e.fixedEnd && (ft(H, i.value[1]) || We(H, i.value[1]))
            ? [H, i.value[1]]
            : (n("invalid-fixed-range", H), i.value)
          : [],
      Ue = (H) => {
        if (de(H.value) || !f(H.value, i.value, e.fixedStart ? 0 : 1))
          return n("invalid-date", H.value);
        o.value = me(ne(H.value));
      },
      mt = (H, re) => {
        if ((z(), e.autoRange)) return se(H, re);
        if (e.fixedStart || e.fixedEnd) return Ue(H);
        o.value[0]
          ? f(ne(H.value), i.value) && !de(H.value)
            ? ft(ne(H.value), ne(o.value[0]))
              ? (o.value.unshift(ne(H.value)), n("range-end", o.value[0]))
              : ((o.value[1] = ne(H.value)), n("range-end", o.value[1]))
            : (e.autoApply && n("auto-apply-invalid", H.value),
              n("invalid-date", H.value))
          : ((o.value[0] = ne(H.value)), n("range-start", o.value[0]));
      },
      Ut = (H = !0) =>
        e.enableSeconds
          ? Array.isArray(s.seconds)
            ? H
              ? s.seconds[0]
              : s.seconds[1]
            : s.seconds
          : 0,
      Dt = (H) => {
        o.value[H] = Pa(o.value[H], s.hours[H], s.minutes[H], Ut(H !== 1));
      },
      ha = () => {
        var H, re;
        o.value[0] &&
          o.value[1] &&
          +((H = o.value) == null ? void 0 : H[0]) >
            +((re = o.value) == null ? void 0 : re[1]) &&
          (o.value.reverse(),
          n("range-start", o.value[0]),
          n("range-end", o.value[1]));
      },
      fa = () => {
        o.value.length &&
          (o.value[0] && !o.value[1] ? Dt(0) : (Dt(0), Dt(1), t()),
          ha(),
          (i.value = o.value.slice()),
          So(o.value, n, e.autoApply, e.modelAuto));
      },
      ya = (H, re = !1) => {
        if (m(H.value) || (!H.current && e.hideOffsetDates))
          return n("invalid-date", H.value);
        if (e.weekPicker) return le(H);
        if (!e.range) return be(H);
        Zs(s.hours) && Zs(s.minutes) && !e.multiDates && (mt(H, re), fa());
      },
      Qt = (H, re) => {
        var Te;
        R(H, re.month, re.year),
          l.value.count && !l.value.solo && j(H),
          n("update-month-year", {
            instance: H,
            month: re.month,
            year: re.year,
          }),
          a(l.value.solo ? H : void 0);
        const Le =
          (Te = e.flow) != null && Te.length ? e.flow[e.flowStep] : void 0;
        !re.fromNav && (Le === Xt.month || Le === Xt.year) && t();
      },
      Ke = (H, re) => {
        Iu({
          value: H,
          modelValue: i,
          range: e.range,
          timezone: re ? void 0 : e.timezone,
        }),
          N(),
          e.multiCalendars && Pt().then(() => P(!0));
      },
      sa = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = ft(ne(), i.value[0])
                ? [ne(), i.value[0]]
                : [i.value[0], ne()])
            : (i.value = [ne()])
          : (i.value = ne()),
          N();
      },
      la = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const H = Zt();
            i.value[i.value.length - 1] = S(H);
          } else i.value = i.value.map((H, re) => H && S(H, re));
        else i.value = S(i.value);
        n("time-update");
      },
      Zt = () =>
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
      getCalendarDays: he,
      getMarker: Z,
      handleScroll: F,
      handleSwipe: te,
      handleArrow: q,
      selectDate: ya,
      updateMonthYear: Qt,
      presetDate: Ke,
      selectCurrentDate: sa,
      updateTime: (H, re = !0, Te = !1) => {
        b(H, re, Te, la);
      },
    };
  },
  Yk = { key: 0 },
  Fk = ie({
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
          time: d,
          disabledTimesConfig: g,
          validateTime: m,
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
        } = Vk(o, t, k, v),
        R = Ua(),
        { setHoverDate: N, getDayClassData: Q, clearHoverDate: G } = q1(l, o),
        { defaultedMultiCalendars: P } = dt(o),
        B = L([]),
        $ = L([]),
        K = L(null),
        V = Mt(R, "calendar"),
        E = Mt(R, "monthYear"),
        Y = Mt(R, "timePicker"),
        U = (q) => {
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
      const j = u(
        () => (q) =>
          p(r.value(q), s.value(q)).map((te) => ({
            ...te,
            days: te.days.map(
              (Z) => ((Z.marker = f(Z)), (Z.classData = Q(Z)), Z)
            ),
          }))
      );
      function k(q) {
        var te;
        q || q === 0
          ? (te = $.value[q]) == null ||
            te.triggerTransition(r.value(q), s.value(q))
          : $.value.forEach((Z, x) =>
              Z.triggerTransition(r.value(x), s.value(x))
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
          toggleMonthPicker: (q, te, Z = 0) => {
            var x;
            (x = B.value[Z]) == null || x.toggleMonthPicker(q, te);
          },
          toggleYearPicker: (q, te, Z = 0) => {
            var x;
            (x = B.value[Z]) == null || x.toggleYearPicker(q, te);
          },
          toggleTimePicker: (q, te, Z) => {
            var x;
            (x = K.value) == null || x.toggleTimePicker(q, te, Z);
          },
          handleArrow: b,
          updateMonthYear: y,
          getSidebarProps: () => ({
            modelValue: l,
            month: r,
            year: s,
            time: d,
            updateTime: M,
            updateMonthYear: y,
            selectDate: w,
            presetDate: D,
          }),
        }),
        (q, te) => (
          c(),
          h(
            ge,
            null,
            [
              Ee(
                ko,
                { "multi-calendars": A(P).count },
                {
                  default: ve(({ instance: Z, index: x }) => [
                    q.disableMonthYearSelect
                      ? O("", !0)
                      : (c(),
                        W(
                          Ok,
                          Ge(
                            {
                              key: 0,
                              ref: (_) => {
                                _ && (B.value[x] = _);
                              },
                              months: A(vu)(
                                q.formatLocale,
                                q.locale,
                                q.monthNameFormat
                              ),
                              years: A(mi)(q.yearRange, q.reverseYears),
                              month: A(r)(Z),
                              year: A(s)(Z),
                              instance: Z,
                            },
                            q.$props,
                            {
                              onMount:
                                te[0] || (te[0] = (_) => U(A(Ra).header)),
                              onResetFlow:
                                te[1] || (te[1] = (_) => q.$emit("reset-flow")),
                              onUpdateMonthYear: (_) => A(y)(Z, _),
                              onOverlayClosed:
                                te[2] || (te[2] = (_) => q.$emit("focus-menu")),
                            }
                          ),
                          Tt({ _: 2 }, [
                            ke(A(E), (_, ae) => ({
                              name: _,
                              fn: ve((he) => [ee(q.$slots, _, tt(bt(he)))]),
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
                      Uk,
                      Ge(
                        {
                          ref: (_) => {
                            _ && ($.value[x] = _);
                          },
                          "mapped-dates": j.value(Z),
                          month: A(r)(Z),
                          year: A(s)(Z),
                          instance: Z,
                        },
                        q.$props,
                        {
                          onSelectDate: (_) => A(w)(_, Z !== 1),
                          onHandleSpace: (_) => F(_, Z !== 1),
                          onSetHoverDate: te[3] || (te[3] = (_) => A(N)(_)),
                          onHandleScroll: (_) => A(S)(_, Z),
                          onHandleSwipe: (_) => A(T)(_, Z),
                          onMount: te[4] || (te[4] = (_) => U(A(Ra).calendar)),
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
                      Tt({ _: 2 }, [
                        ke(A(V), (_, ae) => ({
                          name: _,
                          fn: ve((he) => [ee(q.$slots, _, tt(bt({ ...he })))]),
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
                  h("div", Yk, [
                    q.$slots["time-picker"]
                      ? ee(
                          q.$slots,
                          "time-picker",
                          tt(Ge({ key: 0 }, { time: A(d), updateTime: A(M) }))
                        )
                      : (c(),
                        W(
                          Du,
                          Ge(
                            { key: 1, ref_key: "timePickerRef", ref: K },
                            q.$props,
                            {
                              hours: A(d).hours,
                              minutes: A(d).minutes,
                              seconds: A(d).seconds,
                              "internal-model-value": q.internalModelValue,
                              "disabled-times-config": A(g),
                              "validate-time": A(m),
                              onMount:
                                te[8] || (te[8] = (Z) => U(A(Ra).timePicker)),
                              "onUpdate:hours":
                                te[9] || (te[9] = (Z) => A(M)(Z)),
                              "onUpdate:minutes":
                                te[10] || (te[10] = (Z) => A(M)(Z, !1)),
                              "onUpdate:seconds":
                                te[11] || (te[11] = (Z) => A(M)(Z, !1, !0)),
                              onResetFlow:
                                te[12] ||
                                (te[12] = (Z) => q.$emit("reset-flow")),
                              onOverlayClosed:
                                te[13] ||
                                (te[13] = (Z) => q.$emit("time-picker-close")),
                              onOverlayOpened:
                                te[14] ||
                                (te[14] = (Z) =>
                                  q.$emit("time-picker-open", Z)),
                              onAmPmChange:
                                te[15] ||
                                (te[15] = (Z) => q.$emit("am-pm-change", Z)),
                            }
                          ),
                          Tt({ _: 2 }, [
                            ke(A(Y), (Z, x) => ({
                              name: Z,
                              fn: ve((_) => [ee(q.$slots, Z, tt(bt(_)))]),
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
  Wk = (e, n) => {
    const a = L(),
      {
        defaultedMultiCalendars: t,
        defaultedConfig: o,
        defaultedHighlight: i,
      } = dt(e),
      { modelValue: r, year: s, month: l, calendars: d } = Gn(e, n),
      { isDisabled: g } = Ya(e),
      {
        selectYear: m,
        groupedYears: p,
        showYearPicker: f,
        isDisabled: b,
        toggleYearPicker: S,
        handleYearSelect: T,
        handleYear: w,
      } = Eu({
        modelValue: r,
        multiCalendars: t,
        highlight: i,
        calendars: d,
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
              ? r.value.some((P) => xs(G, P))
              : xs(r.value, G)
            : !1
      ),
      C = (G) => {
        if (e.range) {
          if (Array.isArray(r.value)) {
            const P = We(G, r.value[0]) || We(G, r.value[1]);
            return bo(r.value, a.value, G) && !P;
          }
          return !1;
        }
        return !1;
      },
      M = u(() => (G) => {
        const P = et(new Date(), { year: s.value(G) });
        return y_({ start: __(P), end: b_(P) }).map((B) => {
          const $ = Hn(B),
            K = Ds(B),
            V = g(B),
            E = C($),
            Y =
              typeof i.value == "function"
                ? i.value({ quarter: Es($), year: Re($) })
                : !!i.value.quarters.find(
                    (U) => U.quarter === Es($) && U.year === Re($)
                  );
          return {
            text: y($, K),
            value: $,
            active: D.value($),
            highlighted: Y,
            disabled: V,
            isBetween: E,
          };
        });
      }),
      R = (G) => {
        pi(G, r, e.multiDatesLimit), n("auto-apply", !0);
      },
      N = (G) => {
        const P = vi(r, G, n);
        So(P, n, e.autoApply, e.modelAuto);
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
      selectYear: m,
      selectQuarter: (G, P, B) => {
        if (!B)
          return (
            (d.value[P].month = Ve(Ds(G))),
            e.multiDates ? R(G) : e.range ? N(G) : Q(G)
          );
      },
      toggleYearPicker: S,
      handleYearSelect: T,
      handleYear: w,
    };
  },
  qk = { class: "dp--quarter-items" },
  Gk = ["disabled", "onClick", "onMouseover"],
  jk = ie({
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
        i = Ua(),
        r = Mt(i, "yearMode"),
        {
          defaultedMultiCalendars: s,
          defaultedConfig: l,
          groupedYears: d,
          year: g,
          isDisabled: m,
          quarters: p,
          modelValue: f,
          showYearPicker: b,
          setHoverDate: S,
          selectQuarter: T,
          toggleYearPicker: w,
          handleYearSelect: y,
          handleYear: D,
        } = Wk(o, t);
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
            ko,
            { "multi-calendars": A(s).count, stretch: "" },
            {
              default: ve(({ instance: R }) => [
                I(
                  "div",
                  {
                    class: "dp-quarter-picker-wrap",
                    style: xe({ minHeight: `${A(l).modeHeight}px` }),
                  },
                  [
                    I("div", null, [
                      Ee(
                        Pu,
                        Ge(C.$props, {
                          items: A(d)(R),
                          instance: R,
                          "show-year-picker": A(b)[R],
                          year: A(g)(R),
                          "is-disabled": (N) => A(m)(R, N),
                          onHandleYear: (N) => A(D)(R, N),
                          onYearSelect: (N) => A(y)(N, R),
                          onToggleYearPicker: (N) => A(w)(R, N?.flow, N?.show),
                        }),
                        Tt({ _: 2 }, [
                          ke(A(r), (N, Q) => ({
                            name: N,
                            fn: ve((G) => [ee(C.$slots, N, tt(bt(G)))]),
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
                    I("div", qk, [
                      (c(!0),
                      h(
                        ge,
                        null,
                        ke(
                          A(p)(R),
                          (N, Q) => (
                            c(),
                            h("div", { key: Q }, [
                              I(
                                "button",
                                {
                                  type: "button",
                                  class: X([
                                    "dp--qr-btn",
                                    {
                                      "dp--qr-btn-active": N.active,
                                      "dp--qr-btn-between": N.isBetween,
                                      "dp--qr-btn-disabled": N.disabled,
                                      "dp--highlighted": N.highlighted,
                                    },
                                  ]),
                                  disabled: N.disabled,
                                  onClick: (G) => A(T)(N.value, R, N.disabled),
                                  onMouseover: (G) => A(S)(N.value),
                                },
                                [
                                  C.$slots.quarter
                                    ? ee(C.$slots, "quarter", {
                                        key: 0,
                                        value: N.value,
                                        text: N.text,
                                      })
                                    : (c(),
                                      h(
                                        ge,
                                        { key: 1 },
                                        [Ae(J(N.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                Gk
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
  zk = ["id"],
  Kk = { key: 0, class: "dp__sidebar_left" },
  Qk = { key: 1, class: "dp--preset-dates" },
  Zk = ["onClick", "onKeydown"],
  Xk = { key: 2, class: "dp__sidebar_right" },
  Jk = { key: 3, class: "dp__action_extra" },
  Xs = ie({
    compatConfig: { MODE: 3 },
    __name: "DatepickerMenu",
    props: {
      ...wo,
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
          const { openOnTop: z, ...se } = o;
          return { ...se, flowStep: Q.value, noOverlayFocus: o.noOverlayFocus };
        }),
        { setMenuFocused: r, setShiftKey: s, control: l } = Cu(),
        d = Ua(),
        {
          defaultedTextInput: g,
          defaultedInline: m,
          defaultedConfig: p,
        } = dt(o),
        f = L(null),
        b = L(0),
        S = L(null),
        T = L(null),
        w = L(!1),
        y = L(null);
      De(() => {
        if (!o.shadow) {
          (w.value = !0), D(), window.addEventListener("resize", D);
          const z = gt(S);
          if ((z && !g.value.enabled && !m.value.enabled && (r(!0), K()), z)) {
            const se = (Me) => {
              p.value.allowPreventDefault && Me.preventDefault(),
                Ca(Me, p.value, !0);
            };
            z.addEventListener("pointerdown", se),
              z.addEventListener("mousedown", se);
          }
        }
      }),
        Yn(() => {
          window.removeEventListener("resize", D);
        });
      const D = () => {
          const z = gt(T);
          z && (b.value = z.getBoundingClientRect().width);
        },
        { arrowRight: C, arrowLeft: M, arrowDown: R, arrowUp: N } = Ia(),
        {
          flowStep: Q,
          updateFlowStep: G,
          childMount: P,
          resetFlow: B,
        } = G1(o, t, y),
        $ = u(() =>
          o.monthPicker
            ? uk
            : o.yearPicker
            ? dk
            : o.timePicker
            ? Ek
            : o.quarterPicker
            ? jk
            : Fk
        ),
        K = () => {
          const z = gt(S);
          z && z.focus({ preventScroll: !0 });
        },
        V = u(() => {
          var z;
          return ((z = y.value) == null ? void 0 : z.getSidebarProps()) || {};
        }),
        E = () => {
          o.openOnTop && t("recalculate-position");
        },
        Y = Mt(d, "action"),
        U = u(() =>
          o.monthPicker || o.yearPicker
            ? Mt(d, "monthYear")
            : o.timePicker
            ? Mt(d, "timePicker")
            : Mt(d, "shared")
        ),
        j = u(() => (o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")),
        k = u(() => ({
          dp__menu_disabled: o.disabled,
          dp__menu_readonly: o.readonly,
        })),
        v = u(() => ({
          dp__menu: !0,
          dp__menu_index: !m.value.enabled,
          dp__relative: m.value.enabled,
          [o.menuClassName]: !!o.menuClassName,
        })),
        F = (z) => {
          Ca(z, p.value, !0);
        },
        q = () => {
          o.escClose && t("close-picker");
        },
        te = (z) => {
          if (o.arrowNavigation) {
            if (z === "up") return N();
            if (z === "down") return R();
            if (z === "left") return M();
            if (z === "right") return C();
          } else
            z === "left" || z === "up"
              ? he("handleArrow", "left", 0, z === "up")
              : he("handleArrow", "right", 0, z === "down");
        },
        Z = (z) => {
          s(z.shiftKey),
            !o.disableMonthYearSelect &&
              z.code === "Tab" &&
              z.target.classList.contains("dp__menu") &&
              l.value.shiftKeyInMenu &&
              (z.preventDefault(), Ca(z, p.value, !0), t("close-picker"));
        },
        x = () => {
          K(), t("time-picker-close");
        },
        _ = (z) => {
          var se, Me, me;
          (se = y.value) == null || se.toggleTimePicker(!1, !1),
            (Me = y.value) == null || Me.toggleMonthPicker(!1, !1, z),
            (me = y.value) == null || me.toggleYearPicker(!1, !1, z);
        },
        ae = (z, se = 0) => {
          var Me, me, Ue;
          return z === "month"
            ? (Me = y.value) == null
              ? void 0
              : Me.toggleMonthPicker(!1, !0, se)
            : z === "year"
            ? (me = y.value) == null
              ? void 0
              : me.toggleYearPicker(!1, !0, se)
            : z === "time"
            ? (Ue = y.value) == null
              ? void 0
              : Ue.toggleTimePicker(!0, !1)
            : _(se);
        },
        he = (z, ...se) => {
          var Me, me;
          (Me = y.value) != null &&
            Me[z] &&
            ((me = y.value) == null || me[z](...se));
        },
        le = () => {
          he("selectCurrentDate");
        },
        be = (z, se) => {
          he("presetDate", z, se);
        },
        de = () => {
          he("clearHoverDate");
        };
      return (
        n({
          updateMonthYear: (z, se) => {
            he("updateMonthYear", z, se);
          },
          switchView: ae,
        }),
        (z, se) => {
          var Me;
          return (
            c(),
            h(
              "div",
              {
                id: z.uid ? `dp-menu-${z.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: S,
                tabindex: "0",
                role: "dialog",
                class: X(v.value),
                onMouseleave: de,
                onClick: F,
                onKeydown: [
                  Oe(q, ["esc"]),
                  se[18] ||
                    (se[18] = Oe(
                      Ie((me) => te("left"), ["prevent"]),
                      ["left"]
                    )),
                  se[19] ||
                    (se[19] = Oe(
                      Ie((me) => te("up"), ["prevent"]),
                      ["up"]
                    )),
                  se[20] ||
                    (se[20] = Oe(
                      Ie((me) => te("down"), ["prevent"]),
                      ["down"]
                    )),
                  se[21] ||
                    (se[21] = Oe(
                      Ie((me) => te("right"), ["prevent"]),
                      ["right"]
                    )),
                  Z,
                ],
              },
              [
                (z.disabled || z.readonly) && A(m).enabled
                  ? (c(), h("div", { key: 0, class: X(k.value) }, null, 2))
                  : O("", !0),
                !A(m).enabled && !z.teleportCenter
                  ? (c(), h("div", { key: 1, class: X(j.value) }, null, 2))
                  : O("", !0),
                I(
                  "div",
                  {
                    ref_key: "innerMenuRef",
                    ref: T,
                    class: X({
                      dp__menu_content_wrapper:
                        ((Me = z.presetDates) == null ? void 0 : Me.length) ||
                        !!z.$slots["left-sidebar"] ||
                        !!z.$slots["right-sidebar"],
                    }),
                    style: xe({ "--dp-menu-width": `${b.value}px` }),
                  },
                  [
                    z.$slots["left-sidebar"]
                      ? (c(),
                        h("div", Kk, [
                          ee(z.$slots, "left-sidebar", tt(bt(V.value))),
                        ]))
                      : O("", !0),
                    z.presetDates.length
                      ? (c(),
                        h("div", Qk, [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              z.presetDates,
                              (me, Ue) => (
                                c(),
                                h(
                                  ge,
                                  { key: Ue },
                                  [
                                    me.slot
                                      ? ee(z.$slots, me.slot, {
                                          key: 0,
                                          presetDate: be,
                                          label: me.label,
                                          value: me.value,
                                        })
                                      : (c(),
                                        h(
                                          "button",
                                          {
                                            key: 1,
                                            type: "button",
                                            style: xe(me.style || {}),
                                            class: "dp__btn dp--preset-range",
                                            onClick: Ie(
                                              (mt) => be(me.value, me.noTz),
                                              ["prevent"]
                                            ),
                                            onKeydown: [
                                              Oe(
                                                Ie(
                                                  (mt) => be(me.value, me.noTz),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              ),
                                              Oe(
                                                Ie(
                                                  (mt) => be(me.value, me.noTz),
                                                  ["prevent"]
                                                ),
                                                ["space"]
                                              ),
                                            ],
                                          },
                                          J(me.label),
                                          45,
                                          Zk
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
                          un($.value),
                          Ge({ ref_key: "dynCmpRef", ref: y }, i.value, {
                            "flow-step": A(Q),
                            onMount: A(P),
                            onUpdateFlowStep: A(G),
                            onResetFlow: A(B),
                            onFocusMenu: K,
                            onSelectDate:
                              se[0] || (se[0] = (me) => z.$emit("select-date")),
                            onDateUpdate:
                              se[1] ||
                              (se[1] = (me) => z.$emit("date-update", me)),
                            onTooltipOpen:
                              se[2] ||
                              (se[2] = (me) => z.$emit("tooltip-open", me)),
                            onTooltipClose:
                              se[3] ||
                              (se[3] = (me) => z.$emit("tooltip-close", me)),
                            onAutoApply:
                              se[4] ||
                              (se[4] = (me) => z.$emit("auto-apply", me)),
                            onRangeStart:
                              se[5] ||
                              (se[5] = (me) => z.$emit("range-start", me)),
                            onRangeEnd:
                              se[6] ||
                              (se[6] = (me) => z.$emit("range-end", me)),
                            onInvalidFixedRange:
                              se[7] ||
                              (se[7] = (me) =>
                                z.$emit("invalid-fixed-range", me)),
                            onTimeUpdate:
                              se[8] || (se[8] = (me) => z.$emit("time-update")),
                            onAmPmChange:
                              se[9] ||
                              (se[9] = (me) => z.$emit("am-pm-change", me)),
                            onTimePickerOpen:
                              se[10] ||
                              (se[10] = (me) =>
                                z.$emit("time-picker-open", me)),
                            onTimePickerClose: x,
                            onRecalculatePosition: E,
                            onUpdateMonthYear:
                              se[11] ||
                              (se[11] = (me) =>
                                z.$emit("update-month-year", me)),
                            onAutoApplyInvalid:
                              se[12] ||
                              (se[12] = (me) =>
                                z.$emit("auto-apply-invalid", me)),
                            onInvalidDate:
                              se[13] ||
                              (se[13] = (me) => z.$emit("invalid-date", me)),
                            "onUpdate:internalModelValue":
                              se[14] ||
                              (se[14] = (me) =>
                                z.$emit("update:internal-model-value", me)),
                          }),
                          Tt({ _: 2 }, [
                            ke(U.value, (me, Ue) => ({
                              name: me,
                              fn: ve((mt) => [
                                ee(z.$slots, me, tt(bt({ ...mt }))),
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
                    z.$slots["right-sidebar"]
                      ? (c(),
                        h("div", Xk, [
                          ee(z.$slots, "right-sidebar", tt(bt(V.value))),
                        ]))
                      : O("", !0),
                    z.$slots["action-extra"]
                      ? (c(),
                        h("div", Jk, [
                          z.$slots["action-extra"]
                            ? ee(z.$slots, "action-extra", {
                                key: 0,
                                selectCurrentDate: le,
                              })
                            : O("", !0),
                        ]))
                      : O("", !0),
                  ],
                  6
                ),
                !z.autoApply || A(p).keepActionRow
                  ? (c(),
                    W(
                      ek,
                      Ge({ key: 2, "menu-mount": w.value }, i.value, {
                        "calendar-width": b.value,
                        onClosePicker:
                          se[15] || (se[15] = (me) => z.$emit("close-picker")),
                        onSelectDate:
                          se[16] || (se[16] = (me) => z.$emit("select-date")),
                        onInvalidSelect:
                          se[17] ||
                          (se[17] = (me) => z.$emit("invalid-select")),
                        onSelectNow: le,
                      }),
                      Tt({ _: 2 }, [
                        ke(A(Y), (me, Ue) => ({
                          name: me,
                          fn: ve((mt) => [ee(z.$slots, me, tt(bt({ ...mt })))]),
                        })),
                      ]),
                      1040,
                      ["menu-mount", "calendar-width"]
                    ))
                  : O("", !0),
              ],
              42,
              zk
            )
          );
        }
      );
    },
  }),
  eS = typeof window < "u" ? window : void 0,
  ar = () => {},
  tS = (e) => (nl() ? (ol(e), !0) : !1),
  aS = (e, n, a, t) => {
    if (!e) return ar;
    let o = ar;
    const i = Ne(
        () => A(e),
        (s) => {
          o(),
            s &&
              (s.addEventListener(n, a, t),
              (o = () => {
                s.removeEventListener(n, a, t), (o = ar);
              }));
        },
        { immediate: !0, flush: "post" }
      ),
      r = () => {
        i(), o();
      };
    return tS(r), r;
  },
  nS = (e, n, a, t = {}) => {
    const { window: o = eS, event: i = "pointerdown" } = t;
    return o
      ? aS(
          o,
          i,
          (r) => {
            const s = gt(e),
              l = gt(n);
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
  oS = ie({
    compatConfig: { MODE: 3 },
    __name: "VueDatePicker",
    props: { ...wo },
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
        i = Ua(),
        r = L(!1),
        s = Ln(o, "modelValue"),
        l = Ln(o, "timezone"),
        d = L(null),
        g = L(null),
        m = L(null),
        p = L(!1),
        f = L(null),
        b = L(!1),
        S = L(!1),
        { setMenuFocused: T, setShiftKey: w } = Cu(),
        { clearArrowNav: y } = Ia(),
        { mapDatesArrToMap: D, validateDate: C, isValidTime: M } = Ya(o),
        {
          defaultedTransitions: R,
          defaultedTextInput: N,
          defaultedInline: Q,
          defaultedConfig: G,
        } = dt(o),
        { menuTransition: P, showTransition: B } = qn(R);
      De(() => {
        te(o.modelValue),
          Pt().then(() => {
            if (!Q.value.enabled) {
              const ue = k(f.value);
              ue?.addEventListener("scroll", z),
                window?.addEventListener("resize", se);
            }
          }),
          Q.value.enabled && (r.value = !0),
          window?.addEventListener("keyup", Me),
          window?.addEventListener("keydown", me);
      });
      const $ = u(() => D());
      Yn(() => {
        if (!Q.value.enabled) {
          const ue = k(f.value);
          ue?.removeEventListener("scroll", z),
            window?.removeEventListener("resize", se);
        }
        window?.removeEventListener("keyup", Me),
          window?.removeEventListener("keydown", me);
      });
      const K = Mt(i, "all", o.presetDates),
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
          xCorrect: U,
          setMenuPosition: j,
          getScrollableParent: k,
          shadowRender: v,
        } = Y1({
          menuRef: d,
          menuRefInner: g,
          inputRef: m,
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
          emitModelValue: Z,
          formatInputValue: x,
          checkBeforeEmit: _,
        } = U1(t, o, p),
        ae = u(() => ({
          dp__main: !0,
          dp__theme_dark: o.dark,
          dp__theme_light: !o.dark,
          dp__flex_display: Q.value.enabled,
          dp__flex_display_with_input: Q.value.input,
        })),
        he = u(() => (o.dark ? "dp__theme_dark" : "dp__theme_light")),
        le = u(() => ({
          to: typeof o.teleport == "boolean" ? "body" : o.teleport,
          disabled: !o.teleport || Q.value.enabled,
        })),
        be = u(() => ({ class: "dp__outer_menu_wrap" })),
        de = u(
          () =>
            Q.value.enabled &&
            (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
        ),
        z = () => {
          r.value && (G.value.closeOnScroll ? Ke() : j());
        },
        se = () => {
          r.value && j();
        },
        Me = (ue) => {
          ue.key === "Tab" &&
            !Q.value.enabled &&
            !o.teleport &&
            G.value.tabOutClosesMenu &&
            (f.value.contains(document.activeElement) || Ke()),
            (S.value = ue.shiftKey);
        },
        me = (ue) => {
          S.value = ue.shiftKey;
        },
        Ue = () => {
          !o.disabled &&
            !o.readonly &&
            (v(Xs, o),
            j(!1),
            (r.value = !0),
            r.value && t("open"),
            r.value || Qt(),
            te(o.modelValue));
        },
        mt = () => {
          var ue;
          (F.value = ""),
            Qt(),
            (ue = m.value) == null || ue.setParsedDate(null),
            t("update:model-value", null),
            t("update:model-timezone-value", null),
            t("cleared"),
            G.value.closeOnClearValue && Ke();
        },
        Ut = () => {
          const ue = q.value;
          return !ue || (!Array.isArray(ue) && C(ue))
            ? !0
            : Array.isArray(ue)
            ? o.multiDates || (ue.length === 2 && C(ue[0]) && C(ue[1]))
              ? !0
              : o.partialRange && !o.timePicker
              ? C(ue[0])
              : !1
            : !1;
        },
        Dt = () => {
          _() && Ut() ? (Z(), Ke()) : t("invalid-select", q.value);
        },
        ha = (ue) => {
          fa(), Z(), G.value.closeOnAutoApply && !ue && Ke();
        },
        fa = () => {
          m.value && N.value.enabled && m.value.setParsedDate(q.value);
        },
        ya = (ue = !1) => {
          o.autoApply &&
            M(q.value) &&
            Ut() &&
            (o.range && Array.isArray(q.value)
              ? (o.partialRange || q.value.length === 2) && ha(ue)
              : ha(ue));
        },
        Qt = () => {
          N.value.enabled || (q.value = null);
        },
        Ke = () => {
          Q.value.enabled ||
            (r.value &&
              ((r.value = !1),
              (U.value = !1),
              T(!1),
              w(!1),
              y(),
              t("closed"),
              F.value && te(s.value)),
            Qt(),
            t("blur"));
        },
        sa = (ue, Se, _e = !1) => {
          if (!ue) {
            q.value = null;
            return;
          }
          const ot = Array.isArray(ue) ? !ue.some((ba) => !C(ba)) : C(ue),
            vt = M(ue);
          ot &&
            vt &&
            ((q.value = ue), Se && ((b.value = _e), Dt(), t("text-submit")));
        },
        la = () => {
          o.autoApply && M(q.value) && Z(), fa();
        },
        Zt = () => (r.value ? Ke() : Ue()),
        H = (ue) => {
          q.value = ue;
        },
        re = () => {
          N.value.enabled && ((p.value = !0), x()), t("focus");
        },
        Te = () => {
          if (N.value.enabled && ((p.value = !1), te(o.modelValue), b.value)) {
            const ue = b1(f.value, S.value);
            ue?.focus();
          }
          t("blur");
        },
        Le = (ue) => {
          g.value &&
            g.value.updateMonthYear(0, {
              month: qs(ue.month),
              year: qs(ue.year),
            });
        },
        Qe = (ue) => {
          te(ue ?? o.modelValue);
        },
        yt = (ue, Se) => {
          var _e;
          (_e = g.value) == null || _e.switchView(ue, Se);
        },
        Ce = (ue) =>
          G.value.onClickOutside ? G.value.onClickOutside(ue) : Ke();
      return (
        nS(d, m, () => Ce(Ut)),
        n({
          closeMenu: Ke,
          selectDate: Dt,
          clearValue: mt,
          openMenu: Ue,
          onScroll: z,
          formatInputValue: x,
          updateInternalModelValue: H,
          setMonthYear: Le,
          parseModel: Qe,
          switchView: yt,
          toggleMenu: Zt,
        }),
        (ue, Se) => (
          c(),
          h(
            "div",
            {
              ref_key: "pickerWrapperRef",
              ref: f,
              class: X(ae.value),
              "data-datepicker-instance": "",
            },
            [
              Ee(
                Q1,
                Ge(
                  {
                    ref_key: "inputRef",
                    ref: m,
                    "input-value": A(F),
                    "onUpdate:inputValue":
                      Se[0] ||
                      (Se[0] = (_e) => (Ti(F) ? (F.value = _e) : null)),
                    "is-menu-open": r.value,
                  },
                  ue.$props,
                  {
                    onClear: mt,
                    onOpen: Ue,
                    onSetInputDate: sa,
                    onSetEmptyDate: A(Z),
                    onSelectDate: Dt,
                    onToggle: Zt,
                    onClose: Ke,
                    onFocus: re,
                    onBlur: Te,
                    onRealBlur: Se[1] || (Se[1] = (_e) => (p.value = !1)),
                  }
                ),
                Tt({ _: 2 }, [
                  ke(A(V), (_e, ot) => ({
                    name: _e,
                    fn: ve((vt) => [ee(ue.$slots, _e, tt(bt(vt)))]),
                  })),
                ]),
                1040,
                ["input-value", "is-menu-open", "onSetEmptyDate"]
              ),
              Ee(
                Fu,
                tt(bt(le.value)),
                {
                  default: ve(() => [
                    Ee(
                      Et,
                      { name: A(P)(A(E)), css: A(B) && !A(Q).enabled },
                      {
                        default: ve(() => [
                          r.value
                            ? (c(),
                              h(
                                "div",
                                Ge(
                                  { key: 0, ref_key: "dpWrapMenuRef", ref: d },
                                  be.value,
                                  {
                                    class: {
                                      "dp--menu-wrapper": !A(Q).enabled,
                                    },
                                    style: A(Q).enabled ? void 0 : A(Y),
                                  }
                                ),
                                [
                                  Ee(
                                    Xs,
                                    Ge(
                                      { ref_key: "dpMenuRef", ref: g },
                                      ue.$props,
                                      {
                                        "internal-model-value": A(q),
                                        "onUpdate:internalModelValue":
                                          Se[2] ||
                                          (Se[2] = (_e) =>
                                            Ti(q) ? (q.value = _e) : null),
                                        class: {
                                          [he.value]: !0,
                                          "dp--menu-wrapper": ue.teleport,
                                        },
                                        "open-on-top": A(E),
                                        "arr-map-values": $.value,
                                        "no-overlay-focus": de.value,
                                        onClosePicker: Ke,
                                        onSelectDate: Dt,
                                        onAutoApply: ya,
                                        onTimeUpdate: la,
                                        onFlowStep:
                                          Se[3] ||
                                          (Se[3] = (_e) =>
                                            ue.$emit("flow-step", _e)),
                                        onUpdateMonthYear:
                                          Se[4] ||
                                          (Se[4] = (_e) =>
                                            ue.$emit("update-month-year", _e)),
                                        onInvalidSelect:
                                          Se[5] ||
                                          (Se[5] = (_e) =>
                                            ue.$emit("invalid-select", A(q))),
                                        onAutoApplyInvalid:
                                          Se[6] ||
                                          (Se[6] = (_e) =>
                                            ue.$emit("invalid-select", _e)),
                                        onInvalidFixedRange:
                                          Se[7] ||
                                          (Se[7] = (_e) =>
                                            ue.$emit(
                                              "invalid-fixed-range",
                                              _e
                                            )),
                                        onRecalculatePosition: A(j),
                                        onTooltipOpen:
                                          Se[8] ||
                                          (Se[8] = (_e) =>
                                            ue.$emit("tooltip-open", _e)),
                                        onTooltipClose:
                                          Se[9] ||
                                          (Se[9] = (_e) =>
                                            ue.$emit("tooltip-close", _e)),
                                        onTimePickerOpen:
                                          Se[10] ||
                                          (Se[10] = (_e) =>
                                            ue.$emit("time-picker-open", _e)),
                                        onTimePickerClose:
                                          Se[11] ||
                                          (Se[11] = (_e) =>
                                            ue.$emit("time-picker-close", _e)),
                                        onAmPmChange:
                                          Se[12] ||
                                          (Se[12] = (_e) =>
                                            ue.$emit("am-pm-change", _e)),
                                        onRangeStart:
                                          Se[13] ||
                                          (Se[13] = (_e) =>
                                            ue.$emit("range-start", _e)),
                                        onRangeEnd:
                                          Se[14] ||
                                          (Se[14] = (_e) =>
                                            ue.$emit("range-end", _e)),
                                        onDateUpdate:
                                          Se[15] ||
                                          (Se[15] = (_e) =>
                                            ue.$emit("date-update", _e)),
                                        onInvalidDate:
                                          Se[16] ||
                                          (Se[16] = (_e) =>
                                            ue.$emit("invalid-date", _e)),
                                      }
                                    ),
                                    Tt({ _: 2 }, [
                                      ke(A(K), (_e, ot) => ({
                                        name: _e,
                                        fn: ve((vt) => [
                                          ee(ue.$slots, _e, tt(bt({ ...vt }))),
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
  hi = (() => {
    const e = oS;
    return (
      (e.install = (n) => {
        n.component("Vue3DatePicker", e);
      }),
      e
    );
  })(),
  rS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Object.entries(rS).forEach(([e, n]) => {
  e !== "default" && (hi[e] = n);
});
const iS = {
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
  Ou = (e) => (Ot("data-v-707c7e3f"), (e = e()), Lt(), e),
  sS = { class: "date-picker-header" },
  lS = Ou(() =>
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
  uS = [lS],
  cS = Ou(() =>
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
  dS = [cS];
function mS(e, n, a, t, o, i) {
  return (
    c(),
    h("div", sS, [
      I(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[0] ||
            (n[0] = (...r) => i.onPreviousClick && i.onPreviousClick(...r)),
        },
        uS
      ),
      Ae(" " + J(i.calendarTitle) + " ", 1),
      I(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[1] || (n[1] = (...r) => i.onNextClick && i.onNextClick(...r)),
        },
        dS
      ),
    ])
  );
}
const gS = oe(iS, [
    ["render", mS],
    ["__scopeId", "data-v-707c7e3f"],
  ]),
  pS = ie({
    components: { ModalLayout: dn, DatePicker: hi },
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
        } = Ht(),
        { openEcommerceModal: l } = Rt(),
        { initiateCheckout: d } = en(),
        g = u(() => gS);
      return {
        initiateCheckout: d,
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
            this.durationUnit === gr
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          n =
            this.durationUnit === gr
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
        if (Na() || this.isInPreviewMode) {
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
        this.timeSlots = await Zd(this.bookingEvent.id, e).then(
          (n) => ((this.isSlotsLoading = !1), n)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const n = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          a = new Date(n.getFullYear(), n.getMonth() + 1, 0);
        this.disabledDates = await Xd({
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
  vS = { class: "ecommerce-booking-modal" },
  hS = { class: "ecommerce-booking-modal__content" },
  fS = { class: "ecommerce-booking-modal__info" },
  yS = { class: "ecommerce-booking-modal__title" },
  bS = { class: "ecommerce-booking-modal__icons" },
  _S = { class: "ecommerce-booking-modal__text-wrapper" },
  wS = I(
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
  kS = { class: "ecommerce-booking-modal__text" },
  SS = { class: "ecommerce-booking-modal__text-wrapper" },
  TS = I(
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
  CS = { class: "ecommerce-booking-modal__text" },
  PS = { class: "ecommerce-booking-modal__text-wrapper" },
  IS = I(
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
  ES = { class: "ecommerce-booking-modal__text" },
  DS = { class: "ecommerce-booking-modal__availability" },
  MS = { class: "ecommerce-booking-modal__time-title" },
  OS = { class: "ecommerce-booking-modal__calendar-wrapper" },
  LS = { class: "ecommerce-booking-modal__time-wrapper" },
  BS = { class: "ecommerce-booking-modal__selected-day" },
  AS = { class: "ecommerce-booking-modal__time-slot-wrapper" },
  xS = { key: 0, class: "ecommerce-booking-modal__time-slot-loader" },
  RS = ["onClick"],
  NS = { class: "ecommerce-booking-modal__buttons" },
  HS = ["disabled"];
function $S(e, n, a, t, o, i) {
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
          default: ve(() => [
            I("div", vS, [
              I("div", hS, [
                I("div", fS, [
                  I("p", yS, J(e.title), 1),
                  I("div", bS, [
                    I("div", _S, [
                      wS,
                      I("p", kS, J(e.formattedSelectedDate), 1),
                    ]),
                    I("div", SS, [
                      TS,
                      I(
                        "p",
                        CS,
                        J(e.calculatedTime) +
                          " (" +
                          J(e.aggregatedDuration) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                  I("div", PS, [IS, I("p", ES, J(e.location), 1)]),
                ]),
                I("div", DS, [
                  I("p", MS, J(e.translations.selectDateAndTime), 1),
                  I("div", OS, [
                    Ee(
                      r,
                      {
                        modelValue: e.selectedDate,
                        "onUpdate:modelValue":
                          n[0] || (n[0] = (l) => (e.selectedDate = l)),
                        inline: "",
                        "hide-offset-dates": "",
                        "auto-apply": "",
                        class: X([
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
                        "calendar-header": ve(({ index: l }) => [
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
                    I("div", LS, [
                      I("div", null, [
                        I("p", BS, J(e.selectedMonthAndWeekday), 1),
                      ]),
                      I("div", AS, [
                        e.isSlotsLoading
                          ? (c(), h("div", xS))
                          : (c(!0),
                            h(
                              ge,
                              { key: 1 },
                              ke(
                                e.timeSlots,
                                (l, d) => (
                                  c(),
                                  h(
                                    "button",
                                    {
                                      key: `time-${d}`,
                                      class: X([
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
                                    RS
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
              I("div", NS, [
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
                    class: X([
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
                  HS
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
const US = oe(pS, [["render", $S]]),
  VS = ie({
    name: "EcommerceModalContent",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: "success" },
    },
    emits: ["handle-close"],
  }),
  YS = { class: "payment-info" },
  FS = { class: "payment-info__content" },
  WS = { class: "payment-info__title" },
  qS = { class: "payment-info__text body-large" };
function GS(e, n, a, t, o, i) {
  const r = je("qa");
  return ce(
    (c(),
    h("div", YS, [
      I("div", FS, [
        I("h5", WS, J(e.title), 1),
        I("p", qS, J(e.text), 1),
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
const To = oe(VS, [
    ["render", GS],
    ["__scopeId", "data-v-98b20e5c"],
  ]),
  jS = ie({
    components: { ModalLayout: dn, ModalContent: To },
    props: { translations: { type: Object, default: () => {} } },
  });
function zS(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: ve(() => [
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
const KS = oe(jS, [["render", zS]]),
  QS = ie({
    components: { ModalLayout: dn, ModalContent: To },
    props: { translations: { type: Object, default: () => {} } },
  });
function ZS(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: ve(() => [
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
const XS = oe(QS, [["render", ZS]]),
  JS = ie({
    __name: "EcommerceCheckoutSuccess",
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isEcommerceStoreCreated: t, setShoppingCartItems: o } = Ht(),
        i = L({
          title: a.translations.checkoutModalThanksForOrder,
          text: a.translations.checkoutModalOrderReceived,
          buttonText: a.translations.gotIt,
          modalType: "success-order",
        }),
        r = L(null);
      De(() => {
        o([]);
        const d = new URLSearchParams(window.location.search).get("product");
        d === Nt
          ? (i.value = {
              title: a.translations.checkoutModalThanksForOrder,
              text: a.translations.checkoutModalSuccessfullyBooked,
              buttonText: a.translations.gotIt,
              modalType: "success-orderbooking",
            })
          : d === mr &&
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
        ModalContent: To,
        ModalLayout: dn,
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
function eT(e, n, a, t, o, i) {
  return t.isEcommerceStoreCreated
    ? (c(),
      W(
        t.ModalLayout,
        { key: 0, ref: "modalRef" },
        {
          default: ve(() => [
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
const tT = oe(JS, [["render", eT]]),
  aT = ie({
    components: { CloseButton: Kr },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = Rt(),
        n = setTimeout(() => {
          e();
        }, 6e3);
      return (
        Ct(() => {
          clearTimeout(n);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  nT = (e) => (Ot("data-v-2b2551b7"), (e = e()), Lt(), e),
  oT = { class: "notification" },
  rT = nT(() =>
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
  iT = { class: "notification__content" };
function sT(e, n, a, t, o, i) {
  const r = Be("CloseButton"),
    s = je("qa");
  return (
    c(),
    W(
      Et,
      { name: "fade" },
      {
        default: ve(() => [
          ce(
            (c(),
            h("div", oT, [
              rT,
              I("p", iT, J(e.translations.checkoutModalDisabledPreview), 1),
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
const lT = oe(aT, [
    ["render", sT],
    ["__scopeId", "data-v-2b2551b7"],
  ]),
  uT = ie({
    components: { ModalLayout: dn, ModalContent: To },
    props: { translations: { type: Object, default: () => {} } },
  });
function cT(e, n, a, t, o, i) {
  const r = Be("ModalContent"),
    s = Be("ModalLayout");
  return (
    c(),
    W(
      s,
      { ref: "modal" },
      {
        default: ve(() => [
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
const dT = oe(uT, [["render", cT]]),
  mT = "open-modal",
  gT = ie({
    components: {
      EcommerceProductPreview: u_,
      EcommerceBookingEventSelect: US,
      EcommerceBookingUnavailable: KS,
      EcommerceCheckoutFailed: XS,
      EcommerceCheckoutSuccess: tT,
      EcommerceMessageButtonDisabled: lT,
      EcommerceOutOfStock: dT,
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
      } = Rt();
      return (
        De(() => {
          const o = new URLSearchParams(window.location.search).get(mT);
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
function pT(e, n, a, t, o, i) {
  return e.openEcommerceModalName
    ? (c(),
      W(
        un(e.openEcommerceModalName),
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
const vT = oe(gT, [["render", pT]]),
  hT = ie({
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
  fT = { class: "flag" },
  yT = ["src", "alt"],
  bT = I("div", { class: "flag__shadow" }, null, -1);
function _T(e, n, a, t, o, i) {
  return (
    c(),
    h("div", fT, [
      I("img", { class: "flag__img", src: a.src, alt: a.alt }, null, 8, yT),
      bT,
    ])
  );
}
const wT = oe(hT, [["render", _T]]),
  kT = ie({
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
              src: `${wc}/${r.flagPath}`,
              alt: `${r.locale} flag`,
            }))
        ),
        o = u(() => t.value.find(({ locale: r }) => r === a.currentLocale)),
        i = {
          props: a,
          languageSwitcherLanguages: t,
          selectedLanguage: o,
          Flag: wT,
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
  ST = { ref: "languageSwitcher", class: "language-switcher", tabindex: "0" },
  TT = { class: "language-switcher__button" },
  CT = { key: 1, class: "language-switcher__locale" },
  PT = I(
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
  IT = { class: "language-switcher__dropdown-area" },
  ET = { class: "language-switcher__dropdown" },
  DT = ["href"];
function MT(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      ST,
      [
        ce(
          (c(),
          h("div", TT, [
            t.selectedLanguage?.country
              ? ce(
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
              : (c(), h("div", CT, J(t.selectedLanguage?.locale), 1)),
            PT,
          ])),
          [[r, "navigation-language-switcher"]]
        ),
        I("div", IT, [
          I("ul", ET, [
            (c(!0),
            h(
              ge,
              null,
              ke(t.languageSwitcherLanguages, (s) =>
                ce(
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
                          class: X([
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
                        DT
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
const OT = oe(kT, [["render", MT]]),
  LT = ie({
    __name: "ZyroHamburger",
    props: {
      title: { type: String, default: "Menu" },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: "var(--nav-link-text-color)" },
    },
    setup(e, { expose: n }) {
      n(), lt((i) => ({ "165ebbac": t.value }));
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
  fi = (e) => (Ot("data-v-ccf9b649"), (e = e()), Lt(), e),
  BT = ["title"],
  AT = fi(() => I("span", { class: "burger__bun" }, null, -1)),
  xT = fi(() => I("span", { class: "burger__meat" }, null, -1)),
  RT = fi(() => I("span", { class: "burger__bun" }, null, -1)),
  NT = [AT, xT, RT];
function HT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "button",
      {
        type: "button",
        class: X(["burger", { "burger--open": a.isOpen }]),
        title: a.title,
      },
      NT,
      10,
      BT
    )
  );
}
const $T = oe(LT, [
    ["render", HT],
    ["__scopeId", "data-v-ccf9b649"],
  ]),
  UT = ie({
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
function VT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      "div",
      {
        class: X([
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
const YT = oe(UT, [["render", VT]]),
  FT = ie({
    __name: "BlockHeaderCart",
    props: { cartIconSize: {}, cartText: {}, itemsInCart: {}, cartUrl: {} },
    emits: ["cart-click"],
    setup(e, { expose: n, emit: a }) {
      n(), lt((s) => ({ "0869983e": i.value }));
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
  WT = (e) => (Ot("data-v-8511a203"), (e = e()), Lt(), e),
  qT = { class: "block-header-cart-wrapper" },
  GT = ["href"],
  jT = { class: "block-header-cart__icon-container" },
  zT = WT(() =>
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
  KT = { class: "block-header-cart__cart-text" };
function QT(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h("div", qT, [
      I(
        "a",
        { href: a.cartUrl, class: "block-header-cart" },
        [
          ce(
            (c(),
            h(
              "button",
              {
                class: "block-header-cart__button",
                title: "Go to cart",
                onClick: n[0] || (n[0] = (s) => t.emit("cart-click")),
              },
              [
                I("div", jT, [
                  zT,
                  I("span", null, [
                    I("span", KT, J(a.cartText), 1),
                    Ae(" (" + J(a.itemsInCart) + ")", 1),
                  ]),
                ]),
              ]
            )),
            [[r, "header-btn-shoppingbag"]]
          ),
        ],
        8,
        GT
      ),
    ])
  );
}
const ZT = oe(FT, [
    ["render", QT],
    ["__scopeId", "data-v-8511a203"],
  ]),
  XT = ie({
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
  JT = (e) => (Ot("data-v-04741be4"), (e = e()), Lt(), e),
  eC = ["target", "rel", "href", "textContent"],
  tC = ["textContent"],
  aC = { key: 2, class: "item-content__icon-container-wrapper" },
  nC = JT(() =>
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
  oC = [nC];
function rC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "div",
      {
        class: X([
          "item-content-wrapper",
          { "item-content-wrapper--active": a.item.isCurrent },
        ]),
      },
      [
        a.item.href
          ? ce(
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
                eC
              )),
              [[r, t.linkDataQa]]
            )
          : ce(
              (c(),
              h(
                "span",
                { key: 1, class: "item-content", textContent: J(a.item.name) },
                null,
                8,
                tC
              )),
              [[r, t.linkDataQa]]
            ),
        a.item.hasDropdown ? (c(), h("div", aC, oC)) : O("", !0),
      ],
      2
    )
  );
}
const iC = oe(XT, [
    ["render", rC],
    ["__scopeId", "data-v-04741be4"],
  ]),
  sC = ie({
    __name: "BlockHeaderItem",
    props: { item: {}, areDropdownsHidden: { type: Boolean } },
    setup(e, { expose: n }) {
      n();
      const t = { props: e, BlockHeaderItemContent: iC };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  lC = { class: "block-header-item" },
  uC = { class: "block-header-item__label" },
  cC = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger",
  },
  dC = { key: 1, class: "block-header-item__dropdown-area" },
  mC = { class: "block-header-item__dropdown" };
function gC(e, n, a, t, o, i) {
  const r = Be("BlockHeaderItem", !0),
    s = je("qa");
  return (
    c(),
    h("li", lC, [
      I("label", uC, [
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(), h("input", cC))
          : O("", !0),
        ce(
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
            h("div", dC, [
              I("ul", mC, [
                (c(!0),
                h(
                  ge,
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
const pC = oe(sC, [
    ["render", gC],
    ["__scopeId", "data-v-cfb02be7"],
  ]),
  vC = ie({
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
        lt((m) => ({
          "0c92dd22": r.value,
          "234ca29e": o.value,
          db96c802: l.value,
          "2b0f8ad0": s.value,
          "1d12d55d": i.value,
          "62b79fbe": d.value,
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
        d = u(() => a.objectPositionMobile),
        g = {
          props: a,
          logoAltTag: t,
          height: o,
          mHeight: i,
          width: r,
          mWidth: s,
          objectPosition: l,
          mObjectPosition: d,
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
  hC = ["href"],
  fC = ["innerHTML"],
  yC = ["src", "alt"];
function bC(e, n, a, t, o, i) {
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
              fC
            ))
          : t.props.logoSrc
          ? ce(
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
                yC
              )),
              [[r, "builder-siteheader-img-logo"]]
            )
          : O("", !0),
      ],
      8,
      hC
    )
  );
}
const _C = oe(vC, [
    ["render", bC],
    ["__scopeId", "data-v-83dc91a0"],
  ]),
  wC = ie({
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
      n(), lt((m) => ({ "3c28effe": d.value, b96ef066: s.value }));
      const a = e,
        t = L(null),
        o = L(null),
        i = L(0),
        r = cv(o),
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
        d = u(
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
          (m) => {
            m
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
        nonCenteredLayoutColumns: d,
        get BLOCK_HEADER_LAYOUTS() {
          return kc;
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
  kC = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3",
  },
  SC = { class: "block-header-layout-desktop__right-side" },
  TC = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4",
  },
  CC = { class: "block-header-layout-desktop__right-side" },
  PC = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5",
  },
  IC = { class: "block-header-layout-desktop__right-side" };
function EC(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ge,
      null,
      [
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_1 ||
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_2
          ? (c(),
            h(
              "div",
              {
                key: 0,
                class: X(
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
            h("div", kC, [
              ee(e.$slots, "logo", {}, void 0, !0),
              ee(e.$slots, "nav", {}, void 0, !0),
              I("div", SC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_4
          ? (c(),
            h("div", TC, [
              ee(e.$slots, "nav", {}, void 0, !0),
              ee(e.$slots, "logo", {}, void 0, !0),
              I("div", CC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "social-icons", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_5
          ? (c(),
            h("div", PC, [
              ee(e.$slots, "logo", {}, void 0, !0),
              ee(e.$slots, "social-icons", {}, void 0, !0),
              ee(e.$slots, "nav", {}, void 0, !0),
              I("div", IC, [
                ee(e.$slots, "language-switcher", {}, void 0, !0),
                ee(e.$slots, "cart", {}, void 0, !0),
                ee(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : O("", !0),
        I(
          "div",
          {
            class: X([
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
                class: X([
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
const DC = oe(wC, [
    ["render", EC],
    ["__scopeId", "data-v-3b3f462d"],
  ]),
  MC = ie({
    __name: "BlockHeaderButton",
    props: { elementId: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Ze(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          content: d,
          fontSizeMobile: g,
          fontSizeDesktop: m,
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
          mobileElementWidth: R,
          mobileElementHeight: N,
        } = Nn(a, {
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
          content: d,
          fontSizeMobile: g,
          fontSizeDesktop: m,
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
          mobileElementWidth: R,
          mobileElementHeight: N,
          GridButton: Va,
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
function OC(e, n, a, t, o, i) {
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
const LC = oe(MC, [["render", OC]]),
  BC = ie({
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
        { hasUserScrolled: i } = vl(),
        r = L(null),
        s = u(() => t.socialIconsLinks.length > 0),
        l = u(() => !!Object.keys(t.buttonElementData).length),
        d = u(() => i.value && t.isSticky),
        g = u(() => (t.isSticky && !i.value) || !t.isSticky),
        m = u(() => t.isTransparent && g.value && !t.isOpen),
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
        yo(r, () => {
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
        isWithShadow: d,
        shouldForceTransparency: g,
        isCurrentlyTransparent: m,
        computedStyles: p,
        LanguageSwitcher: OT,
        ZyroHamburger: $T,
        BlockHeaderBackground: YT,
        BlockHeaderCart: ZT,
        BlockHeaderItem: pC,
        BlockHeaderLogo: _C,
        BlockHeaderLayout: DC,
        get BLOCK_HEADER_CLASS() {
          return dl;
        },
        GridSocialIcons: Cl,
        BlockHeaderButton: LC,
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
  AC = { class: "block-header__nav-links" };
function xC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    h(
      "header",
      {
        ref: "headerRef",
        class: X({
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
            "hamburger-menu": ve(() => [
              t.props.items.length || t.props.isLanguageSwitcherVisible
                ? ce(
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
            logo: ve(() => [
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
            nav: ve(() => [
              I(
                "nav",
                {
                  class: "block-header__nav",
                  onClick: n[2] || (n[2] = (s) => t.emit("navigation-click")),
                },
                [
                  ce(
                    (c(),
                    h("ul", AC, [
                      (c(!0),
                      h(
                        ge,
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
            "social-icons": ve(() => [
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
            "language-switcher": ve(() => [
              t.props.isLanguageSwitcherVisible
                ? (c(),
                  W(
                    t.LanguageSwitcher,
                    {
                      key: 0,
                      class: X([
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
            cart: ve(() => [
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
            button: ve(() => [
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
const RC = oe(BC, [
    ["render", xC],
    ["__scopeId", "data-v-e93100a8"],
  ]),
  NC = (e) => {
    const a = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: a };
  },
  HC = (e) => e && Object.values(e).some((n) => qd.includes(n.type)),
  $C = (e) =>
    e && Object.values(e).some((n) => n?.type === "GridEcommerceButton"),
  Lu = ({ blocks: e, elements: n }) => $C(n) || HC(e),
  UC = ({
    siteId: e,
    meta: n,
    blocks: a,
    nav: t,
    pages: o,
    elements: i,
    languageMetaTitle: r,
    languageSwitcherLanguages: s,
    currentLocale: l,
    currentPageId: d,
    isLogoOptimized: g,
    shoppingCartItems: m,
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
        fontWeight: R,
        fontFamily: N,
        navLinkTextColor: Q,
        navLinkTextColorHover: G,
      } = a.header,
      { imageOrigin: P, imagePath: B } = C,
      {
        cartText: $,
        isCartVisible: K,
        isLanguageSwitcherHidden: V,
        isSticky: E,
        logoPlacement: Y,
        navigationPlacement: U,
        showLogo: j,
        styles: k,
        logoImageOrigin: v,
        logoImagePath: F,
        logoSvg: q,
        headerLayout: te,
        mHeaderLayout: Z,
        isMobileMenuDropdownFullScreen: x,
        mobileLinksAlignment: _,
      } = M,
      ae = Object.keys(S).length > 0,
      he = Lu({ blocks: a, elements: i }),
      le = { ...xt(k), ...NC(C) },
      be = () => {
        if (!g) return xr(v, F, e);
        const Ke = Number.parseInt(k["logo-width"], 10);
        return it(v, F, e, { width: Ke * 2, quality: 95 });
      },
      de = () => it(P, B, e, { width: pa }),
      z = (Ke) => {
        const {
          navItemId: sa,
          linkType: la,
          linkedPageId: Zt,
          isHidden: H,
          rel: re,
          href: Te,
          target: Le,
          name: Qe,
          subItems: yt = [],
        } = Ke;
        return {
          navItemId: sa,
          hasDropdown: !!yt.length,
          isCurrent: d === Zt,
          subItems: yt.map(z),
          target: Le,
          name: la === Li ? o[Zt]?.name : Qe,
          isHidden: H,
          rel: re,
          href: la === Li ? b({ pageId: Zt }) : Te,
          locale: l,
        };
      },
      se = t.filter(({ isHidden: Ke }) => !Ke).map(z),
      Me = K && (ae || he),
      me = !!s.length && !V && l !== At,
      Ue = () => (T || he ? m.length : K ? p : 0),
      mt = () => {
        if (!S || !Object.keys(S).length) return null;
        const [Ke] = Object.keys(S);
        return `${b({ pageId: Ke })}?store-page=cart`;
      },
      Ut = r ?? n.metaTitle,
      Dt = a.header.components.find((Ke) => i[Ke].type === cl),
      ha = i[Dt]?.links || [],
      fa = i[Dt]?.settings?.styles || {},
      ya = a.header.components.find((Ke) => i[Ke].type === ul),
      Qt = i[ya];
    return {
      background: C,
      backgroundColor: C.color,
      backgroundImageUrl: de(),
      backgroundColorContrast: k.contrastBackgroundColor,
      cartText: $,
      cartIconSize: k.cartIconSize,
      cartUrl: mt(),
      currentLocale: l,
      height: w,
      heightMobile: y,
      fontFamily: N,
      navLinkTextColor: Q,
      navLinkTextColorHover: G,
      fontWeight: R,
      isTransparent: C.isTransparent,
      items: se,
      isCartVisible: Me,
      itemsInCart: Ue(),
      isSticky: E,
      isLanguageSwitcherVisible: me,
      isLogoVisible: j,
      isLogoOptimized: g,
      isOpen: f,
      languageSwitcherLanguages: s,
      logoHeight: a.header?.desktop?.logoHeight,
      logoHref: l !== D && l !== At ? `/${l}` : "/",
      logoHeightMobile: a.header?.mobile?.logoHeight,
      logoMaxWidth: k["logo-width"],
      logoMaxWidthMobile: k["m-logo-width"],
      logoObjectPosition: k["logo-image-object-position"],
      logoObjectPositionMobile: k["m-logo-image-object-position"],
      logoPlacement: Y,
      logoPlacementMobile: M["m-logoPlacement"] || Y,
      logoSrc: be(),
      logoSvg: q,
      style: le,
      siteName: Ut,
      socialIconsLinks: ha,
      socialIconsStyles: fa,
      buttonElementId: ya,
      buttonElementData: Qt,
      navigationPlacement: U,
      navigationPlacementMobile: M["m-navigationPlacement"] || U,
      headerLayout: te,
      mHeaderLayout: Z,
      isMobileMenuDropdownFullScreen: x,
      mobileLinksAlignment: _,
    };
  };
function VC(e) {
  if (Array.isArray(e)) {
    for (var n = 0, a = Array(e.length); n < e.length; n++) a[n] = e[n];
    return a;
  } else return Array.from(e);
}
var yi = !1;
if (typeof window < "u") {
  var Js = {
    get passive() {
      yi = !0;
    },
  };
  window.addEventListener("testPassive", null, Js),
    window.removeEventListener("testPassive", null, Js);
}
var Bu =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  Xa = [],
  go = !1,
  bi = -1,
  Mn = void 0,
  On = void 0,
  Au = function (n) {
    return Xa.some(function (a) {
      return !!(a.options.allowTouchMove && a.options.allowTouchMove(n));
    });
  },
  po = function (n) {
    var a = n || window.event;
    return Au(a.target) || a.touches.length > 1
      ? !0
      : (a.preventDefault && a.preventDefault(), !1);
  },
  YC = function (n) {
    if (On === void 0) {
      var a = !!n,
        t = window.innerWidth - document.documentElement.clientWidth;
      a &&
        t > 0 &&
        ((On = document.body.style.paddingRight),
        (document.body.style.paddingRight = t + "px"));
    }
    Mn === void 0 &&
      ((Mn = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  FC = function () {
    On !== void 0 && ((document.body.style.paddingRight = On), (On = void 0)),
      Mn !== void 0 && ((document.body.style.overflow = Mn), (Mn = void 0));
  },
  WC = function (n) {
    return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1;
  },
  qC = function (n, a) {
    var t = n.targetTouches[0].clientY - bi;
    return Au(n.target)
      ? !1
      : (a && a.scrollTop === 0 && t > 0) || (WC(a) && t < 0)
      ? po(n)
      : (n.stopPropagation(), !0);
  },
  GC = function (n, a) {
    if (!n) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !Xa.some(function (o) {
        return o.targetElement === n;
      })
    ) {
      var t = { targetElement: n, options: {} };
      (Xa = [].concat(VC(Xa), [t])),
        Bu
          ? ((n.ontouchstart = function (o) {
              o.targetTouches.length === 1 && (bi = o.targetTouches[0].clientY);
            }),
            (n.ontouchmove = function (o) {
              o.targetTouches.length === 1 && qC(o, n);
            }),
            go ||
              (document.addEventListener(
                "touchmove",
                po,
                yi ? { passive: !1 } : void 0
              ),
              (go = !0)))
          : YC(a);
    }
  },
  jC = function () {
    Bu
      ? (Xa.forEach(function (n) {
          (n.targetElement.ontouchstart = null),
            (n.targetElement.ontouchmove = null);
        }),
        go &&
          (document.removeEventListener(
            "touchmove",
            po,
            yi ? { passive: !1 } : void 0
          ),
          (go = !1)),
        (bi = -1))
      : FC(),
      (Xa = []);
  };
const zC = ie({
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
          handleLightboxNav: d,
          goToNextImage: g,
          goToPreviousImage: m,
        } = tn(),
        p = L(null),
        { enableMoveEvents: f } = xl({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: g,
          onMoveRight: m,
        });
      return (
        De(() => {
          yo(p, (b) => {
            b.target.matches("[data-lightbox-button],[data-lightbox-nav]") ||
              t();
          }),
            f(),
            window.document.addEventListener("keydown", d);
        }),
        Ct(() => {
          t(), f(!1), document.removeEventListener("keydown", d);
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
          goToPreviousImage: m,
          lightboxRef: p,
        }
      );
    },
    async mounted() {
      await this.$nextTick(), GC(this.$refs.lightboxRef);
    },
    beforeUnmount() {
      jC();
    },
  }),
  KC = { key: 0, class: "lightbox", role: "dialog", "aria-modal": "true" },
  QC = { class: "lightbox__container" },
  ZC = I(
    "button",
    {
      class: "lightbox__button lightbox__button--nav lightbox__button--prev",
      "data-lightbox-button": "",
    },
    null,
    -1
  ),
  XC = [ZC],
  JC = ["src", "alt"],
  eP = I(
    "button",
    {
      "data-lightbox-button": "",
      class: "lightbox__button lightbox__button--nav lightbox__button--next",
    },
    null,
    -1
  ),
  tP = [eP];
function aP(e, n, a, t, o, i) {
  return (
    c(),
    W(
      Et,
      { name: "fade", appear: "" },
      {
        default: ve(() => [
          e.isLightboxOpen
            ? (c(),
              h("div", KC, [
                I("button", {
                  class: "lightbox__button lightbox__button--close",
                  title: "close-ligthbox-button",
                  "data-lightbox-button": "",
                  onClick:
                    n[0] ||
                    (n[0] = (...r) => e.closeLightbox && e.closeLightbox(...r)),
                }),
                I("div", QC, [
                  I(
                    "div",
                    {
                      class: X([
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
                    XC,
                    2
                  ),
                  Ee(
                    Et,
                    { name: "fade", mode: "out-in" },
                    {
                      default: ve(() => [
                        (c(),
                        h(
                          "img",
                          {
                            key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                            ref: "lightboxRef",
                            class: X([
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
                          JC
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  I(
                    "div",
                    {
                      class: X([
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
                    tP,
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
const nP = oe(zC, [["render", aP]]),
  oP = ie({
    __name: "Page",
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isPreviewMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), lt((Ce) => ({ "13dc1470": me.value }));
      const a = e,
        {
          pages: t,
          blocks: o,
          elements: i,
          nav: r,
          meta: s,
          metaTitle: l,
          ecommerceShoppingCart: d,
          cookieBannerDisclaimer: g,
          cookieBannerAcceptText: m,
          cookieBannerDeclineText: p,
          currentLocale: f,
          languageKeys: b,
          ecwidPages: S,
          languageSwitcherLanguages: T,
          siteId: w,
          homePageId: y,
          styles: D,
          isNavHidden: C,
          currentPageId: M,
          currentPageData: R,
          getPagePathFromId: N,
          setPageData: Q,
        } = Ze(),
        {
          isStoreTypeZyro: G,
          shoppingCartItems: P,
          setShoppingCartOpen: B,
        } = Ht(),
        { openEcwidHomepage: $, openCart: K, ecwidCartItemCount: V } = hl(),
        { isLightboxOpen: E } = tn(),
        Y = Ec(),
        { shouldMountAnimationsInPreview: U } = an(),
        j = L(!1),
        k = L(null),
        v = L(0),
        { width: F } = lv(k),
        q = u(() => R.value.type),
        te = u(() => xt(D.value)),
        Z = u(() => !C.value),
        x = u(() => M.value === y.value),
        _ = u(() => t.value?.[y.value]?.name ?? ""),
        ae = u(() => o.value.header.settings.isSticky),
        he = u(() => {
          if (!R.value?.meta?.password || a.isInPreviewMode) return !0;
          const { isPageOpen: Ce } = Vl({
            pagePassword: R.value?.meta?.password ?? "",
            locale: f.value,
            pageId: M.value,
          });
          return Ce.value;
        }),
        le = u(() => {
          if (!R.value || R.value.footerSlotIsHidden) return [];
          const Ce = Object.keys(o.value).find(
            (ue) => o.value[ue].slot === "footer"
          );
          return Ce ? [Ce] : [];
        }),
        be = u(() => a.pageData.siteBlocks || {}),
        de = u(() =>
          R.value
            ? [...R.value.blocks.filter((Ce) => Ce !== Bi), ...le.value]
            : []
        ),
        z = u(() =>
          UC({
            siteId: w.value,
            meta: s.value,
            blocks: o.value,
            nav: r.value,
            pages: t.value,
            elements: i.value,
            languageMetaTitle: l.value,
            currentLocale: f.value,
            currentPageId: M.value,
            languageSwitcherLanguages: T.value,
            isLogoOptimized: !0,
            shoppingCartItems: P.value,
            ecwidCartItemCount: V.value,
            getPagePathFromId: ({ pageId: Ce }) => N({ pageId: Ce }),
            isOpen: j.value,
            ecwidPages: S.value,
          })
        ),
        se = u(() => z.value.height),
        Me = u(() => z.value.heightMobile),
        me = u(() => `${Me.value + v.value}px`),
        Ue = u(() => de.value.map((Ce) => o.value[Ce])),
        mt = u(() => Lu({ blocks: o.value, elements: i.value })),
        Ut = u(() => s.value.defaultLocale ?? At),
        Dt = u(() => (G.value ? d.value?.translations ?? {} : {})),
        ha = u(() => (G.value ? d.value?.lang ?? "en" : null)),
        fa = u(() =>
          mt.value
            ? Ue.value.filter((Ce) =>
                ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(
                  Ce.type
                )
              )
            : []
        ),
        ya = u(() =>
          mt.value
            ? Object.keys(i.value)
                ?.filter((ue) => i.value[ue].type === "GridEcommerceButton")
                .filter((ue) =>
                  Ue.value.some((Se) => Se.components?.includes(ue))
                )
                .map((ue) => i.value[ue])
            : []
        ),
        Qt = u(() => de.value.find((Ce) => !o.value[Ce][La]?.isHidden)),
        Ke = u(() => de.value.find((Ce) => !o.value[Ce][Jt]?.isHidden)),
        sa = u(() => {
          const { isTransparent: Ce } = o.value.header.background ?? {};
          if (Ce && Z.value && Me.value) return `${Me.value}px`;
        }),
        la = u(() => {
          const { isTransparent: Ce } = o.value.header.background ?? {};
          if (Ce && Z.value && se.value) return `${se.value}px`;
        }),
        Zt = (Ce) => ({
          ...(Qt.value === Ce && { "--header-height": la.value }),
          ...(Ke.value === Ce && { "--header-height-mobile": sa.value }),
        }),
        H = u(() => {
          const [Ce] = R.value?.blocks ?? [];
          if (o.value?.[Ce]?.background?.current === "image")
            return { type: "block-background", id: Ce };
          if (o.value?.[Ce]?.type === "BlockBlogList")
            return { type: "block-blog-list", id: Ce };
          if (o.value?.[Ce]?.type === "BlockEcommerceProduct")
            return { type: "block-ecommerce-product", id: Ce };
          if (o.value?.[Ce]?.type === "BlockEcommerceProductList")
            return { type: "block-ecommerce-product-list", id: Ce };
          const Se = de.value
            .filter((_e) => o.value[_e]?.components?.length > 0)
            .flatMap((_e) =>
              o.value[_e].components.map((ot) => ({
                blockId: _e,
                elementId: ot,
              }))
            )
            .filter(({ elementId: _e }) => i.value[_e]?.type === "GridImage")
            .map(({ blockId: _e, elementId: ot }) => {
              const vt = i.value[ot],
                ba = vt.mobile ?? vt.desktop,
                { width: Co, height: _i } =
                  ba ?? xc(o.value[_e], vt.settings.styles.position);
              return { elementId: ot, imageRatio: _i / Co };
            })[0];
          return Se ? { type: "grid-image", id: Se?.elementId } : {};
        }),
        re = ({ hash: Ce, isPreviewMode: ue }) => {
          Ce || window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
            nr({ linkToSection: Ce, isPreviewMode: ue });
        },
        Te = () => {
          mt.value && B(!0);
        },
        Le = (Ce) => {
          const { target: ue, href: Se } = Ce,
            ot =
              ue === "_blank" || Na() || a.isInPreviewMode ? "_blank" : "_self";
          window.open(Se, ot);
        },
        Qe = async (Ce) => {
          if (!Ce.target) return;
          const ue = Ce.target.closest("a");
          if (!ue) return;
          const {
            href: Se,
            pathname: _e,
            origin: ot,
            hash: vt,
            target: ba,
            search: Co,
          } = ue;
          if (!Se) return;
          if ((Ce.preventDefault(), window.location.origin !== ot)) {
            Le(ue);
            return;
          }
          const { slug: wi } = Hc({
              path: _e,
              languageKeys: b.value,
              defaultLocale: Ut.value,
            }),
            xu = wi
              ? Object.keys(t.value).find(($u) => t.value[$u].slug === wi)
              : y.value,
            Ru = window.location.pathname === _e,
            Po = new URLSearchParams(Co).get("store-page"),
            Nu = Object.keys(S.value).includes(xu),
            ki = !!Po || Nu,
            Io = ba === "_blank",
            Eo = Se.replace(ot, ""),
            Hu = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          if (
            (Ru && !Io && re({ hash: vt, isPreviewMode: a.isInPreviewMode }),
            Io && !a.isInPreviewMode && !Na()
              ? window.open(Se, ba)
              : ((Io && a.isInPreviewMode) || Hu !== Eo) &&
                (ki
                  ? window.location.assign(Se)
                  : a.isInPreviewMode
                  ? Y.push(Eo)
                  : window.location.assign(Eo),
                vt && re({ hash: vt, isPreviewMode: a.isInPreviewMode }),
                (j.value = !1)),
            !!ki)
          ) {
            if (!Po) {
              if (!window.Ecwid) return;
              $();
              return;
            }
            Po === "cart" && K();
          }
        };
      Ne(
        () => a.pageData,
        (Ce) => {
          Q(Ce);
        },
        { immediate: !0 }
      ),
        Ne(
          () => a.pageData,
          async () => {
            a.isInPreviewMode && (U.value = !0);
          }
        ),
        De(() => {
          (v.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0),
            re({
              hash: window.location.hash,
              isPreviewMode: a.isInPreviewMode,
            });
        });
      const yt = {
        props: a,
        pages: t,
        blocks: o,
        elements: i,
        nav: r,
        meta: s,
        metaTitle: l,
        ecommerceShoppingCart: d,
        cookieBannerDisclaimer: g,
        cookieBannerAcceptText: m,
        cookieBannerDeclineText: p,
        currentLocale: f,
        languageKeys: b,
        ecwidPages: S,
        languageSwitcherLanguages: T,
        siteId: w,
        homePageId: y,
        styles: D,
        isNavHidden: C,
        currentPageId: M,
        currentPage: R,
        getPagePathFromId: N,
        setPageData: Q,
        isStoreTypeZyro: G,
        shoppingCartItems: P,
        setShoppingCartOpen: B,
        openEcwidHomepage: $,
        openCart: K,
        ecwidCartItemCount: V,
        isLightboxOpen: E,
        router: Y,
        shouldMountAnimationsInPreview: U,
        isNavOpen: j,
        blockListRef: k,
        stickyBarHeight: v,
        screenWidth: F,
        currentPageType: q,
        pageCSSVars: te,
        isHeaderVisible: Z,
        isCurrentPageHomepage: x,
        homepageName: _,
        isHeaderSettingsSticky: ae,
        shouldRenderPage: he,
        pageBlocksSlotFooter: le,
        siteBlocks: be,
        currentPageBlocks: de,
        headerProps: z,
        headerHeight: se,
        headerHeightMobile: Me,
        topBarHeightMobilePx: me,
        currentPageBlockData: Ue,
        isLocaleWithEcommerceItems: mt,
        defaultLocale: Ut,
        ecommerceTranslations: Dt,
        language: ha,
        currentPageEcommerceBlocks: fa,
        currentPageEcommerceComponents: ya,
        firstVisibleDesktopBlockId: Qt,
        firstVisibleMobileBlockId: Ke,
        visibleMobileHeaderHeight: sa,
        visibleDesktopHeaderHeight: la,
        getHeaderHeightStyles: Zt,
        lcp: H,
        scrollToHash: re,
        handleCartClick: Te,
        redirectToThirdPartyLink: Le,
        handleGlobalClick: Qe,
        StickyTrigger: Bc,
        CookieBanner: nd,
        BlockUser: Gy,
        BlockStickyBarProviderUser: Xy,
        PasswordPage: hb,
        EcommerceShoppingCartProviderUser: a_,
        EcommerceModalRoot: vT,
        BlockHeader: RC,
        Lightbox: nP,
        get BLOCK_STICKY_BAR_ID() {
          return Bi;
        },
      };
      return (
        Object.defineProperty(yt, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        yt
      );
    },
  }),
  rP = { ref: "blockListRef", class: "blocks" };
function iP(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ge,
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
                    class: X([
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
                  rP,
                  [
                    (c(!0),
                    h(
                      ge,
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
const gP = oe(oP, [["render", iP]]);
export { gP as default };
