// Obtener el texto del elemento con el id "titular"
let texto_importante = document.getElementById("titular").textContent;
console.log(texto_importante);

// Obtener los elementos con la clase "importante"
let importante = document.getElementsByClassName("importante");
console.log(importante);
for(let elemento of importante){
    console.log(elemento.textContent)
}

