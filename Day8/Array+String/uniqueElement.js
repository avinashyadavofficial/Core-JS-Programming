let a=[1, 2, 3, 2, 4, 5, 1];
let ans=a.filter(x=>a.indexOf(x)===a.lastIndexOf(x));
console.log(ans);