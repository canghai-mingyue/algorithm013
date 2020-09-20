// leetcode 208 实现Trie(前缀树)

// 函数式写法
/**
 * Initialize your data structure here.
 */
const TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};

const Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word) return false;
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        if(!node.next[word[i]]) {
            node.next[word[i]] = new TrieNode();
        }
        node = node.next[word[i]]
    }
    node.isEnd = true;
    return true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word) return false;
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        if(node.next[word[i]]) {
            node = node.next[word[i]];
        } else {
            return false;
        }
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix) return false;
    let node = this.root;
    for(let i = 0; i < prefix.length; i++) {
        if(node.next[prefix[i]]) {
            node = node.next[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 类写法
class TrieNode2 {
    constructor() {
        this.isEnd = false;
        this.next = {};
    }
}

class Trie2 {
    constructor(){
        this.root = new TrieNode();
    }
    insert(word) {
        if(!word) return false;
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(!node.next[word[i]]) {
                node.next[word[i]] = new TrieNode();
            }
            node = node.next[word[i]]
        }
        node.isEnd = true;
        return true;
    }
    search(word) {
        if(!word) return false;
        let node = this.root;
        for(let i = 0; i < word.length; i++) {
            if(node.next[word[i]]) {
                node = node.next[word[i]];
            } else {
                return false;
            }
        }
        return node.isEnd;
    }
    startsWith(prefix) {
        if(!prefix) return false;
        let node = this.root;
        for(let i = 0; i < prefix.length; i++) {
            if(node.next[prefix[i]]) {
                node = node.next[prefix[i]];
            } else {
                return false;
            }
        }
        return true;
    }
}

// 大佬的写法
class Trie3 {
    // 这个reduce方法用的也太巧妙了!!!
    insert(word) { [...word].reduce((parent, child) => parent[child] || (parent[child] = {}), this).isEnd = true }
    search(word, node = this) {
        // 此处的判断也是够精简的！
        for (const letter of word) if (!(node = node[letter])) return false;
        return !!node.isEnd;
    }
    startsWith(word, node = this) {
        for (const letter of word) if (!(node = node[letter])) return false;
        return true;
    }
}