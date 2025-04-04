let a=[5,10,30,70];
// let b=a.reverse();
// console.log(b);
let s=0;
let e=a.length-1;
while(s<e){
    let temp=a[s];
    a[s]=a[e];
    a[e]=temp;
    s++;
    e--;
}
console.log(a);
console.log(a.sort((x,y)=>y-x));