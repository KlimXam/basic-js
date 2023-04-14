const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  let result = '';
  for (let x = 0; x < repeatTimes; x++) { let repeatStr = String(str);
    for (let y = 0; y < additionRepeatTimes; y++) { repeatStr += y === additionRepeatTimes - 1 ? addition : addition + additionSeparator; }
    result += x === repeatTimes - 1 ? repeatStr : repeatStr + separator;
  }
  return result;
}

module.exports = {
  repeater
};
