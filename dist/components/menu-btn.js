// heres the CSS to make it turn to X just remake it to scss
// .menu-button {
//   position: absolute;
//   z-index: 3;
//   left: 20px;
//   cursor: pointer;
//   transition: all 0.5s ease-out;
//
//   .btn-line {
//     width: 28px;
//     height: 3px;
//     margin: 0 0 5px 0;
//     background: #fff;
//     transition: all 0.3s ease-out;
//   }
// }
//
// .menu-button.close {
//   transform: rotate(180deg);
//
//   .btn-line:nth-child(1) {
//     transform: rotate(45deg) translate(5px, 5px);
//     background: white;
//   }
//   .btn-line:nth-child(2) {
//     transform: rotate(45deg) translate(5px, 5px);
//     opacity: 0;
//   }
//   .btn-line:nth-child(3) {
//     transform: rotate(-45deg) translate(7px, -6px);
//     background: white;
//   }
// }
//
// .menu {
//   position: fixed;
//   left: -250px;
//   visibility: hidden;
//   opacity: 0;
//   pointer-events: none;
//   transition: 0.2s all linear;
//   top: 75px;
//   width: 350px;
//   height: 100vh; /* This give the height 100% of the screen or, '100% of View Height' */
//   background-color: #81c784;
//   border: 1px solid #004d40;
//   border-left: none;
//   border-bottom: none;
//   z-index: 2; /* This set the layer level of the element, it has precendence over initial level of 1*/
// }
//
// .menu ul li {
//   list-style-type: none;
//   font-size: 32px;
//   padding: 25px 0;
//   text-align: center;
// }
//
// .menu--open {
//   visibility: visible;
//   pointer-events: inherit;
//   transition: 0.2s all ease-in-out;
//   opacity: 1;
//   left: 0;
//   display: block;
// }

// heres JS

// Select Dom Items
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

//set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menu.classList.toggle("menu--open");
    //show menu state to true
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menu.classList.remove("menu--open");
    // set menu back to false
    showMenu = false;
  }
}
