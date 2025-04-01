let a=[1,2,3,4,5];
let k=3;
let s=0;
let e=k-1;
while(s<e){
    [a[s],a[e]]=[a[e],a[s]];
    s++;
    e--;
}
console.log(a);