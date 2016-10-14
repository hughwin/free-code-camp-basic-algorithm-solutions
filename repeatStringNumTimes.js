function repeatStringNumTimes(str, num) {
	arr = [];
	for (var i = 0; i < num; i++){
		arr.push(str);
		console.log(arr);
	}
	str = arr.join("");
	return str;
  // repeat after me

}

repeatStringNumTimes("abc", 3);