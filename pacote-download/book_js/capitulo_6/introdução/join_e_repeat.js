const cities = ['Pelotas', 'São Paulo', 'Osasco']

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

console.log(`${'_'.repeat(40)} \n`) // REPETE 40 VEZES O CARACTER ESCOLHIDO. NO CASO: '_' (UNDERLINE)
console.log(cities.toString())
console.log(cities.join(' - '))