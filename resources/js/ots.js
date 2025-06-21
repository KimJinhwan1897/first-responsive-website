/**
 * FUNCTION :: 목록페이지 이동 공통 함수
 */
const moveList = () => {
    if (sessionStorage.getItem("temp_uri") != undefined) {
        const tempUri = sessionStorage.getItem("temp_uri")
        const indexOfSlash =  tempUri.lastIndexOf('/');
        sessionStorage.removeItem("temp_uri");
        // LINE :: 같은 Path 내에서 이동 했을 시
        if (location.href.startsWith(tempUri.substr(0,indexOfSlash))) {
            location.href = tempUri;
        // LINE :: 다른 Path로 이동 했을 시
        } else {
            location.href = 'list'
        }
    } else {
        location.href = "list";
    }
}

//언어 처리 부분 
function fnLangChg(lang){

	$.ajax({
	    url: "/common/changeLocale",
	    type: "POST",
	    dataType: "json",
	    data: {'lang' : lang},
		success: function(data){
			location.reload();
		},
		error : function() {
			console.log('change locale error');
        	return false ;				
        }		
	});
	
}

function hpcheck(obj){
	var chk = true;
    var phoneNumber = obj.value;
    var regExp = /^(01[0-9]{1}-?[0-9]{4}-?[0-9]{4}|01[0-9]{8})$/;
    
    if (!regExp.test(obj.value)) {
        if ($(obj).siblings(".input-message-hp").length === 0) {
          $(obj).after("<p class='input-message input-message-hp'>잘못된 형식의 전화번호 입니다.</p>");
        }
        setTimeout(() => {
        	$(obj).addClass("validation-error");
        }, 0);
        chk = false;
    } else {
        $(obj).siblings(".input-message-hp").remove();
        chk = true;
    }
    return chk;
}

//이메일 체크
function mailCheck(obj) {
  var chk = true;
  var regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  //console.log(regExp.test(obj.value));

  if (!regExp.test(obj.value)) {
    if ($(obj).siblings(".input-message-email").length === 0) {
      $(obj).after(
        "<p class='input-message input-message-email'>이메일 형식이 올바르지 않습니다.</p>"
      );
    }
    setTimeout(() => {
      $(obj).addClass("validation-error");
    }, 0);
    chk = false;
  } else {
    $(obj).siblings(".input-message-email").remove();
    chk = true;
  }
  return chk
}

// 쿠키 가져오기 
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);

        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }

        x = document.cookie.indexOf(" ", x) + 1;

        if (x == 0) break;
    }

    return "";
} // 24시간 기준 쿠키 설정하기 

// expiredays 후의 클릭한 시간까지 쿠키 설정 
function setCookie24(name, value, expiredays) {
    var todayDate = new Date();

    todayDate.setDate(todayDate.getDate() + expiredays);

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

// 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
function setCookie00(name, value, expiredays) {
    var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

    if (todayDate > new Date()) {
        expiredays = expiredays - 1;
    }

    todayDate.setDate(todayDate.getDate() + expiredays);

    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


// intro 출력
function popUpAction(name) {
    // name으로 해당 팝업창 열기 
    $("#intro").show();
}

function introFn(){
  $("#intro").show();

  // 로고 애니메이션: 아래에서 위로 올라오는 효과
  gsap.fromTo(".str-logo", 
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    }
  );

  $(".graphic-round").each((idx, el) => {
    setTimeout(() => {
      $(el).addClass("play");
    }, 500 * idx);
  });

  gsap.to("#intro .scene-first", {
    autoAlpha: 0,
    delay: 2,
  });
  $("#intro .scene-second").css({ opacity: 0 });
  gsap.fromTo(
    "#intro .scene-second",
    {
      autoAlpha: 0,
    },
    { autoAlpha: 1, delay: 2 }
  );
  gsap.to("#intro", { autoAlpha: 0, delay: 4 });	
}

function deleteCookie(name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
