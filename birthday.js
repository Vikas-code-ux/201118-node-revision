var moment = require('moment');
const prompt = require('prompt-sync')();

function birthday(birthdate){
    var cur = moment();
    var curformat = cur.date() + "-" + (cur.month()+1) + "-" + cur.year();
    console.log(cur.month() + "," + cur.date());
    var currdate = moment(curformat, "DD-MM-YYYY");
    var brtdate = moment(birthdate, "DD-MM-YYYY");

    var remainingdays = moment.duration(brtdate.diff(currdate)).asDays();
    return remainingdays;
}
let x = prompt("Enter Your Birthdate : ");
console.log(birthday(x));