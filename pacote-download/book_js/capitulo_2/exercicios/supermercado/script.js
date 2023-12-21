const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

frm.addEventListener('submit', (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const total = (preco * 3) - preco / 2

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${(preco / 2).toFixed(2)}`

    e.preventDefault()
})