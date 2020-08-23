// leetcode 122 买卖股票的最佳时机 II

/**
 * @param {number[]} prices
 * @return {number}
 * 贪心算法代码是真的简洁
 */
const maxProfit = function(prices) {
    let result = 0;
    const length = prices.length - 1;
    for (let i = 0; i < length; i++) {
        if (prices[i] < prices[i+1]) {
            result += prices[i+1] - prices[i]
        }
    }
    return result;
};