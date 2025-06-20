/*!
 * fullPage 2.9.6 - Extensions 0.1.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, n) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], function (t) {
        return n(t, e, e.document, e.Math);
      })
    : "object" == typeof exports && exports
    ? (module.exports = n(require("jquery"), e, e.document, e.Math))
    : n(jQuery, e, e.document, e.Math);
})("undefined" != typeof window ? window : this, function (e, n, t, o, i) {
  "use strict";
  var r = "fullpage-wrapper",
    a = "." + r,
    l = "fp-responsive",
    s = "fp-notransition",
    c = "fp-destroyed",
    d = "fp-enabled",
    f = "fp-viewing",
    u = "active",
    p = "." + u,
    v = "fp-completely",
    h = "." + v,
    g = ".section",
    m = "fp-section",
    S = "." + m,
    y = S + p,
    w = S + ":first",
    b = S + ":last",
    x = "fp-tableCell",
    C = "." + x,
    T = "fp-auto-height",
    A = "fp-normal-scroll",
    M = "fp-nav",
    k = "#" + M,
    O = "fp-tooltip",
    R = "." + O,
    z = "fp-show-active",
    I = ".slide",
    L = "fp-slide",
    H = "." + L,
    E = H + p,
    B = "fp-slides",
    D = "." + B,
    P = "fp-slidesContainer",
    Y = "." + P,
    F = "fp-table",
    W = "fp-slidesNav",
    X = "." + W,
    V = X + " a",
    Z = "fp-controlArrow",
    N = "." + Z,
    j = "fp-prev",
    q = "." + j,
    G = Z + " " + j,
    U = N + q,
    Q = "fp-next",
    J = "." + Q,
    K = Z + " " + Q,
    _ = N + J,
    $ = e(n),
    ee = e(t);
  e.fn.fullpage = function (Z) {
    function q(n, t) {
      n || lt(0), mt("autoScrolling", n, t);
      var o = e(y);
      Z.autoScrolling && !Z.scrollBar
        ? (wt.css({ overflow: "hidden", height: "100%" }),
          Q(Qt.recordHistory, "internal"),
          zt.css({ "-ms-touch-action": "none", "touch-action": "none" }),
          o.length && lt(o.position().top))
        : (wt.css({ overflow: "visible", height: "initial" }),
          Q(!1, "internal"),
          zt.css({ "-ms-touch-action": "", "touch-action": "" }),
          ut(zt),
          o.length && wt.scrollTop(o.position().top)),
        zt.trigger("setAutoScrolling", [n]);
    }
    function Q(e, n) {
      mt("recordHistory", e, n);
    }
    function J(e, n) {
      "internal" !== n &&
        Z.fadingEffect &&
        xt.fadingEffect &&
        xt.fadingEffect.update(e),
        mt("scrollingSpeed", e, n);
    }
    function ne(e, n) {
      mt("fitToSection", e, n);
    }
    function te(e) {
      Z.lockAnchors = e;
    }
    function oe(e) {
      e ? ($n(), et()) : (_n(), nt());
    }
    function ie(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            ct(n, t, "m");
          }))
        : (ct(n, "all", "m"), n ? (oe(!0), tt()) : (oe(!1), ot()));
    }
    function re(n, t) {
      "undefined" != typeof t
        ? ((t = t.replace(/ /g, "").split(",")),
          e.each(t, function (e, t) {
            ct(n, t, "k");
          }))
        : (ct(n, "all", "k"), (Z.keyboardScrolling = n));
    }
    function ae() {
      var n = e(y).prev(S);
      n.length || (!Z.loopTop && !Z.continuousVertical) || (n = e(S).last()),
        n.length && qe(n, null, !0);
    }
    function le() {
      var n = e(y).next(S);
      n.length ||
        (!Z.loopBottom && !Z.continuousVertical) ||
        (n = e(S).first()),
        n.length && qe(n, null, !1);
    }
    function se(e, n) {
      J(0, "internal"), ce(e, n), J(Qt.scrollingSpeed, "internal");
    }
    function ce(e, n) {
      var t = Vn(e);
      "undefined" != typeof n ? Nn(e, n) : t.length > 0 && qe(t);
    }
    function de(e) {
      Ze("right", e);
    }
    function fe(e) {
      Ze("left", e);
    }
    function ue(n) {
      if (!zt.hasClass(c)) {
        (Lt = !0),
          (It = $.height()),
          e(S).each(function () {
            var n = e(this).find(D),
              t = e(this).find(H);
            Z.verticalCentered &&
              e(this)
                .find(C)
                .css("height", Wn(e(this)) + "px"),
              e(this).css("height", be(e(this)) + "px"),
              t.length > 1 && An(n, n.find(E));
          }),
          Z.scrollOverflow && Pt.createScrollBarForAll();
        var t = e(y),
          o = t.index(S);
        o && !pt("fadingEffect") && se(o + 1),
          (Lt = !1),
          e.isFunction(Z.afterResize) && n && Z.afterResize.call(zt),
          e.isFunction(Z.afterReBuild) && !n && Z.afterReBuild.call(zt),
          zt.trigger("afterRebuild");
      }
    }
    function pe(n) {
      var t = bt.hasClass(l);
      n
        ? t ||
          (q(!1, "internal"),
          ne(!1, "internal"),
          e(k).hide(),
          bt.addClass(l),
          e.isFunction(Z.afterResponsive) && Z.afterResponsive.call(zt, n),
          Z.responsiveSlides &&
            xt.responsiveSlides &&
            xt.responsiveSlides.toSections(),
          zt.trigger("afterResponsive", [n]))
        : t &&
          (q(Qt.autoScrolling, "internal"),
          ne(Qt.autoScrolling, "internal"),
          e(k).show(),
          bt.removeClass(l),
          e.isFunction(Z.afterResponsive) && Z.afterResponsive.call(zt, n),
          Z.responsiveSlides &&
            xt.responsiveSlides &&
            xt.responsiveSlides.toSlides(),
          zt.trigger("afterResponsive", [n]));
    }
    function ve() {
      return {
        options: Z,
        internals: {
          canScroll: Et,
          isScrollAllowed: Dt,
          getDestinationPosition: je,
          isTouch: Rt,
          c: cn,
          getXmovement: Yn,
          removeAnimation: Hn,
          getTransforms: st,
          lazyLoad: en,
          addAnimation: Ln,
          performHorizontalMove: On,
          landscapeScroll: An,
          silentLandscapeScroll: at,
          keepSlidesPosition: Ne,
          silentScroll: lt,
          styleSlides: we,
          scrollHandler: Le,
          getEventsPage: rt,
          getMSPointer: it,
          isReallyTouch: Fe,
          usingExtension: pt,
          toggleControlArrows: Mn,
        },
      };
    }
    function he() {
      Z.css3 && (Z.css3 = Kn()),
        (Z.scrollBar = Z.scrollBar || Z.hybrid),
        Se(),
        ye(),
        ie(!0),
        q(Z.autoScrolling, "internal"),
        In(),
        Jn(),
        "complete" === t.readyState && dn(),
        $.on("load", dn);
    }
    function ge() {
      $.on("scroll", Le).on("hashchange", fn).blur(wn).resize(zn),
        ee
          .keydown(pn)
          .keyup(hn)
          .on("click touchstart", k + " a", bn)
          .on("click touchstart", V, xn)
          .on("click", R, vn),
        e(S).on("click touchstart", N, yn),
        Z.normalScrollElements &&
          (ee.on("mouseenter touchstart", Z.normalScrollElements, function () {
            ie(!1);
          }),
          ee.on("mouseleave touchend", Z.normalScrollElements, function () {
            ie(!0);
          }));
    }
    function me(e) {
      var t = "fp_" + e + "Extension";
      (Jt[e] = Z[e + "Key"]),
        (xt[e] = "undefined" != typeof n[t] ? new n[t]() : null),
        xt[e] && xt[e].c(e);
    }
    function Se() {
      var n = zt.find(Z.sectionSelector);
      Z.anchors.length ||
        (Z.anchors = n
          .filter("[data-anchor]")
          .map(function () {
            return e(this).data("anchor").toString();
          })
          .get()),
        Z.navigationTooltips.length ||
          (Z.navigationTooltips = n
            .filter("[data-tooltip]")
            .map(function () {
              return e(this).data("tooltip").toString();
            })
            .get());
    }
    function ye() {
      zt.css({ height: "100%", position: "relative" }),
        zt.addClass(r),
        e("html").addClass(d),
        (It = $.height()),
        zt.removeClass(c),
        Te(),
        vt("parallax", "init"),
        e(S).each(function (n) {
          var t = e(this),
            o = t.find(H),
            i = o.length;
          t.data("fp-styles", t.attr("style")),
            xe(t, n),
            Ce(t, n),
            i > 0 ? we(t, o, i) : Z.verticalCentered && Fn(t);
        }),
        Z.fixedElements && Z.css3 && e(Z.fixedElements).appendTo(bt),
        Z.navigation && Me(),
        ke(),
        Z.fadingEffect && xt.fadingEffect && xt.fadingEffect.apply(),
        Z.scrollOverflow ? (Pt = Z.scrollOverflowHandler.init(Z)) : ze();
    }
    function we(n, t, o) {
      var i = 100 * o,
        r = 100 / o;
      t.wrapAll('<div class="' + P + '" />'),
        t.parent().wrap('<div class="' + B + '" />'),
        n.find(Y).css("width", i + "%"),
        o > 1 && (Z.controlArrows && Ae(n), Z.slidesNavigation && qn(n, o)),
        t.each(function (n) {
          e(this).css("width", r + "%"), Z.verticalCentered && Fn(e(this));
        });
      var a = n.find(E);
      a.length &&
      (0 !== e(y).index(S) || (0 === e(y).index(S) && 0 !== a.index()))
        ? at(a, "internal")
        : t.eq(0).addClass(u);
    }
    function be(e) {
      return Z.offsetSections && xt.offsetSections
        ? o.round(xt.offsetSections.getWindowHeight(e))
        : It;
    }
    function xe(n, t) {
      t || 0 !== e(y).length || n.addClass(u),
        (Mt = e(y)),
        n.css("height", be(n) + "px"),
        Z.paddingTop && n.css("padding-top", Z.paddingTop),
        Z.paddingBottom && n.css("padding-bottom", Z.paddingBottom),
        "undefined" != typeof Z.sectionsColor[t] &&
          n.css("background-color", Z.sectionsColor[t]),
        "undefined" != typeof Z.anchors[t] &&
          n.attr("data-anchor", Z.anchors[t]);
    }
    function Ce(n, t) {
      "undefined" != typeof Z.anchors[t] &&
        n.hasClass(u) &&
        Dn(Z.anchors[t], t),
        Z.menu &&
          Z.css3 &&
          e(Z.menu).closest(a).length &&
          e(Z.menu).appendTo(bt);
    }
    function Te() {
      zt.find(Z.sectionSelector).addClass(m),
        zt.find(Z.slideSelector).addClass(L);
    }
    function Ae(e) {
      e
        .find(D)
        .after('<div class="' + G + '"></div><div class="' + K + '"></div>'),
        "#fff" != Z.controlArrowColor &&
          (e
            .find(_)
            .css(
              "border-color",
              "transparent transparent transparent " + Z.controlArrowColor
            ),
          e
            .find(U)
            .css(
              "border-color",
              "transparent " + Z.controlArrowColor + " transparent transparent"
            )),
        Z.loopHorizontal || e.find(U).hide();
    }
    function Me() {
      bt.append('<div id="' + M + '"><ul></ul></div>');
      var n = e(k);
      n.addClass(function () {
        return Z.showActiveTooltip
          ? z + " " + Z.navigationPosition
          : Z.navigationPosition;
      });
      for (var t = 0; t < e(S).length; t++) {
        var o = "";
        Z.anchors.length && (o = Z.anchors[t]);
        var i = '<li><a href="#' + o + '"><span></span></a>',
          r = Z.navigationTooltips[t];
        "undefined" != typeof r &&
          "" !== r &&
          (i +=
            '<div class="' +
            O +
            " " +
            Z.navigationPosition +
            '">' +
            r +
            "</div>"),
          (i += "</li>"),
          n.find("ul").append(i);
      }
      e(k).css("margin-top", "-" + e(k).height() / 2 + "px"),
        e(k).find("li").eq(e(y).index(S)).find("a").addClass(u);
    }
    function ke() {
      zt.find('iframe[src*="youtube.com/embed/"]').each(function () {
        Oe(e(this), "enablejsapi=1");
      });
    }
    function Oe(e, n) {
      var t = e.attr("src");
      e.attr("src", t + Re(t) + n);
    }
    function Re(e) {
      return /\?/.test(e) ? "&" : "?";
    }
    function ze() {
      var n = e(y);
      n.addClass(v),
        en(n),
        nn(n),
        Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(),
        Ie() &&
          e.isFunction(Z.afterLoad) &&
          Z.afterLoad.call(n, n.data("anchor"), n.index(S) + 1),
        e.isFunction(Z.afterRender) && Z.afterRender.call(zt),
        zt.trigger("afterRender");
    }
    function Ie() {
      var e = Vn(un().section);
      return !e || (e.length && e.index() === Mt.index());
    }
    function Le() {
      io || (requestAnimationFrame(He), (io = !0));
    }
    function He() {
      zt.trigger("onScroll");
      var n;
      if ((!Z.autoScrolling || Z.scrollBar || pt("dragAndMove")) && !gt()) {
        var i = pt("dragAndMove")
            ? o.abs(xt.dragAndMove.getCurrentScroll())
            : $.scrollTop(),
          r = (Be(i), 0),
          a = i + $.height() / 2,
          l = pt("dragAndMove")
            ? xt.dragAndMove.getDocumentHeight()
            : bt.height() - $.height(),
          s = l === i,
          c = t.querySelectorAll(S);
        if (s) r = c.length - 1;
        else if (i)
          for (var d = 0; d < c.length; ++d) {
            var f = c[d];
            f.offsetTop <= a && (r = d);
          }
        else r = 0;
        if (((n = e(c).eq(r)), !n.hasClass(u))) {
          Kt = !0;
          var p,
            v,
            h = e(y),
            g = h.index(S) + 1,
            m = Pn(n),
            w = n.data("anchor"),
            b = n.index(S) + 1,
            x = n.find(E);
          x.length && ((v = x.data("anchor")), (p = x.index())),
            Et &&
              (n.addClass(u).siblings().removeClass(u),
              vt("parallax", "afterLoad"),
              e.isFunction(Z.onLeave) && Z.onLeave.call(h, g, b, m),
              e.isFunction(Z.afterLoad) && Z.afterLoad.call(n, w, b),
              Z.resetSliders &&
                xt.resetSliders &&
                xt.resetSliders.apply({
                  localIsResizing: Lt,
                  leavingSection: g,
                }),
              on(h),
              en(n),
              nn(n),
              Dn(w, b - 1),
              Z.anchors.length && (Ct = w),
              Gn(p, v, w, b)),
            clearTimeout(Xt),
            (Xt = setTimeout(function () {
              Kt = !1;
            }, 100));
        }
        Z.fitToSection &&
          (clearTimeout(Vt),
          (Vt = setTimeout(function () {
            Z.fitToSection && e(y).outerHeight() <= It && Ee();
          }, Z.fitToSectionDelay)));
      }
      io = !1;
    }
    function Ee() {
      Et && ((Lt = !0), qe(e(y)), (Lt = !1));
    }
    function Be(e) {
      var n = e > _t ? "down" : "up";
      return (_t = e), (ro = e), n;
    }
    function De(n) {
      if (Dt.m[n]) {
        var t = "down" === n ? le : ae;
        if (
          (xt.scrollHorizontally &&
            (t = xt.scrollHorizontally.getScrollSection(n, t)),
          Z.scrollOverflow)
        ) {
          var o = Z.scrollOverflowHandler.scrollable(e(y)),
            i = "down" === n ? "bottom" : "top";
          if (o.length > 0) {
            if (!Z.scrollOverflowHandler.isScrolled(i, o)) return !0;
            t();
          } else t();
        } else t();
      }
    }
    function Pe(e) {
      var n = e.originalEvent;
      Z.autoScrolling && Fe(n) && e.preventDefault();
    }
    function Ye(n) {
      var t = n.originalEvent,
        i = e(t.target).closest(S);
      if (Fe(t)) {
        Z.autoScrolling && n.preventDefault();
        var r = rt(t);
        (no = r.y),
          (to = r.x),
          i.find(D).length && o.abs(eo - to) > o.abs($t - no)
            ? !kt &&
              o.abs(eo - to) > ($.outerWidth() / 100) * Z.touchSensitivity &&
              (eo > to ? Dt.m.right && de(i) : Dt.m.left && fe(i))
            : Z.autoScrolling &&
              Et &&
              o.abs($t - no) > ($.height() / 100) * Z.touchSensitivity &&
              ($t > no ? De("down") : no > $t && De("up"));
      }
    }
    function Fe(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType;
    }
    function We(e) {
      var n = e.originalEvent;
      if ((Z.fitToSection && wt.stop(), Fe(n))) {
        var t = rt(n);
        ($t = t.y), (eo = t.x);
      }
    }
    function Xe(e, n) {
      for (
        var t = 0, i = e.slice(o.max(e.length - n, 1)), r = 0;
        r < i.length;
        r++
      )
        t += i[r];
      return o.ceil(t / n);
    }
    function Ve(t) {
      var i = new Date().getTime(),
        r = e(h).hasClass(A);
      if (Z.autoScrolling && !At && !r) {
        t = t || n.event;
        var a = t.wheelDelta || -t.deltaY || -t.detail,
          l = o.max(-1, o.min(1, a)),
          s =
            "undefined" != typeof t.wheelDeltaX ||
            "undefined" != typeof t.deltaX,
          c =
            o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) ||
            o.abs(t.deltaX) < o.abs(t.deltaY) ||
            !s;
        Bt.length > 149 && Bt.shift(),
          Bt.push(o.abs(a)),
          Z.scrollBar &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
        var d = i - oo;
        if (((oo = i), d > 200 && (Bt = []), Et && !ht())) {
          var f = Xe(Bt, 10),
            u = Xe(Bt, 70),
            p = f >= u;
          p && c && De(l < 0 ? "down" : "up");
        }
        return !1;
      }
      Z.fitToSection && wt.stop();
    }
    function Ze(n, t) {
      var o = "undefined" == typeof t ? e(y) : t,
        i = o.find(D);
      if (!(!i.length || ht() || kt || i.find(H).length < 2)) {
        var r = i.find(E),
          a = null;
        if (((a = "left" === n ? r.prev(H) : r.next(H)), !a.length)) {
          if (!Z.loopHorizontal) return;
          a = "left" === n ? r.siblings(":last") : r.siblings(":first");
        }
        (kt = !0), An(i, a, n);
      }
    }
    function Ne() {
      e(E).each(function () {
        at(e(this), "internal");
      });
    }
    function je(e) {
      var n = e.position(),
        t = n.top,
        o =
          pt("dragAndMove") && xt.dragAndMove.isGrabbing
            ? xt.dragAndMove.isScrollingDown()
            : n.top > ro,
        i = t - It + e.outerHeight(),
        r = Z.bigSectionsDestination;
      return (
        e.outerHeight() > It
          ? ((o || r) && "bottom" !== r) || (t = i)
          : (o || (Lt && e.is(":last-child"))) && (t = i),
        Z.offsetSections &&
          xt.offsetSections &&
          (t = xt.offsetSections.getSectionPosition(o, t, e)),
        (ro = t),
        t
      );
    }
    function qe(n, t, o) {
      if ("undefined" != typeof n && n.length) {
        var i,
          r,
          a = je(n),
          l = {
            element: n,
            callback: t,
            isMovementUp: o,
            dtop: a,
            yMovement: Pn(n),
            anchorLink: n.data("anchor"),
            sectionIndex: n.index(S),
            activeSlide: n.find(E),
            activeSection: e(y),
            leavingSection: e(y).index(S) + 1,
            localIsResizing: Lt,
          };
        (l.activeSection.is(n) && !Lt) ||
          (Z.scrollBar && $.scrollTop() === l.dtop && !n.hasClass(T)) ||
          (l.activeSlide.length &&
            ((i = l.activeSlide.data("anchor")), (r = l.activeSlide.index())),
          (e.isFunction(Z.onLeave) &&
            !l.localIsResizing &&
            Z.onLeave.call(
              l.activeSection,
              l.leavingSection,
              l.sectionIndex + 1,
              l.yMovement
            ) === !1) ||
            (vt("parallax", "apply", l),
            Z.autoScrolling &&
              Z.continuousVertical &&
              "undefined" != typeof l.isMovementUp &&
              ((!l.isMovementUp && "up" == l.yMovement) ||
                (l.isMovementUp && "down" == l.yMovement)) &&
              (l = Je(l)),
            pt("scrollOverflowReset") &&
              xt.scrollOverflowReset.setPrevious(l.activeSection),
            l.localIsResizing || on(l.activeSection),
            Z.scrollOverflow && Z.scrollOverflowHandler.beforeLeave(),
            n.addClass(u).siblings().removeClass(u),
            en(n),
            Z.scrollOverflow && Z.scrollOverflowHandler.onLeave(),
            (Et = !1),
            Gn(r, i, l.anchorLink, l.sectionIndex),
            Ue(l),
            (Ct = l.anchorLink),
            Dn(l.anchorLink, Ge(l))));
      }
    }
    function Ge(n) {
      return n.wrapAroundElements && n.wrapAroundElements.length
        ? n.isMovementUp
          ? e(S).length - 1
          : 0
        : n.sectionIndex;
    }
    function Ue(n) {
      if (Z.css3 && Z.autoScrolling && !Z.scrollBar) {
        var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
        Xn(t, !0),
          Z.scrollingSpeed
            ? (clearTimeout(Ft),
              (Ft = setTimeout(function () {
                _e(n);
              }, Z.scrollingSpeed)))
            : _e(n);
      } else {
        var i = Qe(n);
        e(i.element)
          .animate(i.options, Z.scrollingSpeed, Z.easing)
          .promise()
          .done(function () {
            Z.scrollBar
              ? setTimeout(function () {
                  _e(n);
                }, 30)
              : _e(n);
          });
      }
    }
    function Qe(e) {
      var n = {};
      return (
        Z.autoScrolling && !Z.scrollBar
          ? ((n.options = { top: -e.dtop }), (n.element = a))
          : ((n.options = { scrollTop: e.dtop }), (n.element = "html, body")),
        n
      );
    }
    function Je(n) {
      return (
        n.isMovementUp
          ? n.activeSection.before(n.activeSection.nextAll(S))
          : n.activeSection.after(n.activeSection.prevAll(S).get().reverse()),
        lt(e(y).position().top),
        Ne(),
        (n.wrapAroundElements = n.activeSection),
        (n.dtop = n.element.position().top),
        (n.yMovement = Pn(n.element)),
        (n.leavingSection = n.activeSection.index(S) + 1),
        (n.sectionIndex = n.element.index(S)),
        e(a).trigger("onContinuousVertical", [n]),
        n
      );
    }
    function Ke(n) {
      n.wrapAroundElements &&
        n.wrapAroundElements.length &&
        (n.isMovementUp
          ? e(w).before(n.wrapAroundElements)
          : e(b).after(n.wrapAroundElements),
        lt(e(y).position().top),
        Ne(),
        (n.sectionIndex = n.element.index(S)),
        (n.leavingSection = n.activeSection.index(S) + 1));
    }
    function _e(n) {
      Ke(n),
        e.isFunction(Z.afterLoad) &&
          !n.localIsResizing &&
          Z.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
        Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(),
        vt("parallax", "afterLoad"),
        pt("scrollOverflowReset") && xt.scrollOverflowReset.reset(),
        Z.resetSliders && xt.resetSliders && xt.resetSliders.apply(n),
        n.localIsResizing || nn(n.element),
        n.element.addClass(v).siblings().removeClass(v),
        (Et = !0),
        e.isFunction(n.callback) && n.callback.call(this);
    }
    function $e(e, n) {
      e.attr(n, e.data(n)).removeAttr("data-" + n);
    }
    function en(n) {
      if (Z.lazyLoading) {
        var t,
          o = rn(n);
        o.find(
          "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]"
        ).each(function () {
          if (
            ((t = e(this)),
            e.each(["src", "srcset"], function (e, n) {
              var o = t.attr("data-" + n);
              "undefined" != typeof o && o && $e(t, n);
            }),
            t.is("source"))
          ) {
            var n = t.closest("video").length ? "video" : "audio";
            t.closest(n).get(0).load();
          }
        });
      }
    }
    function nn(n) {
      var t = rn(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-autoplay") &&
          "function" == typeof n.play &&
          n.play();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          n.hasAttribute("data-autoplay") && tn(n),
            (n.onload = function () {
              n.hasAttribute("data-autoplay") && tn(n);
            });
        });
    }
    function tn(e) {
      e.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
    function on(n) {
      var t = rn(n);
      t.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-keepplaying") ||
          "function" != typeof n.pause ||
          n.pause();
      }),
        t.find('iframe[src*="youtube.com/embed/"]').each(function () {
          var n = e(this).get(0);
          /youtube\.com\/embed\//.test(e(this).attr("src")) &&
            !n.hasAttribute("data-keepplaying") &&
            e(this)
              .get(0)
              .contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
        });
    }
    function rn(n) {
      var t = n.find(E);
      return t.length && (n = e(t)), n;
    }
    function an(e) {
      function n(e) {
        var n,
          o,
          i,
          r,
          l,
          s,
          c,
          d = "",
          f = 0;
        for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length; )
          (r = a.indexOf(e.charAt(f++))),
            (l = a.indexOf(e.charAt(f++))),
            (s = a.indexOf(e.charAt(f++))),
            (c = a.indexOf(e.charAt(f++))),
            (n = (r << 2) | (l >> 4)),
            (o = ((15 & l) << 4) | (s >> 2)),
            (i = ((3 & s) << 6) | c),
            (d += String.fromCharCode(n)),
            64 != s && (d += String.fromCharCode(o)),
            64 != c && (d += String.fromCharCode(i));
        return (d = t(d));
      }
      function t(e) {
        for (var n, t = "", o = 0, i = 0, r = 0; o < e.length; )
          (i = e.charCodeAt(o)),
            i < 128
              ? ((t += String.fromCharCode(i)), o++)
              : i > 191 && i < 224
              ? ((r = e.charCodeAt(o + 1)),
                (t += String.fromCharCode(((31 & i) << 6) | (63 & r))),
                (o += 2))
              : ((r = e.charCodeAt(o + 1)),
                (n = e.charCodeAt(o + 2)),
                (t += String.fromCharCode(
                  ((15 & i) << 12) | ((63 & r) << 6) | (63 & n)
                )),
                (o += 3));
        return t;
      }
      function o(e) {
        return e;
      }
      function i(e) {
        return e.slice(3).slice(0, -3);
      }
      function r(e) {
        var t = e.split("_");
        if (t.length > 1) {
          var o = t[1],
            r = e.replace(i(t[1]), "").split("_")[0],
            a = r;
          return a + "_" + n(o.slice(3).slice(0, -3));
        }
        return i(e);
      }
      var a =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return o(r(n(e)));
    }
    function ln() {
      if (t.domain.length) {
        for (
          var e = t.domain.replace(/^(www\.)/, "").split(".");
          e.length > 2;

        ) {
          e.shift();
        }
        var n = e.join(".");
        return n.replace(/(^\.*)|(\.*$)/g, "");
      }
      return "";
    }
    function sn(e) {
      var n = ln(),
        t = [
          "MTM0bG9jYWxob3N0MjM0",
          "MTM0MC4xMjM0",
          "MTM0anNoZWxsLm5ldDIzNA==",
          "UDdDQU5ZNlNN",
        ],
        o = an(t[0]),
        i = an(t[1]),
        r = an(t[2]),
        a = an(t[3]),
        l = [o, i, r].indexOf(n) < 0 && 0 !== n.length,
        s = "undefined" != typeof Jt[e] && Jt[e].length;
      if (!s && l) return !1;
      var c = s ? an(Jt[e]) : "";
      c = c.split("_");
      var d = c.length > 1 && c[1].indexOf(e, c[1].length - e.length) > -1,
        f = c[0].indexOf(n, c[0].length - n.length) < 0;
      return (!(f && l && a != c[0]) && d) || !l;
    }
    function cn(n) {
      function t() {
        Gt ||
          (o.random() < 0.5 ? bt.prepend(l) : bt.append(l),
          (Gt = !0),
          l.bind("destroyed", function () {
            clearTimeout(r), (r = setTimeout(i, 900));
          })),
          e(l).attr(
            "style",
            an(
              "MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz"
            ).replace(/;/g, an("MTIzICFpbXBvcnRhbnQ7MzQ1"))
          );
      }
      function i() {
        Gt = !1;
      }
      if (pt(n) && xt[n]) {
        var r,
          a = an(
            "MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="
          ),
          l = e("<div/>").html(a).contents();
        sn(n) || (t(), setInterval(t, 2e3));
      }
    }
    function dn() {
      var e = un(),
        n = e.section,
        t = e.slide;
      n && (Z.animateAnchor ? Nn(n, t) : se(n, t));
    }
    function fn() {
      if (!Kt && !Z.lockAnchors) {
        var e = un(),
          n = e.section,
          t = e.slide,
          o = "undefined" == typeof Ct,
          i = "undefined" == typeof Ct && "undefined" == typeof t && !kt;
        n.length &&
          ((n && n !== Ct && !o) || i || (!kt && Tt != t)) &&
          Nn(n, t);
      }
    }
    function un() {
      var e,
        t,
        o = n.location.hash;
      if (o.length) {
        var i = o.replace("#", "").split("/"),
          r = o.indexOf("#/") > -1;
        e = r ? "/" + i[1] : decodeURIComponent(i[0]);
        var a = r ? i[2] : i[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, slide: t };
    }
    function pn(n) {
      clearTimeout(Zt);
      var t = e(":focus"),
        o = n.which;
      if (9 === o) Sn(n);
      else if (
        !t.is("textarea") &&
        !t.is("input") &&
        !t.is("select") &&
        "true" !== t.attr("contentEditable") &&
        "" !== t.attr("contentEditable") &&
        Z.keyboardScrolling &&
        Z.autoScrolling
      ) {
        var i = [40, 38, 32, 33, 34];
        e.inArray(o, i) > -1 && n.preventDefault(),
          (At = n.ctrlKey),
          (Zt = setTimeout(function () {
            Cn(n);
          }, 150));
      }
    }
    function vn() {
      e(this).prev().trigger("click");
    }
    function hn(e) {
      Ht && (At = e.ctrlKey);
    }
    function gn(e) {
      2 == e.which && ((ao = e.pageY), zt.on("mousemove", Tn));
    }
    function mn(e) {
      2 == e.which && zt.off("mousemove");
    }
    function Sn(n) {
      function t(e) {
        return e.preventDefault(), s.first().focus();
      }
      var o = n.shiftKey,
        i = e(":focus"),
        r = e(y),
        a = r.find(E),
        l = a.length ? a : r,
        s = l.find(Ut);
      i.length ? i.closest(y, E).length || (i = t(n)) : t(n),
        ((!o && i.is(s.last())) || (o && i.is(s.first()))) &&
          n.preventDefault();
    }
    function yn() {
      var n = e(this).closest(S);
      e(this).hasClass(j) ? Dt.m.left && fe(n) : Dt.m.right && de(n);
    }
    function wn() {
      (Ht = !1), (At = !1);
    }
    function bn(n) {
      n.preventDefault();
      var t = e(this).parent().index();
      qe(e(S).eq(t));
    }
    function xn(n) {
      n.preventDefault();
      var t = e(this).closest(S).find(D),
        o = t.find(H).eq(e(this).closest("li").index());
      An(t, o);
    }
    function Cn(n) {
      var t = n.shiftKey;
      if (Et || !([37, 39].indexOf(n.which) < 0))
        switch (n.which) {
          case 38:
          case 33:
            Dt.k.up && ae();
            break;
          case 32:
            if (t && Dt.k.up) {
              ae();
              break;
            }
          case 40:
          case 34:
            Dt.k.down && le();
            break;
          case 36:
            Dt.k.up && ce(1);
            break;
          case 35:
            Dt.k.down && ce(e(S).length);
            break;
          case 37:
            Dt.k.left && fe();
            break;
          case 39:
            Dt.k.right && de();
            break;
          default:
            return;
        }
    }
    function Tn(e) {
      Et &&
        (e.pageY < ao && Dt.m.up ? ae() : e.pageY > ao && Dt.m.down && le()),
        (ao = e.pageY);
    }
    function An(n, t, o) {
      var i = n.closest(S),
        r = {
          slides: n,
          destiny: t,
          direction: o,
          destinyPos: t.position(),
          slideIndex: t.index(),
          section: i,
          sectionIndex: i.index(S),
          anchorLink: i.data("anchor"),
          slidesNav: i.find(X),
          slideAnchor: Qn(t),
          prevSlide: i.find(E),
          prevSlideIndex: i.find(E).index(),
          localIsResizing: Lt,
        };
      return (
        (r.xMovement = Yn(r.prevSlideIndex, r.slideIndex)),
        r.localIsResizing || (Et = !1),
        vt("parallax", "applyHorizontal", r),
        Z.onSlideLeave &&
        !r.localIsResizing &&
        "none" !== r.xMovement &&
        e.isFunction(Z.onSlideLeave) &&
        Z.onSlideLeave.call(
          r.prevSlide,
          r.anchorLink,
          r.sectionIndex + 1,
          r.prevSlideIndex,
          r.direction,
          r.slideIndex
        ) === !1
          ? void (kt = !1)
          : (t.addClass(u).siblings().removeClass(u),
            r.localIsResizing || (on(r.prevSlide), en(t)),
            Mn(r),
            i.hasClass(u) &&
              !r.localIsResizing &&
              Gn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
            xt.continuousHorizontal && xt.continuousHorizontal.apply(r),
            gt() ? kn(r) : On(n, r, !0),
            void (
              Z.interlockedSlides &&
              xt.interlockedSlides &&
              ((pt("continuousHorizontal") &&
                "undefined" != typeof o &&
                o !== r.xMovement) ||
                xt.interlockedSlides.apply(r))
            ))
      );
    }
    function Mn(e) {
      !Z.loopHorizontal &&
        Z.controlArrows &&
        (e.section.find(U).toggle(0 !== e.slideIndex),
        e.section.find(_).toggle(!e.destiny.is(":last-child")));
    }
    function kn(n) {
      xt.continuousHorizontal && xt.continuousHorizontal.afterSlideLoads(n),
        Rn(n.slidesNav, n.slideIndex),
        n.localIsResizing ||
          (vt("parallax", "afterSlideLoads"),
          e.isFunction(Z.afterSlideLoad) &&
            Z.afterSlideLoad.call(
              n.destiny,
              n.anchorLink,
              n.sectionIndex + 1,
              n.slideAnchor,
              n.slideIndex
            ),
          (Et = !0),
          nn(n.destiny)),
        (kt = !1),
        pt("interlockedSlides") && xt.interlockedSlides.apply(n);
    }
    function On(e, n, t) {
      var i = n.destinyPos;
      if (Z.css3) {
        var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
        Ln(e.find(Y)).css(st(r)),
          (Wt = setTimeout(
            function () {
              t && kn(n);
            },
            Z.scrollingSpeed,
            Z.easing
          ));
      } else
        e.animate(
          { scrollLeft: o.round(i.left) },
          Z.scrollingSpeed,
          Z.easing,
          function () {
            t && kn(n);
          }
        );
    }
    function Rn(e, n) {
      e.find(p).removeClass(u), e.find("li").eq(n).find("a").addClass(u);
    }
    function zn() {
      if ((zt.trigger("onResize"), In(), Ot)) {
        var n = e(t.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = $.height();
          o.abs(i - lo) > (20 * o.max(lo, i)) / 100 && (ue(!0), (lo = i));
        }
      } else
        clearTimeout(Yt),
          (Yt = setTimeout(function () {
            ue(!0);
          }, 350));
    }
    function In() {
      var e = Z.responsive || Z.responsiveWidth,
        n = Z.responsiveHeight,
        t = e && $.outerWidth() < e,
        o = n && $.height() < n;
      e && n ? pe(t || o) : e ? pe(t) : n && pe(o);
    }
    function Ln(e) {
      var n = "all " + Z.scrollingSpeed + "ms " + Z.easingcss3;
      return (
        e.removeClass(s), e.css({ "-webkit-transition": n, transition: n })
      );
    }
    function Hn(e) {
      return e.addClass(s);
    }
    function En(n, t) {
      Z.navigation &&
        (e(k).find(p).removeClass(u),
        n
          ? e(k)
              .find('a[href="#' + n + '"]')
              .addClass(u)
          : e(k).find("li").eq(t).find("a").addClass(u));
    }
    function Bn(n) {
      Z.menu &&
        (e(Z.menu).find(p).removeClass(u),
        e(Z.menu)
          .find('[data-menuanchor="' + n + '"]')
          .addClass(u));
    }
    function Dn(e, n) {
      Bn(e), En(e, n);
    }
    function Pn(n) {
      var t = e(y).index(S),
        o = n.index(S);
      return t == o ? "none" : t > o ? "up" : "down";
    }
    function Yn(e, n) {
      return e == n ? "none" : e > n ? "left" : "right";
    }
    function Fn(e) {
      e.hasClass(F) ||
        e
          .addClass(F)
          .wrapInner(
            '<div class="' + x + '" style="height:' + Wn(e) + 'px;" />'
          );
    }
    function Wn(e) {
      var n = be(e);
      if (Z.paddingTop || Z.paddingBottom) {
        var t = e;
        t.hasClass(m) || (t = e.closest(S));
        var o =
          parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
        n -= o;
      }
      return n;
    }
    function Xn(e, n) {
      n ? Ln(zt) : Hn(zt),
        clearTimeout(Nt),
        zt.css(st(e)),
        (Nt = setTimeout(function () {
          zt.removeClass(s);
        }, 10));
    }
    function Vn(n) {
      var t = zt.find(S + '[data-anchor="' + n + '"]');
      if (!t.length) {
        var o = "undefined" != typeof n ? n - 1 : 0;
        t = e(S).eq(o);
      }
      return t;
    }
    function Zn(e, n) {
      var t = n.find(H + '[data-anchor="' + e + '"]');
      return (
        t.length ||
          ((e = "undefined" != typeof e ? e : 0), (t = n.find(H).eq(e))),
        t
      );
    }
    function Nn(e, n) {
      var t = Vn(e);
      if (t.length) {
        var o = Zn(n, t);
        e === Ct || t.hasClass(u)
          ? jn(o)
          : qe(t, function () {
              jn(o);
            });
      }
    }
    function jn(e) {
      e.length && An(e.closest(D), e);
    }
    function qn(e, n) {
      e.append('<div class="' + W + '"><ul></ul></div>');
      var t = e.find(X);
      t.addClass(Z.slidesNavPosition);
      for (var o = 0; o < n; o++)
        t.find("ul").append('<li><a href="#"><span></span></a></li>');
      t.css("margin-left", "-" + t.width() / 2 + "px"),
        t.find("li").first().find("a").addClass(u);
    }
    function Gn(e, n, t, o) {
      var i = "";
      Z.anchors.length &&
        !Z.lockAnchors &&
        (e
          ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            (Tt = n),
            Un(i + "/" + n))
          : "undefined" != typeof e
          ? ((Tt = n), Un(t))
          : Un(t)),
        Jn();
    }
    function Un(e) {
      if (Z.recordHistory) location.hash = e;
      else if (Ot || Rt) n.history.replaceState(i, i, "#" + e);
      else {
        var t = n.location.href.split("#")[0];
        n.location.replace(t + "#" + e);
      }
    }
    function Qn(e) {
      var n = e.data("anchor"),
        t = e.index();
      return "undefined" == typeof n && (n = t), n;
    }
    function Jn() {
      var n = e(y),
        t = n.find(E),
        o = Qn(n),
        i = Qn(t),
        r = String(o);
      t.length && (r = r + "-" + i), (r = r.replace("/", "-").replace("#", ""));
      var a = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b", "g");
      (bt[0].className = bt[0].className.replace(a, "")),
        bt.addClass(f + "-" + r);
    }
    function Kn() {
      var e,
        o = t.createElement("p"),
        r = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform",
        };
      t.body.insertBefore(o, null);
      for (var a in r)
        o.style[a] !== i &&
          ((o.style[a] = "translate3d(1px,1px,1px)"),
          (e = n.getComputedStyle(o).getPropertyValue(r[a])));
      return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e;
    }
    function _n() {
      t.addEventListener
        ? (t.removeEventListener("mousewheel", Ve, !1),
          t.removeEventListener("wheel", Ve, !1),
          t.removeEventListener("MozMousePixelScroll", Ve, !1))
        : t.detachEvent("onmousewheel", Ve);
    }
    function $n() {
      var e,
        o = "";
      n.addEventListener
        ? (e = "addEventListener")
        : ((e = "attachEvent"), (o = "on"));
      var r =
        "onwheel" in t.createElement("div")
          ? "wheel"
          : t.onmousewheel !== i
          ? "mousewheel"
          : "DOMMouseScroll";
      "DOMMouseScroll" == r
        ? t[e](o + "MozMousePixelScroll", Ve, !1)
        : t[e](o + r, Ve, !1);
    }
    function et() {
      zt.on("mousedown", gn).on("mouseup", mn);
    }
    function nt() {
      zt.off("mousedown", gn).off("mouseup", mn);
    }
    function tt() {
      (Ot || Rt) &&
        (Z.autoScrolling && bt.off(qt.touchmove).on(qt.touchmove, Pe),
        e(a)
          .off(qt.touchstart)
          .on(qt.touchstart, We)
          .off(qt.touchmove)
          .on(qt.touchmove, Ye));
    }
    function ot() {
      (Ot || Rt) &&
        (Z.autoScrolling && bt.off(qt.touchmove),
        e(a).off(qt.touchstart).off(qt.touchmove));
    }
    function it() {
      var e;
      return (e = n.PointerEvent
        ? { down: "pointerdown", move: "pointermove" }
        : { down: "MSPointerDown", move: "MSPointerMove" });
    }
    function rt(e) {
      var n = [];
      return (
        (n.y =
          "undefined" != typeof e.pageY && (e.pageY || e.pageX)
            ? e.pageY
            : e.touches[0].pageY),
        (n.x =
          "undefined" != typeof e.pageX && (e.pageY || e.pageX)
            ? e.pageX
            : e.touches[0].pageX),
        Rt &&
          Fe(e) &&
          Z.scrollBar &&
          "undefined" != typeof e.touches &&
          ((n.y = e.touches[0].pageY), (n.x = e.touches[0].pageX)),
        n
      );
    }
    function at(e, n) {
      J(0, "internal"),
        "undefined" != typeof n && (Lt = !0),
        An(e.closest(D), e),
        "undefined" != typeof n && (Lt = !1),
        J(Qt.scrollingSpeed, "internal");
    }
    function lt(e) {
      var n = o.round(e);
      if (Z.css3 && Z.autoScrolling && !Z.scrollBar) {
        var t = "translate3d(0px, -" + n + "px, 0px)";
        Xn(t, !1);
      } else
        Z.autoScrolling && !Z.scrollBar ? zt.css("top", -n) : wt.scrollTop(n);
    }
    function st(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e,
      };
    }
    function ct(n, t, o) {
      "all" !== t
        ? (Dt[o][t] = n)
        : e.each(Object.keys(Dt[o]), function (e, t) {
            Dt[o][t] = n;
          });
    }
    function dt(n) {
      zt.trigger("destroy", [n]),
        q(!1, "internal"),
        ie(!1),
        re(!1),
        zt.addClass(c),
        clearTimeout(Wt),
        clearTimeout(Ft),
        clearTimeout(Yt),
        clearTimeout(Xt),
        clearTimeout(Vt),
        $.off("scroll", Le).off("hashchange", fn).off("resize", zn),
        ee
          .off("click touchstart", k + " a")
          .off("mouseenter", k + " li")
          .off("mouseleave", k + " li")
          .off("click touchstart", V)
          .off("mouseover", Z.normalScrollElements)
          .off("mouseout", Z.normalScrollElements),
        e(S).off("click touchstart", N),
        pt("dragAndMove") && xt.dragAndMove.destroy(),
        clearTimeout(Wt),
        clearTimeout(Ft),
        n && ft();
    }
    function ft() {
      lt(0),
        zt
          .find(
            "img[data-src], source[data-src], audio[data-src], iframe[data-src]"
          )
          .each(function () {
            $e(e(this), "src");
          }),
        zt.find("img[data-srcset]").each(function () {
          $e(e(this), "srcset");
        }),
        e(k + ", " + X + ", " + N).remove(),
        e(S).css({ height: "", "background-color": "", padding: "" }),
        e(H).css({ width: "" }),
        zt.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": "",
        }),
        wt.css({ overflow: "", height: "" }),
        e("html").removeClass(d),
        bt.removeClass(l),
        e.each(bt.get(0).className.split(/\s+/), function (e, n) {
          0 === n.indexOf(f) && bt.removeClass(n);
        }),
        e(S + ", " + H).each(function () {
          Z.scrollOverflowHandler && Z.scrollOverflowHandler.remove(e(this)),
            e(this).removeClass(F + " " + u),
            e(this).attr("style", e(this).data("fp-styles"));
        }),
        ut(zt),
        zt.find(C + ", " + Y + ", " + D).each(function () {
          e(this).replaceWith(this.childNodes);
        }),
        wt.scrollTop(0);
      var n = [m, L, P];
      e.each(n, function (n, t) {
        e("." + t).removeClass(t);
      });
    }
    function ut(e) {
      return e.css({ "-webkit-transition": "none", transition: "none" });
    }
    function pt(e) {
      return null !== Z[e] && "object" == typeof Z[e]
        ? Z[e].enabled && xt[e]
        : Z[e] && xt[e];
    }
    function vt(e, n, t) {
      if (pt(e)) return xt[e][n](t);
    }
    function ht() {
      return pt("dragAndMove") && xt.dragAndMove.isAnimating;
    }
    function gt() {
      return pt("dragAndMove") && xt.dragAndMove.isGrabbing;
    }
    function mt(e, n, t) {
      (Z[e] = n), "internal" !== t && (Qt[e] = n);
    }
    function St() {
      return e("html").hasClass(d)
        ? void yt(
            "error",
            "Fullpage.js can only be initialized once and you are doing it multiple times!"
          )
        : (Z.continuousVertical &&
            (Z.loopTop || Z.loopBottom) &&
            ((Z.continuousVertical = !1),
            yt(
              "warn",
              "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          Z.scrollBar &&
            Z.scrollOverflow &&
            yt(
              "warn",
              "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"
            ),
          !Z.continuousVertical ||
            (!Z.scrollBar && Z.autoScrolling) ||
            ((Z.continuousVertical = !1),
            yt(
              "warn",
              "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
            )),
          Z.scrollOverflow &&
            !Z.scrollOverflowHandler &&
            ((Z.scrollOverflow = !1),
            yt(
              "error",
              "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
            )),
          void e.each(Z.anchors, function (n, t) {
            var o = ee.find("[name]").filter(function () {
                return (
                  e(this).attr("name") &&
                  e(this).attr("name").toLowerCase() == t.toLowerCase()
                );
              }),
              i = ee.find("[id]").filter(function () {
                return (
                  e(this).attr("id") &&
                  e(this).attr("id").toLowerCase() == t.toLowerCase()
                );
              });
            (i.length || o.length) &&
              (yt(
                "error",
                "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
              ),
              i.length &&
                yt(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `id` property'
                ),
              o.length &&
                yt(
                  "error",
                  '"' +
                    t +
                    '" is is being used by another element `name` property'
                ));
          }));
    }
    function yt(e, n) {
      console && console[e] && console[e]("fullPage: " + n);
    }
    if (e("html").hasClass(d)) return void St();
    var wt = e("html, body"),
      bt = e("body"),
      xt = e.fn.fullpage;
    Z = e.extend(
      !0,
      {
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        continuousHorizontal: !1,
        scrollHorizontally: !1,
        interlockedSlides: !1,
        dragAndMove: !1,
        offsetSections: !1,
        resetSliders: !1,
        fadingEffect: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowReset: !1,
        scrollOverflowHandler: e.fn.fp_scrolloverflow
          ? e.fn.fp_scrolloverflow.iscrollHandler
          : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: !1,
        parallax: !1,
        parallaxOptions: {
          type: "reveal",
          percentage: 62,
          property: "translate",
        },
        sectionSelector: g,
        slideSelector: I,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: !0,
      },
      Z
    );
    var Ct,
      Tt,
      At,
      Mt,
      kt = !1,
      Ot = navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
      ),
      Rt =
        "ontouchstart" in n ||
        navigator.msMaxTouchPoints > 0 ||
        navigator.maxTouchPoints,
      zt = e(this),
      It = $.height(),
      Lt = !1,
      Ht = !0,
      Et = !0,
      Bt = [],
      Dt = {};
    (Dt.m = { up: !0, down: !0, left: !0, right: !0 }),
      (Dt.k = e.extend(!0, {}, Dt.m));
    var Pt,
      Yt,
      Ft,
      Wt,
      Xt,
      Vt,
      Zt,
      Nt,
      jt = it(),
      qt = {
        touchmove: "ontouchmove" in n ? "touchmove" : jt.move,
        touchstart: "ontouchstart" in n ? "touchstart" : jt.down,
      },
      Gt = !1,
      Ut =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
      Qt = e.extend(!0, {}, Z),
      Jt = {};
    St(),
      e.extend(e.easing, {
        easeInOutCubic: function (e, n, t, o, i) {
          return (n /= i / 2) < 1
            ? (o / 2) * n * n * n + t
            : (o / 2) * ((n -= 2) * n * n + 2) + t;
        },
      }),
      (e.event.special.destroyed = {
        remove: function (e) {
          e.handler && e.handler();
        },
      }),
      e(this).length &&
        ((xt.version = "2.9.5"),
        (xt.setAutoScrolling = q),
        (xt.setRecordHistory = Q),
        (xt.setScrollingSpeed = J),
        (xt.setFitToSection = ne),
        (xt.setLockAnchors = te),
        (xt.setMouseWheelScrolling = oe),
        (xt.setAllowScrolling = ie),
        (xt.setKeyboardScrolling = re),
        (xt.moveSectionUp = ae),
        (xt.moveSectionDown = le),
        (xt.silentMoveTo = se),
        (xt.moveTo = ce),
        (xt.moveSlideRight = de),
        (xt.moveSlideLeft = fe),
        (xt.fitToSection = Ee),
        (xt.reBuild = ue),
        (xt.setResponsive = pe),
        (xt.getFullpageData = ve),
        (xt.destroy = dt),
        (xt.landscapeScroll = An),
        (xt.shared = { afterRenderActions: ze }),
        me("continuousHorizontal"),
        me("scrollHorizontally"),
        me("resetSliders"),
        me("interlockedSlides"),
        me("responsiveSlides"),
        me("fadingEffect"),
        me("dragAndMove"),
        me("offsetSections"),
        me("scrollOverflowReset"),
        me("parallax"),
        pt("dragAndMove") && xt.dragAndMove.init(),
        he(),
        ge(),
        pt("dragAndMove") && xt.dragAndMove.turnOffTouch());
    var Kt = !1,
      _t = 0,
      $t = 0,
      eo = 0,
      no = 0,
      to = 0;
    !(function () {
      var e =
        n.requestAnimationFrame ||
        n.mozRequestAnimationFrame ||
        n.webkitRequestAnimationFrame ||
        n.msRequestAnimationFrame;
      n.requestAnimationFrame = e;
    })();
    var oo = new Date().getTime(),
      io = !1,
      ro = 0,
      ao = 0,
      lo = It;
  };
});
