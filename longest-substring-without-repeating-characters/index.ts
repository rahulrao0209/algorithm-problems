/*
  Problem Statement: Given a string s find the longest substring without repeating characters
*/

const longestSubstring = function (str: string): string {
  let result = "";
  let start = 0;
  let end = start + 1;
  let chars: string[];
  let subStr: string;

  while (start < str.length) {
    chars = [];
    subStr = "";
    chars.push(str[start]);
    end = start + 1;

    while (end < str.length) {
      if (chars.includes(str[end])) break;
      chars.push(str[end]);
      end += 1;
    }

    for (let i = 0; i < chars.length; i++) {
      subStr += chars[i];
    }
    result = result.length < subStr.length ? subStr : result;

    start += 1;
  }
  return result;
};

// Test cases
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbb"));
console.log(longestSubstring("pwwkew"));
