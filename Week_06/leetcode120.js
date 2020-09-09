// leetcode 120 三角形最小路径和

/**
 * @param {number[][]} triangle
 * @return {number}
 * 空间复杂度O(2n)
 */
const minimumTotal = function(triangle) {
    let length = triangle.length;
    if (length < 2) return triangle[0][0];
    //初始化状态变量
    let pre = triangle[0], cur = triangle[1].map(v => +v + +triangle[0]);
    for (let i = 2; i < length; i++) {
        // 此处必须重新指定一个对象，否则后续赋值会出错
        pre = [...cur];
        // 计算cur的新值
        cur[0] = pre[0] + triangle[i][0];
        for (let j = 1; j < i; j++) {
            cur[j] = Math.min(pre[j], pre[j-1]) + triangle[i][j];
        }
        cur[i] = pre[i-1] + triangle[i][i];
    }
    return Math.min(...cur);
};

// 空间复杂度优化 O(n)
const minimumTotal2 = function(triangle) {
    let length = triangle.length;
    if (length < 2) return triangle[0][0];
    let cur = triangle[0];
    for (let i = 1; i < length; i++) {
        // 此处必须从后往前遍历，由于f(i)需要使用到f(i-1),从前往后会出错。
        cur[i] = cur[i-1] + triangle[i][i];
        for (let j = i -1 ; j > 0; j--) {
            cur[j] = Math.min(cur[j], cur[j-1]) + triangle[i][j];
        }
        cur[0] = cur[0] + triangle[i][0];
    }
    return Math.min(...cur);
};

/*
** j <= i
**f(i,j) = Math.min(f(i-1, j), f(i-1, j+1)) + triangle(i, j)
*/