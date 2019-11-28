/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * @see https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/dong-hua-yan-shi-30-chuan-lian-suo-you-dan-ci-de-z/
 */
var findSubstring = function (s: string, words: string[]): number[] {
    const wordNum = words.length;
    const res: number[] = []
    if (!s || wordNum === 0) {
        return res;
    }
    const oneWordSize = words[0].length;
    const allWordSize = oneWordSize * words.length;
    const initCountMap = (obj: { [key: string]: number }) => {
        words.forEach(word => {
            if (obj[word]) {
                obj[word] += 1;
            } else {
                obj[word] = 1;
            }
        });
    }

    for (let i = 0; i < s.length - wordNum * oneWordSize + 1; i++) {
        const tmp = s.substring(i, i + allWordSize);
        const countMap: { [key: string]: number } = {};
        initCountMap(countMap);
        for (let j = 0; j < tmp.length; j += oneWordSize) {
            const word = tmp.substring(j, oneWordSize + j);
            if (Object.keys(countMap).includes(word)) {
                countMap[word] -= 1;
                if (countMap[word] === 0) {
                    Reflect.deleteProperty(countMap, word);
                }
            } else {
                break;
            }
        }
        if (Object.keys(countMap).length === 0) {
            res.push(i);
        }
    }
    return res;
};
const s = "wordgoodgoodgoodbestword";
const words =
    ["word", "good", "best", "good"];

console.log("→: findSubstring(s,words)", findSubstring(s, words))
findSubstring(s, words);