// TEMPO GASTO EM UMA VIAGEM
let dias = 5
let horas = 20
let total

// CONVERTE OS DIAS DA VIAGEM EM HORAS | E SOMA COM AS HORAS RESTANTES
for (let n = 0; n <= dias; n++) {
    total = n * 24 + horas
}

// ENTREGA O TEMPO TOTAL GASTO CONVERTIDO EM HORAS
console.log(`O tempo total da viagem foi de ${total} horas`)

///////////////////////////////////////////////////////// OU

const days = prompt('Nº de dias: ')
const hours = prompt('Nº de horas: ')
const tot = (days * 24) + Number(hours)

window.alert(`O tempo gasto na viagem em horas foi de: ${tot} horas`)