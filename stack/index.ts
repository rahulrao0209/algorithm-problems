/* 
    Problem Statement:
    Implement a stack data structure using a singly linked list.
    Note: That stacks can also be created using the built in JavaScript array data structure by using push/pop or unshift/shift
    If using an array to create a stack, using push/pop will be more efficient as it does not need to re-index the array items when using them.
*/

class StackNode {
  val: string | number;
  next: StackNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  first: StackNode | null;
  last: StackNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Add an item to the stack */
  push(val: number | string) {
    const newNode = new StackNode(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const prevNode = this.first;
      newNode.next = prevNode;
      this.first = newNode;
    }

    this.size += 1;
    return this.size;
  }

  /* Remove an item from the top of the stack (LIFO) */
  pop() {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = this.first;
    } else {
      const nextNode = removedNode.next;
      this.first = nextNode;
    }

    this.size -= 1;
    return removedNode.val;
  }

  /* Print all the values in the stack */
  print() {
    let str = "";

    if (!this.first) return str;

    let currentNode: StackNode | null = this.first;
    while (currentNode) {
      str += `${currentNode.val} `;
      currentNode = currentNode.next;
    }

    return str;
  }
}

/* Test Cases */
const stack = new Stack();

console.log(stack.push("Google"));
console.log(stack.push("Instagram"));
console.log(stack.push("Facebook"));
console.log(stack.push("Netlify"));

console.log(stack.print());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
