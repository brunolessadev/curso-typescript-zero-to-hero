export{};

function exibirPrecoFinal(preco: number, desconto: number, formato:boolean): number | string{
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto
}

//const descontoFinal =  exibirPrecoFinal(100, 0.05, true) as string;

const descontoFinal =  <number>exibirPrecoFinal(100, 0.05, false);
console.log(descontoFinal);


/*===============================================*/
/*
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano  = {
    idade: 27,
    idioma: 'Português'
}

const humano2 = humano as Humano;
console.log(humano2.nome.toLowerCase());
*/
/*===============================================*/

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano  = {
    idade: 27,
    idioma: 'Português'
}

//const humano2:Humano = humano;
//console.log(humano2.nome.toLowerCase());