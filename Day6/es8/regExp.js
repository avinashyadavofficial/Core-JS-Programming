//Unicode Property Escapes (\p{...})--matches characters based on Unicode properties
const a=/\p{Emoji}/u;
console.log(a.test('😂')); // true
console.log(a.test('A')); //false

//Positive Lookbehind (?<=): Match only if there's something specific before.
const b = /(?<=#)\w+/;
console.log("Hello #world".match(b)); // [ 'world', index: 7, input: 'Hello #world', groups: undefined ]
console.log("Hello world".match(b));  // null (no # before the word)

//Negative Lookbehind (?<!): Match only if a specific thing is NOT before.
const c=/(?<!#)\w+/
console.log("Avinash Yadav".match(c)); //[ 'Avinash', index: 0, input: 'Avinash Yadav', groups: undefined ]
console.log("#100".match(c)); //[ '00', index: 2, input: '#100', groups: undefined ]

//Named Capture Groups
const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = "2024-04-02".match(regex);
console.log(result.groups); // [Object: null prototype] { year: '2024', month: '04', day: '02' }

//  s (dotAll) Flag
const e = /hello.world/s;
console.log(e.test("hello\nworld")); // true





