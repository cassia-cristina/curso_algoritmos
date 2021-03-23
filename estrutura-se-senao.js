
function calcula(){
    var valor1, valor2, operacao, resultado;
    valor1 = prompt("Digite o valor 1:");
    valor2 = prompt("Digite o valor 2:");
    operacao = prompt("Digite a operacao desejada (+, -, * ou /)");

    if (operacao == "+") {
        resultado = parseInt(valor1) + parseInt(valor2);
    } else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2);
    } else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2);
    } else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2);
    }
   document.getElementById("paragrafo5").innerText = "Resultado: "+ resultado;
}
