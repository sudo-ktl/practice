const obj = {a: 0, b: 1, c: 2};

function replacer(prop, value) {
    if(value < 1) {
        return;
    }
    return value;
}
const json = JSON.stringify(obj, replacer);
console.log(typeof(json))