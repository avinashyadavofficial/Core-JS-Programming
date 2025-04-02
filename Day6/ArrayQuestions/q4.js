//way1
let a=[1, 2, 3, 4, 5, 6, 7, 8];
let b=a.filter(a=>a%2==0);
console.log(b);

//way2
let c = a.reduce((acc, num) => {
    if (num % 2 === 0) acc.push(num);
    return acc;
}, []);
console.log(c);

//way3
let b3 = [];
a.forEach(num => {
    if (num % 2 === 0) b3.push(num);
});
console.log(b3);

