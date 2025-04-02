let a=[10, 20, 30, 40, 50];
a.pop();
console.log(a);

let b = a.slice(0, -1);
console.log(b);

a.splice(-1, 1);
console.log(a);
