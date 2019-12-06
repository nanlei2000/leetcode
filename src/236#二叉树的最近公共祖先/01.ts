import { TreeNode, ListNode } from "../sharedTypes";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @see https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */
var lowestCommonAncestor = function (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    function traverse(root: TreeNode, cb: Function): void {
        if (root === null) {
            cb(root);
            return
        }
        if (root.left !== null) {
            traverse(root.left, cb);
        }
        if (root.right !== null) {
            traverse(root.right, cb);
        }
    }

};