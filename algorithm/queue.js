class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length += 1;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.length -= 1;

    return data;
  }

  peek() {
    return this.head.data;
  }

  isEmpty() {
    return !this.head;
  }

  getLength() {
    return this.length;
  }
}

const qu = new Queue();

qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
console.log(qu.getLength());
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.getLength());

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// const enqueue = (value) => {
//   arr.push(value);
// };

// const dequeue = () => {
//   return arr.splice(0, 1)[0];
// };

// console.log(dequeue());
// console.log(arr);
// console.log(enqueue(10));
// console.log(arr);
