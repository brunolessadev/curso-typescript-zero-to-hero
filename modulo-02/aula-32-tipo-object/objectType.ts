export { };

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Lessa',
    idade: 31,
    funcao: 'Estudante',
};

console.log(pessoa);

function onboarding01(funcionario: { nome: string}){
    return 'Seja bem-vindo' + ' ' + funcionario.nome;
}
console.log(onboarding01({nome: 'Bruno Lessa'}));

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        'Seja bem-vindo' + 
        pessoa.nome +
        '!' + 
        'Sua função aqui na empresa será' +
        pessoa.funcao +
        '.'
    );
}
console.log(onboarding02({ nome: 'Bruno Lessa', funcao: 'Estudante' }));

type Pessoa03 = {
 nome: string;
 funcao: string;
 linguagem: string;
}

function onborading03(pessoa: Pessoa03){
    return (
        'Seja bem-vindo' + 
        pessoa.nome +
        '!' + 
        'Sua função aqui na empresa será' +
        '.' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.'
    );
}

console.log(onborading03({ nome: 'Bruno Lessa', funcao: 'Estudante', linguagem: 'JavaScript/Typescript' }));

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email ?: string;
}

function onborading04(pessoa: Pessoa04){
    return (
        'Seja bem-vindo' + 
        pessoa.nome +
        '!' + 
        'Sua função aqui na empresa será' +
        '.' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        pessoa.email 
    );
}

console.log(onborading04({ nome: 'Bruno Lessa', funcao: 'Estudante', linguagem: 'JavaScript/Typescript', email: 'brunolessa@gmail.com' }));