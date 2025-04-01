function ts(a, t) {
    let s = 0;
    let e = a.length - 1;
    while (s <= e) {
        let m1 = Math.floor(s + (e - s) / 3);
        let m2 = Math.floor(e - (e - s) / 3);
        
        if (t == a[m1]) {
            return m1;
        } else if (t == a[m2]) {
            return m2;
        } else if (t < a[m1]) {
            e = m1 - 1;
        } else if (t > a[m2]) {
            s = m2 + 1;
        } else {
            s = m1 + 1;
            e = m2 - 1;
        }
    }
    return -1;
}

let a = [1, 3, 4, 7, 18, 21];
let t = 7;
console.log(ts(a, t));  
