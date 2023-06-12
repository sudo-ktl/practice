const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	metd() {
		console.log('hello')
	}
}
Object.prototype.method = function() {}

for(let key in obj){
	console.log(key, obj[key])
}

