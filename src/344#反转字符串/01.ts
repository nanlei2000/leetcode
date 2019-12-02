/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s: string[]): void {
    if (s.length === 0) {
        return;
    }
    for (let i = 0; i < s.length / 2; i++) {
        const temp = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp;
    }
};

const test = ['a', 'b', 'c', 'd'];
reverseString(test);
console.log("→: reverseString(['a','b','c'])", test)