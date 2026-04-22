export{};

class Funcionario{
    static contratacoes = 0;

    constructor(
        private nome: string, 
        private sobrenome: string, 
        private titulo: string
    ){
        // Nome da classe + nome da propriedade
        Funcionario.contratacoes++;
    }
}
/*
const funcionario_01 = new Funcionario('Bruno', 'Lessa', 'Estudante');
const funcionario_02 = new Funcionario('Leandro', 'Lessa', 'Estudante');
const funcionario_03 = new Funcionario('Diego', 'Lessa', 'Estudante');

console.log(Funcionario.contratacoes);
*/

/*===============================================================*/

class Funcionario_01{
    private static contratacoes = 0;

    constructor(
        private nome: string, 
        private sobrenome: string, 
        private titulo: string
    ){
        // Nome da classe + nome da propriedade
        Funcionario_01.contratacoes++;
    }
    public static retornarContratacoes(): number {
    return Funcionario_01.contratacoes;
}
}

const funcionario_01 = new Funcionario_01('Bruno', 'Lessa', 'Estudante');
const funcionario_02 = new Funcionario_01('Leandro', 'Lessa', 'Estudante');

// Nome da Classe + nome do Método

console.log(Funcionario_01.retornarContratacoes());

/*===============================================================*/
type Raca = 'Spitz Alemão' | 'Golden Retriever' | 'Labrador Retriever' | 'Poodle' | 'Border Collie';

class Cachorro{
    public nome: string;
    public idade : number;
    public raca: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;

    constructor(
        nome: string, 
        idade: number, 
        raca: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    public exibirInformacao(): void {
        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Raca: ${this.raca}
        `);
    }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Border Collie']);
const cachorro_03 = new Cachorro('Boby', 2, ['Golden Retriever']);