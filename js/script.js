document.addEventListener('DOMContentLoaded', function() {

    const miBoton = document.getElementById('miBoton');
    if (miBoton) {
        miBoton.addEventListener('click', function() {
            alert('¡Gracias por hacer clic! El JavaScript está funcionando.');
        });
    }

    const elHeader = document.querySelector('header');
    elHeader.addEventListener('click', function() {
        const colores = ['#4a90e2', '#e24a4a', '#4ae24a', '#e2e24a', '#9c4ae2'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        this.style.backgroundColor = colorAleatorio;
    });

    const enlacesMenu = document.querySelectorAll('nav a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('mouseover', function() {
            this.style.color = '#ffcc00';
        });

        enlace.addEventListener('mouseout', function() {
            this.style.color = 'white';
        });
    });

    console.log("¡JavaScript cargado correctamente!");
});