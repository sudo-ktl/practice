let a = 2; //スクリプトスコープ
window.a = 4; // グローバルスコープ
function fn1() { //関数スコープ
    // let a = 1;
    function fn2() { //関数スコープ
        console.log(a);

        if (true) { //ブロックスコープ
            // let a = 3;
            console.log(a);
        }

    }
    fn2();
}
fn1();



