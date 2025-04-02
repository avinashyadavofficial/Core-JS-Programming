let a= "The dog is barking";
let b=a.split(" ").filter(a=>a!='dog').join(" ");
console.log(b);

let c= a.replace("dog ","");
console.log(c);