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
