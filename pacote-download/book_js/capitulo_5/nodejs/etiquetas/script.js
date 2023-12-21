const frm = document.querySelector('form')
const resp1 = document.getElementById('produto')
const resp2 = document.getElementById('etiqueta')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const produto = frm.iproduto.value
    const etiqueta = Number(frm.ietiqueta.value)

    resp2.innerText = ''

    resp1.innerText = `Nome do produto: ${produto}`
    resp2.innerText = `Nº de Etiquetas: ${etiqueta} \n`

    for (let i = 1; i <= etiqueta / 2; i++) {
        resp2.innerText += `${produto.padEnd(20,'.')} ${produto.padEnd(20, '.')}`
    }

    if (etiqueta % 2 != 0) { // VERIFICA SE O NÚMERO DE ETIQUETAS É ÍMPAR
        resp2.innerText += `${produto}`
    }
})