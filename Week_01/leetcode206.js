// leetcode 206 反转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    // let prev = null;
    // let cur = head;
    let [prev, cur] = [null, head];
    while(cur !== null) {
        // const next = cur.next;
        // cur.next = prev;
        // prev = cur;
        // cur = next;
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev;
};