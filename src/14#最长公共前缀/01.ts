/**
 * @param {string[]} strs
 * @return {string}
 * @see https://leetcode-cn.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strs: string[]): string {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let prefix = '';
    strs.sort((a, b) => a.length - b.length);
    const minLengthStr = strs[0];
    const minLength = minLengthStr.length;
    const restStrs = strs.slice(1);
    for (let i = 0; i < minLength; i++) {
        if (restStrs.every(v => v.charAt(i) === minLengthStr.charAt(i))) {
            prefix += minLengthStr.charAt(i)
        } else {
            break;
        }
    }
    return prefix;
};

const strList = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strList));
