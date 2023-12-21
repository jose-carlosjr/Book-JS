const cardapio = '4 Pizzas, Frango, Calabresa, Atum, Mussarela'
console.log(cardapio)

// 
const partes = cardapio.split(',') 

console.log(partes)
console.log(partes[2])

const nome = 'jose carlos'
const part = nome.split(' ')
console.log(part + '\n')

/////////////////////////////////////////////////////////

const n0me = 'jose carlos pereira jr'

const parts = n0me.split(' ')
console.log(parts)

let email = ''
const tamanho = parts.length

for (let i = 0; i < tamanho - 1; i++) {
    email += parts[i].charAt(0)
}

console.log(email)