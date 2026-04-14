/*-- ACCEDER A ELEMENTOS POR SU ID --
    document.getElementById('id-del-elemento');
*/
const caja1 = document.getElementById('caja1'); // Aqui hemos accedido a la caja1 (elemento HTML) a traves de su id, y lo hemos guardado en una variable llamada caja1
console.log(caja1);
caja1.style.color= 'green'; // Aqui hemos cambiado el color del texto de la caja1 a verde utilizando la propiedad style.color a través de JavaScript.


/*-- ACCEDER A ELEMENTOS POR SU CLASE --
    document.getElementsByClassName('nombre-de-la-clase');
*/
const verdes = document.getElementsByClassName('verde'); // Aqui hemos accedido a los elementos HTML que tienen la clase "verde" y los hemos guardado en una variable llamada verdes. Este metodo devuelve una coleccion de elementos, por lo que es necesario usar un indice para acceder a cada uno de ellos.
console.log(verdes);

//Para acceeder a las propiedades de los elementos de la coleccion, debemos usar un indice para acceder a cada uno de ellos. Como si fuera un array. 
verdes[1].style.color = 'green'; // Aqui hemos cambiado el color del texto del segundo elemento con la clase "verde" a verde utilizando la propiedad style.color a través de JavaScript.

for (let i = 0; i < verdes.length; i++) {
    verdes[i].style.fontSize = '3rem'; // Aqui hemos cambiado el tamaño de la fuente de todos los elementos con la clase "verde" a 3rem utilizando la propiedad style.fontSize . De esta manera, hemos aplicado el cambio a todos los elementos de la coleccion utilizando un bucle for.
}

/*-- ACCEDER A ELEMENTOS POR SU ETIQUETA --
    document.getElementsByTagName('nombre-de-la-etiqueta');
*/

const divs = document.getElementsByTagName('div'); // Aqui hemos accedido a todos los elementos HTML que tienen la etiqueta "div" y los hemos guardado en una variable llamada divs. Este metodo devuelve una coleccion de elementos, por lo que es necesario usar un indice para acceder a cada uno de ellos.
console.log(divs);

//Al igual que con los elementos por clase, para acceder a las propiedades de los elementos de la coleccion, debemos usar un indice para acceder a cada uno de ellos. Como si fuera un array. Y si queremos aplicar un cambio a todos los elementos de la coleccion, podemos usar un bucle for para iterar sobre ellos.
for (let i=0; i < divs.length; i++) {
    divs[i].style.border= '1px solid red';
} // Aqui hemos agregado un borde rojo a todos los elementos con la etiqueta "div" utilizando la propiedad style.border a través de JavaScript. De esta manera, hemos aplicado el cambio a todos los elementos de la coleccion utilizando un bucle for.

/*-- ACCEDER A ELEMENTOS POR SU SELECTOR CSS --

    document.querySelector('selector-css'); // Solo devuelve el primer elemento que coincide con el selector CSS.
    document.querySelectorAll('selector-css'); // Devuelve una NodeList con todos los elementos que coinciden con el selector CSS. Es similar a un array, pero no tiene todos los métodos de un array. Para acceder a las propiedades de los elementos de la NodeList, debemos usar un indice para acceder a cada uno de ellos. Como si fuera un array. Y si queremos aplicar un cambio a todos los elementos de la NodeList, podemos usar un bucle for para iterar sobre ellos.
*/

const caja2 = document.querySelector('#caja2'); // Aqui hemos accedido a la caja2 (elemento HTML) a traves de su id utilizando el selector CSS # y lo hemos guardado en una variable llamada caja2. Este metodo devuelve el primer elemento que coincide con el selector CSS.
console.log(caja2);
caja2.style.color = 'blue'; // Aqui hemos cambiado el color del texto de la caja2 a azul utilizando la propiedad style.color a través de JavaScript.

const cajaRojo = document.querySelectorAll('.rojo'); // Aqui hemos accedido a todos los elementos HTML que tienen la clase "rojo" utilizando el selector CSS . y lo hemos guardado en una variable llamada cajaRojo. Este metodo devuelve una NodeList con todos los elementos que coinciden con el selector CSS.
console.log(cajaRojo);

cajaRojo.forEach((item) => {
    item.style.color= 'red';
}) // Aqui hemos cambiado el color del texto de todos los elementos con la clase "rojo" a rojo utilizando la propiedad style.color a través de JavaScript. De esta manera, hemos aplicado el cambio a todos los elementos de la NodeList utilizando el metodo forEach, que es un metodo de los arrays y las NodeList que nos permite iterar sobre ellos de una manera mas sencilla que con un bucle for.

const nombre = document.querySelector('#nombre');
console.log(nombre.value); // Aqui hemos accedido al valor del input con id "nombre" utilizando la propiedad value a través de JavaScript. Este metodo es muy util para obtener el valor de los inputs y poder trabajar con ellos en nuestro codigo.


const cajaContenido = document.querySelector('#cajaContenido');

console.log(cajaContenido.innerHTML); // Aqui hemos accedido al contenido HTML de la cajaContenido utilizando la propiedad innerHTML a través de JavaScript. Este metodo nos devuelve el contenido HTML de un elemento, incluyendo las etiquetas HTML que pueda tener dentro. Es muy util para obtener o modificar el contenido de un elemento de manera dinamica.
cajaContenido.innerHTML = '<p>Nuevo contenido</p>'; // Aqui hemos modificado el contenido HTML de la cajaContenido a "<p>Nuevo contenido</p>" utilizando la propiedad innerHTML a través de JavaScript. De esta manera, hemos cambiado el contenido de la cajaContenido de manera dinamica.

console.log(cajaContenido.textContent) // Aqui hemos accedido al contenido de texto de la cajaContenido utilizando la propiedad textContent a través de JavaScript. Este metodo nos devuelve el contenido de texto de un elemento, sin incluir las etiquetas HTML que pueda tener dentro. Es muy util para obtener o modificar el contenido de un elemento de manera dinamica, pero solo el texto, sin las etiquetas HTML.
cajaContenido.textContent = 'Nuevo contenido de texto'; // Aqui hemos modificado el contenido de texto de la cajaContenido a "Nuevo contenido de texto" utilizando la propiedad textContent a través de JavaScript. De esta manera, hemos cambiado el contenido de la cajaContenido de manera dinamica, pero solo el texto, sin las etiquetas HTML.


/*--CONOCER LOS ATRIBUTOS DE UN COJUNTO DE ELEMENTOS--

    variable.getAttribute('nombre-del-atributo'); // Devuelve el valor del atributo especificado del elemento.
    variable.setAttribute('nombre-del-atributo', 'valor-del-atributo'); // Establece el valor del atributo especificado del elemento.
*/

caja1.setAttribute('data-forma', 'redonda'); // Aqui hemos agregado un nuevo atributo llamado "data-forma" con el valor "redonda" a la caja1 utilizando el metodo setAttribute a través de JavaScript.
caja1.setAttribute('data-forma', 'cuadrada'); // Aqui hemos modificado el valor del atributo "data-forma" de la caja1 a "cuadrada" utilizando el metodo setAttribute a través de JavaScript.


/*--ELIMINAR UN ATRIBUTO DE UN ELEMENTO--

    variable.removeAttribute('nombre-del-atributo'); // Elimina el atributo especificado del elemento.
*/

caja1.removeAttribute('data-forma'); // Aqui hemos eliminado el atributo "data-forma" de la caja1 utilizando el metodo removeAttribute a través de JavaScript.


/*--CLASES DE LOS ELEMENTOS--

    variable.classList; // Devuelve una colección de las clases del elemento. Es un objeto que tiene varios métodos para trabajar con las clases de un elemento.
    
    variable.classList.add('nombre-de-la-clase'); // Agrega una clase al elemento.
    variable.classList.remove('nombre-de-la-clase'); // Elimina una clase del elemento.
    variable.classList.toggle('nombre-de-la-clase'); // Agrega una clase al elemento si no la tiene, o la elimina si ya la tiene.
    variable.classList.replace('nombre-de-la-clase-antigua', 'nombre-de-la-clase-nueva'); // Reemplaza una clase del elemento por otra.
    variable.classList.contains('nombre-de-la-clase'); // Devuelve true si el elemento tiene la clase especificada, o false si no la tiene.
*/

console.log(cajaContenido.classList) // Aqui hemos accedido a la colección de clases de la cajaContenido utilizando la propiedad classList a través de JavaScript. Este metodo nos devuelve un objeto que tiene varios metodos para trabajar con las clases de un elemento.

cajaContenido.classList.add('grande'); // Aqui hemos agregado la clase "grande" a la cajaContenido utilizando el metodo add de la propiedad classList a través de JavaScript.
cajaContenido.classList.replace('grande', 'pequeno'); // Aqui hemos reemplazado la clase "grande" por la clase "pequeno" en la cajaContenido utilizando el metodo replace de la propiedad classList a través de JavaScript.
cajaContenido.classList.contains('pequeno'); // Aqui hemos verificado si la cajaContenido tiene la clase "pequeno" utilizando el metodo contains de la propiedad classList a través de JavaScript. Este metodo nos devuelve true si el elemento tiene la clase especificada, o false si no la tiene.

cajaContenido.classList.toggle('redondo'); // Aqui hemos agregado la clase "redondo" a la cajaContenido si no la tiene, o la hemos eliminado si ya la tiene, utilizando el metodo toggle de la propiedad classList a través de JavaScript. Este metodo es muy util para agregar o eliminar clases de manera dinamica, dependiendo de si el elemento ya tiene la clase o no.
cajaContenido.classList.toggle('pequeno'); // Aqui hemos eliminado la clase "pequeno" de la cajaContenido utilizando el metodo toggle de la propiedad classList a través de JavaScript, ya que la cajaContenido ya tenia la clase "pequeno". Este metodo es muy util para agregar o eliminar clases de manera dinamica, dependiendo de si el elemento ya tiene la clase o no.


/*--CREAR ELEMENTOS HTML DE MANERA DINAMICA--

    document.createElement('nombre-de-la-etiqueta'); // Crea un nuevo elemento HTML del tipo especificado y lo devuelve. Este metodo es muy util para crear elementos de manera dinamica y luego agregarlos al DOM utilizando otros metodos como appendChild o insertBefore.
*/

const nuevoElemento = document.createElement('section'); // Aqui hemos creado un nuevo elemento HTML del tipo "section" utilizando el metodo createElement a través de JavaScript, y lo hemos guardado en una variable llamada nuevoElemento. Este metodo nos devuelve el nuevo elemento creado, pero no lo agrega al DOM, por lo que debemos usar otros metodos para agregarlo al DOM.

nuevoElemento.classList.add('rojo'); // Aqui hemos agregado la clase "rojo" al nuevo elemento utilizando el metodo add de la propiedad classList a través de JavaScript.
nuevoElemento.innerHTML = '<h2>Titulo del nuevo elemento</h2>'; // Aqui hemos asignado el contenido HTML al nuevo elemento utilizando la propiedad innerHTML a través de JavaScript.


/*--AGREGAR ELEMENTOS AL DOM--

    elmentoPadre.append(elementoAñadido); // Agrega un elemento al final del elemento padre.
    elementoPadre.appendChild(elementoAñadido); // Agrega un elemento al final del elemento padre. Es similar al metodo append, pero este metodo es mas antiguo y no permite agregar texto directamente, solo elementos HTML.
    elementoPadre.prepend(elementoAñadido); // Agrega un elemento al inicio del elemento padre. Dentro del elemento padre, el nuevo elemento se agregara antes de los demas elementos que ya tenga el elemento padre.
    elementoPadre.after(elementoAñadido); // Agrega un elemento despues del elemento padre.
    elementoPadre.before(elementoAñadido); // Agrega un elemento antes del elemento padre.
*/

cajaContenido.append(nuevoElemento); // Aqui hemos agregado el nuevo elemento al final de la cajaContenido utilizando el metodo append a través de JavaScript. De esta manera, el nuevo elemento se agregara como el ultimo hijo de la cajaContenido.


/*--ELIMINAR ELEMENTOS DEL DOM--

    elemento.remove(); // Elimina el elemento del DOM. Este metodo es muy util para eliminar elementos de manera dinamica.
    elementoPadre.removeChild(elementoHijo); // Elimina un elemento hijo del elemento padre. Este metodo es mas antiguo que el metodo remove, pero es muy util para eliminar elementos de manera dinamica, ya que nos permite eliminar un elemento hijo especifico del elemento padre.
*/

const elementoParaEliminar = document.createElement('p'); // Aqui hemos creado un nuevo elemento HTML del tipo "p" utilizando el metodo createElement a través de JavaScript, y lo hemos guardado en una variable llamada elementoParaEliminar. Este metodo nos devuelve el nuevo elemento creado, pero no lo agrega al DOM, por lo que debemos usar otros metodos para agregarlo al DOM.
elementoParaEliminar.textContent = 'Este elemento sera eliminado'; // Aqui hemos asignado el contenido de texto al nuevo elemento utilizando la propiedad textContent a través de JavaScript.

elementoParaEliminar.remove(); // Aqui hemos eliminado el elementoParaEliminar del DOM utilizando el metodo remove a través de JavaScript. Este metodo es muy util para eliminar elementos de manera dinamica, ya que elimina el elemento del DOM sin necesidad de conocer su elemento padre.

/*--VER ELEMENTOS HIJOS DE UN ELEMENTO--

    elementoPadre.children; // Devuelve una colección de los elementos hijos del elemento padre. Este metodo nos devuelve una coleccion de elementos, por lo que es necesario usar un indice para acceder a cada uno de ellos. Es similar a un array, pero no tiene todos los metodos de un array.
    elementoPadre.childNodes; // Devuelve una colección de los nodos hijos del elemento padre. Este metodo nos devuelve una coleccion de nodos, que pueden ser elementos HTML, texto, comentarios, etc. Por lo tanto, es necesario usar un indice para acceder a cada uno de ellos y verificar su tipo antes de trabajar con ellos.
*/