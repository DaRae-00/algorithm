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
    const hashAddress = this.getHashAddress(key);

    if (typeof this._table[hashAddress] === 'number') {
      this._table[hashAddress] = [];
    }

    const hashAddressLength = this._table[hashAddress].length;

    if (hashAddressLength > 0) {
      console.log('!! 충돌이 일어났습니다 : ' + hashAddress + '번 방');
      this._table[hashAddress][hashAddressLength - 1].next = hashAddressLength;
    }

    this._table[hashAddress].push({
      key: key,
      value: value,
      next: null,
    });
  }

  getData(key) {
    const hashAddress = this.getHashAddress(key);
    const data = this._table[hashAddress];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return data[i].value;
        }
      }
    } else {
      if (data.key === key) {
        return data[0].value;
      }
    }

    console.log('해당 키의 값이 없습니다.');
    return null;
  }
}

const ht = new HashTable(5);
ht.storageData('Andy', '010-111-1111');
ht.storageData('Dave', '010-222-2222');
ht.storageData('Aaron', '010-333-3333');
console.log('hashTable :', ht.hashTable);
console.log('getData - Andy : ', ht.getData('Andy'));
