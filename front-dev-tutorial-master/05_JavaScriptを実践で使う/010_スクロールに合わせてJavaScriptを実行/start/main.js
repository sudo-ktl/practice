const child = document.querySelector('.child');
const cb = function(entries,observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      observer.unobserve(entry.target);
    } else {

    }
  });
}
const options = {
  root: null,
  rootMargin: "-300px 0px",
  threshold: [0,1]
}
const io = new IntersectionObserver(cb, options);
io.observe(child);