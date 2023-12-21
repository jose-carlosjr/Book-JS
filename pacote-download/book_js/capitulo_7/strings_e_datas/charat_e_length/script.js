const anuncio = prompt('AnúncIo: ') // EXEMPLO: OLÁ MUNDO! | 10 CARACTERES
let numPalavras = 0
const tamanho = anuncio.length // QUANTIDADE DE CARACTERES QUE A FRASE DO ANÚNCIO POSSUI

for (let i = 0; i < tamanho; i++) {
    /* 
        QUANDO O ÍNDICE QUE A VARIÁVEL DE CONTROLE ESTÁ PERCORRENDO FOR IGUAL A: ' ', OU SEJA, UM ESPAÇO
        SIGNIFICA QUE ESTAMOS INDO PARA OUTRA PALAVRA, LOGO numPalavras recebe 1.
    */
    if (anuncio.charAt(i) == ' ') {
        numPalavras++
    }
}

/*
    O + 1 APÓS numPalavras É PARA 'CORRIGIR' UM PROBLEMA INEVITÁVEL, VISTO QUE UMA FRASE QUE CONTENHA
    POR EXEMPLO 8 ESPAÇOS POSSUI, NECESSÁRIAMENTE, 9 PALAVRAS.
*/
alert(`Anúncio: ${anuncio}\nNº Palavras: ${numPalavras + 1}`)

////////////////////////////////////////////////////////////////////

// TAMBÉM PODEMOS UTILIZAR for... of

/*
    let numWords = 0

    for (let letra of anuncio) {
        if (letra == ' ') {
            numWords++
        }
    }
*/
