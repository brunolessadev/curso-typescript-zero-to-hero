function detalhesFuncionarios(funcionario: string | number){
    if(typeof funcionario === 'string'){
        return `O nome do funcionário é ${funcionario}`;
    }else if(typeof funcionario === 'number'){
        return `O id do funcionário é ${funcionario}`;
    }
}

const func = detalhesFuncionarios('Bruno Lessa');
console.log(func);

const func2 = detalhesFuncionarios(123);
console.log(func2); 

/*===============================================================*/

const formatoData = (valor: Date | string) => {
    if(valor instanceof Date){
        return valor.toUTCString();
    }
    return new Date(valor).toUTCString();
}
console.log(formatoData(new Date('2026-01-01')));
console.log(formatoData('2022-01-01'));

/*===============================================================*/

interface Humano {
    falar: () => void;
}

interface Animal {
    voz: () => void;
}

const dizerAlgo = (som: Humano | Animal) => {
    if('falar' in som){
        return som.falar();
    }
    return som.voz();
};

dizerAlgo({falar: () => console.log('Sou humano e falo Oi, tudo bem?')});
dizerAlgo({voz: () => console.log('Ele é um cão e fala Au Au Au')});

/*===============================================================*/

type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    throw new Error('Argumentos inválidos! Ambos os argumentos devem ser númericos ou strings.');
}

console.log(exibirTipo('Bruno', '2300'));
console.log(exibirTipo(5, 5));
console.log(exibirTipo('Lessa', 5));

/*===============================================================*/

class Carro {
    nome:string;
    marca:string;

    constructor(nome: string, marca: string){
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome:string;
    ano:number;

    constructor(nome: string, ano: number){
        this.nome = nome;
        this.ano = ano;
    }
}

function detalhesVeiculo(veiculo: Carro | Moto){
    if(veiculo instanceof Carro){
        return `Nome do carro é: ${veiculo.nome}, e a marca é: ${veiculo.marca}`;
    }else if (veiculo instanceof Moto){
        return `Nome da moto é: ${veiculo.nome}, e o ano é: ${veiculo.ano}`;
    }    
}

const carro = new Carro('Fusca', 'Volkswagen');
console.log(detalhesVeiculo(carro));

const moto = new Moto('Honda', 2022);
console.log(detalhesVeiculo(moto));

/*===============================================================*/

interface Animal_02 {
    grupo: string;
}

class Peixe implements Animal_02 {
    grupo: string;
    corPeixe: string;
    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal_02 {
    grupo: string;
    corPena: string;
    constructor(grupo: string, corPena: string){
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar( grupo: string){
    console.log(`O grupo ${grupo} está nadando!`);
}

function voar( grupo: string){
    console.log(`O grupo ${grupo} está voando!`);
}

function mover(animal: Animal_02){
    if('corPeixe' in animal){
        nadar((animal as Peixe).grupo);
    }else if('corPena' in animal){
        voar((animal as Passaro).grupo);
    }
}

mover(new Peixe('Peixes', 'Azul'));
mover(new Passaro('Passaros', 'Vermelho'));