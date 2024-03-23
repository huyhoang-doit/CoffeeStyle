// Author: https:github.com/huyhoang-doit

const topMenu = document.getElementById("hdi-top-menu");
const toggleTopMenuIcon = document.getElementById("hdi-toggle-top-menu-icon");

document.addEventListener("click", (event) => {
  if (toggleTopMenuIcon.contains(event.target)) {
    // Click to toggle top menu icon
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("hdi-topmenu-expanded");
  } else {
    // Click outside of toggle top menu icon
    if (topMenu.classList.contains("hdi-topmenu-expanded")) {
      topMenu.classList.remove("hdi-topmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
