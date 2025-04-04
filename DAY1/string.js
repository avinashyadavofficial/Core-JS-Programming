let text = " I study in \"SRMIST\" in Btech";
console.log(text);

let a= new String("avi");
let b="avi";
console.log(a==b);
console.log(a===b);
console.log(a.length);
console.log(a.at(1));
console.log(a.charAt(1));
console.log(a.charCodeAt(1));
console.log(a[1]);

let fruit="Apple, Banana,Guava";
console.log(fruit.slice(0,8));
console.log(fruit.substring(1,5));
console.log(fruit.substring(4)); //starting ke 4 index chhod de raha

console.log(a.slice(-1));
console.log(a.slice(1));

let name="Avinash Yadav";
console.log(name.substr(1,4)); //isme 1 index se 4 aur tak karega

console.log(name.substring(1,6));

console.log(name.toUpperCase());
console.log(name.toLowerCase());

let d="    Avi    ";
console.log(d.trim()); //from both side
console.log(d.trimStart());
console.log(d.trimEnd());


let t = "542";
let padded = t.padStart(4,"0");
//padStart is a String method so convert num into string first
console.log(padded);

let y="Avi";
console.log(y.padEnd(7,"0"));

let e="avi";
console.log(e.repeat(2));

let f="Avinash Yadav";
let g=f.replace("Yadav","YADAV");
console.log(f);
console.log(g);

//without case sensitive
let h="Avinash Yadav";
let i=h.replace(/YADAV/i,"Smart");
console.log(h);
console.log(i);
let k="I am Avi. I ate";
let j=k.replaceAll("I","we");
console.log(j);
let l=k.replaceAll(/i/g,"we");
console.log(l);

//Converting string to array
let m="Avinash Yadav";
let n=m.split(" "); //in place of space we can use, or any symbol
console.log(n);

let o="Avi is  a good boy";
console.log(o.indexOf("is"));
console.log(o.search("is"));

console.log(o.includes("Avi"));
console.log(o.startsWith("A"));
console.log(o.endsWith("y"));

let firstName="Avi";
let lastName="Yadav";
let p=`Welcome ${firstName},${lastName}!`;
console.log(p);

