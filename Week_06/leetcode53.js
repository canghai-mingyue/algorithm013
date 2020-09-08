// leetcode 53 最大子序和

// f(i) = Math.max(f(i-1), 0) + nums[i];
const maxSubArray = function(nums) {
    let tem = 0, max = nums[0];
    nums.forEach(num => {
        tem = Math.max(tem, 0) + num;
        max = Math.max(max, tem);
    });
    return max;
};