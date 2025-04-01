//Property Getters and Setters
var stud={
    name:"Avi",
    age:1,

    set fage(val){
        this.age=val;
    },
    get fage(){
        return this.age;
    }
};
stud.fage=21;
console.log(stud.fage);
console.log(stud.age);

//Object.defineProperty()
const person={
    name:"Avi",
    lang:"No",
};
Object.defineProperty(person,"lang",{
    value:"eng",
    writable:true,
    enumerable:true,
    configurable:true

});

let ans="";
for(let x in person){
    ans+=person[x];
}
console.log(ans);

Object.defineProperty(person, "lang", {
    get : function() { return lang },
    set : function(value) { lang= value.toUpperCase()}
});
person.lang="en";
console.log(person.lang);

//Object.create
const person1={
    name:"Avi",
    age:21
}
const a=Object.create(person1);
console.log(a);
a.name="Rahul";
console.log(a);
a.age=222;
console.log(a);

//Object.keys
const key=Object.keys(person1);
console.log(key);

//freeze
Object.freeze(person);

//isFrozen
console.log(Object.isFrozen(person));

//  Bind() -- an object can borrow a method from another object.
const stud2={
    fname:"Avi",
    lname:"Yadav",
    fullname: function(){
        return this.fname+" "+this.lname;
    }
};
const stud1={
    fname:"rahul",
    lname:"Yadav",
};

let fullname=stud2.fullname.bind(stud1);
console.log(fullname);



