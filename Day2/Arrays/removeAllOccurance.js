function sol( a,  element){
    let j=0;
    for(let i=0;i<a.length-1;i++){
        if(a[i]!=element){
           a[j]=a[i];
           j++;
        }
    }
    return j;

}
var a=[10,20,10,5,10];
var element=10;
console.log(sol(a,element));