const frm = document.querySelector('form')
const lados = document.getElementById('lados')
const tipo = document.getElementById('tipo')

frm.addEventListener('submit', (e) => {
    const ladoA = Number(frm.iladoA.value)
    const ladoB = Number(frm.iladoB.value)
    const ladoC = Number(frm.iladoC.value)

    if (ladoA + ladoB < ladoC || ladoB + ladoC < ladoA || ladoC + ladoA < ladoB) {
        lados.innerText = 'Lados não podem formar um triângulo'
        tipo.innerText = ''
    } else if (ladoA == ladoB && ladoB == ladoC) {
        lados.innerText = 'Lados podem formar um triângulo'
        tipo.innerText = 'Equilátero'
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        lados.innerText = 'Lados podem formar um triângulo'
        tipo.innerText = 'Isósceles'
    } else if (ladoA != ladoB && ladoB != ladoC) {
        lados.innerText = 'Lados podem formar um triângulo'
        tipo.innerText = 'Escaleno'
    }

    e.preventDefault()
})

frm.addEventListener('reset', (e) => {
    lados.innerText = ''
    tipo.innerText = ''
})