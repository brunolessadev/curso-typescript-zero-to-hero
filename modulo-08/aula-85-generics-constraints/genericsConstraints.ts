export {};

function juntarObjetos <U, V>(objeto: U, objeto2: V) {
    return {
        ...objeto, 
        ...objeto2,
    }
}

const pessoa = juntarObjetos( 
    {nome: 'Bruno'},
    {idade: 31},
);

/*
const pessoa2 = juntarObjetos( 
    {nome: 'Bruno'},
    31,
);
console.log(pessoa2);
*/
/*====================================================*/

function juntarObjetos2 <U extends object, V extends object>(objeto: U, objeto2: V) {
    return {
        ...objeto, 
        ...objeto2,
    }
}

const pessoa3 = juntarObjetos2( 
    {nome: 'Bruno'},
    {idade: 31},
);

/*========================================*/
/*
function prop<T, K>(objeto: T, chave: K){
    return objeto[chave];
}

*/
/*========================================*/

function prop2<T, K extends keyof T>(objeto: T, chave: K){
    return objeto[chave];
}

const  pessoa04 = prop2 (
    {nome: 'Bruno'},'nome'
);

console.log(pessoa04);

const  pessoa05 = prop2 (
    {idade: '31'},'idade'
);

console.log(pessoa05);