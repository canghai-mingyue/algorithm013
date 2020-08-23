// leetcode 33 搜索旋转排序数组

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法
 */
const search = function(nums, target) {
    if (!nums) return -1
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2);
        if (nums[left] === target) return left
        if (nums[right] === target) return right
        if (nums[mid] === target) return mid
        if (nums[mid] > nums[left]) {
            if (nums[mid] > target && nums[left] < target) right = mid - 1;
            else left = mid + 1;
        }
        else {
            if (nums[mid] < target && nums[right] >= target) left = mid + 1;
            else right = mid - 1;
        }
    }
    return nums[right] === target?right:-1
};