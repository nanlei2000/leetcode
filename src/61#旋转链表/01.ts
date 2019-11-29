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
 * @param {number} k
 * @return {ListNode}
 * @see https://leetcode-cn.com/problems/rotate-list/solution/xuan-zhuan-lian-biao-by-leetcode/
 */


/**
 * 
新的链表头在哪里？
在位置 n-k 处，其中 n 是链表中点的个数，新的链表尾就在头的前面，位于位置 n-k-1。
 */
var rotateRight = function (head: ListNode, k: number): ListNode {
    if (head === null) {
        return head;
    }
    if (head.next === null) {
        return head;
    }
    // 将链表变成环
    let oldTail = head;
    /** 节点的个数 */
    let n = 1;
    for (n = 1; oldTail.next !== null; n++) {
        oldTail = oldTail.next;
    }
    oldTail.next = head;
    // 找到新的尾巴 : (n - k % n - 1)th node
    // 找到新的头 : (n - k % n)th node
    let newTail = head;
    for (let i = 0; i < n - k % n - 1; i++) {
        newTail = newTail.next!
    }
    const newHead = newTail.next;
    // 切开
    newTail.next = null;
    return newHead;
}