function confirmEnding(str, target) {

ending = (str.substr(-target.length))
console.log(ending)
if (ending === target){
	return true;
} else {
	return false; 
}



}

confirmEnding("Bastian", "n");
