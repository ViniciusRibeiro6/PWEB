var nome, nota1, nota2, nota3;

nome = prompt("Insira o nome do aluno");
nota1 = parseFloat(prompt("Insira a nota1 do aluno"));
nota2 = parseFloat(prompt("Insira a nota2 do aluno"));
nota3 = parseFloat(prompt("Insira a nota3 do aluno"));

nota1=((nota1+nota2+nota3)/3).toFixed(2);


window.alert("O aluno " + nome + " " +
             "ficou com media: " + nota1);