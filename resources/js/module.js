APP.namespace("APP.tagSlider");

APP.tagSlider = $(function () {
  if ($(".tag-slider").length !== 0) {
    $(".tag-slider").each((idx, el) => {
      const $tags = $(el).find(".tag-wrap").children();
      let totalWidths = [];
      let totalWidth = 0;
      for (let i = 0; i < $tags.length; i++) {
        const el = $tags[i];
        totalWidths.push($(el).outerWidth(true));
      }
      totalWidths.forEach((el) => (totalWidth += el));
      $(el).attr("data-current-idx", 0);
      $(el).find(".tag-wrap").width(totalWidth);

      if (totalWidth < $(el).width()) {
        $(el).find(".btn-tag-slide-prev").hide();
        $(el).find(".btn-tag-slide-next").hide();
        if (!window.matchMedia("screen and (max-width: 992px)").matches) {
          $(el).css({ "padding-left": 0, "padding-right": 0 });
        } else {
          $(el).css({ "padding-left": "2.4rem", "padding-right": "2.4rem" });
        }
      }

      // 이전 버튼 클릭
      $(el)
        .find(".btn-tag-slide-prev")
        .on("click", function () {
          var leftPos = $(el).find(".tag-area").scrollLeft();
          console.log(
            totalWidths,
            totalWidths[Number($(el).attr("data-current-idx")) - 1]
          );
          $(el)
            .find(".tag-area")
            .animate(
              {
                scrollLeft:
                  leftPos -
                  totalWidths[Number($(el).attr("data-current-idx")) - 1],
              },
              800
            );
          if ($(el).attr("data-current-idx") > 0) {
            $(el).attr(
              "data-current-idx",
              Number($(el).attr("data-current-idx")) - 1
            );
          }
          if ($(el).attr("data-current-idx") === 0) {
            $(el).find(".btn-tag-slide-prev").addClass("disabled");
          } else {
            $(el).find(".btn-tag-slide-prev").removeClass("disabled");
          }
          if (Number($(el).attr("data-current-idx")) === totalWidths.length) {
            $(el).find(".btn-tag-slide-next").addClass("disabled");
          } else {
            $(el).find(".btn-tag-slide-next").removeClass("disabled");
          }
        });

      // 다음 버튼 클릭
      $(el)
        .find(".btn-tag-slide-next")
        .on("click", function () {
          var leftPos = $(el).find(".tag-area").scrollLeft();
          $(el)
            .find(".tag-area")
            .animate(
              {
                scrollLeft:
                  leftPos + totalWidths[Number($(el).attr("data-current-idx"))],
              },
              800
            );
          if ($(el).attr("data-current-idx") < totalWidths.length) {
            $(el).attr(
              "data-current-idx",
              Number($(el).attr("data-current-idx")) + 1
            );
          }
          if (Number($(el).attr("data-current-idx")) === totalWidths.length) {
            $(el).find(".btn-tag-slide-next").addClass("disabled");
          } else {
            $(el).find(".btn-tag-slide-next").removeClass("disabled");
          }
        });
    });
  }
});

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
