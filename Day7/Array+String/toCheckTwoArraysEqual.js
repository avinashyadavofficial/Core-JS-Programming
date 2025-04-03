/*
Check If Two Arrays Are Equal (Ignoring Order)
Check if [1, 2, 3] and [3, 2, 1] are the same, ignoring the order.
*/
let x=[1,2,3];
let y=[3,2,1];
x.sort((a,b)=>a-b);
y.sort((a,b)=>a-b);
let c=x.length===y.length && x.every((val,ind)=>val==y[ind]);
console.log(c);