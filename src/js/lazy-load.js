let imageObserver = new IntersectionObserver((images) => {
    console.log('here');
    [...images].forEach(image => {
        if (image.isIntersecting) {
            imageObserver.unobserve(image.target);
            const lazyImage = image.target;
            lazyImage.src = lazyImage.dataset.src;
        }
    })
});


const images = document.getElementsByTagName('img');
[...images].forEach(image => imageObserver.observe(image))