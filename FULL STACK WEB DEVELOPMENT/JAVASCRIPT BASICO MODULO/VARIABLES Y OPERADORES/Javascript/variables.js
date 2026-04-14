alert("Hola mundo desde js")

// las variables son contenedores de información, pueden contener cualquier tipo de dato, como números, texto, booleanos, etc. En JavaScript, existen tres formas principales de declarar variables: var, let y const.

// var: es la forma más antigua de declarar variables en JavaScript. Las variables declaradas con var tienen un alcance global o de función, lo que significa que pueden ser accedidas desde cualquier parte del código. Sin embargo, var tiene algunas limitaciones y puede causar problemas de hoisting (elevación), lo que puede llevar a errores difíciles de depurar.
// let: es una forma más moderna de declarar variables en JavaScript. Las variables declaradas con let tienen un alcance de bloque, lo que significa que solo pueden ser accedidas dentro del bloque de código donde fueron declaradas. Esto ayuda a evitar problemas de hoisting y hace que el código sea más fácil de entender y depurar.
// const: es otra forma de declarar variables en JavaScript. Las variables declaradas con const también tienen un alcance de bloque, pero a diferencia de let, no pueden ser reasignadas después de su declaración. Esto significa que una vez que se le asigna un valor a una variable const, ese valor no puede cambiar. Sin embargo, si el valor asignado es un objeto o un array, sus propiedades o elementos pueden ser modificados.

var nombreAlumno;
nombreAlumno = "Miguel"
console.log(nombreAlumno)

nombreAlumno = "Juan"
console.log(nombreAlumno)

var edadAlumno = 25
console.log(edadAlumno)

const pi = 3.1416
console.log(pi)

// pi = 3.14 
//Esto dará un error porque pi es una constante y no se puede reasignar un nuevo valor
console.log(pi)


/* FUNCIONES */

var num1 = 5

function mostrarDato() {
    
    var num2 = 10

    console.log(num1 + "en la funcion")

    if (true==true) {
        var num3 = 15
        console.log(num1 + "en la condicional")
    }

    console.log(num3 + "fuera de la condicional pero dentro de la funcion")
    // En este caso, num3 se declara con var dentro de la condicional if, pero debido a que var tiene un alcance de función, num3 es accesible en toda la función mostrarDato(), incluso fuera de la condicional if. Por lo tanto, el valor de num3 se imprimirá correctamente dentro de la función mostrarDato().
    // Si delcaramos num 3 como let, entonces no se podrá acceder a num3 fuera de la condicional if, ya que let tiene un alcance de bloque. En ese caso, intentar acceder a num3 fuera de la condicional if resultará en un error de referencia.
}

if (true==true) {
    console.log(num1 + "en la condicional 2")
}

mostrarDato()

console.log(num1 + "Desde fuera de la funcion")
// En este ejemplo, la variable num1 se declara con var y tiene un alcance global. Esto significa que puede ser accedida desde cualquier parte del código, incluyendo dentro de la función mostrarDato() y dentro de las condicionales if. Por lo tanto, el valor de num1 se imprimirá correctamente en todas las partes del código donde se hace referencia a ella.

// console.log(num2 + "Desde fuera de la funcion")
//Esto dará un error porque num2 se declara con var dentro de la función mostrarDato() y tiene un alcance de función. Esto significa que solo puede ser accedida dentro de esa función y no desde fuera de ella. Por lo tanto, intentar acceder a num2 desde fuera de la función resultará en un error de referencia.


/* DATOS */

/*- Tipos primitivos -*/

let edad = 25 //Tipo number
let nombre = "Miguel" //Tipo string
let esEstudiante = true //Tipo boolean
let valor //Tipo undefined
let objeto = null;

console.log(typeof edad)
console.log(typeof nombre)
console.log(typeof esEstudiante)
console.log(typeof valor)
console.log(typeof objeto)
// El operador typeof se utiliza para obtener el tipo de dato de una variable en JavaScript. En este caso, se imprimirá el tipo de cada variable en la consola.

/*-Tipo object-*/

// Objetos: Los objetos son estructuras de datos que pueden contener múltiples valores y propiedades. Se definen utilizando llaves {} y pueden tener propiedades y métodos.
// Arrays: Los arrays son un tipo especial de objeto que se utilizan para almacenar una colección de elementos. Se definen utilizando corchetes [] y pueden contener cualquier tipo de dato, incluyendo otros arrays u objetos.


/* OPERADORES */

/*-Operadores aritméticos-*/

let num4 = 2
let num5 = 5

let total = num4 + num5 // podemos usar +, -, *, /, % para realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y módulo (resto de una división).
console.log("El total es " + total)

/*-Operadsores de asignación-*/

let saludo = "Hola"
saludo += " mundo" // El operador += se utiliza para concatenar cadenas de texto. En este caso, se agrega la cadena " mundo" al valor actual de la variable saludo "Hola", resultando en "Hola mundo".
console.log(saludo)

let num6 = 10
num6 += 5 // El operador += también se puede utilizar para realizar operaciones aritméticas. En este caso, se suma 5 al valor actual de num6 (10), resultando en 15. También se pueden usar otros operadores de asignación como -=, *=, /=, etc. para realizar diferentes operaciones aritméticas y asignar el resultado a la variable.
console.log(num6)

/*-Operadores de comparación-*/

// == : El operador de igualdad (==) compara dos valores y devuelve true si son iguales, sin importar su tipo. Por ejemplo, 5 == "5" devolverá true porque ambos valores son considerados iguales, aunque uno es un número y el otro es una cadena de texto.
// === : El operador de igualdad estricta (===) compara dos valores y devuelve true solo si son iguales y del mismo tipo. Por ejemplo, 5 === "5" devolverá false porque aunque los valores son iguales, tienen tipos diferentes (número y cadena de texto).

// != : El operador de desigualdad (!=) compara dos valores y devuelve true si no son iguales, sin importar su tipo. Por ejemplo, 5 != "5" devolverá false porque ambos valores son considerados iguales, aunque uno es un número y el otro es una cadena de texto.
// !== : El operador de desigualdad estricta (!==) compara dos valores y devuelve true solo si no son iguales o no son del mismo tipo. Por ejemplo, 5 !== "5" devolverá true porque aunque los valores son iguales, tienen tipos diferentes (número y cadena de texto).

// > : El operador de mayor que (>) compara dos valores y devuelve true si el valor de la izquierda es mayor que el valor de la derecha. Por ejemplo, 5 > 3 devolverá true.
// < : El operador de menor que (<) compara dos valores y devuelve true si el valor de la izquierda es menor que el valor de la derecha. Por ejemplo, 5 < 10 devolverá true.
// >= : El operador de mayor o igual que (>=) compara dos valores y devuelve true si el valor de la izquierda es mayor o igual que el valor de la derecha. Por ejemplo, 5 >= 5 devolverá true.
// <= : El operador de menor o igual que (<=) compara dos valores y devuelve true si el valor de la izquierda es menor o igual que el valor de la derecha. Por ejemplo, 5 <= 10 devolverá true.

/*-Operadores lógicos-*/

// && : El operador lógico AND (&&) devuelve true si ambos operandos son verdaderos. Por ejemplo, true && true devolverá true, mientras que true && false devolverá false.
// || : El operador lógico OR (||) devuelve true si al menos uno de los operandos es verdadero. Por ejemplo, true || false devolverá true, mientras que false || false devolverá false.
// ! : El operador lógico NOT (!) devuelve el valor opuesto del operando. Por ejemplo, !true devolverá false, mientras que !false devolverá true.