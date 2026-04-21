
export {};

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor( nome:string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
        }
};

const pessoa = new Pessoa('Bruno', 'Lessa');

console.log(pessoa.nomeCompleto());


/* =====================================================*/
/*
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
};
    const estudante = new Estudante();

    estudante.codigoEstudante = 5684;
    estudante.nomeEstudante = 'Many Fury';

    console.log('Codigo do Estudante...: ' + estudante.codigoEstudante);
    console.log('Nome do Estudante...:' + estudante.nomeEstudante);
*/
    /* =====================================================*/


    class Estudante_1 {
        codigoEstudante: number;
        nomeEstudante: string;

        //Definir o Construtor
        constructor( codigoEstudante: number, nomeEstudante: string) {
            this.codigoEstudante = codigoEstudante;
            this.nomeEstudante = nomeEstudante;
        }
        listarEstudante(): void {
            console.log('Código do Estudante...:' + this.codigoEstudante);
            console.log('Nome do Estudante...:' + this.nomeEstudante);
        }
    }

    // Acessar os campos:

    const estudante_1 = new Estudante_1 (9845, 'Many Fury');

console.log(`Lendo o atributo código do Estudante...: ${estudante_1.codigoEstudante}`);
console.log(`Lendo o atributo nome do Estudante...: ${estudante_1.nomeEstudante}`);
