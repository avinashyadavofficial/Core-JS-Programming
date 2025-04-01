var a=[2,3,-8,7,-1,2,3];
var isPossitive=false;

for(let i=0;i<a.length;i++){
    if(a[i]>0){
        isPossitive=true;
        break;
    }
}
if(isPossitive){
    let sum=0;
    let ans=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i];
        if(sum<0){
            sum=0;
        }
        ans=Math.max(sum,ans);
    }
    console.log(ans);
}
else{
    let sum=a[0];
    for(let i=1;i<a.length;i++){
        sum=Math.max(sum,a[i]);
    }
    console.log(sum);
}