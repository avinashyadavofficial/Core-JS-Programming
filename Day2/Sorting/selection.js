function ss(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
           if(arr[j]<arr[minIdx]){
            minIdx=j;
           }
        }
        [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]]


    }
    return arr;
}
let a=[3,7,4,2,9,8];
console.log(ss(a));