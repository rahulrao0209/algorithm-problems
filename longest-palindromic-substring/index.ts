/*
    Problem Statement: Given a string s return the longest palindromic substring in s

    ex: babad -> bab OR aba
        cbbc -> cbbc
*/

const longestPalindrome = function (str: string): string {
  let res = "";
  let resLength = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    left = i;
    right = i;

    /* For odd palindrome length */
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > resLength) {
        resLength = right - left + 1;
        res = str.slice(left, right + 1);
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    left = i;
    right = i + 1;

    /* For even palindrome length */
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > resLength) {
        resLength = right - left + 1;
        res = str.slice(left, right + 1);
      }
      left -= 1;
      right += 1;
    }
  }
  return res;
};

// Test cases
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbc"));
console.log(longestPalindrome("aaaaa"));
