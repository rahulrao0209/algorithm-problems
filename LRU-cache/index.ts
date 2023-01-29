/*
    Problem statement: Implement a LRU cache using doubly linked list and maps.
*/

type CacheType = {
  [key: number]: ListNode;
};

class ListNode {
  key: number;
  val: number;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(key: number, val: number) {
    this.key = key;
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
    this.tail = this.head;
    this.length = 0;
  }

  /* Insert a node at the end of the list */
  push(node: ListNode) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;
    return this;
  }

  /* Remove a node from the end of the list */
  pop() {
    if (!this.head) return null;
    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevNode = removedNode?.prev || null;
      removedNode!.prev = null;
      removedNode!.next = null;
      this.tail = prevNode;
    }

    this.length -= 1;
    return removedNode;
  }

  /* Remove a node from the beginning of the list */
  shift() {
    if (!this.head) return null;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      let nextNode = removedNode.next;
      this.head = nextNode;
      nextNode!.prev = null;
      removedNode.next = null;
    }
    this.length -= 1;
    return removedNode;
  }

  /* Remove a given node */
  remove(node: ListNode) {
    const prevNode = node.prev;
    const nextNode = node.next;

    if (prevNode && nextNode) {
      [prevNode.next, nextNode.prev] = [nextNode, prevNode];
      this.length -= 1;
    } else if (!prevNode) {
      this.shift();
    } else if (!nextNode) {
      this.pop();
    }
  }

  print() {
    if (!this.head) return;
    let currentNode: ListNode | null = this.head;
    let res = "";
    while (currentNode) {
      res += currentNode.val + " -> ";
      currentNode = currentNode.next;
    }

    console.log(res);
  }
}

class LRUCache {
  #capacity: number;

  /* Use a hashmap to create a cache. The key is the key value and value is the ListNode */
  #cache = new Map();
  #doublyLinkedList = new DoublyLinkedList();

  constructor(capacity: number) {
    this.#capacity = capacity;
  }

  /* Remove the least recently used node from the list */
  #shift() {
    return this.#doublyLinkedList.shift();
  }

  /* Insert a node at the right(most recently used) */
  #insert(node: ListNode) {
    this.#doublyLinkedList.push(node);
  }

  #remove(node: ListNode) {
    this.#doublyLinkedList.remove(node);
  }

  get(key: number): number {
    const node: ListNode | undefined = this.#cache.get(key);
    if (node) {
      /*
        For getting a node from LRU first remove that node from and the list
        and then insert it at the end so that it becomes the most recently used node.
        Finally return the value.
      */
      this.#remove(node);
      this.#insert(node);
      return node.val;
    }
    return -1;
  }

  put(key: number, value: number) {
    /*
      For adding a node to the LRU, first search the cache to check if the node exists.
      If it does exist, remove it.
    */
    if (this.#cache.get(key)) {
      this.#remove(this.#cache.get(key));
      this.#cache.delete(key);
    }
    const newNode = new ListNode(key, value);
    this.#cache.set(key, newNode);
    this.#insert(newNode);

    /* If we exceed the capacity, remove the least recently used node */
    if (this.#cache.size > this.#capacity) {
      const removedNode = this.#shift();
      this.#cache.delete(removedNode?.key);
    }

    this.#doublyLinkedList.print();
    console.log(this.#cache);
  }

  get capacity() {
    return this.#capacity;
  }

  get cache() {
    return this.#cache;
  }
}

/* Test cases */
const lru = new LRUCache(3);
lru.put(1, 1);
lru.put(2, 2);
lru.put(3, 3);
lru.put(4, 4);
lru.put(5, 5);
lru.put(6, 6);
lru.put(7, 7);
console.log(lru.get(6));
console.log(lru.get(7));
console.log(lru.get(5));

console.log(new DoublyLinkedList().print());
