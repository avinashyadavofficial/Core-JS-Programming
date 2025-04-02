let a = "javascript";
a = a[0].toUpperCase() + a.slice(1);
console.log(a);

//way2
let c = "javascript";
let b = c.split("");   
b[0] = b[0].toUpperCase(); 
c = b.join("");  
console.log(c);

