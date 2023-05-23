function increment_factory() {

    let n = 0;

    function increment() {
        n += 1;
        console.log(n)
    }

    return increment;

}

const increment = increment_factory();

increment();
increment();
increment();