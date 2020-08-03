//leetcode 70  爬楼梯

/**
 * @param {number} n
 * @return {number}
 * 动态规划 滑动数组
 */
const climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(n === 3) return 3;
    else {
        let p = 1, q = 2, r = 3;
        for(i = 3; i < n; i++) {
            p = q;
            q = r;
            r = p + q;
        }
        return r;
    }
};
// 感觉这俩思路挺像的样子
// 尾递归
const climbStairs2 = function(n) {
    return helper(n, 1, 1)
};
const helper = function(n, a, b) {
    if (n <= 1) {
        return b
    }
    return helper(n-1, b, a+b)
}