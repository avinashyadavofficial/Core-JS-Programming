function ms(arr){
    let n=arr.length;
    if(n<=1) return arr;
    const mid=Math.floor(n/2);
    const left=ms(arr.slice(0,mid));
    const right=ms(arr.slice(mid));
    return m(left,right);
}
function m(l,r){
    ans=[];
    let i=0;
    let j=0;
    while(i<l.length && j<r.length){
        if(l[i]<r[j]){
            ans.push(l[i]);
            i++;
        }
        else{
            ans.push(r[j]);
            j++;
        }
    }
    return ans.concat(l.slice(i),r.slice(j));

}
let arr=[2,5,3,8,1,9];
console.log(ms(arr));