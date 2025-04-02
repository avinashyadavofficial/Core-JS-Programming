let a= "apple,banana,cherry";
let b=Array.from(a.split(","));
console.log(b);

//way2
let c=a.split(",");
console.log(c);

//way3--- if there is any whitespaces
let d=a.split(",").map(a=>a.trim());
console.log(d);