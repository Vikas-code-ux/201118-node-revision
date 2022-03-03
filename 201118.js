let amount = 200000;

function netIncome(amount) {
    let income;
    if(amount < 250000){
        income = amount;
        console.log(income);
        return income;
    }
    else if(250000 < amount < 500000){
        income = amount*(1-(5/100));
        console.log(income);
        return income;
    }
    else if(500000 < amount < 750000){
        income = amount*(1-(10/100));
        console.log(income);
        return income;
    }
    else if(750000 < amount < 1000000){
        income = amount*(1-(15/100));
        console.log(income);
        return income;
    }
    else if(1000000 < amount < 1250000){
        income = amount*(1-(20/100));
        console.log(income);
        return income;
    }
    else if(1250000 < amount < 1500000){
        income = amount*(1-(25/100));
        console.log(income);
        return income;
    }
    else if(1500000 < amount){
        income = amount*(1-(30/100));
        console.log(income);
        return income;
    }
}