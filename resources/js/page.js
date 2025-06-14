APP.namespace("APP.proSeeAll");
APP.namespace("APP.proPlatform");
APP.namespace("APP.proReasonClient");
APP.namespace("APP.proReasonClientFilter");
APP.namespace("APP.proOutline");
APP.namespace("APP.proDetail");
APP.namespace("APP.cusFaq");
APP.namespace("APP.cusQna");
APP.namespace("APP.comInfo");
APP.namespace("APP.comEmploymentNotice");
APP.namespace("APP.comNewsRoom");
APP.namespace("APP.comHrRegistComplate");

// * 제품 > 와치올 모두 살펴보기 [PC-PRO-01-01]
APP.proSeeAll = $(function () {
  if ($("body").hasClass("page-pro-see-all")) {
    $(window).scroll(
      throttle(function () {
        $("header").removeClass("color-reverse");
      })
    );

    scrollSpy("#content", {
      sectionClass: ".scrollspy",
      menuActiveTarget: "#scroll-spy-menu .anchor",
      offset: 100,
      smoothScroll: true,
      smoothScrollBehavior: function (element) {
        element.scrollIntoView({ behavior: "smooth" }); // default behavior
      },
    });

    const descriptionWrapHeight = $("#section-1 .visual__list-area").height();
    $("#section-1 .description-wrap").css({ height: descriptionWrapHeight });
  }
});

// * 제품 > 서비스 플랫폼 [템플릿]
// * 제품 > 서비스 플랫폼 > 와치올 애플망고 [PC-PRO-09-01]
// * 제품 > 서비스 플랫폼 > 와치올 구아바 [PC-PRO-09-02]
// * 제품 > 서비스 플랫폼 > 와치올 ITSM [PC-PRO-09-03]
// * 제품 > 서비스 플랫폼 > 와치올 cmp [PC-PRO-09-04]
// * 제품 > 서비스 플랫폼 > 와치로그 [PC-PRO-09-05]
APP.proPlatform = $(function () {
  if ($("body").hasClass("page-pro-platform")) {
    contentLightness();

    scrollSpy("#content", {
      sectionClass: ".scrollspy",
      menuActiveTarget: "#scroll-spy-menu .anchor",
      offset: -100,
      smoothScroll: true,
      smoothScrollBehavior: function (element) {
        element.scrollIntoView({ behavior: "smooth" }); // default behavior
      },
    });

    if (!window.matchMedia("screen and (max-width: 992px)").matches) {
      var height = $("#section-item .item-area").height();
      $(".description-wrap").css({ height });
    }

    $(document).scroll(function () {
      var scroll = $(document).scrollTop();

      if (scroll >= $("#section-item").offset().top) {
        $("#scroll-spy-menu").addClass("active");
      } else {
        $("#scroll-spy-menu").removeClass("active");
      }
    });

    var ActiveContentHeaderLinkPos = $(
      $(".content__header-real .content__header__link.active").get(0)
    ).offset().left;
    $(".content__header-real .layout-container").animate(
      { scrollLeft: ActiveContentHeaderLinkPos - 24 },
      100
    );

    let preScrollTop = 0;
    $(window).scroll(
      throttle(function () {
        var scroll = $(document).scrollTop();

        if (scroll >= $(".content__header-real").offset().top) {
          $(".content__header-fake").removeClass("hide");

          if (isMobile) {
            $(".content__header-fake .layout-container").animate(
              { scrollLeft: ActiveContentHeaderLinkPos - 24 },
              100
            );
          }

          let nextScrollTop = window.scrollY;

          if (preScrollTop < nextScrollTop) {
            $(".content__header-fake").addClass("active");
            $(".content__header-real").addClass("active");
          } else {
            $(".content__header-fake").removeClass("active");
            $(".content__header-real").removeClass("active");
          }
          preScrollTop = nextScrollTop;
        } else {
          $(".content__header-fake").addClass("hide");
        }
      }, 200)
    );

    if ($("body").hasClass("page-pro-platform-applemango")) {
      ScrollTrigger.create({
        trigger: "#item-2",
        start: "-200% bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-1", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-4",
        start: "top bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-2", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-6",
        start: "top bottom",
        end: "400% bottom",
        toggleClass: { targets: ".description-3", className: "active" },
      });
    }
    if ($("body").hasClass("page-pro-platform-guava")) {
      ScrollTrigger.create({
        trigger: "#item-2",
        start: "-200% bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-1", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-4",
        start: "top bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-2", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-6",
        start: "top bottom",
        end: "400% bottom",
        toggleClass: { targets: ".description-3", className: "active" },
      });
    }
    if ($("body").hasClass("page-pro-platform-itsm")) {
      ScrollTrigger.create({
        trigger: "#item-2",
        start: "-200% bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-1", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-4",
        start: "top bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-2", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-6",
        start: "top bottom",
        end: "400% bottom",
        toggleClass: { targets: ".description-3", className: "active" },
      });
    }
    if ($("body").hasClass("page-pro-platform-cmp")) {
      ScrollTrigger.create({
        trigger: "#item-2",
        start: "-200% bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-1", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-4",
        start: "top bottom",
        end: "330% bottom",
        toggleClass: { targets: ".description-2", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-7",
        start: "top bottom",
        end: "400% bottom",
        toggleClass: { targets: ".description-3", className: "active" },
      });
    }
    if ($("body").hasClass("page-pro-platform-log")) {
      ScrollTrigger.create({
        trigger: "#item-2",
        start: "-200% bottom",
        end: "100% bottom",
        toggleClass: { targets: ".description-1", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-3",
        start: "top bottom",
        end: "200% bottom",
        toggleClass: { targets: ".description-2", className: "active" },
      });
      ScrollTrigger.create({
        trigger: "#item-5",
        start: "top bottom",
        end: "400% bottom",
        toggleClass: { targets: ".description-3", className: "active" },
      });
    }
  }
});

// * 제품 > 와치올을 선택하는 이유 공통
// * 제품 > 와치올을 선택하는 이유 > 고객사 TAB [PC-PRO-02-01]
// * 제품 > 와치올을 선택하는 이유 > 성공사례 TAB [PC-PRO-02-02]
APP.proReasonClient = $(function () {
  if ($("body").hasClass("page-pro-tab")) {
    if (!$("body").hasClass("page-pro-reason-success-view")) {
      contentLightness();
    }

    if ($("body").hasClass("page-pro-reason-success-view")) {
      $("#header").removeClass("color-reverse");
    }

    let preScrollTop = 0;
    $(window).scroll(
      throttle(function () {
        var scroll = $(document).scrollTop();

        if ($(".section__header").length !== 0) {
          if (scroll >= $(".section__header").offset().top) {
            let nextScrollTop = window.scrollY;

            if (preScrollTop < nextScrollTop) {
              $(".section__header").addClass("transform");
            } else {
              $(".section__header").removeClass("transform");
            }
            preScrollTop = nextScrollTop;
          }
        }
      }, 200)
    );

    var sticky = new Sticky(".section__header");

    $(".collapse-pack").on("click", function () {
      const $filterArea = $(".filter-area");
      if ($(this).next($filterArea).hasClass("close")) {
        $(this).next($filterArea).removeClass("close");
        $(this).next($filterArea).slideDown(500);
        $(this).find(".btn-filter-collapse").removeClass("active");
      } else {
        $(this).next($filterArea).addClass("close");
        $(this).next($filterArea).slideUp(500);
        $(this).find(".btn-filter-collapse").addClass("active");
      }
    });

    $(".filter-area .checkbox").each((idx, el) => {
      $(el).change(function () {
        if ($(el).prop("checked") === true) {
          $(".btn-filter-opener").addClass("active");
        } else {
//          console.log($(".filter-area .checkbox"));
          var arr = $(".filter-area .checkbox");
          var temp = [];
          for (let i = 0; i < arr.length; i++) {
            const checkbox = arr[i];
            if ($(checkbox).prop("checked") === true) {
              temp.push(checkbox);
            }
          }
          if (temp.length === 0) {
            $(".btn-filter-opener").removeClass("active");
          }
        }
      });
    });

    $(".collapse-pack").each((idx, el) => {
      if (idx !== 0) {
        $(el).trigger("click");
      }
    });

    ScrollTrigger.create({
      trigger: ".main-visual",
      start: "top top",
      onEnter: () => {
        gsap.fromTo(".section-visual-dim", { autoAlpha: 0 }, { autoAlpha: 1 });
      },
      onLeaveBack: () => {
        gsap.fromTo(".section-visual-dim", { autoAlpha: 1 }, { autoAlpha: 0 });
      },
    });

    $(function () {
      ScrollTrigger.create({
        trigger: ".main-visual",
        start: "top top",
        onEnter: () => {
          gsap.to(".section__title", { autoAlpha: 0 });
          gsap.to(".breadcrumb", { autoAlpha: 0 });
        },
        onLeaveBack: () => {
          gsap.to(".section__title", { autoAlpha: 1 });
          gsap.to(".breadcrumb", { autoAlpha: 1 });
        },
      });

      var controller = new ScrollMagic.Controller();

      var tween1 = TweenMax.fromTo(
        ".message",
        0.5,
        {
          y: "100%",
        },
        {
          y: "0%",
        }
      );
      var tween2 = TweenMax.fromTo(
        ".message .span",
        0.5,
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          delay: 2,
        }
      );

      var timeline = new TimelineMax();

      if (isMobile) {
        timeline.add(tween1).add(tween2);
      } else {
        if (isLangEn) {
          var tween3 = TweenMax.fromTo(
            ".message .strong1",
            0.5,
            {
              right: 0,
            },
            {
              right: -120,
            }
          );
        } else {
          var tween3 = TweenMax.fromTo(
            ".message .strong1",
            0.5,
            {
              right: 0,
            },
            {
              right: -180,
            }
          );
        }
        var tween4 = TweenMax.fromTo(
          ".message",
          0.5,
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            delay: 5,
          }
        );
        timeline.add(tween1).add(tween2).add(tween3).add(tween4);
      }

      var scene = new ScrollMagic.Scene({
        triggerElement: ".message-wrap",
        duration: "300%",
        triggerHook: 0.4,
      })
        .setTween(timeline)
        .addTo(controller);

      if (isMobile) {
        var messageAraeSceneParam = {
          triggerElement: ".message-area",
          duration: 700,
          triggerHook: 0.4,
        };
      } else {
        var messageAraeSceneParam = {
          triggerElement: ".message-area",
          duration: 1400,
          triggerHook: 0.5,
        };
      }

      new ScrollMagic.Scene(messageAraeSceneParam)
        .setPin(".message-wrap")
        .setClassToggle(".message-wrap", "active")
        .addTo(controller);
    });
  }
});

// * 제품 > 와치올을 선택하는 이유 공통
// * 제품 > 와치올을 선택하는 이유 > 고객사 TAB [PC-PRO-02-01]
// * 제품 > 와치올을 선택하는 이유 > 성공사례 TAB [PC-PRO-02-02]
APP.proReasonClientFilter = $(function () {
  if ($("body").hasClass("page-pro-tab")) {
    // * 클라이언트 리스트 필터
    // 체크박스 전체 해제
    $(".btn-filter-off, .btn-cta-filter-off").on("click", function () {
      $(".filter-area .checkbox").each((idx, el) => {
        $(el).prop("checked", false);
        $(".btn-filter-opener").removeClass("active");
      });
      $(".js-client-list").each((idx, el) => {
        $(el).show();
      });
    });

    $(".btn-cta-active").on("click", function () {
      $(".btn-filter-close").trigger("click");
    });

    // 체크박스가 변경될 때
    $(".filter-area .checkbox").change(function () {
      // 현재 체크된 체크박스를 filters 배열에 종합한다
      var filters = [];
      $(".filter-area .checkbox").each((idx, el) => {
        if ($(el).is(":checked")) {
          filters.push($(el).data("filter"));
        }
      });

      // 체크된 체크박스가 없다면 모든 js-client-list 엘리먼트를 노출한다
      if (filters.length === 0) {
        $(".js-client-list").each((idx, el) => {
          $(el).show();
        });
        // 체크된 체크박스가 있다면
      } else {
        // 체크박스 값에 해당되는 엘리먼트 목록을 취합하기 위해 temps 배열을 만들고나서
        var temps = [];

        // filters 배열을 순회한다
        $(filters).each((idx, val) => {
          // js-client-list 목록을 순회하며
          // 카테고리가 filters 배열의 값에 해당하는지 확인한다
          $(".js-client-list").each((idx, el) => {
            var els = $(el)
              .data("category")
              .filter((x) => x === val);

            // 만약 js-client-list 엘리먼트 중에서 체크된 filters 값에 해당한다면 temps 배열에 취합한다
            if (els.length !== 0) {
              temps.push(el);
            }
          });
        });

        // 우선 모든 js-client-list를 숨기고
        $(".js-client-list").hide();

        // temps 에 취합된 요소들
        // 즉, 체크박스 값에 해당되는 엘리먼트 목록들만 노출한다
        $(temps).each((idx, el) => {
          $(el).show();
        });
      }
    });

    // * 모바일 필터 오프너
    $(".btn-filter-opener").on("click", function () {
      $("#section-client .aside").addClass("active");
      $(".m_bottom-bar-area").addClass("active");
    });

    $(".btn-filter-close").on("click", function () {
      $("#section-client .aside").removeClass("active");
      $(".m_bottom-bar-area").removeClass("active");
    });
  }
});

// * 제품 > 개요 공통
// * 제품 > 클라우드 > 개요 [PC-PRO-03-01]
// * 제품 > AI > 개요 [PC-PRO-04-01]
// * 제품 > 옵저버빌리티 > 개요 [PC-PRO-05-01]
// * 제품 > IT 인프라 > 개요 [PC-PRO-06-01]
// * 제품 > IT 서비스 > 개요 [PC-PRO-07-01]
// * 제품 > 시각화 > 개요 [PC-PRO-08-01]
APP.proOutline = $(function () {
  if ($("body").hasClass("page-pro-outline")) {
    contentLightness();

    if (isMobile) {
      var swiperMain = new Swiper(".swiper-main", {
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-main .swiper-button-next",
          prevEl: ".swiper-main .swiper-button-prev",
        },
        breakpoints: {
          320: {
            spaceBetween: 16,
            slidesPerView: 1.2,
          },
          768: {
            spaceBetween: 40,
            slidesPerView: "auto",
          },
        },
      });
    } else {
      var swiperMain = new Swiper(".swiper-main", {
        slidesPerView: "auto",
        slidesOffsetBefore: 274,
        slidesOffsetAfter: 274,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-main .swiper-button-next",
          prevEl: ".swiper-main .swiper-button-prev",
        },
      });
    }

    if (!isMobile) {
      (function () {
        $(".panel").each((idx, el) => {
          var controller = new ScrollMagic.Controller();
          var tween1 = TweenMax.fromTo(
            el,
            0.5,
            {
              scale: 1,
            },
            {
              scale: 0.8,
            }
          );
          var tween2 = TweenMax.to(el, {
            autoAlpha: 0,
          });
          var timeline1 = new TimelineMax();
          timeline1.add(tween1);
          var timeline2 = new TimelineMax();
          timeline2.add(tween2);

          var scene1 = new ScrollMagic.Scene({
            triggerElement: el,
            triggerHook: 0.5,
            duration: "100%",
          })
            .setTween(timeline1)
            .addTo(controller);
          var scene2 = new ScrollMagic.Scene({
            triggerElement: el,
            triggerHook: 0.1,
            duration: "100%",
            offset: idx * 100,
          })
            .setTween(timeline2)
            .addTo(controller);
        });
      })();
    }

    const swiperClientParamPc = {
      slidesPerView: 7.5,
      slidesOffsetBefore: 5,
      allowTouchMove: false,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      pagination: {
        el: ".swiper-client .swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-client .swiper-button-next",
        prevEl: ".swiper-client .swiper-button-prev",
      },
    };
    const swiperClientParamMobile = {
      slidesPerView: 3,
      slidesOffsetBefore: 0,
      allowTouchMove: false,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      pagination: {
        el: "swiper-client .swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-client .swiper-button-next",
        prevEl: ".swiper-client .swiper-button-prev",
      },
    };

    if (mediaMb.matches || isMobile) {
      const swiperClient = new Swiper(
        ".swiper-client",
        swiperClientParamMobile
      );
    } else {
      const swiperClient = new Swiper(".swiper-client", swiperClientParamPc);
    }

    $(window).resize(
      throttle(function () {
        if (mediaMb.matches || isMobile) {
          const swiperClient = new Swiper(
            ".swiper-client",
            swiperClientParamMobile
          );
        } else {
          const swiperClient = new Swiper(
            ".swiper-client",
            swiperClientParamPc
          );
        }
      })
    );
  }
});

// * 제품 디테일 [템플릿]
APP.proDetail = $(function () {
  if ($("body").hasClass("page-pro-detail")) {
    if (isMobile) {
      if ($(".content__header .content__header__link").length !== 0) {
        var ActiveContentHeaderLinkPos = $(
          $(".content__header .content__header__link.active").get(0)
        ).offset().left;
        $(".content__header .layout-container").animate(
          { scrollLeft: ActiveContentHeaderLinkPos - 24 },
          100
        );
      }
    }
    contentLightness();

    require(["/resources/vendor/jump.js"], function (jumpTo) {
      scrollSpy("#content", {
        sectionClass: ".scrollspy",
        menuActiveTarget: "#scroll-spy-menu .anchor",
        offset: 100,
        smoothScroll: true,
        smoothScrollBehavior: function (element) {
          element.scrollIntoView({ behavior: "smooth" }); // default behavior
          jumpTo(element, {
            duration: 300,
            offset: -50,
          });
        },
      });
    });

    var sticky = new Sticky(".content__header");

    // * 스크롤 다운 시 gnb 사라짐
    let preScrollTop = 0;
    $(window).scroll(
      throttle(function () {
        let nextScrollTop = window.scrollY;

        if (preScrollTop < nextScrollTop) {
          $(".content__header").removeClass("active");
        } else {
          $(".content__header").addClass("active");
        }
        preScrollTop = nextScrollTop;
      }, 200)
    );

    ScrollTrigger.create({
      trigger: "#section-visual",
      start: "bottom 40%",
      end: "bottom 40%",
      onEnter: ({ progress, direction, isActive }) => {
        $("#scroll-spy-menu").addClass("active");
      },
      onEnterBack: ({ progress, direction, isActive }) => {
        $("#scroll-spy-menu").removeClass("active");
      },
    });

    const swiperInfoParamPc = {
      slidesPerView: "auto",
      slidesOffsetBefore: 5,
      spaceBetween: 32,
      allowTouchMove: false,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    };
    const swiperInfoParamMobile = {
      slidesPerView: "auto",
      slidesOffsetBefore: 0,
      spaceBetween: 32,
      allowTouchMove: false,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
    };

    if (mediaMb.matches || isMobile) {
      const swiperInfo = new Swiper(".swiper-info", swiperInfoParamMobile);
    } else {
      const swiperInfo = new Swiper(".swiper-info", swiperInfoParamPc);
    }
    $(window).resize(
      throttle(function () {
        if (mediaMb.matches || isMobile) {
          const swiperInfo = new Swiper(".swiper-info", swiperInfoParamMobile);
        } else {
          const swiperInfo = new Swiper(".swiper-info", swiperInfoParamPc);
        }
      })
    );

    if (!window.matchMedia("screen and (max-width: 992px)").matches) {
      const smController = new ScrollMagic.Controller({ refreshInterval: 0 });
      const tltest = new TimelineMax().to(
        $("#section-function .function__list-wrap .function__list"),
        {
          y: -300,
        }
      );
      const tltest2 = new TimelineMax().to(
        $("#section-function .section__title-wrap"),
        {
          y: -300,
        }
      );
      const tltest3 = new TimelineMax().to(
        $("#section-function .function__list__description:not(:last-child)"),
        {
          height: 0,
        }
      );
      new ScrollMagic.Scene({
        triggerElement: "#section-function",
        triggerHook: 0,
        duration: "100%",
      })
        .setTween(tltest)
        .addTo(smController);
      new ScrollMagic.Scene({
        triggerElement: "#section-function",
        triggerHook: 0,
        duration: "100%",
      })
        .setTween(tltest2)
        .addTo(smController);
      // new ScrollMagic.Scene({
      //   triggerElement: "#section-function",
      //   triggerHook: 0,
      //   duration: "100%",
      // })
      //   .setTween(tltest3)
      //   .addTo(smController);
    }
  }
});

// * 고객지원 > FAQ [PC-CUS-01-01]
APP.cusFaq = $(function () {
  if ($("body").hasClass("page-cus-faq")) {
    $(window).scroll(
      throttle(function () {
        $("header").removeClass("color-reverse");
      })
    );

    $(".accordion").accordion({
      active: false,
      collapsible: true,
      multiple: true,
      heightStyle: "content",
      header: ".accordion__list__header",
    });

    $(".accordion__list__header").on("click", function () {
      $(this).find(".btn-faq-accorion").toggleClass("active");
    });

    $(".faq-area .btn").on("click", function (e) {
      $(".faq-area .btn").removeClass("active");
      $(e.target).addClass("active");
      if ($(e.target).data("category") === 0) {
        $(".accordion__list").show();
      } else {
        $(".accordion__list").hide();
        $(".badge").each((idx, el) => {
          if ($(e.target).data("category") === $(el).data("type")) {
            $(el).closest(".accordion__list").show();
          }
        });
      }
    });

    // 플로팅 버튼
    const $cusFaqFloating = $("#cus-faq-floating");
    const $cusFaqFloatingLink = $("#cus-faq-floating-link");
    if (!isMobile) {
      $cusFaqFloating.hover(function () {
        $cusFaqFloatingLink.addClass("active");
      });
    }
    $cusFaqFloating.on("click", function () {
      if ($cusFaqFloatingLink.hasClass("active")) {
        $cusFaqFloatingLink.removeClass("active");
      } else {
        $cusFaqFloatingLink.addClass("active");
      }
    });

    $cusFaqFloatingLink.on("mouseleave", function () {
      $(this).removeClass("active");
    });
  }
});

// * 고객지원 > 문의하기 [PC-CUS-02-01]
APP.cusQna = $(function () {
  if ($("body").hasClass("page-cus-qna")) {
    $(window).scroll(
      throttle(function () {
        $("header").removeClass("color-reverse");
      })
    );

    let preScrollTop = 0;
    $(window).scroll(
      throttle(function () {
        var scroll = $(document).scrollTop();

        if (scroll >= $("#content").offset().top) {
          let nextScrollTop = window.scrollY;

          if (preScrollTop < nextScrollTop) {
            $(".faq__aside").addClass("transform");
          } else {
            $(".faq__aside").removeClass("transform");
          }
          preScrollTop = nextScrollTop;
        }
      }, 200)
    );

    // 플로팅 버튼
    const $cusQnaFloating = $("#cus-qna-floating");
    const $cusQnaFloatingLink = $("#cus-qna-floating-link");

    $cusQnaFloating.on("click", function () {
      if ($cusQnaFloatingLink.hasClass("active")) {
        $cusQnaFloatingLink.removeClass("active");
      } else {
        $cusQnaFloatingLink.addClass("active");
      }
    });

    // 처음에는 문의하기 > 구매/영업 문의 유형만 노출한다
    $(".faq-type").hide();
    $(".faq-type-1").show();

    function inputReset() {
      $(".faq-type input").val("");
      $(".faq-type input:checkbox").prop("checked", false);
      $(".input-checkbox-agree").prop("checked", false);
      $(".step-1").attr("class", "step step-1").addClass("step--progress");
      $(".step-2").attr("class", "step step-2").addClass("step--wait");
      $(".step-3").attr("class", "step step-3").addClass("step--wait");
      productSetting();
    }

    // 문의하기 유형을 고르면 해당 화면을 노출한다
    $(".faq-select .input-radio").change(function () {
      $(".faq-type").hide();
      switch ($(this).prop("id")) {
        case "faq-select-1":
          $(".faq-type-1").show();
          $(".step-2 .step__name").text("문의 사항");
          $(".step-3").show();
          inputReset();
          break;
        case "faq-select-2":
          $(".faq-type-2").show();
          $(".step-2 .step__name").text("문의 사항");
          $(".step-3").show();
          inputReset();
          break;
        case "faq-select-3":
          $(".faq-type-3").show();
          $(".step-2 .step__name").text("문의 내용");
          $(".step-3").hide();
          inputReset();
          break;
        default:
          break;
      }
    });

    // 문의 유형 > 구매/영업 문의 > 2-1 라디오 버튼 선택에 따른 노출
    $(".proposal-client-name").hide();
    $(".faq__step-use #faq-step2-1-select-1").change(function () {
      if ($(this).is(":checked")) {
        $(".proposal-client-name").hide();
        $(".faq__step-use-or-not").show();
      }
    });
    $(".faq__step-use #faq-step2-1-select-2").change(function () {
      if ($(this).is(":checked")) {
        $(".faq__step-use-or-not").hide();
        $(".proposal-client-name").show();
      }
    });

    // STEP 진행상황
    if (isLangEn) {
      $(".faq-type-3").show();
    }
    faqTypeInput();
    $(".faq-select .input-radio").change(function () {
      faqTypeInput();
    });

    function faqTypeInput() {
      $(".faq-type").each((idx, el) => {
        if ($(el).css("display") !== "none") {
          // STEP 1
          $(el)
            .find(".faq__step-general")
            .find(".input")
            .change(function () {
              var flag = false;

              $(this)
                .closest(".faq__step-general")
                .find(".input")
                .each((idx2, el2) => {
                  $(el2).val() !== "" && $(".input-message").length === 0
                    ? (flag = true)
                    : (flag = false);
                });

              if (flag === true) {
                $(".step-1")
                  .removeClass("step--progress")
                  .addClass("step--complete");
                $(".step-2")
                  .removeClass("step--wait")
                  .addClass("step--progress");
              } else {
                $(".step-1")
                  .removeClass("step--complete")
                  .addClass("step--progress");
                $(".step-2")
                  .removeClass("step--progress")
                  .addClass("step--wait");
              }
            });

          // STEP2
          // 영문 페이지를 위한 케이스
          if (isLangEn || $(el).hasClass("faq-type-3")) {
            $(el)
              .find(".faq__step-detail .textarea")
              .change(function () {
                if ($(".step-1").hasClass("step--complete")) {
                  if ($(this).val() !== "") {
                    $(".step-2")
                      .removeClass("step--progress")
                      .addClass("step--complete");
                  } else {
                    $(".step-2")
                      .removeClass("step--complete")
                      .addClass("step--progress");
                  }
                }
              });
          } else {
            if ($(el).hasClass("faq-type-1")) {
              $("#faq-step2-1-select-1").change(function (e) {
                if ($(e.target).is(":checked")) {
                  if ($(".step-1").hasClass("step--complete")) {
                    $(".step-2")
                      .removeClass("step--progress")
                      .addClass("step--complete");
                    $(".step-3")
                      .removeClass("step--wait")
                      .addClass("step--progress");
                  }
                }
              });

              $("#faq-step2-1-select-2").change(function (e) {
                if ($(e.target).is(":checked")) {
                  if ($(".step-1").hasClass("step--complete")) {
                    $(".step-2")
                      .removeClass("step--complete")
                      .addClass("step--progress");
                    $(".step-3")
                      .removeClass("step--progress")
                      .addClass("step--wait");
                  }
                }
              });

              $("#proposal-company-name").change(function (e) {
                if ($(e.target).val() !== "") {
                  if ($(".step-1").hasClass("step--complete")) {
                    $(".step-2")
                      .removeClass("step--progress")
                      .addClass("step--complete");
                    $(".step-3")
                      .removeClass("step--wait")
                      .addClass("step--progress");
                  } else {
                    $(".step-2")
                      .removeClass("step--complete")
                      .addClass("step--progress");
                    $(".step-3")
                      .removeClass("step--progress")
                      .addClass("step--wait");
                  }
                } else {
                  $(".step-2")
                    .removeClass("step--complete")
                    .addClass("step--progress");
                  $(".step-3")
                    .removeClass("step--progress")
                    .addClass("step--wait");
                }
              });
            }

            $(el)
              .find(".checkbox-product-select")
              .change(function () {
                var flag = false;

                $(this)
                  .closest(".faq__step-select")
                  .find(".checkbox-product-select")
                  .each((idx2, el2) => {
                    if (flag === true) return true;
                    $(el2).is(":checked") === true
                      ? (flag = true)
                      : (flag = false);
                  });

                if ($(".step-1").hasClass("step--complete")) {
                  if (flag === true) {
                    $(".step-2")
                      .removeClass("step--progress")
                      .addClass("step--complete");
                    $(".step-3")
                      .removeClass("step--wait")
                      .addClass("step--progress");
                  } else {
                    $(".step-2")
                      .removeClass("step--complete")
                      .addClass("step--progress");
                    $(".step-3")
                      .removeClass("step--progress")
                      .addClass("step--wait");
                  }
                }
              });
          }

          // STEP3
          $(el)
            .find(".faq__step-detail .textarea")
            .change(function () {
              if ($(".step-2").hasClass("step--complete")) {
                if ($(this).val() !== "") {
                  $(".step-3")
                    .removeClass("step--progress")
                    .addClass("step--complete");
                } else {
                  $(".step-3")
                    .removeClass("step--complete")
                    .addClass("step--progress");
                }
              }
            });
        }
      });
    }
  }
});

// * 회사 소개 > 기업 정보 [PC-COM-01-01]
APP.comInfo = $(function () {
  if ($("body").hasClass("page-com-info")) {
    $("#header").addClass("color-reverse");

    if (window.matchMedia("screen and (max-width: 992px)").matches) {
    } else {
      $("#section-3 .visual__header").css({ opacity: 0 });
      $("#section-3 .visual__text-wrap:nth-child(1)").css({ opacity: 0 });
      $("#section-3 .visual__text-wrap:nth-child(2)").css({ opacity: 0 });
      $("#section-3 .visual__graphic-intersection").css({ opacity: 0 });

      $("#fullpage").fullpage({
        normalScrollElements: ".history__content",
        menu: "#content__nav",
        anchors: [
          "1page",
          "2page",
          "3page",
          "4page",
          "5page",
          "6page",
          "7page",
          "8page",
        ],
        onLeave: function (index, nextIndex, direction) {
          /* 헤더 변경 */
          if (
            index == 3 ||
            index == 5 ||
            index == 6 ||
            index == 7 ||
            index == 8
          ) {
            $("#header").removeClass("color-reverse");
          } else {
            $("#header").addClass("color-reverse");
          }

          /* CI */
          if (index !== 3) {
            $(".visual__text-area").removeClass("play");
          }
        },
        afterLoad: function (anchorLink, index) {
          /* 네비게이션 숨김 처리 */
          if (index == 1 || index == 2) {
            $("#content__nav").addClass("hidden");
          } else {
            $("#content__nav").removeClass("hidden");
          }
          /* 헤더 변경 */
          if (index !== 1) {
            $("#header").addClass("transform");
          } else {
            $("#header").removeClass("transform");
          }
          if (
            index == 3 ||
            index == 5 ||
            index == 6 ||
            index == 7 ||
            index == 8
          ) {
            $("#header").removeClass("color-reverse");
          } else {
            $("#header").addClass("color-reverse");
          }

          /* CI */
          if (index === 3) {
            $("#section-3 .visual__text-area").addClass("play");
            gsap.fromTo(
              "#section-3 .visual__header",
              { autoAlpha: 0 },
              { autoAlpha: 1 }
            );
            gsap.fromTo(
              "#section-3 .visual__text-wrap:nth-child(1)",
              { autoAlpha: 0 },
              { autoAlpha: 1, delay: 0.5 }
            );
            gsap.fromTo(
              "#section-3 .visual__text-wrap:nth-child(2)",
              { autoAlpha: 0 },
              { autoAlpha: 1, delay: 0.7 }
            );
            gsap.fromTo(
              "#section-3 .visual__graphic-intersection",
              { autoAlpha: 0 },
              { autoAlpha: 1, delay: 1.2 }
            );
          } else {
            $("#section-3 .visual__header").css({ opacity: 0 });
            gsap.to("#section-3 .visual__text-wrap:nth-child(1)", {
              autoAlpha: 0,
            });
            gsap.to("#section-3 .visual__text-wrap:nth-child(2)", {
              autoAlpha: 0,
            });
            gsap.to("#section-3 .visual__graphic-intersection", {
              autoAlpha: 0,
            });
          }

          /* 비전 */
          if (index === 4) {
            $(".content__nav__list[data-menuanchor='4page']").addClass(
              "color-change"
            );
          } else {
            $(".content__nav__list[data-menuanchor='4page']").removeClass(
              "color-change"
            );
          }
        },
      });
    }

    const swiperCoreTech = new Swiper(".swiper-core-tech", {
      navigation: {
        nextEl: ".swiper-core-tech .swiper-button-next",
        prevEl: ".swiper-core-tech .swiper-button-prev",
      },
      on: {
        realIndexChange: function () {
          $(".swiper-core-tech .swiper-wrapper").toggleClass("active");
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16,
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 28,
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 28,
        },
      },
    });

    gsap.fromTo(
      ".graphic-round-1",
      {
        y: 0,
      },
      {
        y: 30,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3,
      }
    );
    gsap.fromTo(
      ".graphic-round-2",
      {
        y: 0,
      },
      {
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3,
      }
    );

    // 모바일에서는 연도 앞에 세기를 붙인다.
    if (mediaMb.matches || isMobile) {
      $(".year").each((idx, el) => {
        $(el).text($(el).data("value"));
      });
    }

    const $historyContent = $(".history__content");
    const triggerHeight = $(".history-wrap").height() / 2;
    const $historyYearScroll = $(".history__year-scroll");

    // 최근 연도로 현재 연도를 초기화한다
    $historyContent.attr(
      "data-target-y",
      $($(".history__1y__list").get(0)).data("value")
    );

    // 연도 사이를 이동하는 간격을 설정한다
    function historyYearSetY(order) {
      if (mediaMb.matches || isMobile) {
        var top = -14.39 * order;
      } else {
        var top = -15.92 * order;
      }
      $historyYearScroll.css("top", top + "rem");
    }

    // 현재 연도를 활성화 한다
    function yearAddClass(idx) {
      $(".year").removeClass("active");
      $($(".year").get(idx)).addClass("active");
    }

    // 연도별 위치 값을 저장한다
    var listHeights = [];
    setTimeout(() => {
      $(".history__1y__list").each((idx, el) => {
        listHeights.push($(el).position().top);
      });
    }, 100);

    console.log(listHeights);

    // 연도 영역을 스크롤 한다
    $("#section-6 .history__content").scroll(
      throttle(function (e) {
        $(".history__1y__list").each((idx, el) => {
          // 만약 연도 영역의 절반 높이를 넘어가면
          if (
            -100 < $(el).position().top &&
            triggerHeight >= $(el).position().top
          ) {
            // 우선 음수인 연도 위치는 무시한다
            if (Math.sign($(el).position().top) === -1) {
              return false;
            }

            // 현재 연도를 갱신한다
            $historyContent.attr("data-target-y", $(el).data("value"));
            $(".history__1y__list").removeClass("active");
            $(el).addClass("active");
            historyYearSetY(idx);
            yearAddClass(idx);

            // 1999년도일 때는 세기를 표시하는 문자열을 19로 변경해준다
            if ($(el).data("value") === 1999) {
              $(".year.fixed").text("19").css({ "margin-left": "2rem" });
            } else {
              $(".year.fixed").text("20").css({ "margin-left": "initial" });
            }
          }
        });
      }, 10)
    );

    $(".history-area .btn").on("click", function () {
      $historyContent.attr("data-target-y", $(this).data("value"));
      $(".history-area .btn").removeClass("active");
      $(this).addClass("active");

      $(".history__1y__list").each((idx, el) => {
        if ($(this).data("value") === $(el).data("value")) {
          console.log(listHeights[idx], "listHeights[idx]", el, idx);
          if ($(this).data("value") === 2001) {
            $historyContent.animate(
              {
                scrollTop: listHeights[idx] - 140,
              },
              300
            );
          } else if ($(this).data("value") === 2010) {
            $historyContent.animate(
              {
                scrollTop: listHeights[idx] - 100,
              },
              300
            );
          } else {
            $historyContent.animate(
              {
                scrollTop: listHeights[idx],
              },
              300
            );
          }
        }
      });
    });
  }
});

// * 회사 소개 > 뉴스룸 > 목록 [PC-COM-02-01]
APP.comNewsRoom = $(function () {
  if ($("body").hasClass("page-com-newsroom-list")) {
    var sticky = new Sticky(".filter-layout-container");

    const swiper = new Swiper(".swiper-newsroom", {
      effect: "fade",
      speed: 1000,
      navigation: {
        nextEl: ".swiper-newsroom .swiper-button-next",
        prevEl: ".swiper-newsroom .swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        afterInit: function () {
          $(".swiper-newsroom .swiper-index-current").text(
            this.activeIndex + 1
          );
          $(".swiper-newsroom .swiper-index-length").text(this.slides.length);
        },
        slideChange: function () {
          $(".swiper-newsroom .swiper-index-current").text(this.realIndex + 1);
        },
      },
    });
  }
});

// * 회사 소개 > 뉴스룸 > 콘텐츠 상세 페이지 [PC-COM-02-02]
APP.comNewsRoom = $(function () {
  if ($("body").hasClass("page-com-newsroom-view")) {
    const swiper = new Swiper(".swiper-related-content", {
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16,
          slidesOffsetAfter: 24,
          slidesOffsetBefore: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
        },
      },
    });
  }
});

// * 회사 소개 > 인재 채용 > 채용안내 TAB [PC-COM-03-01]
APP.comEmploymentInfo = $(function () {
  if ($("body").hasClass("page-com-employment-info")) {
    $(window).scroll(
      throttle(function () {
        $("header").removeClass("color-reverse");
      })
    );

    ScrollTrigger.create({
      trigger: "#section-ideal",
      start: "top 150%",
      end: "bottom bottom",
      onEnter: () => {
        $("#section-ideal .item__list").each((idx, el) => {
          setTimeout(() => {
            $(el).addClass("play");
          }, 300 * idx - 1);
        });
      },
      onLeaveBack: () => {
        $("#section-ideal .item__list").each((idx, el) => {
          $(el).removeClass("play");
        });
      },
    });

    if (!isMobile) {
      $("#section-employment-process .item__list").each((idx, el) => {
        var tl = new TimelineMax();
        if (idx !== 2) {
          ScrollTrigger.create({
            trigger: "#section-employment-process",
            start: "50% 90%",
            end: "bottom bottom",
            onEnter: () => {
              tl.fromTo(
                $(el).find(".graphic-circle"),
                { autoAlpha: 0, y: 30 },
                { autoAlpha: 1, y: 0, delay: 0.1 * idx }
              );
              tl.fromTo(
                $(el).find(".str-wrap"),
                { autoAlpha: 0, y: 30 },
                { autoAlpha: 1, y: 0, delay: 0.2 * idx }
              );
            },
            onLeaveBack: () => {
              tl.clear();
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: "#section-employment-process",
            start: "50% 90%",
            end: "bottom bottom",
            onEnter: () => {
              tl.fromTo(
                $(el).find(".graphic-circle"),
                { autoAlpha: 0, y: -30 },
                { autoAlpha: 1, y: 0, delay: 0.1 * idx }
              );
              tl.fromTo(
                $(el).find(".str-wrap"),
                { autoAlpha: 0, y: -30 },
                { autoAlpha: 1, y: 0, delay: 0.2 * idx }
              );
            },
            onLeaveBack: () => {
              tl.clear();
            },
          });
        }
      });
    }
  }
});

// * 회사 소개 > 인재 채용 > 채용공고 TAB [PC-COM-03-02]
APP.comEmploymentNotice = $(function () {
  if ($("body").hasClass("page-com-employment-notice")) {
    const $btnRegistrationBoardFilter = $(".btn-hr-registration__board-filter");
    $btnRegistrationBoardFilter.on("click", function () {
      $btnRegistrationBoardFilter.removeClass("active");
      $(this).addClass("active");

      if ($(this).data("state") === "off") {
        $(".hr-registration__board-list-wrap").addClass("disabled");
        $(".hr-registration-total").hide();
      } else {
        $(".hr-registration__board-list-wrap").removeClass("disabled");
        $(".hr-registration-total").show();
      }
    });
  }
});

// * 회사 소개 > 인재 채용 > 인재풀 등록 완료 [PC-COM-03-05]
APP.comHrRegistComplate = $(function () {
  if ($("body").hasClass("page-com-hr-regist-complete")) {
    $(window).scroll(
      throttle(function () {
        $("header").removeClass("color-reverse");
      })
    );
  }
});
