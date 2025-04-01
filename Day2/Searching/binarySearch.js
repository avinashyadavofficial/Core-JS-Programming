function bs(arr, targ){
    let s=0;
    let e=arr.length-1;
    while(s<e){
        let mid = Math.floor((s + e) / 2);
        if(arr[mid]<targ){
            s=mid+1;
        }
        else if(arr[mid]>targ){
            e=mid;
        }
        else{
            return mid;
        }
        
    }
    return -1;
}
let a=[1,4,7,9,15];
let targ=4;
console.log(bs(a,targ));