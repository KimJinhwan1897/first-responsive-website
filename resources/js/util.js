function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// 최대 입력값 제한
function maxLengthLimit(obj) {
  if (obj.value.length > obj.maxLength) {
    obj.value = obj.value.slice(0, obj.maxLength);
  }
}

// 특수문자 입력 방지
function characterCheck(obj) {
  var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  var dom = $($(obj)[0]);
  var condition = $(obj).siblings(".input-message").length === 0;

  if (regExp.test(obj.value)) {
    if (condition) {
      $(
        '<p class="input-message">특수문자는 입력하실수 없습니다.</p>'
      ).insertAfter(dom);
    }
  } else {
    $(obj).siblings(".input-message").remove();
  }
}

// 이메일 체크
function emailCheck(obj) {
  var regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!regExp.test(obj.value)) {
    if ($(obj).siblings(".input-message-email").length === 0) {
      if (isLangEn) {
        $(obj).after(
          "<p class='input-message input-message-email'>The email format is invalid.</p>"
        );
      } else {
        $(obj).after(
          "<p class='input-message input-message-email'>이메일 형식이 올바르지 않습니다.</p>"
        );
      }
    }
    setTimeout(() => {
      $(obj).addClass("validation-error");
    }, 0);
  } else {
    $(obj).siblings(".input-message-email").remove();
  }
}

// 숫자 체크
function numCheck(obj) {
  obj.value = obj.value.replace(/[^0-9]/g, "");
}
// 문자열 체크
function strCheck(obj) {
  obj.value = obj.value.replace(/[^ㄱ-힣a-zA-Z]/g, "");
}

// 이미지 명도 체크
function imageLightness(imageSrc, callback) {
  if (imageSrc === undefined) {
    console.log("이미지를 찾을 수 없습니다.");
    return null;
  }
  var img = document.createElement("img");
  img.src = imageSrc;
  img.style.display = "none";
  document.body.appendChild(img);

  var colorSum = 0;

  var brightness = null;

  img.onload = function () {
    // create canvas
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    var r, g, b, avg;

    for (var x = 0, len = data.length; x < len; x += 4) {
      r = data[x];
      g = data[x + 1];
      b = data[x + 2];

      avg = Math.floor((r + g + b) / 3);
      colorSum += avg;
    }

    brightness = Math.floor(colorSum / (this.width * this.height));
    // console.log("섹션 이미지 명도 체크", brightness, brightness <= 255 / 2);
    if (brightness <= 255 / 2) {
      callback();
    }
  };
}

// 헤더, 메인 섹션 컨텐츠 밝기
function contentLightness() {
  $("#header").addClass("color-reverse");
  $("section:first-of-type").css({ color: "#fff" });
  $(document).scroll(function () {
    if ($(document).scrollTop() <= 0) {
      $("#header").removeClass("transform");
      $("#header").addClass("color-reverse");
    } else {
      $("#header").addClass("transform");
      $("#header").removeClass("color-reverse");
    }
  });
}
