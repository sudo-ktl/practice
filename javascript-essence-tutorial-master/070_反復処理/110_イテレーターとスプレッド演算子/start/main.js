const arry1 = [1,2,3,4,5];
const arry2 = [0, ...arry1, 6];
arry2.push(6);
console.log(arry2);
console.log(arry1 === arry2);

function sum(...atgs) {
    let res = 0;
    for(let i  of atgs) {
        console.log(i);
        res += i;
    }
    return res
}
const res = sum(1,2,3,4)
console.log(res);