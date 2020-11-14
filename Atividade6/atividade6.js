var escolha, escolhaPC, vitoria;

escolha = prompt("Digite: \np para papel; \nr para pedra; \nt para tesoura");

escolhaPC = aleatorio();
vitoria = vencedor(escolha ,escolhaPC);

switch(escolha){
        
    case 'p':
        escolha = "Papel";
        break;
        
    case 'r':
        escolha = "Pedra";
        break;
    
    case 't':
        escolha = "Tesoura";
        
}

switch(escolhaPC){
        
    case 'p':
        escolhaPC = "Papel";  
        break;
        
    case 'r':
        escolhaPC = "Pedra";
        break;
    
    case 't':
        escolhaPC = "Tesoura";
        
}

switch(vitoria){
    
    case 0:
        vitoria = "Que pena, você perdeu.";
        break;
        
    case 1:
        vitoria = "Parabéns, você ganhou!";
        break;
        
    case 2:
        vitoria = "Empate.";
        
}

window.alert("Você jogou " + escolha + " " + 
            "e o computador jogou " + escolhaPC + "\n" +
            vitoria);


function aleatorio (){
    
    var num = 1; 
    
    while (num == 1)
    num = Math.random();
    
    if (num < 0.33)
        return 'p';  
    
    else
        if(num < 0.66) 
            return 'r';
    
        else
            return 't';
    
}

function vencedor(escolha, escolhaPC){
    
//    0 = derrota
//    1 = vitoria
//    2 = empate
    
    if (escolha == escolhaPC)
        return 2;
    
    if (escolha == 'p'){
        
        if (escolhaPC == 't')
             return 0;
            
        else 
            return 1;
    }
    
    if (escolha == 'r'){
        
        if (escolhaPC == 'p')
            return 0;
        
        else
            return 1;
    }
    
    if (escolha == 't'){
        
        if(escolhaPC == 'r')
            return 0;
        
        else
            return 1;
    }
    
}