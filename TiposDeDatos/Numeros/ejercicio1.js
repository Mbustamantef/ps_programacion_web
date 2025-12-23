const prompt = require("prompt-sync")({ sigint: true });

let baldeLitros = 18;
let baldeRendimiento = 12;
let ancho = Number(prompt("Ingrese ancho: \t"));
let largo = Number(prompt("Ingrese largo: \t"));

let area = ancho * largo;
 
const calculoRendimiento = area / baldeRendimiento;
const calculoLitro = calculoRendimiento/baldeLitros;
const litroRedondeado= Math.ceil(calculoLitro)

console.log("Area \t" + area)
console.log("Rendimiento \t"   + calculoRendimiento)
console.log("Litro sin redondeo \t"   + calculoLitro)
console.log("Litro con redondeo \t"   + litroRedondeado)

