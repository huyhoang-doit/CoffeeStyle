// Author: https:github.com/huyhoang-doit

// Toggle top menu
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

// Toggle cart
const cartBtn = document.getElementById('cart-button');
const modalCartElement = document.querySelector('.modal-cart');
const closeCartBtn = document.querySelector('.close-cart');
const cartWrap = document.querySelector('.wrap-cart');

function toggleModalCart() {
  modalCartElement.classList.toggle("hidden");
}

function closeCart(event) {
  if (event.target === modalCartElement || event.target === closeCartBtn) {
      if(!modalCartElement.classList.contains("hidden")) {
        modalCartElement.classList.toggle("hidden");
      }
  }
} 

modalCartElement.addEventListener("click", closeCart);
closeCartBtn.addEventListener("click", toggleModalCart);
cartBtn.addEventListener("click", toggleModalCart);

