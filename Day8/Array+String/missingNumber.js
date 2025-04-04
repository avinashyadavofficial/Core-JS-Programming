let a=[1,2,4,5,6];
function fun(a){
    let diff=a[0];
    for(let i=0;i<a.length;i++){
        if(i+diff!==a[i]){
            return i+diff;
        }
    }
}
console.log(fun(a));