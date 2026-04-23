export {};

interface Animal_01 {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro_01 extends Animal_01 {
    raca: string;
}

const cachorro: Cachorro_01 = {
    nome: 'Many',
    idade: 6,
    porte: 'Pequeno',
    raca: 'Yorkshire com Linguiçinha',
}

console.log(cachorro);

interface Gato_01 extends Animal_01 {
    raca: string;
}

const gato: Gato_01 = {
    nome: 'Garfield',
    idade: 12,
    porte: 'Grande',
    raca: 'Persa',
}

console.log(gato);

/*===============================================================*/

interface Cachorro_02 {
    nome: string;
}

interface Gato_02 {
    nome: string;
}

interface Animal extends Cachorro_02, Gato_02 {
    idade: number;
}

const animal: Animal = {
    nome: 'Tom',
    idade: 10,
}

console.log(animal);

/*===============================================================*/

interface Funcionario_01 {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor_01 extends Omit<Funcionario_01, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguagemProgramacao: string;
}

const desenvolvedor_01: Desenvolvedor_01 = {
    id: 'ts-999',
    nome: 'Bruno Lessa',
    salario: '3k',
    linguagemProgramacao: 'TypeScript',
}

console.log(desenvolvedor_01);