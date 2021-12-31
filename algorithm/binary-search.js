function binarySearch(target, arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let v = arr[mid];

    if (v < target) {
      low = mid + 1;
    } else if (v > target) {
      high = mid - 1;
    } else {
      return v;
    }
  }

  return null;
}

console.log(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
