/*---OPERADOR REST---*/
//El operador rest se utiliza para representar un número indefinido de argumentos como un array. Se denota con tres puntos (...).

const mostrarColores = (...colores) => {
    console.log(colores);
}

mostrarColores("rojo", "verde", "azul")
//En este ejemplo, el operador rest se utiliza para capturar todos los argumentos pasados a la función mostrarColores en un array llamado colores. El resultado será:
//['rojo', 'verde', 'azul']

const arrayColores = ["rojo", "verde", "azul", "amarillo"];
const [color1, color2, ...restoColores] = arrayColores;
console.log(color1, color2, restoColores);
//En este ejemplo, el operador rest se utiliza para capturar el resto de los elementos del array después de asignar los primeros dos a color1 y color2. El resultado será:
//rojo verde ['azul', 'amarillo']


/*---OPERADOR SPREAD---*/
//El operador spread se utiliza para expandir elementos de un iterable (como un array o un objeto) en lugares donde se esperan múltiples elementos. También se denota con tres puntos (...).

const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];
console.log(masNumeros);
//En este ejemplo, el operador spread se utiliza para expandir los elementos del array numeros en el nuevo array masNumeros, resultando en [1, 2, 3, 4, 5].

const persona = {
    nombre: "Juan",
    edad: 30
};

const nuevaPersona = {...persona, ciudad: "Madrid"};
console.log(nuevaPersona);
//En este ejemplo, el operador spread se utiliza para expandir los elementos del objeto persona en el nuevo objeto nuevaPersona, resultando en {nombre: "Juan", edad: 30, ciudad: "Madrid"}.



const mostrarCosas = (cosas) => {
    console.log(cosas);
}

const arrayCosas = ["mesa", "silla", "lámpara", "sofá", "estantería"];

mostrarCosas(...arrayCosas);
//En este ejemplo, el operador spread se utiliza para expandir los elementos del array arrayCosas como argumentos individuales para la función mostrarCosas. El resultado será:
//mesa silla lámpara sofá estantería