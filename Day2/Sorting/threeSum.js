function sol(arr,t){
    arr.sort((a,b)=>a-b);
    let n=arr.length;
    for(let i=0;i<n-2;i++){
        let j=i+1;
        let k=n-1;
        while(j<k){
            let reqSum=t-arr[i];
            if(arr[j]+arr[k]<reqSum){
                j++;
            }
            else if (arr[j]+arr[k]>reqSum){
                k--;
            }
            else{
               return true;
            }
        }
    }
    return false;
}
let a =[1, 4, 45, 6, 10, 8];
let t=103;
console.log(sol(a,t));
