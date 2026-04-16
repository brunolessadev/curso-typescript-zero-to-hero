"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let pessoa;
pessoa = ['João', 'Desenvolvedor', 30];
// pessoa = ['30', 'João', 'Desenvolvedor'];           //  {ERRO} A ordem dos tipos deve ser respeitada
console.log(pessoa);
let pessoa1;
pessoa1 = ['Maria', 'Designer', 25];
console.log(pessoa1[1]);
let pessoa2 = ['Carlos', 'Analista', 28];
//pessoa2 = ['Carlos', 'Analista', 28];
console.log(pessoa2);
let listaFrutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Abacaxi'];
// Para não precisar definir o número exato de elementos, podemos usar o operador rest (...).
//Lista de tuplas com stred opratior rest, onde o primeiro elemento é do tipo string e os demais elementos são do tipo string[] (array de strings).
console.log(listaFrutas);
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//Lista de tuplas com stred opratior rest, onde os dois primeiros elementos são do tipo number e boolean, respectivamente, e os demais elementos são do tipo string[] (array de strings).
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['João', 'Maria', 'Carlos'], [30, 25, 28]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('João', 'Silva', 'Santos'));
//# sourceMappingURL=tupleType.js.map