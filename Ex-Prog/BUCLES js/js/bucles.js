/*--BUCLE DE NÚMEROS DEL 1 AL 20--*/
let resultado;

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        resultado = "FizzBuzz";
    } else if (i % 3 === 0) {
        resultado = "Fizz";
    } else if (i % 5 === 0) {
        resultado = "Buzz";
    } else {
        resultado = i;
    }

    console.log(resultado);
}

/*BUCLE TABLA DE MULTIPLICAR DEL 5*/

let masDe30 = "El resultado es mayor a 30";

for (let j = 1; j <= 10; j++) {
    let res = 5 * j;

    if (res > 30) {
        console.log("5 x " + j + " = " + masDe30);
    } else {
        console.log("5 x " + j + " = " + res);
    }
}
