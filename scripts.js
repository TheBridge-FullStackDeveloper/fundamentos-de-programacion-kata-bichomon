let generasion = document.getElementById('gen-1')
generasion.innerText = 'Generasión 1 Pokimon';

let bg = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');

bg[0].style.backgroundColor = 'red';

// console.log(window);

console.log(document.location.pathname)

console.log(document.domain)

console.log(document.getElementsByTagName('img'))

const imgs = document.getElementsByTagName('img');


for (let i = 0; i < imgs.length; i++){
    imgs[i].src ="https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}

const voladores = document.querySelectorAll('.itype')

console.log(voladores)

voladores.forEach( (volador) => {
    if(volador.classList.contains('flying')){
        volador.parentElement.parentElement.style.backgroundColor = 'green'
    }
})



