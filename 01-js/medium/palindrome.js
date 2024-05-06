/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length<=1){
    return true;
  }
  newstr=str.toLowerCase().replace(/[^a-z0-9]/g ,"");
  let str2=newstr.split("").reverse().join("");
  if(str2===newstr){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
