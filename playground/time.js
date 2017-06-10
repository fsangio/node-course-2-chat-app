var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = moment(createdAt);
// console.log(date.format('MMM Do, YYYY'));

// var date = new Date();
// var months = ['Gen','Feb','Mar','Apr','Mag']
//
// console.log(date.getMonth());

console.log(date.format('h:mm a'));
