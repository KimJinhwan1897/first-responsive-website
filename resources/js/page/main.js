$(document).ready(function() {
	
	//쿠키 정보 확인	
    var intro = getCookie('intro');
    var noticeBar = getCookie('noticeBar');
    
	//alert('intro : ' + intro);
	//alert('noticeBar : ' + noticeBar);

    //false 인경우
    if (!noticeBar){
	
	    var todayDate = new Date(); 
	    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
		
	    if (todayDate > new Date()) {
	    	deleteCookie('noticeBar');
	    }
	    
    }
	
	introFn();
    // 변수가 없을경우 인트로 출력 출력 
    // if (!intro) {
		
	//     var todayDate = new Date(); 
	//     todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
	// 	//alert('introFn > ' + todayDate + " vs " + new Date());

	//     //if (todayDate > new Date()) {
	// 		//alert('introFn');
	// 		/*개발종료 후 다시 열기*/

	// 		//alert('introFn');
	// 		introFn();
	//     //}
	    
    // 	setCookie00('intro', 'done',1);    	
    // }
    // // 변수가 있을 경우 인트로 숨김
    // else{
    // 	$("#intro").hide();
    // 	//setCookie00('intro', 'done',1);    	
    // }
     
    
});