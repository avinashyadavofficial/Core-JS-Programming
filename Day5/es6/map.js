const fruit=new Map([
    ["apple",60],
    ["banana",30],
    ["mango",16]
]);
console.log(fruit);

fruit.set("grapes",100);

console.log(fruit);

console.log(fruit.get("apple"));

console.log(typeof(fruit)); //object

console.log(fruit instanceof Map);//true
console.log(fruit.size); //4

fruit.clear(); //clear
console.log(fruit); // Map(0) {}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);

//get
let a=fruits.get("apples");
console.log(a);

//delete
fruits.delete("apples");
console.log(fruits);

//entries
let txt="";
for(let x of fruits.entries()){
    txt+=x;
}
console.log(txt); //bananas,300oranges,200

//has
console.log(fruits.has("oranges"));
console.log(fruits.keys());   

//values;
let sum=0;
for(let x of fruits.values()){
    sum+=x;
}
console.log(sum);
