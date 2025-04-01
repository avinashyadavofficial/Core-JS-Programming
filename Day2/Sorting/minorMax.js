let b=[2,6,3,8,1,9];
let n=b.length;
b.sort((a,b) => a-b);
console.log(b[0]);
console.log(b[n-1]);

let c=[2,6,3,8,1,9];
console.log(Math.min.apply(null,c));
console.log(Math.max.apply(null,c));
