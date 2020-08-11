//leetcode 144 二叉树的前序遍历

/**
 * Definition for a binary tree node.
 * */
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代法
 */
const preorderTraversal1 = function(root) {
    if (root == null) return [];
    let stack = [];
    let output = [];
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        output.push(node.val);
        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);
    }
    return output;
}

// 代码极简的递归法
const preorderTraversal2= function(root) {
    return root ? [root.val, ...preorderTraversal2(root.left), ...preorderTraversal2(root.right)] : []
};

// 递归法
const preorderTraversal3 = function(root) {
    let array = [];
    helper(root, array);
    return array;
};
const helper = function(root, array) {
    if (root == null) return null;
    array.push(root.val);
    helper(root.left, array);
    helper(root.right, array);
}