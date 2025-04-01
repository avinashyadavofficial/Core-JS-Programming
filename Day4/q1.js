let s1="Avinash";
let s2="Yadav";
s1=s1+s2;
s2=s1.substring(0,s1.length-s2.length);
s1=s1.substring(s2.length);
console.log(s1);
console.log(s2);






s1 = s1 + s2;        
s2 = s1.slice(0, s1.length - s2.length); 
s1 = s1.slice(s2.length); 
console.log(s1); 
console.log(s2); 
