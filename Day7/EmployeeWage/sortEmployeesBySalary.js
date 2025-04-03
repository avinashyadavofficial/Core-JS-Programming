let employees = [
    { name: "Alice", salary: 5000 },
    { name: "ob", salary: 7000 },
    { name: "Charlie", salary: 6000 }
];
employees.sort((a,b)=>a.salary-b.salary);
console.log(employees);