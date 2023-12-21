const cities = ['Barueri', 'Rio Branco', 'Pelotas']
console.log(cities)

// for... of | O LAÇO DE REPETIÇÃO FAZ COM Q A VARIÁVEL city RECEBA TODOS OS ELEMENTOS DO ARRAY cities, UM POR VEZ, ATÉ ACABAR 
for (const city of cities) {
    console.log(city)
}

// forEach FAZ O MESMO, PORÉM É POSSÍVEL PROGRAMAR UMA FUNÇÃO A SER REALIZADA COM CADA ELEMENTO DO VETOR
cities.forEach((city, i) => {
    console.log(`${i + 1}ª Cidade: ${city}`)
})

//////////////////////////////////////////////////

// SOMA DE NÚMEROS DENTRO DE UM ARRAY

const numbers = [5, 10, 15, 20]
let soma = 0

// O MÉTODO forEach NÃO PERMITE INTERRUPÇÕES NO LAÇO. NÃO DÁ PRA USAR break E continue.

numbers.forEach(num => soma += num) // num É UM PARÂMETRO
console.log(`A soma dos números é: ${soma}`)
