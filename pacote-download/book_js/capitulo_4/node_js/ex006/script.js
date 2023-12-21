const frm = document.querySelector('form')
const tempo = document.getElementById('tempo')
const troco = document.getElementById('troco')

frm.addEventListener('submit', (e) => {
    const valor = Number(frm.ival.value)

    if (valor < 1) {
        window.alert('Valor Insuficiente! Valor mínimo: R$ 1,00')
    } 
    
    else if (valor == 1) {
        tempo.innerText = '30min'
        troco.innerText = ''
    } else if (valor >= 1 && valor < 1.75) {
        tempo.innerText = `30 min`
        let resto =  (valor % 1)
        troco.innerText = `Troco: R$ ${resto.toFixed(2).replace('.', ',')}`
    } 
    
    else if (valor == 1.75) {
        tempo.innerText = '60 min'
        troco.innerText = ''
    } else if (valor >= 1.75 && valor < 3) {
        tempo.innerText = '60 min'
        let resto = (valor % 1.75)
        troco.innerText = `Troco: R$ ${resto.toFixed(2).replace('.', ',')}`
    } 
    
    else if (valor == 3) {
        tempo.innerText = '120 min'
        troco.innerText = ''
    } else if (valor >= 3) {
        tempo.innerText = '120 min'
        let resto = (valor - 3)
        troco.innerText = `Troco: R$ ${resto.toFixed(2).replace('.', ',')}` 
    }

    e.preventDefault()
})

frm.addEventListener('reset', (e) => {
    tempo.innerText = ''
    troco.innerText = ''
})