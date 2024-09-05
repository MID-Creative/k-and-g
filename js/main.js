document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementsByClassName("menu-btn");
  const innerMenuBtn = document.getElementById("inner-menu-btn");
  const menuContent = document.getElementsByClassName("menu-content");
  console.log(menuContent, menuBtn);

  for (let item of menuBtn) {
    item.addEventListener("click", () =>
      menuContent[0].classList.toggle("active")
    );
  }
});
