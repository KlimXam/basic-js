const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!members) {return false;}
  if (!members[0]) {return false;}

  let teama = [];

  for (let x of members) {
    if (typeof x === 'string' && x !== '') {
      let temp = x.trim();
      teama.push(temp[0].toUpperCase());
    }
  }

  return teama.sort().join('');
}

module.exports = {
  createDreamTeam
};
