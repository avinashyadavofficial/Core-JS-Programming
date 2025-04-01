let a="Avi Rahul Shubham";
let s=[];
let ans="";
for(let i=0;i<a.length;i++){
    if(a[i]!=" "){
        s.unshift(a[i]);
    }
    else{
        while(s.length!=0){
            ans+=s.shift();;    
        }
        ans+=" ";
    }
}
while(s.length!=0){
    ans+=s.shift();
}
console.log(ans)