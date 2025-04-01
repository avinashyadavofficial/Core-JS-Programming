//Object is similar to HASHMAP in Java
const car={type:"SUV", model:"X5", color: "red"};
console.log(car);

const person={};
person.name="Avi";
person.branch="BTech";
person.course="CSE";
console.log(person);

const pers=new Object();
pers.firstName="Avi";
pers.lastName="Yadav";
pers.branch="BTech";
pers.course="CSE";
console.log(pers);
console.log(pers.name);
console.log(pers["name"]);

const n={
    name:"Avi",
    class:12,
    age:15    
}

const x=n;
x.age=17;
console.log(n.age);


myObj = {
    name:"Avi",
    age:21,
    myCars: {
      car1:"Ford",
      car2:"BMW",
    }
}
console.log(myObj.myCars.car1);
console.log(myObj["myCars"]["car2"]);

const per = {
    firstName: "Avi",
    lastName: "Yadav",
    id: 33,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(per.fullName());



