const person={
    fname: "Avi",
    lname:"Yadav",
    age:22
};
let a=Object.entries(person);   
console.log(a); //[ [ 'fname', 'Avi' ], [ 'lname', 'Yadav' ], [ 'age', 22 ] ]
console.log(a[0]); //[ 'fname', 'Avi' ]

const fruits={
    Banana:100,
    Apple:50,
    Grapes:70
};
let x="";
for(let [a,b] of Object.entries(fruits)){ //here a is fruit name and b is value(a: key, b: value);
    x+=a+" "+b+" ";
}
console.log(x);//Banana 100 Apple 50 Grapes 70

//Converting objects to Map
const b=new Map(Object.entries(fruits));

console.log(b); //Map(3) { 'Banana' => 100, 'Apple' => 50, 'Grapes' => 70 }

console.log(b.get("Apple"));//50

console.log(b.values());//[Map Iterator] { 100, 50, 70 }

//Object values
let c=Object.values(person);
console.log(c); //[ 'Avi', 'Yadav', 22 ]

