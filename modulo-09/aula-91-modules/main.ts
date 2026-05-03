
import { EmailValidator, ZipCodeValidator } from "./validators"; 

let email = 'bruno@gmail.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('12345');

console.log(`O cep 12345 é válido? ${result2}`);
