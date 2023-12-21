const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

frm.addEventListener('submit', (e) => {
    const med = frm.inRemedio.value
    const preco = frm.inPreco.value

    //CALCULO PARA RETIRAR OS CENTAVOS DO PRODUTO
    const total = Math.floor(preco) + Math.floor(preco)

    resp1.innerText = `Promoção de ${med}`
    resp2.innerText = `Leve 2 por apenas R$ ${total}`

    e.preventDefault()
})

// IMPORTANTE: NÃO ESQUECER DE USAR O step="0.01" NO INPUT DO DOCUMENTO HTML