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


/** 快慢指针法 */
var hasCycle = function (head: ListNode): boolean {
    if (head === null || head.next === null) {
        return false;
    }
    let slowHead = head;
    let fastHead = head.next;
    while (slowHead !== fastHead) {
        if (fastHead === null || fastHead.next === null) {
            return false;
        }
        slowHead = slowHead.next!;
        fastHead = fastHead.next.next!;
    }
    return true;
};