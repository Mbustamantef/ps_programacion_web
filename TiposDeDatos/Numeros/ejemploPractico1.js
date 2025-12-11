const prompt = require("prompt-sync")({ sigint: true });

//Problema 8: Matriz 3x3 y suma de filas/columnas
//Leer 9 números y formar una matriz 3x3.
//Mostrar la matriz y la suma de cada fila y cada columna.
// [
//1,2,3
//4,5,6
//7,8,9]
console.log("=== Problema 8: Matriz 3x3 ===");

let matriz = [];
for(let i = 0 ; i < 3; i ++){
    matriz[i]= [];
 for (let j = 0 ; j < 3;j ++){
    const valor=Number(prompt(`Valor para fila ${i}, columna ${j}: `));
    matriz[i][j] = isNaN(valor) ? 0 :valor;
 }
}
//valores de la matriz
console.log("\n Matriz ingresada;")
for(let i = 0 ; i <3;i ++){
    console.log(matriz[i].join("\t"))
}

//Sumatoria 

console.log("Sumatoria de filas;")

for(let i = 0 ; i <3;i ++){
    let sumaFila=0;
    for (let  j=0 ; j <3 ; j++){
     sumaFila += matriz[i][j]   
    }
    console.log(`Fila ${i}: ${sumaFila}`);
}

console.log("\nSuma de columnas:");
for (let j = 0; j < 3; j++) {
  let sumaCol = 0;
  for (let i = 0; i < 3; i++) {
    sumaCol += matriz[i][j];
  }
  console.log(`Columna ${j}: ${sumaCol}`);
}
