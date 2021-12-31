const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function heapify(arr, idx, len = arr.length) {
  let largest = idx;
  let left = idx * 2 + 1;
  let right = idx * 2 + 2;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== idx) {
    swap(arr, largest, idx);
    heapify(arr, largest, len);
  }

  return arr;
}

function heapSort(data) {
  for (let i = Math.floor(data.length / 2); i >= 0; i--) {
    heapify(data, i);
  }

  for (let j = data.length - 1; j > 0; j--) {
    swap(data, 0, j);
    heapify(data, 0, j);
  }

  return data;
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const target = input[0].split(' ').map((v) => parseInt(v))[1];
  const data = input[1].split(' ').map((v) => parseInt(v));
  const result = heapSort(data);
  console.log(result[target - 1]);
  process.exit();
});
