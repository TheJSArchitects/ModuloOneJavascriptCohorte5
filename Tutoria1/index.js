// /D:/FundamentsJavascript/Tutoria2/index.js

// Ejemplos básicos y funciones

// Tipos y operaciones
let a = 5;
let b = 10;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);
console.log("a % b =", a % b); // resto

// Objeto de ejemplo
let persona = {
    nombre: "yara",
    edad: 20.5,
    esEstudiante: false
};
console.log("Nombre:", persona.nombre);

// Condicionales y operadores lógicos
let cachosTrue = true;
let isMyBoyfriend = false;

if (cachosTrue === true && isMyBoyfriend === true) {
    console.log("lo siento yo perdono cuernos o cachos");
} else {
    console.log("vete!!!!");
}

// Bucle for
for (let i = 1; i <= 6; i++) {
    console.log("numero:", i);
}

// Función declarativa
function saludar(nombre) {
    return "hola " + nombre;
}
console.log(saludar("maria"));

// Función flecha
const sumar = (x, y) => x + y;
console.log("sumar(3,4) =", sumar(3, 4));
