// leetcode387 字符串中的第一个唯一字符

/**
 * @param {string} s
 * @return {number}
 * Hash + 遍历
 */
const firstUniqChar = function(s) {
    const map = new Map();
    for(let i of s) {
        if(!map.get(i)) map.set(i, 1);
        else map.set(i, map.get(i)+1);
    }
    for(let j = 0; j < s.length; j++) {
        if(map.get(s[j]) === 1) {
            return j;
        }
    }
    return -1;
};

// 通过indexOf以及lastIndexOf来判断
const firstUniqChar2 = function(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    }
    return -1;
};