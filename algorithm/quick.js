const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function quickSort(arr) {
  console.log(`arr : ${arr}`);
  if (arr.length < 2) return arr;

  const pivot = [arr[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      left.push(arr[i]);
    } else if (arr[i] > pivot[0]) {
      right.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}

function divide(arr, left, right, pivot) {
  console.log(
    `array: ${arr}, left: ${arr[left]}, pivot: ${pivot}, right: ${arr[right]}`,
  );

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      let swap = arr[left];
      arr[left] = arr[right];
      arr[right] = swap;
      left++;
      right--;
    }
  }

  return left;
}

function quickSortInPlace(arr, left = 0, right = arr?.length - 1) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSortInPlace(arr, left, partition - 1);
  quickSortInPlace(arr, partition, right);

  return arr;
}

function solution(arr) {
  console.log(quickSort(arr));
  //console.log(quickSortInPlace(arr));
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
  solution(arr);
});
