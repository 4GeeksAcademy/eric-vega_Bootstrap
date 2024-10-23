// Obtener los botones de vista y el contenedor de imágenes
const view1x1Button = document.getElementById('view1x1');
const view3x3Button = document.getElementById('view3x3');
const imageGrid = document.getElementById('imageGrid');

// Función para cambiar a vista 1x1 (Por defecto, ya se ven así)
view1x1Button.addEventListener('click', function() {
  const images = imageGrid.getElementsByClassName('post-card');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('col-md-4'); // Quitar la clase de 3 columnas
    images[i].classList.add('col-md-12', 'mx-auto'); // Volver a 1x1 con columnas centradas
    images[i].style.display = 'flex';
    images[i].style.flexDirection = 'column';

    // Mostrar los títulos, likes, fechas y descripción
    images[i].querySelector('.card-header').classList.remove('hide-text');
    images[i].querySelector('.card-body').classList.remove('hide-text');
  }
  view1x1Button.classList.add('active-view');
  view3x3Button.classList.remove('active-view');
});

// Función para cambiar a vista 3x3
view3x3Button.addEventListener('click', function() {
  const images = imageGrid.getElementsByClassName('post-card');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('col-md-12', 'mx-auto'); // Quitar la clase de 1x1
    images[i].classList.add('col-md-4'); // Añadir clase de 3 columnas para vista 3x3
    images[i].style.display = 'block';

    // Ocultar los títulos, likes, fechas y descripción
    images[i].querySelector('.card-header').classList.add('hide-text');
    images[i].querySelector('.card-body').classList.add('hide-text');
    images[i].querySelector('img').style.marginBottom = '0px';
    images[i].querySelector('img').style.height = '240px';
  }
  view3x3Button.classList.add('active-view');
  view1x1Button.classList.remove('active-view');
});

