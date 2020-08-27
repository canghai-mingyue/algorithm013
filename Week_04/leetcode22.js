// leetcode 22 括号生成

/**
 * @param {number} n
 * @return {string[]}
 * DFS
 */
const generateParenthesis = function(n) {
    let res = [];
    if (n === 0) return res;
    const dfs = (res, left, right, path) => {
        if(left === 0 && right === 0) {
            res.push(path);
            return;
        }
        // 剪枝
        if(left > right) return;
        if(left > 0) {
            dfs(res, left - 1, right, path + '(');
        }
        if(right > 0) {
            dfs(res, left, right - 1, path + ')');
        }
    };
    dfs(res, n, n, '');
    return res;
};