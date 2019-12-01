import { ListNode } from "./sharedTypes";

export const arrayToListNode = <T>(arr: T[]): ListNode<T> => {
    if (arr.length === 0) {
        return null;
    }
    let node: ListNode = null;
    for (const ele of arr.reverse()) {
        const newNode = {} as ListNode;
        newNode!.next = node;
        newNode!.val = ele;
        node = newNode;
    }
    return node;
}
export const listNodeToArray = <T>(head: ListNode<T>): T[] => {
    const arr: T[] = []
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}