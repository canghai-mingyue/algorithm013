// leetcode 94 二叉树中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 极简的递归
 */
const inorderTraversal = function(root) {
    return root ? [ ...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};

// 辅助函数递归
const inorderTraversal1 = function(root) {
    const result = []
    helper(root, result)
    return result
};

const helper = function(root, result) {
    if (root == null) return ;
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
}

// 利用栈来迭代
const inorderTraversal2 = function(root) {
    let result = [];
    let stack = [] ;
    let cur = root;
    while(cur !== null || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop()
        result.push(cur.val);
        cur = cur.right
    }
    return result
};