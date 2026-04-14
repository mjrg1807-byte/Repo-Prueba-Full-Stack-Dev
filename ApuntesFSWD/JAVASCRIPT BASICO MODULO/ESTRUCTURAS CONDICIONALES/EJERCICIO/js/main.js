// EJERCICIO: Dado un número, determinar si es positivo, negativo o cero.
let ej1 = 0;
let positivo = "Es positivo";
let negativo = "Es negativo";
let cero = "Es cero";

if(ej1 > 0){
    console.log(positivo);
} else if(ej1 < 0){
    console.log(negativo);
} else {
    console.log(cero);
}

//EJERCICIO: Edad para votar
let edad = 18;
let votar = "Puedes votar";
let noVotar = "No puedes votar";

if(edad >= 18){
    console.log(votar);
} else {
    console.log(noVotar);
}

// EJERCICIO: Mayor entre dos números o igualdad
let num1 = 10;
let num2 = 20;

if(num1 > num2){
   // console.log("El número mayor es: " + num1);  Sería la forma tradicional de concatenar, pero también se puede usar template literals para una sintaxis más limpia y legible.
    console.log( `El número mayor es: ${num1}`); // Otra forma de concatenar usando template literals
} else if(num2 > num1){
   // console.log("El número mayor es: " + num2);
    console.log( `El número mayor es: ${num2}`); // Otra forma de concatenar usando template literals
} else {
    console.log("Los números son iguales");
}

// EJERCICIO: Determinar si un número es divisible por 5
let divisible = 25;
if(divisible % 5 === 0){
    console.log("El número es divisible por 5, True");
} else {
    console.log("El número no es divisible por 5, False");
}

// EJERCICIO: Calificación de un estudiante


/* --SOLUCIÓN VÁLIDA, PERO POCO EFICIENTE--

let calificacion = 99;
let insuficiente = "Insuficiente";
let regular = "Regular";
let buena = "Buena";
let excelente = "Excelente";

switch(calificacion){
    case 0:
        console.log(insuficiente);
        break;
    case 1:
        console.log(insuficiente);
        break;
    case 2:
        console.log(insuficiente);
        break;
    case 3:
        console.log(insuficiente);
        break;
    case 4:
        console.log(insuficiente);
        break;
    case 5:
        console.log(regular);
        break;
    case 6:
        console.log(regular);
        break;
    case 7:
        console.log(buena);
        break;
    case 8:
        console.log(buena);
        break;
    case 9:
        console.log(excelente);
        break;
    case 10:
        console.log(excelente);
        break;
    default:
        console.log("Calificación no válida");
}
*/

let calificacion = 99;
let resultado;

if (calificacion >= 0 && calificacion <= 4) {
    resultado = "Insuficiente";
} else if (calificacion <= 6) {
    resultado = "Regular";
} else if (calificacion <= 8) {
    resultado = "Buena";
} else if (calificacion <= 10) {
    resultado = "Excelente";
} else {
    resultado = "Calificación no válida";
}

console.log(resultado);

