/*
Employee Wage Problem (Practice):
Write a JavaScript program that calculates the total wage of an employee given the following conditions:

If the employee works up to 40 hours per week, they are paid at a rate of $15 per hour.

Any additional hours (beyond 40) are paid at an overtime rate of $22.5 per hour.

The program should take the total hours worked as input and return the total wage.
*/

let hour=47;
let tWage;
if(hour<=40){
    tWage=hour*15;
}
else{
    tWage=40*15+(hour-40)*22.5;
}
console.log(tWage);
