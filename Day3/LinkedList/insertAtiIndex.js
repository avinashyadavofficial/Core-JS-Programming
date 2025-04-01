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

function sol(head, x, i) {
    if (i < 0) {
        console.error("Wrong index");
        return head;
    }

    if (i === 0) {
        let newNode = new Node(x);
        newNode.next = head;
        return newNode;
    }

    let temp = head;
    let prev = null;
    let count = 0;

    while (temp != null && count < i) {
        prev = temp;
        temp = temp.next;
        count++;
    }

    if (count < i) {
        console.error("idx out of bound");
        return head;
    }

    let newNode = new Node(x);
    newNode.next = temp;
    prev.next = newNode;
    return head;
}

function main() {
    let head = new Node(10);
    head.next = new Node(12);
    head.next.next = new Node(13);
    head.next.next.next = new Node(20);
    head.next.next.next.next = new Node(30);
    head = sol(head, 70, 2);
    print(head);
}

main();