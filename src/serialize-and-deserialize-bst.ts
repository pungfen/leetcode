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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const list: number[] = []

  const traverse = (root: TreeNode | null, list: number[]) => {
    if (!root) return
    traverse(root.left, list)
    traverse(root.right, list)
    list.push(root.val)
  }

  traverse(root, list)

  return list.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data.length) return null

  const arr: string[] = data.split(',')
  const stack: number[] = []

  for (const item of arr) stack.push(parseInt(item))

  const construct = (lower: number, upper: number, stack: number[]) => {
    if (!stack.length || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
      return null
    }

    const value = stack.pop()!
    const root = new TreeNode(value)
    root.right = construct(value, upper, stack)
    root.left = construct(lower, value, stack)
    return root
  }

  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let res = deserialize(serialize(new TreeNode(2, new TreeNode(1), new TreeNode(3))))

res
