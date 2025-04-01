enum x{
    a,
    b,
    c,
    d
}
let y=x.a;
console.log(y); //print 0
let z=x.c;
console.log(z); //print 2

enum m{
    a=1,
    b,
    c,
}
let e=m.a;
console.log(e);
let f=m.b;
console.log(f);

enum n{
    a="Avi",
    b="Rahul"
}
let g=n.b;
console.log(g);
console.log(n);

enum p{
    a=67,
    b=98
}
let h=p.b;
console.log(h);
console.log(p);




