let a=[1,5,3,9,7,2];
let n=a.length;
for(let i= n-1;i>=0;i--){
    let j=Math.floor(Math.random() *(i+1));
    [a[i],a[j]]=[a[j],a[i]];
}
console.log(a);