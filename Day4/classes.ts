class Stud{
    name:string;
}
const s=new Stud();
s.name="Avinash";
console.log(s.name);
console.log(s);

// class Person {
//     private name: string;
  
//     public constructor(name: string) {
//       this.name = name;
//     }
  
//     public getName(): string {
//       return this.name;
//     }
// }
        
// const per= new Person("Avinash");
// console.log(per.getName());
// console.log(per.name); //not accessible bcz of private


class A{
    public constructor(private name: string){}
    public getName():string{
        return this.name;
    }
}
const a=new A("Avinash");
console.log(a.getName());  //print Avinash

class B{
    private readonly name: string;
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
}
const per=new B("Avi");
console.log(per.getName());

