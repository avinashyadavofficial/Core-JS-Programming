//join
let a=["Avi","Rahul","Mohan"];
let b=a.join("*");
console.log(a);
console.log(b);
//pop
a.pop();
console.log(a);

//push
a.push("Shubham");
console.log(a);
let l=a.push("shu");
console.log(l); // this gives length of the array. ie. 4

//shift
a.shift();
console.log(a);

//unshift
a.unshift("Raj");
console.log(a);

//length    
a[a.length]="Gaurav"; //add to the end
console.log(a); 

//concat
let c="Avinash";
let d="Yadav";
let e="Smart";
console.log(c.concat(d));
console.log(c.concat(d,e));

let f=a.concat("Harshil");
console.log(f); // it will be added to f
console.log(a); // not to a

//copyWithin
// a.copyWithin(2,0); //replacing 2nd index to 0 index element
// console.log(a);

a.copyWithin(4,1,2);
console.log(a);

//flat
const h = [[1,2],[3,4],[5,6]];
console.log(h.flat());
let i=h.flat();
console.log(i);

//flatMap
let j= i.flatMap(x=>[x,x*10]);
console.log(j);



