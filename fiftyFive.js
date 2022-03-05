var moment = require('moment'); 

function _55days (currentdate){
    let x= currentdate.add(55, 'days');
    console.log(moment(x).format('DD-MM-YYYY'));
}
console.log(moment().format('DD-MM-YYYY'));
_55days(moment());