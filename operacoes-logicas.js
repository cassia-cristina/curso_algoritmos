var nome, nota1, nota2, media, passou;
passou = false;

nome= prompt("Digite o seu nome:");
nota1= prompt("Digite a nota 1:");
nota2= prompt("Digite a nota 2:");


//Cálculo da média
media= (parseInt(nota1) + parseInt(nota2)) / 2;

/*imprimindo resultados em pop-up
alert("O nome digitado foi: " + nome);
alert("A nota 1 digitada foi: " + nota1);
alert("A nota 2 digitada foi: " + nota2);
alert("m"+"\u00e9"+"dia final: " + media);*/

document.getElementById("paragrafo1").innerText = "Nome: "+nome
document.getElementById("paragrafo2").innerText = "Nota 1: "+nota1
document.getElementById("paragrafo3").innerText = "Nota 2: "+nota2
document.getElementById("paragrafo4").innerText = "Media final: "+media

if(media>=60)
    passou = true;

if(passou && (nome=='Carla' || nome=='Cassia'))
      alert("O aluno "+nome+" foi aprovado!")
else
      alert("O aluno "+nome+" foi reprovado!")