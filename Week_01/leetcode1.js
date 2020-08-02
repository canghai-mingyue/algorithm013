// leetcode 1 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()
    const result = []
    nums.forEach((value, index) => {
        if(map.has(target - value)) {
            result.push(map.get(target - value))
            result.push(index)
            return result
        } else {
            map.set(value, index)
        }
    })
    return result
};