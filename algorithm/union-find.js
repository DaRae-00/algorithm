const root = [];
const data = [];

// 초기화
const makeSet = (len) => {
  for (let i = 0; i < len; i++) {
    root.push(i);
    data.push(i);
  }
};

// root 노드 찾기
const find = (x) => {
  return root[x] === x ? x : find(root[x]);
};

const union = (x, y) => {
  const start = find(x);
  const end = find(y);

  root[end] = start;
};

makeSet(5);
console.log('root :', root);
console.log('data :', data);

union(1, 3); // 3 -> 1
union(2, 1); // 1 -> 2

console.log('root :', root);
console.log('data :', data);
