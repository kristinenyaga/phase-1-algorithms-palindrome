function isPalindrome(word) {
  // Write your algorithm here

  // how to check whether a number is palindrome or not:
    // Steps
      // 1.Convert string to array
      word=word.toLowerCase()
      const stringToArray=word.split('')
      // 2.Reverse array values
      const reversedArray=stringToArray.reverse()
      // 3.convert reversed array back to string
      const stringValue=reversedArray.join('')
      // 2.Wtite a condition that checks whether the reversed string is equal to word
      if(word === stringValue){
        return word === stringValue
      }
      
      return false
      
}


/* 
  Add your pseudocode here

  
  A  word is said to be a palindrome if the word and the reverse of the word are the same
  Initialize a function and pass in a parameter(word)
  convert the word  to lowercase
  convert the  word to an array(stringToArray) using split()
  reverse the  letters  in stringToarray using reverse
  convert the reversed array to a string using join()
  compare the word(parameter) with the reversed string to see whether they match 
  return true if they do and false if otherwise

*/

/*
  Add written explanation of your solution here
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
