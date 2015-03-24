/* Make sure you do these last */

/*
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
plusOneSum([1, 2, 3, 4]); // 14
*/

var plusOneSum = function (array) {

  return array.reduce(function (previous, current) {
    return previous + current + 1;
  }, 0);

};


console.log(plusOneSum([1, 2, 3, 4])); // 14

/*
Write a function that accepts a multi dimensional array and returns a flattened version.
flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/

var flatten = function (array, flatArray) {
  var i;
  var flattened = flatArray || [];

  for (i = 0; i < array.length; i += 1) {
    if (array[i].length) {
      flattened = flatten(array[i], flattened);
    } else {
      flattened.push(array[i]);
    }
  }

  return flattened;
};

console.log(flatten([1, 2, [3, [4], 5, 6], 7])); // [1, 2, 3, 4, 5, 6, 7]

/*
Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
*/

var sorter = function (a, b) {
  if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] === b[0] && a[1] > b[1]) {
    return 1;
  }
  if (a[0] === b[0] && a[1] === b[1]) {
    return 0;
  }
  if (a[0] === b[0] && a[1] < b[1]) {
    return -1;
  }
};

var array = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

array.sort(sorter);

console.log(array);

/*
There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.
*/

var findMissing = function (arr1, arr2) {
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    if (arr2.indexOf(arr1[i]) === -1) {
      return arr1[i];
    }
  }
};

var a = [1, 2, 3, 4, 5];
var b = [5, 2, 4, 1];

console.log(findMissing(a, b));

/*
Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).
Example
longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
*/

var assert = require('assert');



// we assume in everything below that the function automatically performs a standard sort.

// should not return duplicates
assert.deepEqual(
  longestWords('a a b c'),
  ['a', 'b', 'c']
);

// should return multiple
assert.deepEqual(
  longestWords('a bc def ghi jkl'),
  ['def', 'ghi', 'jkl']
);

// case-insensitive
assert.deepEqual(
  longestWords('Alpha alpha BetaR, betar'),
  ['alpha', 'beta']
);

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/


/*
Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".
*/



/*
Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
*/
