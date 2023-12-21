const prompt = require("prompt-sync")({sigint: true})

let n = Number(prompt('Digite uma centena: ')) // 128

if (n < 100 || n > 999) {
    console.log(`${n} não é uma centena`)
    return // O return SERVE PARA QUE O PROGRAMA RETORNE AO PONTO DE ORIGEM, SEM EXECUTAR O RESTANTE DOS COMANDOS
}

const n1 = ((n % 100) % 10) // TERCEIRO NÚMERO
const n2 = Math.floor((n % 100) / 10) // SEGUNDO NÚMERO
const n3 = Math.floor(n / 100) // PRIMEIRO NÚMERO

console.log(`Centena invertida: ${n1}${n2}${n3}`)