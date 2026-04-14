const titulo = document.getElementById ('titulo')

/*function tituloDinamico (title) {
    titulo.textContent = 'Bienvenido a mi Web'
}*/

const tituloDinamico = () => titulo.textContent = 'Bienvenido a mi web'

tituloDinamico ()

const descripcion = document.getElementById ('descripcion')

/*function descripcionDinamica (description) {
    descripcion.textContent = 'Contenido modificado con Javascript'
}*/

const descripcionDinamica = () => descripcion.textContent = 'Contenido modificado con Javascript'

descripcionDinamica ()

/*function cambioColor (title, description) {
    titulo.style.color = 'blue';
    descripcion.style.color = 'gray'
}*/

const cambioColor = () => {
    titulo.style.color = 'blue'
    descripcion.style.color = 'gray'
}

cambioColor()
