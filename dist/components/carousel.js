class Carousel {
  constructor(carousel) {
    this.currentIndex = 0;
    this.carousel = carousel;
    this.leftBtn = document.querySelector(".left-button");
    this.rightBtn = document.querySelector(".right-button");
    this.profiles = document.querySelectorAll(".carousel-holder");
    this.currentProfile = this.profiles[this.currentIndex];
    this.currentProfile.style.display = "block";

    this.leftBtn.addEventListener("click", () => this.previous());
    this.rightBtn.addEventListener("click", () => this.next());
  }
  previous() {
    const profiles = document.querySelectorAll(".carousel-holder");
    profiles.forEach(function(profile) {
      return (profile.style.display = "none");
    });

    this.currentIndex -= 1;

    if (this.currentIndex < 0) {
      this.currentIndex = 6;
    }

    if (this.currentIndex > this.profiles.length) {
      this.currentIndex = 0;
    }

    this.profiles[this.currentIndex].style.display = "block";
  }
  next() {
    const profiles = document.querySelectorAll(".carousel-holder");

    profiles.forEach(function(profile) {
      return (profile.style.display = "none");
    });

    this.currentIndex += 1;
    if (this.currentIndex > this.profiles.length - 1) {
      this.currentIndex = 0;
    }
    this.profiles[this.currentIndex].style.display = "block";
  }
}

let carousel = document.querySelectorAll(".carousel");

carousel.forEach(function(carousel) {
  return new Carousel(carousel);
});
