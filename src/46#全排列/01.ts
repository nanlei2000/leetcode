/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums: number[]): number[][] {
    if (nums.length === 0) {
        return [];
    }
    const res: number[][] = [];
    const loop = (list: number[], stack: number[]) => {
        if (stack.length === list.length) {
            res.push([...stack])
            return;
        }
        for (const num of list) {
            if (stack.includes(num)) {
                continue;
            }
            stack.push(num);
            loop(list, stack);
            stack.pop();
        }

    }
    loop(nums, []);
    return res;
};