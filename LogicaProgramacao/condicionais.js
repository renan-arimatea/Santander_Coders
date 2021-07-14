let estaSol = false;

if(estaSol) {
    console.log('Vou pra praia');
}

else{
    console.log('Vou pro campo');
}



let numero = -1;

if(numero > 0) {
    console.log('Numero positivo');
}

else if(numero == 0){
    console.log('Numero é zero');
}

else{
    console.log('Numero negativo');
}



let number = 3;

let paridade = number % 2 == 0 ? 'par' : 'impar';
console.log(paridade);



let sinal = 'vermelho';

switch(sinal){
    case 'verde' :
        console.log('Pode passar');
        break;
    case 'amarelo' :
        console.log('Prestes a fechar, cuidado...');
        break;
    case 'vermelho' :
        console.log('Fechado! Não passe');
        break;
    default :
    console.log('Sinal inválido');
}
