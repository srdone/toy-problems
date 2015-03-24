var assert = require('assert');


var isPalindrome = function (string) {
  var reversedString = string.split('').reverse().join('');
  return string === reversedString;
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
