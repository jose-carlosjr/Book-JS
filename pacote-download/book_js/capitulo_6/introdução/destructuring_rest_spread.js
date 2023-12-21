const cars = []

cars.push({
    modelo: 'Uno',
    preco: 46500
})

for (const car of cars) {
    console.log(`${car.modelo} - ${car.preco}`)
}

// DESESTRUTURANDO OBJETO

for (const car of cars) {
    // OS ATRIBUTOS DO OBJ cars PASSAM A SER VARIÁVEIS LIVRES
    const {modelo, preco} = car // POR SE TRATAR DE OBJETOS USAMOS CHAVES
    console.log(`${modelo} - ${preco}`)
}

////////////////////////////////////////////////

// OBTENDO ELEMENTOS DE UM ARRAY ATRAVÉS DA DESESTRUTURAÇÃO

const patients = ['José', 'Maria', 'Josias', 'Arthur']
const [a, b, c] = patients // NÃO É NECESSÁRIO OBTER TODOS OS ELEMENTOS

console.log(a) // José
console.log(b) // Maria
console.log(c) // Josias

//////////////////////////////////////////////////

// OPERADOR rest -> "..."

const pacientes = ['Luana', 'Joice', 'Paula', 'Sofia']
const pacientes2 = pacientes.slice() // LEMBRANDO DO MÉTODO SLICE() | RETURNS A COPY OF A SECTION OF AN ARRAY
console.log(pacientes2)

//atender RECEBE O 1º ELEMENTO | proximo RECEBE O 2º | ...outros RECEBE OS DEMAIS ELEMENTOS, SEJA LÁ QUANTOS FOREM
const [atender, proximo, ...outros] = pacientes

console.log(atender) // Luana
console.log(proximo) // Joice
console.log(outros) // ['Paula', 'Sofia']

///////////////////////////////////////////////////

// OPERADOR spread -> "..." | USANDO UM OBJETO

const carro = {modelo: 'DoblÔ', preco: 60500}
const carro2 = {...carro, ano: 2010} // CAPTURA TODOS OS ELEMENTOS DO OBJ carro

console.log(carro2) // { modelo: 'DoblÔ', preco: 60500, ano: 2010 }

////////////////////////////////////////////////////

// OPERADOR spread -> "..." | USANDO UM ARRAY

let animes = ['HxH', 'One Piece'] // NÃO É POSSÍVEL REALIZAR UMA REATRIBUIÇÃO DE VALOR A UM ARRAY COM UMA VARIÁVEL const
animes = [...animes, 'Bleach'] // ACRESCENTA bleach AO FINAL DO ARRAY
animes = ['Naruto', ...animes] // ACRESCENTA Naruto NO COMEÇO DO ARRAY

console.log(animes) // [ 'Naruto', 'HxH', 'One Piece', 'Bleach' ]