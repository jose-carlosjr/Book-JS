let n1 = 6.6
let n2 = 9.4
let n3 = 2.7
let n4 = 5.3
let media = (n1 + n2+ n3 + n4) / 4

console.log(`nota 1: ${n1}
             nota 2: ${n2}
             nota 3: ${n3}
             nota 4: ${n4}
             Sua média é: ${media.toFixed(2)}`)

///////////////////////////////////////////////////////////////////////

// AS FUNÇÕES MATEMÁTICAS OU FUNÇÕES CRIADAS PELO USUÁRIO TÊM PRIORIDADES SOBRE OS DEMAIS OPERADORES ARITMÉTICOS
console.log(Math.sqrt(9) * 8 / 2)

// PARÊNTESES
let calculo = (20 + 30) * 2 / (7 - 3)
console.log(calculo)

/////////////////////////////////////////////

let x = (45 - 23) * 3 - Math.sqrt(144) / 4
let y = 37 % 4 + (45 * 5) / x + Math.pow(3 ,3)

console.log(y.toFixed(2))
console.log(Math.floor(y))
console.log(Math.ceil(y))
