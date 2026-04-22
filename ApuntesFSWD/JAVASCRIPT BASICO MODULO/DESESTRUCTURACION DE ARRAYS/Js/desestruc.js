/*---DESESTRUCTURACIÓN DE UN ARRAY---*/
const colores = ['rojo','verde','azul'];

const [color1,color2,color3] = colores; // Aquí hemos creado una constante de cada uno de los valores del array colores

console.log(color1);
console.log(color2);
console.log(color3);


// Si quisieramos hacer lo mismo, pero solo tomando los valores rojo y azul sería de esta manera -> const [color1, ,color2] = colores;


/*---DESESTRUCTURACION DE UN OBJETO---*/
const persona = {
    nombre: 'Juan',
    edad: 30,
    email: 'juan@correo.es'
};

const {nombre, edad, email} = persona; // Funciona de la misma manera que los Arrays.