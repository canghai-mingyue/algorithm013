// leetcode 46 全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 * DFS+回溯
 */
const permute = function(nums) {
    const length = nums.length;
    if (length < 1) return [];
    const result = [];
    // 使用map判断是否已经使用提高效率
    const used = new Map();
    const dfs = (path) => {
        if(path.length === length) {
            // 此处不能直接推入path，同一个引用，需拷贝一份新的
            result.push([...path]);
            return;
        }
        for(const num of nums) {
            if (used.get(num)) continue;
            path.push(num);
            used.set(num, true);
            dfs(path);
            path.pop();
            used.set(num, false)
        }
    }
    dfs([])
    return result;
};