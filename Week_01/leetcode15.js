// leetcode 15 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 官方题解 排序 + 双指针
 */
const threeSum = function(nums) {
    const result = [];
    const length = nums.length;
    nums.sort((a, b) => a - b);
    for(let first = 0; first < length; first++) {
        if(first > 0 && nums[first] === nums[first - 1]) continue;
        let third = length - 1;
        let target = -nums[first];
        for(let second = first + 1; second < length; second++) {
            if(second > first +1 && nums[second] === nums[second - 1]) continue;
            while(second < third && nums[second] + nums[third] > target) {
                third--;
            }
            if(second === third) break;
            if(nums[second] + nums[third] === target) {
                result.push([nums[first], nums[second], nums[third]])
            }
        }
    }
    return result;
};
