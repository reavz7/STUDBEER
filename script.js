const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
	if (Navbar.classList.contains("show")) {
		theBody.classList.add("hide-scroll");
	} else if (theBody.classList.contains("hide-scroll")) {
		theBody.classList.remove("hide-scroll");
	}
}

function showHide() {
	Navbar.classList.toggle("show");
	bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

// Close navigation menu when a link is clicked
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		Navbar.classList.remove("show");
		bodyScroll();
	});
});


document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".karta");

  // Funkcja do pokazywania karty
  function toggleCardVisibility(event) {
    // Znajdź najbliższy element .karta-testerzy i przełącz jego widoczność
    const cardTesterzy = event.currentTarget.querySelector(".karta-testerzy");
    if (cardTesterzy) {
      cardTesterzy.classList.toggle("is-visible");
    }
  }

  // Sprawdź szerokość ekranu, aby określić, czy urządzenie jest mobilne
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    // Dla urządzeń mobilnych dodaj obsługę kliknięcia
    cards.forEach((card) => {
      card.addEventListener("click", toggleCardVisibility);
    });

    // Dodaj obsługę, aby kliknięcie poza kartami ukryło wszystkie karty-testerzy
    document.body.addEventListener(
      "click",
      function (e) {
        const openCards = document.querySelectorAll(
          ".karta .karta-testerzy.is-visible"
        );
        openCards.forEach((card) => {
          card.classList.remove("is-visible");
        });
      },
      true
    );
  } else {
    // Dla desktopów zachowaj efekt hover
    cards.forEach((card) => {
      card.addEventListener("mouseenter", toggleCardVisibility);
      card.addEventListener("mouseleave", toggleCardVisibility);
    });
  }
});
