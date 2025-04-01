//sort
let a=["aci","avi","adi"];
a.sort();
console.log(a);

//reversing
a.reverse();
console.log(a);

//toSorted
b=a.toSorted();
console.log(b);

//toReversed
c=b.toReversed();
console.log(c);

//for number
let d=[2,7,3,10,5];
//increasing
d.sort((a,b) => a-b);
console.log(d);
//decreasing
d.sort((a,b) => b-a);
console.log(d);


const per=[
    {type:"Avi",age:21},
    {type:"Ram",age:26},
    {type:"Shyan",age:15}
]
per.sort((a,b)=>a.age-b.age);
console.log(per);


