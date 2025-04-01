class Stack{
    constructor(){
        this.s=[];    
    }
    push(a){
        this.s.push(a);
    }
    pop(){
        if(this.isEmpty()){
            console.log("No element is stack");
        }
        else{
            this.s.pop();
        }        
    }
    isEmpty(){
        if(this.s.length==0){
            return true;
        }
        else{
            return false;
        }
    }
    size(){
        return this.s.length;
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty");
        }
        return this.s[this.s.length-1];
    }
    print(){
       console.log(this.s);
    }
}
let st=new Stack();
st.push(2);
st.push(5);
st.push(8);
st.push(9);
st.pop();
console.log(st.peek());
st.pop();
st.print();
