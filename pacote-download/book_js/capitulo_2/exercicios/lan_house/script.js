const frm = document.querySelector('form')
const resp = document.getElementById('resp')

frm.addEventListener('submit', (e) => {
    const minuto = Number(frm.inMinuto.value)
    const tempo = Number(frm.inTempo.value)

    const total = Math.floor(tempo / 15) * minuto

    resp.innerText = `Valor a pagar R$: ${total.toFixed(2)}`

    e.preventDefault()
})