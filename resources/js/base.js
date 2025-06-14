var APP = APP || {};

APP.namespace = function (ns_string) {
  var parts = ns_string.split("."),
    parent = APP,
    i;
  if (parts[0] === "APP") {
    parts = parts.slice(1);
  }
  for (i = 0; i < parts.length; i += 1) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile() !== null || md.tablet() !== null;
const isTablet = md.tablet() !== null;
const mediaMb = window.matchMedia("screen and (max-width: 1440px)");
const isLangEn = document.documentElement.lang === "en";
gsap.registerPlugin(ScrollTrigger);
