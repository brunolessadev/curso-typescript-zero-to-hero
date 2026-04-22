export{};

abstract class Funcionario{
    constructor(private nome: string, private sobrenome: string){        
    }

    abstract retornarSalario(): number;
    get retornarNomeCompleto(): string{
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Sálario ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario{
    constructor(
        nome: string,
        sobrenome: string,
        private salario: number,
    ){
        super(nome, sobrenome);        
    }
    retornarSalario(): number {
        return this.salario;
    }    
}

class FujncionarioPJ extends Funcionario{
    constructor(
        nome: string,
        sobrenome: string,
        private valorHora: number,
        private horasTrabalhadas: number,
    ){
        super(nome, sobrenome);        
    }
    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}
//const funcionario = new Funcionario('Bruno', 'Lessa');

const bruno = new FuncionarioCLT('Bruno', 'Lessa', 18000);
const jana = new FujncionarioPJ('Jana', 'Oliveira', 150, 160);

console.log(bruno.emitirContraCheque());
console.log(jana.emitirContraCheque());