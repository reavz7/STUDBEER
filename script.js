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

