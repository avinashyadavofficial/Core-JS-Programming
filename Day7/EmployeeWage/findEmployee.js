let employees = [
    { name: "Alice", salary: 5000 },
    { name: "Bob", salary: 7000 },
    { name: "Charlie", salary: 6000 }
];
let a=employees.find(a=>a.salary>6000);
console.log(a);