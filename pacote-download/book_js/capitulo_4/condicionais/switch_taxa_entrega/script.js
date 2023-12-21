const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    let bairro = frm.idbairro.value
    let taxa

    switch (bairro) {
        case 'Freguesia':
        case 'freguesia':
            taxa = 'R$ 5,00'
            break
        case 'Pirituba':
            taxa = 'R$ 7,00'
            break
        case 'Maristela':
        case 'Jandira':
            taxa = 'R$ 10,00'
            break
        default:
            taxa = 'Valor padrão: R$ 8,00'
    }

    resp.innerText = `Taxa de Entrega | ${taxa}`
    e.preventDefault()
})

frm.addEventListener('reset', (e) => {
    resp.innerText = ''
})