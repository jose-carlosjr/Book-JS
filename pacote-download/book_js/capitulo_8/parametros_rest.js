// FUNÇÃO COM ARGUMENTO REST '...'

const calcularMedia = (...notas) => {
    const num = notas.length // notas É UM ARRAY
    if (num == 0) {
        console.log('Informe, no mínimo, uma nota')
        return
    }

    let soma = 0 // ACUMULA A SOMA DAS NOTAS
    for (const nota of notas) {
        soma += nota // SOMA O VALOR DOS ARGUMENTOS
    }

    const media = soma / num
    console.log(`A média é: ${media.toFixed(1)}`)
}

calcularMedia(9, 4, 7, 8, 3) // A média é: 6.2
calcularMedia()              // Informe, no mínimo, uma nota