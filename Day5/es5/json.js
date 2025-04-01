//JSON-- JavaScript Object Notation

//parse -- convert text into Js object
let obj= JSON.parse('{"name":"Avinash","age":21}');
console.log(obj);
let a=JSON.stringify(obj);
console.log(a);


//JSON Objects
let c= '{"name":"Avi","age":21}';
console.log(JSON.parse(c));

// let d= '{"name":"Avi","age":21,}';
// console.log(JSON.parse(d)); // error bcz of comma after 21

//JSON Arrays
let d=[1,2,3]; // right
let e=[1,2,3,];// wrong