// leetcode 26 删除排序数组中的重复项

/**
 * @param {number[]} nums
 * @return {number}
 */

// 优解
const removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j]
            // nums[i+1] = nums[j]
            // i++
        }
    }
    return i + 1
}

// 个人第一思路
const myRemoveDuplicates = function(nums) {
   let tem = 0;
   for(let i = 0; i < nums.length; i++) {
       if (i === 0) {
            if (nums[i] === nums[i+1]) tem = i;   
       } else {
           if (nums[i] === nums[i+1] && nums[i] !== nums[i-1]) tem = i;
       }
       if(nums[i] !== nums[i+1] && nums[i] === nums[i-1]) {
           nums.splice(tem+1, i-tem);
           i = tem;
       } 
   }
   return nums.length;
}