APP.namespace("APP.mainVisual");
APP.namespace("APP.mainHorizontal");
APP.namespace("APP.mainCompany");
APP.namespace("APP.mainNews");

APP.mainVisual = $(function () {
  if ($("body").hasClass("page-home")) {
    $("#header").addClass("color-reverse");

    $(window).scroll(
      throttle(function () {
        if ($(window).scrollTop() < 100) {
          $("#header").addClass("color-reverse");
          $("#header").removeClass("transform");
        } else {
          $("header").removeClass("color-reverse");
          $("#header").addClass("transform");
        }
      })
    );
  }

  if (!isMobile) {
    $("[data-tilt]").each((idx, item) => {
      VanillaTilt.init(item, {
        reverse: true,
        max: 5,
        speed: 400,
        perspective: 500,
        scale: 1.05,
      });
    });
  }

  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#FFFFFF" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.25,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#FFFFFF",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  const heroEl = document.querySelector(".hero");
  const imgFullSizeWrapEl = heroEl.querySelector(".hero__fullbg");
  const textFullSizeWrapEl = heroEl.querySelector(".hero__fulltxt");
  const imgContentEls = heroEl.querySelectorAll(
    "#section-main .swiper .content__image"
  );
  const textContentEls = heroEl.querySelectorAll(
    "#section-main .swiper .content__text"
  );
  const imgContentFullsizeEls = Array.from(imgContentEls, (el) => {
    const clone = el.cloneNode(true);
    clone.classList.add("hero__content", "hero__content--hidden");
    clone.classList.remove("content--slide");
    return clone;
  });

  const textContentFullsizeEls = Array.from(textContentEls, (el) => {
    const clone = el.cloneNode(true);
    clone.classList.add(
      "hero__content",
      "hero__content--hidden",
      "content--hero"
    );
    clone.classList.remove("content--slide");
    return clone;
  });

  imgContentFullsizeEls.forEach((el) => imgFullSizeWrapEl.appendChild(el));
  textContentFullsizeEls.forEach((el) => textFullSizeWrapEl.appendChild(el));

  const state = {
    imgTopContent: null,
    imgBottomContent: null,
    textTopContent: null,
    textBottomContent: null,
  };

  function slideChange(swiper) {
    const content = imgContentFullsizeEls[swiper.realIndex];
    if (!content) return;

    if (state.imgBottomContent) {
      state.imgBottomContent.classList.remove("hero__content--bottom");
      state.imgBottomContent.classList.add("hero__content--hidden");
    }

    if (state.imgTopContent) {
      state.imgTopContent.classList.remove("hero__content--top");
      state.imgTopContent.classList.add("hero__content--bottom");
    }

    state.imgBottomContent = state.imgTopContent;
    state.imgTopContent = content;

    const slidetRect =
      swiper.slides[swiper.activeIndex].getBoundingClientRect();
    const parentRect = heroEl.getBoundingClientRect();

    content.style.transition = "none";
    content.style.left = slidetRect.left - parentRect.left + "px";
    content.style.top = slidetRect.top - parentRect.top + "px";
    content.style.width = slidetRect.width + "px";
    content.style.height = slidetRect.height + "px";
    content.style.borderRadius = "var(--border-radius, 0)";

    content.getBoundingClientRect();

    content.classList.remove("hero__content--hidden");
    content.classList.add("hero__content--top", "hero__content--grow");

    content.style.transition = "";
    content.style.left = "";
    content.style.top = "";
    content.style.width = "";
    content.style.height = "";
    content.style.borderRadius = "";

    const onShowTextEnd = (event) => {
      if (event.target !== event.currentTarget) {
        event.currentTarget.classList.remove("hero__content--show-text");
        event.currentTarget.removeEventListener("transitionend", onShowTextEnd);
      }
    };

    const onGrowEnd = (event) => {
      event.currentTarget.classList.remove("hero__content--grow");
      event.currentTarget.classList.add("hero__content--show-text");
      event.currentTarget.addEventListener("transitionend", onShowTextEnd);
    };

    content.addEventListener("transitionend", onGrowEnd, { once: true });
  }

  function slideChange2(swiper) {
    const content = textContentFullsizeEls[swiper.realIndex];
    if (!content) return;

    if (state.textBottomContent) {
      state.textBottomContent.classList.remove("hero__content--bottom");
      state.textBottomContent.classList.add("hero__content--hidden");
    }

    if (state.textTopContent) {
      state.textTopContent.classList.remove("hero__content--top");
      state.textTopContent.classList.add("hero__content--bottom");
    }

    state.textBottomContent = state.textTopContent;
    state.textTopContent = content;

    const slidetRect =
      swiper.slides[swiper.activeIndex].getBoundingClientRect();
    const parentRect = heroEl.getBoundingClientRect();

    content.style.transition = "none";
    content.style.left = slidetRect.left - parentRect.left + "px";
    content.style.top = slidetRect.top - parentRect.top + "px";
    content.style.width = slidetRect.width + "px";
    content.style.height = slidetRect.height + "px";
    content.style.borderRadius = "var(--border-radius, 0)";

    content.getBoundingClientRect();

    content.classList.remove("hero__content--hidden");
    content.classList.add("hero__content--top", "hero__content--grow");

    content.style.transition = "";
    content.style.left = "";
    content.style.top = "";
    content.style.width = "";
    content.style.height = "";
    content.style.borderRadius = "";

    const onShowTextEnd = (event) => {
      if (event.target !== event.currentTarget) {
        event.currentTarget.classList.remove("hero__content--show-text");
        event.currentTarget.removeEventListener("transitionend", onShowTextEnd);
      }
    };

    const onGrowEnd = (event) => {
      event.currentTarget.classList.remove("hero__content--grow");
      event.currentTarget.classList.add("hero__content--show-text");
      event.currentTarget.addEventListener("transitionend", onShowTextEnd);
    };

    content.addEventListener("transitionend", onGrowEnd, { once: true });
  }

  function swiperInit(swiper) {
    const content = imgContentFullsizeEls[swiper.realIndex];
    if (!content) return;

    content.classList.remove("hero__content--hidden");
    content.classList.add("hero__content--top");
    state.imgTopContent = content;
  }

  function swiperInit2(swiper) {
    const content = textContentFullsizeEls[swiper.realIndex];
    if (!content) return;

    content.classList.remove("hero__content--hidden");
    content.classList.add("hero__content--top", "hero__content--grow");
    state.textTopContent = content;
    
    // 첫 화면 텍스트에 애니메이션 효과 추가
    setTimeout(() => {
      content.classList.remove("hero__content--grow");
      content.classList.add("hero__content--show-text");
    }, 100);
  }

  const swiperMain = new Swiper("#section-main .swiper", {
    slidesPerView: 3.5,
    loop: true,
    speed: 1000,
    simulateTouch: true,
    allowTouchMove: false,
    // slideToClickedSlide: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-main-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      768: {
        spaceBetween: 24,
      },
    },
    on: {
      realIndexChange: function (swiperMain) {
        slideChange(swiperMain);
        slideChange2(swiperMain);
        $(".current-slide-index").text(
          String("0" + (swiperMain.realIndex + 1))
        );

        $(".btn-swiper-main-play").attr("data-position", swiperMain.realIndex);

        $(".btn-swiper-main-play").css({
          left: swiperMain.realIndex * 3.82 + "rem",
        });
      },
      init: function (swiperMain) {
        swiperInit(swiperMain);
        swiperInit2(swiperMain);
        $(".slide-index-length").text(
          String("0" + $("#section-main .swiper-slide").length)
        );
      },
    },
  });

  $(".btn-swiper-main-play").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      swiperMain.autoplay.pause();
    } else {
      swiperMain.autoplay.resume();
    }
  });

  $("#section-main .hero__swiper .swiper-slide").on("click", function () {
    swiperMain.slideNext();
  });
});

APP.mainHorizontal = $(function () {
  if (window.matchMedia("all and (max-width: 992px)").matches) {
    const $slide = $("#section-horizontal .slide");
    $($slide.get(0)).remove();
    $("#section-horizontal .slide-wrap").width(100 * ($slide.length - 1) + "%");

    document.addEventListener(
      "touchstart",
      debounce(handleTouchStart, 1),
      false
    );
    document.addEventListener("touchmove", debounce(handleTouchMove, 1), false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        var leftPos = $(".section-horizontal-inner").scrollLeft();
        if (xDiff > 0) {
          /* right swipe */
          $(".section-horizontal-inner").animate(
            { scrollLeft: leftPos + $(window).width() },
            800
          );
        } else {
          /* left swipe */
          $(".section-horizontal-inner").animate(
            { scrollLeft: leftPos - $(window).width() },
            800
          );
        }
      } else {
        if (yDiff > 0) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    $(".btn-slide-prev").on("click", function () {
      var leftPos = $(".section-horizontal-inner").scrollLeft();
      $(".section-horizontal-inner").animate(
        { scrollLeft: leftPos - $(window).width() },
        800
      );
    });
    $(".btn-slide-next").on("click", function () {
      var leftPos = $(".section-horizontal-inner").scrollLeft();
      $(".section-horizontal-inner").animate(
        { scrollLeft: leftPos + $(window).width() },
        800
      );
    });
  } else {
    const $slide = $("#section-horizontal .slide");
    const smController = new ScrollMagic.Controller();
    var tl1x = 0;

    interaction();
    function interaction() {
      var totalW = 0;
      $slide.each((idx, el) => {
        if (idx === 0) {
          $(el).width($(window).width() / 2);
          totalW += $(window).width() / 2;
        } else {
          $(el).width($(window).width() * 0.66);
          totalW += $(window).width() * 0.66;
        }
      });

      $(".slide-wrap").width(totalW);

      // 화면 절반 이상 넘어가면 slide 에 active 클래스 붙여서 내용물 활성화
      $(window).scroll(
        throttle(function () {
          $(".slide").each((idx, el) => {
            if ($(el).offset().left - $(window).width() / 2 <= 0) {
              $(el).addClass("active");
            } else {
              $(el).removeClass("active");
            }
          });
        })
      );

      tl1x =
        -($slide.width() * $slide.length) +
        ($(window).width() * 0.66 - $(window).width() / 2 + 25);
    }

    const tl1 = new TimelineMax().to(".slide-wrap", {
      x: tl1x,
      ease: "linear",
    });

    // 슬라이더 랩 x위치
    var test = new ScrollMagic.Scene({
      triggerElement: "#section-horizontal",
      triggerHook: 0,
      duration: "700%",
    })
      .setPin("#section-horizontal")
      .setTween(tl1)
      .addTo(smController);

    const tl2 = new TimelineMax()
      .to($(".slide-2 .slide-img"), {
        scale: 1.5,
      })
      .to($(".slide-3 .slide-img"), {
        scale: 1.5,
      })
      .to($(".slide-4 .slide-img"), {
        scale: 1.5,
      })
      .to($(".slide-5 .slide-img"), {
        scale: 1.5,
      })
      .to($(".slide-6 .slide-img"), {
        scale: 1.5,
      });

    const tl3 = new TimelineMax()
      .fromTo(
        $(".slide-2 .slide-img-wrap"),
        { height: "30rem" },
        {
          height: "70vh",
        }
      )
      .fromTo(
        $(".slide-3 .slide-img-wrap"),
        { height: "30rem" },
        {
          height: "70vh",
        }
      )
      .fromTo(
        $(".slide-4 .slide-img-wrap"),
        { height: "30rem" },
        {
          height: "70vh",
        }
      )
      .fromTo(
        $(".slide-5 .slide-img-wrap"),
        { height: "30rem" },
        {
          height: "70vh",
        }
      )
      .fromTo(
        $(".slide-6 .slide-img-wrap"),
        { height: "30rem" },
        {
          height: "70vh",
        }
      );

    const tl5 = new TimelineMax().fromTo(
      $(".slide-3"),
      {
        xPercent: -45,
      },
      { xPercent: 0 }
    );

    const tl6 = new TimelineMax()
      .fromTo(
        $(".slide-2 .slide-img-wrap"),
        {
          yPercent: 40,
        },
        {
          yPercent: 0,
        }
      )
      .fromTo(
        $(".slide-3 .slide-img-wrap"),
        {
          yPercent: 40,
        },
        {
          yPercent: 0,
        }
      )
      .fromTo(
        $(".slide-4 .slide-img-wrap"),
        {
          yPercent: 50,
        },
        {
          yPercent: 0,
        }
      )
      .fromTo(
        $(".slide-5 .slide-img-wrap"),
        {
          yPercent: 50,
        },
        {
          yPercent: 0,
        }
      )
      .fromTo(
        $(".slide-6 .slide-img-wrap"),
        {
          yPercent: 50,
        },
        {
          yPercent: 0,
        }
      );

    // 이미지 스케일
    new ScrollMagic.Scene({
      triggerElement: "#section-horizontal",
      triggerHook: 0,
      duration: "800%",
    })
      .setTween(tl2)
      .addTo(smController);

    // 이미지 컨테이너 높이
    new ScrollMagic.Scene({
      triggerElement: "#section-horizontal",
      triggerHook: 0,
      duration: "800%",
    })
      .setTween(tl3)
      .addTo(smController);

    // 이미지 컨테이너 y위치
    new ScrollMagic.Scene({
      triggerElement: "#section-horizontal",
      triggerHook: 0,
      duration: "800%",
    })
      .setTween(tl6)
      .addTo(smController);

    // 슬라이드 x위치
    new ScrollMagic.Scene({
      triggerElement: "#section-horizontal",
      triggerHook: 0,
      duration: "100%",
    })
      .setTween(tl5)
      .addTo(smController);
  }
});

APP.mainCompany = $(function () {
  const $list = $("#section-company .item__list");
  if (!mediaMb.matches || !isMobile) {
    $list.hover(function () {
      $(this).css({ width: "50%" });
      $(this).siblings().css({ width: "16.66666666666667%" });
    });
    $list.on("mouseleave", function () {
      $list.css({ width: "25%" });
    });
  }

  // * 기업 로고 marquee
  let SwiperTop = new Swiper(".swiper--top", {
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        spaceBetween: 40,
      },
      768: {
        spaceBetween: 120,
      },
    },
  });

  let SwiperBottom = new Swiper(".swiper--bottom", {
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      320: {
        spaceBetween: 40,
      },
      768: {
        spaceBetween: 120,
      },
    },
  });
});

APP.mainNews = $(function () {
  if ($("body").hasClass("page-home")) {
    const swiper = new Swiper(".swiper-news", {
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    });
  }
});
