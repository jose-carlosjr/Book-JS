const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const n = Number(frm.inum.value) // NÚMERO ALVO: 28
    let sum = 0    // SOMA DE TODOS OS NÚMEROS DIVISÍVEIS PELO NÚMERO ALVO

    resp1.innerText = `Divisores do ${n}:`
    
    for (let i = n / 2; i >= 1; i--) {
        if (n % i == 0) {
            sum += i
            resp1.innerText += ` ${i}`
        }
    }
    resp1.innerText += ` (Soma: ${sum})`

    if (n == sum) {
        resp2.innerText = `${n} é um número perfeito`
    } else {
    resp2.innerText = `${n} não é um número perfeito`
    }
})
