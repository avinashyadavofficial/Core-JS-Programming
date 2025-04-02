let a=[10, 20, 30, 40];
a.splice(1,1);
console.log(a);

//way2
let b=a;
b.filter((element,index)=>index!==1);
console.log(b);
