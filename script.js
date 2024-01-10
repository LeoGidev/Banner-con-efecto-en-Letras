document.addEventListener('DOMContentLoaded', function() {
    var words = ['DEVELOPER', 'D', 'DE', 'DEV', 'DEVE', 'DEVEL', 'DEVELO', 'DEVELOP', 'DEVELOPE', 'DEVELOPER'];
    var currentIndex = 0;
    var wordAnimation = document.getElementById('word-animation');

    function changeWord() {
        // Oculta el elemento actual
        wordAnimation.style.opacity = 0;

        
            // Cambia la palabra
            wordAnimation.textContent = words[currentIndex];
            // Muestra el elemento
            wordAnimation.style.opacity = 1;
            // Actualiza el índice para la próxima palabra
            currentIndex = (currentIndex + 1) % words.length;

            // Ajusta el tiempo para la próxima palabra
            if (currentIndex === 0) {
                setTimeout(changeWord, 2000); // Si es la primera palabra, espera 2 segundos
            } else {
                setTimeout(changeWord, 100); // Para las otras palabras, espera 100 milisegundos
            }
        
    }

    // Inicia el cambio de palabra
    changeWord();
});