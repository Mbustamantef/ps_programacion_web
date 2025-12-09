const prompt = require("prompt-sync")({ sigint: true });

let entradaUsuario = null;
let nombre = entradaUsuario || "Invitado";
console.log(nombre); // "Invitado"

let contador = 0;
let valor = contador || 1;
console.log(valor); // 1