class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function sol(head){
    if(head==null || head.next== null) return null;
    let slow=head;
    let fast=head;
    
    while(fast!=null && fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
        if(slow==fast){
          return true;
        }
    }
    return false;

}

function main(){
    let head = new Node(1);
    head.next = new Node(3);
    head.next.next = new Node(4);
    //loop
    head.next.next.next = head.next;
    console.log(sol(head));
    
}
main();