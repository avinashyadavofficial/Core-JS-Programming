let a= ['apple', 'banana', 'apple', 'orange', 'apple'];
let ct=0;
a.forEach(a => {
    if (a=== 'apple') ct++;
});
console.log(ct);

//way2
let b=a.reduce((acc,item)=>item=='apple'?acc+1:acc,0);
console.log(b);