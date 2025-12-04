// Problema 1: Analizador de N números
// Lee N números y muestra: positivos, negativos, ceros, min, max y promedio.
const prompt = require("prompt-sync")({ sigint: true });

let cantidad = Number(prompt("Cuantos numeros deseas ingresar? "));

//Validacion de datos 
if (isNaN(cantidad) || cantidad <= 0) {
  console.log("Error")
  console.log("Ingrese un numero  valido")
  process.exit(1);
}

//declaracion de las variables 
let positivos = 0;
let negativos = 0 ;
let ceros = 0 ;
let suma = 0 ;
let min = null;
let max = null;

//Contador   
for (let i=1 ; i <= cantidad ; i ++){
  const valor = Number(prompt(`Ingresa el número ${i}:`))
  //Validacion de numeros
  if (isNaN(valor)){
    console.log("Valor ingresado no valido , se toma como 0.")
  }

  //Contador de numeros
  if(valor  > 0) positivos++;
  else if (valor < 0) negativos ++ ;
  else ceros++;
  
  //contador
  suma  += valor; 
  
  //Minimos y maximos
  if (min === null || valor < min ) min = valor ;
  if (max === null || valor > max) max = valor ;
  }
  const promedio = suma / cantidad;
  console.log("\n--- Resultados ---");
  console.log("Cantidad de positivos:", positivos);
  console.log("Cantidad de negativos:", negativos);
  console.log("Cantidad de ceros:", ceros);
  console.log("Mínimo:", min);
  console.log("Máximo:", max);
  console.log("Promedio:", promedio);


