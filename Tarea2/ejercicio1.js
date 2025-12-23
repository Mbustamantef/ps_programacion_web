const prompt = require("prompt-sync")({ sigint: true });

let litrosBalde = 18;
let rendimientoBalde = 12;

const largo = Number(prompt("Ingrese el largo "));
const ancho = Number(prompt("Ingrese el ancho "));

const area = ancho * largo;

const calculoBalde = area / rendimientoBalde;
const baldeExactos = calculoBalde / litrosBalde;
const baldeFinal = Math.ceil(baldeExactos);

console.log("Calculos");
console.log("Largo: \t" + largo + "\t" + "Ancho: \t" + ancho);
console.log("Area:\t" + area);
console.log(
  "Calculo de balde:" +
    calculoBalde +
    "\t" +
    "balde sin redondear: \t" +
    baldeExactos +
    "\t" +
    "Balde redondeados:\t" +
    baldeFinal
);
