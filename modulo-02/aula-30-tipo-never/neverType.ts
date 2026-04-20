function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro de Mensagem - 01'))

function rejectMessage() {
    return error('Erro de Mensagem - 02')
}

console.log(rejectMessage());

const loopInfinito = function loop() {
    while(true){
        console.log('Oi, Developers!')
    }
        
};

console.log(loopInfinito());

const algumaCoisaVoid: void = null;
const algumaCoisaNever: never = null;

console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);