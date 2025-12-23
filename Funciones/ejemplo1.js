// const cuadrado = function(y,x,z) {
//   return (y * x) + z;
// };

// console.log(cuadrado(12,3,1));

// const hacerSonido = function () {
//   console.log("Pling!");
// };


// → Pling!

// let resultado=100;
// const potencia = function(base, exponente) {
//   let resultado = 1;
//   for (let cuenta = 0; cuenta < exponente; cuenta++) {
//     resultado *= base;
//   }
//   return resultado;
// };

// console.log(potencia(2, 10));
// // → 1024


// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
//   // → 60
// }
// // y no es visible desde aquí
// console.log(x + z);
// // → 40



const humus = function(factor) {
  const ingrediente = function(cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
  };
  ingrediente(1, "lata", "garbanzos");
  ingrediente(0.25, "taza", "tahini");
  ingrediente(0.25, "taza", "jugo de limón");
  ingrediente(1, "clavo", "ajo");
  ingrediente(2, "cucharada", "aceite de oliva");
  ingrediente(0.5, "cucharadita", "comino");
};