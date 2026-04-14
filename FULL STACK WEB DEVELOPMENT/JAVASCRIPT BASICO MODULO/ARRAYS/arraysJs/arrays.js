            //   0         1           2         3   -- índice (siempre empieza en 0)
let frutas = ["Banana", "Manzana", "Naranja", "Uva"];

console.log(frutas); // Imprime el array completo
console.log(frutas[0]); // Imprime "Banana"
console.log(frutas[2]); // Imprime "Naranja"


/*-- MODIFICAR UN ELEMENTO DEL ARRAY--*/


frutas[1] = "Pera"; // Cambia "Manzana" por "Pera"
console.log(frutas); // Imprime el array actualizado = ["Banana", "Pera", "Naranja", "Uva"]

console.log(frutas.length); // Imprime la longitud del array (4)


/*-- AGREGAR UN NUEVO ELEMENTO AL FINAL DEL ARRAY (push) --*/


frutas.push("Kiwi");
console.log(frutas); // Imprime el array actualizado = ["Banana", "Pera", "Naranja", "Uva", "Kiwi"]

//const nuevoElemento = frutas.push("Kiwi") -- Tambien se puede realizar mediante una variable, pero no es necesario, ya que el método push() modifica el array original y devuelve la nueva longitud del array, no el elemento agregado.


/*-- ELIMINAR EL ÚLTIMO ELEMENTO DEL ARRAY (pop) --*/


frutas.pop();
console.log(frutas); // Imprime el array actualizado = ["Banana", "Pera", "Naranja", "Uva"]

//const elementoEliminado = frutas.pop() -- Tambien se puede realizar mediante una variable, ya que el método pop() devuelve el elemento eliminado del array. En este caso, elementoEliminado retornará "Kiwi".


/*-- ELIMINAR EL PRIMER ELEMENTO DEL ARRAY (shift) --*/


frutas.shift();
console.log(frutas); // Imprime el array actualizado = ["Pera", "Naranja", "Uva"]

//const primerElementoEliminado = frutas.shift() -- Tambien se puede realizar mediante una variable, ya que el método shift() devuelve el elemento eliminado del array. En este caso, primerElementoEliminado retornará "Pera".


/*-- AGREGAR UN NUEVO ELEMENTO AL INICIO DEL ARRAY (unshift) --*/


frutas.unshift("Fresa");
console.log(frutas); // Imprime el array actualizado = ["Fresa", "Pera", "Naranja", "Uva"]

//const nuevoPrimerElemento = frutas.unshift("Fresa") -- Tambien se puede realizar mediante una variable, pero no es necesario, ya que el método unshift() modifica el array original y devuelve la nueva longitud del array, no el elemento agregado.


/*-- AÑADIR, ELIMINAR O REEMPLAZAR ELEMENTOS EN CUALQUIER POSICIÓN DEL ARRAY (splice) --*/


//array.splice(inicio, cantidad, elemento1, elemento2...)

/*Caso 1: Eliminar elementos a partir de un índice específico*
let numeros = [1, 2, 3, 4, 5];

numeros.splice(1, 2); // Elimina 2 elementos a partir del índice 1
console.log(numeros); // Imprime [1, 4, 5]*/

/*Caso 2: Agregar elementos a partir de un índice específico*
let nombres = ["Mauro", "Juan", "Ana"];

nombres.splice(1, 0, "Luis"); // Agrega "Luis" en el índice 1 sin eliminar ningún elemento
console.log(nombres); // Imprime ["Mauro", "Luis", "Juan", "Ana"]*/

/*Caso 3: Reemplazar elementos a partir de un índice específico*
let colores = ["Rojo", "Verde", "Azul"];
colores.splice(1, 1, "Amarillo"); // Reemplaza "Verde" con "Amarillo" en el índice 1
console.log(colores); // Imprime ["Rojo", "Amarillo", "Azul"]*/

frutas.splice(2, 1, "Melón"); // Reemplaza "Naranja" con "Melón" en el índice 2
console.log(frutas); // Imprime el array actualizado = ["Fresa", "Pera", "Melón", "Uva"]


/*-- MEZCLAR DOS ARRAYS (concat) --*/


let verduras = ["Lechuga", "Tomate", "Zanahoria"];
let alimentos = frutas.concat(verduras);
console.log(alimentos); // Imprime el array combinado = ["Fresa", "Pera", "Melón", "Uva", "Lechuga", "Tomate", "Zanahoria"]


/*-- DELIMITAR UN ARRAY EN UNA CADENA DE TEXTO (join) --*/


let frutasString = frutas.join(", ");
console.log(frutasString); // Imprime "Fresa, Pera, Melón, Uva" - El método join() convierte el array en una cadena de texto, utilizando el separador especificado (en este caso, una coma seguida de un espacio) entre los elementos del array.


/*-- CREAR UN NUEVO ARRAY A PARTIR DE ELEMENTOS FILTRADOS --*/


/*array.filter(function(elemento) {
  return condicion;
});
*/

let numeros = [1, 2, 3, 4, 5];

let pares = numeros.filter(function(num) {
  return num % 2 === 0;
});
console.log(pares); // Imprime [2, 4] - El método filter() crea un nuevo array con todos los elementos que cumple con la condición especificada.
// Tambien se puede realizar mediante una función flecha: let pares = numeros.filter(num => num % 2 === 0);


/*-- REDUCIR UN ARRAY A UN SOLO VALOR (reduce) --*/


/*array.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
}, valorInicial);
*/
let suma = numeros.reduce(function(acumulador, num) {
  return acumulador + num;
}, 0);
console.log(suma); // Imprime 15 - El método reduce() ejecuta una función reductora sobre cada elemento del array, resultando en un único valor acumulado. En este caso, se suma todos los números del array, comenzando con un valor inicial de 0.
// Tambien se puede realizar mediante una función flecha: let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);


/*-- ENCONTRAR EL PRIMER ELEMENTO QUE CUMPLE UNA CONDICIÓN (find) --*/


/*array.find(function(elemento) {
  return condicion;
});
*/
let numeroMayorQueTres = numeros.find(function(num) {
  return num > 3;
});
console.log(numeroMayorQueTres); // Imprime 4 - El método find() devuelve el primer elemento del array que cumple con la condición especificada. En este caso, devuelve el primer número que es mayor que 3.
// Tambien se puede realizar mediante una función flecha: let numeroMayorQueTres = numeros.find(num => num > 3);


/*--VERIFICAR SI EXISTE UN ELEMENTO CONCRETO EN EL ARRAY (includes) --*/


/*array.includes(elemento);
*/
let tieneCuatro = numeros.includes(4);
console.log(tieneCuatro); // Imprime true - El método includes() determina si un array incluye un determinado elemento, devolviendo true o false según corresponda. En este caso, verifica si el número 4 está presente en el array numeros.

let hayPiña = frutas.includes("Piña");
console.log(hayPiña); // Imprime false - El método includes() determina si un array incluye un determinado elemento, devolviendo true o false según corresponda. En este caso, verifica si la fruta "Piña" está presente en el array frutas.
let hayPera = frutas.includes("pera");
console.log(hayPera); // Imprime false - El método includes() determina si un array incluye un determinado elemento, devolviendo true o false según corresponda. En este caso, verifica si la fruta "pera" está presente en el array frutas. Es importante destacar que el método includes() es sensible a mayúsculas y minúsculas, por lo que "pera" no se considera igual a "Pera".


/*-- RECORRER UN ARRAY (forEach) --*/


/*array.forEach(function(elemento, índice, array) {
  // código a ejecutar para cada elemento
});
*/

frutas.forEach(function(fruta) {
  console.log(fruta);
}); // Imprime cada fruta del array en la consola.
// Tambien se puede realizar mediante una función flecha: frutas.forEach(fruta => console.log(fruta));


/*-- MAPEAR UN ARRAY A OTRO ARRAY (map) --*/


/*array.map(function(elemento, índice, array) {
  return nuevoElemento;
});
*/

let numerosDoblados = numeros.map(function(num) {
  return num * 2;
});
console.log(numerosDoblados); // Imprime [2, 4, 6, 8, 10] - El método map() crea un nuevo array con los resultados de la llamada a una función proporcionada aplicada a cada elemento del array original. En este caso, se multiplica cada número por 2 para crear un nuevo array de números doblados.
// Tambien se puede realizar mediante una función flecha: let numerosDoblados = numeros.map(num => num * 2);


/*--ARRAY MATRIZ (ARRAY DE ARRAYS) --*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceder a un elemento específico de la matriz: Debido a que la matriz es un array de arrays, se puede acceder a sus elementos utilizando dos índices: el primero para seleccionar el sub-array (fila) y el segundo para seleccionar el elemento dentro de ese sub-array (columna), teniendo en cuenta que los índices comienzan en 0.
console.log(matriz[0][1]); // Imprime 2 - Accede al elemento en la primera fila (índice 0) y segunda columna (índice 1) de la matriz.
console.log(matriz[2][0]); // Imprime 7 - Accede al elemento en la tercera fila (índice 2) y primera columna (índice 0) de la matriz.

//Para modificar un elemento específico de la matriz, se puede asignar un nuevo valor utilizando los mismos índices para acceder al elemento deseado.
matriz[1][2] = 10; // Cambia el elemento en la segunda fila (índice 1) y tercera columna (índice 2) de la matriz a 10
console.log(matriz); // Imprime la matriz actualizada = [[1, 2, 3], [4, 5, 10], [7, 8, 9]]


/*-- APLANAR UN MATRIZ (flat) --*/


let aplanada = matriz.flat();
console.log(aplanada); // Imprime [1, 2, 3, 4, 5, 10, 7, 8, 9] - El método flat() crea un nuevo array con todos los elementos de sub-array concatenados en él. En este caso, aplanamos la matriz de 2 dimensiones en un solo array de una dimensión.