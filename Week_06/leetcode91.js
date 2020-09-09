// leetcode 91 解码方法

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    const array = s.split('');
    if(array[0] === '0') return 0;
    let length = array.length;
    let res = [1];
    for(let i = 1; i < length; i++ ) {
        if(array[i] === '0' && array[i-1] === '0') return 0;
        if(array[i] === '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) > 26)) return 0;
        if(array[i] === '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) < 27)) res[i] = res[i-2] || 1;
        if(array[i] !== '0' && array[i-1] === '0') res[i] = res[i-1];
        if(array[i] !== '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) < 27)) res[i] = res[i-1] + (res[i-2] || 1);
        if(array[i] !== '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) > 26)) res[i] = res[i-1];
    }
    return res.pop();
};

// 空间复杂度优化
const numDecodings2 = function(s) {
    const array = s.split('');
    if(array[0] === '0') return 0;
    let length = array.length;
    let p = 0, q = 1, r = 1;
    for(let i = 1; i < length; i++ ) {
        p = q;
        q = r;
        if(array[i] === '0' && array[i-1] === '0') return 0;
        if(array[i] === '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) > 26)) return 0;
        if(array[i] === '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) < 27)) r = p || 1;
        if(array[i] !== '0' && array[i-1] === '0') r = q;
        if(array[i] !== '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) < 27)) r = q + (p || 1);
        if(array[i] !== '0' && array[i-1] !== '0' && (+(array[i-1]+array[i]) > 26)) r = q;
    }
    return r;
};
