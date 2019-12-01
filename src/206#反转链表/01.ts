import { ListNode } from "../sharedTypes";
import { arrayToListNode, listNodeToArray } from "../utils";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
 */
var reverseList = function (head: ListNode): ListNode {
    let prev: ListNode = null;
    let curr: ListNode = head;
    while (curr !== null) {
        // 下一个
        const nextTemp: ListNode = curr.next;
        // 
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev
};

const res = reverseList(arrayToListNode([1, 2, 3, 4]))
console.log("→: res", listNodeToArray(res))