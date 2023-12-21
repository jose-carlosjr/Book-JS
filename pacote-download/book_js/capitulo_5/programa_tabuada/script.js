const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inumero.value) // 9
    let resposta = "" // VARIÁVEL DO TIPO STRING PARA CONCATENAR A RESPOSTA

    for (let i = 1; i <= 10; i++) {
        // resposta = resposta + numero + ' x ' + i + ' = ' + (numero * i) + '\n'
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }

    resp.innerText = resposta
})