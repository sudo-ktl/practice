const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    arry.forEach(v => {
        console.log(defaultValue)
        defaultValue = callback(defaultValue,v)
    });
    return defaultValue;
}

const result = reduce(strArry, tag, "");
console.log(result);