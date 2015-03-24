var assert = require('assert');


var isPalindrome = function (string) {
  var str = string.toLowerCase();
  var reversedString = str.split('').reverse().join('');
  return str === reversedString;
};


// Tests

assert.equal(
  isPalindrome('alala'),
  true
);

assert.equal(
  isPalindrome('as'),
  false
);

assert.equal(
  isPalindrome('ala'),
  true
);

assert.equal(
  isPalindrome('a'),
  true
);

assert.equal(
  isPalindrome('aaaaaa'),
  true
);

assert.equal(
  isPalindrome('xxxaxxx'),
  true
);

assert.equal(
  isPalindrome('ABa'),
  true
);

console.log('Success!');
