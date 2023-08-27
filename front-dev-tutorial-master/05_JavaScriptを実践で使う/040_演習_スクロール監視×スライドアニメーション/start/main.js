document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            console.log(el)
            el.classList.add('inview')
        }
    }
    console.log('DOMがロードされました')
    const so = new ScrollObserver('.cover-slide', cb);
});

