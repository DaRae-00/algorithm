class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  setHead(data) {
    this.head = new Node(data);
  }

  find(data) {
    let cur = this.head;
    while (cur.next !== null) {
      if (cur.data !== data) {
        cur = cur.next;
      } else break;
    }
    return cur;
  }

  insert(end, start) {
    const endNode = new Node(end);
    const startNode = this.find();
  }
}
