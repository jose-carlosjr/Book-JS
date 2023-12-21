const prompt = require("prompt-sync")({sigint: true})
const n1 = prompt('1º número: ')
const n2 = prompt('2º número: ')
const soma = Number(n1) + Number(n2)

console.log(`A soma é: ${soma}`)
