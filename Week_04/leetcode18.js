// leetcode 18 四数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * 排序 + 双指针 比三数之和多一重循环
 */
const fourSum = function(nums, target) {
    const result = [];
    const length = nums.length;
    if (length < 4) return [];
    nums.sort((a, b) => a - b);

    for(let first = 0; first < length - 3; first++) {
        if(first > 0 && nums[first] === nums[first - 1]) continue;

        for(let second = first + 1; second < length - 2; second++) {
            if(second > first +1 && nums[second] === nums[second - 1]) continue;
            let forth = length - 1;
            let aim = target -(nums[first] + nums[second]);

            for(let third = second + 1; third < length - 1; third++) {
                if(third > second +1 && nums[third] === nums[third - 1]) continue;
                while(third < forth && nums[third] + nums[forth] > aim) {
                    forth--;
                }
                if(third === forth) break;
                if(nums[third] + nums[forth] === aim) {
                    result.push([nums[first], nums[second], nums[third], nums[forth]])
                }
            }
        }
    }
    return result;
};