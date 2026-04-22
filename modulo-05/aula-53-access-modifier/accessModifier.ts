export {};

class Estudante {
    constructor(
        public codigoEstudante: number,
        public nomeEstudante: string
    ) {}
}

const estudante_0 = new Estudante(201, 'Bruno Lessa');

console.log(estudante_0.codigoEstudante);
console.log(estudante_0.nomeEstudante);

/* ==================================================*/

class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor( codigoEstudante: number, nomeEstudante:string, idade:number){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
    retornarDadosEstudante() {
        return `
        Código do Aluno: ${this.codigoEstudante}.
        Nome do Estudante: ${this.nomeEstudante}
        Idade do Estudante: ${this.idade}
        `;
    }
}

const estudante_02 = new Estudante_02(9855, 'Bruno Lessa', 31);

console.log(estudante_02.retornarDadosEstudante());

/* ==================================================*/

class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante:number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;
    constructor(codigoEstudante:number, nomeEstudante: string, curso: string){
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosAluno(){
                return `
        Código do Aluno: ${this.codigoEstudante}.
        Nome do Estudante: ${this.nomeEstudante}
        Matéria do Estudante: ${this.curso}
        `;
    }
}

const estudante_03 = new Pessoa(112233, ' Bruno Lessa', 'Typescript');
console.log(estudante_03.retornarDadosAluno());