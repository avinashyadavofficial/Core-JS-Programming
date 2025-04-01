//spread
let a=[1,2,3];
let b=[4,5,6];
let c=[8,9,1];
let d=[...a,...b,...c];
console.log(d);

console.log(Math.max(...a));//3

//of loop
let e=[4,5,7];
let sum=0;
for(let x of e){
    sum+=x;
}
console.log(sum);//16

let f="Avinash";
let g="";
for(let x of f){
    g+=x+" ";
}
console.log(g);


//entries
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const arr = fruits.entries();

for (let x of arr) {
   console.log(x);
}

//keys
const arr1=fruits.keys();
for (let x of arr1) {
    console.log(x);
}

//from
let ss="Avinash";
let s1=Array.from(ss);
console.log(s1);


//find
let ar=[1,5,8,4,10];
let ar1=ar.find(a=>a>5);
console.log(ar1);//8

//findIndex
let ar2=ar.findIndex(a=>a>5);
console.log(ar2);//2

