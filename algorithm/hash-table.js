class HashTable {
  _table;
  _size;

  constructor(size) {
    this._size = size;
    this._table = [...new Array(size).keys()];
  }

  get hashTable() {
    return this._table;
  }

  hashFunc(key) {
    const changedKey = key.charCodeAt(0);
    return changedKey % this._size;
  }

  getHashAddress(key) {
    return this.hashFunc(key);
  }

  storageData(key, value) {
    const hash_address = this.getHashAddress(key);
    this._table[hash_address] = value;
  }

  getData(key) {
    const hash_address = this.getHashAddress(key);
    const value = this._table[hash_address];

    if (value) {
      return value;
    } else {
      console.log('해당 키의 값이 없습니다.');
      return null;
    }
  }
}

const ht = new HashTable(5);
ht.storageData('Andy', '010-111-1111');
ht.storageData('Dave', '010-222-2222');
console.log('hashTable :', ht.hashTable);
console.log('getData - Andy : ', ht.getData('Andy'));
