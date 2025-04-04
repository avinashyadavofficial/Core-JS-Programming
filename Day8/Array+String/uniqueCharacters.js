const isUnique = str => new Set(str).size === str.length;

console.log(isUnique("abcdef")); // true
console.log(isUnique("aabbcc")); // false
