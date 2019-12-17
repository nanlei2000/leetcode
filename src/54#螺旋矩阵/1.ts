/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix: number[][]): number[] {
    const rowNum = matrix.length;
    if (rowNum === 0) return [];
    const res = new Array(matrix.length * matrix[0].length);
    const colNum = matrix[0].length;
    const seen = [...new Array(rowNum)].map(() => new Array(colNum).fill(false));
    const rowDirections = [0, 1, 0, -1];
    const colDirections = [1, 0, -1, 0];

    let r = 0, c = 0, di = 0;
    for (let i = 0; i < rowNum * colNum; i++) {
        res[i] = matrix[r][c];
        seen[r][c] = true;
        const cr = r + rowDirections[di];  //计算当前方向的下一个位置
        const cc = c + colDirections[di];
        if (0 <= cr && cr < rowNum && 0 <= cc && cc < colNum && !seen[cr][cc]) {
            r = cr;
            c = cc;
        } else {
            di = (di + 1) % 4;
            r += rowDirections[di];
            c += colDirections[di];
        }
    }
    return res;
};