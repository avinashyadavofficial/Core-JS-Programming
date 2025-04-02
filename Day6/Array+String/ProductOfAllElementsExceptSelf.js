let a=[1, 2, 3, 4];
let prod=a.reduce((acc,ele)=>acc*ele,1);
let b=a.map(x=>prod/x);
console.log(b);

//way2
let lp=1;
let rp=1;
let res=new Array(a.length);
for(let i=0;i<a.length;i++){
    res[i]=lp;
    lp*=a[i];
}
for(let i=a.length-1;i>=0;i--){
    res[i]*=rp;
    rp*=a[i];
}
console.log(res);

//way3
let n=a.length;
let ans=new Array(n);
ans[0]=a.slice(1).reduce((acc,ele)=>acc*ele);
ans[n-1]=a.slice(0,n-1).reduce((acc,ele)=>acc*ele);
for(let i=1;i<n-1;i++){
    let left=a.slice(0,i).reduce((acc,ele)=>acc*ele);
    let right=a.slice(i+1).reduce((acc,ele)=>acc*ele);
    ans[i]=left*right;
}
console.log(ans);

