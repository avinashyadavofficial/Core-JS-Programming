let employeeId= new Set([101, 102, 103]);
employeeId.add(104);
employeeId.add(101);
console.log(employeeId);
employeeId.delete(101);
console.log(employeeId);
console.log(employeeId.has(101));