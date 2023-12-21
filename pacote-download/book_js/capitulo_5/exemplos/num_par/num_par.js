let num

do {
    num = Number(prompt('Digite um número: ')) // 30
    if (num == 0) {
        alert('Digite um número válido!')
    } else if (isNaN(num)) {
        alert('Digite um número!')
    }
} while (num == 0 || isNaN(num))

let pares = `Pares entre 1 e ${num}: `

for (let i = 2; i < num; i = i + 2) {
    pares = pares + i + ', '
} 

if (num % 2 == 0) {
    pares += num + '.'
}

alert(pares)