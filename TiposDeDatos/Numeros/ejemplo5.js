const prompt = require("prompt-sync")({ sigint: true });

let humor = "ligero";
console.log(humor);
humor = "oscuro"; // 'humor' ahora apunta a "oscuro"
console.log(humor);

// let deudaLuigi = 140;
// console.log(deudaLuigi);
// deudaLuigi = deudaLuigi - 35; // 140 - 35 = 105
// console.log(deudaLuigi); // 105


let uno = 1, dos = 2;
let hola="hola",uno2="uno";






//Buenas practicas
let hola_clase1;
let dos_1$
let numero1 = 1;
let numero2= 2;

//Malas practicas

let HOLA= 'aa';
let x =1;
let y =2;


// let numero = Number(prompt("Elige un número"));

// if (numero < 10) {
//   console.log("Pequeño");
// } else if (numero < 100) {
//   console.log("Mediano");
// } else {
//   console.log("Grande");
// }


// console.log(uno + dos); // 3

// Funciona también con var y const
// var nombre = "Ayda";
// const saludo = "Hola ";
// console.log(saludo + nombre);

//break
for (let actual = 30; ; actual = actual + 1) {

  if (actual % 7 == 0) {
 // 21
    break; // Sale del ciclo cuando encuentra el primer múltiplo de 7
  }
}

//continue

for (let i = 0; i < 10; i++) {

  if (i % 2 === 0) continue; // Si es par, salta a la siguiente iteración
  // Imprime solo números impares
}


let contador = 0;
contador = contador + 1; // Forma larga
contador += 1;         // Forma abreviada
contador++;            // Incremento unitario (post-incremento)

console.log(contador); // 3

let resultado = 1;
resultado *= 2;        // resultado = resultado * 2;
console.log(resultado); // 2


