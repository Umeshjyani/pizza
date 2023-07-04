document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = document.querySelector(".menu-icon");
    const name = document.getElementById("name");
  
    menuToggle.addEventListener("change", function() {
      if (this.checked) {
        menuIcon.textContent = "✕";
        name.style.display="none";
      } else {
        menuIcon.textContent = "☰";
        name.style.display="block";
      }
    });
  });