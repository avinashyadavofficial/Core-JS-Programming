let a= w;
let ct=0;
a.forEach(a => {
    if (a=== 'apple') ct++;
});
console.log(ct);

//way2
let b=a.reduce((acc,item)=>item=='apple'?acc+1:acc,0);
console.log(b);

//way3
let count=0;
a.forEach(sol);
function sol(value){
    if(value=='apple'){
        count+=1;
    }
}
console.log(count);