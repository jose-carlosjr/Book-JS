const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const msg = frm.itext.value // compre parcelado

    for (let i = 0; i != msg.length; i++) {
        if (i % 2 == 1 || i == 1) {
            resp.innerText += `${msg.charAt(i)}`
        }

        if (msg.charAt(i) == ' ') { // PRECISO INCLUIR OS ESPAÇOS
            resp.innerText += `${msg.charAt(i)}`
        }
    }

    for (let i = 0; i != msg.length; i++) {
        if (i % 2 == 0 || i == 0) {
            resp.innerText += `${msg.charAt(i)}`
        }

        if (msg.charAt(i) == ' ') { // PRECISO INCLUIR OS ESPAÇOS
            resp.innerText += `${msg.charAt(i)}`
        }
    }
})