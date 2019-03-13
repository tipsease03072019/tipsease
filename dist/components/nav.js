const icon = document.querySelector(".hamburger");
const iconLines = document.querySelectorAll(".line");
const navDisplay = document.querySelector(".nav-display");
const desktop = window.matchMedia("(min-width: 1000px)");

let animateMenu = new TimelineMax({ paused: true, reversed: true });
let animateMenuDesktop = new TimelineMax({ paused: true, reversed: true });
let animateLines = new TimelineMax({ paused: true, reversed: true });

//watches window width to determine which animations get applied to nav content
function widthWatch(desktop) {
  if (desktop.matches) {
    console.log("Desktop and above");
  } else {
    console.log("Below desktop");
  }
}

widthWatch(desktop);
desktop.addListener(widthWatch);

//toggle animations on hamburger icon to morph into an X
let toggleMenu = function() {
  animateLines
    .to(icon, 0.3, { rotation: 180 })
    .to(iconLines[1], 0.3, { width: 0 })
    .to(iconLines[0], 0.1, { rotation: 45, x: "7px", y: "12px" })
    .to(iconLines[2], 0.1, { rotation: -45, x: "7px", y: "-8px" });

  animateLines.reversed() ? animateLines.play() : animateLines.reverse();
};

//toggles nav dropdown
let toggleDisplay = function() {
  if (desktop.matches) {
    console.log("true");
    animateMenuDesktop
      .to(navDisplay, 0.35, {
        height: 300,
        border: "1px solid $dark-text-color"
      })
      .to(".nav-bg", 0.3, { opacity: 1, visibility: "visible" });

    animateMenuDesktop.reversed()
      ? animateMenuDesktop.play()
      : animateMenuDesktop.reverse();
  } else {
    animateMenu
      .to(navDisplay, 0.35, { height: "100vh", visibility: "visible" })
      .to(".nav-bg", 0.3, { opacity: 1, visibility: "visible" });

    animateMenu.reversed() ? animateMenu.play() : animateMenu.reverse();
  }
};

//
icon.addEventListener("click", toggleDisplay);
icon.addEventListener("click", toggleMenu);
