class Carousel {
  constructor(carousel) {
    this.currentIndex = 0;
    this.carousel = carousel;
    this.left = document.querySelector(".left-button");
    this.right = document.querySelector(".right-button");
    this.profiles = document.querySelectorAll(".carousel-holder");
    this.currentProfile = this.profiles[this.currentIndex];
    this.currentProfile.style.display = "block";

    this.left.addEventListener("click", () => this.previous());
    this.right.addEventListener("click", () => this.next());
  }
  previous() {
    const profiles = document.querySelectorAll(".carousel-holder");
    profiles.forEach(profile => (profile.style.display = "none"));

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

    profiles.forEach(profile => (profile.style.display = "none"));

    this.currentIndex += 1;
    if (this.currentIndex < 0) {
      this.currentIndex = 3;
    }
    if (this.currentIndex > this.profiles.length - 1) {
      this.currentIndex = 0;
    }
    this.profiles[this.currentIndex].style.display = "block";
  }
}

let carousel = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));
