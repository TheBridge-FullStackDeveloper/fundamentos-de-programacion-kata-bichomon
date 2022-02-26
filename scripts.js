console.log(document.title);

document.getElementById('gen-1').innerText = 'Generasión 1 Pokimon'  // cambiar título gen 1


document.querySelectorAll('.infocard-list-pkmn-lg')[0].style.background = 'azure'    // cambiar fondo gen 1

const webUrl = document.head.childNodes[9].href    // selecciona la URL de la web
console.log(webUrl)     // la muestra

console.log(webUrl.split('/')[2])       //  separa y selecciona el domain

const images = document.getElementsByTagName('img')

for (let i = 0; i < images.length; i++) {
    
   images[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'

}



const fondoVoladores = document.querySelectorAll('.infocard-lg-data.text-muted .itype.flying')



for (let i = 0; i < fondoVoladores.length; i++) {
    
    fondoVoladores[i].parentElement.parentElement.style.background = "lightpink"

}
