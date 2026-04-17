/*
enum Idioma {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
    Alemao,
}

console.log(Idioma);


enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}

console.log(Dia);


const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Salada,
    Sushi,
}

function comida(c:Comida){
    return 'Comidas muito apetitosas';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Salada));
console.log(comida(4));



const enum Comida {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Salada = 'Salada',
    Sushi = 'Sushi',
}

function comida(c:Comida){
    return 'Comidas muito apetitosas'
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Salada));
//console.log(comida(Comida(4)));

*/

enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id:1,
    status: Tarefa.Done,
    descricao: 'Tarefa concluida',
}

if (concluidaTarefa.status === Tarefa.Done) {
    console.log(`Enviar e-mail : ${concluidaTarefa.descricao}`);
}