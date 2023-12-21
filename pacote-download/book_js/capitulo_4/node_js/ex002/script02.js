const prompt = require("prompt-sync")({sigint: true})

let total = Number(prompt('Valor total da compra: ')) // 72

let parcelaMin = Math.floor(total / 20) // 3 sobra 12
let valorFinal

if (parcelaMin >= 6) { // false
    valorFinal = total / 6
    console.log(`6 parcelas de R$${valorFinal.toFixed(2)}`)
} else if (parcelaMin < 6) {
    valorFinal = total / Number(parcelaMin)
    console.log(`${parcelaMin} parcelas de R$${valorFinal.toFixed(2)}`)
}
