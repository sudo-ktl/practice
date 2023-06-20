new Promise(function(resolve,reject){
    console.log('promise');
    resolve('hello');
    // reject('bye');
}).then(function(data){
    console.log('then:' + data)
    return data;
}).then(function(data){
    console.log('then:' + data)
    // throw new Error();
}).then(function(){
    console.log('then')
}).catch(function(data){
    console.log('catch:' + data)
}).finally(function(){
    console.log('finally')
})

console.log('global end');