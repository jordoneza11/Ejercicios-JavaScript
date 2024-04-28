// 7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Pseudocodigo
// Escribir "Ingrese una temperatura en grados Celsius"
// Leer gradosCelsius
// gradosFahrenheit=gradosCelsius * 9/5 + 32
// Escribir gradosFahrenheit
const read = require('prompt-sync')();
gradosCelsius=read("Ingrese una temperatura en grados Celsius")
let gradosFahrenheit= gradosCelsius * 9/5 + 32
console.log(gradosFahrenheit)