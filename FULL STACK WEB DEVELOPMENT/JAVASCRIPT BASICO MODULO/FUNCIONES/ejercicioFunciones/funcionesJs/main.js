/*--EJERCICIO 1--*/

/*function saludar(nombre) {
    return "¡Hola " + nombre + "!";
}*/

const saludar = nombre => `¡Hola ${nombre}!`; //Funcion flecha equivalente a la funcion tradicional saludar.
console.log(saludar("Mauro"));

/*--EJERCICIO 2--*/

/*function sumar(num1, num2) {
    return num1 + num2; 
}*/

const sumar = (num1, num2) => num1 + num2; //Funcion flecha equivalente a la funcion tradicional sumar.
const resultado = sumar(5, 3); //almacena el resultado de la funcion sumar con los argumentos 5 y 3 en la variable resultado.
console.log(resultado); //imprime el resultado almacenado en la variable resultado.


/*--EJERCICIO 3--*/

/*function esPar(num) {
    return num % 2 == 0;
}*/

const espar = num => num % 2 == 0; //Funcion flecha equivalente a la funcion tradicional esPar.
console.log(espar(5));

/*--EJERCICIO 4--*/

function mayorDeTres(num1, num2, num3) {
    //Verifica que los argumentos sean numeros antes de compararlos.
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        if(num1 > num2 && num1 > num3) {
            return num1;
        } else if(num2 > num1 && num2 > num3) {
            return num2;
        } else {
            return num3;
        }
    } else {
        return "Error: Todos los argumentos deben ser numeros.";
    }
}

//Existe un objeto Math en JavaScript que tiene un metodo max que devuelve el numero mayor entre los argumentos que se le pasen. Se puede utilizar este metodo para simplificar la funcion mayorDeTres.
/*function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}*/

console.log(mayorDeTres(5, 10, 3)); //imprime el numero mayor entre 5, 10 y 3 utilizando la funcion mayorDeTres.

/*--EJERCICIO 5--*/

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusAFahrenheit(0)); //imprime la temperatura en Fahrenheit equivalente a 0 grados Celsius utilizando la funcion celsiusAFahrenheit.