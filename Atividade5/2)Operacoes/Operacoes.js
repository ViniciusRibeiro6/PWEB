var num1, num2;

num1 = parseFloat(prompt("Insira o primeiro número"));
num2 = parseFloat(prompt("Insira o segundo número"));

window.alert("Soma dos dois: " + (num1+num2) + "\n" +
                "Subtração do primeiro pelo segundo: " + 
                (num1-num2) + "\n" +
                "O produto dos dois: " + (num1*num2) + "\n" +
                "Divisão do primeiro pelo segundo: " + (num1/num2) + "\n" +
                "Resto da divisão do primeiro pelo segundo: " + (num1%num2) + "\n"
            
            );