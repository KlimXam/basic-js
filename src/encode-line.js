const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 0;

  for (let x = 0; x < str.length; x++) {counter++; if (str[x] !== str[x + 1]) {counter === 1 && (counter = ''); result += counter + str[x]; counter = 0}}
  
  return result;
}

module.exports = {
  encodeLine
};
