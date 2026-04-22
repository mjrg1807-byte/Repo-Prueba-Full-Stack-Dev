/*--LOCAL STORAGE--*/
// El localStorage es un objeto que permite almacenar datos de forma persistente en el navegador del usuario. Los datos almacenados en localStorage permanecen incluso después de cerrar el navegador o apagar el dispositivo.

// Almacenar un valor en el localStorage
localStorage.setItem("nombre", "Juan");


// Obtener el valor almacenado
const nombre = localStorage.getItem("nombre");
console.log(nombre); // Imprime "Juan"


// Eliminar un elemento del almacenamiento
localStorage.removeItem("nombre");

localStorage.setItem('alumno1')
localStorage.setItem('alumno2')
localStorage.setItem('alumno3')

localStorage.clear() // Elimina todos los elementos del almacenamiento

/*--SESSION STORAGE--*/
// El sessionStorage es similar al localStorage, pero los datos almacenados en sessionStorage solo permanecen durante la sesión del navegador. Una vez que se cierra el navegador, los datos almacenados en sessionStorage se eliminan automáticamente.


// Almacenar un valor en el sessionStorage
sessionStorage.setItem("usuario", "Maria");

// Obtener el valor almacenado
const usuario = sessionStorage.getItem("usuario");
console.log(usuario); // Imprime "Maria"

// Eliminar un elemento del almacenamiento
sessionStorage.removeItem("usuario");

sessionStorage.setItem('alumno1')
sessionStorage.setItem('alumno2')
sessionStorage.setItem('alumno3')   

sessionStorage.clear() // Elimina todos los elementos del almacenamiento


/*-- USOS--*/

const guardarDatos = () => {
    const alumno = {
        apellido: "Perez",
        nombre: "Juan",
        edad: 25
    }
    localStorage.setItem('alumno', JSON.stringify(alumno)) // El método JSON.stringify() convierte un objeto JavaScript en una cadena JSON, lo que permite almacenar objetos complejos en el localStorage.
}

const recuperarDatos = () => {
    const alumnoRecuperado = JSON.parse(localStorage.getItem('alumno')) // El método JSON.parse() convierte una cadena JSON en un objeto JavaScript, lo que permite recuperar objetos complejos almacenados en el localStorage.
    console.log(alumnoRecuperado)
}