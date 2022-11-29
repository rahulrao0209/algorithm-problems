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
}

// Test cases
const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
const poppedNode = list.pop();
const shiftedNode = list.shift();

console.log("List: ", list);
console.log("Popped Node: ", poppedNode);
console.log("Shifted Node: ", shiftedNode);
