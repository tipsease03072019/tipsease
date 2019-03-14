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

const moveToSlide = function (track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const hideNavIcons = function(slides, prevButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        console.log('test')
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//click the right button, move slide to the right
nextButton.addEventListener('click', function(e) {
    const currentSlide =  track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const nextIndex = slides.findIndex(function(slide) {
        return slide === nextSlide;
    })
    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide)
    hideNavIcons(slides, prevButton, nextButton, nextIndex)

})

//click the left button, move slide to left
prevButton.addEventListener('click', function(e) {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(function(slide) {
        return slide === prevSlide;
    })

    hideNavIcons(slides, prevButton, nextButton, prevIndex)
    moveToSlide(track, currentSlide, prevSlide)
})

dotsNav.addEventListener('click', function(e) {
    const targetDot = e.target.closest('a');
    console.log(targetDot)
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(function(dot) {
        return dot === targetDot;
    })
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide)
    hideNavIcons(slides, prevButton, nextButton, targetIndex)

})
