// leetcode 146 LRU缓存机制

/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {

// };

/**
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {

// };

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function(key, value) {

// };

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }
    get(key) {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        } else {
            return -1;
        }
    }
    put(key, value) {
        if(this.map.has(key)) this.map.delete(key);
        if (this.map.size === this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
        this.map.set(key, value)
    }
}