const navLinks = document.querySelectorAll("[data-navLink]")

navLinks.forEach((link) => {
	console.log(window.location.pathname)
	if (window.location.pathname == "/" && link.pathname == "/") {
		link.setAttribute("aria-current", "page")
	} else {
		const routes = window.location.pathname.split("/")
		if (routes[1]) {
			if (link.getAttribute("href").includes(routes[1])) {
				link.setAttribute("aria-current", "page")
			}
		}
	}
})


const toggleDark = document.querySelector("#toggleDark")

toggleDark.addEventListener("click", (e) => {
	document.documentElement.classList.toggle("dark")
	if (document.documentElement.classList.contains("dark")) {
		window.localStorage.setItem('theme', 'dark');
	} else {
		window.localStorage.setItem('theme', 'light');
	}
})


const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const mobileMenuClose = document.getElementById("mobileMenuClose")
const mobileMenuBlur = document.getElementById("mobileMenuBlur")

mobileMenuBtn.addEventListener("click", (e) => {
	mobileMenu.classList.toggle("hidden")
	mobileMenuBlur.classList.toggle("hidden")
})

mobileMenuClose.addEventListener("click", (e) => {
	mobileMenu.classList.toggle("hidden")
	mobileMenuBlur.classList.toggle("hidden")
})
