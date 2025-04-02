//padStart
let a="Avi";
a=a.padStart(6,"&");
console.log(a); //&&&Avi

a=a.padStart(10,0);
console.log(a); //0000&&&Avi

//padEnd

let b="Avinash";
b=b.padEnd(10,0);
console.log(b); //Avinash000

b=b.padEnd(13,"*");
console.log(b); //Avinash000***