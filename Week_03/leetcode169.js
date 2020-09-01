// leetcode 169 多数元素

/**
 * @param {number[]} nums
 * @return {number}
 * map存储
 */
const majorityElement = function(nums) {
    let length = nums.length;
    let map = new Map();
    nums.forEach(val => {
        if(!map.get(val)) {
            map.set(val, 1)
        } else {
            map.set(val, map.get(val) + 1);
        }
    })
    let result;
    for (let key of map.keys()) {
        if(map.get(key) > length / 2) {
            result = key;
            break;
        }
    }
    return result;
};

// 代码简单粗暴的排序法
const majorityElement2 = function(nums) {
    nums.sort((a, b) => a- b);
    return nums[Math.floor(nums.length / 2)]
};

// 巧妙地摩尔投票法
const majorityElement3 = function(nums) {
    let tem = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === tem) count++;
        else {
            if(count === 1) tem = nums[i];
            else count--;
        }
    }
    return tem;
};
