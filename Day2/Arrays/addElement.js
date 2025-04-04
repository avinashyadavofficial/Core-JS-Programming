let a =[10,5,7,8,3];
a.splice(2,1,100,120); 
/*
in splice (index to start inserting, how much element to delete, which all elements to add)
*/
console.log(a);
a.splice(2,2,200,400);
console.log(a);
a.splice(1,3,170,180);
console.log(a);