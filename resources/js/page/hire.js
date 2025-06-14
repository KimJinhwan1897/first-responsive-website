var filesArr = [];
var fileNo = 0;
var submitCheck = false;
$(document).ready(function() {
	
	var strUrl = window.location.pathname;
	if (strUrl.indexOf('hire') != -1) {
		
	    let strRegDateTime = document.querySelector("[name='strRegDateTime']").value;
	
	    if(strRegDateTime == ""){
	        document.querySelector("[name='strRegDateTime']").value = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substring(0,19);
	    }
	    
		var hpChkVal = false;
		var mailChkVal = false;
		//휴대폰 check 부분 
		$("[name='hpNo']").on("input focusout keyup", (e) => {
			hpChkVal = hpcheck(e.target);
			console.log("hpChkVal:"+hpChkVal);
		});
		
		$("[name='email']").on("input focusout keyup", (e) => {
			mailChkVal = mailCheck(e.target);
			console.log("mailChkVal:"+mailChkVal);
		});
		
		//개인정보처리 방침 팝업 호출 
		$("#term-agree-1-popup").on("click", function(){
			$("#popup-policy").show();
		});

		$(".policy-popup-close").on("click", function () {
			$(this).closest("#popup-policy").hide();
		});
		//확인 팝업 끄기
		$(".popup-close").on("click", function () {
			$(this).closest("#popup-confirm").hide();
		});
		
		//등록전 확인 팝업 끄기
		$(".confirm-popup-close").on("click", function () {
			$(this).closest("#popup-confirm").hide();
		});
		
		//등록 처리 전 확인 팝업 호출
		$("#hireTalentBtn").on("click", function(){
			console.log('인재등록버튼 클릭');
			//별도의 필수값 check 후  submit
			if ($("[name='name']").val() == "") { return false; };
			if (!hpChkVal) { return false; };
			if (!mailChkVal) { return false; };
		    if ($("[name='term-agree-1']").is(":checked") == false) {
				alert("개인정보처리방침 동의 시에만 등록이 가능합니다.");
				return false
			};
			
			console.log("등록처리로 이동");
			
			//등록처리전 입력 사항 팝업으로 확인 출력
			$('#popName').text($("[name='name']").eq(0).val());
			
			var inputHp = $("[name='hpNo']").eq(0).val();
		    if (inputHp.length === 10) {
		    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
		    } else if (inputHp.length === 11) {
		    	inputHp = inputHp.substring(0, 3) + '-' + inputHp.substring(3, 7) + '-' + inputHp.substring(7, 11);
		    }		
			
			$('#popHp').text(inputHp);
			$('#popMail').text($("[name='email']").eq(0).val());
			
			$("#popup-confirm").show();
			
		});				
		
		//등록 팝업 확인 버튼 클릭
		$(".popup-confirm").on("click", function () {
			$(this).closest("#popup-confirm").hide();
			
//		    var frm = document.getElementById("frm");
//		    var formData = new FormData(frm);
//		    for (var i = 0; i < filesArr.length; i++) {
//		        // 삭제되지 않은 파일만 폼데이터에 담기
//		        if (!filesArr[i].is_delete) {
//		            formData.append("attach_file", filesArr[i]);
//		        }
//		    }
		    
//		    $.ajax({
//		        method: 'POST',
//		        url: '/company/recruit/insertAjax',
//		        dataType: 'json',
//		        data: formData,
//		        async: true,
//		        timeout: 30000,
//		        cache: false,
//		        headers: {'cache-control': 'no-cache', 'pragma': 'no-cache'},
//		        success: function () {
//		            alert("파일업로드 성공");
//		        },
//		        error: function (xhr, desc, err) {
//		            alert('에러가 발생 하였습니다.');
//		            return;
//		        }
//		    })		    
		    
			if (submitCheck == true){alert("전송 중입니다.잠시 후 다시 시도 해주세요!"); return false;}
			submitCheck = true;

		    const formData = new FormData(document.getElementById("frm"));
		    for (var i = 0; i < filesArr.length; i++) {
		        // 삭제되지 않은 파일만 폼데이터에 담기
		        if (!filesArr[i].is_delete) {
		            formData.append("fileAdditional", filesArr[i]);
		        }
		    }
		    
		   fetch("/company/recruit/insertAjax", { method : "POST"
			   , body : formData })
	        .then(res => res.json())
	        .then(json => {
	        	
	        	console.log(json);
	        	
	        	if (json["success"] == true){
	          		submitCheck = false;
	    			location.href="/company/recruit/complete";
	          	} else if (json["success"] == false ) {
	          		submitCheck = false;
	          		 alert(json["message"]);
	          	} else {
	          		submitCheck = false;
	                alert(`${alertTxt} 중 시스템 오류가 발생하였습니다.\n관리자에게 문의해주세요.`);
	          	}
	        	
	        })
	        .catch(err => {
          		submitCheck = false;
	            alert(`${alertTxt} 중 일시적인 오류가 발생하였습니다.\n잠시 후 다시 시도해주세요.`);
	        });				
			
//			fnHireAjax();
		});
		
		$(".resumeFile").on("change", function () {
//			for (const key in this.files) {
				var file = this.files[0];
				var maxSize = 5120 * 1024; //5120KB 제한_ 5MB (1KB = 1024 bytes)
				if (file.size > maxSize) {
					alert("파일 크기는 5MB 이하여야 합니다.");
					$(this).val(''); // 선택한 파일 초기화
					$(this).closest(".input-file-pack").find(".resumeFileName").val('');
					return;
				}

		        if (validation(file)) {
					if (typeof this.files[0] === "object") {
						var tag = createInputNameTag(this.files[0].name, this.id);
//						$(this).closest(".input-file-area").find(".input-file-name-wrap").append(tag);
						$(this).closest(".input-file-pack").find(".resumeFileName").val(this.files[0].name);
					}
		        }
//			}
		});		

//		var fileTotalSize = 0; 
//		//첨부파일 추가 부분
//		$(".addFile").on("change", function () {
//			console.log(" ===> 첨부파일 추가 실행");
//			console.log(" ===> file.length : " + $(this).files.length);
//		    var maxFileCnt = 5;   // 첨부파일 최대 개수
//			var maxSize = 51200 * 1024; //51200KB 제한_ 50MB (1KB = 1024 bytes)
//			var attFileCnt = document.querySelectorAll('.input-file-name-tag').length;    // 기존 추가된 첨부파일 개수
//		    var remainFileCnt = maxFileCnt - attFileCnt;    // 추가로 첨부가능한 개수
//		    var curFileCnt = $(this).files.length;  // 현재 선택된 첨부파일 개수
//		    
//		    for (var i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
//		    	
//		    }
//			
//		});	

	}	
	
	//채용공고 더보기부분
	$("#moreBtn").on('click', function(){

		var pageNo = parseInt($("#pageNo").val());
		pageNo = pageNo+1;
		//console.log(pageNo);
		$("#pageNo").val(pageNo);

		fnHireNoticeAjax();
	});

});

function addFile(obj){
	console.log(" ===> 첨부파일 추가 실행");
	console.log(" ===> file.length : " + obj.files.length);
    var maxFileCnt = 10;   // 첨부파일 최대 개수
	var maxSize = 51200 * 1024; //51200KB 제한_ 50MB (1KB = 1024 bytes)
	var attFileCnt = document.querySelectorAll('.input-file-name-tag').length;    // 기존 추가된 첨부파일 개수
	
    var remainFileCnt = maxFileCnt - attFileCnt;    // 추가로 첨부가능한 개수
    var curFileCnt = obj.files.length;  // 현재 선택된 첨부파일 개수
    
    if (curFileCnt > remainFileCnt) {
        alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.");
        return false;
    } 
    	
    for (var i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
        const file = obj.files[i];

    	if (file.size > maxSize) {
    		alert("파일 크기는 50MB 이하여야 합니다.");
    		$("#file-additional").val("");
    		return;
    	}    
        
        if (validation(file)) {
            // 파일 배열에 담기
            var reader = new FileReader();
            reader.onload = function () {
                filesArr.push(file);
            };
            
            reader.readAsDataURL(file);      

            // 목록 추가
            let htmlData = '';
			htmlData += '<div id="file' + fileNo + '" class="input-file-name-tag">';
			htmlData += '	<input type="file" name="file01" style="display:none;"/>';
			htmlData += '	<p class="str">' + file.name + '</p>';
			htmlData += '	<button class="btn-input-file-name-close" onclick="deleteFile(' + fileNo + ');" data-parent="file-additional"></button>';
			htmlData += '</div>';
            
            $('.filelist2').append(htmlData);  
            fileNo++;
        }else{
        	continue;        	
        }
    }
    // 초기화
//  document.querySelector("input[name='file-additional']").val("");
    $("#file-additional").val("");
}

/* 첨부파일 검증 */
function validation(obj){
	
    const fileTypes = ['application/msword'
                       , 'application/haansoftdocx'
                       , 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                       , 'application/pdf'
                       , 'application/vnd.ms-powerpoint'
                       , 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                       , 'application/haansofthwp'
                       , 'application/x-hwp'];
    
	console.log(" ====> "+obj.name);
	console.log(" ====> "+obj.type);
    
    if (obj.name.length > 100) {
        alert("파일명이 100자 이상인 파일은 제외되었습니다.");
        return false;
    } else if (obj.size > (50 * 1024 * 1024)) {
        alert("최대 파일 용량인 50MB를 초과한 파일은 제외되었습니다.");
        return false;
    } else if (obj.name.lastIndexOf('.') == -1) {
        alert("확장자가 없는 파일은 제외되었습니다.");
        return false;
    } else if (!fileTypes.includes(obj.type)) {
        alert("첨부가 불가능한 파일은 제외되었습니다.");
        return false;
    } else {
        return true;
    }
}

/* 첨부파일 삭제 */
function deleteFile(num) {
    document.querySelector("#file" + num).remove();
    filesArr[num].is_delete = true;
}

function createInputNameTag(name, id, fileNo) {
    var fileNameTag = document.createElement("div");
    var fileNameTagName = document.createElement("p");
    fileNameTag.classList.add("input-file-name-tag");
    fileNameTagName.classList.add("str");
    fileNameTagName.textContent = name;
    fileNameTag.append(fileNameTagName);

    var fileNameCloseButton = document.createElement("button");
    fileNameCloseButton.classList.add("btn-input-file-name-close");
    fileNameCloseButton.classList.add("btn-file-close");
    fileNameCloseButton.setAttribute("data-parent", id);
    fileNameCloseButton.setAttribute("data-del-idx", fileNo);

    //첨부파일 삭제
//    fileNameCloseButton.addEventListener("click", function () {
//    	console.log(name);
//      $("#" + id)
//        .closest(".input-file-pack")
//        .find(".input-file-name")
//        .val("");
//      console.log(document.getElementById(id).files.value);
//      document.getElementById(id).files = null;
//      this.parentNode.remove();
//      
//      var fArrIdx = filesArr.indexOf(name)
//      console.log(" ===> "+fArrIdx);
//      filesArr.splice(0,1);
//      console.log(" ===> "+filesArr[0].name);
//      console.log(" ===> "+filesArr[1].name);
//    });

    fileNameTag.append(fileNameCloseButton);
    return fileNameTag;
  }


/**
 * 채용공고 더보기 부분
 */
function fnHireNoticeAjax(){
	
	var url = "/company/recruit/noticeListAjax";
	
    $("form[id='noticeFrm']").attr("action", url);
    $("form[id='noticeFrm']").ajaxSubmit({
		method: "get",
		success : function(data) {
			//console.log(data);
			//console.log(data.data.data);
        if (data.success){
        	
			var noticeListHtml = "";
            var noticeList = data.data.data;

            if (noticeList.length < 10){
				$("#moreBtn").hide();	            	
            }else{
				$("#moreBtn").show();	            	
            }
            
            for(var i = 0; i < noticeList.length ; i++){
            	var hireTitle = noticeList[i].title;

            	noticeListHtml = noticeListHtml + '<li class="hr-registration__board-list">';
            	noticeListHtml = noticeListHtml + '  <a href="${hire.link}" target="_blank">';
            	noticeListHtml = noticeListHtml + '    <p class="hr-registration__board-list__title">'+hireTitle+'</p>';
            	noticeListHtml = noticeListHtml + '    <div class="hr-registration__board-list__career">';
            	noticeListHtml = noticeListHtml + '      <p class="str">';
            	var jobGubunName = ""; 
            	if (noticeList[i].gubun == 'N'){jobGubunName = '신입';}
            	else if (noticeList[i].gubun == 'C'){jobGubunName = '경력';}
            	else if (noticeList[i].gubun == 'B'){jobGubunName = '신입/경력';}
            	
            	var dueStartDate = noticeList[i].due_start_date;
            	var dueEndDate = noticeList[i].due_end_date;
            	var timeZone = 9 * 60 * 60 * 1000; // 9시간
            	dueStartDate = new Date(dueStartDate + timeZone).toISOString().split('T')[0];
            	dueEndDate = new Date(dueEndDate + timeZone).toISOString().split('T')[0];

            	noticeListHtml = noticeListHtml + jobGubunName;
            	noticeListHtml = noticeListHtml + '      </p>';
            	noticeListHtml = noticeListHtml + '      <p class="str">'+dueStartDate+' ~ '+dueEndDate+'</p>';
            	noticeListHtml = noticeListHtml + '    </div>';
            	noticeListHtml = noticeListHtml + '    <div class="hr-registration__board-list__tags">';
            	
            	if (noticeList[i].job_tag_set1 != null || noticeList[i].job_tag_set1 != ''){
            		noticeListHtml = noticeListHtml + '<div class="chip" data-type="grey">'+noticeList[i].job_tag_set1+'</div>';
            	}
            	if (noticeList[i].job_tag_set2 != null || noticeList[i].job_tag_set2 != ''){
            		noticeListHtml = noticeListHtml + '<div class="chip" data-type="grey">'+noticeList[i].job_tag_set2+'</div>';
            	}
            	if (noticeList[i].job_tag_set3 != null || noticeList[i].job_tag_set3 != ''){
            		noticeListHtml = noticeListHtml + '<div class="chip" data-type="grey">'+noticeList[i].job_tag_set3+'</div>';
            	}
            	noticeListHtml = noticeListHtml + '    </div>';
            	noticeListHtml = noticeListHtml + '  </a>';
            	noticeListHtml = noticeListHtml + '</li>';	            
            }
			//console.log(noticeListHtml);	
            $("#noticeListInfo").append(noticeListHtml);				
            
        } else {
        	alert(data.message);
			//console.log("조회된 데이터가 없습니다.");
        }
      },
      error : function() {
			console.log('조회중 오류가 발생하였습니다.');
        return false ;
      }
    });	

}
