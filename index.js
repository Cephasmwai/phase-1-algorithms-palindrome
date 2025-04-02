function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const lowerWord = word.toLowerCase();
  // Initialize pointers for the start and end of the word
  let left = 0;
  let right = lowerWord.length - 1;

  // Compare characters moving towards the center
  while (left < right) {
    if (lowerWord[left] !== lowerWord[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase
  2. Initialize two pointers: one at the start (left) and one at the end (right) of the word
  3. While left pointer is less than right pointer:
     a. If characters at left and right pointers don't match, return false
     b. Move left pointer forward
     c. Move right pointer backward
  4. If all characters matched, return true
*/

/*
  Explanation:
  This solution uses a two-pointer approach to efficiently check if a word is a palindrome.
  By comparing characters from both ends moving towards the center, we can determine if the word
  reads the same forwards and backwards. The solution is case-insensitive and has O(n) time
  complexity where n is the length of the word, as we only need to check each character once.
  The space complexity is O(1) as we're only using a constant amount of additional space.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // Additional test cases
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;