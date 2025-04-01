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

function main() {
    const head=new Node(10);
    head.next=new Node(12);
    head.next.next=new Node(13);
    head.next.next.next=new Node(20);
    head.next.next.next.next=new Node(30);
    print(head);  
}
main();
