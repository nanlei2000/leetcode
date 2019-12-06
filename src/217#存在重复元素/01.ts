/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]): boolean {
    if (nums.length === 0) return false;
    const existMap: { [key: string]: boolean } = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (existMap[num]) {
            return true;
        } else {
            existMap[num] = true;
        }
    }
    return false;
};