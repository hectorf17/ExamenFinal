//funcion para obtener un color hexadecimal aleatorio
function obtener_color_aleatorio() {
    let letras = '0123456789ABCDEF';//caracteres validos en un color hexadecimal
    let color = '#';//inicia el valor del color
    for (let i = 0; i < 6; i++) {//genera 6 caracteres aleatorios
        color += letras[Math.floor(Math.random() * 16)];//añade un caracter aleatorio a la cadena de color
    }
    return color;//retorna el color generado
}

//funcion para cambiar el color del documento y mostrar el generado
function cambiar_color() {
    const nuevo_color = obtener_color_aleatorio();//obtiene un nuevo color aleatorio    
    document.body.style.backgroundColor = nuevo_color;//cambia el color del fondo del cdocumento
    document.getElementById('colordisplay').textContent = nuevo_color;//muestra el color generado en el elemento de id =>"display"
}
