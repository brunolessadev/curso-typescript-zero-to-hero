export { };

let flor:string = 'tulipa';

switch (flor) {
    case 'rosa':
        console.log('Rosas são vermelhas');        
        break;

            case 'violeta':
        console.log('Violetas são azuis');        
        break;

            case 'tulipa':
        console.log('Tulipas são brancas');        
        break;

    default:
        console.log('Por favor, selecione uma outra flor!');  
        break;
}

let diaUtilSemana:number = 2;

switch (diaUtilSemana) {
    case 0:
        console.log('Domingo');        
        break;

            case 1:
        console.log('Segunda');        
        break;

            case 2:
        console.log('Terça');        
        break;

    default:
        console.log('Não é um dia');  
        break;
}
