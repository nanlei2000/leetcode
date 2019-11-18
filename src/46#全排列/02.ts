/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[][] {
    let len = nums.length
    if (len === 0) return [];

    let used: boolean[] = [];
    used.length = len;
    used.fill(false);

    let res: number[][] = [];
    dfs(nums, 0, [], used, res);
    return res;

    function dfs(nums: number[], index: number, pre: number[], used: boolean[], res: number[][]): void {
        if (index === len) {
            res.push(pre.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (!used[i]) {
                used[i] = true
                pre.push(nums[i])
                dfs(nums, index + 1, pre, used, res)
                used[i] = false
                pre.pop()
            }
        }

    }
};