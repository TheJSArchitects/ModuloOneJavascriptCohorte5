//selecciones principales del DOM

const btnCambiarColor = document.getElementById("btnCambiarColor");
const titulo = document.querySelector("h1");

const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const textoModificable = document.getElementById("textoModificable")

const btnToogleClassCss = document.getElementById("btnToogleClaseCss");
const cuadro = document.getElementById("cuadro")

const btnAgregarElementoList = document.getElementById("btnAgregarElementos");
const listaDinamica = document.getElementById("listaDinamica");

const btnEliminarElementos = document.getElementById("btnEliminarElementos")


// cambiar el color del titulo al hacer click en el boton

/*addEventListener = escucha el evento Click 
style directamente
*/

btnCambiarColor.addEventListener("click",()=>{
    titulo.style.color = titulo.style.color === "blue" ? "white":"blue"; 
});

// cambiar el texto de mi section 

btnCambiarTexto.addEventListener('click',()=>{
    textoModificable.textContent = "Hola mundo desde JS5 Dev senior";
});

// cambiar color de mi cajita 
btnToogleClassCss.addEventListener("click",()=>{
    //añade o remueve la clase activo , al momento de dar click 
    cuadro.classList.toggle("activo")
});


let contador = 1;
btnAgregarElementoList.addEventListener('click',()=>{
    // createElement > nuevo <li></li>
    const li = document.createElement("li");

    //asignar el contenido y aumentar el contador 
    li.textContent = `Elemento creado #${contador++}`

    // agregar al final de la lista un appendChild
    listaDinamica.appendChild(li);
});

// eliminar el ultimo elemento de mi lista 

btnEliminarElementos.addEventListener('click',()=>{
    if(listaDinamica.lastChild){
        listaDinamica.removeChild(listaDinamica.lastChild);
    }

});


/*=================================*/
/*CALCULADORTA COHORTE 5*/
/*=================================*/

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion")
const btnCalcular= document.getElementById("btnCalcular")
const resultado= document.getElementById("resultadoCalc")

// eschucamos el evento click 

btnCalcular.addEventListener("click",()=>{

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const op = operacion.value;

    if(isNaN(n1)||isNaN(n2)){
        resultado.textContent = "Porfavor ingresame numeros validos";
        resultado.style.color = "red";
        return; 
    }

    let res = 0;

    if(op === "sumar"){
        res = n1 + n2;
    }else if(op === "restar"){
        res = n1 - n2;
    }else if(op === "multiplicar"){
        res = n1 * n2;
    }else if(op === "dividir"){
        if(n2 === 0){
            resultado.textContent = "No se puede dividir por el numero cero";
            resultado.style.color = "red"
            return;
        }
        res = n1 / n2;
    }

    resultado.textContent = `Resultado operacion: ${res}`;
    resultado.style.color = "green";

});


