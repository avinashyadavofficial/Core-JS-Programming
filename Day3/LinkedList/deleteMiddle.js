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
    let prev=null;
    while(fast!=null && fast.next!=null){
        fast=fast.next.next;
        prev=slow;
        slow=slow.next;
    }
    prev.next=slow.next;
    return head;


}
function print(node){
    while(node!=null){
        console.log(" "+node.data);
        node=node.next;
    }
    console.log();
}
function main(){
    const head=new Node(10);
    head.next=new Node(12);
    head.next.next=new Node(13);
    head.next.next.next=new Node(20);
    head.next.next.next.next=new Node(30);
    print(head);
    let temp=sol(head);
    print(temp);
}
main();