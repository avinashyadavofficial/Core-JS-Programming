let a= "I love JavaScript";
let b=a.replace("JavaScript","JS");
console.log(b);

let c=a.replaceAll("JavaScript","JS");
console.log(c);

let d=a.replace(/JavaScript/g,"JS");
console.log(d);
