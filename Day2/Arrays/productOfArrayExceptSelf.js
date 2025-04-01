let a=[10,5,7,3];
let prod=1;
for(let i=0;i<a.length;i++){
    prod=prod*a[i];
}
for(let i=0;i<a.length;i++){
    a[i]=prod/a[i];
}
console.log(a);

    