const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad')
const ciudad = document.getElementById('ciudad')

const cambiarNombre = (texto) => nombre.textContent = texto
const cambiarEdad = (texto) => edad.textContent = texto
const cambiarCiudad = (texto) => ciudad.textContent = texto

const ejecutar = (nombreTexto, edadTexto, ciudadTexto) => {
    cambiarNombre (nombreTexto);
    cambiarEdad(edadTexto);
    cambiarCiudad(ciudadTexto)
}

ejecutar ("Mauro", 22, "Tenerife")