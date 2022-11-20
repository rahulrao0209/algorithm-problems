type freqStore = {
  [prop: string]: number;
};

const validAnagram = function (str1: string, str2: string) {
  if (str1.length !== str2.length) return false;

  // Initialize the objects
  const obj1: freqStore = {};
  const obj2: freqStore = {};

  // Loop through both the strings and store the character and its frequency in an object
  for (let char of str1) {
    obj1[char] = (obj1[char] && (obj1[char] += 1)) || 1;
  }

  for (let char of str2) {
    obj2[char] = (obj2[char] && (obj2[char] += 1)) || 1;
  }

  // Compare the two objects
  for (let key of Object.keys(obj1)) {
    if (!(obj1[key] === obj2[key])) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log(validAnagram("brag", "grab"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("car", "arc"));
console.log(validAnagram("peach", "cheap"));
console.log(validAnagram("awesome", "awesom"));

/* 
    Steps
    Loop through the both strings and store each character and its frequency in an object for each string.
    Check whether all the key value pairs match between the two objects.
*/
