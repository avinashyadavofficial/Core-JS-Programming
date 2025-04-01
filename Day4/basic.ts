console.log("hello");

let a: string ="Avi";
console.log(a);

let firstname="Avi";
console.log(firstname);
//firstname=33; // number not assignable to string

const json=JSON.parse("55");
console.log(typeof json);

// let u =true;
// u = "string";
// console.log(Math.round(u));
// as it gives error: Argument of type 'boolean' is not assignable to parameter of type 'number'.


//any
let v: any =true;
v="string";
Math.round(v);
console.log(v);
//this wont show error .it prints  string


//any
// let b: never=true;
// console.log(b);
// //error : Type 'true' is not assignable to type 'never'.


//undefined
let c: undefined=undefined;
console.log(c);

//null
let z: null=null;
console.log(z);
