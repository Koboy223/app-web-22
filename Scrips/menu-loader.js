/*menu mostrable 
fetch('menu.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
  });*/
  fetch('menu.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });
  });
  //FUNCION DE EL MODO NOCTURNO
 // Función para cambiar el modo nocturno
function cambiarModoNocturno() {
  var modoNocturno = document.body.classList.toggle('modo-nocturno');
  document.cookie = 'modoNocturno=' + modoNocturno + '; path=/';
  // Redirigir a la misma página pero con el parámetro de modo nocturno
  window.location.href = window.location.pathname + '?modoNocturno=' + modoNocturno;
}

// Verificar si el modo nocturno está activado al cargar la página
window.addEventListener('DOMContentLoaded', function () {
  var modoNocturno = document.cookie.replace(/(?:(?:^|.*;\s*)modoNocturno\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (modoNocturno === 'true') {
      document.body.classList.add('modo-nocturno');
  }
});

      
// Aplicar el modo nocturno guardado en la cookie al cargar la página
window.addEventListener('load', function() {
  var cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
  }, {});

  if (cookies.modoNocturno === 'true') {
      document.body.classList.add('modo-nocturno');
  }
});

