//Array que contiene la informacion sobre cada imagen del edificio
let images = [
    { src: 'edificio 1.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.337230.00'},
    { src: 'edificio 2.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.340000.00'},
    { src: 'edificio 3.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.350000.00'},
    { src: 'edificio 4.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.360000.00'},
    { src: 'edificio 5.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.370000.00'},
    { src: 'edificio 6.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.380000.00'},
    { src: 'edificio 7.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.390000.00'},
    { src: 'edificio 8.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.400000.00'},
    { src: 'edificio 9.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.410000.00'},
    { src: 'edificio 10.jpg', constructora: 'TALE CONSTRUCTORA SAC', precio: 's/.420000.00'},
];
//indice del imagen actual mostrada
let currentIndex = 0;

//declara los elementos del html por Ids
let proy_imag = document.getElementById('proyecto-imagen');
let constructora_elemento = document.getElementById('constructora');
let precio_elemento = document.getElementById('precio');
let area_elemento = document.getElementById('area');
let elemento_mensaje= document.getElementById('mensaje');

//funcion para actualizar detalles del proyecto segun el indice
function act_detalles_proyecto() {
    proy_imag.src = images[currentIndex].src;//actualiza la imagen
    constructora_elemento.textContent = images[currentIndex].constructora;//actualiza la constructora
    precio_elemento.textContent = images[currentIndex].precio;//actualiza el precuo
    elemento_mensaje.textContent = '';//limpia mensaje error
}

//muestra la imagen y detalles del proyecto anterior al hacer click en el boton ant
document.getElementById('ant').onclick = () => {
    if (currentIndex > 0) {//verifica si no esta en la primera imagen
        currentIndex--;//resta el indice de la imagen
        act_detalles_proyecto();//actualiza los detalles del proyecto
    } else {
        elemento_mensaje.textContent = 'Ya estás en la primera imagen.';//muestra mensaje si esta en la primera imagen
    }
};

//muestra la imagen y detalles del proyecto siguiente al hacer click en el boton desp
document.getElementById('desp').onclick = () => {
    if (currentIndex < images.length - 1) {//verifica si no esta en la ultima imagen
        currentIndex++;//aumenta el indice de la imagen
        act_detalles_proyecto();//actualiza los detalles del proyecto
    } else {
        elemento_mensaje.textContent = 'Ya estás en la última imagen.';//muestra mensaje si esta en la primera imagen
    }
};

//inicia la visualizacion de los detalles del proyecto
act_detalles_proyecto();
