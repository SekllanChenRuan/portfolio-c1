// test

const body = document.querySelector("body");
const modeToggle = document.querySelector(".modetoggle");

if (localStorage.getItem("mode") === "dark") {
  body.setAttribute("data-bs-theme", "dark");
} else {
  body.setAttribute("data-bs-theme", "light");
}

if (localStorage.getItem("icon-mode") === "fa-moon-o") {
  modeToggle.classList.remove("fa-moon-o");
  modeToggle.classList.add("fa-sun-o");
} else {
  modeToggle.classList.remove("fa-sun-o");
  modeToggle.classList.add("fa-moon-o");
}

function toggleMode() {
  if (modeToggle.classList.contains("fa-moon-o")) {
    body.setAttribute("data-bs-theme", "dark");
    modeToggle.classList.remove("fa-moon-o");
    modeToggle.classList.add("fa-sun-o");
    localStorage.setItem("icon-mode", "fa-moon-o");
    localStorage.setItem("mode", "dark");
  } else {
    body.setAttribute("data-bs-theme", "light");
    modeToggle.classList.remove("fa-sun-o");
    modeToggle.classList.add("fa-moon-o");
    localStorage.setItem("icon-mode", "fa-sun-o");
    localStorage.setItem("mode", "light");
  }
}
