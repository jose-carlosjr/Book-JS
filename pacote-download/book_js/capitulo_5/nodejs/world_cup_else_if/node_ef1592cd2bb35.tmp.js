const prompt = require("prompt-sync")({sigint: true})
const ano = Number(prompt('Digite o ano: '))

do {
    if (ano == 0) {
        console.log('Fim do programa!')
        break
    } else if (ano < 1930 || ano > 2022 || ano == 1942 || ano == 1946) {
        console.log(`Não houve copa do mundo no ano de ${ano}`)
    } for (let i = 1930; i != ano; i = i + 4) {
        if (i == ano) {
            console.log(`Houve copa do mundo no ano de ${ano}`)
        }
    } 

} while (true)
