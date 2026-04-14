/*--OBEJTOS LITERALES--


Un objeto literal es una colección de pares clave-valor, donde cada clave es una cadena (o símbolo) y cada valor puede ser de cualquier tipo de dato, incluyendo otros objetos. Los objetos literales se definen utilizando llaves {} y se pueden crear de manera sencilla y rápida.

const nombreObjeto = {
  clave1: valor1,
  clave2: valor2,
  clave3: valor3
  ...
}
*/

const objTelefono = {
    marca: "Apple",
    modelo: "iPhone 13 Pro Max",
    camara: true,
    colores: ["Rojo", "Negro", "Blanco"], // Esto es un array dentro del objeto "objTelefono"
    información: {
        peso: "238 gramos",
        pantalla: "6.7 pulgadas",
        altura: "160.8 mm",
        ancho: "78.1 mm",
        grosor: "7.65 mm"
    }, // Esto es un objeto anidado dentro del objeto principal "objTelefono"
    llamar: () => console.log("Llamando..."), // Esto es un método, una función que no retorna nada dentro de un objeto.
    sonarAlarma:() => console.log("Sonando alarma...")
}


/*--ACCESO A LAS PROPIEDADES DE UN OBJETO--


Para acceder a las propiedades de un objeto, se pueden utilizar dos notaciones: la notación de punto y la notación de corchetes.

1. Notación de punto: Se utiliza el nombre del objeto seguido de un punto y el nombre de la propiedad.
   Ejemplo: objTelefono.marca

2. Notación de corchetes: Se utiliza el nombre del objeto seguido de corchetes y el nombre de la propiedad entre comillas.
   Ejemplo: objTelefono["marca"]
*/

console.log(objTelefono.marca); // Acceso a la propiedad "marca" utilizando notación de punto
console.log(objTelefono["modelo"]); // Acceso a la propiedad "modelo" utilizando notación de corchetes
console.log(objTelefono); // Imprime todo el objeto "objTelefono" en la consola
console.log(objTelefono.colores [1]); // Acceso al segundo elemento del array "colores" dentro del objeto "objTelefono"
objTelefono.llamar(); // Llamada al método "llamar" del objeto "objTelefono"


/*--MODIFICACIÓN DE PROPIEDADES DE UN OBJETO--


Las propiedades de un objeto pueden ser modificadas asignando un nuevo valor a la propiedad utilizando la notación de punto o la notación de corchetes.*/

objTelefono.modelo = "iphone 14"; // Modificación de la propiedad "modelo" utilizando notación de punto


/*--AGREGAR NUEVAS PROPIEDADES A UN OBJETO--


Se pueden agregar nuevas propiedades a un objeto simplemente asignando un valor a una nueva clave utilizando la notación de punto o la notación de corchetes.*/

objTelefono.precio = 999; // Agregar una nueva propiedad "precio" utilizando notación de punto
objTelefono["almacenamiento"] = "128GB"; // Agregar una nueva propiedad "almacenamiento" utilizando notación de corchetes


/*--ELIMINAR PROPIEDADES DE UN OBJETO--


Para eliminar una propiedad de un objeto, se puede utilizar el operador delete seguido del nombre del objeto y la propiedad que se desea eliminar.*/

delete objTelefono.camara; // Eliminar la propiedad "camara" del objeto "objTelefono"


/*--RECORRER LAS PROPIEDADES DE UN OBJETO--


Para recorrer las propiedades de un objeto, se puede utilizar un bucle for...in, que itera sobre las claves del objeto.*/

for (let key in objTelefono) {
    console.log(key); // Imprime la clave de cada propiedad del objeto "objTelefono"
    console.log(objTelefono[key]); // Imprime el valor de cada propiedad del objeto "objTelefono" utilizando la notación de corchetes
}


/*--OBJETOS CLONEADOS--


Para clonar un objeto, es decir, crear una copia del mismo, se pueden utilizar diferentes métodos, como el operador spread o la función Object.assign().*/

const objTelefonoClonado ={
    ...objTelefono // Clonación del objeto "objTelefono" utilizando el operador spread
}

objTelefonoClonado.precio = 1099; // Modificación de la propiedad "precio" del objeto clonado para demostrar que es una copia independiente y no afecta al objeto original "objTelefono"


/*--OBJETO PADRE--


Es otra manera de recorrer las propiedades de un objeto, utilizando el método Object, es recomendable hacerlo asignando una variable, la cual será la contenedora del Array creado por el método Object */

let Claves = Object.keys(objTelefono); // Crea un array con las claves del objeto "objTelefono" utilizando el método Object.keys()
let Valores = Object.values(objTelefono); // Crea un array con los valores del objeto "objTelefono" utilizando el método Object.values()

console.log(Claves); // Imprime el array de claves del objeto "objTelefono"
console.log(Valores); // Imprime el array de valores del objeto "objTelefono"