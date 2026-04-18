// VARIABLES BÁSICAS
const ciudad = document.getElementById("filtroCiudad");
const playa = document.getElementById("filtroPlaya");
const volcan = document.getElementById("filtroVolcan");
const main = document.getElementById("main")

let fotosCiudad = [
    {
        src: 'Assets/ciudad1.jpg',
        alt: 'ciudad1'
    },
    {
        src: 'Assets/ciudad2.jpg',
        alt: 'ciudad2'
    },
    {
        src: 'Assets/ciudad3.jpg',
        alt: 'ciudad3'
    },
    {
        src: 'Assets/ciudad4.jpg',
        alt: 'ciudad4'
    }

]

let fotosPlaya = [
    {
        src: 'Assets/playa1.jpg',
        alt: 'playa1'
    },
    {
        src: 'Assets/Playa2.jpg',
        alt: 'playa2'
    },
    {
        src: 'Assets/playa3.jpg',
        alt: 'playa3'
    },
    {
        src: 'Assets/playa4.jpg',
        alt: 'playa4'
    }

]

let fotosVolcan = [
    {
        src: 'Assets/volcan1.jpg',
        alt: 'volcan1'
    },
    {
        src: 'Assets/volcan2.jpg',
        alt: 'volcan2'
    },
    {
        src: 'Assets/volcan3.jpg',
        alt: 'volcan3'
    },
    {
        src: 'Assets/volcan4.jpg',
        alt: 'volcan4'
    }

]

// FUNCIONES Y EVENTOS

const pintarImagenes = (paquete) => {
    main.innerHTML = ''
    
    paquete.forEach(item => {
        const imagen = document.createElement ('img')
        imagen.src = item.src
        imagen.alt = item.alt

        main.append(imagen)
    }); 
}




ciudad.addEventListener('click', () => {
    pintarImagenes(fotosCiudad)
})

playa.addEventListener('click', () => {
    pintarImagenes(fotosPlaya)
})

volcan.addEventListener('click', () => {
    pintarImagenes(fotosVolcan)
})