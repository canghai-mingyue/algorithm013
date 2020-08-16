// leetcode 111 二叉树的最小深度

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 递归
 */
const minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    if (root.left === null || root.right === null) return minDepth(root.left) + minDepth(root.right) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

};