let t: [number, boolean,string];
t=[21,true,"Avinash"];
console.log(t);

let a:[number,boolean,string];
a=[20,true,"Avnash"];
console.log(a);
a.push("Rahul");
console.log(a);
a.push(76);
console.log(a);

// let b:[string,boolean]=["Avinash",true,"Rahul"]; 
// // [string, true, string]' is not assignable to type '[string, boolean]
// console.log(b);

let c:[string, boolean]=["Rahul",true];
console.log(c);
c.push("Avinash");
console.log(c);

// let d:readonly[string, boolean]=["Rahul",true];
// console.log(d);
// d.push("Avinash");
// console.log(d);
// //push' does not exist on type 'readonly [string, boolean]'.

const d:[x:number,y:number]=[23,67.89];
console.log(d);//prints [ 23, 67.89 ]

console.log(x)//error Cannot find name 'x'
const[x,y]=d;
console.log(x);//prints 23


