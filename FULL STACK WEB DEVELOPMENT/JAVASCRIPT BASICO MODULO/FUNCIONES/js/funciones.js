/*---FUNCIONES DECLARADAS---

Las funciones declaradas son aquellas que se definen utilizando la palabra clave "function" seguida del nombre de la funcion y un bloque de codigo entre llaves. Estas funciones pueden ser llamadas antes de su definicion en el codigo debido a que son "hoisted" (elevadas) al inicio del contexto de ejecucion.
function nombreFuncion(){
    //codigo a ejecutar
}
nombreFuncion(); //llamada a la funcion
*/

function sumar(num1, num2){
    let total = num1 + num2; //suma los dos numeros y guarda el resultado en la variable total
    
    return total; //retorna el resultado de la suma
}
console.log(sumar(2, 3)); //imprime el resultado de la funcion sumar con los argumentos 2 y 3
console.log(sumar(10, 5)); //imprime el resultado de la funcion sumar con los argumentos 10 y 5
//la funcion sumar se puede reutilizar con diferentes argumentos para obtener diferentes resultados

/*---FUNCIONES EXPRESADAS---

La diferencia entre una funcion declarada y una funcion expresada es que la funcion declarada se puede llamar antes de su definicion en el codigo, mientras que la funcion expresada no se puede llamar antes de su definicion. Esto se debe a que las funciones declaradas son "hoisted" (elevadas) al inicio del contexto de ejecucion, mientras que las funciones expresadas no lo son.

const nombreFuncion = function(){
    //codigo a ejecutar
}
nombreFuncion(); //llamada a la funcion
*/

const multiplicar = function(num1, num2){
    return num1 * num2; //retorna el resultado de la multiplicacion de los dos numeros
}
console.log(multiplicar(4, 5)); //imprime el resultado de la funcion multiplicar con los argumentos 4 y 5

/*---FUNCIONES FLECHA---

Las funciones flecha son una forma mas concisa de escribir funciones en JavaScript. Se introdujeron en ES6 y tienen una sintaxis mas corta que las funciones tradicionales. Las funciones flecha no tienen su propio contexto de "this", lo que las hace utiles para ciertos casos, como cuando se trabaja con objetos o con funciones de orden superior.

const nombreFuncion = (param1, param2) => {
    //codigo a ejecutar
}
nombreFuncion(); //llamada a la funcion
*/

const dividir = (num1, num2) => num1 / num2 //Se puede omitir el bloque de codigo y el return si la funcion solo tiene una expresion.
console.log(dividir(10, 2)); //imprime el resultado de la funcion dividir con los argumentos 10 y 2.

const mostrarMensaje = mensaje => mensaje; //Si la funcion solo tiene un parametro, se pueden omitir los parentesis.
console.log(mostrarMensaje("Hola, mundo!")); //imprime el mensaje "Hola, mundo!" utilizando la funcion mostrarMensaje.

/*---FUNCIONES CALLBACK---

Las funciones callback son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que la funcion principal ha terminado su tarea. Las funciones callback son comunes en JavaScript, especialmente en operaciones asincronas como la manipulacion del DOM, las solicitudes HTTP y los eventos.

function funcionPrincipal(callback){
    //codigo a ejecutar
    callback(); //se llama a la funcion callback despues de que la funcion principal ha terminado su tarea.
}
*/

function calcular(num1, num2, cb){

    cb(num1, num2);
    console.log(cb(num1,num2))
}

calcular(2,3, (num1, num2) => num1 + num2); //imprime el resultado de la suma de 2 y 3 utilizando una funcion callback flecha.
calcular(10,5, (num1, num2) => num1 * num2); //imprime el resultado de la multiplicacion de 10 y 5 utilizando una funcion callback flecha.
 
//Otro Ejemplo

function saludar(nombre) {
    return "Hola " + nombre;
}

function procesarUsuario(callback) {
    console.log(callback("Mauro"));
}

procesarUsuario(saludar); //imprime el mensaje "Hola Mauro" utilizando la funcion callback saludar.
