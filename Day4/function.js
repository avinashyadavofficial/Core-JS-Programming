function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function print() {
    console.log('Hello');
}
print();
function mul(a, b) {
    return a * b;
}
console.log(mul(2, 5));
function mult(a, b) {
    return (a * b).toString();
}
console.log(mult(2, 5) + "Avi");
function multi(a, b, c) {
    return a * b * (c || 1);
}
console.log(multi(5, 6));
function pow(val, exponent) {
    if (exponent === void 0) { exponent = 8; }
    return Math.pow(val, exponent);
}
console.log(pow(2));
console.log(pow(2, 5));
function sum(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
console.log(sum({ a: 2, b: 6 }));
function ss(_a) {
    var a = _a.a, c = _a.c, b = _a.b;
    return a + c + b;
}
var ans = ss({ a: 12, c: 45, b: "Avinash" });
console.log(ans);
var p = function (a, b) { return a + b; };
console.log(p(2, 6));
