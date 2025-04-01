function sol(arr){
    var a=[];
    arr.sort((a,b) => a-b);
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]){
           a.push(arr[i]);
        }
        
    }
    return a;
}
let arr=[4,2,4,5,2,3];
console.log(sol(arr));