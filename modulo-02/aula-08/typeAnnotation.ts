let nome: string = "Bruno Lessa";
console.log(nome);

let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = {
    nome: 'Fusca',
    ano: 1973,
    preco: 8500,
};

console.log(carro);

function multiplicarNumero(num1: number, num2: number){
    return num1 * num2;
}

console.log(`Resultado ` + multiplicarNumero(5,2));