/*
    Problem:
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.

    ex: awesome -> emosewa
*/

const reverse = function (str: string): string {
  if (str.length === 0) return "";

  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
};

// Test cases
console.log(reverse("awesome"));
console.log(reverse("malayalam"));
console.log(reverse("i love you"));
