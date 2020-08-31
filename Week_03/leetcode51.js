// leetcode 51 N皇后

/**
 * @param {number} n
 * @return {string[][]}
 * DFS + 回溯
 * 重点还是在于发现规律呀，主副对角线的下标规律
 */
const solveNQueens = function(n) {
    if (n === 0) return [];
    let result = [];
    let usedCols = new Map();
    let usedMasters = new Map();
    let usedSlaves = new Map();
    // 用来存储当前的结果
    let stack = [];

    const dfs = (row) => {
        if(row === n) {
            let res = stackToResult();
            result.push(res);
            return;
        }
        for(let col = 0; col < n; col++) {
            if(!usedCols.get(col) && !usedMasters.get(row - col) && !usedSlaves.get(row + col)) {
                stack.push(col);
                usedCols.set(col, true);
                usedMasters.set((row - col), true);
                usedSlaves.set((row + col), true);
                dfs(row + 1);
                stack.pop();
                usedCols.set(col, false);
                usedMasters.set((row - col), false);
                usedSlaves.set((row + col), false);
            }
        }
    }
    // 将符合的结果转化为要求的输出格式
    const stackToResult = () => {
        let oneAnswer = [];
        let tem = new Array(n).fill('.');
        stack.forEach((val) => {
            tem[val] = 'Q';
            oneAnswer.push(tem.join(''));
            tem[val] = '.';
        })
        return oneAnswer;
    }
    dfs(0);
    return result;
};