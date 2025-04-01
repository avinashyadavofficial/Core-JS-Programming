//indexOf
let a=[5,7,9,1,2,1];
console.log(a.indexOf(9));
console.log(a.indexOf(9,3));
//includes
console.log(a.includes(1));
function func(value){
    return value>5;
}
//find
console.log(a.find(func));
//findIndex
console.log(a.findIndex(func));
//findLast
console.log(a.findLast(x => x>5));
console.log(a.findLastIndex(x => x>5));
