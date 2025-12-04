// Problema 2: Juego de adivinanza con intentos
// Adivinar un número entre 1 y 100 con máximo 7 intentos.

const prompt = require("prompt-sync")({ sigint: true });

console.log("=== Problema 2: Juego de Adivinanza ===");

//declarar las acciones

const secreto = Math.floor(Math.random() * 100) + 1; //80
const maxIntentos = 7;
let ganado = false;

//crear las acciones
    for(let intento = 1; intento <= maxIntentos ; intento ++ ){
    const valor = Number(prompt(`Intento ${intento}/${maxIntentos} - Ingresa un número: `)) //50   
    
    if(valor === secreto) {
    console.log("🎉 ¡Correcto! Adivinaste el número.")
    ganado = true;
    break;
    }else if (valor < secreto){
    console.log("El numero secreto es mayor")
    }
    else{
    console.log("El numero es menor")
    }
}
if (!ganado){
 console.log ("😢 Se te acabaron los intentos. El número era:", secreto)
}
    
     




