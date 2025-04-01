// let a=[1,2,3,4,5];
// let k=3;
// let n=a.length;
// k=k%n;
// for(let i=0;i<k;i++){
//     let temp=a[0];
//     for(let j=0;j<n;j++){
//        a[j]=a[j+1];
//     }
//     a[n-1]=temp;
// }
// console.log(a);
function solve(a,k){
    let l=a.length;
    if(l==0 ||k==0){
        return a;
    }
    k%=l;
    if(k==0){
        return a;
    }
    let b= a.slice(k).concat(a.slice(0,k));
    return b;

}
let a=[1,2,3,4,5];
let k=3;
console.log(solve(a,k));
console.log(a);