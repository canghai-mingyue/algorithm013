// 剑指offer 40 最下的k个数

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 暴力排序法
 */
const getLeastNumbers = function(arr, k) {
    arr.sort((a, b) => a - b )
    return arr.slice(0, k)
};