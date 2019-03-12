const icon = document.querySelector('.hamburger');
const navDisplay = document.querySelector('.nav-display');

let toggleClass = function () {
    icon.classList.toggle('test')
}

icon.addEventListener('click', toggleClass)
