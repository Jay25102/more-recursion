/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (nums.length === 0) {
    return 0;
  }

  if (idx === nums.length) {
    return 1;
  }

  return nums[idx] * product(nums, idx + 1);
}

// console.log(product([]));

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestIdx = 0) {
  if (words.length === 0) {
    throw Error("words is empty");
  }

  if (idx === words.length) {
    return words[longestIdx].length;
  }

  if (words[idx].length > words[longestIdx].length) {
    longestIdx = idx;
  }

  return longest(words, idx + 1, longestIdx);
}

// console.log(longest(['cat', 'hat', 'longest']));

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, out="") {
  // if (idx === str.length) {
  //   return out.join("");
  // }

  // if (idx % 2 === 1) {
  //   out.push(str[idx]);
  // }
  // return everyOther(str, idx + 1, out);
  if (idx >= str.length) {
    return out;
  }

  out += str[idx];

  return everyOther(str, idx + 2, out);
}

// console.log(everyOther("someword"));

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  if (idx >= str.length / 2) {
    return true;
  }

  if (str[idx] !== str[str.length - idx - 1]) {
    return false;
  }

  return isPalindrome(str, idx + 1);
}

// console.log(isPalindrome('racecar'));

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) {
    return -1;
  }
  
  if (arr[idx] === val) {
    return idx;
  }

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, out="") {
  if (idx === str.length) {
    return out;
  }

  out += str[str.length - 1 - idx];

  return revString(str, idx + 1, out);
}

// console.log(revString("notracecar"));

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {
  for (let value of Object.values(obj)) {
    // console.log(value);
    if (typeof value === "object") {
      gatherStrings(value, out);
    }
    else if (typeof value === 'string') {
      out.push(value);
    }
  }

  return out;
}

// console.log(gatherStrings({
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// }));

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  mid = Math.floor((high + low) / 2);

  if (arr[mid] === val) {
    return mid;
  }
  else if (arr[mid] > val) {
    return binarySearch(arr, val, low, high = mid - 1);
  }
  else if (arr[mid] < val) {
    return binarySearch(arr, val, low = mid + 1, high);
  }
}

// console.log(binarySearch([1,2,3,4,5], 5));

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
