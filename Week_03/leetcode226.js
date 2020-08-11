// leetcode 226 翻转二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 *  递归法
 */
const invertTree = function(root) {
    if(root === null) return null;
    const tem1 = invertTree(root.right);
    const tem2 = invertTree(root.left);
    root.left = tem1;
    root.right = tem2;
    return root
};