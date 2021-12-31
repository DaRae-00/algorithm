class CircularQueue {
  _size = 0;
  _data = null;
  _front = 0;
  _rear = 0;

  constructor(size = 0) {
    this._size = size + 1;
    this._data = new Array(this._size).fill(null);
  }

  isEmpty() {
    return this._rear === this._front;
  }

  isFull() {
    return (this._rear + 1) % this._size === this._front;
  }

  enqueue(v) {
    if (this.isFull()) {
      console.log("Failed enqueue. It's full");
      return;
    }
    this._data[this._rear] = v;
    this._rear = (this._rear + 1) % this._size;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Failed dequeue. It's empty");
      return;
    }
    const v = this._data[this._front];
    this._data[this._front] = null;
    this._front = (this._front + 1) % this._size;
    return v;
  }

  peek() {
    return this._data[this._front];
  }

  size() {
    return this._rear > this._front
      ? this._rear - this._front
      : this._size - (this._front - this._rear);
  }
}

const cq = new CircularQueue(5);
cq.enqueue('1');
cq.enqueue('2');
cq.enqueue('3');
cq.enqueue('4');
cq.enqueue('5');
console.log('value: ', cq.dequeue());
console.log('value: ', cq.dequeue());
cq.enqueue('7');
cq.enqueue('8');
cq.enqueue('9');
console.log('cq.size : ', cq.size());
console.log('cq : ', cq._data);
