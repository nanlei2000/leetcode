/**
 * @see https://www.zhihu.com/question/36132386/answer/712269942
 */
function leftBound(nums: number[], target: number) {
    if (nums.length == 0) return -1;
    let left = 0;
    let right = nums.length; // 注意
    // [left, right)
    while (left < right) { // 注意
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    // target 比所有数都大
    // if (left == nums.length) return -1;
    // 类似之前算法的处理方式
    return nums[left] == target ? left : -1;
}
const res = leftBound([1, 2, 2, 4, 5], 6);
console.log("→: res", res)

