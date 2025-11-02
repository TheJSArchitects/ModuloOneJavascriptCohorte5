/**
 * CLASE 1: FUNDAMENTOS DE JAVASCRIPT
 * 
 * Tema: Variables, tipos de datos, operadores y funciones básicas
 * Objetivo: Comprender los conceptos básicos del lenguaje JavaScript
 * 
 * Este archivo contiene ejemplos prácticos de los conceptos fundamentales
 * que todo programador JavaScript debe conocer.
 */

// ============================================================================
// 1. TIPADO DÉBIL EN JAVASCRIPT
// ============================================================================

/**
 * JavaScript es un lenguaje débilmente tipado, es decir que no molesta 
 * con los tipos de datos. El lenguaje infiere automáticamente el tipo.
 */

// Verificar el tipo de una variable con typeof
let variable1 = "Juan";
let variable2 = 25;
let variable3 = true;

console.log(typeof variable1);  // "string"
console.log(typeof variable2);  // "number"
console.log(typeof variable3);  // "boolean"


// ============================================================================
// 2. TIPOS DE DATOS PRIMITIVOS
// ============================================================================

/**
 * Los tipos de datos primitivos son los tipos básicos que no son objetos
 * y no tienen métodos.
 */

// String - Cadena de texto
let nombre = "Juan";
console.log("Hola, mi nombre es " + nombre);

// Number - Números enteros y decimales
let edad = 22;
let altura = 1.75;
console.log("Edad: " + edad);
console.log("Altura: " + altura);

// Boolean - Verdadero o Falso
let isEstudiante = true;
let tieneExperiencia = false;
console.log("¿Es estudiante? " + isEstudiante);

// Undefined - Variable declarada pero sin valor
let variable;
console.log(variable);  // undefined

// Null - Ausencia de valor intencional
let valor = null;
console.log(valor);     // null


// ============================================================================
// 3. VARIABLES: LET, CONST Y VAR
// ============================================================================

/**
 * Formas de declarar variables en JavaScript:
 * - let: Variable mutable (puede cambiar), recomendado en JavaScript moderno
 * - const: Constante, no puede cambiar después de asignar un valor
 * - var: Variable mutable (antigua), evitar en código moderno
 */

// let - Recomendado para variables que pueden cambiar
let contador = 0;
contador = contador + 1;  // Permitido
console.log(contador);    // 1

// const - Para valores que no cambian
const PI = 3.14159;
// PI = 3;  // Error: No se puede reasignar una constante
console.log(PI);

// var - Antigua forma (evitar usar)
var apellido = "García";
var apellido = "López";  // Permitido pero confuso
console.log(apellido);


// ============================================================================
// 4. OPERADORES ARITMÉTICOS
// ============================================================================

/**
 * Operadores aritméticos para realizar operaciones matemáticas
 */

let a = 10;
let b = 3;

console.log(a + b);   // 13 - Suma
console.log(a - b);   // 7  - Resta
console.log(a * b);   // 30 - Multiplicación
console.log(a / b);   // 3.33... - División
console.log(a % b);   // 1  - Módulo (residuo de la división)
console.log(a ** 2);  // 100 - Exponenciación (a elevado a 2)


// ============================================================================
// 5. OPERADORES DE COMPARACIÓN
// ============================================================================

/**
 * Operadores que comparan valores y retornan booleanos (true/false)
 */

let x = 5;
let y = "5";
let z = 5;

console.log(x == y);    // true  - Igualdad débil (ignora tipo)
console.log(x === y);   // false - Igualdad estricta (verifica tipo)
console.log(x === z);   // true  - Ambos son número 5

console.log(x != y);    // false - Desigualdad débil
console.log(x !== y);   // true  - Desigualdad estricta

console.log(x > 3);     // true  - Mayor que
console.log(x < 10);    // true  - Menor que
console.log(x >= 5);    // true  - Mayor o igual que
console.log(x <= 3);    // false - Menor o igual que


// ============================================================================
// 6. OPERADORES LÓGICOS
// ============================================================================

/**
 * Operadores lógicos para crear condiciones complejas
 * && (AND) - Verdadero si AMBAS condiciones son verdaderas
 * || (OR)  - Verdadero si AL MENOS UNA condición es verdadera
 * !  (NOT) - Invierte el valor booleano
 */

let cond1 = true;
let cond2 = false;

console.log(cond1 && cond2);  // false - AND: ambas deben ser true
console.log(cond1 || cond2);  // true  - OR: al menos una es true
console.log(!cond1);           // false - NOT: invierte true a false


// ============================================================================
// 7. ARRAYS (ARREGLOS)
// ============================================================================

/**
 * Los arrays son listas ordenadas de elementos
 * Se acceden mediante índices que comienzan en 0
 */

// Declaración de un array
let frutas = ["manzana", "plátano", "naranja"];
let numeros = [1, 5, 10, 15, 20];
let mixto = [1, "Juan", true, 25.5];

// Acceso a elementos mediante índice
console.log(frutas[0]);     // "manzana" (primer elemento)
console.log(frutas[1]);     // "plátano" (segundo elemento)
console.log(frutas.length); // 3 (cantidad de elementos)

// Modificar elementos
frutas[1] = "fresa";
console.log(frutas);  // ["manzana", "fresa", "naranja"]

// Métodos útiles de arrays
let arreglo = [1, 2, 3];
arreglo.push(4);        // Agregar elemento al final → [1, 2, 3, 4]
arreglo.pop();          // Eliminar último elemento → [1, 2, 3]
console.log(arreglo);


// ============================================================================
// 8. OBJETOS
// ============================================================================

/**
 * Los objetos son colecciones de pares clave-valor (propiedades)
 * Piensa en ellos como un conjunto que agrupa características relacionadas
 */

// Declaración de un objeto
let persona = {
  nombre: "Juan",
  edad: 22,
  ciudad: "Medellín",
  esEstudiante: true,
  altura: 1.75
};

// Acceso a propiedades - Forma 1: Punto (.)
console.log(persona.nombre);    // "Juan"
console.log(persona.edad);      // 22

// Acceso a propiedades - Forma 2: Corchetes
console.log(persona["ciudad"]); // "Medellín"

// Modificar propiedades
persona.edad = 23;

// Agregar nuevas propiedades
persona.profesion = "Desarrollador";

// Eliminar propiedades
delete persona.altura;

console.log(persona);  // Objeto con los cambios

// Obtener el tipo de una variable
console.log(typeof persona);    // "object"
console.log(typeof frutas);     // "object" (arrays también son objects)


// ============================================================================
// 9. FUNCIONES DECLARATIVAS
// ============================================================================

/**
 * Las funciones permiten reutilizar código
 * Función declarativa: se define con la palabra clave function
 */

// Función sin parámetros
function saludar() {
  console.log("¡Hola!");
}

saludar();  // Llamar la función


// Función con un parámetro
function saludarPersona(nombre) {
  return "Hola, " + nombre;
}

console.log(saludarPersona("María"));     // "Hola, María"
console.log(saludarPersona("Carlos"));    // "Hola, Carlos"


// Función con múltiples parámetros
function sumar(a, b, c) {
  return a + b + c;
}

console.log(sumar(5, 5, 5));   // 15
console.log(sumar(10, 20, 30)); // 60


// Función que valida si un número es par
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(4));  // true
console.log(esPar(7));  // false


// ============================================================================
// 10. FUNCIONES FLECHA (ARROW FUNCTIONS)
// ============================================================================

/**
 * Las arrow functions son una forma más moderna y concisa de escribir funciones
 * Sintaxis: const nombreFuncion = (parámetros) => { cuerpo }
 */

// Arrow function simple - Retorno implícito
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(3, 4));  // 7

// Arrow function con un parámetro
const multiplicar = (numero) => numero * 2;
console.log(multiplicar(5));  // 10

// Arrow function con múltiples líneas - Requiere return explícito
const calcular = (a, b) => {
  let suma = a + b;
  let producto = a * b;
  return {
    suma: suma,
    producto: producto
  };
};

console.log(calcular(3, 4));  // { suma: 7, producto: 12 }


// ============================================================================
// 11. TEMPLATE LITERALS (BACKTICKS)
// ============================================================================

/**
 * Template literals permiten interpolar variables en strings de forma elegante
 * Se usan con backticks (`) en lugar de comillas
 */

let nombreEstudiante = "Juan";
let edadEstudiante = 22;
let ciudad = "Medellín";

// Forma antigua (concatenación)
console.log("Mi nombre es " + nombreEstudiante + " y tengo " + edadEstudiante + " años");

// Con template literals (forma moderna)
console.log(`Mi nombre es ${nombreEstudiante} y tengo ${edadEstudiante} años`);

// Útil para múltiples líneas
let presentacion = `
  Hola, mi nombre es ${nombreEstudiante}.
  Tengo ${edadEstudiante} años.
  Vivo en ${ciudad}.
`;
console.log(presentacion);

// También se pueden usar expresiones dentro de ${}
console.log(`El resultado de 5 + 3 es: ${5 + 3}`);
console.log(`¿Es mayor de edad? ${edadEstudiante >= 18}`);


// ============================================================================
// 12. FUNCIÓN ANÓNIMA
// ============================================================================

/**
 * Función sin nombre que generalmente se asigna a una variable
 */

let funcionAnonima = function(a, b) {
  return a + b;
};

console.log(funcionAnonima(10, 5));  // 15


// ============================================================================
// RESUMEN DE CONCEPTOS
// ============================================================================

/**
 * ✓ Variables: let (recomendado), const (constantes), var (evitar)
 * ✓ Tipos: String, Number, Boolean, Undefined, Null, Object, Array
 * ✓ Operadores: Aritméticos, Comparación, Lógicos
 * ✓ Arrays: Listas ordenadas de elementos
 * ✓ Objetos: Colecciones de pares clave-valor
 * ✓ Funciones: Bloques de código reutilizable
 * ✓ Arrow Functions: Sintaxis moderna de funciones
 * ✓ Template Literals: Interpolación elegante de strings
 */
