function is(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let k=arr[i];
        let j=i-1;
        for(;j>=0 && arr[j]>k;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=k;

    }
    return arr;
}
let arr=[2,6,4,8,1];
console.log(is(arr));