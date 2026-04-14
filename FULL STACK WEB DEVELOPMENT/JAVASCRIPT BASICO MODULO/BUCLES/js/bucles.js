/* --- BUCLE FOR --- 
    for (inicialización; condición; actualización) {
        // Código a ejecutar en cada iteración
    }
*/

for(let i=1; i<=5; i++) {
    console.log(i);
}
// En este ejemplo, el bucle for se ejecutará 5 veces, imprimiendo los números del 1 al 5 en la consola. La variable i se inicializa en 1, y el bucle continúa mientras i sea menor o igual a 5, incrementando i en 1 en cada iteración.

for(let j=5; j>=1; j--) {
    console.log(j);
}
// En este ejemplo, el bucle for se ejecutará 5 veces, imprimiendo los números del 5 al 1 en la consola. La variable j se inicializa en 5, y el bucle continúa mientras j sea mayor o igual a 1, decrementando j en 1 en cada iteración.

/* --- BUCLE WHILE ---
    La diferencia con el for es que aquí necsitamos tener/crear la variable que se ve afectada por la condición del bucle, antes de definir el buche While.

    while (condición) {
        // Código a ejecutar mientras la condición sea verdadera
    }
*/

let palabra = "papa";
let palabraUsuario = prompt("Ingresa una palabra");

while(palabra!= palabraUsuario) {
    console.log("La palabra ingresada es " + palabraUsuario + " y no es correcta")
    palabraUsuario = prompt("Ingresa una palabra");
}
console.log("¡Correcto! La palabra ingresada es " + palabraUsuario);

// En este ejemplo, el bucle while se ejecutará mientras la palabra ingresada por el usuario no sea igual a "papa". Si el usuario ingresa una palabra incorrecta, se le pedirá que ingrese otra palabra hasta que ingrese la correcta. Una vez que el usuario ingresa "papa", el bucle termina y se muestra un mensaje de éxito en la consola.

let contador = 1;
while(contador <= 5) {
    console.log(contador);
    contador++;
}
// En este ejemplo, el bucle while se ejecutará 5 veces, imprimiendo los números del 1 al 5 en la consola. La variable contador se inicializa en 1, y el bucle continúa mientras contador sea menor o igual a 5, incrementando contador en 1 en cada iteración.

/* --- BUCLE DO WHILE ---
    do {
        // Código a ejecutar al menos una vez y luego mientras la condición sea verdadera
    } while (condición);
*/

// A diferencia del bucle while, el bucle do while ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio. Luego, después de ejecutar el bloque de código, se evalúa la condición para determinar si se debe repetir el proceso.

let palabra2 = "pipa";
let

do{
    palabraUsuario2 = prompt("Ingresa una palabra")
    console.log("La palabra ingresada es " + palabraUsuario2);
} while(palabra2 != palabraUsuario2)

// En este ejemplo, el bucle do while se ejecutará al menos una vez, pidiendo al usuario que ingrese una palabra. Luego, se imprimirá la palabra ingresada en la consola. El bucle continuará ejecutándose mientras la palabra ingresada por el usuario no sea igual a "pipa". Una vez que el usuario ingresa "pipa", el bucle termina.
