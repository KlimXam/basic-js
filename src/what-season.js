const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) {throw new Error('Invalid date!');}
  if (date.hasOwnProperty('toString')) {throw new Error('Invalid date!');}


const x = date.getMonth();
  if (x >= 2 && x <= 4) return 'spring';
  else if (x >= 5 && x <= 7) return 'summer';
  else if (x >= 8 && x <= 10) return 'autumn';
  else return 'winter';
}

module.exports = {
  getSeason
};
