class ListNode {
    public data: number
    public next: ListNode | null
    public constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    public head: ListNode
    public append(data: number) {
        if (this.head === null) {
            this.head = new ListNode(data);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new ListNode(data);
    }
}