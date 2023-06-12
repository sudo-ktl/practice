const map = new Map();

const key1 = {};
map.set(key1, 'val1');
console.log(map.get(key1))

const key2 = function(){}
map.set(key2, 'val2')
console.log(map.get(key2))

let key3 = 0;
map.set(key3,'val3')
console.log(map.get(key3))

console.log(typeof map)