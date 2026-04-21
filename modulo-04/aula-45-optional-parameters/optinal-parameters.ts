export {};

function informarDadosPessoa( idPessoa: number, nome: string, email?: string){
    console.log(`Id Funcionário: ${idPessoa}, Nome:  ${nome}`);

    if (email != undefined ) console.log (`E-mail: ${email}`);
};

informarDadosPessoa(789456, 'Bruno Lessa');
informarDadosPessoa(45698213, 'Many', 'many@gmail.com');



function mensagemLog( mensagem : string, usuarioId ?: number){
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || `Usuário(a) não conectado(a)`);
}

mensagemLog(`Atualizar Página`);
mensagemLog(`Usuário(a) logado(a) com sucesso`, 778811);



type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade ?: number;
    email ?: string;
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 122333,
    nome: 'Bruno',
};

console.log(pessoa);