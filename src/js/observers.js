import { applyAnimation } from './animations';

const imageObserver = new IntersectionObserver((images) => {
    [...images].forEach(image => {
        if (image.isIntersecting) {
            imageObserver.unobserve(image.target);
            const lazyImage = image.target;
            lazyImage.src = lazyImage.dataset.src;
        }
    })
});


const images = document.getElementsByTagName('img');
[...images].forEach(image => imageObserver.observe(image));

const scrollButton = document.getElementById('scroll-button');
const scrollContainer = document.getElementById('scroll-container');
const topButtonObserver = new IntersectionObserver((entries) => {
    [...entries].forEach(entry => {
        if (entry.intersectionRatio > 0) {
            scrollButton.style.opacity = 1;
            scrollButton.style.transform = 'translateY(-3rem)';
        } else {
            scrollButton.style.transform = 'translateY(4rem)';
        }
    })

});

topButtonObserver.observe(scrollContainer);

scrollButton.addEventListener('click', () => {
    const pageStart = document.getElementById('page-start');
    pageStart.scrollIntoView(true, { behavior: "smooth" });

})