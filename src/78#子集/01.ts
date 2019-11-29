/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums: number[]): number[][] {
    const res: number[][] = [];
    res.push([]);
    for (let i = 0; i < nums.length; i++) {
        const all = res.length;
        for (let j = 0; j < all; j++) {
            const tmp: number[] = [...res[j]]
            tmp.push(nums[i]);
            res.push(tmp);
        }
    }
    return res;
};

const nums = [1, 2, 3];
subsets(nums);