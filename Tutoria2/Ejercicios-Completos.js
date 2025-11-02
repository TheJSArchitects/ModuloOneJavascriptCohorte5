/**
 * EJERCICIOS PRÁCTICOS - JAVASCRIPT FUNDAMENTOS
 * 
 * Este archivo contiene ejercicios con soluciones completamente explicadas
 * Incluye ejercicios de las Clase 1 y Clase 2
 */

// ============================================================================
// EJERCICIOS CLASE 2: FUNDAMENTOS DE JAVASCRIPT
// ============================================================================

console.log("==== EJERCICIOS CLASE 1 ====");

// ---------------------------------------------------------------------------
// EJERCICIO 1: Mostrar nombre en consola
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 1: Mostrar nombre ---");

const nombre = "Juan";
console.log("Hola, mi nombre es: " + nombre);

// O con template literals (más moderno)
console.log(`Hola, mi nombre es: ${nombre}`);


// ---------------------------------------------------------------------------
// EJERCICIO 2: Sumar dos números
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 2: Sumar dos números ---");

// Opción 1: Pedir números con prompt (en navegador)
// let num1 = parseFloat(prompt("Ingresa el primer número:"));
// let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Opción 2: Con valores predefinidos (para pruebas)
let num1 = 10;
let num2 = 20;

let suma = num1 + num2;
console.log(`${num1} + ${num2} = ${suma}`);


// ---------------------------------------------------------------------------
// EJERCICIO 3: Verificar si un número es par o impar
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 3: Par o impar ---");

let numeroPrueba = 7;

if (numeroPrueba % 2 === 0) {
  console.log(`El número ${numeroPrueba} es PAR`);
} else {
  console.log(`El número ${numeroPrueba} es IMPAR`);
}

// También como función reutilizable
function verificarParidad(num) {
  return num % 2 === 0 ? "PAR" : "IMPAR";
}

console.log(`El número 14 es: ${verificarParidad(14)}`);
console.log(`El número 23 es: ${verificarParidad(23)}`);


// ---------------------------------------------------------------------------
// EJERCICIO 4: Contador del 1 al 10
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 4: Contador del 1 al 10 ---");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// ---------------------------------------------------------------------------
// EJERCICIO 5: Mostrar solo números pares del 1 al 20
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 5: Números pares del 1 al 20 ---");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// ---------------------------------------------------------------------------
// EJERCICIO 6: Operaciones con variables primitivas
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 6: Operaciones aritméticas ---");

let a = 15;
let b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);


// ---------------------------------------------------------------------------
// EJERCICIO 7: Trabajar con objetos
// ---------------------------------------------------------------------------

console.log("--- Ejercicio 7: Objeto Persona ---");

let persona = {
  nombre: "Carlos",
  apellido: "García",
  edad: 25,
  ciudad: "Medellín",
  profesion: "Ingeniero",
  esEmpleado: true
};

console.log(`Nombre: ${persona.nombre}`);
console.log(`Apellido: ${persona.apellido}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);
console.log(`Profesión: ${persona.profesion}`);
console.log(`¿Es empleado? ${persona.esEmpleado}`);

// Modificar propiedades
persona.edad = 26;
console.log(`Edad actualizada: ${persona.edad}`);

