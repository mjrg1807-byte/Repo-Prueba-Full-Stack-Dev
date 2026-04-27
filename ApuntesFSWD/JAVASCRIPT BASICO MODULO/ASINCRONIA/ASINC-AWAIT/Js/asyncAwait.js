
/*-- CUANDO TRABAJAMOS CON FUNCIONES DECLARADAS--*/
// Las funciones asincronas se declaran con la palabra reservada "async" antes de la declaración de la función.

async function miFuncionAsincrona() {
    return "Hola Mundo";
}

console.log(miFuncionAsincrona()); // Esto devuelve una promesa resuelta con el valor "Hola Mundo".


/*-- CUANDO TRABAJAMOS CON FUNCIONES EXPRESADAS--*/
// Las funciones asincronas también pueden ser expresadas como funciones anónimas o funciones flecha.

const miFuncionAsincronaFlecha = async () => {
    return "Hola Mundo desde una función flecha";
}

console.log(miFuncionAsincronaFlecha()); // Esto también devuelve una promesa resuelta con el valor "Hola Mundo desde una función flecha".


/*-- USO DE AWAIT--*/
// La palabra reservada "await" se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

const obtenerDatos = async () => {
    const respuesta = await miFuncionAsincronaFlecha(); // Espera a que la promesa se resuelva y asigna el valor a "respuesta".
    console.log(respuesta); // Imprime el valor resuelto de la promesa.
}

obtenerDatos(); // Llama a la función para obtener los datos y mostrar el resultado.