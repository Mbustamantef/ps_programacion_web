let numero1=10;
let numero2=0;
let numero3=3.14;
let numero4=1+5;

let suma= numero1 + numero2;
let resta=numero4-numero1;
let multiplicacion= numero1 * numero3;
let division= numero1 / numero2;  

if (division === Infinity){
    division="No se puede dividir por cero";
}else{
    division= numero1 / numero2;  
}


if(multiplicacion ===0){
    multiplicacion="La multiplicacion es 0"
}else{
   multiplicacion="La multiplicacion es diferente de 0"
}

if (resta <0){
    resta="El resultado es un numero negativo"
}else{
    resta=numero4-numero1;
}  




console.log("La suma es: " + suma,"los numeros a sumar son " + numero1 + " y " + numero2);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);

