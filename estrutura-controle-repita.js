
function calcula(params) {
    var sair, valor1, valor2;
    do {
        valor1 = prompt("Digite o valor 1:")
        valor2 = prompt("Digite o valor 2:")
        document.getElementById("paragrafo5").innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sair = prompt("Deseja sair? S/N")
        
    } while (sair == "N")
}


