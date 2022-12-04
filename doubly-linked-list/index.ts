/*
    Problem Statement:
    Implement a doubly linked list
*/

class ListNode {
  val: number | string;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Add a new node to the end of the list  */
  push(val: number | string) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  /* Removing a node from the end of the list */
  pop() {
    if (!this.head) return null;

    let removedNode: ListNode | null = null;
    if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = this.tail!.prev;

      removedNode = this.tail;
      removedNode!.prev = null;

      prevNode!.next = null;
      this.tail = prevNode;
    }

    this.length -= 1;
    return removedNode;
  }

  /* Remove a node from the beginning of the list */
  shift() {
    if (!this.head) return null;

    let removedNode: ListNode | null = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nextNode = removedNode.next;
      this.head = nextNode;
      nextNode!.prev = null;
      removedNode.next = null;
    }

    this.length -= 1;
    return removedNode;
  }

  /* Add a node to the beginning of the list */
  unshift(val: number | string) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  /* Get the node at a given position/index */
  get(index: number) {
    if (!this.head) return null;

    if (index < 0 || index >= this.length) return null;

    const startFromHead = index <= Math.floor(this.length / 2);
    let currentNode: ListNode | null;
    let counter: number;

    if (startFromHead) {
      currentNode = this.head;
      counter = 0;
      while (currentNode) {
        if (counter === index) return currentNode;
        currentNode = currentNode.next;
        counter += 1;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (currentNode) {
        if (counter === index) return currentNode;
        currentNode = currentNode.prev;
        counter -= 1;
      }
    }

    return null;
  }

  /* Set the value of a node to a given value */
  set(index: number, val: number | string) {
    const listNode = this.get(index);
    if (!listNode) return false;

    listNode.val = val;
    return true;
  }

  /* Insert a new node in the list */
  insert(index: number, val: number | string) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val) && true;
    if (index === this.length) return this.push(val) && true;

    const newNode = new ListNode(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;

    prevNode!.next = newNode;
    newNode.prev = prevNode;

    newNode.next = nextNode;
    nextNode!.prev = newNode;
    this.length += 1;

    return true;
  }

  /* Remove a node from the list */
  remove(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode!.prev;
    const nextNode = removedNode!.next;

    removedNode!.next = null;
    removedNode!.prev = null;

    prevNode!.next = nextNode;
    nextNode!.prev = prevNode;
    this.length -= 1;
    return removedNode;
  }

  print() {
    let currentNode = this.head;
    let list = "";
    while (currentNode) {
      list += `${currentNode.val} -> `;
      currentNode = currentNode.next;
    }
    return list + " null";
  }
}

// Test cases
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
// console.log(list.push(5));
// console.log(list.pop());
// console.log(list.print());
// console.log(list.shift());
// console.log(list.print());
// console.log(list);
// console.log(list.unshift(111));
// console.log(list.set(4, 1000));
// console.log(list.insert(10, "Hey"));
// console.log(list.remove(9));
console.log(list.print());
// console.log("get: ", list.get(0));
// console.log("get: ", list.get(1));
// console.log("get: ", list.get(2));
// console.log("get: ", list.get(3));
// console.log("get: ", list.get(4));
// console.log("get: ", list.get(5));
// console.log("get: ", list.get(6));
// console.log("get: ", list.get(7));
// console.log("get: ", list.get(8));
// console.log("get: ", list.get(9));
