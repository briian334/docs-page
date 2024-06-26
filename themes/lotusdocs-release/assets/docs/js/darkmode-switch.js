// JavaScript para cambio de modo nocturno/día
const mode = document.getElementById("mode");

if (mode !== null) {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (event) => {
			if (event.matches) {
				localStorage.setItem("theme", "dark");
				document.documentElement.setAttribute("data-dark-mode", "");
			} else {
				localStorage.setItem("theme", "light");
				document.documentElement.removeAttribute("data-dark-mode");
			}
			// Recargar los comentarios de Facebook después de cambiar el tema
			reloadFacebookComments();
		});

	mode.addEventListener("click", () => {
		document.documentElement.toggleAttribute("data-dark-mode");
		localStorage.setItem(
			"theme",
			document.documentElement.hasAttribute("data-dark-mode") ? "dark" : "light"
		);
		// Recargar los comentarios de Facebook después de cambiar el tema
		reloadFacebookComments();
	});

	// Cargar el tema al iniciar la página
	if (localStorage.getItem("theme") === "dark") {
		document.documentElement.setAttribute("data-dark-mode", "");
	} else {
		document.documentElement.removeAttribute("data-dark-mode");
	}

	// Función para recargar los comentarios de Facebook
	function reloadFacebookComments() {
		var comments = document.getElementsByClassName("fb-comments");
		if (comments.length > 0) {
			var mode = localStorage.getItem("theme") === "dark" ? "dark" : "light";
			for (var i = 0; i < comments.length; i++) {
				comments[i].setAttribute("data-colorscheme", mode);
			}
		}
	}
}
