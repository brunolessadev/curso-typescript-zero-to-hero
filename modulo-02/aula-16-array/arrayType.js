"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let frutas = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas[2]);
let frutas1 = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas[3]);
let idiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Francês');
console.log(idiomas);
idiomas.push('Alemão');
console.log(idiomas);
let idiomas1 = ['Português', 'Inglês', 'Espanhol'];
console.log(`Quantos itens tem no array: ${idiomas1.length}`);
let listaNumeros = [1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
let linguagensArray = new Array('JavaScript', 'TypeScript', 'Python', 'Java', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
//# sourceMappingURL=arrayType.js.map