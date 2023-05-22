// a();

const a = function() {
    console.log('a is called');
}

a();
//  let const ホイスティングでundefinedでの初期化がされない
//　コンテキスト生成ごとに宣言部がメモリに展開される
// ->関数式で関数を定義した時と挙動が違う、宣言と定義