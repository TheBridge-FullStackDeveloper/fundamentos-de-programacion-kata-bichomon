console.log(document.title);

//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let gen1Title = document.getElementById("gen-1");
gen1Title.innerHTML = "Generasión 1 Pokimon";

//2.Cambia el color de fondo de la primera generación de Pokimon.

let gen1Background = document.getElementsByClassName("infocard-list-pkmn-lg");
gen1Background[0].style.background = "lightgray"

//3. Imprime por consola la URL de la página.
let url = document.URL
console.log("URL: " + url)

//4.Imprime por consola el dominio de la página.
let domain = (new URL(url));
domain = domain.hostname;
console.log("Dominio: " +domain); 

//5. Imprime todos los nodos de imagen.
let imagenes = document.getElementsByTagName("img")
for(let i = 0; i<imagenes.length; i++){
    console.log(imagenes[i])
    //6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}

//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`
let cambiarFondo = document.querySelectorAll(".infocard-lg-data.text-muted .itype.flying");

for(let i = 0; i < cambiarFondo.length; i++){
    cambiarFondo[i].parentNode.parentElement.style.background = "tomato"
}
