const car:{type:String,model:String,year:number}={
    type:"Toyota",
    model:"Fortuner",
    year:2017
};
console.log(car);

const c={
    type:"abc",
    model:"cde"
};
console.log(c);

c.type="xyz"; //it changes
console.log(c);

// c.type=123; //error: Type 'number' is not assignable to type 'string'.
// console.log(c);

// const e:{name:String,age:number}={
//     name:"Avi" // error as age is missing
// }
// console.log(e);

const e:{name:String,age?:number}={
    name:"Avi" 
}
console.log(e); //this wont show any error and print only name

//indexSignature
const f:{[index: string]:number}={};
f.Avi=22;
f.Rahul=21;
console.log(f);// prints { Avi: 22, Rahul: 21 }
// f.Shubham="Avi"; ///it shows error in ts but after compiling it would run in js
// console.log(f);






