
function calcula() {
    var nome, idade, limite, contador;
    contador = 0;

    limite = prompt("Digite o limite desejado:");

    while (contador < limite) {
        nome = prompt("Digite o nome:");
        idade = prompt("Digite a idade de: "+nome);
        if(idade < 18)
            alert(nome+" é menor de idade!");
            //document.getElementById("paragrafo4").innerText = nome + " é menor de idade!";
        else
            alert(nome+" é maior de idade!");
            //document.getElementById("paragrafo5").innerText = nome + " é maior de idade!";
        contador++;
    }
}