/*-- VARIABLES --*/

const fetchUser = document.getElementById('fetchUser');
const userInfo = document.getElementById('userInfo');

fetchUser.addEventListener('click', () => {
    getFetchUserData()
});


/*-- PROMESAS --*/

fetchUserData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {


            const success = true; 

            if (success) {
                resolve({
                    name: 'John Doe',
                    email: 'LWw9D@example.com',
                });
            } else {
                reject(new Error('No se pudo obtener la información del usuario.'));
            }
        }, 2000);
    });

    return promise;
}


/*-- FUNCIONES --*/

getFetchUserData = () => {
    fetchUserData()
        .then((respuesta) => {
            userInfo.innerHTML = `
            <h2>${respuesta.name}</h2>
            <p>${respuesta.email}</p>
            `;
        })
        .catch((error) => {
            userInfo.innerHTML = `
            <p>${error.message}</p>
            `;
        });
}

/* En este código, se define una función `fetchUserData` que simula la obtención de datos de un usuario después de un retraso de 2 segundos.
La función devuelve una promesa que se resuelve con los datos del usuario si la operación es exitosa, o se rechaza con un error si no lo es.
Luego, se define la función `getFetchUserData` que llama a `fetchUserData` y maneja la respuesta utilizando los métodos `then` y `catch` para actualizar el contenido de la página con la información del usuario o mostrar un mensaje de error.
Finalmente, se agrega un evento de clic al botón "fetchUser" para iniciar el proceso cuando se haga clic en él. */