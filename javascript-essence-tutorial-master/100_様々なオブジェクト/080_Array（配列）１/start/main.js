const array = [0,1,2,3,4,5,6];

array.push(7)

const result = array.splice(0,3,0,1,2,3,4,5,6)
console.log(array)

const array2 = [111,222, ...array, 555,666,777]
console.log(array2)