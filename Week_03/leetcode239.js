// leetcode 239 滑动窗口最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 暴力求解  会超时
 */
const maxSlidingWindow = function(nums, k) {
    const result = [];
    const length = nums.length;
    if (length * k === 0) return result;
    for(let i = 0; i < length - k +1; i++) {
        result.push(Math.max(...nums.slice(i, i + k)))
    }
    return result;
};
// 天秀的动态规划
const maxSlidingWindow2 = function(nums, k) {
    const result = [];
    const length = nums.length;
    if (k === 1) return nums;
    if (length * k === 0) return result;
    const left = [], right = [];
    for(let i = 0; i < length; i++) {
        // left[i]为块开始到left[i]的最大值
        if (i % k === 0) left[i] = nums[i];
        else left[i] = Math.max(left[i - 1], nums[i]);

        // right[]j为块结束到right[j]的最大值
        const j = length - i - 1;
        if ((j + 1) % k === 0) right[j] = nums[j];
        else right[j] = Math.max(right[j + 1], nums[j]);
    }
    for(let i = 0; i < length - k + 1; i++) {
        result.push(Math.max(left[i + k - 1], right[i]))
    }
    return result;
};