// leetcode 283 移动零

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let j = 0
    nums.forEach((val, index) => {
        if (val !== 0) {
            nums[j] = val
            j++
        }
    })
    while (j <= nums.length - 1) {
        nums[j] = 0
        j++
    }
    return nums
};