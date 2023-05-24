function print_type_value(val) {
    console.log(typeof val, val)
}

let a = 0;

print_type_value(a);

let b = '1' + a;

print_type_value(b);

let c = 15 - b;

print_type_value(c)