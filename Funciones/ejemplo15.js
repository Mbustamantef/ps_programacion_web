const crearMultiplicador = function (base) {
  if (typeof base !== "number" || Number.isNaN(base)) {
    return function () {
      return "Base inválida";
    };
  }

  return function (n) {
    if (typeof n !== "number" || Number.isNaN(n)) return "Número inválido";
    return base * n;
  };
};

const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(5)); // 15

const multInvalido = crearMultiplicador("x");
console.log(multInvalido(5)); // Base inválida
