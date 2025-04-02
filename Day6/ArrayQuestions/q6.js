let a = [5, 12, 8, 130, 44];
console.log(a.find(a=>a>10));

let result = a.filter(num => num > 10);
console.log(result[0]); // To get the first one
