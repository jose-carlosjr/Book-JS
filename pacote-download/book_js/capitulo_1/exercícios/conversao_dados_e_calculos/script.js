let a = '20'
let b = 2

console.log(Number(a) + b) // TRANSFORMA A VARIÁVEL EM NUMBER
console.log(parseInt(a) + b)
console.log(parseFloat(a) + b)

console.log((a + b) + '\n')

////////////////////////////////////////////

let c = 50
let d = 60

console.log(c + d)
console.log(c.toString() + d + '\n') // TRANSFORMA A VARIÁVEL EM STRING

//////////////////////////////////////////////

const fruit = 'Mango'
const preco = 5.00
const levar = true
let novoPreco

console.log(`${typeof fruit}, ${typeof preco}, ${typeof levar}, ${typeof novoPreco} \n`)

///////////////////////////////////////////////

// CONFERE SE O NÚMERO É INTEIRO
let x = 5
let y = 5.5
let z = -10.9

console.log(Number.isInteger(x))
console.log(Number.isInteger(y))

if (Number.isInteger(z) == true) {
    console.log(`O número ${z} é inteiro`)
} else {
    console.log(`O número ${z} não é inteiro`)
}

////////////////////////////////////////////////

const num = prompt('Digite um número: ')
window.alert(`${num} elevado a 2 é: ${Math.pow(num, 2)}`)

///////////////////////////////////////////////////////////

const n1 = Number(prompt('Digite um número:'))
const n2 = Number(prompt('Digite um número:'))

window.alert(`Soma: ${n1 + n2} \nSubtração ${n1 - n2} \nMultiplicação ${n1 * n2} \nDivisão ${n1 / n2} \n`)

///////////////////////////////////////////////////////////