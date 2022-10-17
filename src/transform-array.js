const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let convert = [];

  for (let x = 0; x < arr.length; x++) {if (arr[x] === "--discard-next") {x++;} 
    else if (arr[x] === "--discard-prev") {if (convert[convert.length - 1] === arr[x - 1] && x > 0) {convert.pop();}} 
    else if (arr[x] === "--double-next") {if (x < arr.length - 1) {convert.push(arr[x + 1]);}} 
    else if (arr[x] === "--double-prev") {if (convert[convert.length - 1] === arr[x - 1] && x > 0) {convert.push(arr[x - 1]);}} 
    else if (typeof arr[x] !== "undefined") {convert.push(arr[x]);}
  }
  return convert;
}

module.exports = {
  transform,
};
