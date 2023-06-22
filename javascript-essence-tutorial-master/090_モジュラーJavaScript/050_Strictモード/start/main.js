function fn() {
    // 'use strict'
    return this;
}
console.log(fn.call(2));