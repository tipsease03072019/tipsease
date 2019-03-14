const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__btn--right');
const prevButton = document.querySelector('.carousel__btn--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other

const setSlidePosition = function(slide, index) {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition)

//click the right button, move to the right
nextButton.addEventListener('click', function(e) {
    const currentSlide =  track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    console.log(currentSlide)
    track.style.transform = `translateX(-${amountToMove})`;

})
