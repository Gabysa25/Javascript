// Archivo JavaScript principal

// Listo para animar a caperucita con Anime.js
document.addEventListener('DOMContentLoaded', () => {
    const svgObject = document.getElementById('caperucita-svg');
    svgObject.addEventListener('load', () => {
        const svgDoc = svgObject.contentDocument;
        const cuerpoInferior = svgDoc.getElementById('cuerpo_inferior');
        if (cuerpoInferior) {
            anime({
                targets: cuerpoInferior,
                translateX: [0, 60], // Rango aumentado para mayor movimiento
                duration: 1200,
                direction: 'alternate',
                easing: 'easeInOutSine',
                loop: true
            });
        }
    });
    // Asegura que el video de fondo nunca se pause
    const video = document.querySelector('.video-fondo');
    if (video) {
        video.addEventListener('pause', () => video.play());
    }
});
