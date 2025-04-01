var a = [];
a.push("Avi");
console.log(a);
a.push("Avinash", "Rahul");
console.log(a);
// const b: readonly string[]=[]
// b.push("Avi"); // push' does not exist on type 'readonly string[]'
// console.log(b);
var c = [1, 4, 7];
console.log(c);
c.push(9);
console.log(c);
// c.push("Avi"); //'string' is not assignable to parameter of type 'number'.
// console.log(c);
var head = c[0]; //prints 1
console.log(head);
