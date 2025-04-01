let s="aaabbcd";
let ans="";
for(let i=0;i<s.length;i++){
    let ct=1;
    for(let j=i+1;j<s.length;j++){
        if(s[i]==s[j]){
            ct=ct+1;
        }
    }
    if(ct>1){
        ans+=s[i];
        ans+=ct;
    }
    else{
        break;
    }
    while(s[i]==s[i+1]){
        i++;
    }
}
console.log(ans);