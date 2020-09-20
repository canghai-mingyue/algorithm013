// leetcode 56 合并区间

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    const length = intervals.length;
    if(length < 2) return intervals;
    //先排序
    intervals.sort((a, b)=>a[0] - b[0]);
    let res = [intervals[0]];
    for(let i = 1; i < length; i++) {
        if(intervals[i][0] >res[res.length-1][1]) res.push(intervals[i]);
        else res[res.length-1][1] = Math.max(res[res.length-1][1], intervals[i][1]);
    }
    return res;
};