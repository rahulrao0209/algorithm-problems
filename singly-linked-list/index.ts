/*
  Problem Statement:
  Implement a singly linked list
*/

class ListNode {
  val: number | string;
  next: ListNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Add an item/node to the end of the list */
  push(val: number | string) {
    const listNode = new ListNode(val);

    if (this.head === null) {
      this.head = listNode;
      this.tail = this.head;
    } else {
      this.tail!.next = listNode;
      this.tail = listNode;
    }

    this.length += 1;
    return this;
  }

  /* Remove an item from the end of the list */
  pop() {
    if (!this.head) return;

    let current = this.head;
    let prev: ListNode | null = null;

    while (current.next) {
      prev = current;
      current = current!.next;
    }

    prev!.next = null;
    this.tail = prev;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = this.head;
    }
    return current;
  }

  /* Remove an item/node from the beginning of the list */
  shift() {
    if (!this.head) return;
    const oldHead = this.head;

    if (this.length === 1) {
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return oldHead;
  }

  /* Add an item/node to the beginning of the list */
  unshift(val: number | string) {
    const listNode = new ListNode(val);

    if (!this.head) {
      this.head = listNode;
      this.tail = this.head;
    } else {
      listNode.next = this.head;
      this.head = listNode;
    }

    this.length += 1;
    return this;
  }

  /* Get an item/node at a specific index in the linked list */
  get(index: number) {
    if (!this.head) return;
    if (index < 0 || index >= this.length) return;

    let counter = 0;
    let currentNode: ListNode | null = this.head;
    while (counter !== index) {
      currentNode = currentNode!.next;
      counter += 1;
    }
    return currentNode;
  }

  /* Update an existing item/node value */
  set(val: number | string, index: number) {
    const listNode = this.get(index);
    if (!listNode) return false;
    listNode.val = val;
    return true;
  }

  /* Insert a new node/item into the list at the given index */
  insert(val: number | string, index: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.unshift(val) && true;
    }

    if (index === this.length) {
      return this.push(val) && true;
    }

    const newNode = new ListNode(val);
    const prevNode = this.get(index - 1);
    const oldNext = prevNode!.next;
    prevNode!.next = newNode;
    newNode.next = oldNext;
    this.length += 1;
    return true;
  }

  /* Remove a new node/item from the list */
  remove(index: number) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removedNode = prev?.next;
    prev!.next = removedNode?.next || null;
    this.length -= 1;
    return removedNode;
  }

  /* Reverse the list */
  reverse() {
    this.tail = this.head;
    let currentNode = this.head;
    let prevNode: ListNode | null = null;
    let nextNode: ListNode | null;

    while (currentNode?.next) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = currentNode;
    currentNode!.next = prevNode;
    return list;
  }

  /* Traverse and print the linked list */
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
const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
// const poppedNode = list.pop();
// const shiftedNode = list.shift();

// console.log("List: ", list);
// console.log("Popped Node: ", poppedNode);
// console.log("Shifted Node: ", shiftedNode);
// console.log("Unshift: ", list.unshift(21));
// console.log("get: ", list.get(3));
// console.log("set: ", list.set("Hello", 11));
// console.log("Updated list: ", list);
// console.log(list.insert("Hello", list.length));
// console.log(list.get(0));
// console.log("Updated list: ", list);
// console.log("Original list: ", list);
// console.log("Removed node: ", list.remove(3));
// console.log("Updated list: ", list);
console.log(list.print());
list.reverse();
console.log(list.print());
