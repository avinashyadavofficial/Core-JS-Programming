var Stud = /** @class */ (function () {
    function Stud() {
    }
    return Stud;
}());
var s = new Stud();
s.name = "Avinash";
console.log(s.name);
console.log(s);
// class Person {
//     private name: string;
//     public constructor(name: string) {
//       this.name = name;
//     }
//     public getName(): string {
//       return this.name;
//     }
// }
// const per= new Person("Avinash");
// console.log(per.getName());
// console.log(per.name); //not accessible bcz of private
var A = /** @class */ (function () {
    function A(name) {
        this.name = name;
    }
    A.prototype.getName = function () {
        return this.name;
    };
    return A;
}());
var a = new A("Avinash");
console.log(a.getName()); //print Avinash
var B = /** @class */ (function () {
    function B(name) {
        this.name = name;
    }
    B.prototype.getName = function () {
        return this.name;
    };
    return B;
}());
var per = new B("Avi");
console.log(per.getName());
