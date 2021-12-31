class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  insertToTail(data) {
    const node = new Node(data);
    let curr = this.head;

    if (!curr) {
      this.head = node;
    } else {
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.length++;
    return node;
  }

  insert(position, data) {
    let curr = this.head;
    let count = 0;
    let before = null;
    let insertNode = new Node(data);

    if (position === 0) {
      if (!this.head) {
        this.head = insertNode;
      } else {
        before = this.head;
        this.head = insertNode;
        this.head.next = before;
      }
    } else {
      while (count < position && curr.next) {
        before = curr;
        curr = curr.next;
        count++;
      }
      curr = insertNode;
      curr.next = before.next;
      before.next = curr;
    }

    this.length++;
    return insertNode.data;
  }

  search(position) {
    let curr = this.head;
    let count = 0;

    while (count < position && curr.next) {
      curr = curr.next;
      count++;
    }

    return curr.data;
  }

  remove(position) {
    let curr = this.head;
    let count = 0;
    let deleted = null;
    let before = null;

    if (position === 0) {
      this.head = this.head.next;
      deleted = curr;
    } else {
      while (count < position && curr.next) {
        before = curr;
        curr = curr.next;
        count++;
      }

      deleted = curr;
      before.next = deleted.next;
    }

    this.length--;
    return deleted.data;
  }
}

const l = new LinkedList();
console.log('length : ', l.length);

l.insert(0, 1);
l.insertToTail(2);
l.insertToTail(5);
l.insertToTail(7);
l.insert(3, 3);
console.log('length : ', l.length);
l.remove(2);
console.log('length : ', l.length);
console.log('index 2 :', l.search(2));

let node = l.head;
while (node.next) {
  console.log('linked-list: ', node.data);
  node = node.next;
}
console.log('linked-list: ', node.data);
