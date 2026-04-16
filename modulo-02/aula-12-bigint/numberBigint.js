"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = 23.0;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b110001;
console.log(`Number - Ponto Flutuante`, num1, `é do tipo: `, typeof (num1));
console.log(`Number - Hexadecimal`, num2, `é do tipo: `, typeof (num2));
console.log(`Number - Octal`, num3, `é do tipo: `, typeof (num3));
console.log(`Number - Binário`, num4, `é do tipo: `, typeof (num4));
let big1 = 9007199254740991n;
let big2 = 0x1fffffffffffffn;
let big3 = 9007199254740991n;
let big4 = 140737488355327n;
console.log(`BigInt - Decimal`, big1, `é do tipo: `, typeof (big1));
console.log(`BigInt - Hexadecimal`, big2, `é do tipo: `, typeof (big2));
console.log(`BigInt - Octal`, big3, `é do tipo: `, typeof (big3));
console.log(`BigInt - Binário`, big4, `é do tipo: `, typeof (big4));
//# sourceMappingURL=numberBigint.js.map