document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    const dropdownButtons = document.querySelectorAll(".drop-btn");
  
    // Toggle mobile menu visibility
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  
    // Toggle dropdown menu visibility on click
    dropdownButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdownMenu = btn.nextElementSibling;
  
        // Close other dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.style.display = "none";
          }
        });
  
        // Toggle the current dropdown
        dropdownMenu.style.display =
          dropdownMenu.style.display === "block" ? "none" : "block";
      });
    });
  
    // Close dropdowns if clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          menu.style.display = "none";
        });
      }
    });
  });
  