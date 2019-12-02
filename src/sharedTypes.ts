export type ListNode<V = any> = null | {
    val: V,
    next: ListNode<V> | null
}
/** 二叉树 */
export type TreeNode<T = any> = null | {
    val: T,
    left: TreeNode<T>,
    right: TreeNode<T>,
}