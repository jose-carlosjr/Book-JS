const frm = document.querySelector('form')
const resp = document.getElementById('resp')

frm.addEventListener('submit', (e) => {    
    const kilo = Number(frm.inKilo.value)
    const grama = Number(frm.inGrama.value)

    const valor = (kilo / 1000) * grama
    resp.innerText = `Valor a pagar: RS ${valor.toFixed(2)}`

    e.preventDefault()
})