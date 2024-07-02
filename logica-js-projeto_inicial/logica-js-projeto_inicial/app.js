
alert("Seja bem vindo ao jogo do número secreto.");
    let numeroMaximo = 100;
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    let chute;
    let tentativas = 1; 
    
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);
       if (chute == numeroSecreto){
        break;
    
            }else{
                if (numeroSecreto > chute){
                    alert (`O número secreto é maior que ${chute}`);
                }else{
                    alert(`O número secreto é menor que ${chute}`);
    }
    tentativas++;
}
}
//Deixei o if-else por escolha, poderia ser usado o operador ternário tbm. 

if(tentativas > 1){
    alert(`Isso ai! Você descobriou o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
}else{
    alert(`Isso ai! Você descobriou o número secreto! ${numeroSecreto} com ${tentativas} tentativa.`);
}    