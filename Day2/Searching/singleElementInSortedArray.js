let a=[1, 1, 3, 3, 5, 5, 7, 7, 8, 8,9];
let n=a.length;
let ans=0;
for(let i=0;i<a.length;i=i+2){
    if(a[i]!=a[i+1]){
        ans=a[i];
        break;
    }
    
}
if(a[n-1]!=a[n-2]){
    ans=a[n-1];
}
console.log(ans);