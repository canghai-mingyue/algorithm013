// leetcode 153 寻找旋转排序数组中的最小值

/**
 * @param {number[]} nums
 * @return {number}
 * 和作业的思考题很像，同样是二分法
 */
const findMin = function(nums) {
    if (!nums) return -1;
    let left = 0;
    let right = nums.length - 1;
    let mid = left + parseInt((right - left) / 2);
    // 此处增加一个判断，若旋转后仍为升序数组，直接输出nums[0]
    if(nums[left] <= nums[mid] && nums[mid] <= nums[right]) return nums[left];
    while(left < right - 1) {
        mid = left + parseInt((right - left) / 2);
        if(nums[mid] > nums[left]) left = mid;
        else right = mid;
    }
    return Math.min(nums[left], nums[right])
};