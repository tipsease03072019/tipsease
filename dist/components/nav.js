const icon = document.querySelector('.hamburger');
const navDisplay = document.querySelector('.nav-display');

let toggleDisplay = function () {
    navDisplay.classList.toggle('display');
}

//toggle close class on hamburget icon to morph into an X
let toggleX = function() {
    icon.classList.toggle('close');
}


icon.addEventListener('click', toggleDisplay)
icon.addEventListener('click', toggleX)
