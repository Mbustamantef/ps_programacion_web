const prompt = require("prompt-sync")({ sigint: true });

const numeroInicial = Number (prompt("Ingrese un numero entre 1 y 10: \t"))

if (numeroInicial < 0 || numeroInicial > 10){
    console.log("El numero ingresado esta fuera del parametro \t")
}

for (fila =1 ;fila <= numeroInicial ; fila ++){
    let linea = "";

    for (espacio=1; espacio <= numeroInicial - fila ;espacio ++) {
     linea += "";
    }
    //descentes
    for(i = fila ; i>= 1;i--){
        linea+=i;
    }
    //acendentes
    for(i = 2 ; i <= fila ;i++){
        linea+=i;
}
console.log(linea)
}