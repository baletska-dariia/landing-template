const scrollButton = document.getElementById('scroll-button');
scrollButton.addEventListener('click', () => {
    const pageStart = document.getElementById('page-start');
    pageStart.scrollIntoView(true, { behavior: "smooth" });
})
window.addEventListener('scroll', () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ?
        scrollButton.style.display = 'block' :
        scrollButton.style.display = 'none'
})
const contactBtn = document.getElementById('contact-us');
contactBtn.addEventListener('click', () => location.replace('#about'));