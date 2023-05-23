function add_number_factory(n) {
    function add_num(value) {
        return n + value;
    }
    return add_num;
}

const add7 = add_number_factory(7);
const res = add7(20);
console.log(res);