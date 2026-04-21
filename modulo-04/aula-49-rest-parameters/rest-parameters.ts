export {};

function somarNumeros( ... numeros: number[]){
    let total = 0;
    numeros.forEach((numero) => (total += numero));

    return total;
}

console.log(somarNumeros(30,20));
console.log(somarNumeros(70,30,50,30,20));

function listarFrutas(frase: string, ... frutas: string[]){
    return frase + ' ' + frutas.join(' , ');
}

console.log(
    listarFrutas(
        'Bruno, você precisa ir na feira para comprar ...:',
'🍎 maçã',
'🍌 banana',
'🍇 uva',
'🍓 morango',
 ));


 class Produtos {
    public exibirProdutos( ... produtos: string[]): void{
        for (const produto of produtos) {
            console.log(produto);
        }
    }
 };

 const departamentoInformatica: Produtos = new Produtos();
 console.log('Todos os produtos do departamento de Informatica disponíveis no estoque ...: ',
 );

 departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'USB',
    'Teclado',
    'WebCam',
 );