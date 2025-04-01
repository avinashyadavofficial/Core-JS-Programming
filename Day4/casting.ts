let a:unknown="Avi";
console.log((a as string).length); // here it typecasted from unknown to string //print 3

let b: unknown=6;
console.log((b as string).length); //prints undefined

// console.log((6 as string).length); //error


//USing <>
let c:unknown="Avinash";
console.log((<string>c).length);

