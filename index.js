function redirectToHome() {
  window.location.href = "pages/home.html";
}

document.getElementById("menu-icon").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("active");
});
