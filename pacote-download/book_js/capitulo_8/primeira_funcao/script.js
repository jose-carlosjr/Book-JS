// FUNÇÕES (MÉTODOS, MÓDULOS OU PROCEDURES)

const situacao = (nota, media) => {
    if (nota >= media) {
        alert('aprovado')
    } else {
        alert('reprovado')
    }
}

const prova1 = Number(prompt('Qual Nota: '))

situacao(prova1, 7)

/*
    PODERÍAMOS PRÉ ESTABELECER O VALOR DO PARÂMETRO NA CRIAÇÃO DA FUNÇÃO, OU SEJA, O VALOR default:
    const situacao = (nota, media = 7) => {}
*/

/* 
    OS TERMOS PARÂMETRO E ARGUMENTO SÃO UTILIZADOS PARA DENOMINAR AS VARIAVEIS PASSADAS NO MOMENTO
    DA CHAMADA DA FUNCÃO. HÁ UMA PEQUENA DIFERENÇA ENTRE ELES: OS NOMES DAS VARIAVEIS (nota E media)
    SÃO CHAMADOS DE PARÂMETROS, JÁ OS VALORES REAIS DESSES PARÂMETROS (O VALOR DA nota1 E O VALOR 7)
    SÃO CHAMADOS DE ARGUMENTOS DA FUNÇÃO. CONTUDO, NO GERAL, OS TERMOS PARÂMETROS E ARGUMENTOS SÃO
    UTILIZADOS INDISTINTAMENTE.
*/