function sol(a){
    if(a.length===0) return;
    let val=a.shift();
    sol(a);
    a.push(val);

}
let a=[9,3,4,6,7];
sol(a);
console.log(a);
