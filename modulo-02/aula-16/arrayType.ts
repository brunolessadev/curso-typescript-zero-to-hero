let frutas: string[] = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas[2]);
 
let frutas1: Array<string> = ['abacaxi', 'laranja', 'maça', 'melancia', 'morango'];
console.log(frutas[3]);

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Francês');
console.log(idiomas);
idiomas.push('Alemão');
console.log(idiomas);

let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log(`Quantos itens tem no array: ${idiomas1.length}`);

let listaNumeros: Array<number> = [1, 2, 3, 4, 5];
listaNumeros = [... listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

let linguagensArray: string[] = new Array('JavaScript', 'TypeScript', 'Python', 'Java', 'C#');
function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}

funcaoLinguagens(linguagensArray);