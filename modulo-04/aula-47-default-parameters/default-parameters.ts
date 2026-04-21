export {};

function descontoCompra(preco: number, desconto = 0.08){
    return preco * (1 - desconto);
}

console.log(descontoCompra(100)); //92

function exibirMensagem(mensagem:string, saudar = 'Fala pessoal!') {
    return saudar + '  ' + mensagem + '!';
};

console.log(exibirMensagem('Typescript Developers'));

function exibirNome (nome:string, sobrenome = 'Lessa'){
    return nome + ' ' + sobrenome;
};

const resultado_1 = exibirNome('Bruno');
const resultado_2 = exibirNome('Bruno', undefined);
//const resultado_3 = exibirNome('Bruno', 'de Sena', 'Senhor');
const resultado_4 = exibirNome('Bruno', 'de Sena');

console.log(resultado_1);
console.log(resultado_2);
//console.log(resultado_3);
console.log(resultado_4);