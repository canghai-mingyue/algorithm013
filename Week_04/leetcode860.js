// leetcode 860 柠檬水找零

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
    const length = bills.length;
    let five = 0, ten = 0;
    for (let i = 0; i < length; i++) {
        if(bills[i] === 5) five++;
        if(bills[i] === 10) {
            if(five < 1) return false;
            ten++;
            five--;
        }
        if(bills[i] === 20) {
            if(five < 1 || (five > 0 && five < 3 && ten < 1)) return false;
            // 此处是贪心的思想，优先找10块的
            if(ten > 0) {
                ten--;
                five--;
            } else {
                five-=3;
            }
        }
    }
    return true
};