/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1Copy = [...nums1];
    let p1 = 0;
    let p2 = 0;

    let p = 0;
    // 小于小标最小的，那么就是小于这个数组最小的
    while (p1 < m && p2 < n) {
        nums1[p++] = nums1Copy[p1] < nums2[p2] ? nums1Copy[p1++] : nums2[p2++];
    }
    while (p1 < m) {
        nums1[p++] = nums1Copy[p1++];
    }
    while (p2 < n) {
        nums1[p++] = nums2[p2++];
    }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const mums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, mums2, n);
console.log(nums1);
