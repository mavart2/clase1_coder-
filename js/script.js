// Obtener el botón
var goTopButton = document.getElementById("goTopBtn");

// Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopButton.style.display = "block";
    } else {
        goTopButton.style.display = "none";
    }
};

// Función para ir arriba cuando se hace clic en el botón
function goToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
