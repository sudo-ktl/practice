const targetObj = { a: 0 };
const handler = {
    set: function(target, prop, value, reciver) {
        console.log(`[set]:${prop}`);
        target[prop] = value;
    },
    get: function(target, prop, reciver) {
        console.log(`[get]:${prop}`);
        console.log(reciver)

        return target[prop];
    },
    deleteProperty: function(target, prop) {
        console.log(`[delete]: ${prop}`);
        throw new Error('cannot delete prop')
    }
}
const pxy = new Proxy(targetObj, handler)
pxy.a = 1;
pxy.a;
