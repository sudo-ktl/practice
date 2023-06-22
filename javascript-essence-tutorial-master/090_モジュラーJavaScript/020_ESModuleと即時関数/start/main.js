// const moduleA = (function () {

//   console.log('IIFE called');

//   let privateVal = 1;
//   let publicVal = 10;

//   function publicFn() {
//     console.log('publicFn called: ' + publicVal++);
//   }

//   function privateFn() {

//   }

//   return {
//     publicFn,
//     publicVal
//   }
// })();

const moduleB = (function({publicFn,publicVal}) {
  publicFn();
  publicFn();
  publicFn();
  console.log(publicVal++)
  console.log(publicVal++)
  publicFn();
})(moduleA);

// moduleA.publicFn();
// moduleA.publicFn();
// moduleA.publicFn();
// console.log(moduleA.publicVal++)
// console.log(moduleA.publicVal++)
// moduleA.publicFn();

console.log('ES called');

let privateVal = 1;
export let publicVal = 10;

export function publicFn() {
  console.log('publicFn called: ' + publicVal++);
}

function privateFn() {

}