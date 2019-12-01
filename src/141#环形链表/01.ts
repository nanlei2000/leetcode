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


/** 哈希法 */
var hasCycle = function (head: ListNode): boolean {
    const cache: Set<ListNode> = new Set();
    while (head !== null) {
        if (cache.has(head)) {
            return true;
        }
        cache.add(head);
        head = head.next;
    }
    return false;
};