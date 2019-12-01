export type ListNode<V = any> = null | {
    val: V,
    next: ListNode<V> | null
}