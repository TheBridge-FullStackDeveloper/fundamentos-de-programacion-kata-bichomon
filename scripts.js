console.log(document.title);

document.getElementById('gen-1').innerText = 'Generasión 1 Pokimon'


document.querySelectorAll('.infocard-list-pkmn-lg')[0].style.background = 'azure'

const webUrl = document.head.childNodes[9].href
console.log(webUrl)

console.log(webUrl.split('/')[2])

console.log(document.querySelectorAll('img'))

/* document.getElementsByTagName('img').src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const images = document.querySelectorAll('img')

for (let i=0; i<=images.length ;i++) {
    ument.querySelectorAll('img')[i].src.innerText = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
} */