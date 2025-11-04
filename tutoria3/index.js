

let n1 = parseInt(prompt("Ingresa un numero"));
let suma1 = 0; 

for (let i = 1 ; i <= n; i++) {
    // suma = suma + i 
    suma += i;
}

console.log(` la suma de los numeros ${n} el numero es:${suma}` );



for (let i = 1; i < 10 ; i++ ){
        console.log(i);
}

// contar numeros multoplos de 3 del 1 al 30 

let contador = 0 ;
for(let i = 1; i <= 30 ; i++){
    if(i % 3 === 0 ) contador++
}

console.log(`hay ${contador} multiplos de 3 entre el 1 y el 30`);




  const numSecreto1 = Math.floor(Math.random() * 10) + 1;
    let intento;

      do {
        intento = parseInt(prompt("Adivina el numero secreto (del 1 al 10):"));
        if (intento > numSecreto1) {
          console.log("Demasiado alto, el numero es un poco más bajo");
        } else if (intento < numSecreto1)
          console.log("El numero es demasiado bajo, por favor aumenta");
      } while (intento !== numSecreto1);
      console.log("Felicidades acertaste");

      // imprimir el factorial de un numero
        let num = parseInt(prompt("Ingresa un numero:"));
        let factorial = 1;

        while (true) {
          for (let i = 1; i <= num; i++) {
            // factorial = factorial * i
            factorial *= i;
          }
        }

      // contar numeros regresivamente hasta el cero
        let n = parseInt(prompt("Cuenta regresiva desde :"));
        while (n >= 0) {
          console.log(n);
          n--;
        }

      // sumar los numeros hasta que el usurios escriba el numero cero
        let suma = 0;
        let numero;

        while (true) {
          numero = parseFloat(prompt("ingresa un numero (0 para salir:)"));
          if (numero === 0) break;
          suma += numero;
        }

        console.log("suma total:", suma);

        const numSecreto = Math.floor(Math.random() * 10) + 1;
        let intento2;

        do {
          intento2 = parseInt(prompt("Adivina el numero secreto (del 1 al 10):"));
          if (intento2 > numSecreto) {
            alert("Desamasiado alto el numero es un poco mas bajo");
          } else if (intento2 < numSecreto)
            alert("el numero es demasiado bajo porfavor aumenta");
        } while (intento2 !== numSecreto);
        console.log("Felicidades acertaste");

        let opcion;
        do {
          opcion = prompt("menu \n1. saludar \n2. Despedirse \n3.cerrar menu");
          if (opcion === "1")
            console.log("Hola bienvenido al menu de la cohorte 4");
          else if (opcion === "2")
            console.log("Hola adios  al menu de la cohorte 4");
          else if (opcion !== "3") console.log("opcion no valida");
        } while (opcion !== "3");
        console.log("se cerro el menu vuelve mañana ");

        // mostrar los dias con switch

      let dia = parseInt(prompt("ingrese un numero (1-7):"));

      switch (dia) {
        case 1:
          console.log("hoy es lunes");
          break;
        case 2:
          console.log("hoy es martes");
          break;
        case 3:
          console.log("hoy es miercoles");
          break;
        case 4:
          console.log("hoy es jueves");
          break;
        case 5:
          console.log("hoy es viernes");
          break;
        case 6:
          console.log("hoy es  sabado");
          break;
        case 7:
          console.log("hoy es Domingo");
          break;
        default:
          console.log("opcion no valida ingresa un numero valido");
          break;
      }

    let saldo = 10000;
      let opcion2;
      do {
        opcion2 = prompt(
          " 1.consultar saldo \n 2.Retirar \n3.Depositar \n 4.salir "
        );
        switch (opcion2) {
          case "1":
            console.log(`✔️Tu saldo es: ${saldo}`);
            break;
          case "2":
            let retiro = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (retiro > saldo) {
              console.log("saldo insuficiente");
            } else {
              saldo -= retiro;
              console.log(`Tu retiro fue existoso. Tu nuevo saldo es:${saldo}`);
            }
            break;
          case "3":
            let deposito = parseFloat(prompt("Ingrese el monto a Depositar:"));
            saldo += deposito;
            console.log(`Tu deposito fue exitoso. Tu nuevo saldo es: ${saldo}`);
            break;
          case "4":
            console.log("GRACIAS POR USAR EL BANCO JS COHORTE 5");
            break;

          default:
            break;
        }
      } while (opcion2 !== "4");

     // sumar todos los valores de un arreglo 

    const precios = [500, 1000, 2000, 700];

    let total = 0;

    precios.forEach((precio)=>{
        total += precio;
    });

    console.log(`Total de la compra es: ${total}`);
    





