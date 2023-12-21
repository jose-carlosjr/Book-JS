const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inum.value)
    resposta = ''

    for (let i = 0; i < numero; i = i + 2) {
        if (i + 1 != numero) {
            resposta += '*-'
        } else {
            resposta += '*'
            break
        }
    }

    resp.innerText = `${resposta}`
})