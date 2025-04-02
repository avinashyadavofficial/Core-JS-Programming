let a= "banana";
let b=Array.from(a);
let count=b.reduce((acc,item)=>item=="a"?acc+1:acc,0);
console.log(count);

//way2
let c=a.split("a").length-1;
//as after splitting it will show as [ 'b', 'n', 'n', '' ]
console.log(c);