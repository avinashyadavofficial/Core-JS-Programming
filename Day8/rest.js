function sumAll(...nums){
    let ans=0;
    for (let n of nums){
        ans+=n;
    }
    return ans;
}
console.log(sumAll(2,4,6,7,8,9));