document.addEventListener('DOMContentLoaded', function () {


    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('発火')
                const ta = new TextAnimation(entry.target);
                ta.animate();
                console.log(entry.target)
                observer.unobserve(entry.target);
            } else {
            }
        });
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => {
        io.observe(el)
    })
});

