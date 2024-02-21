document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});
 
function iniciarApp() {
 
    crearGaleria();
 
}
 

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
 
    for(let i = 1; i <= 6; i++ ) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/assets/images/small/${i}.jpg" type="image/jpg">
            <source srcset="build/assets/images/small/${i}.webp" type="image/webp">
            <img loading="lazy" width="500" height="500" src="assets/images/small/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
 
        galeria.appendChild(imagen);
    }
}  
 
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/assets/images/big/${id}.jpg" type="image/jpg">
        <source srcset="build/assets/images/big/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="assets/images/big/${id}.jpg" alt="imagen galeria">
    `;
 
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
 
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);
 
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}