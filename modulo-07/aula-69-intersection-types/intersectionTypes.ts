export {};

interface DadosBancarios{
    conta:number;
    agencia: number;
    banco: string;
    tipoConta: string;
}

interface Cliente{
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

interface DadosPessoaJuridica {
    cnpj: number;
}

type DadosClientes = DadosBancarios & Cliente & (DadosPessoaFisica | DadosPessoaJuridica);

const dadosClientePoupanca: DadosClientes = {
    conta: 1234,
    agencia: 123,
    tipoConta: "Conta Poupança",
    banco: "Banco do Brasil",
    nome: "Joaquim",
    email: "j@j.com",
    cpf: 123456789,
};

console.log(dadosClientePoupanca);