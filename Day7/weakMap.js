//creating a WeakMap
let weakMap=new WeakMap();
let obj={name:"Avinash"};
weakMap.set(obj,"Software Developer");
console.log(weakMap.get(obj)); //Software Developer

let obj1={};
weakMap.set(obj1);
console.log(weakMap.get(obj1));//undefined

weakMap.set(obj1,obj);
console.log(weakMap.get(obj1));

// weakMap.set(1,"Rahul"); // erro :: Invalid value used as weak map key

//comparision between map and WeakMap
let map=new Map();
let weakMap1=new WeakMap();
let obj2={id:1};
let obj3={id:2};
weakMap1.set(obj2,"Avi");
weakMap1.set(obj3,"Rahul");
map.set(obj2,"Avi");
map.set(obj3,"Rahul");
console.log(map.size);
console.log(weakMap1.size); //undefined

//Automatic Garbage Collection
let weakMap2=new WeakMap();
weakMap2.set(obj3,"Avi");
obj3=null;
console.log(weakMap2);
console.log(weakMap2.has(obj3));

//another example
let weakMap3=new WeakMap();
function createUser(name){
    user={name};
    weakMap3.set(user,"Hello");
    return user;
}
let user1=createUser("Avinash");
console.log(weakMap3.get(user1));//print Hello
user1=null;
console.log(weakMap3.has(user1));//false as WeakMap automatically removes the key!

//delete
weakMap3.set(obj1,"Shubham");
console.log(weakMap3.get(obj1));//Shubham
weakMap3.delete(obj1);
console.log(weakMap3.has(obj1));//false

//Note:
/*
No iteration methods (forEach, keys, values)
No size property
Only objects as keys
*/


