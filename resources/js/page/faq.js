
/**
 * FUNCTION :: 페이지 조회
 */
function faqChange(obj){
	
    document.querySelector("[name='categoryType']").value = obj;

	const form = document.querySelector("[id='faqFrm']");
 	form.action = "/customer/faq/list";
	form.submit();    
    
}
