const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// FAZ UMA VARREDURA DO INÍCIO AO FIM EM BUSCA DA PRIMEIRA OCORRÊNCIA DO ELEMENTO E RETORNA SEU ÍNDICE
console.log(letters.indexOf('d'))

// FAZ UMA VARREDURA DO FIM AO INÍCIO EM BUSCA DA PRIMEIRA O OCORRÊNCIA DO ELEMENTO E RETORNA SEU ÍNDICE
console.log(letters.lastIndexOf('h'))

// RETORNA UM VALOR BOOLEAN APÓS VERIFICAR SE DETERMINADO CONTEÚDO SE ENCONTRA DENTRO DO ARRAY
console.log(letters.includes('e')) // true
console.log(letters.includes('o')) // false

/////////////////////////////////////////////////

const num = [4, 5, 6, 7, 8, 6, 5, 9, 8]

console.log(num.indexOf(5))
console.log(num.lastIndexOf(5))