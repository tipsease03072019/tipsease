const icon = document.querySelector('.hamburger');
const navDisplay = document.querySelector('.nav-display');

let toggleClass = function () {
    navDisplay.classList.toggle('display');
}

icon.addEventListener('click', toggleClass)
