//instead of writing
let person={name:"Avi",age:21};
// let name=person.name;
// let age=person.age;
// console.log(name,age);//Avi 21

//we can write 
// let {name,age}=person;
// console.log(name,age); // Avi 21
//if we want to rename variable whi destructuring
let {name:fullName,age:age1}=person;
console.log(fullName,age1);

// we can also define default values
let {name,age=25}=person;
console.log(name,age); // it would print Avi 21
 
// // Destructuring Arrays
// let arr=[1,2,3];
// let [a,b,c]=arr;
// console.log(a,b,c); // 1 2 3

/// (...)=> this is also called rest operators
let arr1=[1,2,3,4,5,6];
let [num1,num2,...num3]=arr1;
console.log(num2);
console.log(num3);

//Destructuring in Function Parameters
//Array Destructuring in Function
function sol([a,b,c]){
    console.log(a,b,c);
}
sol([1,3,6]); //1 3 6

//Object Destructuring in Function
function solObject({name,age}){
    console.log(`name is ${name} and age is ${age}`);
}
let obj={name:"Avinash",age:25};
solObject(obj);


//Nested Object Destructuring
let stud={
    fname:"Avinash",
    marks:{
        eng:96,
        math:99
    }
}
let {fname,marks:{eng,math}}=stud;
console.log(fname);
console.log(eng);
console.log(math);

//Nested Array Destructuring
let number=[1,[2,3],4];
let [a,[b,c],d]=number;
console.log(b);




