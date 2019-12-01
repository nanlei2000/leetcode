import { ListNode } from "../sharedTypes";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


/** 置空法 */
var hasCycle = function (head: ListNode<any>): boolean {
    const None = {};
    while (head !== null) {
        if (head.val === None) {
            return true;
        }
        head.val = None;
        head = head.next
    }
    return false;
};