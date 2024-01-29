document.addEventListener("DOMContentLoaded", function () {
  setDropdownValue();
});

function setDropdownValue() {
  document.getElementById("select1").value = "datum";

  var select1 = document.getElementById("select1");
  select1.value = "choose";

  setPlaceholder()
}

// Beim Klicken auf den Button wird zum Anfang der Seite gescrollt
function scrollUp() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}

//Script für die Navbar
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  const menuLinks = document.querySelectorAll(".scrollLink");

  menuIcon.addEventListener("click", function() {
    navbar.classList.toggle("active");
  });

  document.addEventListener("click", function(event) {
    const target = event.target;
    if (!navbar.contains(target) && !menuIcon.contains(target)) {
      navbar.classList.remove("active");
    }
  });

  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navbar.classList.remove("active");
    });
  });
});

