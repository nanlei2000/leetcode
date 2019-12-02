import { TreeNode } from "../sharedTypes";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * 
 * @return {number}
 * @see https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/comments/
 */
var maxDepth = function (root: TreeNode): number {
    return root === null ?
        0 :
        Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};