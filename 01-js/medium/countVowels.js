/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    newstr=str.toLowerCase().split('');
    let count=0;
    for(let i=0;i<str.length;i++){
      if(newstr[i]=='a'){
        count++;

      }
      if(newstr[i]=='e'){
        count++;

      }
      if(newstr[i]=='i'){
        count++;

      }
      if(newstr[i]=='o'){
        count++;

      }
      if(newstr[i]=='u'){
        count++;

      }

    }
    return count;
}

module.exports = countVowels;
