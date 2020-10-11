// leetcode 面试题 17.22 单词转换

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
const findLadders = function(beginWord, endWord, wordList) {
    let output = [], result = [], marked = new Array(wordList.length).fill(false);
    const dfs = (s) => {
        output.push(s);
        let queue = oneCharDiff(s);
        for(let i = 0; i < queue.length; i++) {
            const str = queue[i];
            if(str === endWord) {
                output.push(str);
                result = [...output];
                return;
            }
            dfs(str);
            output.pop();
        }

    }
    const oneCharDiff = (s) => {
        let queue = [];
        for(let i = 0; i < wordList.length; i++) {
            const str = wordList[i];
            let diffNum = 0;
            if(str.length != s.length || marked[i]) continue;
            for(let j = 0; j < str.length; j++){
                if(diffNum >= 2) break;
                if(str[j] !== s[j]) diffNum++;
            }
            if(diffNum === 1) {
                queue.push(str);
                marked[i]=true;
            }
        }
        return queue;
    }
    dfs(beginWord);
    return result;
};
