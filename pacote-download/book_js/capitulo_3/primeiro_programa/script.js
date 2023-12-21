const prompt = require("prompt-sync")() // ADICIONA PACOTE PARA ENTRADA DE DADOS

const n1 = Number(prompt('1º número'))
const n2 = Number(prompt('2º número'))
const soma = n1 + n2

console.log(`A soma é: ${soma}`)