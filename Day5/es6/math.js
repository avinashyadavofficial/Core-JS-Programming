//truc() -- return integer part only
console.log(Math.trunc(4.5));//4

//sign()
console.log(Math.sign(4)); //1
console.log(Math.sign(0));//0
console.log(Math.sign(-2));//-1

//cbrt() -- cube root
console.log(Math.cbrt(64));//4

//log2
console.log(Math.log2(4));//2

//log10
console.log(Math.log10(1000));//3

let x=Number.EPSILON;
console.log(x); //2.220446049250313e-16

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

//isInteger()
console.log(Number.isInteger(4));//true
console.log(Number.isInteger(4.1));//false

//isSafeInteger
console.log(Number.isSafeInteger(10));//true
console.log(Number.isSafeInteger(12345678901234567890));//false

//Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
//This is safe: 9007199254740991. This is not safe: 9007199254740992.

//ifFinite()
console.log(isFinite(10/1));//true
console.log(isFinite(10/0));//false

//isNaN()
console.log(isNaN("Avi"));



