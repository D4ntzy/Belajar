const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

window.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

