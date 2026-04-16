/* --- CREAR EVENTO ---*/

//AddEventListener es el atributo que nos permite crear un evento

const caja = document.querySelector('#caja')

caja.addEventListener('click', (ev) => {

    console.log(ev.target); //Propiedad que nos devuelve el elemento que ha disparado el evento
    console.log('click en la caja');
})
//En este caso hemos creado un evento con una función que se declara dentro del propio evento.

caja.addEventListener('click', () => {
    mostrarMensaje('mensaje desde la funcion');
})

const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
}
// En este caso hemos creado un evento con una función que se declara fuera del propio evento.


/* --- TIPOS DE EVENTOS ---*/

/* https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events 
https://developer.mozilla.org/es/docs/Web/Events */


/*--- MODIFICAR VALORES PREDETERMINADOS DE UN EVENTO ---*/

caja.addEventListener('click', (ev) => {
    ev.preventDefault(); //Evitamos el comportamiento por defecto del navegador
    console.log('click en la caja');
})

//Esto podríamos aplicarlo en un formulario para evitar el comportamiento por defecto de enviar el formulario.


/*--- DELEGACIÓN DE EVENTOS ---*/
