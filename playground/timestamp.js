const moment = require('moment');

// const date  = new Date();
// console.log(date.getMonth());

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
const date = moment(createdAt);

console.log(date.format('h:mm a'));

// console.log(moment("/Date(1198908717056-0700)/"));
// console.log(new Date(1198908717056));
