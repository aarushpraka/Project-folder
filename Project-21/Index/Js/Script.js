// JS to add animations when elements come into view
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-item');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add('animated');
        }
    });
});