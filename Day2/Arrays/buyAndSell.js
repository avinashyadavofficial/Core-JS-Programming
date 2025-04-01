let a=[2,5,7,4,2];
let buy=a[0];
let profit=0;
for(let i=1;i<a.length-1;i++){
    if(a[i]<buy){
        buy=a[i];
    }
    else{
        profit=Math.max(profit,a[i]-buy);
    }
}
console.log(profit);