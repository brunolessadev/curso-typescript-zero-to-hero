export { };

const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Lessa',
    idade: 31,
    funcao: 'Estudante',
};

console.log(pessoa);

function onboarding01(funcionario: { nome: string}){
    return '1 Seja bem-vindo' + ' ' + funcionario.nome;
}
console.log(onboarding01({nome: 'Bruno Lessa'}));

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa){
    return (
        '2 Seja bem-vindo' + 
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
        '3 Seja bem-vindo' + 
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
        '4 Seja bem-vindo' + 
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


interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email : string;
}

function onborading05(pessoa: Pessoa05){
    return (
        '5 Seja bem-vindo' + 
        pessoa.nome +
        '!' + 
        'Sua função aqui na empresa será' +
        '.' +
        pessoa.funcao +
        '.' +
        'Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        'Seu e-mail será ' +
        pessoa.email 
    );
}

console.log(onborading05({ 
    nome: 'Bruno Lessa', 
    funcao: 'Estudante', 
    linguagem: 'JavaScript/Typescript', 
    email: 'brunolessa@gmail.com' 
}));

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number;
}

const filha: Filha = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 35
}

console.log(filha);

interface Cachorro {
    tipo:string;
}

interface Gato {
    tipo:string;
}

type Animal = Cachorro & Gato;

/* ===================================================================================== */

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: ' Bruno Lessa Usuario',
    email: 'bruno@gmail.com'
}

const admin: Admin = {
    nome: ' Bruno Lessa Admin',
    email: 'bruno@gmail.com',
    admin: true
}


function acessarSistema<T>(usuario: T){
    return usuario;
}
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

/*
function acessarSistema(usuario: Usuario): Usuario{
    return usuario;
}
*/
/*
console.log(acessarSistema(usuario));
*/