
function calcula(){
    var valor1, valor2, operacao, resultado;
    valor1 = prompt("Digite o valor 1:");
    valor2 = prompt("Digite o valor 2:");
    operacao = prompt("Digite a operacao desejada (+, -, * ou /)");

    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2);
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2);
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2);
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2);
            break;    
        default:
            break;
    }

   document.getElementById("paragrafo5").innerText = "Resultado: "+ resultado;
}
