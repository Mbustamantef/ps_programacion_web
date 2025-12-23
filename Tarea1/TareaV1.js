
const prompt = require("prompt-sync")({ sigint: true });

 
 while (true) {
    console.log("====== Calculadora =======")
    console.log("Ingrese el numero que desea para poder realizar las operacion")
    console.log("1)Suma \n 2)Resta \n 3)Multiplicacion \n 4)Division \n 5)Salir")

    let opcion = Number(prompt("que opcion deseas ingresar?:"));

    if (isNaN(opcion)||opcion <= 0 ){
    console.log("Error")
    console.log("Ingrese un numero  valido")
    process.exit(1);
    }
    
    if (opcion === 5 ){
    console.log("Muchas gracias")
    break;
    }
    
    if (opcion < 1 || opcion > 5){
     console.log("Opcion invalida. Intenda nuevamente");
     continue;   
    }
    
    let numero1 = Number(prompt("Ingrese el primer número: "));
    let numero2 = Number(prompt("Ingrese el segundo número: "));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("\n⚠️ Error: Debe ingresar números válidos.");
        continue;
    }

    let resultado= null;
    let operacion= '';

    if(opcion === 1){
        resultado = numero1 + numero2;
        operacion= `${numero1} +${numero2} `;
    }
    else if(opcion === 2){
        resultado = numero1 - numero2;
        operacion= `${numero1} -${numero2} `;
    }
    else if(opcion === 3){
         resultado = numero1 * numero2;
         operacion= `${numero1} * ${numero2} `;
    }
    else if(opcion === 4){
    if (numero2 === 0){
      console.log("\n⚠️ No es posible dividir entre cero.");
      continue;
    }
    resultado = numero1/numero2;
      operacion= `${numero1} / ${numero2} `;
}

  console.log("\n=== RESULTADO ===");
  console.log("Operación:", operacion);
  console.log("Resultado:", resultado);
  console.log("==================\n");
}   
