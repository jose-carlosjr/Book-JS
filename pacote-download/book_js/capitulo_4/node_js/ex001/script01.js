const prompt = require("prompt-sync")({sigint: true})
console.log('CLUBE DE PESCA')
let pessoas = Number(prompt('Número de pessoas: ')) // 5
let peixes = Number(prompt('Número de peixes: ')) // 9

let valorPpessoa = pessoas * 20 // 100,00
let valorPpeixe

if (pessoas >= peixes) {
    console.log(`Valor Total: R$${valorPpessoa}`)
} else if ( peixes > pessoas) {
    valorPpeixe = (peixes - pessoas) * 12
    console.log(`Valor Total: R$${(Number(valorPpessoa) + Number(valorPpeixe)).toFixed(2)}`)
}