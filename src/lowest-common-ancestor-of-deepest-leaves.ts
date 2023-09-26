// Definition for a binary tree node.
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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let _node: TreeNode | null = null
  let md = 0

  const dfs = (node: TreeNode | null, depth: number): number => {
    if (!node) {
      md = Math.max(md, depth)
      return depth
    }

    const ld = dfs(node.left, depth + 1)
    const rd = dfs(node.right, depth + 1)

    if (ld === rd && ld === md) _node = node

    return Math.max(ld, rd)
  }

  dfs(root, 0)

  return _node
}

const tree1 = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
)

const tree2 = new TreeNode(0, new TreeNode(1, new TreeNode(2)), new TreeNode(3))

let res = lcaDeepestLeaves(tree2)

res
