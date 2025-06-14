
/*function totalSearch(){
	var searchAreaValue = "";
	var searchText = $('#searchText').val();
	var searchText2 = $('#searchText2').val();
	var form = document.querySelector("[id='searchfrm']");
	
	if (fnToNull(searchText) != ''){
		searchAreaValue = searchText;
	}
	if (fnToNull(searchText2) != ''){
		searchAreaValue = searchText2;
	}
	
	document.querySelector("[id='searchArea']").value = searchAreaValue;
	form.method = "post";
 	form.action = "/totalSearch";
	form.submit();
	
}


function searchTap(obj){
	const form = document.querySelector("[id='searchfrm']");
	document.querySelector("[id='tIdx']").value = obj;
	form.method = "post";
 	form.action = "/totalSearch";
	form.submit();
	
}*/

//Null 값 ""
function fnToNull(data) {
    // undifined나 null을 null string으로 변환하는 함수. 
    if (String(data) == 'undefined' || String(data) == 'null') {
        return ''
    } else {
        return data
    }
}
