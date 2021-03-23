function fatorial(valor){
    if (valor === 1) {
      return 1;    
    }
    return fatorial(valor - 1) * valor;     
}

function calcula (){
    numero = prompt ("Informe o numero para calcular o fatorial:");
   
    document.getElementById("paragrafo5").innerText = "O fatorial de " + numero + " e: " + fatorial(numero);
}


// Usando o for do curso:
// function calcula1(){
//     var fatorial, numero;

//     numero = prompt ("Informe o numero para calcular o fatorial:");
//     fatorial = 1;

//     for (var contador = 1; contador <= numero; contador++) {
//         fatorial *= contador;
//     }
//    document.getElementById("paragrafo5").innerText = "O fatorial de " + numero + " e: " + fatorial;
// }