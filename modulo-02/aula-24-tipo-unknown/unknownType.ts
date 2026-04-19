/*
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi, tudo bem?';

console.log(valorVariavel);


let valor: unknown;
let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;

*/

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());


if(typeof algumaCoisaUnknown === 'number') {
    console.log(algumaCoisaUnknown.toFixed());
}