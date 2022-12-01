const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  voile.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  voile.classList.add("hidden");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
