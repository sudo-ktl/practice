const array = [1, 2, 3, 4, 5];

const result = array.reduce(function(accu, curr){
    return accu + curr;
});

console.log(result)