const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const hora = Number(frm.iHoraBr.value)
    let horaFranca = hora + 5

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24
    }

    resp.innerText = `Horário na França: ${horaFranca.toFixed(2).replace('.', ':')}`

    e.preventDefault()
})