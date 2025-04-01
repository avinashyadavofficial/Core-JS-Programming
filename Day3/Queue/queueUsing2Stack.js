class Queue{
    constructor(){
        this.s1=[];
        this.s2=[];
    }
    enqueue(ele){
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(ele);
        while (this.s2.length) {
            this.s1.push(this.s2.pop());
        }
    }
    dequeue(){
        if(this.s1.length==0){
            console.log("No element");
        }
        else{
            return this.s1.pop();
        }
    }
    

}
let a=new Queue();
a.enqueue(6);
a.enqueue(10);
a.enqueue(17);
a.dequeue();
console.log(a);