APP.namespace("APP.input");
APP.namespace("APP.inputFile");
APP.namespace("APP.popup");

var Popup = function (str, btn) {
  if (btn === "confirm") {
    btn = `<button type="button" class="btn btn-popup-confirm" data-type="popup">
    확인
  </button>`;
  }
  $("body").append(`<div class="popup-area">
  <div class="dim"></div>
  <div class="popup">
    <div class="popup__content">
      <p class="str">${str}</p>
    </div>
    <div class="btn-wrap">
      ${btn}
    </div>
  </div>
</div>`);
};

APP.popup = $(function () {
  $(".js-popup-close").on("click", function () {
    $(this).closest(".popup-area").remove();
  });
});

APP.input = $(function () {
  // * 밸리데이션
  $("[data-character-check]").on("input focusout keyup", (e) => {
    characterCheck(e.target);
  });
  $("[maxlength]").on("input focusout keyup", (e) => {
    maxLengthLimit(e.target);
  });
  $("[data-email-check]").on("input focusout keyup", (e) => {
    emailCheck(e.target);
  });
  $("[data-num-check]").on("input focusout keyup", (e) => {
    numCheck(e.target);
  });
  $("[data-str-check]").on("input focusout keyup", (e) => {
    strCheck(e.target);
  });

  $(".input[required], .textarea[required]").on("focus", function (e) {
    if ($(e.target).val() === "") {
      $(this).addClass("validation-error");
      if ($(e.target).siblings(".input-message-require").length === 0) {
        if (isLangEn) {
          $(this).after("<p class='input-message-require'>Required field.</p>");
        } else {
          $(this).after(
            "<p class='input-message-require'>필수항목 입니다.</p>"
          );
        }
      }
    } else {
      if ($(e.target).attr("data-email-check") !== "true") {
        $(this).siblings(".input-message-require").remove();
      }
    }
  });
  $(".input[required], .textarea[required]").keyup(function (e) {
    if ($(e.target).val() === "") {
      $(this).addClass("validation-error");
      if ($(e.target).siblings(".input-message-require").length === 0) {
        if (isLangEn) {
          $(this).after("<p class='input-message-require'>Required field.</p>");
        } else {
          $(this).after(
            "<p class='input-message-require'>필수항목 입니다.</p>"
          );
        }
      }
    } else {
      $(this).siblings(".input-message-require").remove();
      $(this).removeClass("validation-error");
    }
  });
  $(".input[required], .textarea[required]").on("focusout", function (e) {
    if ($(e.target).val() === "") {
      $(this).addClass("validation-error");
    } else {
      $(this).removeClass("validation-error");
    }
  });
});

//내용 주석 처리 _ 인재풀 등록시 별도 JS 사용함
APP.inputFile = $(function () {
//  $(".input-file").on("change", function () {
//    function createInputNameTag(name, id) {
//      var fileNameTag = document.createElement("div");
//      var fileNameTagName = document.createElement("p");
//      fileNameTag.classList.add("input-file-name-tag");
//      fileNameTagName.classList.add("str");
//      fileNameTagName.textContent = name;
//      fileNameTag.append(fileNameTagName);
//
//      var fileNameCloseButton = document.createElement("button");
//      fileNameCloseButton.classList.add("btn-input-file-name-close");
//      fileNameCloseButton.setAttribute("data-parent", id);
//      fileNameCloseButton.addEventListener("click", function () {
//        $("#" + id)
//          .closest(".input-file-pack")
//          .find(".input-file-name")
//          .val("");
//        document.getElementById(id).files = null;
//        this.parentNode.remove();
//      });
//
//      fileNameTag.append(fileNameCloseButton);
//      return fileNameTag;
//    }
//
//    for (const key in this.files) {
//      if (typeof this.files[key] === "object") {
//        var tag = createInputNameTag(this.files[key].name, this.id);
//        $(this)
//          .closest(".input-file-area")
//          .find(".input-file-name-wrap")
//          .append(tag);
//        $(this)
//          .closest(".input-file-pack")
//          .find(".input-file-name")
//          .val(this.files[key].name);
//      }
//    }
//  });
});
