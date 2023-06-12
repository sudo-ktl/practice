function genIterator(max) {
    let i = 0;

    return {
        next: function() {
            return {
                done: false,
                value: i++
            }
        }
    }
}