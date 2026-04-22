export {};

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario( new Date(1995));
//funcionario.dataNascimento = new Date(1995); // Não funciona

/*============================================*/

class Funcionario_01 {

    constructor(readonly dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}

/*============================================*/

class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor( nome: string, codigo: number){
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}

const func = new Funcionario_03('Bruno', 12233);
func.nome = 'Bruno Lessa';
//func.codigoFuncionario = 223344;

console.log(func);

/*============================================*/

interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;
}
/*
const funcionario_01: Readonly<IFuncionario> = {
    codigoFuncionario: 5066999,
    nomeEmpregado: 'Joger',
}

funcionario_01.codigoFuncionario = 12356;
funcionario_01.nomeEmpregado = 'Leandro';

*/
const funcionario_02: IFuncionario = {
    codigoFuncionario: 5066999,
    nomeEmpregado: 'Joger',
}

funcionario_02.codigoFuncionario = 12356;
funcionario_02.nomeEmpregado = 'Leandro';