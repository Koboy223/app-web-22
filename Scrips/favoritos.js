new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 10,
    autoplay: 3000, // Cambiar de imágenes cada 3 segundos (3000 milisegundos)
    hoverpause: true, // Pausar la reproducción al pasar el ratón sobre el carrusel
    rewind: true, // Habilitar el efecto de rebobinado para un bucle continuo
    breakpoints: {
        1024: {
            perView: 3
        },
        768: {
            perView: 2
        }
    }
}).mount();
