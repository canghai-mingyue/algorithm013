// leetcode 169 多数元素

/**
 * @param {number[]} nums
 * @return {number}
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