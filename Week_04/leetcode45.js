// leetcode 45 跳跃游戏2

/**
 * @param {number[]} nums
 * @return {number}
 * 同样贪心
 */
const jump = function(nums) {
    let length = nums.length;
    let steps = 0;
    let end = 0;
    let max = 0;
    // 不需遍历最后一个元素，因为此时end一定大于等于length了
    for(let i = 0; i < length -1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === end) {
            steps++;
            end = max;
        }
    }
    return steps;
};