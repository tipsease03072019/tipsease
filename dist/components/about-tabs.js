//open tab
class Profile {
  constructor(profile) {
    this.profile = profile;
    this.profileImg = document.querySelectorAll(".profile-img");
    this.profiles = document.querySelectorAll(".profile");
    this.profileItems = document.querySelectorAll(".profile-items");
    this.data = this.profile.dataset.tab;
    this.itemElement = document.querySelector(
      `.profile-items[data-tab='${this.data}']`
    );

    this.profile.addEventListener("click", () => this.selectItems());
  }

  selectItems() {
    this.profileItems.forEach(function(item) {
      item.classList.remove("content-selected");
    });
    this.itemElement.classList.add("content-selected");
  }
}

const profiles = document.querySelectorAll(".profile-img");

profiles.forEach(function(profile) {
  return new Profile(profile);
});

// close tab
class Tab {
  constructor(tab) {
    this.tab = tab;
    this.profileItems = document.querySelectorAll(".profile-items");
    this.data = this.tab.dataset.tab;
    this.itemElement = document.querySelector(
      `.profile-items[data-tab='${this.data}']`
    );

    this.tab.addEventListener("click", () => this.selectItems());
  }

  selectItems() {
    this.profileItems.forEach(function(item) {
      item.classList.remove("content-selected");
    });
  }
}

const tabs = document.querySelectorAll(".profile-items");

tabs.forEach(function(tab) {
  return new Tab(tab);
});
