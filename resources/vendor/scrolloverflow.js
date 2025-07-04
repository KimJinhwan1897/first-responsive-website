/*!
 * Customized version of iScroll.js 0.0.5
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
!(function (t, i, e) {
  function s(e, s) {
    (this.wrapper = "string" == typeof e ? i.querySelector(e) : e),
      (this.scroller = this.wrapper.children[0]),
      (this.scrollerStyle = this.scroller.style),
      (this.options = {
        resizeScrollbars: !0,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
        disablePointer: !h.hasPointer,
        disableTouch: h.hasPointer || !h.hasTouch,
        disableMouse: h.hasPointer || h.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: !0,
        directionLockThreshold: 5,
        momentum: !0,
        bounce: !0,
        bounceTime: 600,
        bounceEasing: "",
        preventDefault: !0,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/,
        },
        HWCompositing: !0,
        useTransition: !0,
        useTransform: !0,
        bindToWrapper: "undefined" == typeof t.onmousedown,
      });
    for (var o in s) this.options[o] = s[o];
    (this.translateZ =
      this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : ""),
      (this.options.useTransition =
        h.hasTransition && this.options.useTransition),
      (this.options.useTransform = h.hasTransform && this.options.useTransform),
      (this.options.eventPassthrough =
        this.options.eventPassthrough === !0
          ? "vertical"
          : this.options.eventPassthrough),
      (this.options.preventDefault =
        !this.options.eventPassthrough && this.options.preventDefault),
      (this.options.scrollY =
        "vertical" != this.options.eventPassthrough && this.options.scrollY),
      (this.options.scrollX =
        "horizontal" != this.options.eventPassthrough && this.options.scrollX),
      (this.options.freeScroll =
        this.options.freeScroll && !this.options.eventPassthrough),
      (this.options.directionLockThreshold = this.options.eventPassthrough
        ? 0
        : this.options.directionLockThreshold),
      (this.options.bounceEasing =
        "string" == typeof this.options.bounceEasing
          ? h.ease[this.options.bounceEasing] || h.ease.circular
          : this.options.bounceEasing),
      (this.options.resizePolling =
        void 0 === this.options.resizePolling
          ? 60
          : this.options.resizePolling),
      this.options.tap === !0 && (this.options.tap = "tap"),
      this.options.useTransition ||
        this.options.useTransform ||
        /relative|absolute/i.test(this.scrollerStyle.position) ||
        (this.scrollerStyle.position = "relative"),
      "scale" == this.options.shrinkScrollbars &&
        (this.options.useTransition = !1),
      (this.options.invertWheelDirection = this.options.invertWheelDirection
        ? -1
        : 1),
      (this.x = 0),
      (this.y = 0),
      (this.directionX = 0),
      (this.directionY = 0),
      (this._events = {}),
      this._init(),
      this.refresh(),
      this.scrollTo(this.options.startX, this.options.startY),
      this.enable();
  }
  function o(t, e, s) {
    var o = i.createElement("div"),
      n = i.createElement("div");
    return (
      s === !0 &&
        ((o.style.cssText = "position:absolute;z-index:9999"),
        (n.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
      (n.className = "iScrollIndicator"),
      "h" == t
        ? (s === !0 &&
            ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
            (n.style.height = "100%")),
          (o.className = "iScrollHorizontalScrollbar"))
        : (s === !0 &&
            ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
            (n.style.width = "100%")),
          (o.className = "iScrollVerticalScrollbar")),
      (o.style.cssText += ";overflow:hidden"),
      e || (o.style.pointerEvents = "none"),
      o.appendChild(n),
      o
    );
  }
  function n(e, s) {
    (this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el),
      (this.wrapperStyle = this.wrapper.style),
      (this.indicator = this.wrapper.children[0]),
      (this.indicatorStyle = this.indicator.style),
      (this.scroller = e),
      (this.options = {
        listenX: !0,
        listenY: !0,
        interactive: !1,
        resize: !0,
        defaultScrollbars: !1,
        shrink: !1,
        fade: !1,
        speedRatioX: 0,
        speedRatioY: 0,
      });
    for (var o in s) this.options[o] = s[o];
    if (
      ((this.sizeRatioX = 1),
      (this.sizeRatioY = 1),
      (this.maxPosX = 0),
      (this.maxPosY = 0),
      this.options.interactive &&
        (this.options.disableTouch ||
          (h.addEvent(this.indicator, "touchstart", this),
          h.addEvent(t, "touchend", this)),
        this.options.disablePointer ||
          (h.addEvent(
            this.indicator,
            h.prefixPointerEvent("pointerdown"),
            this
          ),
          h.addEvent(t, h.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse ||
          (h.addEvent(this.indicator, "mousedown", this),
          h.addEvent(t, "mouseup", this))),
      this.options.fade)
    ) {
      this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
      var n = h.style.transitionDuration;
      if (!n) return;
      this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
      var a = this;
      h.isBadAndroid &&
        r(function () {
          "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s");
        }),
        (this.wrapperStyle.opacity = "0");
    }
  }
  var r =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (i) {
        t.setTimeout(i, 1e3 / 60);
      },
    h = (function () {
      function s(t) {
        return (
          r !== !1 &&
          ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
        );
      }
      var o = {},
        n = i.createElement("div").style,
        r = (function () {
          for (
            var t,
              i = ["t", "webkitT", "MozT", "msT", "OT"],
              e = 0,
              s = i.length;
            e < s;
            e++
          )
            if (((t = i[e] + "ransform"), t in n))
              return i[e].substr(0, i[e].length - 1);
          return !1;
        })();
      (o.getTime =
        Date.now ||
        function () {
          return new Date().getTime();
        }),
        (o.extend = function (t, i) {
          for (var e in i) t[e] = i[e];
        }),
        (o.addEvent = function (t, i, e, s) {
          t.addEventListener(i, e, !!s);
        }),
        (o.removeEvent = function (t, i, e, s) {
          t.removeEventListener(i, e, !!s);
        }),
        (o.prefixPointerEvent = function (i) {
          return t.MSPointerEvent
            ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8)
            : i;
        }),
        (o.momentum = function (t, i, s, o, n, r) {
          var h,
            a,
            l = t - i,
            c = e.abs(l) / s;
          return (
            (r = void 0 === r ? 6e-4 : r),
            (h = t + ((c * c) / (2 * r)) * (l < 0 ? -1 : 1)),
            (a = c / r),
            h < o
              ? ((h = n ? o - (n / 2.5) * (c / 8) : o),
                (l = e.abs(h - t)),
                (a = l / c))
              : h > 0 &&
                ((h = n ? (n / 2.5) * (c / 8) : 0),
                (l = e.abs(t) + h),
                (a = l / c)),
            { destination: e.round(h), duration: a }
          );
        });
      var h = s("transform");
      return (
        o.extend(o, {
          hasTransform: h !== !1,
          hasPerspective: s("perspective") in n,
          hasTouch: "ontouchstart" in t,
          hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
          hasTransition: s("transition") in n,
        }),
        (o.isBadAndroid = (function () {
          var i = t.navigator.appVersion;
          if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
            var e = i.match(/Safari\/(\d+.\d)/);
            return (
              !(e && "object" == typeof e && e.length >= 2) ||
              parseFloat(e[1]) < 535.19
            );
          }
          return !1;
        })()),
        o.extend((o.style = {}), {
          transform: h,
          transitionTimingFunction: s("transitionTimingFunction"),
          transitionDuration: s("transitionDuration"),
          transitionDelay: s("transitionDelay"),
          transformOrigin: s("transformOrigin"),
        }),
        (o.hasClass = function (t, i) {
          var e = new RegExp("(^|\\s)" + i + "(\\s|$)");
          return e.test(t.className);
        }),
        (o.addClass = function (t, i) {
          if (!o.hasClass(t, i)) {
            var e = t.className.split(" ");
            e.push(i), (t.className = e.join(" "));
          }
        }),
        (o.removeClass = function (t, i) {
          if (o.hasClass(t, i)) {
            var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(e, " ");
          }
        }),
        (o.offset = function (t) {
          for (var i = -t.offsetLeft, e = -t.offsetTop; (t = t.offsetParent); )
            (i -= t.offsetLeft), (e -= t.offsetTop);
          return { left: i, top: e };
        }),
        (o.preventDefaultException = function (t, i) {
          for (var e in i) if (i[e].test(t[e])) return !0;
          return !1;
        }),
        o.extend((o.eventType = {}), {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3,
        }),
        o.extend((o.ease = {}), {
          quadratic: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function (t) {
              return t * (2 - t);
            },
          },
          circular: {
            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
            fn: function (t) {
              return e.sqrt(1 - --t * t);
            },
          },
          back: {
            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fn: function (t) {
              var i = 4;
              return (t -= 1) * t * ((i + 1) * t + i) + 1;
            },
          },
          bounce: {
            style: "",
            fn: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
          },
          elastic: {
            style: "",
            fn: function (t) {
              var i = 0.22,
                s = 0.4;
              return 0 === t
                ? 0
                : 1 == t
                ? 1
                : s *
                    e.pow(2, -10 * t) *
                    e.sin(((t - i / 4) * (2 * e.PI)) / i) +
                  1;
            },
          },
        }),
        (o.tap = function (t, e) {
          var s = i.createEvent("Event");
          s.initEvent(e, !0, !0),
            (s.pageX = t.pageX),
            (s.pageY = t.pageY),
            t.target.dispatchEvent(s);
        }),
        (o.click = function (e) {
          var s,
            o = e.target;
          /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
            ((s = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event")),
            s.initEvent("click", !0, !0),
            (s.view = e.view || t),
            (s.detail = 1),
            (s.screenX = o.screenX || 0),
            (s.screenY = o.screenY || 0),
            (s.clientX = o.clientX || 0),
            (s.clientY = o.clientY || 0),
            (s.ctrlKey = !!e.ctrlKey),
            (s.altKey = !!e.altKey),
            (s.shiftKey = !!e.shiftKey),
            (s.metaKey = !!e.metaKey),
            (s.button = 0),
            (s.relatedTarget = null),
            (s._constructed = !0),
            o.dispatchEvent(s));
        }),
        o
      );
    })();
  (s.prototype = {
    version: "5.2.0",
    _init: function () {
      this._initEvents(),
        (this.options.scrollbars || this.options.indicators) &&
          this._initIndicators(),
        this.options.mouseWheel && this._initWheel(),
        this.options.snap && this._initSnap(),
        this.options.keyBindings && this._initKeys();
    },
    destroy: function () {
      this._initEvents(!0),
        clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = null),
        this._execEvent("destroy");
    },
    _transitionEnd: function (t) {
      t.target == this.scroller &&
        this.isInTransition &&
        (this._transitionTime(),
        this.resetPosition(this.options.bounceTime) ||
          ((this.isInTransition = !1), this._execEvent("scrollEnd")));
    },
    _start: function (t) {
      if (1 != h.eventType[t.type]) {
        var i;
        if (
          ((i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2),
          0 !== i)
        )
          return;
      }
      if (
        this.enabled &&
        (!this.initiated || h.eventType[t.type] === this.initiated)
      ) {
        !this.options.preventDefault ||
          h.isBadAndroid ||
          h.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) ||
          t.preventDefault();
        var s,
          o = t.touches ? t.touches[0] : t;
        (this.initiated = h.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = h.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (s = this.getComputedPosition()),
              this._translate(e.round(s.x), e.round(s.y)),
              this._execEvent("scrollEnd"))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent("scrollEnd")),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = o.pageX),
          (this.pointY = o.pageY),
          this._execEvent("beforeScrollStart");
      }
    },
    _move: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault();
        var i,
          s,
          o,
          n,
          r = t.touches ? t.touches[0] : t,
          a = r.pageX - this.pointX,
          l = r.pageY - this.pointY,
          c = h.getTime();
        if (
          ((this.pointX = r.pageX),
          (this.pointY = r.pageY),
          (this.distX += a),
          (this.distY += l),
          (o = e.abs(this.distX)),
          (n = e.abs(this.distY)),
          !(c - this.endTime > 300 && o < 10 && n < 10))
        ) {
          if (
            (this.directionLocked ||
              this.options.freeScroll ||
              (o > n + this.options.directionLockThreshold
                ? (this.directionLocked = "h")
                : n >= o + this.options.directionLockThreshold
                ? (this.directionLocked = "v")
                : (this.directionLocked = "n")),
            "h" == this.directionLocked)
          ) {
            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
            else if ("horizontal" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            l = 0;
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough)
              t.preventDefault();
            else if ("vertical" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            a = 0;
          }
          (a = this.hasHorizontalScroll ? a : 0),
            (l = this.hasVerticalScroll ? l : 0),
            (i = this.x + a),
            (s = this.y + l),
            (i > 0 || i < this.maxScrollX) &&
              (i = this.options.bounce
                ? this.x + a / 3
                : i > 0
                ? 0
                : this.maxScrollX),
            (s > 0 || s < this.maxScrollY) &&
              (s = this.options.bounce
                ? this.y + l / 3
                : s > 0
                ? 0
                : this.maxScrollY),
            (this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0),
            (this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0),
            this.moved || this._execEvent("scrollStart"),
            (this.moved = !0),
            this._translate(i, s),
            c - this.startTime > 300 &&
              ((this.startTime = c),
              (this.startX = this.x),
              (this.startY = this.y));
        }
      }
    },
    _end: function (t) {
      if (this.enabled && h.eventType[t.type] === this.initiated) {
        this.options.preventDefault &&
          !h.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) &&
          t.preventDefault();
        var i,
          s,
          o =
            (t.changedTouches ? t.changedTouches[0] : t,
            h.getTime() - this.startTime),
          n = e.round(this.x),
          r = e.round(this.y),
          a = e.abs(n - this.startX),
          l = e.abs(r - this.startY),
          c = 0,
          p = "";
        if (
          ((this.isInTransition = 0),
          (this.initiated = 0),
          (this.endTime = h.getTime()),
          !this.resetPosition(this.options.bounceTime))
        ) {
          if ((this.scrollTo(n, r), !this.moved))
            return (
              this.options.tap && h.tap(t, this.options.tap),
              this.options.click && h.click(t),
              void this._execEvent("scrollCancel")
            );
          if (this._events.flick && o < 200 && a < 100 && l < 100)
            return void this._execEvent("flick");
          if (
            (this.options.momentum &&
              o < 300 &&
              ((i = this.hasHorizontalScroll
                ? h.momentum(
                    this.x,
                    this.startX,
                    o,
                    this.maxScrollX,
                    this.options.bounce ? this.wrapperWidth : 0,
                    this.options.deceleration
                  )
                : { destination: n, duration: 0 }),
              (s = this.hasVerticalScroll
                ? h.momentum(
                    this.y,
                    this.startY,
                    o,
                    this.maxScrollY,
                    this.options.bounce ? this.wrapperHeight : 0,
                    this.options.deceleration
                  )
                : { destination: r, duration: 0 }),
              (n = i.destination),
              (r = s.destination),
              (c = e.max(i.duration, s.duration)),
              (this.isInTransition = 1)),
            this.options.snap)
          ) {
            var d = this._nearestSnap(n, r);
            (this.currentPage = d),
              (c =
                this.options.snapSpeed ||
                e.max(
                  e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)),
                  300
                )),
              (n = d.x),
              (r = d.y),
              (this.directionX = 0),
              (this.directionY = 0),
              (p = this.options.bounceEasing);
          }
          return n != this.x || r != this.y
            ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) &&
                (p = h.ease.quadratic),
              void this.scrollTo(n, r, c, p))
            : void this._execEvent("scrollEnd");
        }
      }
    },
    _resize: function () {
      var t = this;
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(function () {
          t.refresh();
        }, this.options.resizePolling));
    },
    resetPosition: function (t) {
      var i = this.x,
        e = this.y;
      return (
        (t = t || 0),
        !this.hasHorizontalScroll || this.x > 0
          ? (i = 0)
          : this.x < this.maxScrollX && (i = this.maxScrollX),
        !this.hasVerticalScroll || this.y > 0
          ? (e = 0)
          : this.y < this.maxScrollY && (e = this.maxScrollY),
        (i != this.x || e != this.y) &&
          (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
      );
    },
    disable: function () {
      this.enabled = !1;
    },
    enable: function () {
      this.enabled = !0;
    },
    refresh: function () {
      this.wrapper.offsetHeight;
      (this.wrapperWidth = this.wrapper.clientWidth),
        (this.wrapperHeight = this.wrapper.clientHeight),
        (this.scrollerWidth = this.scroller.offsetWidth),
        (this.scrollerHeight = this.scroller.offsetHeight),
        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
        (this.hasHorizontalScroll =
          this.options.scrollX && this.maxScrollX < 0),
        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
        this.hasHorizontalScroll ||
          ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
        this.hasVerticalScroll ||
          ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
        (this.endTime = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this.wrapperOffset = h.offset(this.wrapper)),
        this._execEvent("refresh"),
        this.resetPosition();
    },
    on: function (t, i) {
      this._events[t] || (this._events[t] = []), this._events[t].push(i);
    },
    off: function (t, i) {
      if (this._events[t]) {
        var e = this._events[t].indexOf(i);
        e > -1 && this._events[t].splice(e, 1);
      }
    },
    _execEvent: function (t) {
      if (this._events[t]) {
        var i = 0,
          e = this._events[t].length;
        if (e)
          for (; i < e; i++)
            this._events[t][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (t, i, e, s) {
      (t = this.x + t),
        (i = this.y + i),
        (e = e || 0),
        this.scrollTo(t, i, e, s);
    },
    scrollTo: function (t, i, e, s) {
      (s = s || h.ease.circular),
        (this.isInTransition = this.options.useTransition && e > 0);
      var o = this.options.useTransition && s.style;
      !e || o
        ? (o &&
            (this._transitionTimingFunction(s.style), this._transitionTime(e)),
          this._translate(t, i))
        : this._animate(t, i, e, s.fn);
    },
    scrollToElement: function (t, i, s, o, n) {
      if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
        var r = h.offset(t);
        (r.left -= this.wrapperOffset.left),
          (r.top -= this.wrapperOffset.top),
          s === !0 &&
            (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
          o === !0 &&
            (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
          (r.left -= s || 0),
          (r.top -= o || 0),
          (r.left =
            r.left > 0
              ? 0
              : r.left < this.maxScrollX
              ? this.maxScrollX
              : r.left),
          (r.top =
            r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top),
          (i =
            void 0 === i || null === i || "auto" === i
              ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top))
              : i),
          this.scrollTo(r.left, r.top, i, n);
      }
    },
    _transitionTime: function (t) {
      if (this.options.useTransition) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i) {
          if (((this.scrollerStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
            this.scrollerStyle[i] = "0.0001ms";
            var e = this;
            r(function () {
              "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s");
            });
          }
          if (this.indicators)
            for (var s = this.indicators.length; s--; )
              this.indicators[s].transitionTime(t);
        }
      }
    },
    _transitionTimingFunction: function (t) {
      if (
        ((this.scrollerStyle[h.style.transitionTimingFunction] = t),
        this.indicators)
      )
        for (var i = this.indicators.length; i--; )
          this.indicators[i].transitionTimingFunction(t);
    },
    _translate: function (t, i) {
      if (
        (this.options.useTransform
          ? (this.scrollerStyle[h.style.transform] =
              "translate(" + t + "px," + i + "px)" + this.translateZ)
          : ((t = e.round(t)),
            (i = e.round(i)),
            (this.scrollerStyle.left = t + "px"),
            (this.scrollerStyle.top = i + "px")),
        (this.x = t),
        (this.y = i),
        this.indicators)
      )
        for (var s = this.indicators.length; s--; )
          this.indicators[s].updatePosition();
    },
    _initEvents: function (i) {
      var e = i ? h.removeEvent : h.addEvent,
        s = this.options.bindToWrapper ? this.wrapper : t;
      e(t, "orientationchange", this),
        e(t, "resize", this),
        this.options.click && e(this.wrapper, "click", this, !0),
        this.options.disableMouse ||
          (e(this.wrapper, "mousedown", this),
          e(s, "mousemove", this),
          e(s, "mousecancel", this),
          e(s, "mouseup", this)),
        h.hasPointer &&
          !this.options.disablePointer &&
          (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this),
          e(s, h.prefixPointerEvent("pointermove"), this),
          e(s, h.prefixPointerEvent("pointercancel"), this),
          e(s, h.prefixPointerEvent("pointerup"), this)),
        h.hasTouch &&
          !this.options.disableTouch &&
          (e(this.wrapper, "touchstart", this),
          e(s, "touchmove", this),
          e(s, "touchcancel", this),
          e(s, "touchend", this)),
        e(this.scroller, "transitionend", this),
        e(this.scroller, "webkitTransitionEnd", this),
        e(this.scroller, "oTransitionEnd", this),
        e(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition: function () {
      var i,
        e,
        s = t.getComputedStyle(this.scroller, null);
      return (
        this.options.useTransform
          ? ((s = s[h.style.transform].split(")")[0].split(", ")),
            (i = +(s[12] || s[4])),
            (e = +(s[13] || s[5])))
          : ((i = +s.left.replace(/[^-\d.]/g, "")),
            (e = +s.top.replace(/[^-\d.]/g, ""))),
        { x: i, y: e }
      );
    },
    _initIndicators: function () {
      function t(t) {
        if (h.indicators)
          for (var i = h.indicators.length; i--; ) t.call(h.indicators[i]);
      }
      var i,
        e = this.options.interactiveScrollbars,
        s = "string" != typeof this.options.scrollbars,
        r = [],
        h = this;
      (this.indicators = []),
        this.options.scrollbars &&
          (this.options.scrollY &&
            ((i = {
              el: o("v", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i)),
          this.options.scrollX &&
            ((i = {
              el: o("h", e, this.options.scrollbars),
              interactive: e,
              defaultScrollbars: !0,
              customStyle: s,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: !1,
            }),
            this.wrapper.appendChild(i.el),
            r.push(i))),
        this.options.indicators && (r = r.concat(this.options.indicators));
      for (var a = r.length; a--; ) this.indicators.push(new n(this, r[a]));
      this.options.fadeScrollbars &&
        (this.on("scrollEnd", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollCancel", function () {
          t(function () {
            this.fade();
          });
        }),
        this.on("scrollStart", function () {
          t(function () {
            this.fade(1);
          });
        }),
        this.on("beforeScrollStart", function () {
          t(function () {
            this.fade(1, !0);
          });
        })),
        this.on("refresh", function () {
          t(function () {
            this.refresh();
          });
        }),
        this.on("destroy", function () {
          t(function () {
            this.destroy();
          }),
            delete this.indicators;
        });
    },
    _initWheel: function () {
      h.addEvent(this.wrapper, "wheel", this),
        h.addEvent(this.wrapper, "mousewheel", this),
        h.addEvent(this.wrapper, "DOMMouseScroll", this),
        this.on("destroy", function () {
          clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = null),
            h.removeEvent(this.wrapper, "wheel", this),
            h.removeEvent(this.wrapper, "mousewheel", this),
            h.removeEvent(this.wrapper, "DOMMouseScroll", this);
        });
    },
    _wheel: function (t) {
      if (this.enabled) {
        var i,
          s,
          o,
          n,
          r = this;
        if (
          (void 0 === this.wheelTimeout && r._execEvent("scrollStart"),
          clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function () {
            r.options.snap || r._execEvent("scrollEnd"),
              (r.wheelTimeout = void 0);
          }, 400)),
          "deltaX" in t)
        )
          1 === t.deltaMode
            ? ((i = -t.deltaX * this.options.mouseWheelSpeed),
              (s = -t.deltaY * this.options.mouseWheelSpeed))
            : ((i = -t.deltaX), (s = -t.deltaY));
        else if ("wheelDeltaX" in t)
          (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
            (s = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
        else if ("wheelDelta" in t)
          i = s = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
        else {
          if (!("detail" in t)) return;
          i = s = (-t.detail / 3) * this.options.mouseWheelSpeed;
        }
        if (
          ((i *= this.options.invertWheelDirection),
          (s *= this.options.invertWheelDirection),
          this.hasVerticalScroll || ((i = s), (s = 0)),
          this.options.snap)
        )
          return (
            (o = this.currentPage.pageX),
            (n = this.currentPage.pageY),
            i > 0 ? o-- : i < 0 && o++,
            s > 0 ? n-- : s < 0 && n++,
            void this.goToPage(o, n)
          );
        (o = this.x + e.round(this.hasHorizontalScroll ? i : 0)),
          (n = this.y + e.round(this.hasVerticalScroll ? s : 0)),
          (this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0),
          (this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0),
          o > 0 ? (o = 0) : o < this.maxScrollX && (o = this.maxScrollX),
          n > 0 ? (n = 0) : n < this.maxScrollY && (n = this.maxScrollY),
          this.scrollTo(o, n, 0);
      }
    },
    _initSnap: function () {
      (this.currentPage = {}),
        "string" == typeof this.options.snap &&
          (this.options.snap = this.scroller.querySelectorAll(
            this.options.snap
          )),
        this.on("refresh", function () {
          var t,
            i,
            s,
            o,
            n,
            r,
            h = 0,
            a = 0,
            l = 0,
            c = this.options.snapStepX || this.wrapperWidth,
            p = this.options.snapStepY || this.wrapperHeight;
          if (
            ((this.pages = []),
            this.wrapperWidth &&
              this.wrapperHeight &&
              this.scrollerWidth &&
              this.scrollerHeight)
          ) {
            if (this.options.snap === !0)
              for (
                s = e.round(c / 2), o = e.round(p / 2);
                l > -this.scrollerWidth;

              ) {
                for (
                  this.pages[h] = [], t = 0, n = 0;
                  n > -this.scrollerHeight;

                )
                  (this.pages[h][t] = {
                    x: e.max(l, this.maxScrollX),
                    y: e.max(n, this.maxScrollY),
                    width: c,
                    height: p,
                    cx: l - s,
                    cy: n - o,
                  }),
                    (n -= p),
                    t++;
                (l -= c), h++;
              }
            else
              for (r = this.options.snap, t = r.length, i = -1; h < t; h++)
                (0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) &&
                  ((a = 0), i++),
                  this.pages[a] || (this.pages[a] = []),
                  (l = e.max(-r[h].offsetLeft, this.maxScrollX)),
                  (n = e.max(-r[h].offsetTop, this.maxScrollY)),
                  (s = l - e.round(r[h].offsetWidth / 2)),
                  (o = n - e.round(r[h].offsetHeight / 2)),
                  (this.pages[a][i] = {
                    x: l,
                    y: n,
                    width: r[h].offsetWidth,
                    height: r[h].offsetHeight,
                    cx: s,
                    cy: o,
                  }),
                  l > this.maxScrollX && a++;
            this.goToPage(
              this.currentPage.pageX || 0,
              this.currentPage.pageY || 0,
              0
            ),
              this.options.snapThreshold % 1 === 0
                ? ((this.snapThresholdX = this.options.snapThreshold),
                  (this.snapThresholdY = this.options.snapThreshold))
                : ((this.snapThresholdX = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .width * this.options.snapThreshold
                  )),
                  (this.snapThresholdY = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .height * this.options.snapThreshold
                  )));
          }
        }),
        this.on("flick", function () {
          var t =
            this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(this.x - this.startX), 1e3),
                e.min(e.abs(this.y - this.startY), 1e3)
              ),
              300
            );
          this.goToPage(
            this.currentPage.pageX + this.directionX,
            this.currentPage.pageY + this.directionY,
            t
          );
        });
    },
    _nearestSnap: function (t, i) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
      var s = 0,
        o = this.pages.length,
        n = 0;
      if (
        e.abs(t - this.absStartX) < this.snapThresholdX &&
        e.abs(i - this.absStartY) < this.snapThresholdY
      )
        return this.currentPage;
      for (
        t > 0 ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
          i > 0 ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
        s < o;
        s++
      )
        if (t >= this.pages[s][0].cx) {
          t = this.pages[s][0].x;
          break;
        }
      for (o = this.pages[s].length; n < o; n++)
        if (i >= this.pages[0][n].cy) {
          i = this.pages[0][n].y;
          break;
        }
      return (
        s == this.currentPage.pageX &&
          ((s += this.directionX),
          s < 0
            ? (s = 0)
            : s >= this.pages.length && (s = this.pages.length - 1),
          (t = this.pages[s][0].x)),
        n == this.currentPage.pageY &&
          ((n += this.directionY),
          n < 0
            ? (n = 0)
            : n >= this.pages[0].length && (n = this.pages[0].length - 1),
          (i = this.pages[0][n].y)),
        { x: t, y: i, pageX: s, pageY: n }
      );
    },
    goToPage: function (t, i, s, o) {
      (o = o || this.options.bounceEasing),
        t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0),
        i >= this.pages[t].length
          ? (i = this.pages[t].length - 1)
          : i < 0 && (i = 0);
      var n = this.pages[t][i].x,
        r = this.pages[t][i].y;
      (s =
        void 0 === s
          ? this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(n - this.x), 1e3),
                e.min(e.abs(r - this.y), 1e3)
              ),
              300
            )
          : s),
        (this.currentPage = { x: n, y: r, pageX: t, pageY: i }),
        this.scrollTo(n, r, s, o);
    },
    next: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e++,
        e >= this.pages.length && this.hasVerticalScroll && ((e = 0), s++),
        this.goToPage(e, s, t, i);
    },
    prev: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      e--,
        e < 0 && this.hasVerticalScroll && ((e = 0), s--),
        this.goToPage(e, s, t, i);
    },
    _initKeys: function (i) {
      var e,
        s = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
        };
      if ("object" == typeof this.options.keyBindings)
        for (e in this.options.keyBindings)
          "string" == typeof this.options.keyBindings[e] &&
            (this.options.keyBindings[e] = this.options.keyBindings[e]
              .toUpperCase()
              .charCodeAt(0));
      else this.options.keyBindings = {};
      for (e in s)
        this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
      h.addEvent(t, "keydown", this),
        this.on("destroy", function () {
          h.removeEvent(t, "keydown", this);
        });
    },
    _key: function (t) {
      if (this.enabled) {
        var i,
          s = this.options.snap,
          o = s ? this.currentPage.pageX : this.x,
          n = s ? this.currentPage.pageY : this.y,
          r = h.getTime(),
          a = this.keyTime || 0,
          l = 0.25;
        switch (
          (this.options.useTransition &&
            this.isInTransition &&
            ((i = this.getComputedPosition()),
            this._translate(e.round(i.x), e.round(i.y)),
            (this.isInTransition = !1)),
          (this.keyAcceleration =
            r - a < 200 ? e.min(this.keyAcceleration + l, 50) : 0),
          t.keyCode)
        ) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o += s ? 1 : this.wrapperWidth)
              : (n += s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (o -= s ? 1 : this.wrapperWidth)
              : (n -= s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.end:
            (o = s ? this.pages.length - 1 : this.maxScrollX),
              (n = s ? this.pages[0].length - 1 : this.maxScrollY);
            break;
          case this.options.keyBindings.home:
            (o = 0), (n = 0);
            break;
          case this.options.keyBindings.left:
            o += s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.up:
            n += s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.right:
            o -= s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.down:
            n -= s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          default:
            return;
        }
        if (s) return void this.goToPage(o, n);
        o > 0
          ? ((o = 0), (this.keyAcceleration = 0))
          : o < this.maxScrollX &&
            ((o = this.maxScrollX), (this.keyAcceleration = 0)),
          n > 0
            ? ((n = 0), (this.keyAcceleration = 0))
            : n < this.maxScrollY &&
              ((n = this.maxScrollY), (this.keyAcceleration = 0)),
          this.scrollTo(o, n, 0),
          (this.keyTime = r);
      }
    },
    _animate: function (t, i, e, s) {
      function o() {
        var d,
          u,
          f,
          m = h.getTime();
        return m >= p
          ? ((n.isAnimating = !1),
            n._translate(t, i),
            void (
              n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd")
            ))
          : ((m = (m - c) / e),
            (f = s(m)),
            (d = (t - a) * f + a),
            (u = (i - l) * f + l),
            n._translate(d, u),
            void (n.isAnimating && r(o)));
      }
      var n = this,
        a = this.x,
        l = this.y,
        c = h.getTime(),
        p = c + e;
      (this.isAnimating = !0), o();
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(t);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(t);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(t);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(t);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(t);
          break;
        case "keydown":
          this._key(t);
          break;
        case "click":
          this.enabled &&
            !t._constructed &&
            (t.preventDefault(), t.stopPropagation());
      }
    },
  }),
    (n.prototype = {
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
        }
      },
      destroy: function () {
        this.options.fadeScrollbars &&
          (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
          this.options.interactive &&
            (h.removeEvent(this.indicator, "touchstart", this),
            h.removeEvent(
              this.indicator,
              h.prefixPointerEvent("pointerdown"),
              this
            ),
            h.removeEvent(this.indicator, "mousedown", this),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            h.removeEvent(t, "touchend", this),
            h.removeEvent(t, h.prefixPointerEvent("pointerup"), this),
            h.removeEvent(t, "mouseup", this)),
          this.options.defaultScrollbars &&
            this.wrapper.parentNode.removeChild(this.wrapper);
      },
      _start: function (i) {
        var e = i.touches ? i.touches[0] : i;
        i.preventDefault(),
          i.stopPropagation(),
          this.transitionTime(),
          (this.initiated = !0),
          (this.moved = !1),
          (this.lastPointX = e.pageX),
          (this.lastPointY = e.pageY),
          (this.startTime = h.getTime()),
          this.options.disableTouch || h.addEvent(t, "touchmove", this),
          this.options.disablePointer ||
            h.addEvent(t, h.prefixPointerEvent("pointermove"), this),
          this.options.disableMouse || h.addEvent(t, "mousemove", this),
          this.scroller._execEvent("beforeScrollStart");
      },
      _move: function (t) {
        var i,
          e,
          s,
          o,
          n = t.touches ? t.touches[0] : t;
        h.getTime();
        this.moved || this.scroller._execEvent("scrollStart"),
          (this.moved = !0),
          (i = n.pageX - this.lastPointX),
          (this.lastPointX = n.pageX),
          (e = n.pageY - this.lastPointY),
          (this.lastPointY = n.pageY),
          (s = this.x + i),
          (o = this.y + e),
          this._pos(s, o),
          t.preventDefault(),
          t.stopPropagation();
      },
      _end: function (i) {
        if (this.initiated) {
          if (
            ((this.initiated = !1),
            i.preventDefault(),
            i.stopPropagation(),
            h.removeEvent(t, "touchmove", this),
            h.removeEvent(t, h.prefixPointerEvent("pointermove"), this),
            h.removeEvent(t, "mousemove", this),
            this.scroller.options.snap)
          ) {
            var s = this.scroller._nearestSnap(
                this.scroller.x,
                this.scroller.y
              ),
              o =
                this.options.snapSpeed ||
                e.max(
                  e.max(
                    e.min(e.abs(this.scroller.x - s.x), 1e3),
                    e.min(e.abs(this.scroller.y - s.y), 1e3)
                  ),
                  300
                );
            (this.scroller.x == s.x && this.scroller.y == s.y) ||
              ((this.scroller.directionX = 0),
              (this.scroller.directionY = 0),
              (this.scroller.currentPage = s),
              this.scroller.scrollTo(
                s.x,
                s.y,
                o,
                this.scroller.options.bounceEasing
              ));
          }
          this.moved && this.scroller._execEvent("scrollEnd");
        }
      },
      transitionTime: function (t) {
        t = t || 0;
        var i = h.style.transitionDuration;
        if (i && ((this.indicatorStyle[i] = t + "ms"), !t && h.isBadAndroid)) {
          this.indicatorStyle[i] = "0.0001ms";
          var e = this;
          r(function () {
            "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s");
          });
        }
      },
      transitionTimingFunction: function (t) {
        this.indicatorStyle[h.style.transitionTimingFunction] = t;
      },
      refresh: function () {
        this.transitionTime(),
          this.options.listenX && !this.options.listenY
            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                ? "block"
                : "none")
            : this.options.listenY && !this.options.listenX
            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                ? "block"
                : "none")
            : (this.indicatorStyle.display =
                this.scroller.hasHorizontalScroll ||
                this.scroller.hasVerticalScroll
                  ? "block"
                  : "none"),
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
            ? (h.addClass(this.wrapper, "iScrollBothScrollbars"),
              h.removeClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "8px")
                  : (this.wrapper.style.bottom = "8px")))
            : (h.removeClass(this.wrapper, "iScrollBothScrollbars"),
              h.addClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "2px")
                  : (this.wrapper.style.bottom = "2px")));
        this.wrapper.offsetHeight;
        this.options.listenX &&
          ((this.wrapperWidth = this.wrapper.clientWidth),
          this.options.resize
            ? ((this.indicatorWidth = e.max(
                e.round(
                  (this.wrapperWidth * this.wrapperWidth) /
                    (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                ),
                8
              )),
              (this.indicatorStyle.width = this.indicatorWidth + "px"))
            : (this.indicatorWidth = this.indicator.clientWidth),
          (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
          "clip" == this.options.shrink
            ? ((this.minBoundaryX = -this.indicatorWidth + 8),
              (this.maxBoundaryX = this.wrapperWidth - 8))
            : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
          (this.sizeRatioX =
            this.options.speedRatioX ||
            (this.scroller.maxScrollX &&
              this.maxPosX / this.scroller.maxScrollX))),
          this.options.listenY &&
            ((this.wrapperHeight = this.wrapper.clientHeight),
            this.options.resize
              ? ((this.indicatorHeight = e.max(
                  e.round(
                    (this.wrapperHeight * this.wrapperHeight) /
                      (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.height = this.indicatorHeight + "px"))
              : (this.indicatorHeight = this.indicator.clientHeight),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            "clip" == this.options.shrink
              ? ((this.minBoundaryY = -this.indicatorHeight + 8),
                (this.maxBoundaryY = this.wrapperHeight - 8))
              : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            (this.sizeRatioY =
              this.options.speedRatioY ||
              (this.scroller.maxScrollY &&
                this.maxPosY / this.scroller.maxScrollY))),
          this.updatePosition();
      },
      updatePosition: function () {
        var t =
            (this.options.listenX &&
              e.round(this.sizeRatioX * this.scroller.x)) ||
            0,
          i =
            (this.options.listenY &&
              e.round(this.sizeRatioY * this.scroller.y)) ||
            0;
        this.options.ignoreBoundaries ||
          (t < this.minBoundaryX
            ? ("scale" == this.options.shrink &&
                ((this.width = e.max(this.indicatorWidth + t, 8)),
                (this.indicatorStyle.width = this.width + "px")),
              (t = this.minBoundaryX))
            : t > this.maxBoundaryX
            ? "scale" == this.options.shrink
              ? ((this.width = e.max(
                  this.indicatorWidth - (t - this.maxPosX),
                  8
                )),
                (this.indicatorStyle.width = this.width + "px"),
                (t = this.maxPosX + this.indicatorWidth - this.width))
              : (t = this.maxBoundaryX)
            : "scale" == this.options.shrink &&
              this.width != this.indicatorWidth &&
              ((this.width = this.indicatorWidth),
              (this.indicatorStyle.width = this.width + "px")),
          i < this.minBoundaryY
            ? ("scale" == this.options.shrink &&
                ((this.height = e.max(this.indicatorHeight + 3 * i, 8)),
                (this.indicatorStyle.height = this.height + "px")),
              (i = this.minBoundaryY))
            : i > this.maxBoundaryY
            ? "scale" == this.options.shrink
              ? ((this.height = e.max(
                  this.indicatorHeight - 3 * (i - this.maxPosY),
                  8
                )),
                (this.indicatorStyle.height = this.height + "px"),
                (i = this.maxPosY + this.indicatorHeight - this.height))
              : (i = this.maxBoundaryY)
            : "scale" == this.options.shrink &&
              this.height != this.indicatorHeight &&
              ((this.height = this.indicatorHeight),
              (this.indicatorStyle.height = this.height + "px"))),
          (this.x = t),
          (this.y = i),
          this.scroller.options.useTransform
            ? (this.indicatorStyle[h.style.transform] =
                "translate(" + t + "px," + i + "px)" + this.scroller.translateZ)
            : ((this.indicatorStyle.left = t + "px"),
              (this.indicatorStyle.top = i + "px"));
      },
      _pos: function (t, i) {
        t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
          (t = this.options.listenX
            ? e.round(t / this.sizeRatioX)
            : this.scroller.x),
          (i = this.options.listenY
            ? e.round(i / this.sizeRatioY)
            : this.scroller.y),
          this.scroller.scrollTo(t, i);
      },
      fade: function (t, i) {
        if (!i || this.visible) {
          clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
          var e = t ? 250 : 500,
            s = t ? 0 : 300;
          (t = t ? "1" : "0"),
            (this.wrapperStyle[h.style.transitionDuration] = e + "ms"),
            (this.fadeTimeout = setTimeout(
              function (t) {
                (this.wrapperStyle.opacity = t), (this.visible = +t);
              }.bind(this, t),
              s
            ));
        }
      },
    }),
    (s.utils = h),
    "undefined" != typeof module && module.exports
      ? (module.exports = s)
      : "function" == typeof define && define.amd
      ? define(function () {
          return s;
        })
      : (t.IScroll = s);
})(window, document, Math)
/*!
 * fullPage ScrollOverflow
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */,
  (function (t, i) {
    var e = "active",
      s = "." + e,
      o = "fp-section",
      n = "." + o,
      r = n + s,
      h = "fp-slide",
      a = "." + h,
      l = a + s,
      c = "fp-slides",
      p = "." + c,
      d = "fp-scrollable",
      u = "." + d;
    "undefined" != typeof IScroll &&
      ((IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
      (IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this),
          this.wrapper.removeEventListener("mousewheel", this),
          this.wrapper.removeEventListener("DOMMouseScroll", this);
      })),
      (t.iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function (t) {
          var e = i(r).find(u);
          e.each(function () {
            var e = i(this).data("iscrollInstance");
            "undefined" != typeof e && e && (t ? e.wheelOn() : e.wheelOff());
          });
        },
        onLeave: function () {
          iscrollHandler.toggleWheel(!1);
        },
        beforeLeave: function () {
          iscrollHandler.onLeave();
        },
        afterLoad: function () {
          iscrollHandler.toggleWheel(!0);
        },
        create: function (t, e, s) {
          var o = t.find(u);
          o.height(e),
            o.each(function () {
              var t = i(this),
                e = t.data("iscrollInstance");
              e &&
                i.each(iscrollHandler.iScrollInstances, function () {
                  i(this).destroy();
                }),
                (e = new IScroll(t.get(0), s)),
                e.on("scrollEnd", function () {
                  (this.fp_isAtTop = this.y > -30),
                    (this.fp_isAtEnd = this.y - this.maxScrollY < 30);
                }),
                iscrollHandler.iScrollInstances.push(e),
                e.wheelOff(),
                t.data("iscrollInstance", e);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >=
                i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(p).length ? t.find(l).find(u) : t.find(u);
        },
        scrollHeight: function (t) {
          return t.find(u).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(u);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e && e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(u).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, e) {
          clearTimeout(iscrollHandler.refreshId),
            (iscrollHandler.refreshId = setTimeout(function () {
              i.each(iscrollHandler.iScrollInstances, function () {
                i(this).get(0).refresh();
              });
            }, 150)),
            t
              .find(u)
              .css("height", e + "px")
              .parent()
              .css("height", e + "px");
        },
        wrapContent: function () {
          return '<div class="' + d + '"><div class="fp-scroller"></div></div>';
        },
      });
  })(window, jQuery),
  (function (t, i, e) {
    e.fn.fp_scrolloverflow = (function () {
      function s() {
        function s() {
          e("body").hasClass(y) ? h() : r(n);
        }
        function o(t) {
          var i = t.closest(l);
          return i.length
            ? parseInt(i.css("padding-bottom")) + parseInt(i.css("padding-top"))
            : 0;
        }
        function n(i) {
          if (!i.hasClass("fp-noscroll")) {
            i.css("overflow", "hidden");
            var s,
              n = a.options.scrollOverflowHandler,
              r = n.wrapContent(),
              h = i.closest(l),
              c = n.scrollable(i),
              p = o(h);
            c.length
              ? (s = n.scrollHeight(i))
              : ((s = i.get(0).scrollHeight - p),
                a.options.verticalCentered &&
                  (s = i.find(g).get(0).scrollHeight - p));
            var d = e(t).height() - p;
            s > d
              ? c.length
                ? n.update(i, d)
                : (a.options.verticalCentered
                    ? i.find(g).wrapInner(r)
                    : i.wrapInner(r),
                  n.create(i, d, a.iscrollOptions))
              : n.remove(i),
              i.css("overflow", "");
          }
        }
        function r(t) {
          e(l).each(function () {
            var i = e(this).find(d);
            i.length
              ? i.each(function () {
                  t(e(this));
                })
              : t(e(this));
          });
        }
        function h() {
          var t = a.options.scrollOverflowHandler;
          r(function (i) {
            i.closest(l).hasClass(x) && t.remove(i);
          });
        }
        var a = this;
        (a.options = null),
          (a.init = function (o, n) {
            return (
              (a.options = o),
              (a.iscrollOptions = n),
              "complete" === i.readyState &&
                (s(), e.fn.fullpage.shared.afterRenderActions()),
              e(t).on("load", function () {
                s(), e.fn.fullpage.shared.afterRenderActions();
              }),
              a
            );
          }),
          (a.createScrollBarForAll = s);
      }
      var o = "fp-scrollable",
        n = "." + o,
        r = "active",
        h = "." + r,
        a = "fp-section",
        l = "." + a,
        c = l + h,
        p = "fp-slide",
        d = "." + p,
        u = d + h,
        f = "fp-slides",
        m = "." + f,
        v = "fp-tableCell",
        g = "." + v,
        y = "fp-responsive",
        x = "fp-auto-height-responsive";
      (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this);
        });
      var S = {
        refreshId: null,
        iScrollInstances: [],
        iscrollOptions: {
          scrollbars: !0,
          mouseWheel: !0,
          hideScrollbars: !1,
          fadeScrollbars: !1,
          disableMouse: !0,
          interactiveScrollbars: !0,
        },
        init: function (i) {
          var o =
            "ontouchstart" in t ||
            navigator.msMaxTouchPoints > 0 ||
            navigator.maxTouchPoints;
          return (
            (S.iscrollOptions.click = o),
            (S.iscrollOptions = e.extend(
              S.iscrollOptions,
              i.scrollOverflowOptions
            )),
            new s().init(i, S.iscrollOptions)
          );
        },
        toggleWheel: function (t) {
          var i = e(c).find(n);
          i.each(function () {
            var i = e(this).data("iscrollInstance");
            "undefined" != typeof i && i && (t ? i.wheelOn() : i.wheelOff());
          });
        },
        onLeave: function () {
          S.toggleWheel(!1);
        },
        beforeLeave: function () {
          S.onLeave();
        },
        afterLoad: function () {
          S.toggleWheel(!0);
        },
        create: function (t, i, s) {
          var o = t.find(n);
          o.height(i),
            o.each(function () {
              var t = e(this),
                i = t.data("iscrollInstance");
              i &&
                e.each(S.iScrollInstances, function () {
                  e(this).destroy();
                }),
                (i = new IScroll(t.get(0), s)),
                S.iScrollInstances.push(i),
                i.wheelOff(),
                t.data("iscrollInstance", i);
            });
        },
        isScrolled: function (t, i) {
          var e = i.data("iscrollInstance");
          return (
            !e ||
            ("top" === t
              ? e.y >= 0 && !i.scrollTop()
              : "bottom" === t
              ? 0 - e.y + i.scrollTop() + 1 + i.innerHeight() >=
                i[0].scrollHeight
              : void 0)
          );
        },
        scrollable: function (t) {
          return t.find(m).length ? t.find(u).find(n) : t.find(n);
        },
        scrollHeight: function (t) {
          return t.find(n).children().first().get(0).scrollHeight;
        },
        remove: function (t) {
          var i = t.find(n);
          if (i.length) {
            var e = i.data("iscrollInstance");
            e.destroy(), i.data("iscrollInstance", null);
          }
          t.find(n).children().first().children().first().unwrap().unwrap();
        },
        update: function (t, i) {
          clearTimeout(S.refreshId),
            (S.refreshId = setTimeout(function () {
              e.each(S.iScrollInstances, function () {
                e(this).get(0).refresh(),
                  e.fn.fullpage.silentMoveTo(e(c).index() + 1);
              });
            }, 150)),
            t
              .find(n)
              .css("height", i + "px")
              .parent()
              .css("height", i + getPaddings(t) + "px");
        },
        wrapContent: function () {
          return '<div class="' + o + '"><div class="fp-scroller"></div></div>';
        },
      };
      return { iscrollHandler: S };
    })();
  })(window, document, jQuery);
//# sourceMappingURL=scrolloverflow.min.js.map
