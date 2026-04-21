export { };

const numeroMax: number = 100;
let contador: number = 100;

if (contador < numeroMax){
 contador++
}

console.log (contador);

const permissaoIdadeDirigir: number = 17;

if (permissaoIdadeDirigir >= 18 ) {
    console.log('Você está habilitado para dirigir!')
} else {
    console.log('Você não está habilitado para dirigir!')
}


let desconto: number;

let valorCompra: number = 10;

if (valorCompra > 0 && valorCompra <= 5){
    desconto = 5;    
}else if (valorCompra > 5 && valorCompra <= 10){
    desconto = 10;
}else {
    desconto = 15;
}
/*
console.log(`Você teve um desconto de...: ${desconto} %desconto`)

const idadeVotacao: number = 18;

if (idadeVotacao >= 18){
    console.log(`Você é elegível para votar.`)
}else {
    console.log('Você n~çao é elegível para votar.')
}
*/

const idadeVotacao: number = 16;

const podeVotar = ( idadeVotacao >= 18 ) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.'
console.log(podeVotar);