//isArray
let a=[1,2,3];
let b="Avinash";
console.log(Array.isArray(a));
console.log(Array.isArray(b));

//forEach
let sum=0;
let summ=0
let idxSum=0;
let c=[1,2,4,7,8];
c.forEach(solution);
function solution(value,index){
    sum+=value;
    idxSum+=index;
}
c.forEach(a=>summ+=a);
console.log(summ);
console.log(sum);
console.log(idxSum);

//map
let d=[1,3,7];
let sqrD=d.map(sol);
    function sol(value){
        return value*value;
    }
let sqrD1=d.map(a=>a*a);
console.log(sqrD1);
console.log(sqrD);

//filter
let e=[1,2,7,8,9];
let findEven=e.filter(solEven);
function solEven(value){
    return value%2==0;
}
let findEven1=e.filter(a=>a%2==0);
console.log(findEven1);
console.log(findEven);

//reduce
let f=[1,2,6,7];
let sum1=f.reduce(findSum,0); //here 0 is initialiser
function findSum(total,value){
    return total+value;
}
let sum2=f.reduce((a,b)=> a+b,0);
console.log(sum1);
console.log(sum2);

//reduceRight
let g=[2,5,9,1];
let sum3=g.reduceRight(funSum);
function funSum(a,b){
    return a+b;
}
console.log(sum3);
let sum4=g.reduceRight((a,b)=>a+b,0);
console.log(sum4);

//every
let arr=[1,6,8,3,6];
let ans=arr.every(farr);
function farr(val){
    return val>5;
}
console.log(ans); //return false as all element of the array is not greater than 5;
let ans1=arr.every(a=>a>0);
console.log(ans1); //true


//some
let arr1=[1,4,8,9];
let ans2=arr1.some(farr1);
function farr1(a){
    return a%2==0;
}
console.log(ans2); //true
let ans3=arr1.some(a=>a%2==0);
console.log(ans3); // true


//indexOf
let arr2=[1,5,3,2];
console.log(arr2.indexOf(5));

//lastIndexOf -- searches from end of the array
let arr3=[1,4,8,1,2];
console.log(arr3.lastIndexOf(1)); //print 3;