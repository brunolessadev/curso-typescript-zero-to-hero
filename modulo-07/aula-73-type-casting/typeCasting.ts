export{};

const valor: unknown = 'Olá, pessoa';
console.log((valor as string).length); //Convertendo de unknow para string com uso de casting

const nome: unknown = 'Bruno Lessa';
console.log((nome as string));

/*===============================================*/
const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length; //Convertendo de unknow para string com uso de casting (<>>);
console.log('O tamanho da string do carro é', tamanhoString);

