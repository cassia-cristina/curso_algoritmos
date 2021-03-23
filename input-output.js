var nome, nota1, nota2, media, mediaEscolar;

mediaEscolar= 70;

nome= prompt("Digite o seu nome:");
nota1= prompt("Digite a nota 1:");
nota2= prompt("Digite a nota 2:");

//Cálculo da média
media= (parseInt(nota1) + parseInt(nota2)) / 2;

//imprimindo resultados
alert("O nome digitado foi: " + nome);
alert("A nota 1 digitada foi: " + nota1);
alert("A nota 2 digitada foi: " + nota2);
alert("m"+"\u00e9"+"dia final: " + media);

if(media >= mediaEscolar)
      alert("O aluno "+nome+" foi aprovado!")    
else
      alert("O aluno "+nome+" foi reprovado!")