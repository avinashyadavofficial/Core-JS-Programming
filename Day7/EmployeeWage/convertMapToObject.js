let employeeMap = new Map([
    ["John", 4500],
    ["Sarah", 5500]
]);
let obj={};
employeeMap.forEach((val,key)=>obj[key]=val);
console.log(obj);
