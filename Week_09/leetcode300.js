//leetcode 300 最长上升子序列

/**
 * @param {number[]} nums
 * @return {number}
 * 动态规划
 */
const lengthOfLIS = function(nums) {
    if (nums.length < 2) return nums.length;
    const dp = new Array(nums.length);
    dp[0] = 1;
    let maxans = 1;
    for (let i = 1; i < dp.length; i++) {
        let maxval = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) maxval = Math.max(maxval, dp[j]);
        }
        dp[i] = maxval + 1;
        maxans = Math.max(maxans, dp[i]);
    }
    return maxans;
};