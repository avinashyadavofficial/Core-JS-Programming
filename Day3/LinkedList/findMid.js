class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function sol(head){
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow.data;


}

function main(){
    const head=new Node(10);
    head.next=new Node(12);
    head.next.next=new Node(13);
    head.next.next.next=new Node(20);
    head.next.next.next.next=new Node(30);
    console.log(sol(head));
}
main();