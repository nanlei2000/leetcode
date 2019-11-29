export type ListNode<V = number> = null | {
    val: V,
    next: ListNode<V> | null
}