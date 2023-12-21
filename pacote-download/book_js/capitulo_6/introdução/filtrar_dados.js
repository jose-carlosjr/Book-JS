// LOCALIZANDO AS IDADES MAIORES OU IGUAIS A 18 DENTRO DO ARRAY

const idades = [12, 16, 24, 15, 19, 18, 9]

for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
    }
}

// CASO NÃO HAJA NENHUMA IDADE ACIMA DE 18

const ages = [12, 15, 9, 17, 3, 18]
let maiores = false

for (const age of ages) {
    if (age >= 18) {
        console.log(age)
        maiores = true
    }
}

if (!maiores == true) {
    console.log('Não há maiores de 18')
}