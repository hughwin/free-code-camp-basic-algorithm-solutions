function truncateString(str, num) {
	ellipsis ="...";
	 if (num >= str.length) {
		return str;
	}

	if (num  <= 3 ){
		slice = str.slice(0, num);
		return slice + ellipsis;
	}
	if (num <= str.length){
		slice = str.slice(0, num-3);
		return slice + ellipsis;
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)