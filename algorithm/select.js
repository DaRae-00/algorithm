function sorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    console.log(`${i + 1} 회전`);
    if (arr[minIdx] !== arr[i]) {
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr;
}

console.log(sorting(['2', '6', '1', '5', '9', '3']));
