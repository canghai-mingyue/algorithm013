// leetcode 55 跳跃游戏

/**
 * @param {number[]} nums
 * @return {boolean}
 * 贪心
 */
const canJump = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max >= i &&  i + nums[i] >= max) max = i + nums[i];
    }
    return max >= nums.length - 1;
};