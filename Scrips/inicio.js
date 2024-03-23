
  // Lee el hash de la URL para obtener la palabra buscada
const hash = window.location.hash.substring(1);
const contenido = document.getElementById("contenido");
const regex = new RegExp('\\b' + hash.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', "gi");

// Recorre todos los elementos de contenido y resalta la palabra buscada
Array.from(contenido.getElementsByTagName("*")).forEach(element => {
    if (element.id && element.id.match(regex)) {
        element.innerHTML = element.innerHTML.replace(regex, '<span class="highlight">$&</span>');
    }
});
 