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

// 使用栈来循环
const invertTree1 = function(root) {
    if(root === null) return null;
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const current = stack.pop();
        const tem = current.left;
        current.left = current.right;
        current.right = tem;
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }
    return root
};