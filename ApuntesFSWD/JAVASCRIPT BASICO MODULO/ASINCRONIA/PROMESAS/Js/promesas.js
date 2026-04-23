/*--PROMESAS--*/

/* Una promesa es un objeto que representa la eventual finalización o fracaso de una operación asíncrona y su valor resultante.
Una promesa puede estar en uno de los siguientes estados:
- Pendiente (pending): El estado inicial, antes de que la operación asíncrona se complete o falle.
- Cumplida (fulfilled): La operación asíncrona se completó exitosamente y la promesa tiene un valor resultante.
- Rechazada (rejected): La operación asíncrona falló y la promesa tiene una razón de rechazo.
*/

/*--Creación de una promesa--*/
const miPromesa = new Promise((resolve, reject) => {

    const ok = true; // Simulamos una operación asíncrona

    if(ok==true){
        resolve("La operación se completó exitosamente.");
    }else{
        reject("La operación falló.");
    }
});

const pruebaPromesa = () => {
    return miPromesa;
}



/*-- MÉTODOS DE LAS PROMESAS--*/

/*--then()--*/
/* El método then() se utiliza para manejar el resultado de una promesa cumplida. 
Recibe dos argumentos: una función de éxito (onFulfilled) y una función de error (onRejected). 
La función de éxito se ejecuta cuando la promesa se cumple, mientras que la función de error se ejecuta cuando la promesa se rechaza. */

/*--catch()--*/
/* El método catch() se utiliza para manejar el error de una promesa rechazada. 
Recibe una función de error (onRejected) que se ejecuta cuando la promesa se rechaza. */

/*--finally()--*/
/* El método finally() se utiliza para ejecutar una función después de que una promesa se haya cumplido o rechazado, independientemente del resultado. 
Recibe una función (onFinally) que se ejecuta después de que la promesa se haya resuelto o rechazado. */

pruebaPromesa()
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operación finalizada.");
    });

    