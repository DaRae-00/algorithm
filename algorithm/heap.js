const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function heapify(arr, idx, len = arr.length) {
  let largest = idx,
    left = idx * 2 + 1;
  right = idx * 2 + 2;

  if (left < len && arr[left] < arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] < arr[largest]) {
    largest = right;
  }

  if (largest !== idx) {
    swap(arr, idx, largest);
    heapify(arr, largest, len);
  }

  return arr;
}

function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }

  return arr;
}

function solution(arr) {
  console.log(heapSort(arr));
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
  solution(arr);
});
