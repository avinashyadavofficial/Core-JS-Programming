class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function print(node) {
    while (node != null) {
        console.log(" " + node.data);
        node = node.next;
    }
    
}
function sol(head,x){
    let newNode=new Node(x);
    if(head==null){
        return newNode;
    }
    let temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=newNode;
    return head;

}

function main() {
    let head=new Node(10);
    head.next=new Node(12);
    head.next.next=new Node(13);
    head.next.next.next=new Node(20);
    head.next.next.next.next=new Node(30);
    head=sol(head,70);
    print(head);  
}
main();
