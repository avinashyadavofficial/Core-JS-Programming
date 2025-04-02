let a=['Hello', 'World'];
let b="";
a.forEach(x=>b+=x+" ");
console.log(b.trim());

//way 2
let c=a.join(" ");
console.log(c);

//way3
let d=a.reduce((acc,val)=>acc+" "+val);
console.log(d.trim());

