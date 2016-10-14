function findLongestWord(str) {
	length = 0;
	arr = str.split(" ");
	console.log(arr);
	for (i = 0; i < arr.length; i++) {
		word = arr[i];
		if (word.length > length){
			length = word.length;
		}
		
	}
  return length;
}
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); 