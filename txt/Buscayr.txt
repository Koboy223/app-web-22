
async function searchFunction() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const urls = ['index.html', 'Añadir.html', 'page2.html']; // Lista de URLs de las páginas
    const preview = document.getElementById("preview");
    preview.innerHTML = "";
    let count = 0; // Contador para limitar los resultados a 2
    let shownResults = new Set(); // Conjunto para almacenar los resultados mostrados sin duplicados

    if (input === '') {
        return; // No hacer nada si el campo de búsqueda está vacío
    }

    for (const url of urls) {
        const response = await fetch(url);
        const text = await response.text();

        const matches = text.match(new RegExp(input, 'gi'));

        if (matches) {
            matches.forEach(async match => {
                const lowerMatch = match.toLowerCase();
                if (!shownResults.has(lowerMatch)) {
                    const result = document.createElement('div');
                    result.classList.add('result');
                    const link = document.createElement('a');
                    link.href = `${url}#${lowerMatch}`;
                    link.textContent = match;
                    result.appendChild(link);

                    // Buscar imagen en el contenido de la página
                    const imageRegex = new RegExp(`<img[^>]*?id\\s*=\\s*["'][^"']*${match.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')}[^"']*["'][^>]*>`, 'gi');
                    const imageMatch = text.match(imageRegex);
                    if (imageMatch) {
                        const imageElement = document.createElement('div');
                        imageElement.innerHTML = imageMatch[0];
                        const imageLink = document.createElement('a');
                        const imageId = imageElement.firstChild.id;
                        imageLink.href = `${url}#${imageId}`;
                        imageLink.appendChild(imageElement.firstChild);
                        result.appendChild(imageLink);
                    }

                    preview.appendChild(result);
                    shownResults.add(lowerMatch);
                    count++;
                }
            });
        }
    }

    if (count === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.textContent = "No hay resultados.";
        preview.appendChild(noResultsMessage);
    }
}
