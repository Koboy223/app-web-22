function toggleModoNocturno() {
    document.body.classList.toggle('modo-nocturno');

    // Guardar el estado del modo nocturno en una cookie
    var modoNocturno = document.body.classList.contains('modo-nocturno');
    document.cookie = `modoNocturno=${modoNocturno}`;
}
