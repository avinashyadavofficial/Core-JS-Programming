function getTime(): number{
    return new Date().getTime();
}
console.log(getTime());

function print():void{
    console.log('Hello');
}
print();

function mul(a:number,b:number){
    return a*b;
}
console.log(mul(2,5));

function mult(a:number,b:number):string{
    return (a*b).toString();
}
console.log(mult(2,5) +"Avi"); 

function multi(a:number,b:number, c?:number){
    return a*b*(c||1);
}
console.log(multi(5,6));


function pow(val:number,exponent:number=8){
    return val**exponent;
}
console.log(pow(2));
console.log(pow(2,5));

function sum({a, b}: {a: number, b: number}): number {
    return a + b;
}

console.log(sum({a: 2, b: 6}));  

function ss({a,c,b}:{a:number,c:number,b:string}){
    return a+c+b;
}
let ans=ss({a:12,c:45,b:"Avinash"});
console.log(ans);

//Alias In FUNCTION
type Sum=(a:number,b:number)=>number;
const p:Sum=(a,b)=>a+b;
console.log(p(2,6));









