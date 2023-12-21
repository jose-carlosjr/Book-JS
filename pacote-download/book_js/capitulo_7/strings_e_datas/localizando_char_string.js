const word = 'palavra'

console.log(word.indexOf('a')) // ÍNDICE 1 | LEMBRANDO, SE TRATA DA PRIMEIRA OCORRÊNCIA
console.log(word.indexOf('v')) // ÍNDICE 4
console.log(word.lastIndexOf('a')) // ÍNDICE 6
console.log(word.indexOf('avra')) // ÍNDICE 3
console.log(word.includes('r')) // true
console.log(word.includes('e')) // false