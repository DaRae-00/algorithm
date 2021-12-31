const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function divide(arr, l, r, p) {
  while (l <= r) {
    while (arr[l] < p) {
      l++;
    }

    while (arr[r] > p) {
      r--;
    }

    if (l <= r) {
      const swap = arr[l];
      arr[l] = arr[r];
      arr[r] = swap;
      l++;
      r--;
    }
  }

  return l;
}

function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;

  const m = Math.floor((l + r) / 2);
  const pivot = arr[m];
  const partition = divide(arr, l, r, pivot);

  quickSort(arr, l, partition - 1);
  quickSort(arr, partition, r);

  return arr;
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const target = input[0].split(' ').map((v) => parseInt(v))[1];
  const data = input[1].split(' ').map((v) => parseInt(v));
  const result = quickSort(data);
  console.log(result[target - 1]);
  process.exit();
});
