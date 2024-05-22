// 1. Crear objeto aplicacion con propiedades nombre, puerto y hostname
let aplicacion = {
    nombre: "Web App Industrial",
    puerto: 8000,
    hostname: "localhost"
};

// 2. Mostrar el valor de cada propiedad por pantalla
console.log("Nombre:", aplicacion.nombre);
console.log("Puerto:", aplicacion.puerto);
console.log("Hostname:", aplicacion.hostname);

// 3. Eliminar la propiedad hostname
delete aplicacion.hostname;

console.log("Hostname:", aplicacion.hostname);

// 4. Modificar el código para mostrar el valor de todas las propiedades del objeto aplicacion mediante un bucle for
console.log("Valores de todas las propiedades del objeto aplicacion:");
for (let clave in aplicacion) {
    console.log(clave + ":", aplicacion[clave]);
}

// 5. Crear objeto cuentaCorriente con propiedades saldoInicial, compras y alquiler
let cuentaCorriente = {
    saldoInicial: 1500,
    compras: -300,
    alquiler: -800
};

// Función para calcular la suma de los valores de las propiedades del objeto
function calcularSuma(objeto) {
    let suma = 0;
    for (let clave in objeto) {
        suma += objeto[clave];
    }
    return suma;
}

// Llamar a la función con el objeto cuentaCorriente
console.log("Suma de los valores de las propiedades del objeto cuentaCorriente:", calcularSuma(cuentaCorriente));

// 6. Crear objeto inversiones con propiedades fondos y oro
let inversiones = {
    fondos: 300,
    oro: 400,
    plata: 100
};

// Función para multiplicar todos los valores del objeto por un número entero
function multiplicarValores(objeto, numero) {
    for (let clave in objeto) {
        objeto[clave] *= numero;
    }
}

// Llamar a la función con el objeto inversiones y el número entero
let numeroMultiplicador = 2;

// Mostrar los nuevos valores del objeto inversiones
console.log("Valores del objeto inversiones después de multiplicar por", numeroMultiplicador + ":");
for (let clave in inversiones) {
    console.log(clave + ":", inversiones[clave]);
}

multiplicarValores(inversiones, numeroMultiplicador);

// Mostrar los nuevos valores del objeto inversiones
console.log("Nuevos valores del objeto inversiones después de multiplicar por", numeroMultiplicador + ":" + inversiones);
// inversiones.fondos
// inversiones.oro
