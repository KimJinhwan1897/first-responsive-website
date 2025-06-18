APP.namespace("APP.common");
APP.namespace("APP.intro");
APP.namespace("APP.mainVisualLightness");
APP.namespace("APP.header");
APP.namespace("APP.scrollTop");
APP.namespace("APP.smoothScroll");
APP.namespace("APP.noticeBar");
APP.namespace("APP.search");
APP.namespace("APP.searchResult");
APP.namespace("APP.temp");
APP.namespace("APP.sitemap");

APP.common = $(function () {
  // * 플로팅 버튼 숨기기
  if ($(window).scrollTop() < 100) {
    $("#scroll-top").hide();
  } else {
    $("#scroll-top").show();
  }
  $(window).scroll(
    throttle(function () {
      if ($(window).scrollTop() < 100) {
        $("#scroll-top").hide();
      } else {
        $("#scroll-top").show();
      }
    })
  );

  // * 스크롤 다운 시 gnb 사라짐
  let preScrollTop = 100;
  if (isMobile && md.userAgent() === "Safari") {
    throttleTime = 500;
  } else {
    throttleTime = 100;
  }
  $(window).scroll(
    throttle(function () {
      let nextScrollTop = window.scrollY;

      if (preScrollTop < nextScrollTop) {
        $("#header").addClass("hidden");
      } else {
        $("#header").removeClass("hidden");
      }
      preScrollTop = nextScrollTop;
    }, throttleTime)
  );

  if (isMobile) {
    $("html").addClass("isMobile");
    $(".breadcrumb").remove();
    $(".notice-bar").removeClass("active");
    $(".notice-bar").remove();
  } else {
    $(window).resize(
      throttle(function () {
        if (window.matchMedia("screen and (max-width: 1024px)").matches) {
          $(".notice-bar").removeClass("active");
          $("html").addClass("isMobile");
          $(".breadcrumb").remove();
        } else {
          $(".notice-bar").addClass("active");
        }
      }, 100)
    );
    $("html").addClass("isPc");
  }

  $(window).resize(
    throttle(function () {
      if (mediaMb.matches || isMobile) {
        $(".gnb").hide();
      }
    })
  );

  // * 툴팁
  $(document).on("mouseover", "[data-tooltip]", function (e) {
    if (!isMobile) {
      var titleText = $(this).text();
      if ($(e.target).data("tooltip") !== "") {
        titleText = $(e.target).data("tooltip");
      }
      $("<p></p>")
        .attr("class", "tooltip")
        .text(titleText)
        .appendTo("body")
        .css({
          top: e.pageY + 10,
          left: e.pageX + 10,
        })
        .show();
    }
  });
  $(document).on("mouseleave", "[data-tooltip]", function (e) {
    $(".tooltip").remove();
  });
  $(document).on("mousemove", "[data-tooltip]", function (e) {
    $(".tooltip").css({
      top: e.pageY + 10,
      left: e.pageX + 10,
    });
  });
});

// APP.intro = $(function () {
//   $(".graphic-round").each((idx, el) => {
//     setTimeout(() => {
//       $(el).addClass("play");
//     }, 500 * idx);
//   });

//   gsap.to("#intro .scene-first", {
//     autoAlpha: 0,
//     delay: 2,
//   });
//   $("#intro .scene-second").css({ opacity: 0 });
//   gsap.fromTo(
//     "#intro .scene-second",
//     {
//       autoAlpha: 0,
//     },
//     { autoAlpha: 1, delay: 2 }
//   );
//   gsap.to("#intro", { autoAlpha: 0, delay: 3 });
// });

// APP.mainVisualLightness = $(function () {
//   if ($(".js-main-visual").length !== 0) {
//     var bg = $(".js-main-visual").css("background-image").split('"')[1];
//     imageLightness(bg, contentLightness);
//   }
// });

APP.header = $(function () {
  $(window).scroll(
    throttle(function () {
      if ($(window).scrollTop() > 0) {
        $("header").addClass("transform");
      } else {
        $("header").removeClass("transform");
      }
    })
  );

  $(".header__nav > .anchor").each((idx, el) => {
    $(el).hover(function () {
      $("#header").addClass("hover");
      $(".header__nav > .anchor").removeClass("active");
      $(el).addClass("active");
      $(".gnb").show();
      $(".gnb__list").removeClass("active");
      $(".gnb__list").eq(idx).addClass("active");
      if ($(".btn-header-search").hasClass("active")) {
        $(".btn-header-search").trigger("click");
      }
    });
  });

  $("#header").on("mouseleave", function () {
    $("#header").removeClass("hover");
    $(".header__nav > .anchor").removeClass("active");
    $(".gnb").hide();
    $(".gnb__list").removeClass("active");
  });

  // * 모바일 GNB
  $(".btn-drawer-menu").on("click", function () {
    if (isMobile) {
      $(".m_gnb").show();
    } else {
      $(".sitemap").addClass("active");
    }
  });
  $(".btn-drawer-menu-close").on("click", function () {
    $(".m_gnb").hide();
  });

  $(".m_gnb .accordion").accordion({
    active: true,
    collapsible: true,
    multiple: true,
    heightStyle: "content",
    header: ".accordion__list__header",
  });
});

APP.scrollTop = $(function () {
  $("#scroll-top").on("click", function () {
    window.scrollTo(0, 0);
  });
});

APP.smoothScroll = $(function () {
  const lenis = new Lenis({
    duration: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  $("#scroll-top").on("click", function () {
    lenis.scrollTo(0);
  });
});

APP.temp = $(function () {
  // !!! 퍼블리싱 샘플을 위한 임시 코드. 개발 시 삭제 필요.
  $(".btn-search").on("click", function () {});
  $(document).on("click", ".btn-popup-confirm", function (e) {
    $(e.target).closest(".popup-area").remove();
  });
});

APP.noticeBar = $(function () {
  if ($(".notice-bar.active").length !== 0) {
    $("#header").addClass("notice-bar-on");
  }

  if (Cookies.get("noticeBar") === "true") {
    $("#header").removeClass("notice-bar-on");
    $(".notice-bar").removeClass("active");
    $(".notice-bar").hide();
  }

  const $btnNoticeBarClose = $(".btn-notice-bar-close");
  $btnNoticeBarClose.on("click", function () {
    if ($("#noticeBarHidden").is(":checked")) {
      Cookies.set("noticeBar", true, { expires: 1 });
    }
    $(this).closest(".notice-bar").removeClass("active");
    $("#header").removeClass("notice-bar-on");
  });

  const swiperNoticeBar = new Swiper(".swiper-notice-bar", {
    effect: "fade",
    navigation: {
      nextEl: ".notice-bar__util .swiper-button-next",
      prevEl: ".notice-bar__util .swiper-button-prev",
    },
    on: {
      afterInit: function () {
        $(".notice-bar .slide-current").text(this.realIndex + 1);
        $(".notice-bar .slide-length").text(this.slides.length);
      },
      slideChange: function () {
        $(".notice-bar .slide-current").text(this.realIndex + 1);
      },
    },
  });
});

APP.sitemap = $(function () {
  $(".footer__sitemap").on("click", function (e) {
    e.preventDefault();
    if (mediaMb.matches || isMobile) {
      $(".m_gnb").show();
    } else {
      $(".sitemap").addClass("active");
    }
  });

  $(".btn-sitemap-close").on("click", function (e) {
    $(".sitemap").removeClass("active");
  });
});
