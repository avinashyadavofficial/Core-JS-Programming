//object Destructing
const stud={
    fname:"Avi",
    lname:"Yadav",
    age:21,
};
let x= {fname,age}=stud;
console.log(x);

//Array Destructing
const fruits=["apple","banana","grapes"];
let [fruit1,fruit2]=fruits;
console.log([fruit1,fruit2]=fruits);