//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

//Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector(".infocard-list").style.background = "black";

//Imprime por consola la URL de la página.

let dir = document.URL;
console.log(dir);

//Imprime por consola el dominio de la página.

let dom = document.domain;
console.log(dom);

//Imprime todos los nodos de imagen.

let imagenes = document.images;
console.log(imagenes);

//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


let source = document.querySelectorAll("img");
for(let i=0;i<source.length;i++){
    (source[i]).src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
} 


//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let fondo = document.querySelectorAll(".itype.flying");
for(let i = 0;i<fondo.length;i++){
    (fondo[i]).style.backgroundColor = "yellow";
}
 
