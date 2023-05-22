function a() {
    let b = 0;
    console.log(b)
}
a();
// console.log(b);

{
    let c = 1;
    console.log(c)
    var d = 2;

    function e() {
        console.log('e is called')
    }
}
// console.log(c)
console.log(d)
e(); //varも関数宣言もブロックスコープを無視している