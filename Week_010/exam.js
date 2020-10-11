// 期末考试编程题 单词转换2
// 会超时就很烦
const findLadders = function (beginWord, endWord, wordList) {
    let output = [beginWord], result = 0, count = 0, marked = new Array(wordList.length).fill(false);
    const dfs = (s) => {
        if (result === 0 || (output.length < result)) {
            let queue = oneCharDiff(s);
            for (let i = 0; i < queue.length; i++) {
                const str = wordList[queue[i]];
                output.push(str);
                marked[queue[i]] = true;
                if (str === endWord) {
                    result = (result === 0 ? output.length : Math.min(result, output.length))
                    count++;
                    console.log(count, 'count is here');
                    // result.push([...output]);
                    output.pop()
                    marked[queue[i]] = false;
                    continue;
                }
                dfs(str);
                output.pop();
                marked[queue[i]] = false;
            }
        }
    };
    const oneCharDiff = (s) => {
        let queue = [];
        for (let i = 0; i < wordList.length; i++) {
            const str = wordList[i];
            let diffNum = 0;
            if (str.length !== s.length || marked[i]) continue;
            for (let j = 0; j < str.length; j++) {
                if (diffNum >= 2) break;
                if (str[j] !== s[j]) diffNum++;
            }
            if (diffNum === 1) {
                queue.push(i);
                // marked[i] = true;
            }
        }
        return queue;
    };
    dfs(beginWord);
    return result;
};
const beginWord = "hit", endWord = "cog", wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
const res = findLadders(beginWord, endWord, wordList);
console.log(res, 'res')