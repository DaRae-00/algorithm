const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function merge(left, right) {
  console.log('left, right :', left, right);
  const result = [];
  const l = left.reverse();
  const r = right.reverse();

  while (l.length !== 0 && r.length !== 0) {
    l[l.length - 1] <= r[r.length - 1]
      ? result.push(l.pop())
      : result.push(r.pop());
  }
  console.log('result :', result);
  return [...result, ...l.reverse(), ...r.reverse()];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function solution(arr) {
  console.log(mergeSort(arr));
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
  solution(arr);
});

// function mergeSort (array) {
//   if (array.length < 2) {
//   return array;
//   }
//   const mid = Math.floor(array.length / 2);
//   const left = array.slice(0, mid);
//   const right = array.slice(mid);
//   return merge(mergeSort(left), mergeSort(right));

//   function merge (left, right) {
//   const resultArray = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//   if (left[leftIndex] < right[rightIndex]) {
//   resultArray.push(left[leftIndex]);
//   leftIndex++;
//   } else {
//   resultArray.push(right[rightIndex]);
//   rightIndex++;
//   }
//   }
//   return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
//   }
//   }
//   console.log(mergeSort([5, 4, 3, 2, 1]));

//   출처: https://im-developer.tistory.com/134 [Code Playground]
