/*--FETCH--*/
// El método fetch se utiliza para realizar solicitudes HTTP.
// Recibe 2 parámetros: la URL a la que se desea hacer la solicitud y un objeto de configuración opcional que puede incluir el método HTTP, los encabezados, el cuerpo de la solicitud, entre otros.
// El método fetch devuelve una promesa que se resuelve con la respuesta de la solicitud. Para manejar la respuesta, se pueden encadenar métodos .then() y .catch() para manejar los casos de éxito y error respectivamente.

const posts = document.querySelector('#posts')

fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => {
        if (respuesta.ok) return respuesta.json()
            else Promise.reject (respuesta)
    })
    .then ((respuesta) => {
        pintar(respuesta)
    })
    .catch((error) => {console.log(error)})

    const pintar = (respuesta) => {
        respuesta.forEach((post) => { 

            posts.innerHTML += `
            <li>
            <p>${post.title}</p>
            <p>${post.body}</p>
            </li>
            `
        })
    }

    /*-- Si lo realizamos con async/await --*/

    const consultar = async () => {
        try {
            const respuesta = await fetch ('https://jsonplaceholder.typicode.com/posts')
            if (respuesta.ok) {return respuesta.json()}
                else throw ('Error en la consulta')
            }
        catch (error) {
            console.log(error)
        }
    }

    const pinta = async (resp) => { 
        const resp = await consultar()
        resp.forEach(({title, body}) => {
            posts.innerHTML += `
            <li>
            <p>${title}</p>
            <p>${body}</p>
            </li>
            `
        })
    }
