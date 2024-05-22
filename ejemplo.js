/* Funciones*/
let nombreExterior = 'Unai';

function mostrarNombre() {
    let nombreInterior = "Amaia"; //Variable local
    alert(nombreInterior);
    alert(nombreExterior); //Puede acceder

}

mostrarNombre();
alert(nombreInterior); //No puede acceder

// Función básica que suma dos números
function sumar(a, b) {
    return a + b;
}

// Llamada a la función sumar
let resultado = sumar(5, 3);
console.log(resultado); // Output: 8

// Función anónima asignada a una variable
let saludar = function (nombre) {
    return "¡Hola, " + nombre + "!";
}

// Llamada a la función anónima
console.log(saludar("Juan")); // Output: ¡Hola, Juan!

// Función flecha que multiplica dos números
let multiplicar = (a, b) => a * b;

// Llamada a la función flecha
console.log(multiplicar(4, 6)); // Output: 24

// Función con valor por defecto para el parámetro
function saludar2(nombre = "Mundo") {
    return "¡Hola, " + nombre + "!";
}

// Llamada a la función con y sin parámetro
console.log(saludar2()); // Output: ¡Hola, Mundo!
console.log(saludar2("Pedro")); // Output: ¡Hola, Pedro!

// Función recursiva para calcular el factorial de un número
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Llamada a la función recursiva
console.log(factorial(5)); // Output: 120