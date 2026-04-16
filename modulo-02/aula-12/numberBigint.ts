let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(`Number - Ponto Flutuante`,num1, `é do tipo: `,typeof(num1));
console.log(`Number - Hexadecimal`,num2, `é do tipo: `,typeof(num2));
console.log(`Number - Octal`,num3, `é do tipo: `,typeof(num3));
console.log(`Number - Binário`,num4, `é do tipo: `,typeof(num4));

let big1: bigint = 9007199254740991n;
let big2: bigint = 0x1fffffffffffffn;
let big3: bigint = 0o377777777777777777n;
let big4: bigint = 0b11111111111111111111111111111111111111111111111n;

console.log(`BigInt - Decimal`,big1, `é do tipo: `,typeof(big1));
console.log(`BigInt - Hexadecimal`,big2, `é do tipo: `,typeof(big2));
console.log(`BigInt - Octal`,big3, `é do tipo: `,typeof(big3));
console.log(`BigInt - Binário`,big4, `é do tipo: `,typeof(big4));