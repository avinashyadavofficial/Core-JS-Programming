class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function sol(head,k){
    //to find the length of the ll
    let n=0;
    let temp=head;
    while(temp!=null){
        n=n+1;
        temp=temp.next;
    }
    if(k>n) return -1;
    let a=n-k;
    let temp1=head;
    while(a>0){
        temp1=temp1.next;
        a=a-1;
    }
    return temp1.data;



}

function main(){
    const head=new Node(10);
    head.next=new Node(12);
    head.next.next=new Node(13);
    head.next.next.next=new Node(20);
    head.next.next.next.next=new Node(30);
    
    let temp=sol(head,3);
    console.log(temp);
    
}
main();
