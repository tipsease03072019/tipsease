class Carousel {
  constructor(item) {
    this.item = item;
    this.carousel = document.querySelectorAll(".carousel-holder");
    this.data = this.item.dataset.tab;
    this.itemElement = document.querySelector(
      `.carousel-holder[data-tab='${this.data}']`
    );
    console.log(this.itemElement);

    this.rightBtn = document.querySelector(".right-button");

    this.rightBtn.addEventListener("click", () => this.slide());
  }
  slide() {
    this.carousel.forEach(function(item) {
      item.classList.remove("hide-profile");
    });
    this.itemElement.classList.add("hide-profile");
  }
}

const carouselItems = document.querySelectorAll(".carousel-holder");

carouselItems.forEach(function(item) {
  return new Carousel(item);
});
