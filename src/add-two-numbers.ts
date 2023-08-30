// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2
  else if (!l2) return l1

  let sum = l1.val + l2.val

  if (sum > 9) {
    return new ListNode(sum - 10, addTwoNumbers(new ListNode(1, null), addTwoNumbers(l1.next, l2.next)))
  } else {
    return new ListNode(sum, addTwoNumbers(l1.next, l2.next))
  }
}

let res = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))))

res
