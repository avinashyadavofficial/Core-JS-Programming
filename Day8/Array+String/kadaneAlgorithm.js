let a = [2, 3, -8, 7, -1, 2, 3];

const res=a.some(x=>x>0)
? a.reduce((maxSum,x)=>{
    maxSum=Math.max(x,maxSum+x);
    return Math.max(maxSum,0);
},0)
: Math.max(...a);
console.log(res);
