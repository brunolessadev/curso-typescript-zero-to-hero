export {};

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade:number;
};

type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?:number;
};

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade:number;
};

type UsuarioMappedType = {
    [P in keyof Usuario] ?: Usuario[P];
};

const usuarioMapped: UsuarioMappedType = {
    nome: 'Bruno',
    endereco: 'Rua 1',
    telefone: '123456789',
    idade: 20
}

console.log(usuarioMapped);

/*===============================================================*/

interface Livro {
    titulo: string;
    autor: string;
    preco: number | null;
    numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    preco: 55.99,
    numeroPaginas: 325
};

//livro.autor = 'Bruno Lessa';