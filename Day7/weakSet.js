//creating WeakSet
let weakSet=new WeakSet();
let obj={name:"Avinash"};

weakSet.add(obj);
console.log(weakSet.has(obj));

//Tracking Active User : example
let activeUser=new WeakSet();
function login(user){
    activeUser.add(user);
}
function logout(user){
    activeUser.delete(user);
}
let user1={name:"avi"};
let user2={name:"rahul"};
login(user1);
login(user2);
console.log(activeUser.has(user1));
logout(user1);
console.log(activeUser.has(user1));
