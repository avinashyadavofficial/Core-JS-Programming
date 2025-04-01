const letter=new Set(["a,b,c"]);
console.log(letter); //{ 'a,b,c' }
letter.add("d");
console.log(letter); // { 'a,b,c', 'd' }

const a="a";
const b="b";
letter.add(a);
letter.add(b);
console.log(letter); //{ 'a,b,c', 'd', 'a', 'b' }

console.log("a");
console.log(letter); //{ 'a,b,c', 'd', 'a', 'b' }


//listing all elements
let txt="";
for(let x of letter){
    txt+=x; 
}
console.log(txt);//a,b,cdab

console.log(typeof(letter));//object

console.log(letter instanceof Set);//true

let ans=letter.has("c");
console.log(ans);

//list all values
let t="";
for(let x of letter.values()){
    t+=x; 
}
console.log(t);//a,b,cdab

