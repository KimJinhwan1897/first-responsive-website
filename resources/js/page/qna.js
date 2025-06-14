$(document).ready(function() {
	
	//문의사사항 type1 - 제품 
	$("input[name='product-select']").click(function(){
		var productArr = [];
		var prod = $("input[name='product-select']:checked");
		
		$(prod).each(function(){
			productArr.push($(this).val());
		});
		
		console.log(productArr);
		$("[name='productGubun']").eq(0).val(productArr);
	});
	
	//문의사사항 type2 - 제품 
	$("input[name='product-select-2']").click(function(){
		var productArr = [];
		var prod = $("input[name='product-select-2']:checked");

		$(prod).each(function(){
			productArr.push($(this).val());
		});
		
		console.log(productArr);
		$("[name='productGubun']").eq(1).val(productArr);
	});

	
	var hpChkVal = false;
	var mailChkVal = false;
	//휴대폰 check 부분 
//	$("[name='hp']").eq(0).on("input focusout keyup", (e) => {
//		hpChkVal = hpcheck(e.target);
//		console.log("hpChkVal:"+hpChkVal);
//	});
	
	$("[name='mailAddr']").eq(0).on("input focusout keyup", (e) => {
		mailChkVal = mailCheck(e.target);
		console.log("mailChkVal:"+mailChkVal);
	});

//	$("[name='hp']").eq(1).on("input focusout keyup", (e) => {
//		hpChkVal = hpcheck(e.target);
//		console.log("hpChkVal type2:"+hpChkVal);
//	});
	
	$("[name='mailAddr']").eq(1).on("input focusout keyup", (e) => { 
		mailChkVal = mailCheck(e.target);
		console.log("mailChkVal type2:"+mailChkVal);
	});
	
//	$("[name='hp']").eq(2).on("input focusout keyup", (e) => {
//		hpChkVal = hpcheck(e.target);
//		console.log("hpChkVal type3:"+hpChkVal);
//	});
	
	$("[name='mailAddr']").eq(2).on("input focusout keyup", (e) => {
		mailChkVal = mailCheck(e.target);
		console.log("mailChkVal type3:"+mailChkVal);
	});

	
	//개인정보처리 방침 팝업 호출 
	$("#term-agree-1-popup").on("click", function(){
		$("#popup-policy").show();
	});

	$("#term-agree-2-popup").on("click", function(){
		$("#popup-policy").show();
	});
	
	$("#term-agree-3-popup").on("click", function(){
		$("#popup-policy").show();
	});
	
	$(".policy-popup-close").on("click", function () {
		$(this).closest("#popup-policy").hide();
	});
	
	$(".confirm-popup-close").on("click", function () {
		$(this).closest("#popup-confirm").hide();
	});
	
	$(".popup-close").on("click", function () {
		$(this).closest("#popup-confirm").hide();
	});

	
	//등록 팝업 확인 버튼 클릭
	$(".popup-confirm").on("click", function () {
		$(this).closest("#popup-confirm").hide();
		
		var faqSelectVal = $('[name="faq-select"]:checked').val();
		$("[name='division']").val(faqSelectVal);
		
		fnQnaTypeSubmit(faqSelectVal, '잠시 후 다시 문의 해주세요!');
	});
	
	$(".popup-confirm-en").on("click", function () {
		$(this).closest("#popup-confirm").hide();
		//기타문의
		fnQnaTypeSubmit('E', 'Please try again later!');
	});	
	
	$("#qnaType1Btn").on("click", function(){
		console.log('문의사항 1 클릭');
		//별도의 필수값 check 후  submit
		if ($("[name='belongCompanyName']").eq(0).val() == "") { alert("회사명을  입력하세요 "); return false; };
		if ($("[name='name']").eq(0).val() == "") { alert("이름을  입력하세요 "); return false; };
		if ($("[name='hp']").eq(0).val() == "") { alert("연락처를  입력하세요 "); return false; };
//		if (!hpChkVal) {  alert("연락처를  입력하세요 "); return false; };
		if (!mailChkVal) { alert("메일주소를  입력하세요 "); return false; };
		if ($("[name='productGubun']").eq(0).val() == "") {
			alert("문의하고자 하는 제품을 선택해주세요(복수 선택 가능)");
			return false; 
		};
		if ($("[name='contents']").eq(0).val() == "") { alert("문의 내용을 입력하세요 "); return false; };
		if ($("[name='term-agree-1']").is(":checked") == false) {
			alert("개인정보처리방침 동의 시에만 문의가 가능합니다.");
			return false
		};
		
		console.log("등록처리로 이동");
		
		//등록처리전 입력 사항 팝업으로 확인 출력
		$('#popCompanyName').text($("[name='belongCompanyName']").eq(0).val());
		$('#popName').text($("[name='name']").eq(0).val());
		
		var inputHp = $("[name='hp']").eq(0).val();
//	    if (inputHp.length === 10) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    } else if (inputHp.length === 11) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    }		
		
		$('#popHp').text(inputHp);
		$('#popMail').text($("[name='mailAddr']").eq(0).val());
		
		$("#popup-confirm").show();
		
	});
	
	$("#qnaType2Btn").on("click", function(){
		console.log('문의사항 2 클릭');
		//별도의 필수값 check 후  submit
		if ($("[name='belongCompanyName']").eq(1).val() == "") { alert("회사명을  입력하세요 "); return false; };
		if ($("[name='name']").eq(1).val() == "") { alert("이름을  입력하세요 "); return false; };
		if ($("[name='hp']").eq(1).val() == "") { alert("연락처를  입력하세요 "); return false; };
//		if (!hpChkVal) { alert("연락처를  입력하세요 "); return false; };
		if (!mailChkVal) { alert("메일주소를  입력하세요 "); return false; };
		if ($("[name='productGubun']").eq(1).val() == "") {
			alert("문의하고자 하는 제품을 선택해주세요(복수 선택 가능)");
			return false; 
		};
		if ($("[name='contents']").eq(1).val() == "") { alert("문의 내용을 입력하세요 "); return false; };
	    if ($("[name='term-agree-2']").is(":checked") == false) {
			alert("개인정보처리방침 동의 시에만 문의가 가능합니다.");
			return false
		};
		
		console.log("등록처리로 2 이동");
		
		//등록처리전 입력 사항 팝업으로 확인 출력
		$('#popCompanyName').text($("[name='belongCompanyName']").eq(1).val());
		$('#popName').text($("[name='name']").eq(1).val());
		
		var inputHp = $("[name='hp']").eq(1).val();
//	    if (inputHp.length === 10) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    } else if (inputHp.length === 11) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    }		
		
		$('#popHp').text(inputHp);
		$('#popMail').text($("[name='mailAddr']").eq(1).val());
		
		$("#popup-confirm").show();
		
	});	
	
	$("#qnaType3Btn").on("click", function(){
		console.log('문의사항 3 클릭');
		//별도의 필수값 check 후  submit
		if ($("[name='belongCompanyName']").eq(2).val() == "") { alert("회사명을  입력하세요 "); return false; };
		if ($("[name='name']").eq(2).val() == "") { alert("이름을  입력하세요 "); return false; };
		if ($("[name='hp']").eq(2).val() == "") { alert("연락처를  입력하세요 "); return false; };
//		if (!hpChkVal) { alert("연락처를  입력하세요 "); return false; };
		if (!mailChkVal) { alert("메일주소를  입력하세요 "); return false; };
		if ($("[name='contents']").eq(3).val() == "") { alert("문의 내용을 입력하세요 "); return false; };
	    if ($("[name='term-agree-3']").is(":checked") == false) {
			alert("개인정보처리방침 동의 시에만 문의가 가능합니다.");
			return false
		};
		
		console.log("등록처리로 3 이동");
		
		//등록처리전 입력 사항 팝업으로 확인 출력
		$('#popCompanyName').text($("[name='belongCompanyName']").eq(2).val());
		$('#popName').text($("[name='name']").eq(2).val());
		
		var inputHp = $("[name='hp']").eq(2).val();
//	    if (inputHp.length === 10) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    } else if (inputHp.length === 11) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    }		
		
		$('#popHp').text(inputHp);
		$('#popMail').text($("[name='mailAddr']").eq(2).val());
		
		$("#popup-confirm").show();
		
	});
	
	$("#qnaType3EnBtn").on("click", function(){
		console.log('영문 문의사항 3 클릭');
		//별도의 필수값 check 후  submit
		if ($("[name='belongCompanyName']").eq(0).val() == "") { alert("Enter your company name."); return false; };
		if ($("[name='name']").eq(0).val() == "") { alert("Enter your name. "); return false; };
		if ($("[name='hp']").eq(0).val() == "") { alert("Please enter your contact information."); return false; };
//		if (!hpChkVal) { alert("Please enter your contact information."); return false; };
		if (!mailChkVal) { alert("Please enter your email address "); return false; };
		if ($("[name='contents']").val() == "") { alert("Please enter your inquiry details."); return false; };
	    if ($("[name='term-agree-3']").is(":checked") == false) {
			alert("Inquiries are only possible with your consent.");
			return false
		};
		
		console.log("등록처리로 3 이동");
		
		//등록처리전 입력 사항 팝업으로 확인 출력
		$('#popCompanyName').text($("[name='belongCompanyName']").eq(0).val());
		$('#popName').text($("[name='name']").eq(0).val());
		
		var inputHp = $("[name='hp']").eq(0).val();
//	    if (inputHp.length === 10) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    } else if (inputHp.length === 11) {
//	    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
//	    }		
		
		$('#popHp').text(inputHp);
		$('#popMail').text($("[name='mailAddr']").eq(0).val());
		
		$("#popup-confirm").show();
		
	});			
});

//제품 코드 셋팅
function productSetting(){
	
	//기초데이터 삽입
	var productArray = ["SM","NM","FM","ST","IS","ID","CP","AM","DB","WM","IM","ET"];
	
	for(var i = 0 ; i < productArray.length ; i++){
	    $('[name="product-select"]').eq(i).val(productArray[i]);
	    $('[name="product-select-2"]').eq(i).val(productArray[i]);
	}
    $('[name="suggestionYn"]').eq(0).val("0");
    $('[name="suggestionYn"]').eq(1).val("1");
    $('[name="useYn"]').eq(0).val("1");
    $('[name="useYn"]').eq(1).val("0");
    
	qnaSelectSetting();
}
//문의 유형
function qnaSelectSetting(){
	
	var qnaArray = ["B","T","E"];
	
	for(var i = 0 ; i < qnaArray.length ; i++){
	    $('[name="division"]').eq(i).val(qnaArray[i]);
	}
}

var submitCheck = false;
/**
 * 문의 유형 - 구매/영업 문의 저장
 */
function fnQnaTypeSubmit(obj, obj2){
	var type = ""; 
	if (obj == 'T'){
		//기술문의
		type = "faqType2";
	}else if (obj == 'E'){
		//기타문의
		type = "faqType3";
	}else{
		//구매/영업 문의 등록 처리
		type = "faqType1";
	}	
	
	if (submitCheck == true){alert(obj2); return false;}
	
	submitCheck = true;
    const formData = new FormData(document.getElementById(type));
    fetch("/customer/support/save", { method : "POST", body : formData })
        .then(res => res.json())
        .then(json => {
        	
        	if (json["success"] == true){
    			location.href="/customer/support/complete";
          	} else if (json["success"] == false ) {
          		 alert(json["message"]);
          		submitCheck = false;
          	} else {
                alert(`${alertTxt} 중 시스템 오류가 발생하였습니다.\n관리자에게 문의해주세요.`);
          		submitCheck = false;
          	}
        })
        .catch(err => {
            alert(`${alertTxt} 중 일시적인 오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.`);
      		submitCheck = false;
        })
    
}

