
// Scroll to top button
const scrollBtn = document.querySelector('.btn-scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on scroll
const animateElements = document.querySelectorAll('.animate-up');

const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
};

const animateOnScroll = () => {
    animateElements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
};

//Duy JS

// Run animation check on load
window.addEventListener('load', animateOnScroll);

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);
