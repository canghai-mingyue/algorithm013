// leetcode 200 岛屿数量

/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
const numIslands = function(grid) {
    if(grid === null || grid.length < 1) return 0;
    const length = grid.length;
    const width = grid[0].length;
    let result = 0;
    const dfs = (i, j) => {
        if(i < 0 || j < 0 || i >= length || j>= width || grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i - 1, j);
        dfs(i + 1, j);
    };
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < width; j++) {
            if(grid[i][j] === '1') {
                result++;
                dfs(i, j)
            }
        }
    }
    return result;
};
// BFS
const numIslands2 = function(grid) {
    if(grid === null || grid.length < 1) return 0;
    const length = grid.length;
    const width = grid[0].length;
    let result = 0;
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < width; j++) {
            if(grid[i][j] === '1') {
                result++;
                grid[i][j] = '0';
                let queue = [];
                queue.push(i * width + j);
                while(queue.length > 0) {
                    let tem = queue.pop();
                    let jj = tem % width;
                    let ii = (tem - jj) / width;
                    if(ii > 0 && grid[ii-1][jj] === '1') {
                        queue.push((ii-1) * width + jj);
                        grid[ii-1][jj] = '0'
                    }
                    if(ii < length - 1 && grid[ii+1][jj] === '1') {
                        queue.push((ii+1) * width + jj);
                        grid[ii+1][jj] = '0'
                    }
                    if(jj > 0 && grid[ii][jj-1] === '1') {
                        queue.push(ii * width + jj - 1);
                        grid[ii][jj-1] = '0'
                    }
                    if(jj < width - 1 && grid[ii][jj+1] === '1') {
                        queue.push(ii * width + jj + 1);
                        grid[ii][jj+1] = '0'
                    }
                }
            }
        }
    }
    return result;
};