const numbers = [4, 0, 0, 1, 0, 2, 4, 5, 1];
const max = Math.max(...numbers);
const result = [];

const array = new Array(max + 1);
array.fill(0);

for (let i = 0; i < numbers.length; i++) {
  array[numbers[i]]++;
}

console.log(`항목의 개수를 센다 ( 배열 C ): ${array}`);

for (let i = 1; i < array.length; i++) {
  array[i] = array[i - 1] + array[i];
}

console.log(`항목의 idx로 수정 ( 배열 modified C ) : ${array}`);

for (let i = numbers.length - 1; i >= 0; i--) {
  let idx = array[numbers[i]] - 1;
  result[idx] = numbers[i];
  array[numbers[i]]--;
}

console.log('sorted : ', result);
