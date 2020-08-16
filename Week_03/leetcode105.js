// leetcode 105 从前序与中序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 递归
 */
const buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    const root = new TreeNode(preorder[0]);
    const index = inorder.findIndex(item => item === root.val);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index+1));
    return root;
};