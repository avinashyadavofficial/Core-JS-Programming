var car = {
    type: "Toyota",
    model: "Fortuner",
    year: 2017
};
console.log(car);
var c = {
    type: "abc",
    model: "cde"
};
console.log(c);
c.type = "xyz"; //it changes
console.log(c);
// c.type=123; //error: Type 'number' is not assignable to type 'string'.
// console.log(c);
// const e:{name:String,age:number}={
//     name:"Avi" // error as age is missing
// }
// console.log(e);
var e = {
    name: "Avi"
};
console.log(e); //this wont show any error and print only name
//indexSignature
var f = {};
f.Avi = 22;
f.Rahul = 21;
console.log(f); // prints { Avi: 22, Rahul: 21 }
f.Shubham = "Avi";
console.log(f);
