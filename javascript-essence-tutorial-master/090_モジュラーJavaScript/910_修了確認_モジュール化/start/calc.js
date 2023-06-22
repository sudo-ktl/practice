/**
 * 問題：
 * 以下の即時関数をモジュール化してください。
 * ※calcオブジェクトはmain.js内で行い、実行してください。
 */


// export let val = 0;

// export function plus(target) {
//     const newVal = val + target;
//     console.log(`${val} + ${target} = ${newVal}`);
//     val = newVal;
// }
// export function minus(target) {
//     const newVal = val - target;
//     console.log(`${val} - ${target} = ${newVal}`);
//     val = newVal;
// }
// export function multiply(target) {
//     const newVal = val * target;
//     console.log(`${val} x ${target} = ${newVal}`);
//     val = newVal;
// }
// export function divide(target) {
//     const newVal = val / target;
//     console.log(`${val} / ${target} = ${newVal}`);
//     val = newVal;
// }
let val = 0;

export const calc = {

    plus(target) {
        const newVal = val + target;
        console.log(`${val} + ${target} = ${newVal}`);
        val = newVal;
    },
    minus: function(target) {
        const newVal = val - target;
        console.log(`${val} - ${target} = ${newVal}`);
        val = newVal;
    },
    multiply: function(target) {
        const newVal = val * target;
        console.log(`${val} x ${target} = ${newVal}`);
        val = newVal;
    },
    divide: function(target) {
        const newVal = val / target;
        console.log(`${val} / ${target} = ${newVal}`);
        val = newVal;
    }
}