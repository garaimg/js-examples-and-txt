document.body.style.backgroundColor = "#fff0f0";
let elementosH2 = document.getElementsByTagName("h2");
for (let i = 0; i < elementosH2.length; i++) {
    elementosH2[i].style.color = "#ff0000";
}

let elementos_importantes = document.getElementsByClassName("importante");
for (let i = 0; i < elementos_importantes.length; i++) {
    elementos_importantes[i].style.fontWeight = "700";
}