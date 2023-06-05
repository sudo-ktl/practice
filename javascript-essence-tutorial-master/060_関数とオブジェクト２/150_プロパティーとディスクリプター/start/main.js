// const obj = {prop: 0};
'use strict'
const obj = {};
Object.defineProperty(obj, 'prop', {
    value: 0,
    writable: true
})

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");

obj.prop = 2;
console.log(obj.prop)

Object.defineProperty(obj, 'prop', {
    enumerable: true
})

console.log(descriptor)