class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 *
 * @param root
 * @returns
 * @see https://leetcode.cn/problems/count-good-nodes-in-binary-tree/
 */

function goodNodes(root: TreeNode | null): number {
  let count = 0

  let quene = [root]

  while (quene.length) {
    let tmp = quene.shift()
    if (tmp?.left) {
      if (tmp.left.val >= tmp.val) count++
      else tmp.left.val = tmp.val
      quene.push(tmp.left)
    }
    if (tmp?.right) {
      if (tmp.right.val >= tmp.val) count++
      else tmp.right.val = tmp.val
      quene.push(tmp.right)
    }
  }

  return count
}

goodNodes(new TreeNode(3, new TreeNode(1, new TreeNode(3)), new TreeNode(4, new TreeNode(1), new TreeNode(5))))
