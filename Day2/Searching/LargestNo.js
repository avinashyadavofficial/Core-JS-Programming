let a=[10,30,3,70,80];
let ans=a[0];
for(let i=1;i<a.length;i++){
    if(a[i]>ans){
        ans=a[i];
    }
}
console.log(ans);