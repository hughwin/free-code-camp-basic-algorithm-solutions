
function mutation(arr) {
	first =  arr[0].toString().toLowerCase();
	second = arr[1].toString().toLowerCase();
	for (var i=0; i < second.length; i++){
	if (first.indexOf(second[i]) == - 1){
	return false;
	}
}
return true;
}



mutation(["hello", "hey"]);
