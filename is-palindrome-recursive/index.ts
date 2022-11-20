/*
    Problem:
    Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome.
    palindrome - is a string that reads the same forward and backward - ex: malayalam
*/

const reverse = function (str: string): string {
  if (str.length === 0) return "";

  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
};

const isPalindrome = function (str: string) {
  const reverseStr = reverse(str);

  return str === reverseStr;
};

// Test cases
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("kayak"));
