class Queue{
    constructor(){
        this.q=[];
    }
    enqueue(ele) {
        this.q.push(ele);
    }
    dequeue(ele){
        if(!this.isEmpty){
            this.q.shift();
        }
        else{
            console.log("Empty queue");
        }
    }
    getFront(){
        if(!this.isEmpty){
            return this.q[0];
        }
        else{
            console.log("Empty queue");
        }
    }
    print(){
        console.log(this.q);
    }
}
let qu=new Queue();
qu.enqueue(3);
qu.enqueue(7);
qu.enqueue(9);
qu.dequeue();
console.log(qu.getFront());
qu.print();