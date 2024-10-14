
// Cambiar entre vistas 1x1 y 3x3
document.getElementById('view1x1').addEventListener('click', function() {
  // Cambiar las imágenes a formato 1x1 (vertical)
  var images = document.getElementById('imageGrid').children;
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('col-md-4');
    images[i].classList.add('col-12');
  }

  // Estilo para el botón activo
  document.getElementById('view1x1').classList.add('active-view');
  document.getElementById('view3x3').classList.remove('active-view');
});

document.getElementById('view3x3').addEventListener('click', function() {
  // Cambiar las imágenes a formato 3x3
  var images = document.getElementById('imageGrid').children;
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('col-12');
    images[i].classList.add('col-md-4');
  }

  // Estilo para el botón activo
  document.getElementById('view3x3').classList.add('active-view');
  document.getElementById('view1x1').classList.remove('active-view');
});
