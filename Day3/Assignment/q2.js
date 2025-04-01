let a=[10,2,7,8,9,10,2];
let cp=a[0];
let sp=0;
let profit=0;
for(let i=1;i<a.length;i++){
    if(a[i]<cp){
        cp=a[i];
    }
    else{
        if(a[i]-cp > profit){
            sp=a[i];
            profit=sp-cp;
        }
    }
}
console.table([
    `Cost Price : ${sp-profit}`,
    `Selling Price : ${sp}`,
    `Profit :  ${profit}`
])