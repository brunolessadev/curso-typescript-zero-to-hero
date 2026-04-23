export = {};

type Pessoa = {
    nome: string;
    idade: number;
    endereco: string;
};

type Empresa = {
    nome: string;
    cnpj: string;
};

type EnderecoPessoa = {
    enderecoSecundario: string;
    cidade: string;
    pais: string;
};

type EnderecoEmpresa = {
    localizacao: 'rua' | 'avenida' | 'praca';
};

type EnderecoFinal <T> = T extends {endereco: string} ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPesoa: EnderecoFinal<Pessoa> = {
    enderecoSecundario: 'Rua 1', 
    cidade: 'Sao Paulo', 
    pais: 'Brasil'
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
    localizacao: 'rua'
};

console.log(enderecoPesoa);
console.log(enderecoEmpresa);

/*===============================================================*/

type FormatoArquivos = 'jpg' | 'png' | 'gif' | 'mp4' | 'mp3' | 'wma';

type FiltrarArquivoAudio<T> =  T extends 'mp4' | 'mp3' | 'wma' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivo:ArquivoAudio = 'mp3';

console.log(arquivo);