// O MÉTODO slice() NÃO MODIFICA O CONTEÚDO ORIGINAL DO VETOR
// O MÉTODO splice() NO ENTANTO, MODIFICA

const num = [1, 3, 7, 5, 9, 4, 8]
console.log(num)

const num59 = num.slice(3, 5) // CAPTURA O TERCEIRO E QUARTO ELEMENTO DO ARRAY
console.log(num59)

const ultimos2Num = num.slice(-2) // CAPTURA OS DOIS ÚLTIMOS ELEMENTOS DO ARRAY
console.log(ultimos2Num)

const excetoUltimoNum = num.slice(0, -1) // CAPTURA TODOS OS ELEMENTOS COM EXCESSÃO DO ÚLTIMO
console.log(excetoUltimoNum)

///////////////////////////////////////////

const retira = num.splice(2, 2) // A PARTIR DA SEGUNDA POSIÇÃO, REMOVE DOIS ELEMENTOS
console.log(retira) // A VARIÁVEL retira É SEMPRE UM ARRAY, MESMO COM UM OU ZERO ELEMENTOS
console.log(num)