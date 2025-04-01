function ls(arr,targ){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==targ){
            return i;
            
        }
    }
    return -1;
}
let a=[3,7,9,5,10];
let targ=555;
console.log(ls(a,targ));