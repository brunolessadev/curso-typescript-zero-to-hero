export {};

class Estudante<T, U> {
    private id: T;
    private nome: U;

    constructor(id: T, nome: U) {
        this.id = id;
        this.nome = nome;
    }

    retornarValores(): void {
        console.log(`identificação do estudante: Id: ${this.id}, Nome: ${this.nome}`);
    }
}

const estudante = new Estudante<number, string>(101, 'Bruno Lessa');
const estudanteSecundario = new Estudante<string, string>('102', 'Diego Lessa');

estudante.retornarValores();
estudanteSecundario.retornarValores();