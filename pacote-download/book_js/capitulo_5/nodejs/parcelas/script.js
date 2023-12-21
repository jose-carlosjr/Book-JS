const frm = document.querySelector('form')
const resp1 = document.getElementById('valor')
const resp2 = document.getElementById('parcela')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    resp1.innerText = ''
    resp2.innerText = ''

    const val = Number(frm.iconta.value)
    const nParcela = Number(frm.iparcela.value)
    const resto = Number(val % nParcela)
    const parcelas = Number(Math.floor(val / nParcela))

    resp1.innerText = `Valor: ${val.toFixed(2)}`

    for (let i = 1; i < nParcela; i++) {
        resp2.innerText += `${i}º Parcela: ${parcelas.toFixed(2)} \n`
    }

    resp2.innerText += `${nParcela}º Parcela: ${Number(parcelas + resto).toFixed(2)}`
})

frm.addEventListener('reset', (e) => {
    resp1.innerText = ''
    resp2.innerText = ''
})