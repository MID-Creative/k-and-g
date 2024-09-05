document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementsByClassName("menu-btn");
  const menuContent = document.getElementsByClassName("menu-content");

  for (let item of menuBtn) {
    item.addEventListener("click", () =>
      menuContent[0].classList.toggle("active")
    );
  }
});
