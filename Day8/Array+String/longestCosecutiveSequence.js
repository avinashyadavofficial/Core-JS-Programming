let a=[100,4,200,1,3,2];
a.sort((x,y)=>x-y);
let ct=1;
let ans=1;
for(let i=1;i<a.length;i++){
    if(a[i]-a[i-1]==1){
        ct+=1;
        ans=Math.max(ans,ct);
    }
    else{
        ct=1;
    }
}
console.log(ans);