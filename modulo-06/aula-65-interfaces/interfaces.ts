export{};

interface Pessoa {
    nome: string;
    sobrenome:string;
    idade: number;
}

function exibirNome(pessoa: Pessoa){
    return`
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    Idade: ${pessoa.idade}
    `;
}

const bruno = {
    nome: 'Bruno',
    sobrenome: 'Lessa',
    idade: 31
}

console.log(exibirNome(bruno));

/*===============================================================*/

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number;
}

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
}

console.log(livro);

/*===============================================================*/

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: string;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1973
}

// carro.modelo = 'Kombi'; readonly ela não pode ser alterada

console.log(carro);

/*===============================================================*/

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    
    constructor(nome: string, idade: number, estaVivo: boolean){
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}

const gato = new Gato('Garfield', 10, true);

console.log(gato);
gato.comer('Ração');

/*===============================================================*/

interface Pessoa_02{
    nome: string;
    sobrenome: string;
    idade: number;
}

//o que muda entre interface e type é o sinal de = que define o que é um type e o que é uma interface

type Pessoa_03 = {   
    nome: string;
    sobrenome: string;
    idade: number;
}