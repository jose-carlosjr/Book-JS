const nomes = ['jose', 'ana', 'bruno']
console.log(nomes.join(', ')) // jose, ana, bruno

nomes.sort() // COLOCA OS ELEMENTOS EM ORDEM ALFABÉTICA
console.log(nomes.join(', ')) // ana, bruno, jose

nomes.reverse() // INVERTE A ORDEM DOS ELEMENTOS
console.log(nomes.join(', ')) // jose, bruno, ana

console.log('_'.repeat(50))
/////////////////////////////////////////////////////////////

/* 
    UM DETALHE SOBRE O PROCESSO DE ORDENAÇÃO DE LISTAS EM JS É Q OS DADOS DO VETOR SÃO CLASSIFICADOS COMO STRINGS,
    MESMO Q SEU CONTEUDO SEJA FORMADO APENAS POR NUMEROS. ENTÃO MESMO COM O MÉTODO sort() O Nº 2 VIRIA DEPOIS DO Nº 100,
    PQ ELE CONTA DA ESQUERDA PARA A DIREITA, E O Nº 2 VEM DEPOIS DO 1. PARA CONTORNAR ESSA SITUAÇÃO DÁ PRA DEFINIR
    UMA FUNÇÃO Q SUBTRAIA OS DADOS, DE DOIS A DOIS, EM CADA COMPARAÇÃO.
*/

const numbers = [50, 100, 2, 250, 387, 3, 8]
console.log(numbers)

//numbers.sort()
//console.log(numbers.join(', '))

numbers.sort((a, b) => a - b)
console.log(numbers.join(', '))