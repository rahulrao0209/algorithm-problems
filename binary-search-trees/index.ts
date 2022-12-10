/*
    Problem Statement:
    Implement a binary search tree.
*/

class BSTNode {
  val: number | string;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  /* Insert a node in the BST */
  insert(val: number | string) {
    const newNode = new BSTNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const insertHelper = (val: number | string, node: BSTNode): BST => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        insertHelper(val, node.left);
      }

      if (val >= node.val) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        insertHelper(val, node.right);
      }
      return this;
    };

    return insertHelper(val, this.root);
  }

  /* Find if a node exists in the BST */
  find(val: number | string) {
    if (!this.root) return false;

    if (this.root.val === val) return true;

    const findHelper = (val: number | string, node: BSTNode): boolean => {
      if (val < node.val) {
        if (!node.left) return false;
        return findHelper(val, node.left);
      }

      if (val > node.val) {
        if (!node.right) return false;
        return findHelper(val, node.right);
      }

      return true;
    };
    return findHelper(val, this.root);
  }

  /* Visit all nodes in the tree using the breadth first search approach */
  bfs() {
    if (!this.root) return [];

    const queue = [this.root];
    const visitedNodes: unknown[] = [];
    let node: BSTNode | undefined;

    const bfsHelper = (
      queue: BSTNode[],
      visitedNodes: unknown[]
    ): unknown[] => {
      if (queue.length === 0) return visitedNodes;

      node = queue.shift();
      if (node) visitedNodes.push(node.val);

      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);

      return bfsHelper(queue, visitedNodes);
    };

    return bfsHelper(queue, visitedNodes);
  }

  dfsPreorder() {
    if (!this.root) return [];

    const visitedNodes: unknown[] = [];

    const dfsHelper = (node: BSTNode): unknown[] => {
      visitedNodes.push(node.val);

      if (node.left) dfsHelper(node.left);
      if (node.right) dfsHelper(node.right);

      return visitedNodes;
    };

    return dfsHelper(this.root);
  }

  dfsPostOrder() {
    if (!this.root) return [];

    const visitedNodes: unknown[] = [];

    const dfsHelper = (node: BSTNode): unknown[] => {
      if (node.left) dfsHelper(node.left);
      if (node.right) dfsHelper(node.right);
      visitedNodes.push(node.val);
      return visitedNodes;
    };

    return dfsHelper(this.root);
  }

  dfsInOrder() {
    if (!this.root) return [];

    const visitedNodes: unknown[] = [];

    const dfsHelper = (node: BSTNode) => {
      if (node.left) dfsHelper(node.left);
      visitedNodes.push(node.val);
      if (node.right) dfsHelper(node.right);
      return visitedNodes;
    };
    return dfsHelper(this.root);
  }
}

// Test cases
const tree = new BST();

// console.log(tree.insert(10));
// console.log(tree.insert(13));
// console.log(tree.insert(5));
// console.log(tree.insert(4));
// console.log(tree.insert(16));
// console.log(tree.insert(20));

// console.log(tree.find(5));
// console.log(tree.find(16));
// console.log(tree.find(13));
// console.log(tree.find(11));

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree.bfs());
console.log(tree.dfsPreorder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
