const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {

  const str = n.toString();
  const arr = [];

  for (let x = 0; x < str.length; x += 1) {arr.push(Number(str.slice(0, x) + str.slice(x + 1)));}

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
