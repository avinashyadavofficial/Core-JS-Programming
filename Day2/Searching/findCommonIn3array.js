function sol(a,b,c){
    let m=a.length;
    let n=b.length;
    let o=c.length;
    let i=0,j=0,k=0;
    let ans=[];
    while(i<m && j<n && k<o){
        if(a[i]==b[j] && b[j]==c[k]){
           ans.push(a[i]);
           i++;
           j++;
           k++;
           while(i<m && a[i+1]==a[i]){
            i++;
           } 
           while(j<n && b[j+1]==b[j]){
            j++;
           } 
           while(k<o && c[k+1]==c[k]){
            k++;
           } 
        }
        else if(a[i]<b[j]){
            i++;
        }
        else if(b[j]<c[k]){
            j++;
        }
        else{
            k++;
        }
    }
    return ans;        
}
let a=[1,4,6,9];
let b=[1,4,7,9];
let c=[2,4,8,9];
console.log(sol(a,b,c));
