/*  --- IF ---
if(condicion){
Bloque de código a ejecutar si la condición es verdadera
}
*/

let edad = 18;

if(edad >= 18){
    console.log("Eres mayor de edad");
}

console.log("Fuera del if");    // El código fuera del if se ejecuta siempre, independientemente de la condición del if.

/* --- IF ELSE ---
if(condicion){
Bloque de código a ejecutar si la condición es verdadera
} else {
Bloque de código a ejecutar si la condición es falsa
}

Else no se asigna ninguna condición, se ejecuta si la condición del if es falsa.
*/

let edad2 = 17;

if(edad2 >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

console.log("Fuera del if else");

/* --- IF ELSE IF ---
if(condicion1){
Bloque de código a ejecutar si la condición1 es verdadera
} else if (condicion2){
Bloque de código a ejecutar si la condición2 es verdadera
}

Este patrón se puede repetir tantas veces como sea necesario, pero siempre debe finalizar con un else para cubrir el caso en el que ninguna de las condiciones anteriores se cumpla.
*/

let edad3 = 25;

if(edad3 < 18){
    console.log("Eres menor de edad");
} else if (edad3 >= 18 && edad3 < 65){  // El operador lógico && se utiliza para combinar dos condiciones, en este caso, para verificar si la edad es mayor o igual a 18 y menor a 65.
    console.log("Eres adulto");
} else {
    console.log("Eres adulto mayor");
}

/* --- SWITCH ---
La diferencia principal entre switch y if else es que switch se utiliza para comparar una expresión con múltiples valores posibles, mientras que if else se utiliza para evaluar condiciones booleanas. Switch es más adecuado cuando se tiene una variable que puede tomar varios valores específicos, mientras que if else es más flexible y se puede utilizar para evaluar cualquier tipo de condición.

switch(expresion){
case valor1:
     Código a ejecutar si la expresión coincide con valor1
    break;
case valor2:
     Código a ejecutar si la expresión coincide con valor2
    break;
default:
     Código a ejecutar si la expresión no coincide con ninguno de los casos anteriores
}

Si no ponemos el break, el código seguirá ejecutándose en los casos siguientes, incluso si no coinciden con la expresión. Esto se llama "fall through" y puede ser útil en algunos casos, pero también puede causar errores si no se maneja correctamente.
*/

let dia = "Viernes";

switch(dia){
    case "Lunes":
        console.log("Hoy es lunes");
        console.log("¡Feliz inicio de semana!");
        break;
    case "Martes":
        console.log("Hoy es martes");
        break;
    case "Miércoles":
        console.log("Hoy es miércoles");
        break;
    case "Jueves":
        console.log("Hoy es jueves");
        break; 
    case "Viernes":
        console.log("Hoy es viernes");
        console.log("Y el cuerpo lo sabe");
        break;
    case "Sábado":
        console.log("Hoy es sábado");
        break;
    case "Domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("No es un día válido");
}

/* --- TERNARIO ---
El operador ternario es una forma abreviada de escribir una estructura condicional if else. Se utiliza para asignar un valor a una variable en función de una condición.

condicion ? valorSiVerdadero : valorSiFalso;

Si la condición es verdadera, se asigna el valorSiVerdadero a la variable, de lo contrario, se asigna el valorSiFalso.
*/

let edad4 = 20;

let mensaje = edad4 >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
// En este ejemplo, si la edad es mayor o igual a 18, se asigna el mensaje "Eres mayor de edad" a la variable mensaje, de lo contrario, se asigna "Eres menor de edad".

console.log(mensaje);

let esCliente = false;
let esAdulto = false;

let mensaje2 = (esCliente == true) // Se puede omitir la comparación con true, ya que esCliente ya es una variable booleana. Entonces, simplemente se puede escribir: let mensaje2 = esCliente
    ? "Debes pagar 10€"
    : (esAdulto == true) // De nuevo, se puede omitir la comparación con true, quedando: : esAdulto
        ? "Envie su solicitud"
        : "Debes ser mayor de edad";
// En este ejemplo, si esCliente es true, se asigna "Debes pagar 10€" a mensaje2. Si esCliente es false, se evalúa la siguiente condición: si esAdulto es true, se asigna "Envie su solicitud" a mensaje2, de lo contrario, se asigna "Debes ser mayor de edad".

console.log(mensaje2);


//Tambien podemos declarar una variable sin asignarle un valor, y luego asignarle el valor utilizando el operador ternario:

let esCliente2 = false;
let mensaje3;

esCliente2 ? (mensaje3 = "Debes pagar 10€",
    console.log(mensaje3)
)
: (mensaje3 = "debes pagar 20€",
    console.log(mensaje3)
);
// En este ejemplo, se declara la variable mensaje3 sin asignarle un valor. Luego, se utiliza el operador ternario para asignar un valor a mensaje3 en función del valor de esCliente2. Si esCliente2 es true, se asigna "Debes pagar 10€" a mensaje3 y se imprime en la consola. Si esCliente2 es false, se asigna "debes pagar 20€" a mensaje3 y también se imprime en la consola.
