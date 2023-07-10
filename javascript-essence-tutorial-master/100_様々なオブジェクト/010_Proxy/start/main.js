const targetObj = { a: 0 };

const pxy = new Proxy(targetObj, {
    set(target, prop, value, receiver) {
        const result = Reflect.set(target, prop, value, receiver)
        const json = JSON.stringify(target);
        localStorage.setItem(KEY,json);
        console.log(result)
    }
})

pxy.name = 'tom'
console.log(pxy)