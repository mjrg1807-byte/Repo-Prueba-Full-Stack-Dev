/* --- HEADER FOTO ALEATORIA --- */
const fotoHeader = document.querySelector('#fotoHeader')
const arrayHeader = [ /*Array para fotos del banner*/
    {
        src: 'Assets/Header/foto7-992.jpg',
        alt: 'foto7'
    },
     {
        src: 'Assets/Header/foto8-992.jpg',
        alt: 'foto8'
    },
     {
        src: 'Assets/Header/foto9-992.jpg',
        alt: 'foto9'
    },
     {
        src: 'Assets/Header/foto10-992.jpg',
        alt: 'foto10'
    },

]

const pintarHeader = () => {

const index = Math.floor (Math.random() * arrayHeader.length)
    fotoHeader.src = arrayHeader[index].src
    fotoHeader.alt = arrayHeader[index].alt
}

pintarHeader()

/* --- FOTOS GALERIA --*/
const galeria = document.querySelector('#galeria')

const arrayGaleria = [
    {
        src: 'Assets/Galeria/foto1-992.jpg',
        alt: 'foto1',
        pie_de_foto: 'Este es el pie de foto'
    },
    {
        src: 'Assets/Galeria/foto2-992.jpg',
        alt: 'foto2',
        pie_de_foto: 'Este es el pie de foto'
    },
    {
        src: 'Assets/Galeria/foto3-992.jpg',
        alt: 'foto3',
        pie_de_foto: 'Este es el pie de foto'
    },
    {
        src: 'Assets/Galeria/foto4-992.jpg',
        alt: 'foto4',
        pie_de_foto: 'Este es el pie de foto'
    },
    {
        src: 'Assets/Galeria/foto5-992.jpg',
        alt: 'foto5',
        pie_de_foto: 'Este es el pie de foto'
    },
    {
        src: 'Assets/Galeria/foto6-992.jpg',
        alt: 'foto6',
        pie_de_foto: 'Este es el pie de foto'
    },
]

const pintarGaleria = () => {
    arrayGaleria.forEach((item) => {
       
        const cajaImagen = document.createElement ('figure')
        const imagen = document.createElement ('img')
        imagen.src = item.src
        imagen.alt = item.alt
        const pieDeFoto = document.createElement ('figcaption')
        pieDeFoto.textContent = item.pie_de_foto

        cajaImagen.append(imagen, pieDeFoto)
        galeria.append(cajaImagen)
    })
}

pintarGaleria()