class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function sol(head) {
    let isCycle = false;
    let slow = head;
    let fast = head;

    
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            isCycle = true;
            break;
        }
    }

    if (isCycle) {
        
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }

        let cycleStart = slow;
        while (fast.next != cycleStart) {
            fast = fast.next;
        }

        
        fast.next = null;
    }

    return head;
}

function print(node) {
    while (node != null) {
        console.log(" " + node.data);
        node = node.next;
    }
    console.log();
}

function main() {
    let head = new Node(1);
    head.next = new Node(3);
    head.next.next = new Node(4);
   
    head.next.next.next = head.next;
    let temp = sol(head); 
    print(temp);  
}
main();
