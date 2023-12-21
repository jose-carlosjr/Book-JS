const word = 'Brasileiro'
console.log(word)

const copia1 = word.substring(6) // CAPTURA TODOS OS CARACTERES A PARTIR DO ÍNDICE 6
console.log(copia1)

const copia2 = word.substr(-1) // CAPTURA ELEMENTOS CONTANDO DA DIREITA PARA A ESQUERDA | substr() está obsoleto
console.log(copia2)

const copia3 = word.substring(0, 6) // CAPTURA OS CARACTERES DO ÍNDICE 0 AO ÍNDICE 5
console.log(copia3)

// MÉTODO PARA OBTER O ÚLTIMO CARACTER DE UMA STRING

const lastOne = word.charAt(word.length - 1)
console.log(lastOne)

console.log('-'.repeat(40))

const copia4 = word.substring()
console.log(copia4)