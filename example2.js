// Ejemplo de funciones de array y bucles for en JavaScript

// Funciones de Array:

// Definimos un array de nombres
let nombres = ['Juan', 'María', 'Carlos'];

// forEach(): Ejecuta una función por cada elemento del array.
nombres.forEach(function(nombre) {
  console.log(nombre); // Imprimimos cada nombre en la consola
});
// Output:
// Juan
// María
// Carlos

// map(): Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.
let numeros = [1, 2, 3];
let duplicados = numeros.map(function(numero) {
  return numero * 2; // Duplicamos cada número del array
});
console.log(duplicados); // Imprimimos el nuevo array
// Output: [2, 4, 6]

// filter(): Crea un nuevo array con los elementos que pasan el test implementado por la función proporcionada.
let edades = [18, 25, 12, 30, 15];
let mayoresDeEdad = edades.filter(function(edad) {
  return edad >= 18; // Filtramos las edades mayores o iguales a 18
});
console.log(mayoresDeEdad); // Imprimimos el nuevo array
// Output: [18, 25, 30]

// reduce(): Aplica una función a un acumulador y a cada valor de un array para reducirlo a un único valor.
let suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero; // Sumamos todos los números del array
}, 0);
console.log(suma); // Imprimimos la suma
// Output: 6


// Bucles "for":

// Bucle for clásico
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprimimos el valor de i en cada iteración
}
// Output:
// 0
// 1
// 2
// 3
// 4

// Bucle for...in: Itera sobre las propiedades enumerables de un objeto
const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (let clave in persona) {
  console.log(clave + ': ' + persona[clave]); // Imprimimos cada propiedad y su valor
}
// Output:
// nombre: Juan
// edad: 30
// ciudad: Madrid

// Bucle for...of: Itera sobre los elementos de un objeto iterable (como un array)
const colores = ['rojo', 'verde', 'azul'];
for (let color of colores) {
  console.log(color); // Imprimimos cada color en el array
}
// Output:
// rojo
// verde
// azul

// forEach(): Itera sobre cada elemento de un array y ejecuta una función para cada uno.
colores.forEach(function(color) {
  console.log(color); // Imprimimos cada color en el array
});
// Output:
// rojo
// verde
// azul
