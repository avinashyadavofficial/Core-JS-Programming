function calculateBonus(salary, years) {
    if(years>=1 && years<=3){
        salary=salary*1.05;
    }
    else if(years>=4 && years<=6){
        salary=salary*1.10;
    }
    else{
        salary=salary*1.15;
    }
    return salary.toFixed(2);
}
console.log(calculateBonus(1000,3));
console.log(calculateBonus(1000,5));
console.log(calculateBonus(1000,9));
