// leetcode 239 滑动窗口最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 暴力求解 O(nk)  会超时
 */
const maxSlidingWindow = function(nums, k) {
    const result = [];
    const length = nums.length;
    if (length * k === 0) return result;
    for(let i = 0; i < length - k +1; i++) {
        result.push(Math.max(...nums.slice(i, i + k)))
    }
    return result;
};

// 所谓的双端队列
const maxSlidingWindow1 = function(nums, k) {
    if (k === 1) return nums;
    const length = nums.length;
    if (length * k === 0) return [];
    const result = [], queue = [];
    //公用方法提出，维护队列头部为最大值的索引
    const help = (i) => {
        while(queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) queue.pop();
        queue.push(i);
    }
    // 初始化
    for(let i = 0; i < k; i++) {
        help(i);
        // while(queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) queue.pop();
        // queue.push(i);
    }
    result.push(nums[queue[0]]);
    for (let i = k; i < length; i++) {
        // 维护队列只存储当前窗口
        if(i - queue[0] === k) queue.shift();
        help(i);
        // while(queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) queue.pop();
        // queue.push(i);
        result.push(nums[queue[0]]);
    }
    return result;
};

// 天秀的动态规划 O(n)
const maxSlidingWindow2 = function(nums, k) {
    if (k === 1) return nums;
    const length = nums.length;
    if (length * k === 0) return [];
    const result = [];
    const left = [], right = [];
    for(let i = 0; i < length; i++) {
        // left[i]为块开始到left[i]的最大值
        if (i % k === 0) left[i] = nums[i];
        else left[i] = Math.max(left[i - 1], nums[i]);

        // right[j]为块结束到right[j]的最大值
        const j = length - i - 1;
        if ((j + 1) % k === 0) right[j] = nums[j];
        else right[j] = Math.max(right[j + 1], nums[j]);
    }
    // i, j窗口的最大值即为Max(left[j], right[i])
    for(let i = 0; i < length - k + 1; i++) {
        result.push(Math.max(left[i + k - 1], right[i]))
    }
    return result;
};