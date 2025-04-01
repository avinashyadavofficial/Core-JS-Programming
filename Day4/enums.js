var x;
(function (x) {
    x[x["a"] = 0] = "a";
    x[x["b"] = 1] = "b";
    x[x["c"] = 2] = "c";
    x[x["d"] = 3] = "d";
})(x || (x = {}));
var y = x.a;
console.log(y); //print 0
var z = x.c;
console.log(z); //print 2
var m;
(function (m) {
    m[m["a"] = 1] = "a";
    m[m["b"] = 2] = "b";
    m[m["c"] = 3] = "c";
})(m || (m = {}));
var e = m.a;
console.log(e);
var f = m.b;
console.log(f);
var n;
(function (n) {
    n["a"] = "Avi";
    n[n["b"] = void 0] = "b";
})(n || (n = {}));
var g = n.b;
console.log(g);
console.log(n);
var p;
(function (p) {
    p[p["a"] = 67] = "a";
    p[p["b"] = 98] = "b";
})(p || (p = {}));
var h = p.b;
console.log(h);
console.log(p);
