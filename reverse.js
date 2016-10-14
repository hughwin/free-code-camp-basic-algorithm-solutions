function reverseString(str) {
	arr = str.split("");
	arr.reverse();
	str = arr.join("");
  return str;
}

reverseString("hello");