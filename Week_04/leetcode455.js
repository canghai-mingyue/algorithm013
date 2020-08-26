// leetcode 455 分发饼干

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 贪心的思路 外加双指针
 */
const findContentChildren = function(g, s) {
    const sortFn = (a, b) => a - b;
    g.sort(sortFn);
    s.sort(sortFn);
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if(s[j++] >= g[i]) {
            i++;
        }
        // j++;
    }
    return i;
};