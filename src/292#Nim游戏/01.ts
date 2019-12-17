/**
 * @param {number} n
 * @return {boolean}
 * @see https://leetcode-cn.com/problems/nim-game/solution/nimyou-xi-by-leetcode/
 */

var canWinNim = function (n: number): boolean {
    return n % 4 !== 0;
};