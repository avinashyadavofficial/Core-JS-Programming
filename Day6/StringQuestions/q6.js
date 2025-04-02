let a= "I love coding";
console.log(a.startsWith("I love"));

//way2
console.log(a.indexOf("I love")===0);

//way3
console.log(/^I love/.test(a));
