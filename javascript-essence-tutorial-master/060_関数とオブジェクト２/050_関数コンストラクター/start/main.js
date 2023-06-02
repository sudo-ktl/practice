const fn1 = new Function('a','b','return a + b');

const result = fn1(1,2);
console.log(result);

function fn2(a, b) {
    return a + b;
}

const obj = new function() {
    this.a = 0;
}

const fn3 = new Function('return;')
console.log(obj,fn3)