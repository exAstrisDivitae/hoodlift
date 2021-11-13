const os = require('os'); // e.g.
let seconds = 0; 
seconds = os.uptime(); // e.g.
const days = seconds / 86400;
const dRemainder = days - Math.trunc(days);
const hours = dRemainder * 24;
const hRemainder = hours - Math.trunc(hours);
const minutes = hRemainder * 60;
const mRemainder = minutes - Math.trunc(minutes);
const sec = mRemainder * 60;

const timeSum = (scnds, callback) => {
    if (typeof seconds === "number") {
        return callback(null, {
        days: Math.trunc(days),
        hours: Math.trunc(hours),
        minutes: Math.trunc(minutes),
        seconds: Math.round(sec)
        });
    } else if (typeof seconds !== "number") {
        return callback(new Error("Error: timesum.js was passed a value that is not a number"));
    } else {
        return callback(new Error("Error: there is a bug in the code"));
    }
};

function callback (error, timeObj) {  
    if (error) {
        return error.message;
    } else {
        let d = timeObj.days;
        let h = timeObj.hours;
        let m = timeObj.minutes;
        let s = timeObj.seconds;
        let tSum = `${d} d ${h} h ${m} m ${s} s`;
        return tSum;
    }
}; 

const timesum = timeSum(seconds, callback);
module.exports = timesum;