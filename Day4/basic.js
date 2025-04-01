console.log("hello");
var a = "Avi";
console.log(a);
var firstname = "Avi";
console.log(firstname);
//firstname=33; // number not assignable to string
var json = JSON.parse("55");
console.log(typeof json);
// let u =true;
// u = "string";
// console.log(Math.round(u));
// as it gives error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
//any
var v = true;
v = "string";
Math.round(v);
console.log(v);
//this wont show error .it prints  string
//any
// let b: never=true;
// console.log(b);
// //error : Type 'true' is not assignable to type 'never'.
//undefined
var c = undefined;
console.log(c);
//null
var z = null;
console.log(z);
