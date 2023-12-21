const frm = document.querySelector('form')
const nota100 = document.getElementById('cem')
const nota50 = document.querySelector('h3#cinquenta')
const nota10 = document.getElementById('dez')
const rest0 = document.getElementById('resto')

frm.addEventListener('submit', (e) => {
    const saque = Number(frm.isaque.value) // 270 !!Math.floor ao invés de toFixed(0)!!
    const cem = Math.floor(saque / 100) //270 / 100 = 2 | sobra 70 
    const cinquenta = Math.floor((saque % 100) / 50) // 270 / 100 tem resto 70 / 50 = 1
    const dez = Math.floor(((saque % 100) % 50) / 10) // 270 / 100 resto 70 / 50 resto 20 / 10 = 2
    const resto = (((saque % 100) % 50) % 10) // 275 / 100 resto 75 > 75 / 50 resto 25 > 25 / 10 resto 5

    if (cem > 0) {
        nota100.innerText = `Notas de cem: ${cem}`
    }
    if (cinquenta > 0) {
        nota50.innerText = `Notas de cinquenta: ${cinquenta}`
    }
    
    if (dez > 0) {
        nota10.innerText = `Notas de dez: ${dez}`
    }

    if (resto <= 0) {
        rest0.innerText = ''
    } else {
        rest0.innerText = `Não há notas disponíveis para o valor restante: R$${resto.toFixed(2).replace('.', ',')}`
        rest0.style.fontSize = '18px'
        rest0.style.color = '#eb0606'
    }

    e.preventDefault()
})

console.log(100)