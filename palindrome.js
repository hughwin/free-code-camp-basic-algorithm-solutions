function palindrome(str) {
 
 var str = str.replace(/[^a-z0–9]+/gi, “”).toLowerCase(),
 reversed = str.split(“”).reverse().join(“”);
 
 if (reversed === str){
 return true;
 // returns true
 }
 else return false;
}
palindrome(“A man, a plan, a canal. Panama”);