const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.addEventListener('scroll', () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
        scrollButton.style.display = 'block' :
        scrollButton.style.display = 'none'
})
const contactBtn = document.getElementById('contact-us');
contactBtn.addEventListener('click', () => location.replace('#about'));