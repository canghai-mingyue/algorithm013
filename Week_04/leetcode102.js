// leetcode 102 二叉树的层序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (root === null) return [];
    const result = [];
    const queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const level = [];
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const node = queue.shift();
            level.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        result.push(level)
    }
    return result;
};