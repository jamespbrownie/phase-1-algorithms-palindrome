// function isPalindrome(word) {
//   // Write your algorithm here
//   let reversedWord = word.split('').reverse().join('')
//   reversedWord === word
// }

function isPalindrome (word) {
  let start = 0
  let finish = word.length - 1

  while (start < finish) {
    if (word[start++] !== word[finish--]) {
      return false
    }
  }
  return true
}

// function isPalindromeThree (word) {
//   for (let i = 0; i < word.length / 2; i++) {
//     const j = word.length - 1 - i;
//     if (word[i] !== word[j]) return false;
//   }
//   return true;
//   }
// }






/* 
  Add your pseudocode here

  function takes in a string
  function creates variable that = reversed string
  function compares original string with reversed string
  if equal === , return true
  if not, return false



  returns 'true' if string is palindrome, 'false' if string is not palindrome
*/

/*
  Add written explanation of your solution here

  -the function takes in a string as a parameter (word)
  -reversedWord is created as a variable to store the reversed version of "word"
  -to create the reversedWord: the function splits "word" into an array of individual letters with .split('')
  -after .split, .reverse() is called to literally reverse the order of the elements in the new array
  -after the letters are reversed with .reverse, .join('') is used to join the elements back into a single string.

  -Now that we have reversedWord, we can compare reversedWord to our original word with the strict equality operator (===)
  -The read.me specified two results (or returns): true if the word is a palindrome, false if the word is not a palindrome. 
  -To create these two returns, we use an if statement. 
    -The if condition returns true if reversed word is a palindrome (if reversedWord is the same as word)
    -The else condition returns false if first condition is not met (reversedWord does NOT equal word)

  And thats it! 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
