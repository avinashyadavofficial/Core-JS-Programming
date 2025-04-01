//block scope
{
    var a=2;
    
}
console.log(a);

//function scope
function myFunction() {
    var name = "Avi";    //here we can use var or let or const;
}

//global scope

var name="Avi";
function myFunction(){
    console.log(name);
}
myFunction();


let b=5;
{
    let b=3;
}
console.log(b);

let c=10;
function solve(){
    const c=5;
}
console.log(c);

let d=10;
function solve(){
    const d=5;
}
solve();
console.log(d);