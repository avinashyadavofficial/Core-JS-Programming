let salaries = [3500, 4200, 7000, 8500, 9000];
let maxSalary=salaries.reduce((acc,sal)=>acc>sal?acc:sal);
console.log(maxSalary);