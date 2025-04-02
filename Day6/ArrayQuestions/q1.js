const  arr=[1,2,3,4,5];
//way1
let arr1=[];
arr.forEach(a=>arr1.push(a*a));
console.log(arr1);
//way2
let arr2=arr.map(a=>a*a);
console.log(arr2);

//way3
let arr3=Array.from(arr,a=>a*a);
console.log(arr3);

//way4
let arr4 = arr.reduce((acc, num) => {
    acc.push(num * num);
    return acc; 
}, []);
console.log(arr4);

