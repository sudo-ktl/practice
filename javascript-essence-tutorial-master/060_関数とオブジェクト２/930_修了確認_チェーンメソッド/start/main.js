/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
	constructor() {
		this.num = null
		this._process = null
	}
	set(val) {
		if (this._process === null) {
			this.num = val;
		} else {
			this._process(this.num, val);
		}
		return this;
	}
	plus() {
		this._process = function(val1,val2) {
			const res = val1 + val2;
			this._equal(res);
		}
		return this;
	}
	minus() {
		this._process = function(val1,val2) {
			const res = val1 - val2;
			this._equal(res);
		}
		return this;
	}
	mutiply() {
		this._process = function(val1,val2) {
			const res = val1 * val2;
			this._equal(res);
		}
		return this;
	}
	divide() {
		this._process = function(val1,val2) {
			const res = val1 / val2;
			this._equal(res);
		}
		return this;
	}
	_equal(res) {
		this.num = res;
		console.log(res)
	}
}

const calc = new Calculator();

calc.set(10)
	.minus()
	.set(3)
	.mutiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
