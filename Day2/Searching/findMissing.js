let a=[1,2,4,6,3,7,8];
let n=a.length+1;
a.sort((a,b) =>a-b);
for(let i=0;i<n;i++){
    if(a[i]!=i+1){
        console.log(i+1);
        break;
    }
}

