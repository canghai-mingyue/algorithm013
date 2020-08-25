学习笔记
1、学习总结
    本周主要学习了深度优先搜索DFS、广度优先搜索BFS、贪心算法以及二分查找的思想，DFS以及BFS是非常常用的搜索思想，在树和图的
遍历中经常使用。而贪心算法虽然适用面不是很广，但是能用贪心算法解决的问题一般贪心算法都是最简洁的方法，贪心算法的难点在于数学
证明上，在思想上证明可以使用贪心的思想得到最优解，在代码上是非常简洁的。二分查找也是很常用的思想，思想上很简洁，但是在代码实现
上却很容易出错，因此重点和DFS以及BFS一样，主要是熟悉实现代码，要对代码模板非常熟悉。还是多刷题。
2、使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方
    二分查找，查找非有序的半边，测试代码如下(本目录下的leetcode33中):
    
    二分法查找半有序数组无序的地方
    const look = function (nums) {
        if (!nums) return -1;
        let left = 0;
        let right = nums.length - 1;
        while(left < right - 1) {
            let mid = left + parseInt((right - left) / 2);
            if(nums[mid] > nums[left]) left = mid;
            else right = mid;
        }
        if (nums[right] > nums[left]) return { index: left, val: nums[left] };
        else return { index: right, val: nums[right]};
        // return Math.min(nums[right], nums[left])
    }
    
    const nums = [4, 5, 6, 7, 0, 1, 2];
    console.log('this is return', look(nums))
 