import { comments } from './comments';
import { applyAnimation } from './animations';


const setupSlides = () => {
    let index = 0;
    const commentText = document.getElementById('comment-text');
    const commentName = document.getElementById('comment-name');
    const commentImage = document.getElementById('comment-image');
    const dots = document.getElementsByClassName('dot');

    return {
        showNext: () => {

            index++;
            if (index === comments.length) {
                index = 0;
            }

            applyAnimation('#comment-image', 'fade in', 500);

            index ? dots[index - 1].classList.remove("dot_active") :
                dots[dots.length - 1].classList.remove("dot_active");

            dots[index].classList.add("dot_active");

            commentImage.setAttribute('src', comments[index].imageSrc);
            commentName.innerHTML = `${comments[index].name}/ <span>${comments[index].position}</span>`;
            commentText.innerHTML = comments[index].text;



        },
        showPrev: () => {
            dots[index].classList.remove("dot_active")
            index ? index-- : index = comments.length - 1;
            dots[index].classList.add("dot_active");

            applyAnimation('#comment-image', 'fade in', 500);

            commentImage.setAttribute('src', comments[index].imageSrc);
            commentName.innerHTML = `${comments[index].name}/ <span>${comments[index].position}</span>`;
            commentText.innerHTML = comments[index].text;

        }
    }
}


const slider = setupSlides();
const showSlides = (interval = 4000) => {
    const intervalId = setInterval(() => { slider.showNext(); }, interval);
    return intervalId;
}

const interval = showSlides();

const nextSlideButton = document.getElementById('next-slide');
nextSlideButton.addEventListener('click', () => {
    clearInterval(interval);
    slider.showNext();
});

const prevSlideButton = document.getElementById('prev-slide');
prevSlideButton.addEventListener('click', () => {
    clearInterval(interval);
    slider.showPrev();
});