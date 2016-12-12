var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> -60

var now = moment();
console.log('Current timesamp', now.unix());

var timesamp = 1481523489,
    currentMoment = moment.unix(timesamp);

console.log('current moment', currentMoment.format('MMM D, YY @ h::mma'));

// January 3rd, 2016 @ 12:13AM
console.log('current new moment', currentMoment.format('MMMM Do, YYYY @ h::mmA'));
