
function bs(arr){
    let n=arr.length;
    let isswap=false;
    for(let i=0;i<n;i++){
       isswap=false;
       for(let j=0;j<n-i-1;j++){
           if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            isswap=true;
           }
       }
       if(isswap==false) break;
    }
    
}
let arr=[2,3,8,7,9,4];
bs(arr);
console.log(arr);
