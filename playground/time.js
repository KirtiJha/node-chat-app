const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

let date = moment();
console.log(date.format('MMM Do, YYYY'));

date.add(1, 'years');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));