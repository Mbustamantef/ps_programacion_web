// Problema 9: Serie de Fibonacci hasta un límite

const prompt = require("prompt-sync")({ sigint: true });

const limite = Number(prompt("Mostrar Fibonacci hasta el numero;"))

if (isNaN(limite)||limite < 0 ) {
console.log("limite invalido")
  process.exit(1);
}

let numero1= 0;
let numero2=1;

console.log("Serie de fibonacci:")

while (numero1 <= limite){
console.log(numero1)

const siguienteNumero= numero1 + numero2

numero1=numero2;
numero2=siguienteNumero;

}
