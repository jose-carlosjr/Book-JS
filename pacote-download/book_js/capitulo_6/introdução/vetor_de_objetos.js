// OBJETOS DENTRO DE VETORES

const cars = []

cars.push({
    marca: 'FIAT',
    modelo: 'Uno',
    preco: 46500
})

cars.push({
    marca: 'Volkswagen',
    modelo: 'Fox',
    preco: 66000
})

const marca = 'Audi'
const modelo = 'A8'
const preco = 93000

// OUTRO MODO DE ATRIBUIÇÃO DE DADOS DE UM OBJETO
cars.push({
    marca,
    modelo,
    preco
})
// OU cars.push({marca: marca, modelo: modelo, preco: preco})

for (const car of cars) {
    console.log(`${car.marca} | ${car.modelo} - ${car.preco}`)
}