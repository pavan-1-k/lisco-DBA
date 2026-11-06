/* Accessible responsive navigation for the District Bar Association website */
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (!menuButton || !menu) return;

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuButton.addEventListener("click", function () {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Close after a navigation link is selected.
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // Close when the user clicks outside the navigation.
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav")) {
      setMenu(false);
    }
  });

  // Support keyboard users.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenu(false);
      menuButton.focus();
    }
  });

  // Reset the mobile menu when returning to desktop width.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1050) {
      setMenu(false);
    }
  });
});
